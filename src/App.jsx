import { useState } from 'react';

import './App.css'

const App = () => {

  return (
    <>
      <header>
        <h1>Ficha de Avaliação em Ortopedia, Traumatologia e Reumatologia</h1>
      </header>

      <div id='DivCad'>
        <h2>Cadastro</h2>

        <span className='InputCad'>
          <label>Avaliador: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Data: </label>
          <input type="date" />
        </span>
        <span className='InputCad'>
          <label>Nome: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Data de Nascimento: </label>
          <input type="date" />
        </span>
        <span className='InputCad'>
          <label>Idade: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Telefone: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Endereço: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Profissão: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Diagnóstico Médico: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Nome do Médico: </label>
          <input type="text" />
        </span>
        <span className='InputCad'>
          <label>Tempo de lesão: </label>
          <input type="text" />
        </span>

      </div>

      <div id='DivAnamnese'>
        <h2>Anamnese:</h2>
        <span>
          <label>Queixa Principal:</label>
          <textarea className="TXTArea" />
        </span>
        <span>
          <label>HDP e HDA:</label>
          <textarea className="TXTArea" />
        </span>
        <span>
          <label>História Social:</label>
          <textarea className="TXTArea" />
        </span>
        <span>
          <label>Exames Complamentares:</label>
          <input type='text'></input>
        </span>
        <span>{/**Sim ou não */}
          <label>Medicamentos em uso:</label>
          <input type='text'></input>
        </span>
        <span>{/**Sim ou não */}
          <label>Cirurgias:</label>
          <input type='text'></input>
        </span>
        <span>{/**Sim ou não */}
          <label>Tratamentos anteriores:</label>
          <input type='text'></input>
        </span>
      </div>

      <div id='DivAnamnese'>
        <h2>Exame Físico:</h2>
        <span>
          <label>Peso:</label>
          <input type="text" />
        </span>
        <span>
          <label>Altura:</label>
          <input type="text" />
        </span>
        <span>
          <label>IMC Pontuação:</label>
          <input type="text" />
        </span>

        <h3>Sinais Vitais:</h3>
        <div className='DivPA'>
          <span>
            <label>PAD:</label>
            <input type="text" />
          </span>
          <span>
            <label>PAS:</label>
            <input type="text" />
          </span>
        </div>

        <span>
          <label>FR(irpm):</label>
          <input type="text" />
        </span>
        <span>
          <label>FC(bpm):</label>
          <input type="text" />
        </span>
        <span>
          <label>SpO2:</label>
          <input type="text" />
        </span>

        <h3>Inspeção:</h3>
        <textarea className="TXTArea" />

        <h3>Palpação:</h3>
        <textarea className="TXTArea" />

        <h3>AVD's - AVP's:</h3>
        <textarea className="TXTArea" />

        <h3>Habilidade corporal:</h3>
        <span className='SpanHC'>
          <label>Destro: <input type="checkbox" /></label>
          <label>Sinistro: <input type="checkbox" /></label>
          <label>Ambidestro: <input type="checkbox" /></label>
        </span>

        <h3>Avaliação Subjetiva da DOR:</h3>
        <label> Caracteristica:</label>
        <textarea className="TXTArea" />

        <h3>Revisão de Sistemas:</h3>
        <span>
          <label>Alteração de peso:</label>
          <input type="text" />
        </span>
        <span>
          <label>Apetite:</label>
          <input type="text" />
        </span>
        <span>
          <label>Sono:</label>
          <input type="text" />
        </span>
        <span>
          <label>Pele:</label>
          <input type="text" />
        </span>
        <span>
          <label>Respiratório:</label>
          <input type="text" />
        </span>
        <span>
          <label>Cardiovascular:</label>
          <input type="text" />
        </span>
        <span>
          <label>Geniturinário:</label>
          <input type="text" />
        </span>
        <span>
          <label>Gastrointestinal:</label>
          <input type="text" />
        </span>

        <h3>Testes especiais em Ortopedia:</h3>
        <textarea className="TXTArea" />

        <h3>Encurtamento(s) Muscular(es):</h3>

        <div id='DivDiagnóstico'></div>
        <textarea className="TXTArea" />

        <h3>Diagnóstico Cinético Funcional:</h3>
        <textarea className="TXTArea" />

        <h3>Perspectiva do paciente</h3>

        <div id='DivPlanoeConduta'></div>
        <textarea className="TXTArea" />

        <h3>Objetivos e Condutas</h3>
        <span>
          <label>Objetivos Curto Prazo:</label>
          <input type="text" />
        </span>
        <span>
        <label>Condutas de Curto Prazo:</label>
        <input type="text" />
        </span>
        <span>
        <label>Objetivos de Médio Prazo:</label>
        <input type="text" />
        </span>
        <span>
        <label>Condutas de Médio Prazo:</label>
        <input type="text" />
        </span>
        <span>
        <label>Objetivos de Longo Prazo:</label>
        <input type="text" />
        </span>
        <span>
        <label>Condutas de Longo Prazo:</label>
        <input type="text" />
        </span>

        <h3 title='Classificação Internacional de Funcionalidade'>CIF:</h3>
        <textarea className="TXTArea" />

        <h3>Orientações ao paciente:</h3>
        <textarea className="TXTArea" />

        <h3>Acadêmico:</h3>
        <textarea className="TXTArea" />

        <h3>Surpervisor:</h3>
        <textarea className="TXTArea" />
      </div>

      <footer>
        <button>Salvar</button>
        <h2><span className='Span1'>FISIOTERAPIA</span> - <span className='Span2'>UNIPLAC</span></h2>
      </footer>
    </>
  )
}

export default App
