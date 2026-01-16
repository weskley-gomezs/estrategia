
import React, { useRef, useState, useEffect } from 'react';
import { PHASES, DELIVERABLES, TARGET_AUDIENCE } from './constants';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Quote,
  Zap,
  Target,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 10; 

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
        setActiveSlide(index);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') scrollToSlide(Math.min(activeSlide + 1, totalSlides - 1));
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') scrollToSlide(Math.max(activeSlide - 1, 0));
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide]);

  return (
    <div className="relative bg-black text-white overflow-hidden selection:bg-orange-500/30">
      {/* HUD de Navegação */}
      <div className="fixed top-10 left-12 z-50 flex items-center gap-6">
        <div className="relative">
          <div className="absolute -inset-2 bg-orange-600/20 blur-lg rounded-full animate-pulse"></div>
          <img 
            src="https://i.imgur.com/etRVFsd.png" 
            alt="Logo Método LTV" 
            className="h-14 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(255,122,0,0.3)]"
          />
        </div>
        <div className="flex flex-col border-l border-neutral-800 pl-6">
          <span className="font-black text-xl tracking-tighter leading-none italic uppercase">MÉTODO <span className="text-orange-500">LTV</span></span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 font-extrabold mt-1">Weskley Gomes</span>
        </div>
      </div>

      {/* Indicadores Laterais */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-1 transition-all duration-500 rounded-full ${activeSlide === i ? 'h-10 bg-orange-500 shadow-[0_0_15px_rgba(255,122,0,0.5)]' : 'h-1 bg-neutral-800 hover:bg-neutral-600'}`}
          />
        ))}
      </div>

      {/* Setas de Controle */}
      <div className="fixed bottom-10 right-12 z-50 flex gap-4">
        <button 
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="p-4 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl hover:border-orange-500 disabled:opacity-10 transition-all group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
        <button 
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === totalSlides - 1}
          className="p-4 bg-orange-600 text-black rounded-2xl hover:bg-orange-500 disabled:opacity-10 transition-all shadow-2xl group"
        >
          <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div ref={containerRef} className="slides-container">
        
        {/* Slide 1: Hero */}
        <section className="slide bg-black">
          <div className="absolute inset-0 bg-orange-600/5 blur-[120px] rounded-full translate-y-1/4 animate-pulse"></div>
          <div className="max-w-6xl text-center animate-slide-content">
            <div className="inline-flex items-center gap-3 bg-neutral-900/50 backdrop-blur border border-neutral-800 px-6 py-2 rounded-full mb-10 text-xs text-neutral-400 font-bold tracking-[0.2em] uppercase">
              <Zap size={14} className="text-orange-500 fill-orange-500" />
              <span>Escala de faturamento sem aumento de equipe</span>
            </div>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8rem] font-black tracking-tight mb-10 leading-[0.9] uppercase italic">
              Lucrar, <br />
              <span className="orange-text-gradient">sem precisar de <br className="hidden lg:block"/> cliente novo.</span>
            </h1>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Aprenda como empresas reais escalam relacionamento para <span className="text-white font-bold">dobrar resultados</span> sem mudar o produto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollToSlide(1)}
                className="bg-white text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-orange-500 hover:text-white transition-all flex items-center gap-4 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
              >
                APRESENTAÇÃO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSlide(2)}
                className="bg-neutral-900 border border-neutral-800 px-12 py-6 rounded-2xl font-black text-xl hover:border-orange-500 hover:text-orange-500 transition-all uppercase italic"
              >
                Ver Problemas
              </button>
            </div>
          </div>
        </section>

        {/* Slide 2: Introdução Weskley */}
        <section className="slide bg-neutral-950">
          <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-content">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-px w-12 bg-orange-500"></div>
                 <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs">Desde 2019 no Campo de Batalha</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter">Weskley <br/><span className="text-neutral-700 italic">Gomes.</span></h2>
              <div className="space-y-8 text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                <p>Mergulhado no mercado digital desde <span className="text-white font-bold">2019</span>, descobri que a maior dor das empresas não é a falta de leads.</p>
                <div className="bg-neutral-900 p-8 border-l-8 border-orange-500 rounded-r-3xl text-white text-2xl md:text-3xl font-black tracking-tight italic leading-snug shadow-xl">
                  "O problema não é trazer gente nova, é a incapacidade de <span className="text-orange-500">permanecer</span> com quem já está dentro."
                </div>
                <p className="text-lg">
                  Atuo em operações reais onde o esforço é máximo, mas o lucro escorre pelo <span className="text-white font-bold italic">balde furado</span> do relacionamento mal estruturado.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-orange-500/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://i.imgur.com/3bJLvfT.jpeg" 
                className="rounded-[2rem] shadow-2xl border border-neutral-800 transition-all duration-1000 w-full object-cover aspect-[4/5] max-h-[75vh]" 
                alt="Weskley Gomes" 
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                <img src="https://i.imgur.com/etRVFsd.png" className="h-10 w-auto brightness-0 invert opacity-80" alt="LTV Logo" />
                <div>
                  <span className="text-orange-500 font-black text-2xl italic leading-none">LTV+</span>
                  <p className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mt-1">Estrategista de Retenção</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: O Padrão do Problema (Estatico) */}
        <section className="slide bg-black">
          <div className="max-w-6xl text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-20 animate-slide-content uppercase italic tracking-tighter">O Padrão da <span className="text-orange-500">Ineficiência</span></h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { label: "Cliente mal educado", res: "Insatisfação", desc: "Falta de clareza gera ruído no dia a dia." },
                { label: "Comunicação reativa", res: "Desgaste", desc: "Seu time vive apenas para apagar incêndios." },
                { label: "Ausência de processo", res: "Perda de Valor", desc: "O cliente não enxerga o motivo para continuar." },
              ].map((item, i) => (
                <div key={i} className="bg-neutral-950 p-12 rounded-[3rem] border border-neutral-800 hover:border-orange-500 transition-all animate-slide-content group shadow-2xl" style={{animationDelay: `${i * 0.15}s`}}>
                  <div className="text-neutral-600 mb-6 font-black text-xs uppercase tracking-[0.3em] group-hover:text-neutral-400 transition-colors">{item.label}</div>
                  <div className="text-5xl font-black text-orange-500 mb-6 group-hover:scale-110 transition-transform">/</div>
                  <div className="text-3xl font-black text-white mb-6 tracking-tight leading-none uppercase italic">{item.res}</div>
                  <p className="text-neutral-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-20 text-neutral-400 text-xl font-medium animate-slide-content">
              Empresas perdem lucro não por falta de vendas, mas por <span className="text-white font-bold">falta de ordem.</span>
            </p>
          </div>
        </section>

        {/* Slide 4: O que é o Método LTV */}
        <section className="slide bg-neutral-950">
          <div className="max-w-5xl">
            <h2 className="text-6xl md:text-8xl font-black mb-16 text-center orange-text-gradient animate-slide-content">O Método LTV</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-content">
              {[
                "Aumentar permanência",
                "Percepção de valor real",
                "Reduzir atrito e ruído",
                "Time focado no sucesso",
                "Clientes defensores",
                "Escala orgânica"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 bg-black p-8 rounded-3xl border border-neutral-900 group hover:border-orange-500/50 transition-all">
                  <div className="w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_20px_#FF7A00] group-hover:scale-125 transition-transform"></div>
                  <span className="text-2xl font-extrabold tracking-tight italic uppercase">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 5: Para quem */}
        <section className="slide bg-black">
           <div className="max-w-6xl flex flex-col md:flex-row gap-24 items-center">
             <div className="flex-1">
               <h2 className="text-6xl md:text-8xl font-black mb-10 animate-slide-content leading-[0.9] italic">Para <br/>Quem?</h2>
               <div className="space-y-4 animate-slide-content">
                 {TARGET_AUDIENCE.map((item, i) => (
                   <div key={i} className="flex items-center gap-6 bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800/50 hover:bg-neutral-900 transition-all group">
                     <div className="bg-orange-500/10 p-4 rounded-xl text-orange-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                     <span className="text-2xl font-black tracking-tight uppercase italic">{item.title}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="flex-1 animate-slide-content">
                <div className="bg-orange-600 p-16 rounded-[4rem] text-black shadow-[0_40px_100px_rgba(255,122,0,0.15)] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-20">
                      <Target size={120} />
                   </div>
                   <h3 className="text-4xl font-black mb-8 leading-tight tracking-tighter uppercase italic">O Fator Confiança</h3>
                   <p className="text-2xl font-bold mb-10 leading-snug">
                      Se o seu negócio depende de relacionamento contínuo, o LTV é a sua única saída para a escala real.
                   </p>
                   <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em]">
                      <CheckCircle2 size={24} className="text-orange-500" /> Processo Validado
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Slide 6: Fases 1 e 2 */}
        <section className="slide bg-neutral-950">
           <div className="max-w-6xl grid md:grid-cols-2 gap-12">
             {PHASES.slice(0, 2).map((phase, i) => (
               <div key={i} className="bg-black border border-neutral-900 p-14 rounded-[4rem] orange-glow animate-slide-content group hover:border-orange-500/30 transition-all">
                  <span className="text-orange-500 font-black mb-6 block tracking-[0.6em] text-sm uppercase opacity-50 group-hover:opacity-100 transition-opacity">FASE 0{phase.number}</span>
                  <h3 className="text-5xl font-black mb-8 leading-none italic uppercase">{phase.title}</h3>
                  <div className="text-orange-400 font-extrabold mb-10 flex items-center gap-3 text-lg uppercase tracking-tight italic">
                    <Target size={24} /> {phase.objective}
                  </div>
                  <ul className="space-y-5">
                    {phase.tasks.slice(0, 3).map((task, j) => (
                      <li key={j} className="text-neutral-500 flex gap-4 text-xl font-medium leading-relaxed group-hover:text-neutral-300 transition-colors">
                        <span className="text-orange-500 font-black">/</span> {task}
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
           </div>
        </section>

        {/* Slide 7: Fases 3, 4 e 5 */}
        <section className="slide bg-black">
           <div className="max-w-7xl grid md:grid-cols-3 gap-8">
             {PHASES.slice(2, 5).map((phase, i) => (
               <div key={i} className="bg-neutral-900/30 border border-neutral-800 p-12 rounded-[3.5rem] hover:bg-neutral-900 transition-all animate-slide-content group">
                  <span className="text-orange-500 font-black mb-6 block tracking-[0.4em] text-xs uppercase">FASE 0{phase.number}</span>
                  <h3 className="text-3xl font-black mb-6 italic leading-none uppercase">{phase.title}</h3>
                  <p className="text-base text-neutral-500 mb-10 font-medium italic">"{phase.objective}"</p>
                  <div className="h-px w-full bg-neutral-800 mb-10 group-hover:bg-orange-500/30 transition-colors"></div>
                  <div className="text-neutral-600 font-black text-[10px] uppercase tracking-widest mb-4">Meta de Impacto:</div>
                  <div className="text-orange-500 font-black text-3xl italic uppercase leading-none">{phase.result[0]}</div>
               </div>
             ))}
           </div>
        </section>

        {/* Slide 8: Entregáveis */}
        <section className="slide bg-neutral-950">
          <div className="max-w-6xl text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-20 animate-slide-content italic">Entregáveis <span className="text-neutral-700">Reais.</span></h2>
            <div className="flex flex-wrap justify-center gap-8 animate-slide-content">
              {DELIVERABLES.map((item, i) => (
                <div key={i} className="bg-black border border-neutral-900 px-12 py-16 rounded-[3.5rem] w-full md:w-72 hover:border-orange-500 transition-all group shadow-xl">
                   <div className="mb-8 inline-block group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                   <h4 className="font-black text-xl uppercase tracking-tight italic leading-snug">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 9: A Frase */}
        <section className="slide bg-black">
          <div className="max-w-5xl text-center animate-slide-content">
            <Quote size={120} className="text-orange-500/10 mx-auto mb-16" />
            <h2 className="text-5xl md:text-8xl font-black leading-[1] italic tracking-tight uppercase">
              Empresas não perdem clientes por preço. <br />
              Perdem por <span className="orange-text-gradient">falta de processo.</span>
            </h2>
          </div>
        </section>

        {/* Slide 10: CTA Final */}
        <section className="slide bg-orange-600">
           <div className="max-w-5xl text-center text-black p-12 animate-slide-content">
              <h2 className="text-7xl md:text-[9rem] font-black mb-12 tracking-tighter leading-[0.85] uppercase italic">Vamos <br/>Escalar?</h2>
              <p className="text-2xl md:text-4xl font-black mb-20 max-w-3xl mx-auto text-black/90 leading-tight">
                Se você vende, mas perde valor no relacionamento, o Método LTV é a sua prioridade.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                <a 
                  href="https://wa.me/seunumerowhatsapp" 
                  className="bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 group"
                >
                  FALAR COM WESKLEY <MessageSquare className="group-hover:rotate-12 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSlide(0)}
                  className="bg-transparent border-4 border-black text-black px-16 py-8 rounded-[2.5rem] font-black text-2xl hover:bg-black hover:text-white transition-all uppercase italic"
                >
                  REVER MÉTODO
                </button>
              </div>
           </div>
           <footer className="absolute bottom-12 left-0 right-0 text-center text-black/50 font-black text-xs tracking-[0.4em] uppercase">
              Weskley Gomes • LTV Academy © {new Date().getFullYear()}
           </footer>
        </section>

      </div>
    </div>
  );
};

export default App;
