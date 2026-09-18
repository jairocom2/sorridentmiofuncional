import afterImg from "@/assets/transformation-after.jpg";
import motherImg from "@/assets/mother-child.jpg";

const TESTIMONIAL_VIDEOS = ["qgyZcik4BJE", "qlHqmj68ijo"];

const Transformation = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
            A transformação real
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            De criança tímida e cansada para <span className="text-gradient">confiante e cheia de vida</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="relative bg-muted/50 rounded-[2rem] overflow-hidden p-8 lg:p-10 border border-border min-h-[420px] flex flex-col justify-end">
            <div className="absolute inset-0 opacity-20 grayscale">
              <img src={motherImg} alt="" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Antes</p>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
                Tímida, insegura, cansada.
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Acordava cansada todos os dias</li>
                <li>• Evitava sorrir nas fotos</li>
                <li>• Não conseguia se concentrar na escola</li>
                <li>• Vivia gripada e de boca aberta</li>
              </ul>
            </div>
          </div>

          <div className="relative bg-gradient-primary rounded-[2rem] overflow-hidden p-8 lg:p-10 min-h-[420px] flex flex-col justify-end shadow-glow">
            <div className="absolute inset-0 opacity-30">
              <img src={afterImg} alt="" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
            <div className="relative text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-3">Depois</p>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
                Confiante, ativa, sorrindo sem vergonha.
              </h3>
              <ul className="space-y-2 opacity-95">
                <li>• Dorme profundo e acorda disposta</li>
                <li>• Mostra os dentes em todas as fotos</li>
                <li>• Mais focada e bem-humorada</li>
                <li>• Respira pelo nariz, vive saudável</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-12">
          <h3 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight text-center text-balance mb-10">
            História de quem está fazendo o tratamento
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
            {TESTIMONIAL_VIDEOS.map((videoId, index) => (
              <div
                key={videoId}
                className="relative w-full aspect-[9/16] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-elegant"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title={`Depoimento de paciente da Sorri&Dent ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
