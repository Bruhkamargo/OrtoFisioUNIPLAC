import { useState } from 'react';

import './App.css'

import CicloDaMarcha from './assets/CicloDaMarcha.png'

import Cal_DDN from './Functions/Age_calc';
import CalcIMC from './Functions/IMC';

import Relatorio from './Functions/Relatorio';

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
  const [ArrayIMC, SetArrayIMC] = useState(['', '']);
  const [ArrayPA, SetArrayPA] = useState([0, 0]);
  const [IntFR, SetIntFR] = useState(0);
  const [IntFC, SetIntFC] = useState(0);
  const [IntSPO2, SetIntSPO2] = useState(0);
  const [StrInspection, SetStrInspection] = useState('');
  const [StrPalpation, SetStrPalpation] = useState('');
  const [StrAVD, SetStrAVD] = useState('');
  const [BoolLaterality, SetBoolLaterality] = useState('Option1')
  const [StrPainAssessment, SetStrPainAssessment] = useState('')

  /**Handeds */
  const handleLateralityChange = (event) => {
    SetBoolLaterality(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Ficha de Avaliação em Ortopedia, Traumatologia e Reumatologia</h1>
      </header>

      <div id='DivCad'>
        <h2>Cadastro</h2>

        <span className='InputCad'>
          <label>Avaliador: </label>
          <input type="text" value={ArrayCadastro[0]} onChange={(e) => { ArrayCadastro[0] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Nome do Avaliador' />
        </span>
        <span className='InputCad'>
          <label>Data: </label>
          <input type="date" value={ArrayCadastro[1]} onChange={(e) => { ArrayCadastro[1] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Nome: </label>
          <input type="text" value={ArrayCadastro[2]} onChange={(e) => { ArrayCadastro[2] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Nome do Paciente' />
        </span>
        <span className='InputCad'>
          <label>Data de Nascimento: </label>
          <input type="date" onBlur={(e) => { ArrayCadastro[4] = (Cal_DDN(e.target.value)[0]); SetArrayCadastro([...ArrayCadastro]) }}
            value={ArrayCadastro[3]} onChange={(e) => { ArrayCadastro[3] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }} />
        </span>
        <span className='InputCad'>
          <label>Idade: </label>
          <input type="text" value={ArrayCadastro[4]} readOnly placeholder='Preencha a data de nascimento' />
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
          <input type="text" value={ArrayCadastro[6]} onChange={(e) => { ArrayCadastro[6] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='(49) 9xxxxxxxx' />
        </span>
        <span className='InputCad'>
          <label>Endereço: </label>
          <input type="text" value={ArrayCadastro[7]} onChange={(e) => { ArrayCadastro[7] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Endereço do paciente' />
        </span>
        <span className='InputCad'>
          <label>Profissão: </label>
          <input type="text" value={ArrayCadastro[8]} onChange={(e) => { ArrayCadastro[8] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Ocupação do paciente' />
        </span>
        <span className='InputCad'>
          <label>Diagnóstico Médico: </label>
          <input type="text" value={ArrayCadastro[9]} onChange={(e) => { ArrayCadastro[9] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Diagnóstico do encaminhamento' />
        </span>
        <span className='InputCad'>
          <label>Nome do Médico: </label>
          <input type="text" value={ArrayCadastro[10]} onChange={(e) => { ArrayCadastro[10] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Nome do Médico' />
        </span>
        <span className='InputCad'>
          <label>Tempo de lesão: </label>
          <input type="text" value={ArrayCadastro[11]} onChange={(e) => { ArrayCadastro[11] = e.target.value; SetArrayCadastro([...ArrayCadastro]) }}
            placeholder='Tempo de lesão' />
        </span>

      </div>

      <div id='DivAnamnese'>
        <h2>Anamnese:</h2>
        <span>
          <label>Queixa Principal:</label>
          <textarea className="TXTArea" value={StrQP} onChange={(e) => { SetStrQP(e.target.value) }} placeholder='Queixa principal do paciente' />
        </span>
        <span>
          <label>HDP e HDA:</label>
          <textarea className="TXTArea" value={StrHDP} onChange={(e) => { SetStrHDP(e.target.value) }} placeholder='Histórico da doença atual e pregressa' />
        </span>
        <span>
          <label>História Social:</label>
          <textarea className="TXTArea" value={StrHistoriaSocial} onChange={(e) => { SetStrHistoriaSocial(e.target.value) }} placeholder='História social do paciente' />
        </span>
        <span>
          <label>Exames Complamentares:</label>
          <textarea className="TXTArea" value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} placeholder='Exames complementares do paciente' />
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
          <input type="text" value={ArrayIMC[0]} readOnly placeholder='Preencha: Peso e altura' />
        </span>
        <span className='SpanExFi'>
          <label>IMC Pontuação:</label>
          <input type="text" value={ArrayIMC[1]} readOnly placeholder='Preencha: Peso e altura' />
        </span>

        <h3>Sinais Vitais:</h3>

        <span className='SpanExFi PASPAD'>
          <label>PA:</label>
          <span>
            <input type="number" value={ArrayPA[0]} onChange={(e) => { ArrayPA[0] = e.target.value; SetArrayPA([...ArrayPA]) }} />
            <label>/</label>
            <input type="number" value={ArrayPA[1]} onChange={(e) => { ArrayPA[1] = e.target.value; SetArrayPA([...ArrayPA]) }} />
          </span>
        </span>

        <span className='SpanExFi'>
          <label>FR (irpm):</label>
          <input type="number" value={IntFR} onChange={(e) => { SetIntFR(e.target.value) }} />
        </span>
        <span className='SpanExFi'>
          <label>FC (bpm):</label>
          <input type="number" value={IntFC} onChange={(e) => { SetIntFC(e.target.value) }} />
        </span>
        <span className='SpanExFi'>
          <label>SpO2: (%)</label>
          <input type="number" value={IntSPO2} onChange={(e) => { SetIntSPO2(e.target.value) }} />
        </span>
        <h4>Padrão Ventilatório</h4>
        <span className='SpanHC'>
          <label>Diafragmático: <input type="checkbox" value={'Option1'} checked={BoolLaterality === 'Option1'} onChange={handleLateralityChange} /></label>
          <label>Apical: <input type="checkbox" value={'Option2'} checked={BoolLaterality === 'Option2'} onChange={handleLateralityChange} /></label>
          <label>Misto: <input type="checkbox" value={'Option3'} checked={BoolLaterality === 'Option3'} onChange={handleLateralityChange} /></label>
        </span>
        <h4>Tórax</h4>
        <span className='SpanHC'>
          <label>Simétrico: <input type="checkbox" value={'Option1'} checked={BoolLaterality === 'Option1'} onChange={handleLateralityChange} /></label>
          <label>Assimétrico: <input type="checkbox" value={'Option2'} checked={BoolLaterality === 'Option2'} onChange={handleLateralityChange} /></label>
        </span>
        <h4>Dispnéia </h4>
        <span className='SpanHC'>
          <label>Dispneico : <input type="checkbox" value={'Option1'} checked={BoolLaterality === 'Option1'} onChange={handleLateralityChange} /></label>
          <label>Não Dispneico: <input type="checkbox" value={'Option2'} checked={BoolLaterality === 'Option2'} onChange={handleLateralityChange} /></label>
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Ausculta Pulmonar:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Ausculta Cardíaca:</label>
          <textarea className="TXTArea" />
        </span>

        <h3>AVD's - AVP's:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrAVD} onChange={(e) => { SetStrAVD(e.target.value) }} 
            placeholder='Atividade de Vida Diária e Vida Prática; Descreva as atividades executadas no dia à dia do paciente, podendo pontuar aqui os momentos de dispinéia expermentados por ele.'/>
        </span>

        <h3>Inspeção:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrInspection} onChange={(e) => { SetStrInspection(e.target.value) }}
            placeholder='Observação do paciente (estago geral e emocional); Verficação do estado geral da pele, alterações cutâneas e articulares detalhadas e localização; Presença de curativos, fixadores, cicatrizes e manchas.' />
        </span>

        <h3>Palpação:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrPalpation} onChange={(e) => { SetStrPalpation(e.target.value) }}
            placeholder='Tonus, trofismo, presença de triggers points, dor a palpação (localização), edema local.' />
        </span>

        <h3>Lateralidade:</h3>
        <span className='SpanHC'>
          <label>Destro: <input type="checkbox" value={'Option1'} checked={BoolLaterality === 'Option1'} onChange={handleLateralityChange} /></label>
          <label>Sinistro: <input type="checkbox" value={'Option2'} checked={BoolLaterality === 'Option2'} onChange={handleLateralityChange} /></label>
          <label>Ambidestro: <input type="checkbox" value={'Option3'} checked={BoolLaterality === 'Option3'} onChange={handleLateralityChange} /></label>
        </span>

        <h3>Avaliação Subjetiva da DOR:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrPainAssessment} onChange={(e) => { SetStrPainAssessment(e.target.value) }} placeholder='Caracteristica da dor' />
        </span>

        <h3>Revisão de Sistemas:</h3>
        <span className='SpanRevisaoDeSistema'>
          <label>Alteração de peso:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Apetite:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Sono:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Pele:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Respiratório:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Cardiovascular:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Geniturinário:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Gastrointestinal:</label>
          <textarea className="TXTArea" />
        </span>

        <h3>Testes especiais em Ortopedia:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>

        <h3>Encurtamento(s) Muscular(es):</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>

        <h3>Diagnóstico Cinético Funcional:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>

        <h3>Perspectiva do paciente</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>

        <h3>Analise da Marcha</h3>

        <img src={CicloDaMarcha} alt="" />

        <h3>Objetivos e Condutas</h3>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos Curto Prazo:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Curto Prazo:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos de Médio Prazo:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Médio Prazo:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos de Longo Prazo:</label>
          <textarea className="TXTArea" />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Longo Prazo:</label>
          <textarea className="TXTArea" />
        </span>

        <h3 title='Classificação Internacional de Funcionalidade'>CIF:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" placeholder='Classificação Internacional de Funcionalidade' />
        </span>

        <h3>Orientações ao paciente:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>

        <h3>Acadêmico:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" />
        </span>
      </div>

      <footer>
        <button onClick={() => { console.log('Relatorio'); Relatorio() }}>Salvar</button>
        <h2><span className='Span1'>FISIOTERAPIA</span> - <span className='Span2'>UNIPLAC</span></h2>
      </footer>
    </>
  )
}

export default App
