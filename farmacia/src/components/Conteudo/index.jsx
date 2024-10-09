
import './index.css'

function Conteudo() {

  function botaoVisita(){

  }
  
  function botaoCamiseta(){

  }

  return (
    <div className="conteudo-container">

      {/* <img  className="lego"src="./images/lego.webp" alt="imagem de estadio de lego" /> */}
      <img  className="logoG"src="./images/farmarcia-cartoes.png" alt="imagem de cartoes" />
      <h1>Cartoes de visita</h1>
      <button onClick={botaoVisita}>Comprar</button>
      <img  className="logoG"src="./images/farmarcia-camisetas.png" alt="imagem camiseta" />
      <h2>Camisetas</h2>
      <button onClick={botaoCamiseta}>Comprar</button>

       
      
    </div>
  )
}

export default Conteudo

//rfce