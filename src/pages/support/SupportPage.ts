import type { Page } from "../../types";
import "../support/SupportPage.css";

const CONFIG = {
  gcashQrPath:
    import.meta.env.VITE_GCASH_PATH || "/assets/images/support/gcash-qr.jpg",
  gcashUrl: import.meta.env.VITE_GCASH_URL || "",

  qrphQrPath:
    import.meta.env.VITE_QRPH_PATH || "/assets/images/support/qrph-qr.jpg",
  qrphUrl: import.meta.env.VITE_QRPH_URL || "",

  paypalQrPath:
    import.meta.env.VITE_PAYPAL_QR_PATH ||
    "/assets/images/support/paypal-qr.png",
  paypalUrl: import.meta.env.VITE_PAYPAL_URL || "",

  buyMeACoffeeQrPath:
    import.meta.env.VITE_BUY_ME_A_COFFEE_QR_PATH ||
    "/assets/images/support/buymeacoffee-qr.png",
  buyMeACoffeeUrl: import.meta.env.VITE_BUY_ME_A_COFFEE_URL || "",

  wiseQrPath:
    import.meta.env.VITE_WISE_QR_PATH || "/assets/images/support/wise-qr.jpg",
  wiseUrl: import.meta.env.VITE_WISE_URL || "",

  bdoAccountName: import.meta.env.VITE_BDO_ACCOUNT_NAME || "",
  bdoAccountNumber: import.meta.env.VITE_BDO_ACCOUNT_NUMBER || "",

  bdoSwiftCode: import.meta.env.VITE_BDO_SWIFT_CODE || "",
};

function isValidDonationUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && url.trim().length > 0;
  } catch {
    return false;
  }
}

function paymentLink(url: string, label: string): string {
  if (!isValidDonationUrl(url)) {
    return `<p class="text-muted text-small">Payment link coming soon.</p>`;
  }

  return `
    <a
      href="${url}"
      target="_blank"
      rel="noopener noreferrer"
      class="payment-direct-link"
    >
      ${label}
    </a>
  `;
}

function qrCode(path: string, alt: string): string {
  return `
    <div class="qr-container">
      <img
        src="${path}"
        alt="${alt}"
        class="qr-image"
        loading="lazy"
        onerror="this.hidden = true; this.nextElementSibling.hidden = false;"
      />
      <div class="qr-placeholder" hidden>
        <p class="text-small">QR code unavailable</p>
      </div>
    </div>
  `;
}
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function paymentCard(options: {
  id: string;
  title: string;
  description: string;
  qrPath: string;
  qrAlt: string;
  url: string;
  linkLabel: string;
}): string {
  return `
    <div
      id="${options.id}"
      class="card payment-card text-center"
    >
      <h3>${options.title}</h3>
      <p class="text-muted text-small">
        ${options.description}
      </p>

      ${qrCode(options.qrPath, options.qrAlt)}

      <p class="text-small qr-instruction">
        Scan the QR code.
      </p>

      <div class="payment-link-wrapper">
        ${paymentLink(options.url, options.linkLabel)}
      </div>
    </div>
  `;
}

async function detectCountry(): Promise<string | null> {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) return null;

    const data: { country_code?: string } = await response.json();
    return data.country_code?.toUpperCase() ?? null;
  } catch {
    return null;
  }
}

export class SupportPage implements Page {
  render() {
    return /* html */ `
      <div class="support-page container" data-country="unknown">

        <section class="hero-section">
          <h1>Support Shepherd Bible</h1>
         
          <p class="text-muted hero-subtitle">
             Support ongoing development, more Bible translations, new features, and bug fixes to make Shepherd Bible better for everyone.
          </p>
          
          <p class="reassurance-text">
            <span aria-hidden="true">♥</span>
            Every contribution is voluntary.
          </p>
        </section>

        <section class="section payments-section">
          <p
            id="support-payment-recommendation"
            class="text-muted text-center recommendation-text"
            aria-live="polite"
          >
            Choose the donation method that works best for you to support Shepherd Bible.
          </p>

          <div class="grid payments-grid">
            ${paymentCard({
      id: "ph-card",
      title: "GCash",
      description: "Support using GCash.",
      qrPath: CONFIG.gcashQrPath,
      qrAlt: "GCash payment QR code",
      url: CONFIG.gcashUrl,
      linkLabel: "Open GCash payment link",
    })}

     ${paymentCard({
      id: "phq-card",
      title: "QR ph",
      description: "Support using QR ph.",
      qrPath: CONFIG.qrphQrPath,
      qrAlt: "QR-ph payment QR code",
      url: CONFIG.qrphUrl,
      linkLabel: "Open QR ph payment link",
    })}


            ${paymentCard({
      id: "paypal-card",
      title: "PayPal",
      description: "Support Shepherd Bible internationally.",
      qrPath: CONFIG.paypalQrPath,
      qrAlt: "PayPal QR code",
      url: CONFIG.paypalUrl,
      linkLabel: "Open PayPal",
    })}

            ${paymentCard({
      id: "bmc-card",
      title: "Buy Me a Coffee",
      description: "Contribute through our creator page.",
      qrPath: CONFIG.buyMeACoffeeQrPath,
      qrAlt: "Buy Me a Coffee QR code",
      url: CONFIG.buyMeACoffeeUrl,
      linkLabel: "Open Buy Me a Coffee",
    })}
     ${paymentCard({
      id: "wise-card",
      title: "Wise",
      description: "Support Shepherd Bible via Wise.",
      qrPath: CONFIG.wiseQrPath,
      qrAlt: "Wise QR code",
      url: CONFIG.wiseUrl,
      linkLabel: "Open Wise",
    })}
    <div class="card payment-card text-center" id="bdo-card">
  <h3>Donate via Bank Transfer</h3>
  <p class="text-muted text-small">
    Support Shepherd Bible with a direct bank transfer.
  </p>
  <div class="bdo-card-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M2 18h20"></path>
        </svg>
    
  </div>
  <button
    type="button"
    class="payment-direct-link bdo-open-modal"
    aria-haspopup="dialog"
    aria-controls="bdo-donation-modal"
  >
    View Bank Details
  </button>
</div>
          </div>
        </section>

        <div
  id="bdo-donation-modal"
  class="bdo-modal"
  hidden
>
  <div class="bdo-modal-backdrop" data-bdo-close></div>

  <section
    class="bdo-modal-dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="bdo-modal-title"
    aria-describedby="bdo-modal-description"
    tabindex="-1"
  >
    <button
      type="button"
      class="bdo-modal-close"
      data-bdo-close
      aria-label="Close bank details"
    >
      &times;
    </button>

    <div class="bdo-modal-heading">
      <span class="bdo-bank-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="30" height="30"
             fill="none" stroke="currentColor" stroke-width="1.7"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M2 18h20"/>
        </svg>
      </span>
      <h2 id="bdo-modal-title">BDO Bank Transfer</h2>
      <p id="bdo-modal-description" class="text-muted text-small">
        Support Shepherd Bible with a voluntary contribution.
      </p>
    </div>

   
<div class="bdo-account-details">

  <div class="bdo-detail-row">
    <span class="bdo-detail-label">Bank</span>
    <div class="bdo-detail-value">
      <strong id="bdo-bank-name">BDO Unibank, Inc.</strong>
      <button type="button" class="bdo-copy-icon"
              data-copy-target="bdo-bank-name"
              aria-label="Copy bank name">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="12" height="12" rx="2"/>
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="bdo-detail-row">
    <span class="bdo-detail-label">Account Name</span>
    <div class="bdo-detail-value">
      <strong id="bdo-account-name"></strong>
      <button type="button" class="bdo-copy-icon"
              data-copy-target="bdo-account-name"
              aria-label="Copy account name">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="12" height="12" rx="2"/>
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="bdo-detail-row">
    <span class="bdo-detail-label">Account Number</span>
    <div class="bdo-detail-value">
      <strong id="bdo-account-number" class="bdo-account-number"></strong>
      <button type="button" class="bdo-copy-icon"
              data-copy-target="bdo-account-number"
              aria-label="Copy account number">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="12" height="12" rx="2"/>
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="bdo-detail-row">
    <span class="bdo-detail-label">SWIFT / BIC</span>
    <div class="bdo-detail-value">
      <strong id="bdo-swift-code"></strong>
      <button type="button" class="bdo-copy-icon"
              data-copy-target="bdo-swift-code"
              aria-label="Copy SWIFT code">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="12" height="12" rx="2"/>
          <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>
        </svg>
      </button>
    </div>
  </div>

</div>


    <p class="bdo-transfer-instructions">
      Transfer any amount you wish to contribute. Please verify the
      account name and number in your banking app before confirming
      your transfer.
    </p>

    <button
      type="button"
      id="bdo-copy-account"
      class="bdo-copy-button"
    >
      Copy Account Number
    </button>

    <p
      id="bdo-copy-status"
      class="bdo-copy-status"
      role="status"
      aria-live="polite"
    ></p>

    <button
      type="button"
      class="bdo-modal-done"
      data-bdo-close
    >
      Done
    </button>
  </section>
</div>

        <section class="section split-bottom-section">
          <div class="benefits-compact">
            <h2>How Contributions Help</h2>
            <ul class="benefits-list text-muted">
              <li><strong>Free Tools:</strong> Maintain and improve Bible-reading features.</li>
              <li><strong>Community:</strong> Support testimonies, feedback, and encouragement.</li>
              <li><strong>Updates:</strong> Fund ongoing development and maintenance.</li>
            </ul>
          </div>
        </section>

      </div>
    `;
  }

  mount() {
    const page = document.querySelector<HTMLElement>(".support-page");
    const recommendation = document.getElementById(
      "support-payment-recommendation",
    );

    if (!page) return;

    const gcashCard = document.getElementById("gcash-card");
    const qrphCard = document.getElementById("qrph-card");
    const paypalCard = document.getElementById("paypal-card");
    const bmcCard = document.getElementById("bmc-card");
    const wiseCard = document.getElementById("wise-card");

    const localCards = [gcashCard, qrphCard];
    const internationalCards = [paypalCard, bmcCard, wiseCard];

    // Hide Philippine payment methods immediately, before detection completes.
    localCards.forEach((card) => {
      if (card) card.hidden = true;
    });

    void detectCountry().then((country) => {
      page.dataset.country = country ?? "unknown";

      [...localCards, ...internationalCards].forEach((card) => {
        card?.classList.remove("payment-preferred");
      });

      if (country === "PH") {
        // Reveal Philippine methods only after PH is confirmed.
        localCards.forEach((card) => {
          if (card) card.hidden = false;
          card?.classList.add("payment-preferred");
        });
      } else {
        // Other countries or detection failure: keep local methods hidden.
        localCards.forEach((card) => {
          if (card) card.hidden = true;
        });

        // Keep international methods available.
        internationalCards.forEach((card) => {
          card?.classList.add("payment-preferred");
        });
      }

      if (recommendation) {
        recommendation.textContent =
          "Choose the donation method that works best for you to support Shepherd Bible.";
      }
    });

    const bdoCard = document.getElementById("bdo-card");
    const modal = document.getElementById("bdo-donation-modal");
    const dialog = modal?.querySelector<HTMLElement>(".bdo-modal-dialog");
    const accountName = document.getElementById("bdo-account-name");
    const accountNumber = document.getElementById("bdo-account-number");
    const accountBankSwiftCode = document.getElementById("bdo-swift-code");
    const copyButton = document.getElementById("bdo-copy-account");
    const copyStatus = document.getElementById("bdo-copy-status");

    if (
      !bdoCard ||
      !modal ||
      !dialog ||
      !accountName ||
      !accountNumber ||
      !copyButton ||
      !copyStatus ||
      !accountBankSwiftCode
    ) {
      return;
    }

    const hasAccountDetails =
      CONFIG.bdoAccountName.trim().length > 0 &&
      CONFIG.bdoAccountNumber.trim().length > 0;

    if (!hasAccountDetails) {
      bdoCard.hidden = true;
    } else {
      accountName.textContent = CONFIG.bdoAccountName.trim();
      accountNumber.textContent = CONFIG.bdoAccountNumber.trim();
      accountBankSwiftCode.textContent = CONFIG.bdoSwiftCode.trim();
    }

    let previousFocus: HTMLElement | null = null;

    const openModal = () => {
      if (!hasAccountDetails) return;

      previousFocus =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      modal.hidden = false;
      document.body.classList.add("bdo-modal-open");
      copyStatus.textContent = "";
      dialog.focus();
    };

    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove("bdo-modal-open");
      previousFocus?.focus();
    };

    bdoCard
      .querySelector(".bdo-open-modal")
      ?.addEventListener("click", openModal);

    modal
      .querySelectorAll<HTMLElement>("[data-bdo-close]")
      .forEach((button) => {
        button.addEventListener("click", closeModal);
      });

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.bdoAccountNumber.trim());
        copyStatus.textContent = "Account number copied.";
        copyButton.textContent = "Copied!";
      } catch {
        copyStatus.textContent =
          "Unable to copy automatically. Please select and copy the account number above.";
      }
    });


    async function copyText(value: string): Promise<boolean> {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value);
          return true;
        }
      } catch {
        // Try the fallback below.
      }

      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.readOnly = true;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";

      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      try {
        return document.execCommand("copy");
      } catch {
        return false;
      } finally {
        textarea.remove();
      }
    }

    document
      .querySelectorAll<HTMLButtonElement>(".bdo-copy-icon")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const id = button.dataset.copyTarget;
          const value = id
            ? document.getElementById(id)?.textContent?.trim()
            : "";

          if (!value) return;

          const status = document.getElementById("bdo-copy-status");
          const copied = await copyText(value);

          if (status) {
            status.textContent = copied
              ? "Copied to clipboard."
              : "Copy failed. Select and copy the text manually.";
          }
        });
      });

  }
}
