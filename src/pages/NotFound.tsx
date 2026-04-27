import { Link } from "react-router-dom";
import { Anchor } from "lucide-react";

const NotFound = () => (
  <main className="min-h-screen bg-dark-navy flex items-center justify-center">
    <div className="text-center">
      <Anchor size={64} className="text-gold mx-auto mb-6" />
      <h1 className="font-cinzel text-5xl text-primary-foreground font-bold mb-3">404</h1>
      <p className="font-source text-primary-foreground/70 text-lg mb-8">Page Not Found</p>
      <Link to="/" className="px-8 py-3 bg-gold text-dark-navy font-raleway font-bold rounded hover:bg-light-gold transition-colors">
        Return Home
      </Link>
    </div>
  </main>
);

export default NotFound;
