import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  bgImage?: string;
}

const PageHero = ({ title, breadcrumb, bgImage }: PageHeroProps) => (
  <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
    {bgImage && <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />}
    <div className="absolute inset-0 bg-dark-navy/80" />
    <div className="relative z-10 text-center px-4">
      <img src="/images/logo.png" alt="Royaume Shipping Line" className="h-14 md:h-16 w-auto mx-auto mb-4" />
      <h1 className="font-cinzel text-4xl md:text-5xl text-primary-foreground font-bold mb-3">{title}</h1>
      <p className="font-source text-primary-foreground/70 text-sm">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link> &gt; {breadcrumb}
      </p>
    </div>
  </section>
);

export default PageHero;
