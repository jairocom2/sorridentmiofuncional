import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Meu filho ainda é muito pequeno para tratar...",
    a: "Pelo contrário — quanto mais cedo, melhor. A janela ideal é entre 4 e 12 anos, quando 90% do crescimento facial acontece. Tratar agora é mais rápido, simples e definitivo.",
  },
  {
    q: "Nunca ouvi falar desse tratamento. É confiável?",
    a: "A odontologia miofuncional é praticada há mais de 30 anos no mundo, com base científica sólida. É amplamente reconhecida por associações internacionais de odontopediatria e pneumologia.",
  },
  {
    q: "Será que vai funcionar mesmo no meu filho?",
    a: "Cada caso é avaliado individualmente. Após a primeira consulta, montamos um plano personalizado com objetivos claros e acompanhamento próximo. Mais de 98% das famílias relatam transformação real.",
  },
  {
    q: "Vai incomodar ou machucar meu filho?",
    a: "Os aparelhos são removíveis, macios e confortáveis — usados algumas horas por dia e durante o sono. Nada de fios, brackets ou desconforto. As crianças adoram.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Em média, de 12 a 24 meses, dependendo da idade e complexidade. Você verá mudanças nas primeiras semanas — sono, respiração e disposição melhoram rapidamente.",
  },
  {
    q: "O plano de saúde cobre?",
    a: "Trabalhamos com condições especiais e parcelamentos pensados para famílias. Na avaliação, mostramos todas as opções para caber no seu orçamento.",
  },
];

const Objections = () => {
  return (
    <section id="duvidas" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Tire suas dúvidas</p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            As perguntas que toda <span className="text-gradient">mãe faz</span> antes de começar.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-soft"
            >
              <AccordionTrigger className="font-heading text-left text-lg font-semibold py-5 hover:no-underline hover:text-primary transition-smooth">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Objections;
