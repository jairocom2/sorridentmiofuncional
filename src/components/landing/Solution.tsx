import { Wind, Moon, Smile, TrendingUp, Heart, Brain } from "lucide-react";
import dentistAsset from "@/assets/dentista-sorrident.png.asset.json";

const benefits = [
  { icon: Wind, title: "Respiração nasal restaurada", text: "Mais oxigênio, mais energia, menos infecções." },
  { icon: Moon, title: "Sono profundo e reparador", text: "Acabam o ronco e a apneia infantil." },
  { icon: Smile, title: "Dentes alinhados naturalmente", text: "Sem precisar de aparelho fixo agressivo." },
  { icon: TrendingUp, title: "Desenvolvimento facial correto", text: "Maxilar e mandíbula crescem em harmonia." },
  { icon: Heart, title: "Hábitos orais corrigidos", text: "Chupar dedo, ranger dentes, língua mal posicionada." },
  { icon: Brain, title: "Mais foco e bom humor", text: "Sono melhor = melhor desempenho escolar." },
];

const Solution = () => {
  return (
    <section id="solucao" className="py-24 lg:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 size-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant bg-accent">
              <img
                src={dentistAsset.url}
                alt="Dra. Suzy Reis, dentista da Sorri&Dent"
                width={800}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center lg:text-left">
              <p className="font-heading text-2xl font-semibold text-foreground">Dra. Suzy Reis</p>
              <p className="mt-1 text-sm text-muted-foreground">Odontologia miofuncional infantil</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              A solução que você procurava
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-balance">
              Tratamento miofuncional: muito além de <span className="text-gradient">alinhar dentes</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tratamos a causa, não só os sintomas. Combinamos avaliação postural, terapia funcional, exercícios lúdicos e aparelhos removíveis confortáveis — tudo pensado para crianças.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card p-7 rounded-3xl border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="size-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-soft">
                <Icon className="size-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
