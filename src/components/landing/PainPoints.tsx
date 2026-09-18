import { Moon, Frown, Battery, Users } from "lucide-react";

const points = [
  {
    icon: Moon,
    title: "Ronca ou dorme de boca aberta?",
    text: "Pode ser sinal de respiração bucal e baixa oxigenação durante o sono.",
  },
  {
    icon: Frown,
    title: "Tem dentes tortos mesmo pequeno?",
    text: "Não é só genética — a forma como ele respira e mastiga molda a face.",
  },
  {
    icon: Battery,
    title: "Vive cansado ou irritado?",
    text: "Sono não-reparador afeta humor, concentração e desempenho escolar.",
  },
  {
    icon: Users,
    title: "Você tem medo de bullying?",
    text: "Crianças notam diferenças — autoestima começa no espelho.",
  },
];

const PainPoints = () => {
  return (
    <section id="sinais" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Você já reparou nisso?
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            Pequenos sinais hoje viram <span className="text-gradient">grandes problemas amanhã</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-card p-8 rounded-3xl border border-border hover:border-primary/30 hover:shadow-soft transition-smooth"
            >
              <div className="size-12 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-smooth">
                <Icon className="size-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto bg-card border-l-4 border-secondary p-8 rounded-2xl shadow-soft">
          <p className="font-heading text-xl lg:text-2xl leading-snug text-balance">
            "Você pode não perceber, mas pequenos sinais hoje podem se tornar grandes problemas no futuro do seu filho."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
