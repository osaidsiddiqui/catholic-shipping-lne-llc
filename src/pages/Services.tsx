import { Link } from "react-router-dom";
import { Ship, Plane, ClipboardCheck, FileText, Package, Truck, Warehouse, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const servicesData = [
  { icon: Ship, title: "Ocean Freight (FCL & LCL)", desc: "Full container and groupage sea freight to all major global ports. Whether you need a full 20ft or 40ft container or just a few cubic meters, we have the right ocean freight solution. We work with leading ocean carriers to ensure competitive rates and reliable transit times on all routes.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Fa64a2da2d90d48c9b35eb25617e66d6d?format=webp&width=800&height=1200" },
  { icon: Plane, title: "Air Freight", desc: "For time-critical shipments, our air freight services provide fast, secure delivery worldwide. We handle pick-up, documentation, airline booking, customs clearance, and delivery — all in one seamless service.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Ff41773654fdc4db1826b8ceb351ea5e0?format=webp&width=800&height=1200" },
  { icon: ClipboardCheck, title: "Import Customs Clearance", desc: "Importing goods into the United States requires strict compliance with CBP regulations. Our licensed customs brokers handle all documentation, tariff classifications, duty payments, and clearance filings to ensure smooth and timely entry of your goods.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F398d22f162a14b51a2848885b71b0718?format=webp&width=800&height=1200" },
  { icon: FileText, title: "Export Documentation", desc: "Proper export documentation is critical to international trade. We prepare and manage all required paperwork: commercial invoices, packing lists, certificates of origin, export licenses, phytosanitary certificates, and bills of lading.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F4bb9a9af0fca46079f55764513f87b32?format=webp&width=800&height=1200" },
  { icon: Package, title: "Cargo Consolidation (LCL)", desc: "Not enough cargo to fill a full container? Our consolidation service groups your shipment with others heading to the same destination, saving you money while maintaining delivery schedules.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F25fb8146fd43427da7cf1275d4db50ff?format=webp&width=800&height=1200" },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "From your warehouse or factory floor all the way to your customer's door — we manage the entire logistics chain including inland transportation, port handling, ocean or air freight, destination customs, and final-mile delivery.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2Fa64a2da2d90d48c9b35eb25617e66d6d?format=webp&width=800&height=1200" },
  { icon: Warehouse, title: "Warehousing & Storage", desc: "Our Miami-based facilities offer secure short and long-term storage with inventory management. Ideal for importers who need staging before distribution, or exporters preparing consolidated loads.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F398d22f162a14b51a2848885b71b0718?format=webp&width=800&height=1200" },
  { icon: AlertTriangle, title: "Hazardous Cargo", desc: "Certified handling for dangerous goods (Class 1–9) compliant with IMDG, IATA, and ADR regulations. We ensure proper classification, packaging, labeling, documentation, and carrier declaration for all DG shipments.", img: "https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F4bb9a9af0fca46079f55764513f87b32?format=webp&width=800&height=1200" },
];

const Services = () => (
  <main>
    <PageHero title="OUR SERVICES" breadcrumb="Services" bgImage="https://cdn.builder.io/api/v1/image/assets%2F0b787987c61147ae8b07b32105eda08a%2F25fb8146fd43427da7cf1275d4db50ff?format=webp&width=800&height=1200" />

    <div className="bg-background">
      {servicesData.map((service, i) => {
        const isEven = i % 2 === 1;
        return (
          <section key={service.title} className={`py-16 ${isEven ? "bg-off-white" : "bg-background"}`}>
            <div className="container mx-auto px-4">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                <ScrollReveal className={isEven ? "md:order-2" : ""}>
                  <img src={service.img} alt={service.title} className="w-full h-72 object-cover rounded-lg" />
                </ScrollReveal>
                <ScrollReveal delay={200} className={isEven ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon size={32} className="text-gold" />
                    <h2 className="font-cinzel text-2xl text-navy font-bold">{service.title}</h2>
                  </div>
                  <p className="font-source text-text-muted leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/contact" className="inline-block px-6 py-2.5 bg-gold text-dark-navy font-raleway font-bold text-sm rounded btn-shimmer hover:bg-light-gold transition-colors">
                    Request a Quote for This Service
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  </main>
);

export default Services;
