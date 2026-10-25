import type { Page } from "../../types";
import "../support/SupportPage.css";

const CONFIG = {

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
  bdoPath: import.meta.env.VITE_BDO_PATH || "/assets/images/support/bdo-qr.jpg",
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
    return ``;
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
  const title = escapeHtml(options.title);
  const description = escapeHtml(options.description);
  const qrPath = escapeHtml(options.qrPath);
  const qrAlt = escapeHtml(options.qrAlt);

  return `
    <div
      id="${escapeHtml(options.id)}"
      class="card payment-card text-center"
    >
      <h3>${title}</h3>
      <p class="text-muted text-small">${description}</p>

      ${qrCode(qrPath, qrAlt)}

      <p class="text-small qr-instruction">
        Scan the QR code.
      </p>

      <button
        type="button"
        class="qr-enlarge-button"
        data-qr-open
        data-qr-title="${title}"
        data-qr-description="${description}"
        data-qr-src="${qrPath}"
        data-qr-alt="${qrAlt}"
        data-qr-url="${escapeHtml(
    isValidDonationUrl(options.url) ? options.url : ""
  )}"
        data-qr-link-label="${escapeHtml(options.linkLabel)}"
        aria-haspopup="dialog"
        aria-controls="qr-enlarge-modal"
      >
        Enlarge QR code
      </button>

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
      id: "bdo-card-qr",
      title: "BDO",
      description: "Support using BDO.",
      qrPath: CONFIG.bdoPath,
      qrAlt: "BDO payment QR code",
      url: "",
      linkLabel: "",
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
<div id="qr-enlarge-modal" class="qr-enlarge-modal" hidden>
  <div class="qr-enlarge-backdrop" data-qr-close></div>

  <section
    class="qr-enlarge-dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="qr-enlarge-title"
    aria-describedby="qr-enlarge-description"
    tabindex="-1"
  >
    <button
      type="button"
      class="qr-enlarge-close"
      data-qr-close
      aria-label="Close enlarged QR code"
    >
      &times;
    </button>

    <h2 id="qr-enlarge-title">Donation QR code</h2>

    <p
      id="qr-enlarge-description"
      class="text-muted text-small"
    >
      Scan this QR code using your payment app to contribute to Shepherd Bible.
    </p>

    <div class="qr-enlarge-image-wrap">
      <img id="qr-enlarge-image" src="" alt="" />
      <p id="qr-enlarge-error" hidden>
        QR code unavailable. Please try the donation link instead.
      </p>
    </div>

    <p class="qr-enlarge-instruction">
      Open your payment app, scan the QR code, and verify the recipient
      details before confirming your contribution.
    </p>

    <a
      id="qr-enlarge-link"
      class="payment-direct-link qr-enlarge-link"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      hidden
    >
      Open donation page
    </a>

    <button
      type="button"
      class="qr-enlarge-done"
      data-qr-close
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


    const qrModal = document.getElementById("qr-enlarge-modal");
    const qrDialog = qrModal?.querySelector<HTMLElement>(
      ".qr-enlarge-dialog"
    );
    const qrTitle = document.getElementById("qr-enlarge-title");
    const qrDescription = document.getElementById("qr-enlarge-description");
    const qrImage = document.getElementById(
      "qr-enlarge-image"
    ) as HTMLImageElement | null;
    const qrError = document.getElementById("qr-enlarge-error");
    const qrLink = document.getElementById(
      "qr-enlarge-link"
    ) as HTMLAnchorElement | null;

    let previousQrFocus: HTMLElement | null = null;

    const closeQrModal = () => {
      if (!qrModal || qrModal.hidden) return;

      qrModal.hidden = true;
      document.body.classList.remove("qr-enlarge-open");
      previousQrFocus?.focus();
    };

    page.querySelectorAll<HTMLButtonElement>("[data-qr-open]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          if (
            !qrModal ||
            !qrDialog ||
            !qrTitle ||
            !qrDescription ||
            !qrImage ||
            !qrError ||
            !qrLink
          ) {
            return;
          }

          previousQrFocus =
            document.activeElement instanceof HTMLElement
              ? document.activeElement
              : null;

          qrTitle.textContent = button.dataset.qrTitle || "Donation QR code";
          qrDescription.textContent =
            button.dataset.qrDescription ||
            "Scan this QR code to support Shepherd Bible.";

          qrImage.hidden = false;
          qrError.hidden = true;
          qrImage.alt = button.dataset.qrAlt || "Donation QR code";
          qrImage.src = button.dataset.qrSrc || "";

          const donationUrl = button.dataset.qrUrl || "";

          if (isValidDonationUrl(donationUrl)) {
            qrLink.href = donationUrl;
            qrLink.textContent =
              button.dataset.qrLinkLabel || "Open donation page";
            qrLink.hidden = false;
          } else {
            qrLink.removeAttribute("href");
            qrLink.hidden = true;
          }

          qrModal.hidden = false;
          document.body.classList.add("qr-enlarge-open");
          qrDialog.focus();
        });
      });

    qrImage?.addEventListener("error", () => {
      qrImage.hidden = true;
      if (qrError) qrError.hidden = false;
    });

    qrImage?.addEventListener("load", () => {
      qrImage.hidden = false;
      if (qrError) qrError.hidden = true;
    });

    qrModal?.querySelectorAll<HTMLElement>("[data-qr-close]")
      .forEach((button) => {
        button.addEventListener("click", closeQrModal);
      });

    const handleQrEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeQrModal();
      }
    };

    document.addEventListener("keydown", handleQrEscape);


    const bdoCardQr = document.getElementById("bdo-card-qr");
    const paypalCard = document.getElementById("paypal-card");
    const bmcCard = document.getElementById("bmc-card");
    const wiseCard = document.getElementById("wise-card");

    const localCards = [bdoCardQr];
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
        localCards.forEach((card) => {
          if (card) card.hidden = false;
          card?.classList.add("payment-preferred");
        });
      } else {
        localCards.forEach((card) => {
          if (card) card.hidden = true;
        });

        internationalCards.forEach((card) => {
          card?.classList.add("payment-preferred");
        });
      }

      if (recommendation) {
        recommendation.textContent =
          country === "PH"
            ? "Choose a local or international donation method."
            : "Choose the international donation method that works best for you.";
      }
    });

    const bdoCard = document.getElementById("bdo-card");
    const modal = document.getElementById("bdo-donation-modal");
    const dialog = modal?.querySelector<HTMLElement>(".bdo-modal-dialog");
    const accountName = document.getElementById("bdo-account-name");
    const accountNumber = document.getElementById("bdo-account-number");
    const accountBankSwiftCode = document.getElementById("bdo-swift-code");

    const copyStatus = document.getElementById("bdo-copy-status");

    if (
      !bdoCard ||
      !modal ||
      !dialog ||
      !accountName ||
      !accountNumber ||

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
