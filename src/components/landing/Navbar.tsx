import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-sorrident.png.asset.json";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo.url} alt="Sorri&Dent Consultório Odontológico" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <a href="#sinais" className="hover:text-primary transition-smooth">Sinais de alerta</a>
          <a href="#solucao" className="hover:text-primary transition-smooth">O método</a>
          <a href="#duvidas" className="hover:text-primary transition-smooth">Dúvidas</a>
        </div>
        <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full shadow-soft">
          <a href="https://wa.me/5598988390110?text=Ol%C3%A1%21%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Suzy%20Reis." target="_blank" rel="noopener noreferrer">Agendar avaliação</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
