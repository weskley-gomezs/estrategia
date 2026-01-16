
import React, { useState } from 'react';
import { geminiService } from '../services/gemini';
import { Sparkles, Loader2, Send } from 'lucide-react';

export const DiagnosisForm: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [pain, setPain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const diagnosis = await geminiService.analyzeLTV(niche, pain);
      setResult(diagnosis);
    } catch (error) {
      setResult("Erro ao conectar com a inteligência. Tente novamente em breve.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900 p-10 rounded-[2.5rem] border border-neutral-800 orange-glow w-full max-w-lg mx-auto">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="text-orange-500" />
        <h3 className="text-2xl font-black">Raio-X de LTV</h3>
      </div>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Qual seu nicho?</label>
            <input 
              required
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Ex: Escola de Inglês..."
              className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-colors font-medium"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Maior gargalo hoje?</label>
            <textarea 
              required
              rows={3}
              value={pain}
              onChange={(e) => setPain(e.target.value)}
              placeholder="Ex: Muitos cancelamentos..."
              className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-colors font-medium resize-none"
            />
          </div>
          <button 
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 text-lg shadow-xl"
          >
            {loading ? <Loader2 className="animate-spin" /> : <>ANALISAR CENÁRIO <Send size={20} /></>}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-black p-6 rounded-2xl border border-orange-500/30 text-neutral-300 leading-relaxed italic text-lg">
            "{result}"
          </div>
          <button 
            onClick={() => setResult(null)}
            className="text-orange-500 font-bold hover:underline flex items-center gap-2 mx-auto"
          >
            Nova Análise
          </button>
        </div>
      )}
    </div>
  );
};
