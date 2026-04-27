import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const vessels = [
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2Ff0090543ee2e45479eac655e08e1ff64?format=webp&width=800&height=1200", name: "M/V CATHOLIC I", route: "Miami ↔ Caribbean",
    specs: [["Type", "General Cargo / Container"], ["Capacity", "Up to 500 TEU"], ["Flag", "USA"], ["Operator", "Catholic Shipping LNE Inc"]],
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2F5adb7bfa31604e3c9415dc0e53df30ee?format=webp&width=800&height=1200", name: "M/V CATHOLIC II", route: "Miami ↔ West Africa",
    specs: [["Type", "General Cargo / Container"], ["Capacity", "Up to 500 TEU"], ["Flag", "USA"], ["Operator", "Catholic Shipping LNE Inc"]],
  },
  {
    img: "https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2Fb5bb33d226b745fcbaeb612980bba014?format=webp&width=800&height=1200", name: "M/V CATHOLIC III", route: "Miami ↔ Europe",
    specs: [["Type", "General Cargo / Container"], ["Capacity", "Up to 500 TEU"], ["Flag", "USA"], ["Operator", "Catholic Shipping LNE Inc"]],
  },
];

const Fleet = () => (
  <main>
    <PageHero title="OUR FLEET" breadcrumb="Fleet" bgImage="https://cdn.builder.io/api/v1/image/assets%2F50786a5ca758437fb81ee8aca5401d4f%2F9557b3cd417b4d208deea070c4f7757a?format=webp&width=800&height=1200" />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vessels.map((v, i) => (
            <ScrollReveal key={v.name} delay={i * 150}>
              <div className="bg-card-bg rounded-lg overflow-hidden hover:shadow-xl hover:ring-2 hover:ring-gold/50 hover:scale-[1.02] transition-all duration-300">
                <img src={v.img} alt={v.name} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="font-cinzel text-xl text-navy font-bold mb-1">{v.name}</h3>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold font-source text-xs rounded-full mb-4">{v.route}</span>
                  <table className="w-full text-sm font-source">
                    <tbody>
                      {v.specs.map(([label, value]) => (
                        <tr key={label} className="border-b border-border">
                          <td className="py-2 text-text-muted font-bold">{label}</td>
                          <td className="py-2 text-navy text-right">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Link to="/contact" className="mt-4 inline-block w-full text-center px-4 py-2.5 bg-gold text-dark-navy font-raleway font-bold text-sm rounded hover:bg-light-gold transition-colors">
                    Inquire About This Vessel
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-dark-navy">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <ScrollReveal>
          <p className="font-source text-primary-foreground/80 leading-relaxed">
            Our vetted carrier partners operate modern, well-maintained general cargo and container vessels. Every vessel in our network meets international safety and compliance standards. We partner only with carriers who share our commitment to on-time delivery, cargo integrity, and environmental responsibility.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Fleet;
