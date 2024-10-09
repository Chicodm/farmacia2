import React, { useState } from 'react';
import './SenhaController.css'; 

function SenhaController() {
  const [fila, setFila] = useState([]);
  const [senhaChamada, setSenhaChamada] = useState(null);

  const gerarSenha = (tipo) => {
    const novoNumero = fila.length > 0 ? Math.max(...fila.map(s => s.numero)) + 1 : 1;
    const novaSenha = { tipo, numero: novoNumero };
    setFila([...fila, novaSenha]);
  };

  const chamarSenha = () => {
    if (fila.length === 0) {
      alert("A fila está vazia.");
      return;
    }

    const preferencial = fila.filter(s => s.tipo === 'Preferencial');
    const senhaParaChamar = preferencial.length > 0 
      ? preferencial.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr))
      : fila.reduce((prev, curr) => (prev.numero < curr.numero ? prev : curr));

    setSenhaChamada(senhaParaChamar);
    setFila(fila.filter(s => s !== senhaParaChamar));
  };

  return (
    <div className="senha-controller">
      <h2>Controlador de Senhas</h2>
      <button onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
      <button onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>
      <button onClick={chamarSenha}>Chamar Senha</button>

      {senhaChamada && (
        <div className="display-senha">
          <h3>Senha Chamada: {senhaChamada.tipo} {senhaChamada.numero}</h3>
        </div>
      )}

      <div className="status-fila">
        {fila.length === 0 ? <p>A fila está vazia.</p> : <p>Senhas na fila: {fila.length}</p>}
      </div>
    </div>
  );
}

export default SenhaController;
