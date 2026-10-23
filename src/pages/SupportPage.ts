import type { Page } from "../types";
import "../styles/SupportPage.css";

const CONFIG = {
  phQrPath:
    import.meta.env.VITE_PH_QR_PATH || "/assets/images/support/gcash-qr.png",
  phUrl: import.meta.env.VITE_PH_URL || "",

  paypalQrPath:
    import.meta.env.VITE_PAYPAL_QR_PATH ||
    "/assets/images/support/paypal-qr.png",
  paypalUrl: import.meta.env.VITE_PAYPAL_URL || "",

  buyMeACoffeeQrPath:
    import.meta.env.VITE_BUY_ME_A_COFFEE_QR_PATH ||
    "/assets/images/support/buymeacoffee-qr.png",
  buyMeACoffeeUrl: import.meta.env.VITE_BUY_ME_A_COFFEE_URL || "",
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
        Scan the QR code with your phone camera.
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
            Help us continue building free Bible-reading tools
            and a welcoming community.
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
            Choose the payment option that works best for you.
          </p>

          <div class="grid payments-grid">
            ${paymentCard({
              id: "ph-card",
              title: "GCash",
              description: "Support locally using GCash.",
              qrPath: CONFIG.phQrPath,
              qrAlt: "GCash payment QR code",
              url: CONFIG.phUrl,
              linkLabel: "Open GCash payment link",
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
          </div>
        </section>

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

    const phCard = document.getElementById("ph-card");
    const paypalCard = document.getElementById("paypal-card");
    const bmcCard = document.getElementById("bmc-card");

    void detectCountry().then((country) => {
      if (!country) {
        // Country detection failed: keep all options visible.
        page.dataset.country = "unknown";

        if (recommendation) {
          recommendation.textContent =
            "Choose the payment option that works best for you.";
        }

        return;
      }

      page.dataset.country = country;

      if (country === "PH") {
        // Philippines: show and highlight GCash.
        if (phCard) phCard.hidden = false;

        phCard?.classList.add("payment-preferred");

        if (recommendation) {
          recommendation.textContent =
            "GCash is available.";
        }
      } else {
        // Outside the Philippines: hide GCash.
        if (phCard) phCard.hidden = true;

        paypalCard?.classList.add("payment-preferred");
        bmcCard?.classList.add("payment-preferred");

        if (recommendation) {
          recommendation.textContent =
            "Choose PayPal or Buy Me a Coffee to support Shepherd Bible.";
        }
      }
    });
  }
}
