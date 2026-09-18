import { Heart, Sparkles, Award, Users } from "lucide-react";

const items = [
  { icon: Heart, title: "Atendimento humanizado", text: "Acolhemos cada criança como única, respeitando seu tempo e suas emoções." },
  { icon: Users, title: "100% focado em crianças", text: "Equipe especializada em odontopediatria e desenvolvimento infantil." },
  { icon: Sparkles, title: "Experiência mágica", text: "Ambiente lúdico estilo Disney — eles pedem para voltar." },
  { icon: Award, title: "Método moderno e comprovado", text: "Tecnologia internacional aplicada com toque humano." },
];

const Differentiation = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Por que somos diferentes</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            Cuidado <span className="text-gradient">premium</span> que sua família merece.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card p-7 rounded-3xl border border-border text-center hover:shadow-elegant transition-smooth"
            >
              <div className="size-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 shadow-soft">
                <Icon className="size-7 text-primary-foreground" />
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

export default Differentiation;
