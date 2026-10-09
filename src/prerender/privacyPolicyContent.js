/**
 * Prerender HTML and Styles for Trusted Network Privacy Policy.
 * Matches the content and semantic structure of src/pages/PrivacyPolicy.jsx.
 */

export function getPrivacyPolicyPrerenderStyles() {
  return `
  <style id="prerender-privacy-policy-css">
    .tn-prerender-wrapper {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #ECECF2;
      color: #1e293b;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      line-height: 1.6;
    }
    .tn-prerender-hero {
      background: linear-gradient(135deg, #06152B 0%, #0B2345 100%);
      padding: 120px 24px 48px;
      color: #ffffff;
      border-bottom: 4px solid #C8A951;
      text-align: left;
    }
    .tn-prerender-hero-inner {
      max-width: 1200px;
      margin: 0 auto;
    }
    .tn-prerender-breadcrumbs {
      font-size: 0.88rem;
      color: #94A3B8;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tn-prerender-breadcrumbs a {
      color: #94A3B8;
      text-decoration: none;
    }
    .tn-prerender-breadcrumbs a:hover {
      color: #C8A951;
    }
    .tn-prerender-breadcrumbs span {
      color: #64748B;
    }
    .tn-prerender-breadcrumbs strong {
      color: #C8A951;
      font-weight: 600;
    }
    .tn-prerender-hero h1 {
      font-family: 'Poppins', 'Inter', sans-serif;
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0 0 8px;
      color: #ffffff;
      line-height: 1.2;
    }
    .tn-prerender-content {
      max-width: 1200px;
      margin: 40px auto 80px;
      padding: 0 24px;
    }
    .tn-prerender-card {
      background: #ffffff;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px -5px rgba(6, 21, 43, 0.08);
      border: 1px solid rgba(6, 21, 43, 0.05);
    }
    .tn-prerender-meta-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #E2E8F0;
      flex-wrap: wrap;
      gap: 12px;
    }
    .tn-prerender-last-updated {
      font-size: 0.88rem;
      font-weight: 600;
      color: #64748B;
    }
    .tn-prerender-last-updated span {
      color: #06152B;
      font-weight: 700;
    }
    .tn-prerender-badge {
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #C8A951;
      background: rgba(200, 169, 81, 0.1);
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 1px;
    }
    .tn-prerender-disclaimer {
      background: rgba(6, 21, 43, 0.02);
      border: 1px dashed rgba(6, 21, 43, 0.15);
      border-left: 4px solid #C8A951;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .tn-prerender-disclaimer h4 {
      font-family: 'Poppins', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #06152B;
      margin: 0 0 6px;
    }
    .tn-prerender-disclaimer p {
      font-size: 0.9rem;
      color: #475569;
      margin: 0;
      line-height: 1.5;
    }
    .tn-prerender-disclaimer a {
      color: #06152B;
      font-weight: 600;
      text-decoration: underline;
    }
    .tn-prerender-clause {
      margin-bottom: 32px;
      padding: 15px 0;
    }
    .tn-prerender-clause h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      color: #06152B;
      margin: 0 0 12px;
    }
    .tn-prerender-clause-number {
      color: #C8A951;
      margin-right: 6px;
    }
    .tn-prerender-clause p {
      font-size: 0.95rem;
      color: #475569;
      line-height: 1.65;
      margin: 0 0 12px;
    }
    .tn-prerender-list {
      margin: 0 0 16px 20px;
      padding: 0;
      color: #475569;
    }
    .tn-prerender-list li {
      margin-bottom: 8px;
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .tn-prerender-list li strong {
      color: #06152B;
    }
    .tn-prerender-contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    .tn-prerender-contact-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px 20px;
    }
    .tn-prerender-contact-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #64748B;
      font-weight: 600;
      display: block;
      margin-bottom: 4px;
    }
    .tn-prerender-contact-val {
      font-size: 0.95rem;
      font-weight: 600;
      color: #06152B;
      text-decoration: none;
      word-break: break-all;
    }
    .tn-prerender-contact-val:hover {
      color: #C8A951;
    }
    @media (max-width: 768px) {
      .tn-prerender-hero {
        padding: 90px 16px 36px;
      }
      .tn-prerender-hero h1 {
        font-size: 1.85rem;
      }
      .tn-prerender-content {
        padding: 0 16px;
        margin: 24px auto 60px;
      }
      .tn-prerender-card {
        padding: 24px 18px;
      }
    }
  </style>`;
}

export function getPrivacyPolicyPrerenderHtml() {
  return `<div class="tn-prerender-wrapper">
  <div class="tn-prerender-hero">
    <div class="tn-prerender-hero-inner">
      <nav aria-label="Breadcrumb" class="tn-prerender-breadcrumbs">
        <a href="/">Home</a>
        <span>/</span>
        <strong>Privacy Policy</strong>
      </nav>
      <h1>Trusted Network Privacy Policy</h1>
    </div>
  </div>

  <div class="tn-prerender-content">
    <main class="tn-prerender-card">
      <div class="tn-prerender-meta-header">
        <div class="tn-prerender-last-updated">
          Last Updated: <span>June 27, 2026</span>
        </div>
        <div class="tn-prerender-badge">TRUSTED NETWORK</div>
      </div>

      <div class="tn-prerender-disclaimer">
        <h4>Important Legal Notice</h4>
        <p>
          All payments, GST invoices, agreements, subscriptions, and compliance activities are managed and processed under <a href="https://oceansoftwares.com" target="_blank" rel="noopener noreferrer">Oceansoftwares Pvt. Ltd.</a>
        </p>
      </div>

      <section id="collect" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">1.</span> Information We Collect</h2>
        <p>We collect information to verify profiles, offer tailored business matchmaking, and ensure safety. This includes:</p>
        <ul class="tn-prerender-list">
          <li><strong>Name:</strong> User identity validation.</li>
          <li><strong>Mobile Number:</strong> Authentication and primary contact.</li>
          <li><strong>Email Address:</strong> Official alerts, communication, and invoices.</li>
          <li><strong>Business Information:</strong> Trade name, industry, and location.</li>
          <li><strong>GST Information:</strong> Verification of business status.</li>
          <li><strong>Company Details:</strong> Company registration, size, and details.</li>
          <li><strong>Profile Information:</strong> Bio, profile photos, achievements, and search history.</li>
          <li><strong>Usage Data:</strong> How you interact with other network members.</li>
          <li><strong>Device Information:</strong> IP address, device type, and platform metadata.</li>
        </ul>
      </section>

      <section id="use-info" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">2.</span> How We Use Information</h2>
        <p>The information we collect is used strictly for core business networking purposes:</p>
        <ul class="tn-prerender-list">
          <li>Account creation and security checks.</li>
          <li>Business verification (GST validation, entity registration reviews).</li>
          <li>Networking recommendations and business matching.</li>
          <li>Customer support and technical troubleshooting.</li>
          <li>Platform improvement, performance tracking, and new feature research.</li>
          <li>Communication regarding services, newsletters, and policy changes.</li>
        </ul>
      </section>

      <section id="cookies" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">3.</span> Cookies &amp; Analytics</h2>
        <p>Trusted Network may use cookies, analytics tools, and similar technologies to improve user experience. You can manage cookie preferences directly from your device web browser configurations.</p>
      </section>

      <section id="sharing" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">4.</span> Data Sharing</h2>
        <p>Trusted Network does not sell personal information under any circumstances. Information may be shared with:</p>
        <ul class="tn-prerender-list">
          <li><strong>Service providers:</strong> Infrastructure, analytics, and software hosting providers.</li>
          <li><strong>Government authorities:</strong> When legally required to verify entities or satisfy laws.</li>
          <li><strong>Payment providers:</strong> To process premium subscriptions, invoices, and billing under Oceansoftwares Pvt. Ltd.</li>
        </ul>
      </section>

      <section id="security" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">5.</span> Data Security</h2>
        <p>Industry-standard security practices (including encryption and secure API communication) are implemented to safeguard user data from unauthorized access, leakage, or modification.</p>
      </section>

      <section id="retention" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">6.</span> Data Retention &amp; Account Status</h2>
        <p>Information will be retained only as long as necessary for active business operations, community security audits, and tax/legal compliance purposes under Oceansoftwares Pvt. Ltd.</p>
        <ul class="tn-prerender-list">
          <li><strong>Data Storage:</strong> We store your actual data for 1 year.</li>
          <li><strong>Inactive Accounts:</strong> If an account is not used for 15 days, the account will automatically become idle.</li>
        </ul>
      </section>

      <section id="rights" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">7.</span> User Rights</h2>
        <p>We believe in giving you complete control over your business data. Users may:</p>
        <ul class="tn-prerender-list">
          <li>Access their registered information.</li>
          <li>Update or correct information from the profile settings panel.</li>
          <li>Request account deletion by contacting support.</li>
        </ul>
      </section>

      <section id="links" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">8.</span> Third-Party Links</h2>
        <p>The platform may contain external links to member websites, tools, or resources. Trusted Network is not responsible for third-party privacy practices or external terms.</p>
      </section>

      <section id="children" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">9.</span> Children's Privacy</h2>
        <p>Our services are intended strictly for professional networking and business relationships. The platform is not intended for or directed to individuals below 18 years of age.</p>
      </section>

      <section id="updates" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">10.</span> Policy Updates</h2>
        <p>Trusted Network may update this Privacy Policy periodically. We will notify you of any material changes by updating the "Last Updated" date at the top of this document.</p>
      </section>

      <section id="contact" class="tn-prerender-clause">
        <h2><span class="tn-prerender-clause-number">11.</span> Contact Information</h2>
        <p>If you have questions about how we process your personal data, or wish to exercise your rights, please reach out to us:</p>
        <div class="tn-prerender-contact-grid">
          <div class="tn-prerender-contact-card">
            <span class="tn-prerender-contact-label">Website</span>
            <a href="https://trustednetwork.in" target="_blank" rel="noopener noreferrer" class="tn-prerender-contact-val">https://trustednetwork.in</a>
          </div>
          <div class="tn-prerender-contact-card">
            <span class="tn-prerender-contact-label">Email</span>
            <a href="mailto:admin@trustednetwork.in" class="tn-prerender-contact-val">admin@trustednetwork.in</a>
          </div>
          <div class="tn-prerender-contact-card">
            <span class="tn-prerender-contact-label">Phone</span>
            <a href="tel:+919791152132" class="tn-prerender-contact-val">+91 97911 52132</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>`;
}
