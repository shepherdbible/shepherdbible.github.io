import productsData from "../store/data/products.json";
import type { StoreProduct, StoreFilterOptions } from "../store/models/Offer";
import "../store/store_page.css";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x300?text=No+Image+Available";

const COUNTRIES = [
  { code: "PH", label: "Philippines (PH)" },
  { code: "US", label: "United States (US)" },
  { code: "GB", label: "United Kingdom (GB)" },
  { code: "CA", label: "Canada (CA)" },
  { code: "AU", label: "Australia (AU)" },
];

export class StorePage {
  private products: StoreProduct[] = productsData as StoreProduct[];
  private activeModalProduct: StoreProduct | null = null;

  private filters: StoreFilterOptions = {
    searchQuery: "",
    selectedVersion: "ALL",
    selectedFormat: "ALL",
    selectedCountry: this.detectSyncCountryFallback(),
    sortBy: "featured",
  };

  // Synchronous fallback for immediate render
  private detectSyncCountryFallback(): string {
    const saved = localStorage.getItem("shepherd_store_country");
    if (saved) return saved;

    const lang = navigator.language || "";
    if (lang.includes("PH")) return "PH";
    if (lang.includes("GB")) return "GB";
    if (lang.includes("CA")) return "CA";
    if (lang.includes("AU")) return "AU";
    return "US";
  }

  // Asynchronous IP detection
  private async detectLocalCountryViaAPI(): Promise<void> {
    if (localStorage.getItem("shepherd_store_country")) {
      return; // Respect the user's previously saved preference
    }

    try {
      const response = await fetch("https://ipapi.co/json/");
      if (response.ok) {
        const data = await response.json();
        const countryCode = data.country_code || data.country;

        // Only update if the detected country is in our supported list
        if (COUNTRIES.some((c) => c.code === countryCode)) {
          this.filters.selectedCountry = countryCode;
          localStorage.setItem("shepherd_store_country", countryCode);

          // Update the UI dropdown
          const countrySelect = document.getElementById(
            "store-country",
          ) as HTMLSelectElement;
          if (countrySelect) {
            countrySelect.value = countryCode;
          }

          // Refresh the grid with the newly detected local country
          this.updateGrid();
        }
      }
    } catch (error) {
      console.warn(
        "Could not detect country via IP API. Falling back to default.",
        error,
      );
    }
  }

  public render(): string {
    return /* html */ `
      <div class="store-container" id="store-page-root">
       <header class="store-header">
          <h1>Bible Store Catalog</h1>
          <p class="store-subtitle">Discover physical Bibles and find retailer options for your region.</p>

          <p class="store-motto">
            Let Us Bring a Bible to Every Home
          </p>

          <blockquote class="store-quote">
            “Thy word is a lamp unto my feet, and a light unto my path.”
            <footer class="store-quote-author">
              — Psalm 119:105 (KJV)
            </footer>
          </blockquote>
        </header>

        <section class="store-controls" aria-label="Catalog Filters">
          <input 
            type="search" 
            class="store-search-input" 
            id="store-search" 
            placeholder="Search title, version, description..." 
            value="${this.filters.searchQuery}"
          />

          <select class="store-select" id="store-country">
            ${COUNTRIES.map(
              (c) => `
              <option value="${c.code}" ${c.code === this.filters.selectedCountry ? "selected" : ""}>
                ${c.label}
              </option>
            `,
            ).join("")}
          </select>

          <select class="store-select" id="store-version">
  <option value="ALL">All Books</option>

  <optgroup label="Bible Translations">
    <option value="KJV">KJV</option>
    <option value="NIV">NIV</option>
    <option value="ESV">ESV</option>
    <option value="NKJV">NKJV</option>
  </optgroup>

  <optgroup label="Christian Books">
    <option value="CHRISTIAN_LIVING">Christian Living</option>
    <option value="DEVOTIONAL">Devotionals</option>
    <option value="BIBLE_STUDY">Bible Study</option>
    <option value="CHURCH_LEADERSHIP">Church & Leadership</option>
  </optgroup>
</select>

          <select class="store-select" id="store-format">
            <option value="ALL">All Formats</option>
            <option value="Hardcover">Hardcover</option>
            <option value="Paperback">Paperback</option>
            <option value="Leather-bound">Leather-bound</option>
            <option value="Study Bible">Study Bible</option>
          </select>

          <select class="store-select" id="store-sort">
            <option value="featured">Featured Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </section>

        <section class="store-grid" id="store-grid-container"></section>
        <div id="store-modal-container"></div>
      </div>
    `;
  }

  public mount(): void {
    this.attachEventListeners();
    this.updateGrid();

    // Trigger async IP detection after mounting
    this.detectLocalCountryViaAPI();
  }

  private attachEventListeners(): void {
    const root = document.getElementById("store-page-root");
    if (!root) return;

    const searchInput = root.querySelector("#store-search") as HTMLInputElement;
    searchInput?.addEventListener("input", (e) => {
      this.filters.searchQuery = (e.target as HTMLInputElement).value;
      this.updateGrid();
    });

    const countrySelect = root.querySelector(
      "#store-country",
    ) as HTMLSelectElement;
    countrySelect?.addEventListener("change", (e) => {
      this.filters.selectedCountry = (e.target as HTMLSelectElement).value;
      localStorage.setItem(
        "shepherd_store_country",
        this.filters.selectedCountry,
      );
      this.updateGrid();
    });

    const versionSelect = root.querySelector(
      "#store-version",
    ) as HTMLSelectElement;
    versionSelect?.addEventListener("change", (e) => {
      this.filters.selectedVersion = (e.target as HTMLSelectElement).value;
      this.updateGrid();
    });

    const formatSelect = root.querySelector(
      "#store-format",
    ) as HTMLSelectElement;
    formatSelect?.addEventListener("change", (e) => {
      this.filters.selectedFormat = (e.target as HTMLSelectElement).value;
      this.updateGrid();
    });

    const sortSelect = root.querySelector("#store-sort") as HTMLSelectElement;
    sortSelect?.addEventListener("change", (e) => {
      this.filters.sortBy = (e.target as HTMLSelectElement)
        .value as StoreFilterOptions["sortBy"];
      this.updateGrid();
    });
  }

  private getFilteredProducts(): StoreProduct[] {
    return this.products
      .filter((p) => {
        const query = this.filters.searchQuery.toLowerCase();
        const matchesSearch =
          !query ||
          p.title.toLowerCase().includes(query) ||
          p.version.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query);

        const matchesVersion =
          this.filters.selectedVersion === "ALL" ||
          p.version === this.filters.selectedVersion;
        const matchesFormat =
          this.filters.selectedFormat === "ALL" ||
          p.format === this.filters.selectedFormat;

        return matchesSearch && matchesVersion && matchesFormat;
      })
      .sort((a, b) => {
        if (this.filters.sortBy === "featured") return 0;

        const offerA = a.offers.find(
          (o) => o.country === this.filters.selectedCountry,
        );
        const offerB = b.offers.find(
          (o) => o.country === this.filters.selectedCountry,
        );

        const priceA = offerA?.price ?? Infinity;
        const priceB = offerB?.price ?? Infinity;

        return this.filters.sortBy === "price-asc"
          ? priceA - priceB
          : priceB - priceA;
      });
  }

  private updateGrid(): void {
    const gridEl = document.getElementById("store-grid-container");
    if (!gridEl) return;

    const filtered = this.getFilteredProducts();

    if (filtered.length === 0) {
      gridEl.innerHTML = `<p class="no-results">No Bibles matched your search criteria. Try relaxing your filters.</p>`;
      return;
    }

    gridEl.innerHTML = filtered
      .map((product) => {
        // Find the offer for the selected country, or fall back to the very first offer available
        const activeOffer = product.offers.find(
          (o) => o.country === this.filters.selectedCountry,
        );
        const fallbackOffer =
          product.offers.length > 0 ? product.offers[0] : null;
        const displayOffer = activeOffer || fallbackOffer;

        const primaryImage = product.images[0] || FALLBACK_IMAGE;

        return /* html */ `
        <article class="product-card" data-id="${product.id}">
          <div class="product-img-wrapper view-details-img" data-id="${product.id}" style="cursor: pointer;">
            <img 
              src="${primaryImage}" 
              alt="${product.title}" 
              class="product-img" 
              loading="lazy"
              onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
            />
          </div>
          <div class="product-info">
            <span class="product-badge">${product.version} ${product.format ? `• ${product.format}` : ""}</span>
            <h2 class="product-title" style="cursor: pointer;" data-id="${product.id}">${product.title}</h2>
            <p class="product-desc">${product.description}</p>
            <div class="product-price-section">
              <span class="product-price">
                ${
                  displayOffer && displayOffer.price !== null
                    ? `${displayOffer.currency} ${displayOffer.price.toFixed(2)}${!activeOffer ? `<span style="font-size: 0.75rem; color: var(--color-text-muted, #666); font-weight: normal;">(${displayOffer.country})</span>` : ""}`
                    : "Not available"
                }
              </span>
              <div style="display: flex; gap: 0.5rem;">
                ${
                  displayOffer
                    ? `<a href="${displayOffer.productUrl}" target="_blank" rel="noopener noreferrer" class="product-btn" style="text-decoration: none;">
                      ${!activeOffer ? `Buy in ${displayOffer.country}` : "View Store"}
                     </a>
                     <button class="product-btn view-details-btn" data-id="${product.id}" style="background: var(--color-surface, #fff); color: var(--color-text, #333); border: 1px solid var(--color-border, #ccc);">Details</button>`
                    : `<button class="product-btn view-details-btn" data-id="${product.id}">Details</button>`
                }
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    // Attach detail modal to image, title, and detail buttons
    gridEl
      .querySelectorAll(".view-details-img, .product-title, .view-details-btn")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = (e.currentTarget as HTMLElement).getAttribute("data-id");
          if (!id) return;
          const prod = this.products.find((p) => p.id === id);
          if (prod) this.openDetailModal(prod);
        });
      });
  }

  private openDetailModal(product: StoreProduct): void {
    this.activeModalProduct = product;
    const modalContainer = document.getElementById("store-modal-container");
    if (!modalContainer) return;

    const images =
      product.images.length > 0 ? product.images : [FALLBACK_IMAGE];

    modalContainer.innerHTML = /* html */ `
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" id="modal-close">&times;</button>
          
          <div class="modal-body">
            <div class="modal-gallery">
              <img 
                id="modal-main-img" 
                src="${images[0]}" 
                alt="${product.title}" 
                style="width: 100%; aspect-ratio: 4/3; object-fit: contain; border-radius: 6px;"
                onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
              />
              ${
                images.length > 1
                  ? `
                <div class="gallery-thumbnails">
                  ${images
                    .map(
                      (img, idx) => `
                    <img 
                      src="${img}" 
                      class="gallery-thumb ${idx === 0 ? "active" : ""}" 
                      data-idx="${idx}"
                      onerror="this.onerror=null;this.src='${FALLBACK_IMAGE}';"
                    />
                  `,
                    )
                    .join("")}
                </div>
              `
                  : ""
              }
            </div>

            <h2 id="modal-title" style="margin-top: 1rem;">${product.title} (${product.version})</h2>
            <!-- Added white-space: pre-line to preserve JSON line breaks -->
<p style="white-space: pre-line; line-height: 1.6; color: var(--color-text-muted, #475569);">
  ${product.description}
</p>

            <h3 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">Retailer Offers</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              ${product.offers
                .map(
                  (offer) => `
                <li style="padding: 1rem 0; border-bottom: 1px solid var(--color-border-subtle, #eee); display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; align-items: center;">
                  <span><strong>[${offer.country}]</strong>${offer.retailer}<br/>
                  <small style="color: var(--color-text-muted, #666);">${offer.price !== null ? `${offer.currency} ${offer.price.toFixed(2)}` : "Check Site for Pricing"}</small></span>
                  <a href="${offer.productUrl}" target="_blank" rel="noopener noreferrer" class="product-btn" style="text-decoration: none;">
                    Shop at Retailer &rarr;
                  </a>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    `;

    modalContainer
      .querySelector("#modal-close")
      ?.addEventListener("click", () => this.closeModal());
    modalContainer
      .querySelector("#modal-overlay")
      ?.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).id === "modal-overlay") this.closeModal();
      });

    modalContainer.querySelectorAll(".gallery-thumb").forEach((thumb) => {
      thumb.addEventListener("click", (e) => {
        const idx = parseInt(
          (e.currentTarget as HTMLElement).getAttribute("data-idx") || "0",
        );
        const mainImg = modalContainer.querySelector(
          "#modal-main-img",
        ) as HTMLImageElement;
        if (mainImg) mainImg.src = images[idx];

        modalContainer
          .querySelectorAll(".gallery-thumb")
          .forEach((t) => t.classList.remove("active"));
        (e.currentTarget as HTMLElement).classList.add("active");
      });
    });
  }

  private closeModal(): void {
    const modalContainer = document.getElementById("store-modal-container");
    if (modalContainer) modalContainer.innerHTML = "";
    this.activeModalProduct = null;
  }
}
