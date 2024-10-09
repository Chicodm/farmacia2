import Header from "../components/Header";
import Conteudo from "../components/Conteudo";
import SenhaController from "../senha/SenhaController"; // Importe o novo componente

function Home() {
  return (
    <div>
      <Header />
      <Conteudo />
      <SenhaController /> {/* Adicione o controlador de senhas */}
    </div>
  );
}

export default Home;
