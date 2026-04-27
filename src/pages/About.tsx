import { Link } from "react-router-dom";
import { Target, Eye, Anchor } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import useCountUp from "@/hooks/useCountUp";

const stats = [
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 50, suffix: "+", label: "Countries Served" },
  { target: 10000, suffix: "+", label: "Shipments Delivered" },
  { target: 24, suffix: "/7", label: "Customer Support" },
];

const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="font-bebas text-4xl text-gold">{count.toLocaleString()}{suffix}</p>
      <p className="font-source text-sm text-primary-foreground/70">{label}</p>
    </div>
  );
};

const About = () => (
  <main>
    <PageHero title="ABOUT US" breadcrumb="About" bgImage="https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2Fc063194d4b164e15b6e4cf2319ff735a?format=webp&width=800&height=1200" />

    {/* Our Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src="https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2F9557b3cd417b4d208deea070c4f7757a?format=webp&width=800&height=1200" alt="Royaume vessel" className="w-full h-96 object-cover rounded-lg" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="font-cinzel text-3xl text-navy font-bold mb-4">OUR STORY</h2>
            <div className="font-source text-text-muted leading-relaxed space-y-4">
              <p>Catholic Shipping LNE Inc was founded in Miami, Florida by William Fils Coles with a singular mission: to provide world-class import and export shipping services that connect businesses and families to global markets.</p>
              <p>Built on the foundation of Faith, Service, and Delivery, our company is committed to excellence in every aspect of international shipping. We honor our values of integrity, reliability, and community service as we serve our clients with dedication and professionalism.</p>
              <p>We serve businesses of all sizes, from individual shippers sending personal effects to large corporations managing high-volume container shipments. No matter the size or destination, we handle every shipment with the same level of care and professionalism.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", text: "To deliver reliable, compliant, and cost-effective international shipping solutions that empower businesses and individuals to trade globally without barriers." },
            { icon: Eye, title: "Vision", text: "To be the premier maritime freight forwarder in Miami, recognized throughout the Caribbean, Africa, and the Americas for operational excellence." },
            { icon: Anchor, title: "Values", text: "Faith | Service | Delivery | Integrity | Community" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 150}>
              <div className="bg-navy p-8 rounded-lg text-center h-full">
                <item.icon size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-cinzel text-xl text-primary-foreground font-bold mb-3">{item.title}</h3>
                <p className="font-source text-sm text-primary-foreground/80">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-cinzel text-3xl text-navy font-bold mb-8">MEET OUR TEAM</h2>
          <div className="max-w-md mx-auto bg-card-bg rounded-lg p-8">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gold">
              <img src="/images/owner.jpg" alt="William Fils Coles" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-cinzel text-xl text-navy font-bold">William Fils Coles</h3>
            <p className="font-raleway text-gold text-sm font-bold mb-3">Founder & CEO</p>
            <p className="font-source text-text-muted text-sm leading-relaxed mb-4">
              With deep roots in Miami's international shipping community, William leads Royaume with expertise in ocean freight operations, import/export compliance, and Caribbean trade routes.
            </p>
            <Link to="/contact" className="inline-block px-6 py-2 bg-gold text-dark-navy font-raleway font-bold text-sm rounded hover:bg-light-gold transition-colors">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-dark-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  </main>
);

export default About;
