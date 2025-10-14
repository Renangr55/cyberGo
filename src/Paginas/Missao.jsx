import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]); // ✅ novo estado

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]); // adiciona id no array
    setMissaoSelecionada(null); // fecha modal
  };

  return (
    <section className='conteiner'>
      <h2>Missões</h2>
      <div aria-labelledby="Sessão de cards das missões" className="missoes-grid">
        {missoes.map((index) => (
          <MissaoCard
            key={index.id} 
            missao={index}  
            onIniciarMissao={setMissaoSelecionada} 
            concluida={missoesConcluidas.includes(index.id)} 
          />
        ))}
      </div>

      {missaoSelecionada && (
        <MissaoModal 
          missao={missaoSelecionada} 
          onClose={() => setMissaoSelecionada(null)} 
          onConcluir={() => concluirMissao(missaoSelecionada.id)} 
        />
      )}
    </section>
  );
}
