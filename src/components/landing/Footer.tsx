import logoBranco from "@/assets/logo-sorrident-branco.png.asset.json";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <img
            src={logoBranco.url}
            alt="Sorri&Dent Consultório Odontológico"
            className="h-11 w-auto mb-4"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed">
            Odontologia miofuncional infantil — cuidando do sorriso, da respiração e do futuro do seu filho.
          </p>
          <p className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/10 text-background">
            Atendimento especializado
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://wa.me/5598988390110" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-smooth">
                WhatsApp: (98) 98839-0110
              </a>
            </li>
            <li>Seg a Sex · 8h às 19h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Endereço</h4>
          <p className="text-sm leading-relaxed">
            Av. João Moraes de Sousa, 486 — Centro<br />
            Santa Luzia do Paruá — MA · CEP 65272-000
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} Sorri&Dent. Todos os direitos reservados.</p>
        <p>CRO/MA 00000 · Responsável técnico</p>
      </div>
    </footer>
  );
};

export default Footer;
