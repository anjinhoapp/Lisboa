import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Home, Building2, Sparkles, BedDouble, KeyRound, Leaf, Star, ShieldCheck, Clock, MapPin, Phone, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import bedroom from "@/assets/bedroom.jpg";
import mop from "@/assets/mop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santos Clean — Limpeza Profissional em Lisboa, Setúbal e Tróia" },
      { name: "description", content: "Transformamos espaços, elevamos o seu bem-estar. Limpeza residencial, Airbnb e alojamento local com acabamento de excelência." },
      { property: "og:title", content: "Santos Clean — Limpeza Profissional" },
      { property: "og:description", content: "O fim de semana é para descansar. A limpeza fica connosco." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98 1-3.63-.24-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.88a9.77 9.77 0 0 1 2.88 6.96c0 5.42-4.42 9.82-9.85 9.82zm8.38-18.2A11.76 11.76 0 0 0 12.05 0C5.5 0 .17 5.33.16 11.88c0 2.1.55 4.14 1.59 5.94L.06 24l6.33-1.66a11.87 11.87 0 0 0 5.66 1.44h.01c6.55 0 11.88-5.33 11.89-11.88a11.8 11.8 0 0 0-3.52-8.4z" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const services = [
  { icon: Home, t: "Limpeza Residencial", d: "Rotina semanal ou quinzenal para uma casa sempre impecável, cheirosa e acolhedora." },
  { icon: BedDouble, t: "Airbnb & Alojamento Local", d: "Toalhas limpas, roupa de cama fresca e preparação completa para avaliações 5 estrelas." },
  { icon: Sparkles, t: "Limpeza Profunda", d: "Atenção a cada detalhe: áreas difíceis, cozinhas, casas de banho e superfícies." },
  { icon: Building2, t: "Escritórios", d: "Espaços de trabalho limpos e organizados que transmitem profissionalismo." },
  { icon: KeyRound, t: "Mudanças", d: "Entrada ou saída de casa sem preocupações — entregamos tudo pronto a habitar." },
  { icon: Leaf, t: "Produtos Adequados", d: "Produtos e equipamentos certos para cada superfície, com cuidado e segurança." },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${scrolled ? "glass" : "border border-transparent"}`}>
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Santos Clean — Serviços de Limpeza" width={44} height={44} className="h-11 w-11 rounded-full shadow-soft" />
            <span className={`font-display text-lg tracking-wide ${scrolled ? "text-navy" : "text-primary-foreground"}`}>Santos Clean</span>
          </a>
          <div className={`hidden items-center gap-8 text-sm md:flex ${scrolled ? "text-foreground/75" : "text-primary-foreground/90"}`}>
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#testemunhos" className="hover:text-primary">Testemunhos</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </div>
          <a href="#contacto" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-navy">
            Pedir orçamento
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img src={hero} alt="Sala luminosa e impecável em Lisboa" width={1920} height={1088} className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/50 via-70% to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center text-primary-foreground">
          <p className="reveal mb-6 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/85">Lisboa · Setúbal · Tróia</p>
          <h1 className="reveal font-display text-5xl leading-[1.05] md:text-7xl">
            O fim de semana é <br className="hidden md:block" />
            <em className="font-normal text-accent">para descansar.</em>
          </h1>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg font-light text-primary-foreground/90">
            A limpeza fica connosco. Transformamos espaços e elevamos o seu bem-estar, com o cuidado de quem ama o que faz.
          </p>
          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" disabled aria-disabled="true" title="Contacto indisponível por agora" className="inline-flex cursor-default items-center gap-2 rounded-full bg-primary-foreground/90 px-7 py-4 text-sm font-medium text-navy shadow-soft">
              <WaIcon className="h-5 w-5 text-whatsapp" /> Falar no WhatsApp
            </button>
            <a href="#servicos" className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-primary-foreground">
              Ver serviços <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GLASS HIGHLIGHTS */}
      <section className="relative z-10 mx-auto -mt-28 grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        {[
          { i: Home, t: "Residencial", d: "A sua casa pronta, sempre." },
          { i: BedDouble, t: "Alojamento Local", d: "Primeira impressão de 5 estrelas." },
          { i: Sparkles, t: "Limpeza Profunda", d: "Cada detalhe, impecável." },
        ].map(({ i: I, t, d }, k) => (
          <div key={t} className="reveal glass rounded-3xl p-8 text-center" style={{ transitionDelay: `${k * 120}ms` }}>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <I className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl text-navy">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Serviços</p>
          <h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">Soluções completas de limpeza</h2>
          <p className="mt-5 text-muted-foreground">Especialistas em limpezas detalhadas. Transformar ambientes é o primeiro passo para transformar dias.</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="reveal group bg-card p-10 transition hover:bg-secondary">
              <I className="h-7 w-7 text-primary transition group-hover:scale-110" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-2xl text-navy">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="bg-secondary/60 py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal relative">
            <img src={bedroom} alt="Quarto preparado com roupa de cama fresca" loading="lazy" width={1200} height={1408} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
            <div className="glass absolute -bottom-8 -right-4 rounded-2xl p-6 md:-right-10">
              <div className="flex gap-1 text-accent">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-2 font-display text-lg text-navy">Avaliações 5 estrelas</p>
              <p className="text-xs text-muted-foreground">dos seus hóspedes</p>
            </div>
          </div>
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Sobre nós</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
              "O mundo pode estar agitado lá fora, <em className="text-primary">mas aqui dentro tudo é calma."</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Na Santos Clean acreditamos que uma casa limpa muda o seu dia. Cuidamos de cada espaço como se fosse nosso — com pontualidade, discrição e um acabamento que se nota.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { i: ShieldCheck, t: "Confiança" },
                { i: Clock, t: "Pontualidade" },
                { i: Sparkles, t: "Detalhe" },
              ].map(({ i: I, t }) => (
                <div key={t}>
                  <I className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium text-navy">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative overflow-hidden">
        <img src={mop} alt="Mopa a limpar chão brilhante" loading="lazy" width={1408} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="reveal relative mx-auto max-w-3xl px-6 py-36 text-center text-primary-foreground">
          <h2 className="font-display text-4xl md:text-6xl">Sim! Eu no meu trabalho.</h2>
          <p className="mt-4 font-display text-2xl italic text-accent">Amo o que faço.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testemunhos" className="mx-auto max-w-6xl px-6 py-32">
        <div className="reveal text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Testemunhos</p>
          <h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">Quando o cliente indica a outras pessoas</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { q: "A minha casa nunca esteve tão bonita. Pontuais, cuidadosas e muito simpáticas.", n: "Cliente residencial", c: "Lisboa" },
            { q: "Os meus hóspedes comentam sempre a limpeza. As avaliações subiram imediatamente.", n: "Anfitrião Airbnb", c: "Setúbal" },
            { q: "Confio totalmente. Chego a casa e sinto aquela calma — tudo cheiroso e organizado.", n: "Cliente quinzenal", c: "Tróia" },
          ].map((t, k) => (
            <figure key={k} className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft" style={{ transitionDelay: `${k * 120}ms` }}>
              <div className="flex gap-1 text-accent">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-5 font-display text-lg leading-relaxed text-navy">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{t.n} · {t.c}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="px-6 pb-32">
        <div className="reveal mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-navy p-12 text-center text-primary-foreground shadow-soft md:p-20">
          <img src={logo} alt="Santos Clean" loading="lazy" width={96} height={96} className="mx-auto h-24 w-24 rounded-full ring-1 ring-primary-foreground/20" />
          <h2 className="mt-8 font-display text-4xl md:text-5xl">Sua casa pronta <em className="text-accent">para o fim de semana.</em></h2>
          <p className="mx-auto mt-5 max-w-lg text-primary-foreground/80">Peça o seu orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp.</p>
          <button type="button" disabled aria-disabled="true" title="Contacto indisponível por agora" className="mt-10 inline-flex cursor-default items-center gap-3 rounded-full bg-whatsapp/85 px-8 py-4 font-medium text-primary-foreground">
            <WaIcon /> Pedir orçamento pelo WhatsApp
          </button>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lisboa, Setúbal e Tróia</span>
            <a href="tel:+351912948220" className="flex items-center gap-2 hover:text-primary-foreground"><Phone className="h-4 w-4" /> Ligar</a>
            <a href="https://www.instagram.com/santoscleanlimpezaprofissional/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground"><Instagram className="h-4 w-4" /> @santoscleanlimpezaprofissional</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Santos Clean · Serviços de Limpeza
      </footer>

      {/* Floating WhatsApp */}
      <button type="button" disabled aria-disabled="true" aria-label="Falar no WhatsApp (indisponível por agora)" title="Contacto indisponível por agora" className="fixed bottom-6 right-6 z-50 flex h-16 w-16 cursor-default items-center justify-center rounded-full bg-whatsapp/85 text-primary-foreground shadow-soft">
        <WaIcon className="relative h-8 w-8" />
      </button>
    </div>
  );
}
