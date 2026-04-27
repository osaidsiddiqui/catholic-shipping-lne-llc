import { Link } from "react-router-dom";
import { Ship, Plane, FileText, Package, Truck, Warehouse, AlertTriangle, ClipboardCheck, Globe, Shield, Zap, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import useCountUp from "@/hooks/useCountUp";

const services = [
  { num: "01", icon: Ship, title: "Ocean Freight", desc: "International sea cargo shipping via full container (FCL) and less-than-container (LCL) loads to and from all major global ports." },
  { num: "02", icon: Plane, title: "Air Freight", desc: "Fast, reliable air cargo services for time-sensitive shipments worldwide, with full tracking and documentation." },
  { num: "03", icon: ClipboardCheck, title: "Import Customs Clearance", desc: "Expert handling of all import documentation, tariffs, duties, and regulatory compliance for smooth U.S. customs entry." },
  { num: "04", icon: FileText, title: "Export Documentation", desc: "Complete export paperwork management including bills of lading, certificates of origin, commercial invoices, and packing lists." },
  { num: "05", icon: Package, title: "Cargo Consolidation", desc: "Cost-effective groupage shipping that consolidates multiple smaller shipments into one container load." },
  { num: "06", icon: Truck, title: "Door-to-Door Delivery", desc: "End-to-end logistics from origin pickup to final destination delivery, managing every step of the supply chain." },
  { num: "07", icon: Warehouse, title: "Warehousing & Storage", desc: "Secure short- and long-term storage facilities in Miami with inventory management and fulfillment services." },
  { num: "08", icon: AlertTriangle, title: "Hazardous Cargo", desc: "Certified handling and transport of dangerous goods (DG) in full compliance with IMDG and IATA regulations." },
];

const whyUs = [
  { icon: Globe, title: "Global Reach", desc: "We serve 50+ countries, connecting Miami to ports across Africa, the Caribbean, Europe, Asia, and the Americas." },
  { icon: FileText, title: "Full Documentation", desc: "We manage every document in the import/export process so you never have to worry about compliance." },
  { icon: Ship, title: "Reliable Fleet", desc: "Our vetted carrier partners operate modern, well-maintained vessels ensuring on-time delivery of your cargo." },
  { icon: Shield, title: "Cargo Security", desc: "Your shipment is protected with proper packaging, monitoring, and insurance options at every stage." },
  { icon: Zap, title: "Fast Turnaround", desc: "We optimize routing and transit times so your goods arrive when promised, every time." },
  { icon: Handshake, title: "Dedicated Support", desc: "24/7 customer service in English, French, and Haitian Creole for our diverse Miami client base." },
];

const testimonials = [
  { quote: "Royaume Shipping handled our container from Miami to Port-au-Prince flawlessly. Every document was perfect and our cargo arrived on time.", author: "Jean-Pierre M.", role: "Import Client" },
  { quote: "Reliable, professional, and communicative. William and his team made our first export shipment stress-free.", author: "Maria R.", role: "Export Client" },
  { quote: "Best freight forwarder in Miami for Caribbean routes. We've used them for 3 years and they never disappoint.", author: "David K.", role: "Logistics Partner" },
];

const stats = [
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 50, suffix: "+", label: "Countries Served" },
  { target: 10000, suffix: "+", label: "Shipments Delivered" },
  { target: 24, suffix: "/7", label: "Customer Support" },
];

const StatCounter = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center px-4">
      <p className="font-bebas text-4xl md:text-5xl text-gold">{count.toLocaleString()}{suffix}</p>
      <p className="font-source text-sm text-navy mt-1">{label}</p>
    </div>
  );
};

const fleetShips = [
  { img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F398d22f162a14b51a2848885b71b0718?format=webp&width=800&height=1200", name: "M/V ROYAUME I", route: "Miami ↔ Caribbean" },
  { img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F4bb9a9af0fca46079f55764513f87b32?format=webp&width=800&height=1200", name: "M/V ROYAUME II", route: "Miami ↔ West Africa" },
  { img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F25fb8146fd43427da7cf1275d4db50ff?format=webp&width=800&height=1200", name: "M/V ROYAUME III", route: "Miami ↔ Europe" },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src="https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Fa64a2da2d90d48c9b35eb25617e66d6d?format=webp&width=800&height=1200" alt="Cargo vessel at sea" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark-navy/70" />
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-0">
        <p className="font-raleway text-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 animate-slide-up-fade" style={{ animationDelay: "0.2s" }}>
          Miami, FL — International Shipping
        </p>
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl text-primary-foreground font-bold leading-tight mb-6 max-w-4xl animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
          Connecting Continents.<br />Delivering Excellence.
        </h1>
        <p className="font-source text-primary-foreground/80 text-base md:text-lg max-w-2xl mb-8 leading-relaxed animate-slide-up-fade" style={{ animationDelay: "0.6s" }}>
          Royaume Shipping Line Import Export LLC provides reliable ocean freight, cargo logistics, import/export documentation, and door-to-door delivery services from Miami to worldwide destinations.
        </p>
        <div className="flex flex-wrap gap-4 animate-slide-up-fade" style={{ animationDelay: "0.8s" }}>
          <Link to="/contact" className="px-8 py-3 bg-gold text-dark-navy font-raleway font-bold rounded btn-shimmer hover:bg-light-gold transition-colors">
            Request a Quote
          </Link>
          <Link to="/tracking" className="px-8 py-3 border-2 border-gold text-gold font-raleway font-bold rounded hover:bg-gold/10 transition-colors">
            Track Your Cargo
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-background border-y border-gold/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-navy font-bold mb-3">OUR SERVICES</h2>
          <p className="font-source text-text-muted max-w-2xl mx-auto">Full-service import/export and cargo logistics solutions — from ocean freight to customs clearance.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="group bg-card-bg p-6 rounded-lg hover:bg-navy transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer h-full">
                <span className="font-bebas text-2xl text-gold mb-2 block">{s.num}</span>
                <s.icon size={28} className="text-navy group-hover:text-gold transition-colors mb-3" />
                <h3 className="font-cinzel text-base font-bold text-navy group-hover:text-gold transition-colors mb-2">{s.title}</h3>
                <p className="font-source text-sm text-text-muted group-hover:text-primary-foreground/80 transition-colors">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* About Teaser */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="font-cinzel text-3xl md:text-4xl text-navy font-bold mb-4">WHO WE ARE</h2>
            <p className="font-source text-text-muted leading-relaxed mb-6">
              Royaume Shipping Line Import Export LLC is a Miami-based international freight and logistics company dedicated to moving goods across the globe with precision, reliability, and professionalism. Led by William Fils Coles, our team specializes in ocean and air freight, import/export customs clearance, cargo consolidation, and door-to-door delivery services.
            </p>
            <Link to="/about" className="inline-block px-6 py-2.5 border-2 border-gold text-gold font-raleway font-bold rounded hover:bg-gold hover:text-dark-navy transition-colors">
              Read More →
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-lg">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Ff41773654fdc4db1826b8ceb351ea5e0?format=webp&width=800&height=1200" alt="Royaume fleet vessel" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="relative overflow-hidden py-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.builder.io/o/assets%2F37fe508629794307b44d873859aad7cf%2Fba3e6e5935d1495c9730c33679181286?alt=media&token=53889f50-c98a-4036-bf9b-b26da571a4e0&apiKey=37fe508629794307b44d873859aad7cf"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-dark-navy/75" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl text-primary-foreground font-bold mb-3">WHY CHOOSE US</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 100}>
                <div className="bg-dark-navy/65 backdrop-blur-sm p-6 rounded-lg border border-gold/20">
                  <w.icon size={32} className="text-gold mb-3" />
                  <h3 className="font-cinzel text-lg text-primary-foreground font-bold mb-2">{w.title}</h3>
                  <p className="font-source text-sm text-primary-foreground/70">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Fleet Preview */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-navy font-bold mb-3">OUR VESSELS</h2>
          <p className="font-source text-text-muted">Dependable cargo vessels serving international trade routes.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleetShips.map((ship, i) => (
            <ScrollReveal key={ship.name} delay={i * 150}>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img src={ship.img} alt={ship.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-dark-navy/0 group-hover:bg-gold/30 transition-all duration-300 flex items-center justify-center">
                  <span className="font-cinzel text-primary-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Fleet →</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-dark-navy/80 p-4">
                  <h3 className="font-cinzel text-primary-foreground font-bold">{ship.name}</h3>
                  <span className="inline-block mt-1 px-3 py-0.5 bg-gold/20 text-gold font-source text-xs rounded-full">{ship.route}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/fleet" className="px-6 py-2.5 border-2 border-gold text-gold font-raleway font-bold rounded hover:bg-gold hover:text-dark-navy transition-colors">
            View Full Fleet →
          </Link>
        </div>
      </div>
    </section>

    {/* Tracking CTA */}
    <section className="py-16 bg-gold relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cinzel text-2xl md:text-3xl text-dark-navy font-bold mb-3">TRACK YOUR SHIPMENT IN REAL TIME</h2>
        <p className="font-source text-dark-navy/80 mb-6">Enter your Bill of Lading or Container Number to get live updates on your cargo status.</p>
        <Link to="/tracking" className="inline-block px-8 py-3 bg-dark-navy text-primary-foreground font-raleway font-bold rounded hover:bg-navy transition-colors">
          Track Now →
        </Link>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl text-navy font-bold">WHAT OUR CLIENTS SAY</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-card-bg p-6 rounded-lg hover:shadow-lg hover:border-l-4 hover:border-gold transition-all">
                <span className="font-cinzel text-4xl text-gold leading-none">"</span>
                <p className="font-source text-text-muted text-sm leading-relaxed mb-4">{t.quote}</p>
                <p className="font-raleway font-bold text-navy text-sm">— {t.author}</p>
                <p className="font-source text-xs text-text-muted">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-16 bg-dark-navy text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-cinzel text-3xl text-primary-foreground font-bold mb-4">READY TO SHIP WITH US?</h2>
        <p className="font-source text-primary-foreground/70 mb-2">📞 (786) 446-7444</p>
        <p className="font-source text-primary-foreground/70 mb-2">Calls answered by Virtual Receptionist</p>
        <p className="font-source text-primary-foreground/70 mb-6">✉️ royaumeshippinglinellc@gmail.com</p>
        <Link to="/contact" className="px-8 py-3 bg-gold text-dark-navy font-raleway font-bold rounded btn-shimmer hover:bg-light-gold transition-colors">
          Contact Us Now
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
