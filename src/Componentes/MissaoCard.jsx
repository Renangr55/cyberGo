export function MissaoCard({ missao, onIniciarMissao,concluida  }) {

  const inventario = JSON.parse(localStorage('inventario')) || [];
  const concluidoLocal = inventario.some((f) => f.id === missao.id)

  const isConcluido = concluida != undefined ? concluida : concluidoLocal;

  return (
    <article className='missao-card'>
        <h3 id={missao.id}>{missao.titulo}</h3>
        <p>{missao.missao}</p>
        <button onClick={() => onIniciarMissao(missao)}  disabled={concluida}>{isConcluido ? "Missão concluída" : "Iniciar Missão"}</button>
    </article>
  )
}
