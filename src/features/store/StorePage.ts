import productsData from "../store/data/products.json";
import type { StoreProduct, StoreFilterOptions } from "../store/models/Offer";
import "../store/store_page.css";
import QRCode from "qrcode";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x300?text=No+Image+Available";

const COUNTRIES = [
  { code: "AF", label: "Afghanistan (AF)" },
  { code: "AX", label: "Aland Islands (AX)" },
  { code: "AL", label: "Albania (AL)" },
  { code: "DZ", label: "Algeria (DZ)" },
  { code: "AS", label: "American Samoa (AS)" },
  { code: "AD", label: "Andorra (AD)" },
  { code: "AO", label: "Angola (AO)" },
  { code: "AI", label: "Anguilla (AI)" },
  { code: "AQ", label: "Antarctica (AQ)" },
  { code: "AG", label: "Antigua and Barbuda (AG)" },
  { code: "AR", label: "Argentina (AR)" },
  { code: "AM", label: "Armenia (AM)" },
  { code: "AW", label: "Aruba (AW)" },
  { code: "AU", label: "Australia (AU)" },
  { code: "AT", label: "Austria (AT)" },
  { code: "AZ", label: "Azerbaijan (AZ)" },
  { code: "BS", label: "Bahamas (BS)" },
  { code: "BH", label: "Bahrain (BH)" },
  { code: "BD", label: "Bangladesh (BD)" },
  { code: "BB", label: "Barbados (BB)" },
  { code: "BY", label: "Belarus (BY)" },
  { code: "BE", label: "Belgium (BE)" },
  { code: "BZ", label: "Belize (BZ)" },
  { code: "BJ", label: "Benin (BJ)" },
  { code: "BM", label: "Bermuda (BM)" },
  { code: "BT", label: "Bhutan (BT)" },
  { code: "BO", label: "Bolivia (BO)" },
  { code: "BA", label: "Bosnia and Herzegovina (BA)" },
  { code: "BW", label: "Botswana (BW)" },
  { code: "BR", label: "Brazil (BR)" },
  { code: "IO", label: "British Indian Ocean Territory (IO)" },
  { code: "BN", label: "Brunei Darussalam (BN)" },
  { code: "BG", label: "Bulgaria (BG)" },
  { code: "BF", label: "Burkina Faso (BF)" },
  { code: "BI", label: "Burundi (BI)" },
  { code: "KH", label: "Cambodia (KH)" },
  { code: "CM", label: "Cameroon (CM)" },
  { code: "CA", label: "Canada (CA)" },
  { code: "CV", label: "Cape Verde (CV)" },
  { code: "KY", label: "Cayman Islands (KY)" },
  { code: "CF", label: "Central African Republic (CF)" },
  { code: "TD", label: "Chad (TD)" },
  { code: "CL", label: "Chile (CL)" },
  { code: "CN", label: "China (CN)" },
  { code: "CX", label: "Christmas Island (CX)" },
  { code: "CC", label: "Cocos (Keeling) Islands (CC)" },
  { code: "CO", label: "Colombia (CO)" },
  { code: "KM", label: "Comoros (KM)" },
  { code: "CG", label: "Congo (CG)" },
  { code: "CD", label: "Congo, Democratic Republic (CD)" },
  { code: "CK", label: "Cook Islands (CK)" },
  { code: "CR", label: "Costa Rica (CR)" },
  { code: "CI", label: "Cote D'Ivoire (CI)" },
  { code: "HR", label: "Croatia (HR)" },
  { code: "CU", label: "Cuba (CU)" },
  { code: "CY", label: "Cyprus (CY)" },
  { code: "CZ", label: "Czech Republic (CZ)" },
  { code: "DK", label: "Denmark (DK)" },
  { code: "DJ", label: "Djibouti (DJ)" },
  { code: "DM", label: "Dominica (DM)" },
  { code: "DO", label: "Dominican Republic (DO)" },
  { code: "EC", label: "Ecuador (EC)" },
  { code: "EG", label: "Egypt (EG)" },
  { code: "SV", label: "El Salvador (SV)" },
  { code: "GQ", label: "Equatorial Guinea (GQ)" },
  { code: "ER", label: "Eritrea (ER)" },
  { code: "EE", label: "Estonia (EE)" },
  { code: "ET", label: "Ethiopia (ET)" },
  { code: "FK", label: "Falkland Islands (FK)" },
  { code: "FO", label: "Faroe Islands (FO)" },
  { code: "FJ", label: "Fiji (FJ)" },
  { code: "FI", label: "Finland (FI)" },
  { code: "FR", label: "France (FR)" },
  { code: "GF", label: "French Guiana (GF)" },
  { code: "PF", label: "French Polynesia (PF)" },
  { code: "GA", label: "Gabon (GA)" },
  { code: "GM", label: "Gambia (GM)" },
  { code: "GE", label: "Georgia (GE)" },
  { code: "DE", label: "Germany (DE)" },
  { code: "GH", label: "Ghana (GH)" },
  { code: "GI", label: "Gibraltar (GI)" },
  { code: "GR", label: "Greece (GR)" },
  { code: "GL", label: "Greenland (GL)" },
  { code: "GD", label: "Grenada (GD)" },
  { code: "GP", label: "Guadeloupe (GP)" },
  { code: "GU", label: "Guam (GU)" },
  { code: "GT", label: "Guatemala (GT)" },
  { code: "GG", label: "Guernsey (GG)" },
  { code: "GN", label: "Guinea (GN)" },
  { code: "GW", label: "Guinea-Bissau (GW)" },
  { code: "GY", label: "Guyana (GY)" },
  { code: "HT", label: "Haiti (HT)" },
  { code: "VA", label: "Holy See (Vatican City) (VA)" },
  { code: "HN", label: "Honduras (HN)" },
  { code: "HK", label: "Hong Kong (HK)" },
  { code: "HU", label: "Hungary (HU)" },
  { code: "IS", label: "Iceland (IS)" },
  { code: "IN", label: "India (IN)" },
  { code: "ID", label: "Indonesia (ID)" },
  { code: "IR", label: "Iran (IR)" },
  { code: "IQ", label: "Iraq (IQ)" },
  { code: "IE", label: "Ireland (IE)" },
  { code: "IM", label: "Isle of Man (IM)" },
  { code: "IL", label: "Israel (IL)" },
  { code: "IT", label: "Italy (IT)" },
  { code: "JM", label: "Jamaica (JM)" },
  { code: "JP", label: "Japan (JP)" },
  { code: "JE", label: "Jersey (JE)" },
  { code: "JO", label: "Jordan (JO)" },
  { code: "KZ", label: "Kazakhstan (KZ)" },
  { code: "KE", label: "Kenya (KE)" },
  { code: "KI", label: "Kiribati (KI)" },
  { code: "KP", label: "Korea, North (KP)" },
  { code: "KR", label: "Korea, South (KR)" },
  { code: "KW", label: "Kuwait (KW)" },
  { code: "KG", label: "Kyrgyzstan (KG)" },
  { code: "LA", label: "Laos (LA)" },
  { code: "LV", label: "Latvia (LV)" },
  { code: "LB", label: "Lebanon (LB)" },
  { code: "LS", label: "Lesotho (LS)" },
  { code: "LR", label: "Liberia (LR)" },
  { code: "LY", label: "Libya (LY)" },
  { code: "LI", label: "Liechtenstein (LI)" },
  { code: "LT", label: "Lithuania (LT)" },
  { code: "LU", label: "Luxembourg (LU)" },
  { code: "MO", label: "Macao (MO)" },
  { code: "MK", label: "North Macedonia (MK)" },
  { code: "MG", label: "Madagascar (MG)" },
  { code: "MW", label: "Malawi (MW)" },
  { code: "MY", label: "Malaysia (MY)" },
  { code: "MV", label: "Maldives (MV)" },
  { code: "ML", label: "Mali (ML)" },
  { code: "MT", label: "Malta (MT)" },
  { code: "MH", label: "Marshall Islands (MH)" },
  { code: "MQ", label: "Martinique (MQ)" },
  { code: "MR", label: "Mauritania (MR)" },
  { code: "MU", label: "Mauritius (MU)" },
  { code: "YT", label: "Mayotte (YT)" },
  { code: "MX", label: "Mexico (MX)" },
  { code: "FM", label: "Micronesia (FM)" },
  { code: "MD", label: "Moldova (MD)" },
  { code: "MC", label: "Monaco (MC)" },
  { code: "MN", label: "Mongolia (MN)" },
  { code: "ME", label: "Montenegro (ME)" },
  { code: "MS", label: "Montserrat (MS)" },
  { code: "MA", label: "Morocco (MA)" },
  { code: "MZ", label: "Mozambique (MZ)" },
  { code: "MM", label: "Myanmar (MM)" },
  { code: "NA", label: "Namibia (NA)" },
  { code: "NR", label: "Nauru (NR)" },
  { code: "NP", label: "Nepal (NP)" },
  { code: "NL", label: "Netherlands (NL)" },
  { code: "NC", label: "New Caledonia (NC)" },
  { code: "NZ", label: "New Zealand (NZ)" },
  { code: "NI", label: "Nicaragua (NI)" },
  { code: "NE", label: "Niger (NE)" },
  { code: "NG", label: "Nigeria (NG)" },
  { code: "NU", label: "Niue (NU)" },
  { code: "NF", label: "Norfolk Island (NF)" },
  { code: "MP", label: "Northern Mariana Islands (MP)" },
  { code: "NO", label: "Norway (NO)" },
  { code: "OM", label: "Oman (OM)" },
  { code: "PK", label: "Pakistan (PK)" },
  { code: "PW", label: "Palau (PW)" },
  { code: "PS", label: "Palestine (PS)" },
  { code: "PA", label: "Panama (PA)" },
  { code: "PG", label: "Papua New Guinea (PG)" },
  { code: "PY", label: "Paraguay (PY)" },
  { code: "PE", label: "Peru (PE)" },
  { code: "PH", label: "Philippines (PH)" },
  { code: "PN", label: "Pitcairn (PN)" },
  { code: "PL", label: "Poland (PL)" },
  { code: "PT", label: "Portugal (PT)" },
  { code: "PR", label: "Puerto Rico (PR)" },
  { code: "QA", label: "Qatar (QA)" },
  { code: "RE", label: "Reunion (RE)" },
  { code: "RO", label: "Romania (RO)" },
  { code: "RU", label: "Russia (RU)" },
  { code: "RW", label: "Rwanda (RW)" },
  { code: "BL", label: "Saint Barthelemy (BL)" },
  { code: "SH", label: "Saint Helena (SH)" },
  { code: "KN", label: "Saint Kitts and Nevis (KN)" },
  { code: "LC", label: "Saint Lucia (LC)" },
  { code: "MF", label: "Saint Martin (MF)" },
  { code: "PM", label: "Saint Pierre and Miquelon (PM)" },
  { code: "VC", label: "Saint Vincent and the Grenadines (VC)" },
  { code: "WS", label: "Samoa (WS)" },
  { code: "SM", label: "San Marino (SM)" },
  { code: "ST", label: "Sao Tome and Principe (ST)" },
  { code: "SA", label: "Saudi Arabia (SA)" },
  { code: "SN", label: "Senegal (SN)" },
  { code: "RS", label: "Serbia (RS)" },
  { code: "SC", label: "Seychelles (SC)" },
  { code: "SL", label: "Sierra Leone (SL)" },
  { code: "SG", label: "Singapore (SG)" },
  { code: "SX", label: "Sint Maarten (SX)" },
  { code: "SK", label: "Slovakia (SK)" },
  { code: "SI", label: "Slovenia (SI)" },
  { code: "SB", label: "Solomon Islands (SB)" },
  { code: "SO", label: "Somalia (SO)" },
  { code: "ZA", label: "South Africa (ZA)" },
  { code: "GS", label: "South Georgia and the South Sandwich Islands (GS)" },
  { code: "SS", label: "South Sudan (SS)" },
  { code: "ES", label: "Spain (ES)" },
  { code: "LK", label: "Sri Lanka (LK)" },
  { code: "SD", label: "Sudan (SD)" },
  { code: "SR", label: "Suriname (SR)" },
  { code: "SJ", label: "Svalbard and Jan Mayen (SJ)" },
  { code: "SZ", label: "Eswatini (SZ)" },
  { code: "SE", label: "Sweden (SE)" },
  { code: "CH", label: "Switzerland (CH)" },
  { code: "SY", label: "Syria (SY)" },
  { code: "TW", label: "Taiwan (TW)" },
  { code: "TJ", label: "Tajikistan (TJ)" },
  { code: "TZ", label: "Tanzania (TZ)" },
  { code: "TH", label: "Thailand (TH)" },
  { code: "TL", label: "Timor-Leste (TL)" },
  { code: "TG", label: "Togo (TG)" },
  { code: "TK", label: "Tokelau (TK)" },
  { code: "TO", label: "Tonga (TO)" },
  { code: "TT", label: "Trinidad and Tobago (TT)" },
  { code: "TN", label: "Tunisia (TN)" },
  { code: "TR", label: "Turkey (TR)" },
  { code: "TM", label: "Turkmenistan (TM)" },
  { code: "TC", label: "Turks and Caicos Islands (TC)" },
  { code: "TV", label: "Tuvalu (TV)" },
  { code: "UG", label: "Uganda (UG)" },
  { code: "UA", label: "Ukraine (UA)" },
  { code: "AE", label: "United Arab Emirates (AE)" },
  { code: "GB", label: "United Kingdom (GB)" },
  { code: "US", label: "United States (US)" },
  { code: "UM", label: "United States Minor Outlying Islands (UM)" },
  { code: "UY", label: "Uruguay (UY)" },
  { code: "UZ", label: "Uzbekistan (UZ)" },
  { code: "VU", label: "Vanuatu (VU)" },
  { code: "VE", label: "Venezuela (VE)" },
  { code: "VN", label: "Vietnam (VN)" },
  { code: "VG", label: "Virgin Islands, British (VG)" },
  { code: "VI", label: "Virgin Islands, U.S. (VI)" },
  { code: "WF", label: "Wallis and Futuna (WF)" },
  { code: "EH", label: "Western Sahara (EH)" },
  { code: "YE", label: "Yemen (YE)" },
  { code: "ZM", label: "Zambia (ZM)" },
  { code: "ZW", label: "Zimbabwe (ZW)" },
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

  <optgroup label="Bible Translations (Worldwide)">
  <!-- Major English Translations -->
  <option value="KJV">King James Version (KJV)</option>
  <option value="NIV">New International Version (NIV)</option>
  <option value="ESV">English Standard Version (ESV)</option>
  <option value="NKJV">New King James Version (NKJV)</option>
  <option value="NLT">New Living Translation (NLT)</option>
  <option value="CSB">Christian Standard Bible (CSB)</option>
  <option value="NASB">New American Standard Bible (NASB)</option>
  <option value="NRSV">New Revised Standard Version (NRSV)</option>
  <option value="ASV">American Standard Version (ASV)</option>
  <option value="WEB">World English Bible (WEB)</option>
  <option value="AMP">Amplified Bible (AMP)</option>
  <option value="MSG">The Message (MSG)</option>
  <option value="GNT">Good News Translation (GNT)</option>
  <option value="RSV">Revised Standard Version (RSV)</option>
  <option value="YLT">Young's Literal Translation (YLT)</option>
  <option value="DRB">Douay-Rheims Bible (DRB)</option>
  <option value="CEV">Contemporary English Version (CEV)</option>
  <option value="NCV">New Century Version (NCV)</option>
  <option value="TLB">The Living Bible (TLB)</option>

  <!-- Spanish Translations -->
  <option value="RVR1960">Reina-Valera 1960 (RVR1960)</option>
  <option value="NTV">Nueva Traducción Viviente (NTV)</option>
  <option value="LBLA">La Biblia de las Américas (LBLA)</option>
  <option value="DHH">Dios Habla Hoy (DHH)</option>
  <option value="PDT">Palabra de Dios para Todos (PDT)</option>

  <!-- Portuguese Translations -->
  <option value="ARC">Almeida Corrigida Fiel (ARC)</option>
  <option value="NVI-PT">Nova Versão Internacional (NVI - Português)</option>
  <option value="NTLH">Nova Tradução na Linguagem de Hoje (NTLH)</option>

  <!-- French Translations -->
  <option value="LSG">Louis Segond (LSG)</option>
  <option value="BFC">Bible en français courant (BFC)</option>
  <option value="SG21">Segond 21 (SG21)</option>

  <!-- German Translations -->
  <option value="LUT">Lutherbibel (LUT)</option>
  <option value="HFA">Hoffnung für alle (HFA)</option>
  <option value="SCH">Schlachter (SCH)</option>

  <!-- Chinese Translations -->
  <option value="CUVS">Chinese Union Version - Simplified (CUVS)</option>
  <option value="CUVT">Chinese Union Version - Traditional (CUVT)</option>
  <option value="CNV">Chinese New Version (CNV)</option>

  <!-- Korean Translations -->
  <option value="KRV">Korean Revised Version (KRV)</option>
  <option value="KLB">Korean Living Bible (KLB)</option>

  <!-- Tagalog / Filipino Translations -->
  <option value="ADB">Ang Dating Biblia (ADB)</option>
  <option value="RTPV">Magandang Balita Biblia (MBB)</option>

  <!-- Other Global / Historical Translations -->
  <option value="IRV">Indian Revised Version (IRV)</option>
  <option value="JLB">Japanese Living Bible (JLB)</option>
  <option value="SV1977">Statenvertaling (Dutch)</option>
  <option value="RST">Russian Synodal Translation (RST)</option>
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
                ${displayOffer && displayOffer.price !== null
            ? `${displayOffer.currency} ${displayOffer.price.toFixed(2)}${!activeOffer ? `<span style="font-size: 0.75rem; color: var(--color-text-muted, #666); font-weight: normal;">(${displayOffer.country})</span>` : ""}`
            : "Not available"
          }
              </span>
              <div style="display: flex; gap: 0.5rem;">
                ${displayOffer
            ? `<a href="${displayOffer.productUrl}" target="_blank"
          rel="noopener noreferrer"
          class="product-btn"
          style="text-decoration: none;">
          ${!activeOffer ? `Buy in ${displayOffer.country}` : "View Store"}
       </a>
       <button
          type="button"
          style="padding: 4px; min-width: 0; min-height: 0;"
          class="product-btn2 qr-code-btn"
          data-id="${product.id}"
          aria-label="Show QR code for ${product.title}"
          title="Scan to open product on your phone">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14h3v3h-3zM20 14v2M20 20h-3M14 20v-1"/>
          </svg>
       </button>
       <button class="product-btn2 view-details-btn"
        style="padding: 4px; min-width: 0; min-height: 0;"
          data-id="${product.id}"
          style="border: 1px solid var(--color-border, #ccc); align-items: center;">
          Details
       </button>`
            : `<button  style="padding: 4px; min-width: 0; min-height: 0;" class="product-btn2 view-details-btn"
          data-id="${product.id}">Details</button>`
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
    gridEl.querySelectorAll(".qr-code-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = (e.currentTarget as HTMLElement).dataset.id;
        if (!id) return;

        const product = this.products.find((p) => p.id === id);
        if (!product) return;

        const activeOffer = product.offers.find(
          (o) => o.country === this.filters.selectedCountry,
        );

        const displayOffer =
          activeOffer ||
          (product.offers.length > 0 ? product.offers[0] : null);

        if (displayOffer?.productUrl) {
          this.openQrModal(product.title, displayOffer.productUrl);
        }
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
              ${images.length > 1
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

  private async openQrModal(
    productTitle: string,
    productUrl: string,
  ): Promise<void> {
    document.getElementById("product-qr-modal")?.remove();

    const modal = document.createElement("div");
    modal.id = "product-qr-modal";

    // Force the backdrop to cover the page.
    Object.assign(modal.style, {
      position: "fixed",
      inset: "0",
      zIndex: "2147483647",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      background: "rgba(0, 0, 0, 0.55)",
      boxSizing: "border-box",
    });

    const dialog = document.createElement("div");
    Object.assign(dialog.style, {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "340px",
      padding: "24px",
      borderRadius: "12px",
      background: "#ffffff",
      color: "#222222",
      boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
      textAlign: "center",
      boxSizing: "border-box",
    });

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close QR code");
    Object.assign(closeButton.style, {
      position: "absolute",
      top: "6px",
      right: "10px",
      border: "none",
      background: "transparent",
      color: "#222",
      fontSize: "28px",
      cursor: "pointer",
    });

    const title = document.createElement("h2");
    title.textContent = productTitle;
    Object.assign(title.style, {
      margin: "8px 20px 12px",
      color: "#222",
      fontSize: "20px",
    });

    const description = document.createElement("p");
    description.textContent = "Scan this QR code to open the product page.";
    description.style.color = "#555";

    const imageContainer = document.createElement("div");
    Object.assign(imageContainer.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "240px",
      height: "240px",
      background: "#fff",
      color: "#222",
    });
    imageContainer.textContent = "Generating QR code...";

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.textContent = "Copy product link";
    Object.assign(copyButton.style, {
      marginTop: "16px",
      padding: "10px 16px",
      border: "none",
      borderRadius: "6px",
      background: "#800020",
      color: "#fff",
      cursor: "pointer",
    });

    dialog.append(closeButton, title, description, imageContainer, copyButton);
    modal.appendChild(dialog);
    document.body.appendChild(modal);

    const close = () => modal.remove();

    closeButton.addEventListener("click", close);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) close();
    });

    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(productUrl);
        copyButton.textContent = "Link copied!";
      } catch {
        copyButton.textContent = "Copy failed";
      }
    });

    try {
      const qrDataUrl = await QRCode.toDataURL(productUrl, {
        width: 240,
        margin: 2,
        errorCorrectionLevel: "M",
      });

      if (!modal.isConnected) return;

      const image = document.createElement("img");
      image.src = qrDataUrl;
      image.alt = `QR code for ${productTitle}`;
      image.width = 240;
      image.height = 240;
      image.style.display = "block";

      imageContainer.replaceChildren(image);
    } catch (error) {
      console.error("QR generation failed:", error);
      imageContainer.textContent = "QR generation failed. Check the console.";
    }
  }


  private closeModal(): void {
    const modalContainer = document.getElementById("store-modal-container");
    if (modalContainer) modalContainer.innerHTML = "";
    this.activeModalProduct = null;
  }
}
