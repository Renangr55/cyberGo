import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [refresh, setReresh] = useState(0)


  const concluirMissao = (id) => {
    const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
    const m = missoes.find((ms) => ms.id === id)
    const figurinha = {
      id:m.id,
      nome: m.missao,
      imagem: m.figurinha || "/src/assets/trofeu.png"
    }    

    if(!inventario.some((f) =>f.id === id)){
      inventario.push(figurinha)
      localStorage.setItem("inventario", JSON.stringify(inventario))
    }
    setMissaoSelecionada(null); // fecha modal
    setReresh((r) => r + 1)
  };

  return (
    <section className='conteiner'>
      <h2>Missões</h2>
      <div aria-labelledby="Sessão de cards das missões" className="missoes-grid">
        {missoes.map((index) => (
          <MissaoCard
            key={`${index.id} - ${refresh}`} 
            missao={index}  
            onIniciarMissao={setMissaoSelecionada} 
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
