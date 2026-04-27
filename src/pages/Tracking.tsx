import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What documents do I need to track my shipment?", a: "Your Bill of Lading number, container number, or booking reference number provided at time of booking." },
  { q: "How often is tracking updated?", a: "Tracking is updated at each major milestone: booking, port departure, transit, and arrival." },
  { q: "What if my shipment is delayed?", a: "Our team will contact you proactively. You can also reach us 24/7 at (786) 329-2575." },
  { q: "Do you offer real-time GPS tracking?", a: "Yes, for select shipments. Ask us about live tracking options when booking." },
];

const steps = ["Booking Confirmed", "Departed Port", "In Transit", "Arrived"];

const Tracking = () => {
  const [trackingNum, setTrackingNum] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <PageHero title="TRACK YOUR CARGO" breadcrumb="Tracking" bgImage="https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Fa64a2da2d90d48c9b35eb25617e66d6d?format=webp&width=800&height=1200" />

      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <div className="bg-background rounded-lg p-8 shadow-lg border border-border">
              <h2 className="font-cinzel text-2xl text-navy font-bold mb-2 text-center">ENTER YOUR TRACKING NUMBER</h2>
              <p className="font-source text-text-muted text-sm text-center mb-6">Enter your Bill of Lading (B/L) number, Container Number, or Booking Reference.</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={trackingNum}
                  onChange={(e) => setTrackingNum(e.target.value)}
                  placeholder="e.g., RSLBL-2025-001234"
                  className="flex-1 px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none transition-all"
                />
                <button
                  onClick={() => setShowResult(true)}
                  className="px-6 py-3 bg-gold text-dark-navy font-raleway font-bold rounded hover:bg-light-gold transition-colors whitespace-nowrap"
                >
                  Track
                </button>
              </div>

              {showResult && (
                <div className="mt-8 p-6 bg-off-white rounded-lg border border-gold/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold text-dark-navy font-raleway font-bold text-xs rounded-full">IN TRANSIT</span>
                  </div>
                  <div className="space-y-2 mb-6 font-source text-sm">
                    <p><span className="text-text-muted">Route:</span> <span className="text-navy font-bold">Miami, FL → Port-au-Prince, Haiti</span></p>
                    <p><span className="text-text-muted">Estimated Arrival:</span> <span className="text-navy">April 15, 2026</span></p>
                    <p><span className="text-text-muted">Last Update:</span> <span className="text-navy">March 25, 2026 — Vessel departed Miami</span></p>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    {steps.map((step, i) => (
                      <div key={step} className="flex flex-col items-center flex-1">
                        <div className={`w-6 h-6 rounded-full border-2 ${i <= 2 ? "bg-gold border-gold" : "bg-background border-border"} mb-1`} />
                        <span className="font-source text-[10px] text-center text-text-muted">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-1 bg-border rounded-full mt-2 mb-6">
                    <div className="absolute h-full bg-gold rounded-full" style={{ width: "66%" }} />
                  </div>
                  <Link to="/contact" className="inline-block px-5 py-2 bg-navy text-primary-foreground font-raleway font-bold text-sm rounded hover:bg-dark-navy transition-colors">
                    Contact Us for Live Updates
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>

          <p className="font-source text-xs text-text-muted text-center mt-4">
            For real-time tracking assistance, please contact us directly at (786) 446-7444 or royaumeshippinglinellc@gmail.com
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <h2 className="font-cinzel text-2xl text-navy font-bold mb-8 text-center">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 font-source font-bold text-navy text-left hover:bg-off-white transition-colors"
                  >
                    {faq.q}
                    <ChevronDown size={20} className={`text-gold transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-4 px-4" : "max-h-0"}`}>
                    <p className="font-source text-sm text-text-muted">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Tracking;
