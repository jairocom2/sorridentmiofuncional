import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const YOUTUBE_VIDEO_ID = "_8IbhrWVSfg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute -top-24 -right-24 size-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-24 size-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-7">
            <span className="size-1.5 rounded-full bg-secondary animate-pulse-soft" />
            Odontologia miofuncional infantil
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-7 text-balance">
            Seu filho respira pela boca, ronca ou tem dentes tortos?
            <span className="block text-gradient mt-3">Isso afeta muito mais que o sorriso.</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[60ch] mx-auto mb-12 text-pretty">
            Descubra como o tratamento miofuncional pode transformar a respiração, o sono, a postura e a autoestima do seu filho — sem aparelhos tradicionais.
          </p>
        </div>

        {/* Vídeo vertical do YouTube em formato 9:16 */}
        <div className="w-full max-w-sm mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden shadow-elegant bg-muted border border-border">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
              title="Vídeo explicativo sobre Tratamento Miofuncional na Sorri&Dent"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Botão CTA abaixo do vídeo */}
        <div className="flex flex-col items-center gap-5 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 rounded-2xl px-10 py-7 text-base font-semibold text-secondary-foreground shadow-glow-red hover:scale-[1.02] transition-smooth"
          >
            <a href="https://wa.me/5598988390110?text=Ol%C3%A1%21%20Quero%20agendar%20a%20avalia%C3%A7%C3%A3o%20do%20meu%20filho%20com%20a%20Dra.%20Suzy%20Reis." target="_blank" rel="noopener noreferrer">
              Quero avaliar meu filho agora
              <ArrowRight className="ml-1 size-5" />
            </a>
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-5 text-secondary" />
            Atendimento humanizado e acolhedor
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
