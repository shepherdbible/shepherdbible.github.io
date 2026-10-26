
import type { Page } from "../../types";
import "./SupportPage.css";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: {
        hostedButtonId: string;
      }) => {
        render: (selector: string) => Promise<unknown>;
      };
    };
  }
}

export class SupportPage implements Page {
  private readonly buttonId = "LXXSHTYJPJSVS";
  private readonly containerId =
    "paypal-container-LXXSHTYJPJSVS";

  render(): string {
    return `
      <main class="donate-page">
        <section class="donate-hero">
          <div class="donate-content">
            <span class="donate-eyebrow">
              SUPPORT SHEPHERD BIBLE
            </span>

            <h1>Help Shepherd Bible Grow</h1>

            <p class="donate-intro">
              Your voluntary contribution supports the development
              of Shepherd Bible, new Bible translations, useful
              features, and ongoing improvements.
            </p>

            <div class="donate-card">
              <div class="donate-card-icon" aria-hidden="true">♥</div>

              <h2>Make a Contribution</h2>

              <p class="donate-description">
                Enter the amount you'd like to contribute.
                Every contribution, big or small, is appreciated.
              </p>

              <div
                id="${this.containerId}"
                class="paypal-donate-container"
                aria-live="polite"
              >
                <p class="donate-loading">
                  Loading secure donation options...
                </p>
              </div>

              <p class="donate-secure-note">
                Payments are processed securely through PayPal.
              </p>
            </div>

           <p class="donate-thank-you">
  Thank you for supporting Shepherd Bible.
</p>
          </div>
        </section>
      </main>
    `;
  }

  mount(): void {
    const container = document.getElementById(this.containerId);

    if (!container) {
      console.error("PayPal donation container was not found.");
      return;
    }

    const paypal = window.paypal;

    if (!paypal?.HostedButtons) {
      container.innerHTML = `
        <p class="donate-error">
          Donation options are temporarily unavailable.
          Please refresh the page and try again.
        </p>
      `;

      console.error(
        "PayPal SDK has not loaded or HostedButtons is unavailable."
      );
      return;
    }

    container.innerHTML = "";

    void paypal
      .HostedButtons({
        hostedButtonId: this.buttonId,
      })
      .render(`#${this.containerId}`)
      .catch((error: unknown) => {
        console.error(
          "Failed to render PayPal Hosted Button:",
          error
        );

        container.innerHTML = `
          <p class="donate-error">
            We couldn't load the donation options.
            Please refresh the page and try again.
          </p>
        `;
      });
  }
}
