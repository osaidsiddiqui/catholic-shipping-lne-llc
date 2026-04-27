import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/tracking", label: "Tracking" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-gold ${scrolled ? "bg-dark-navy/95 backdrop-blur-md shadow-lg" : "bg-dark-navy"}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Catholic Shipping Line" className="h-12 md:h-14 w-auto" />
          <span className="hidden lg:block font-cinzel text-gold text-sm font-bold tracking-wide">CATHOLIC SHIPPING LNE INC</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-source text-sm tracking-wide transition-colors relative pb-1 ${
                location.pathname === link.to
                  ? "text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                  : "text-primary-foreground hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 bg-gold text-dark-navy font-raleway font-bold text-sm rounded btn-shimmer transition-all hover:bg-light-gold"
          >
            Request a Quote
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gold p-2" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-dark-navy shadow-2xl transform transition-transform duration-300 z-50 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)} className="text-gold"><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-4 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-source text-lg py-2 border-b border-navy ${location.pathname === link.to ? "text-gold" : "text-primary-foreground hover:text-gold"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-4 px-5 py-3 bg-gold text-dark-navy font-raleway font-bold text-center rounded">
            Request a Quote
          </Link>
        </div>
      </div>
      {mobileOpen && <div className="md:hidden fixed inset-0 bg-dark-navy/50 z-40" onClick={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Navbar;
