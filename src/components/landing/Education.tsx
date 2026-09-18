import { Sparkles } from "lucide-react";

const myths = [
  {
    myth: "Dentes tortos são só genética",
    truth: "Hábitos como respirar pela boca, chupar dedo e mastigar errado moldam a face mais que os genes.",
  },
  {
    myth: "Vai corrigir sozinho com a idade",
    truth: "Sem tratar a causa, o problema só se agrava. 90% do crescimento facial acontece até os 12 anos.",
  },
  {
    myth: "Aparelho fixo é a única solução",
    truth: "A odontologia moderna trata a origem com aparelhos removíveis, exercícios e terapia funcional.",
  },
];

const Education = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="size-3.5" />
            O que poucos pais sabem
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            É como pintar uma <span className="text-gradient">parede torta</span> — sem corrigir a base, o problema sempre volta.
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {myths.map(({ myth, truth }, i) => (
            <div
              key={myth}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden shadow-soft"
            >
              <div className="bg-muted/50 p-7 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Mito #{i + 1}
                </p>
                <p className="font-heading text-lg lg:text-xl text-foreground/70 line-through decoration-destructive/40 decoration-2">
                  {myth}
                </p>
              </div>
              <div className="bg-card p-7 lg:p-8 border-l-4 border-secondary md:border-l-4">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                  Verdade
                </p>
                <p className="font-heading text-lg lg:text-xl text-foreground leading-snug">
                  {truth}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
