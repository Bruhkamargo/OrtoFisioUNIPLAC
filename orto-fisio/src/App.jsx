import { useState } from 'react'

import './App.css'

const App = () => {

  return (
    <>
      <h1>Ficha de Avaliação em Ortopedia, Traumatologia e Reumatologia</h1>
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
          <textarea></textarea>
        </span>
        <span>
          <label>HDP e HDA:</label>
          <textarea></textarea>
        </span>
        <span>
          <label>História Social:</label>
          <textarea></textarea>
        </span>
        <span>
          <label>Exames Complamentares:</label>
          <textarea></textarea>
        </span>
        <span>
          <label>Medicamentos em uso:</label>
          <textarea></textarea>
        </span>
        <span>
          <label>Cirurgias:</label>
          <textarea></textarea>
        </span>
        <span>
          <label>Tratamentos anteriores:</label>
          <textarea></textarea>
        </span>
      </div>

      <div id='DivExameFísico'>
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
          <label>IMC:</label>
          <input type="text" />
          <input type="text" />
        </span>
        <h3>Sinais Vitais:</h3>
        <label>PA:</label>
        <input type="text" />
        <label>FR(irpm):</label>
        <input type="text" />
        <label>FC(bpm):</label>
        <input type="text" />
        <label>SpO2:</label>
        <input type="text" />
        
        <h2>Inspeção:</h2>
        <input type="text" />

        <h2>Palpação:</h2>
        <input type="text" />

        <h2>AVD's - AVP's:</h2>
        <input type="text" />

        <h2>Habilidade corporal:</h2>
        <label>Destro:</label>
        <input type="text" />
        <label>Sinistro:</label>
        <input type="text" />
        <label>Ambidestro:</label>
        <input type="text" />

        <h2>Avaliação Subjetiva da DOR:</h2>
        <label> Caracteristica:</label>
        <input type="text" />

        <h2>Revisão de Sistemas:</h2>
        <label>Alteração de peso:</label>
        <input type="text" />
        <label>Apetite:</label>
        <input type="text" />
        <label>Sono:</label>
        <input type="text" />
        <label>Pele:</label>
        <input type="text" />
        <label>Respiratório:</label>
        <input type="text" />
        <label>Cardiovascular:</label>
        <input type="text" />
        <label>Geniturinário:</label>
        <input type="text" />
        <label>Gastrointestinal:</label>
        <input type="text" />

        <h2>Testes especiais em Ortopedia:</h2>
        <input type="text" />

        <h2>Encurtamento (s) Muscular (es):</h2>

        <div id='DivDiagnóstico'></div>
        <input type="text" />

        <h2>Diagnóstico Cinético Funcional:</h2>
        <input type="text" />

        <h2>Perspectiva do paciente relacionado ao tratamento:</h2>

        <div id='DivPlanoeConduta'></div>
        <input type="text" />

        <h2>Objetivos e Condutas do Programa de Tratamento:</h2>
        <label>Objetivos Curto Prazo:</label>
        <input type="text" />
        <label>Condutas de Curto Prazo:</label>
        <input type="text" />
        <label>Objetivos de Médio Prazo:</label>
        <input type="text" />
        <label>Condutas de Médio Prazo:</label>
        <input type="text" />
        <label>Objetivos de Longo Prazo:</label>
        <input type="text" />
        <label>Condutas de Longo Prazo:</label>
        <input type="text" />

        <h2>CIF:</h2>
        <input type="text" />

        <h2>Orientações ao paciente:</h2>
        <input type="text" />

        <h2>Acadêmico:</h2>
        <input type="text" />

        <h2>Surpervisor:</h2>
        <input type="text" />





      </div>
    </>
  )
}

export default App
