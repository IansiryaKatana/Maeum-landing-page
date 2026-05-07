import { ArrowDown, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const privacyContent = `Privacy Policy
Maeum
Operated by UNIQUE WHOLESALE & DISTRIBUTION LIMITED
Last updated: 27/02/2026

UNIQUE WHOLESALE & DISTRIBUTION LIMITED ("Company", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect personal data when you visit our website or otherwise interact with us.

1. Who We Are
UNIQUE WHOLESALE & DISTRIBUTION LIMITED is the data controller for the purposes of the UK General Data Protection Regulation ("UK GDPR") and the Data Protection Act 2018.
________________________________________
2. Personal Data We Collect
We may collect and process the following categories of personal data:
• Name
• Email address
• Phone number
• IP address
• Device/browser information
• Billing address
• Delivery address
• Payment transaction data
• Order history
• Account login data
• Marketing preferences
We do not knowingly collect data from children.
________________________________________
3. How We Use Personal Data
We use personal data only where permitted by law, including to:
• Respond to enquiries or communications
• Operate, maintain, and improve our website
• Monitor website usage and performance
• Comply with legal or regulatory obligations
Our lawful bases for processing include legitimate interests, contractual necessity, legal obligation, and consent (where applicable). Payments are processed securely by third-party payment providers (such as Stripe, PayPal, Klarna or similar providers). We do not store full card details.
________________________________________
4. Cookies and Tracking
Our website uses cookies and similar technologies to improve functionality and analyse usage. Further information is available in our Cookie Policy, which explains how you can manage your preferences.
________________________________________
5. Data Sharing
We may share personal data with:
• Service providers who support our website or IT systems
• Professional advisers (such as legal or compliance advisers)
• Authorities where disclosure is required by law
We do not sell personal data to third parties.
________________________________________
6. International Transfers
Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.
________________________________________
7. Data Retention
• Order data retained for 6 years (tax/accounting compliance)
• Marketing data retained until unsubscribe
________________________________________
8. Your Rights
You have rights under data protection law, including the right to:
• Access your personal data
• Request correction or deletion
• Object to or restrict processing
• Withdraw consent (where applicable)
• Lodge a complaint with the UK Information Commissioner's Office (ICO)
________________________________________
9. Data Security
We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, or misuse.
________________________________________
10. Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
________________________________________
11. Contact Us
If you have any questions about this Privacy Policy or how we handle personal data, please contact us at:
Email: Hello@maeum.co.uk`;

  const privacyLines = privacyContent.split("\n");

  return (
    <main className="min-h-screen bg-[#f6ead0] text-primary px-5 py-10 md:px-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-shakehand text-[46px] md:text-[64px] leading-none mb-4">Privacy Policy</h1>
        <div className="font-geist text-[14px] lg:text-[18px] leading-7 text-primary/80">
          {privacyLines.map((line, index) => {
            const trimmed = line.trim();

            if (!trimmed) {
              return <div key={`space-${index}`} className="h-4" />;
            }

            const isMainTitle = index === 0;
            const isBrandLine = index === 1;
            const isMetaLine = index === 2 || index === 3;
            const isSectionTitle = /^\d+\.\s/.test(trimmed);
            const isDivider = /^_+$/.test(trimmed);
            const emailMatch = line.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);

            if (isDivider) {
              return <div key={`divider-${index}`} className="my-2 border-t border-primary/20" />;
            }

            if (isMainTitle) {
              return null;
            }

            const lineContent = emailMatch ? (
              <>
                {line.slice(0, emailMatch.index)}
                <a
                  href={`mailto:${emailMatch[0]}`}
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {emailMatch[0]}
                </a>
                {line.slice((emailMatch.index ?? 0) + emailMatch[0].length)}
              </>
            ) : (
              line
            );

            return (
              <p
                key={`line-${index}`}
                className={
                  isMainTitle
                    ? "text-[20px] lg:text-[24px] font-semibold leading-tight mb-2"
                    : isBrandLine
                      ? "text-[16px] lg:text-[20px] font-medium leading-tight"
                      : isMetaLine
                        ? "text-[14px] lg:text-[16px] font-medium leading-tight"
                        : isSectionTitle
                          ? "text-[16px] lg:text-[20px] font-semibold leading-tight mt-2"
                          : "font-normal"
                }
              >
                {lineContent}
              </p>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-2">
        <Link
          to="/"
          aria-label="Back to home"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#7a3a33] text-white shadow-md hover:opacity-90 transition-opacity"
        >
          <Home className="h-5 w-5" />
        </Link>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#7a3a33] text-white shadow-md hover:opacity-90 transition-opacity"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to bottom"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#7a3a33] text-white shadow-md hover:opacity-90 transition-opacity"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
