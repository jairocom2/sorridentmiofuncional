import { Button } from "@/components/ui/button";
import { Clock, AlertCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="agendar" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute -top-40 -left-40 size-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-96 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center text-primary-foreground">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-xs font-semibold uppercase tracking-wider mb-7 border border-white/20">
          <AlertCircle className="size-4" />
          Vagas limitadas para avaliação esta semana
        </div>

        <h2 className="font-heading text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 text-balance">
          Não espere o problema piorar.
        </h2>

        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Quanto mais cedo tratar, mais simples e rápido é o resultado. Cada mês que passa é uma janela de desenvolvimento que não volta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-2xl px-8 py-7 text-base font-semibold shadow-glow-red hover:scale-[1.02] transition-smooth"
          >
            <a href="https://wa.me/5598988390110?text=Ol%C3%A1!%20Quero%20agendar%20a%20avalia%C3%A7%C3%A3o%20do%20meu%20filho." target="_blank" rel="noopener noreferrer">
              Quero agendar a avaliação do meu filho
              <ArrowRight className="ml-1 size-5" />
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            Resposta em até 1 hora
          </div>
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-white" />
            Sem compromisso
          </div>
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-white" />
            Atendimento por WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
