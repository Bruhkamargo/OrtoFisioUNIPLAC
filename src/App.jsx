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
  const [StrMedicamentos, SetStrMedicamentos] = useState('');
  const [StrCirugias, SetStrCirugias] = useState('');
  const [StrTratamentos, SetStrTratamentos] = useState('');
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
  const [BoolVentilatoryStandard, SetBoolVentilatoryStandard] = useState('Diafragmático');
  const [BoolChest, SetBoolChest] = useState('Simétrico');
  const [BoolDyspnea, SetBoolDyspnea] = useState('Dispneico');
  const [StrPulmonaryAuscultation, SetStrPulmonaryAuscultation] = useState('');
  const [StrCardiacAuscultation, SetStrCardiacAuscultation] = useState('');
  const [BoolLaterality, SetBoolLaterality] = useState('Destro');
  const [BoolPainAssessment, SetBoolPainAssessment] = useState([true]);
  const [StrAVD, SetStrAVD] = useState('');
  const [StrInspection, SetStrInspection] = useState('');
  const [StrPalpation, SetStrPalpation] = useState('');
  const [PainAssessment0, SetPainAssessment0] = useState(['', 0, '', '', ''])
  const [PainAssessment1, SetPainAssessment1] = useState(['', 0, '', '', ''])
  const [PainAssessment2, SetPainAssessment2] = useState(['', 0, '', '', ''])
  const [PainAssessment3, SetPainAssessment3] = useState(['', 0, '', '', ''])
  const [PainAssessment4, SetPainAssessment4] = useState(['', 0, '', '', ''])
  const [PainAssessment5, SetPainAssessment5] = useState(['', 0, '', '', ''])
  const [StrSistema01, SetStrSistema01] = useState('');
  const [StrSistema02, SetStrSistema02] = useState('');
  const [StrSistema03, SetStrSistema03] = useState('');
  const [StrSistema04, SetStrSistema04] = useState('');
  const [StrSistema05, SetStrSistema05] = useState('');
  const [StrSistema06, SetStrSistema06] = useState('');
  const [StrSistema07, SetStrSistema07] = useState('');
  const [StrSistema08, SetStrSistema08] = useState('');
  const [StrOrthopedicTest, SetStrOrthopedicTest] = useState('');
  const [StrMuscleShortening, SetStrMuscleShortening] = useState('');
  const [StrDiagnosis, SetStrDiagnosis] = useState('');
  const [ArrayMarcha, SetArrayMarcha] = useState(['', '', '', '', '', '', '', '', '', '']);
  const [StrDescritivoMarcha, SetStrDescritivoMarcha] = useState('')
  const [StrObjectiveCP, SetStrObjectiveCP] = useState('');
  const [StrObjectiveMP, SetStrObjectiveMP] = useState('');
  const [StrObjectiveLP, SetStrObjectiveLP] = useState('');
  const [StrConductCP, SetStrConductCP] = useState('');
  const [StrConductMP, SetStrConductMP] = useState('');
  const [StrConductLP, SetStrConductLP] = useState('');
  const [StrCIF, SetStrCIF] = useState('');
  const [StrPerspective, SetStrPerspective] = useState('');
  const [StrGuidelines, SetStrGuidelines] = useState('');

  // Função para adicionar uma nova dor
  const addPainAssessment = () => {
    console.log('addPainAssessment');
    console.log(BoolPainAssessment);
    SetBoolPainAssessment(prevState => {
      // Se já atingiu o limite, não adiciona mais
      if (prevState.length >= 6) return prevState;
      // Adiciona uma nova dor como 'true' para mostrar o formulário
      return [...prevState, true];
    });
  };

  // Função para remover a última dor
  const removePainAssessment = () => {
    console.log('removePainAssessment');
    console.log(BoolPainAssessment);
    SetBoolPainAssessment(prevState => {
      // Se já há apenas uma dor, mantém o formulário visível
      if (prevState.length <= 1) return prevState;
      // Remove a última dor
      return prevState.slice(0, -1);
    });
  };

  function Save(params) {
    let BoolConfirm = confirm('Salvar?');
    if (!BoolConfirm) {
      return
    } else {
      console.log('Relatorio');
      Relatorio([
        ArrayCadastro, StrQP, StrHDP, StrHistoriaSocial, StrExames, StrMedicamentos, StrCirugias, StrTratamentos,
        IntPeso, IntAltura, ArrayIMC, ArrayPA, IntFR, IntFC, IntSPO2, BoolVentilatoryStandard, BoolChest, BoolDyspnea,
        StrPulmonaryAuscultation, StrCardiacAuscultation, BoolLaterality, StrAVD, StrInspection, StrPalpation,
        PainAssessment0, PainAssessment1, PainAssessment2, PainAssessment3, PainAssessment4, PainAssessment5,
        StrSistema01, StrSistema02, StrSistema03, StrSistema04, StrSistema05, StrSistema06, StrSistema07, StrSistema08,
        StrOrthopedicTest, StrMuscleShortening, StrDiagnosis, ArrayMarcha, StrDescritivoMarcha,
        StrObjectiveCP, StrConductCP, StrObjectiveMP, StrConductMP, StrObjectiveLP, StrConductLP, StrCIF,
        StrPerspective, StrGuidelines
      ])
    }

  }

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
          <textarea className="TXTArea" maxLength={1050} value={StrQP} onChange={(e) => { SetStrQP(e.target.value) }} placeholder='Queixa principal do paciente&#10;Limite de 1000 Caracteres' />
        </span>
        <span>
          <label>HDP e HDA:</label>
          <textarea className="TXTArea" maxLength={1050} value={StrHDP} onChange={(e) => { SetStrHDP(e.target.value) }} placeholder='Histórico da doença atual e pregressa&#10;Limite de 1000 Caracteres' />
        </span>
        <span>
          <label>História Social:</label>
          <textarea className="TXTArea" maxLength={600} value={StrHistoriaSocial} onChange={(e) => { SetStrHistoriaSocial(e.target.value) }} placeholder='História social do paciente&#10;Limite de 600 Caracteres' />
        </span>
        <span>
          <label>Exames Complamentares:</label>
          <textarea className="TXTArea" maxLength={600} value={StrExames} onChange={(e) => { SetStrExames(e.target.value) }} placeholder='Exames complementares do paciente&#10;Limite de 600 Caracteres' />
        </span>
        <span className={BoolMedicamentos ? 'YNSpan' : ''}>{/**Sim ou não */}
          <label>Medicamentos em uso:</label>
          <div className='DivRadio'>
            <label>Sim - <input type='radio' checked={BoolMedicamentos ? true : false} onChange={() => { SetBoolMedicamentos(!BoolMedicamentos) }} /></label>
            <label>Não - <input type='radio' checked={BoolMedicamentos ? false : true} onChange={() => { SetBoolMedicamentos(!BoolMedicamentos) }} /></label>
          </div>
          {BoolMedicamentos ?
            <textarea className="TXTArea" maxLength={600} value={StrMedicamentos} onChange={(e) => { SetStrMedicamentos(e.target.value) }} placeholder='Limite de 600 Caracteres' />
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
            <textarea className="TXTArea" maxLength={600} value={StrCirugias} onChange={(e) => { SetStrCirugias(e.target.value) }} placeholder='Limite de 600 Caracteres' />
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
            <textarea className="TXTArea" maxLength={600} value={StrTratamentos} onChange={(e) => { SetStrTratamentos(e.target.value) }} placeholder='Limite de 600 Caracteres' />
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
          <label>Diafragmático: <input type="checkbox" value={'Diafragmático'} checked={BoolVentilatoryStandard === 'Diafragmático'} onChange={(e) => { SetBoolVentilatoryStandard(e.target.value) }} /></label>
          <label>Apical: <input type="checkbox" value={'Apical'} checked={BoolVentilatoryStandard === 'Apical'} onChange={(e) => { SetBoolVentilatoryStandard(e.target.value) }} /></label>
          <label>Misto: <input type="checkbox" value={'Misto'} checked={BoolVentilatoryStandard === 'Misto'} onChange={(e) => { SetBoolVentilatoryStandard(e.target.value) }} /></label>
        </span>
        <h4>Tórax</h4>
        <span className='SpanHC'>
          <label>Simétrico: <input type="checkbox" value={'Simétrico'} checked={BoolChest === 'Simétrico'} onChange={(e) => { SetBoolChest(e.target.value) }} /></label>
          <label>Assimétrico: <input type="checkbox" value={'Assimétrico'} checked={BoolChest === 'Assimétrico'} onChange={(e) => { SetBoolChest(e.target.value) }} /></label>
        </span>
        <h4>Dispnéia </h4>
        <span className='SpanHC'>
          <label>Dispneico: <input type="checkbox" value={'Dispneico'} checked={BoolDyspnea === 'Dispneico'} onChange={(e) => { SetBoolDyspnea(e.target.value) }} /></label>
          <label>Não Dispneico: <input type="checkbox" value={'Não Dispneico'} checked={BoolDyspnea === 'Não Dispneico'} onChange={(e) => { SetBoolDyspnea(e.target.value) }} /></label>
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Ausculta Pulmonar:</label>
          <textarea className="TXTArea" maxLength={300} value={StrPulmonaryAuscultation} onChange={(e) => { SetStrPulmonaryAuscultation(e.target.value) }} placeholder='Limite de 300 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Ausculta Cardíaca:</label>
          <textarea className="TXTArea" maxLength={300} value={StrCardiacAuscultation} onChange={(e) => { SetStrCardiacAuscultation(e.target.value) }} placeholder='Limite de 300 Caracteres' />
        </span>

        <h3>Lateralidade:</h3>
        <span className='SpanHC'>
          <label>Destro: <input type="checkbox" value={'Destro'} checked={BoolLaterality === 'Destro'} onChange={(e) => { SetBoolLaterality(e.target.value) }} /></label>
          <label>Sinistro: <input type="checkbox" value={'Sinistro'} checked={BoolLaterality === 'Sinistro'} onChange={(e) => { SetBoolLaterality(e.target.value) }} /></label>
          <label>Ambidestro: <input type="checkbox" value={'Ambidestro'} checked={BoolLaterality === 'Ambidestro'} onChange={(e) => { SetBoolLaterality(e.target.value) }} /></label>
        </span>

        <h3>AVD's - AVP's:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrAVD} onChange={(e) => { SetStrAVD(e.target.value) }} maxLength={1100}
            placeholder='Atividade de Vida Diária e Vida Prática; Descreva as atividades executadas no dia à dia do paciente, podendo pontuar aqui os momentos de dispinéia expermentados por ele.&#10;Limite de 1000 Caracteres' />
        </span>

        <h3>Inspeção:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrInspection} onChange={(e) => { SetStrInspection(e.target.value) }} maxLength={1100}
            placeholder='Observação do paciente (estago geral e emocional); Verficação do estado geral da pele, alterações cutâneas e articulares detalhadas e localização; Presença de curativos, fixadores, cicatrizes e manchas.&#10;Limite de 1000 Caracteres' />
        </span>

        <h3>Palpação:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrPalpation} onChange={(e) => { SetStrPalpation(e.target.value) }} maxLength={1100}
            placeholder='Tonus, trofismo, presença de triggers points, dor a palpação (localização), edema local.&#10;Limite de 1000 Caracteres' />
        </span>

        <h3>Avaliação Subjetiva da DOR:</h3>
        <div className='DivDOR'>
          {BoolPainAssessment[0] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment0[0]} onChange={(e) => { PainAssessment0[0] = e.target.value; SetPainAssessment0([...PainAssessment0]) }} /> </label>
              <label>EVA: ({PainAssessment0[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment0[1]} onChange={(e) => { PainAssessment0[1] = e.target.value; SetPainAssessment0([...PainAssessment0]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment0[2]} onChange={(e) => { PainAssessment0[2] = e.target.value; SetPainAssessment0([...PainAssessment0]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment0[3]} onChange={(e) => { PainAssessment0[3] = e.target.value; SetPainAssessment0([...PainAssessment0]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment0[4]} onChange={(e) => { PainAssessment0[4] = e.target.value; SetPainAssessment0([...PainAssessment0]) }} /> </label>
            </span> : <></>}
          {BoolPainAssessment[1] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment1[0]} onChange={(e) => { PainAssessment1[0] = e.target.value; SetPainAssessment1([...PainAssessment1]) }} /> </label>
              <label>EVA: ({PainAssessment1[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment1[1]} onChange={(e) => { PainAssessment1[1] = e.target.value; SetPainAssessment1([...PainAssessment1]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment1[2]} onChange={(e) => { PainAssessment1[2] = e.target.value; SetPainAssessment1([...PainAssessment1]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment1[3]} onChange={(e) => { PainAssessment1[3] = e.target.value; SetPainAssessment1([...PainAssessment1]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment1[4]} onChange={(e) => { PainAssessment1[4] = e.target.value; SetPainAssessment1([...PainAssessment1]) }} /> </label>
            </span> : <></>}
          {BoolPainAssessment[2] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment2[0]} onChange={(e) => { PainAssessment2[0] = e.target.value; SetPainAssessment2([...PainAssessment2]) }} /> </label>
              <label>EVA: ({PainAssessment2[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment2[1]} onChange={(e) => { PainAssessment2[1] = e.target.value; SetPainAssessment2([...PainAssessment2]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment2[2]} onChange={(e) => { PainAssessment2[2] = e.target.value; SetPainAssessment2([...PainAssessment2]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment2[3]} onChange={(e) => { PainAssessment2[3] = e.target.value; SetPainAssessment2([...PainAssessment2]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment2[4]} onChange={(e) => { PainAssessment2[4] = e.target.value; SetPainAssessment2([...PainAssessment2]) }} /> </label>
            </span> : <></>}
          {BoolPainAssessment[3] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment3[0]} onChange={(e) => { PainAssessment3[0] = e.target.value; SetPainAssessment3([...PainAssessment3]) }} /> </label>
              <label>EVA: ({PainAssessment3[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment3[1]} onChange={(e) => { PainAssessment3[1] = e.target.value; SetPainAssessment3([...PainAssessment3]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment3[2]} onChange={(e) => { PainAssessment3[2] = e.target.value; SetPainAssessment3([...PainAssessment3]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment3[3]} onChange={(e) => { PainAssessment3[3] = e.target.value; SetPainAssessment3([...PainAssessment3]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment3[4]} onChange={(e) => { PainAssessment3[4] = e.target.value; SetPainAssessment3([...PainAssessment3]) }} /> </label>
            </span> : <></>}
          {BoolPainAssessment[4] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment4[0]} onChange={(e) => { PainAssessment4[0] = e.target.value; SetPainAssessment4([...PainAssessment4]) }} /> </label>
              <label>EVA: ({PainAssessment4[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment4[1]} onChange={(e) => { PainAssessment4[1] = e.target.value; SetPainAssessment4([...PainAssessment4]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment4[2]} onChange={(e) => { PainAssessment4[2] = e.target.value; SetPainAssessment4([...PainAssessment4]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment4[3]} onChange={(e) => { PainAssessment4[3] = e.target.value; SetPainAssessment4([...PainAssessment4]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment4[4]} onChange={(e) => { PainAssessment4[4] = e.target.value; SetPainAssessment4([...PainAssessment4]) }} /> </label>
            </span> : <></>}
          {BoolPainAssessment[5] == true ?
            <span>
              <label>Data de Inicio: <input type="date" value={PainAssessment5[0]} onChange={(e) => { PainAssessment5[0] = e.target.value; SetPainAssessment5([...PainAssessment5]) }} /> </label>
              <label>EVA: ({PainAssessment5[1]}) <input type="range" min={0} max={10} step={1} value={PainAssessment5[1]} onChange={(e) => { PainAssessment5[1] = e.target.value; SetPainAssessment5([...PainAssessment5]) }} /> </label>
              <label>Local: <input type="text" value={PainAssessment5[2]} onChange={(e) => { PainAssessment5[2] = e.target.value; SetPainAssessment5([...PainAssessment5]) }} /> </label>
              <label>Característica: <input type="text" value={PainAssessment5[3]} onChange={(e) => { PainAssessment5[3] = e.target.value; SetPainAssessment5([...PainAssessment5]) }} /> </label>
              <label>Quando Ocorre: <input type="text" value={PainAssessment5[4]} onChange={(e) => { PainAssessment5[4] = e.target.value; SetPainAssessment5([...PainAssessment5]) }} /> </label>
            </span> : <></>}
          <span className='SpanButtonsDor'>
            <button onClick={removePainAssessment}>- Descadastrar dor</button>
            <button onClick={addPainAssessment}>+ Cadastrar dor</button>
          </span>
        </div>

        <h3>Revisão de Sistemas:</h3>
        <span className='SpanRevisaoDeSistema'>
          <label>Alteração de peso:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema01} onChange={(e) => { SetStrSistema01(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Apetite:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema02} onChange={(e) => { SetStrSistema02(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Sono:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema03} onChange={(e) => { SetStrSistema03(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Pele:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema04} onChange={(e) => { SetStrSistema04(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Respiratório:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema05} onChange={(e) => { SetStrSistema05(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Cardiovascular:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema06} onChange={(e) => { SetStrSistema06(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Geniturinário:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema07} onChange={(e) => { SetStrSistema07(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Gastrointestinal:</label>
          <textarea className="TXTArea" maxLength={270} value={StrSistema08} onChange={(e) => { SetStrSistema08(e.target.value) }}
            placeholder='Limite de 270 Caracteres' />
        </span>

        <h3>Testes especiais em Ortopedia:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrOrthopedicTest} onChange={(e) => { SetStrOrthopedicTest(e.target.value) }} maxLength={1100}
            placeholder='Limite de 1000 Caracteres' />
        </span>

        <h3>Encurtamento(s) Muscular(es):</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrMuscleShortening} onChange={(e) => { SetStrMuscleShortening(e.target.value) }} maxLength={1100}
            placeholder='Limite de 1000 Caracteres' />
        </span>

        <h3>Diagnóstico Cinético Funcional:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrDiagnosis} onChange={(e) => { SetStrDiagnosis(e.target.value) }} maxLength={1100}
            placeholder='Limite de 1000 Caracteres' />
        </span>

        <h3>Analise da Marcha</h3>

        <img src={CicloDaMarcha} alt="" />

        <span className='SpanMarcha'>
          <label>Início da Marcha: </label>
          <select value={ArrayMarcha[0]} onChange={(e) => { ArrayMarcha[0] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Hesitação ou várias tentativas para iniciar</option>
            <option value="1">Sem Hesitação</option>
          </select>
        </span>
        <span className='SpanMarcha'>

          <label>Comprimento dos Passos (Direito)</label>
          <select value={ArrayMarcha[1]} onChange={(e) => { ArrayMarcha[1] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Não ultrapassa o pé esquerdo</option>
            <option value="1">Ultrapassa o pé esquerdo</option>
          </select>

        </span>
        <span className='SpanMarcha'>
          <label>Altura dos Passos (Direito)</label>
          <select value={ArrayMarcha[2]} onChange={(e) => { ArrayMarcha[2] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Não sai completamento do chão</option>
            <option value="1">Sai completamento do chão</option>
          </select>

        </span>
        <span className='SpanMarcha'>
          <label>Comprimento dos Passos (Esquerdo)</label>
          <select value={ArrayMarcha[3]} onChange={(e) => { ArrayMarcha[3] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Não ultrapassa o pé direito</option>
            <option value="1">Ultrapassa o pé direito</option>
          </select>

        </span >
        <span className='SpanMarcha'>
          <label>Altura dos Passos (Esquerdo)</label>
          <select value={ArrayMarcha[4]} onChange={(e) => { ArrayMarcha[4] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Não sai completamento do chão</option>
            <option value="1">Sai completamento do chão</option>
          </select>

        </span >
        <span className='SpanMarcha'>
          <label>Simetria dos passos</label>
          <select value={ArrayMarcha[5]} onChange={(e) => { ArrayMarcha[5] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Passos diferentes</option>
            <option value="1">Passos semelhantes</option>
          </select>

        </span>
        <span className='SpanMarcha'>
          <label>Continuidade dos passos</label>
          <select value={ArrayMarcha[6]} onChange={(e) => { ArrayMarcha[6] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Paradas ou Passos descontínuos</option>
            <option value="1">Passos Continuos</option>
          </select>

        </span>
        <span className='SpanMarcha'>
          <label>Direção</label>
          <select value={ArrayMarcha[7]} onChange={(e) => { ArrayMarcha[7] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Desvio nítido</option>
            <option value="1">Desvio leve ou moderado ou uso de apoio</option>
            <option value="2">Linha reta sem apoio</option>
          </select>
        </span>

        <span className='SpanMarcha'>
          <label>Tronco</label>
          <select value={ArrayMarcha[8]} onChange={(e) => { ArrayMarcha[8] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Balanço grave ou uso de apoio</option>
            <option value="1">Flexão dos joelhos ou dorso ou abertura dos braços</option>
            <option value="2">Sem flexão, balanço, não usa os braços ou apoio</option>
          </select>

        </span>
        <span className='SpanMarcha'>
          <label>Distância dos tronozelos</label>
          <select value={ArrayMarcha[9]} onChange={(e) => { ArrayMarcha[9] = e.target.value; SetArrayMarcha([...ArrayMarcha]) }}>
            <option value=""></option>
            <option value="0">Tronozelos Sepadados</option>
            <option value="1">Tronozelos quase se toncam enquanto anda</option>
          </select>
        </span>

        <h3>Análise Descritiva:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" value={StrDescritivoMarcha} onChange={(e) => { SetStrDescritivoMarcha(e.target.value) }} maxLength={1100}
            placeholder='Limite de 1000 Caracteres' />
        </span>

        <h3>Objetivos e Condutas</h3>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos Curto Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrObjectiveCP} onChange={(e) => { SetStrObjectiveCP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Curto Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrConductCP} onChange={(e) => { SetStrConductCP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos de Médio Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrObjectiveMP} onChange={(e) => { SetStrObjectiveMP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Médio Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrConductMP} onChange={(e) => { SetStrConductMP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Objetivos de Longo Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrObjectiveLP} onChange={(e) => { SetStrObjectiveLP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>
        <span className='SpanRevisaoDeSistema'>
          <label>Condutas de Longo Prazo:</label>
          <textarea className="TXTArea" maxLength={350} value={StrConductLP} onChange={(e) => { SetStrConductLP(e.target.value) }}
            placeholder='Limite de 350 Caracteres' />
        </span>

        <h3 title='Classificação Internacional de Funcionalidade'>CIF:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" maxLength={350} value={StrCIF} onChange={(e) => { SetStrCIF(e.target.value) }} placeholder='Classificação Internacional de Funcionalidade. Limite de 350 Caracteres' />
        </span>

        <h3>Perspectiva do paciente</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" maxLength={1000} value={StrPerspective} onChange={(e) => { SetStrPerspective(e.target.value) }} placeholder='Qual aperspectiva do paciente a cerca do tratamento. Limite de 1000 Caracteres' />
        </span>

        <h3>Orientações ao paciente:</h3>
        <span className='SpanTxtArea'>
          <textarea className="TXTArea" maxLength={1000} value={StrGuidelines} onChange={(e) => { SetStrGuidelines(e.target.value) }} placeholder='Limite de 1000 Caracteres' />
        </span>
      </div>

      <footer>
        <button onClick={() => { Save() }}>Salvar</button>
        <h2><span className='Span1'>FISIOTERAPIA</span> - <span className='Span2'>UNIPLAC</span></h2>
      </footer>
    </>
  )
}

export default App
