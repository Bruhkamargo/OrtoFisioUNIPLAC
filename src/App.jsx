import { useState } from 'react';

import './App.css'

import Cal_DDN from './Functions/Age_calc';
import CalcIMC from './Functions/IMC';

const App = () => {
  const [ArrayCadastro, SetArrayCadastro] = useState(['', '', '', '', '', 'Masculino', '', '', '', '', '', '']);
  const [StrQP, SetStrQP] = useState('');
  const [StrHDP, SetStrHDP] = useState('');
  const [StrHistoriaSocial, SetStrHistoriaSocial] = useState('');
  const [StrExames, SetStrExames] = useState('');
  const [BoolMedicamentos, SetBoolMedicamentos] = useState(false);
  const [BoolCirugias, SetBoolCirugias] = useState(false);
  const [BoolTratamentos, SetBoolTratamentos] = useState(false);
  const [IntPeso, SetIntPeso] = useState(0);
  const [IntAltura, SetIntAltura] = useState(0);
  const [ArrayIMC, SetArrayIMC] = useState(['', ''])
  const [ArrayPA, SetArrayPA] = useState([0, 0])
  const [IntFR, SetIntFR] = useState(0)
  const [IntFC, SetIntFC] = useState(0)
  const [IntSPO2, SetIntSPO2] = useState(0)

  return (
    <>
      <header>
        <h1>Ficha de Avaliação em Ortopedia, Traumatologia e Reumatologia</h1>
      </header>

      <div id='DivCad'>
        <h2>Cadastro</h2>

        <span className='InputCad'>
          <label>Avaliador: </label>
          <input type="text" value={ArrayCadastro[0]} onChange={(e) => { ArrayCadastro[0] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Data: </label>
          <input type="date" value={ArrayCadastro[1]} onChange={(e) => { ArrayCadastro[1] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Nome: </label>
          <input type="text" value={ArrayCadastro[2]} onChange={(e) => { ArrayCadastro[2] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Data de Nascimento: </label>
          <input type="date" onBlur={(e) => { ArrayCadastro[4] = (Cal_DDN(e.target.value)[0]); SetArrayCadastro([...ArrayCadastro]) }}
            value={ArrayCadastro[3]} onChange={(e) => { ArrayCadastro[3] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Idade: </label>
          <input type="text" value={ArrayCadastro[4]} readOnly />
        </span>
        <span className='InputCad'>
          <label>Sexo: </label>
          <select value={ArrayCadastro[5]} onChange={(e) => { ArrayCadastro[5] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} >
            <option value=""> Selecione o Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </span>
        <span className='InputCad'>
          <label>Telefone: </label>
          <input type="text" value={ArrayCadastro[6]} onChange={(e) => { ArrayCadastro[6] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Endereço: </label>
          <input type="text" value={ArrayCadastro[7]} onChange={(e) => { ArrayCadastro[7] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Profissão: </label>
          <input type="text" value={ArrayCadastro[8]} onChange={(e) => { ArrayCadastro[8] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Diagnóstico Médico: </label>
          <input type="text" value={ArrayCadastro[9]} onChange={(e) => { ArrayCadastro[9] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Nome do Médico: </label>
          <input type="text" value={ArrayCadastro[10]} onChange={(e) => { ArrayCadastro[10] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Tempo de lesão: </label>
          <input type="text" value={ArrayCadastro[11]} onChange={(e) => { ArrayCadastro[11] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>

      </div>

      <div id='DivAnamnese'>
        <h2>Anamnese:</h2>
        <span>
          <label>Queixa Principal:</label>
          <textarea className="TXTArea" value={StrQP} onChange={(e) => { SetStrQP(e.target.value) }} />
        </span>
        <span>
          <label>HDP e HDA:</label>
          <textarea className="TXTArea" value={StrHDP} onChange={(e) => { SetStrHDP(e.target.value) }} />
        </span>
        <span>
          <label>História Social:</label>
          <textarea className="TXTArea" value={StrHistoriaSocial} onChange={(e) => { SetStrHistoriaSocial(e.target.value) }} />
        </span>
        <span>
          <label>Exames Complamentares:</label>
          <textarea className="TXTArea" value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} />
        </span>
        <span className={BoolMedicamentos ? 'YNSpan' : ''}>{/**Sim ou não */}
          <label>Medicamentos em uso:</label>
          <div className='DivRadio'>
            <label>Sim - <input type='radio' checked={BoolMedicamentos ? true : false} onChange={() => { SetBoolMedicamentos(!BoolMedicamentos) }} /></label>
            <label>Não - <input type='radio' checked={BoolMedicamentos ? false : true} onChange={() => { SetBoolMedicamentos(!BoolMedicamentos) }} /></label>
          </div>
          {BoolMedicamentos ?
            <textarea className="TXTArea" value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} />
            :
            <></>}
        </span>
        <span className={BoolCirugias ? 'YNSpan' : ''}>{/**Sim ou não */}
          <label>Cirurgias:</label>
          <div className='DivRadio'>
            <label>Sim - <input type='radio' checked={BoolCirugias ? true : false} onChange={() => { SetBoolCirugias(!BoolCirugias) }} /></label>
            <label>Não - <input type='radio' checked={BoolCirugias ? false : true} onChange={() => { SetBoolCirugias(!BoolCirugias) }} /></label>
          </div>
          {BoolCirugias ?
            <textarea className="TXTArea" value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} />
            :
            <></>}
        </span>
        <span className={BoolTratamentos ? 'YNSpan' : ''}>{/**Sim ou não */}
          <label>Tratamentos anteriores:</label>
          <div className='DivRadio'>
            <label>Sim - <input type='radio' checked={BoolTratamentos ? true : false} onChange={() => { SetBoolTratamentos(!BoolTratamentos) }} /></label>
            <label>Não - <input type='radio' checked={BoolTratamentos ? false : true} onChange={() => { SetBoolTratamentos(!BoolTratamentos) }} /></label>
          </div>
          {BoolTratamentos ?
            <textarea className="TXTArea" value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} />
            :
            <></>}
        </span>
      </div>

      <div id='DivExameFísico'>
        <h2>Exame Físico:</h2>
        <span className='SpanExFi'>
          <label>Peso: (kg)</label>
          <input type="number" value={IntPeso} onChange={(e) => { SetIntPeso(e.target.value) }} />
        </span>
        <span className='SpanExFi'>
          <label>Altura: (cm)</label>
          <input type="number" value={IntAltura} onChange={(e) => { SetIntAltura(e.target.value) }} onBlur={() => { SetArrayIMC(CalcIMC(IntPeso, IntAltura, ArrayCadastro[5])); }} />
        </span>
        <span className='SpanExFi'>
        <label>IMC Classificação:</label>
          <input type="text" value={ArrayIMC[0]} readOnly />
        </span>
        <span className='SpanExFi'>
          <label>IMC Pontuação:</label>
          <input type="text" value={ArrayIMC[1]} readOnly />
        </span>

        <h3>Sinais Vitais:</h3>

        <span className='SpanExFi PASPAD'>
          <label>PA:</label>
          <span>
            <input type="number" value={ArrayPA[0]} onChange={(e) => {ArrayPA[0] = e.target.value; SetArrayPA([...ArrayPA])}}/>
            <label>/</label>
            <input type="number" value={ArrayPA[1]} onChange={(e) => {ArrayPA[1] = e.target.value; SetArrayPA([...ArrayPA])}}/>
          </span>
        </span>

        <span className='SpanExFi'>
          <label>FR (irpm):</label>
          <input type="number" value={IntFR} onChange={(e) => {SetIntFR(e.target.value)}}/>
        </span>
        <span className='SpanExFi'>
          <label>FC (bpm):</label>
          <input type="number" value={IntFC} onChange={(e) => {SetIntFC(e.target.value)}}/>
        </span>
        <span className='SpanExFi'>
          <label>SpO2: (%)</label>
          <input type="number" value={IntSPO2} onChange={(e) => {SetIntSPO2(e.target.value)}}/>
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
