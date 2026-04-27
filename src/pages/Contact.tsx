import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Languages, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const serviceOptions = [
  "Ocean Freight", "Air Freight", "Import Customs Clearance", "Export Documentation",
  "Cargo Consolidation", "Door-to-Door Delivery", "Warehousing", "Hazardous Cargo", "General Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", origin: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ shipmentType: "", cargoType: "", weight: "", volume: "", originCountry: "", destCountry: "", date: "" });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);
  const handleQuote = () => setQuoteSubmitted(true);

  return (
    <main>
      <PageHero title="CONTACT US" breadcrumb="Contact" bgImage="https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F25fb8146fd43427da7cf1275d4db50ff?format=webp&width=800&height=1200" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <ScrollReveal className="md:col-span-2">
              <div className="bg-dark-navy rounded-lg p-8 h-full">
                <img src="/images/logo.png" alt="Royaume" className="h-16 mb-6" />
                <h3 className="font-cinzel text-xl text-primary-foreground font-bold mb-1">William Fils Coles</h3>
                <p className="font-raleway text-gold text-sm font-bold mb-4">Founder & CEO</p>
                <p className="font-source text-primary-foreground/70 text-sm mb-6">Royaume Shipping Line Import Export LLC</p>
                <div className="space-y-4 font-source text-sm text-primary-foreground/80">
                  <p className="flex items-center gap-2"><MapPin size={16} className="text-gold shrink-0" /> Miami, FL, USA</p>
                  <a href="tel:7864467444" className="flex items-center gap-2 hover:text-gold transition-colors font-bold"><Phone size={16} className="text-gold shrink-0" /> (786) 446-7444</a>
                  <p className="flex items-center gap-2"><span className="text-gold font-bold shrink-0">•</span> Calls answered by Virtual Receptionist</p>
                  <div className="pt-2 border-t border-primary-foreground/10 space-y-2">
                    <p className="uppercase tracking-wider text-xs text-primary-foreground/50">Extensions</p>
                    <a href="tel:7866221431" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone size={16} className="text-gold shrink-0" /> Ext. 1002 — (786) 622-1431</a>
                    <a href="tel:7866221432" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone size={16} className="text-gold shrink-0" /> Ext. 1003 — (786) 622-1432</a>
                  </div>
                  <a href="mailto:royaumeshippinglinellc@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors break-all"><Mail size={16} className="text-gold shrink-0" /> royaumeshippinglinellc@gmail.com</a>
                  <p className="flex items-start gap-2"><Clock size={16} className="text-gold shrink-0 mt-0.5" /> Mon–Fri 8AM–6PM EST<br />Sat 9AM–2PM</p>
                  <p className="flex items-center gap-2"><Languages size={16} className="text-gold shrink-0" /> English | French | Haitian Creole</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200} className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-20">
                  <CheckCircle size={64} className="text-gold mb-4" />
                  <h3 className="font-cinzel text-2xl text-navy font-bold mb-2">Thank You!</h3>
                  <p className="font-source text-text-muted">We'll respond within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                    <input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                    <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                  </div>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none text-text-muted">
                    <option value="">Service Needed</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Origin Port / City" value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                    <input placeholder="Destination Port / City" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                  </div>
                  <textarea placeholder="Message / Cargo Description" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none resize-none" />
                  <button onClick={handleSubmit} className="w-full py-3 bg-gold text-dark-navy font-raleway font-bold rounded btn-shimmer hover:bg-light-gold transition-colors">
                    Send Inquiry
                  </button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-cinzel text-3xl text-navy font-bold mb-8 text-center">REQUEST A SHIPPING QUOTE</h2>
            {quoteSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-2xl text-navy font-bold mb-2">Quote Request Received!</h3>
                <p className="font-source text-text-muted">We'll get back to you with a competitive quote shortly.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select value={quoteForm.shipmentType} onChange={(e) => setQuoteForm({ ...quoteForm, shipmentType: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none">
                    <option value="">Shipment Type</option>
                    <option>FCL</option><option>LCL</option><option>Air</option><option>Other</option>
                  </select>
                  <select value={quoteForm.cargoType} onChange={(e) => setQuoteForm({ ...quoteForm, cargoType: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none">
                    <option value="">Cargo Type</option>
                    <option>General</option><option>Hazardous</option><option>Refrigerated</option><option>Oversized</option><option>Personal Effects</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Weight (kg/lbs)" value={quoteForm.weight} onChange={(e) => setQuoteForm({ ...quoteForm, weight: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                  <input placeholder="Volume (CBM)" value={quoteForm.volume} onChange={(e) => setQuoteForm({ ...quoteForm, volume: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Origin Country + City" value={quoteForm.originCountry} onChange={(e) => setQuoteForm({ ...quoteForm, originCountry: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                  <input placeholder="Destination Country + City" value={quoteForm.destCountry} onChange={(e) => setQuoteForm({ ...quoteForm, destCountry: e.target.value })} className="px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                </div>
                <input type="date" value={quoteForm.date} onChange={(e) => setQuoteForm({ ...quoteForm, date: e.target.value })} className="w-full px-4 py-3 border-2 border-border rounded font-source gold-focus outline-none" />
                <button onClick={handleQuote} className="w-full py-3 bg-gold text-dark-navy font-raleway font-bold rounded btn-shimmer hover:bg-light-gold transition-colors">
                  Get My Quote
                </button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
