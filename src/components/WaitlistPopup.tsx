import { FormEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

type WaitlistPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WaitlistPopup = ({ isOpen, onClose }: WaitlistPopupProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          hasConsent,
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !payload.ok) {
        setFeedback(payload.message || "Something went wrong. Please try again.");
        return;
      }

      setName("");
      setEmail("");
      setPhone("");
      setHasConsent(false);
      setFeedback("You are on the waitlist. We will notify you soon.");
      window.setTimeout(() => onClose(), 900);
    } catch {
      setFeedback("Unable to submit right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120]">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />

      <div className="absolute inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center md:p-6">
        <div
          className="relative w-full rounded-t-[24px] bg-[#f6ead0] text-primary px-5 pt-4 pb-6 shadow-2xl md:max-w-[620px] md:rounded-[24px] md:px-8 md:py-7"
          role="dialog"
          aria-modal="true"
          aria-label="Join waitlist form"
        >
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#b8a88d] md:hidden" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e9dcc0] text-[#7a3a33] text-xl leading-none"
            aria-label="Close waitlist form"
          >
            ×
          </button>

          <h3 className="font-shakehand text-[44px] leading-none md:text-[58px] mb-2">Join the waitlist</h3>
          <p className="font-geist font-extralight text-[16px] md:text-[18px] leading-6 mb-5">
            Share your details to get launch updates and early access.
          </p>

          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              required
              className="w-full rounded-[12px] border-0 bg-white px-4 py-3 font-geist text-[16px] text-black placeholder:text-black/50 outline-none focus:outline-none focus:ring-0"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              className="w-full rounded-[12px] border-0 bg-white px-4 py-3 font-geist text-[16px] text-black placeholder:text-black/50 outline-none focus:outline-none focus:ring-0"
            />
            <PhoneInput
              country="us"
              value={phone}
              onChange={(value) => setPhone(value)}
              disableDropdown
              containerStyle={{ width: "100%" }}
              buttonStyle={{
                border: "0",
                background: "#ffffff",
                borderRadius: "12px 0 0 12px",
                cursor: "default",
              }}
              inputStyle={{
                width: "100%",
                height: "48px",
                border: "0",
                borderRadius: "12px",
                paddingLeft: "56px",
                fontFamily: "Geist, sans-serif",
                fontSize: "16px",
                color: "#000000",
                boxShadow: "none",
              }}
              inputProps={{
                name: "phone",
                required: true,
                placeholder: "Phone number",
              }}
            />

            <label className="flex items-start gap-2.5 text-left">
              <input
                type="checkbox"
                checked={hasConsent}
                onChange={(event) => setHasConsent(event.target.checked)}
                required
                className="mt-1 h-4 w-4 rounded border-[#b8a88d] accent-[#c81b17]"
              />
              <span className="font-geist text-[12px] md:text-[13px] leading-5 text-black/80">
                I agree to receive marketing updates from Maeum and accept the{" "}
                <Link to="/privacy-policy" className="underline text-[#7a3a33] hover:text-[#c81b17]">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms-of-use" className="underline text-[#7a3a33] hover:text-[#c81b17]">
                  Terms of Use
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!hasConsent || isSubmitting}
              className="w-full rounded-[12px] bg-[#c81b17] px-4 py-3 text-[#f6ead0] font-myungjo text-[16px] uppercase tracking-[0.03em] shadow-[0_10px_24px_rgba(0,0,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {feedback ? (
              <p className="text-sm font-geist text-[#7a3a33]" role="status">
                {feedback}
              </p>
            ) : null}
          </form>

        </div>
      </div>
    </div>
  );
};

export default WaitlistPopup;
