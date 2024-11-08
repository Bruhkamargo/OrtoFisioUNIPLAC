import jsPDF from "jspdf";

/**
 * @description 
 * A folha padrão é A4, retrato usa como medida milimetros 
 * A4 H:297 W:210 a margem padrão é de 15mm
 * 
 * formatar data com moment
 */
export default async (Patient) => {
    // Create a new jsPDF instance
    const pdfDoc = new jsPDF({ orientation: "portrait" });

    //addImage(imageData, format, x, y, width, height, alias, compression, rotation)

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);
    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(15);
    pdfDoc.text("FICHA DE AVALIAÇÃO : CLÍNICA ESCOLA DE FISIOTERAPIA", 110, 26, null, null, "center");
    pdfDoc.setFontSize(15);
    pdfDoc.text("ÁREAS: ORTOPEDIA, TRAUMATOLOGIA E REUMATOLOGIA", 110, 33, null, null, "center");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.text(`Avaliador: ${Patient[0][0]}`, 15, 50); pdfDoc.text(`Data da Avaliação: ${Patient[0][1]}`, 140, 43);
    pdfDoc.text(`Nome: ${Patient[0][2]}`, 15, 57); pdfDoc.text(`Sexo: ${Patient[0][5]}`, 140, 57);
    pdfDoc.text(`Idade: ${Patient[0][4]}`, 15, 64); pdfDoc.text(`Data de Nascimento: ${Patient[0][3]}`, 140, 64);
    pdfDoc.text(`Telefone: ${Patient[0][6]}`, 15, 71);
    pdfDoc.text(`Endereço: ${Patient[0][7]}`, 15, 78);
    pdfDoc.text(`Profissão: ${Patient[0][8]}`, 15, 85);
    pdfDoc.text(`Dianóstico Médico: ${Patient[0][9]}`, 15, 92);
    pdfDoc.text(`Nome do Médico: ${Patient[0][10]}`, 15, 99);
    pdfDoc.text(`Tempo da Lesão: ${Patient[0][11]}`, 15, 106);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(15);
    pdfDoc.text("ANAMNESE", 110, 116, null, null, "center");

    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 120, 180, 7, " "); pdfDoc.text('Queixa Principal:', 20, 125);
    pdfDoc.cell(15, 127, 180, 63, " ");
    pdfDoc.cell(15, 190, 180, 7, " "); pdfDoc.text('História da Doença Atual e História da Doença Pregressa:', 20, 195);
    pdfDoc.cell(15, 197, 180, 63, " ");
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    /**QP */
    pdfDoc.text(`${Patient[1]}`, 17, 132, { maxWidth: 176, align: "left" })
    /**HDP */
    pdfDoc.text(`${Patient[2]}`, 17, 203, { maxWidth: 176, align: "left" })

    // Falta os TEXTOS AQUI

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 2

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 30, 180, 7, " "); pdfDoc.text('História Social:', 20, 35);
    pdfDoc.cell(15, 37, 180, 42, " ");

    pdfDoc.cell(15, 81, 180, 7, " "); pdfDoc.text('Exames Complementares:', 20, 86);
    pdfDoc.cell(15, 88, 180, 42, " ");

    pdfDoc.cell(15, 132, 180, 7, " "); pdfDoc.text('Medicamentos em Uso:', 20, 137);
    pdfDoc.cell(15, 139, 180, 42, " ");

    pdfDoc.cell(15, 183, 180, 7, " "); pdfDoc.text('Cirugias:', 20, 188);
    pdfDoc.cell(15, 190, 180, 35, " ");

    pdfDoc.cell(15, 227, 180, 7, " "); pdfDoc.text('Tratamentos Anteriores:', 20, 232);
    pdfDoc.cell(15, 234, 180, 35, " ");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.text(`${Patient[3]}`, 17, 42, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[4]}`, 17, 93, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[5]}`, 17, 144, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[6]}`, 17, 195, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[7]}`, 17, 239, { maxWidth: 176, align: "left" })

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 3

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("EXAME FÍSICO", 110, 35, null, null, "center");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.text(`Peso: ${Patient[8]}`, 15, 52);
    pdfDoc.text(`Altura: ${Patient[9]}`, 15, 59);
    pdfDoc.text(`IMC Classificação: ${Patient[10][0]}`, 15, 66);
    pdfDoc.text(`IMC Pontuação: ${Patient[10][1]}`, 15, 73);

    /**Tabelinha IMC */
    pdfDoc.cell(105, 45, 90, 7, " "); pdfDoc.text('Classificação', 107, 51); pdfDoc.text('IMC', 165, 51);
    pdfDoc.cell(105, 52, 90, 7, " "); pdfDoc.text('Abaixo do peso', 107, 58); pdfDoc.text('Abaixo de 18,5', 165, 58);
    pdfDoc.cell(105, 59, 90, 7, " "); pdfDoc.text('Peso normal', 107, 65); pdfDoc.text('18,5 - 24,9', 165, 65);
    pdfDoc.cell(105, 66, 90, 7, " "); pdfDoc.text('Sobrepeso', 107, 72); pdfDoc.text('24,9 - 29,9', 165, 72);
    pdfDoc.cell(105, 73, 90, 7, " "); pdfDoc.text('Obesidade Grau I', 107, 79); pdfDoc.text('30 - 34,9', 165, 79);
    pdfDoc.cell(105, 80, 90, 7, " "); pdfDoc.text('Obesidade Grau II', 107, 86); pdfDoc.text('35 - 39,9', 165, 86);
    pdfDoc.cell(105, 87, 90, 7, " "); pdfDoc.text('Obesidade Grau III', 107, 93); pdfDoc.text('>= 40', 165, 93);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("SINAIS VITAIS", 110, 110, null, null, "center");

    pdfDoc.setFontSize(12);
    pdfDoc.setFont("helvetica", "normal");

    pdfDoc.cell(15, 120, 45, 7, " "); pdfDoc.text(`PA: ${Patient[11][0]} / ${Patient[11][1]} mmhg`, 17, 126);
    pdfDoc.cell(60, 120, 45, 7, " "); pdfDoc.text(`FR: ${Patient[12]} irpm`, 62, 126);
    pdfDoc.cell(105, 120, 45, 7, " "); pdfDoc.text(`FC: ${Patient[13]} bpm`, 107, 126);
    pdfDoc.cell(150, 120, 45, 7, " "); pdfDoc.text(`Spo2: ${Patient[14]}%`, 152, 126);

    /*Gambiarra bold*/
    pdfDoc.text('Ausculta Pulmonar:', 15, 143);
    pdfDoc.text('Ausculta Pulmonar:', 15, 143);
    pdfDoc.text('Ausculta Cardíaca:', 15, 165);
    pdfDoc.text('Ausculta Cardíaca:', 15, 165);
    pdfDoc.text('Padrão Ventilatório', 15, 136);
    pdfDoc.text('Padrão Ventilatório', 15, 136);
    pdfDoc.text('Tórax:', 90, 136);
    pdfDoc.text('Tórax:', 90, 136);
    pdfDoc.text('Dispnéia:', 135, 136);
    pdfDoc.text('Dispnéia:', 135, 136);
    pdfDoc.text('Lateralidade:', 15, 187);
    pdfDoc.text('Lateralidade:', 15, 187);
    /*Gambiarra bold*/

    pdfDoc.text(`Padrão Ventilatório: ${Patient[15]}`, 15, 136);
    pdfDoc.text(`Tórax: ${Patient[16]}`, 90, 136);
    pdfDoc.text(`Dispnéia: ${Patient[17]} `, 135, 136);
    pdfDoc.text(`Ausculta Pulmonar: ${Patient[18]}`, 15, 143, { maxWidth: 180, align: "left" });
    pdfDoc.text(`Ausculta Cardíaca: ${Patient[19]}`, 15, 165, { maxWidth: 180, align: "left" });

    pdfDoc.text(`Lateralidade: ${Patient[20]} `, 15, 187);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 192, 180, 7, " "); pdfDoc.text("AVD's - AVP's:", 18, 198);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    pdfDoc.cell(15, 199, 180, 63, " ");
    pdfDoc.text(`${Patient[21]}`, 17, 204, { maxWidth: 176, align: "left" })

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 4

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 35, 180, 7, " "); pdfDoc.text('Inpeção:', 18, 41);
    pdfDoc.cell(15, 112, 180, 7, " "); pdfDoc.text('Palpação:', 18, 118);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    pdfDoc.cell(15, 42, 180, 70, " "); /**Inspeção texto*/
    pdfDoc.text(`${Patient[22]}`, 17, 47, { maxWidth: 176, align: "left" })
    pdfDoc.cell(15, 119, 180, 70, " "); /**Palpação  texto*/
    pdfDoc.text(`${Patient[23]}`, 17, 124, { maxWidth: 176, align: "left" })

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("AVALIAÇÃO SUBJETIVA DA DOR", 110, 200, null, null, "center");

    pdfDoc.cell(15, 204, 36, 7, ' '); pdfDoc.text('Data:', 17, 209);
    pdfDoc.cell(51, 204, 36, 7, ' '); pdfDoc.text('EVA:', 53, 209);
    pdfDoc.cell(87, 204, 36, 7, ' '); pdfDoc.text('Local:', 89, 209);
    pdfDoc.cell(123, 204, 36, 7, ' '); pdfDoc.text('Característica:', 125, 209);
    pdfDoc.cell(159, 204, 36, 7, ' '); pdfDoc.text('Quando Ocorre:', 161, 209);

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.cell(15, 211, 36, 7,  ' '); pdfDoc.text(`${Patient[24][0]}`, 17, 216);/*Data*/
    pdfDoc.cell(51, 211, 36, 7,  ' '); pdfDoc.text(`${Patient[24][1]}`, 53, 216);/*EVA*/
    pdfDoc.cell(87, 211, 36, 7,  ' '); pdfDoc.text(`${Patient[24][2]}`, 89, 216);/*Local*/
    pdfDoc.cell(123, 211, 36, 7, ' '); pdfDoc.text(`${Patient[24][3]}`, 125, 216);/*Característica*/
    pdfDoc.cell(159, 211, 36, 7, ' '); pdfDoc.text(`${Patient[24][4]}`, 161, 216);/*Quando Ocorre*/

    pdfDoc.cell(15, 218, 36, 7,  ' ');  pdfDoc.text(`${Patient[25][0]}`, 17, 223);/*Data*/
    pdfDoc.cell(51, 218, 36, 7,  ' ');  pdfDoc.text(`${Patient[25][1]}`, 53, 223);/*EVA*/
    pdfDoc.cell(87, 218, 36, 7,  ' ');  pdfDoc.text(`${Patient[25][2]}`, 89, 223);/*Local*/
    pdfDoc.cell(123, 218, 36, 7, ' ');  pdfDoc.text(`${Patient[25][3]}`, 125, 223);/*Característica*/
    pdfDoc.cell(159, 218, 36, 7, ' ');  pdfDoc.text(`${Patient[25][4]}`, 161, 223);/*Quando Ocorre*/

    pdfDoc.cell(15, 225, 36, 7,  ' ');  pdfDoc.text(`${Patient[26][0]}`, 17, 230);/*Data*/
    pdfDoc.cell(51, 225, 36, 7,  ' ');  pdfDoc.text(`${Patient[26][1]}`, 53, 230);/*EVA*/
    pdfDoc.cell(87, 225, 36, 7,  ' ');  pdfDoc.text(`${Patient[26][2]}`, 89, 230);/*Local*/
    pdfDoc.cell(123, 225, 36, 7, ' ');  pdfDoc.text(`${Patient[26][3]}`, 125, 230);/*Característica*/
    pdfDoc.cell(159, 225, 36, 7, ' ');  pdfDoc.text(`${Patient[26][4]}`, 161, 230);/*Quando Ocorre*/

    pdfDoc.cell(15, 232, 36, 7,  ' ');  pdfDoc.text(`${Patient[27][0]}`, 17, 237);/*Data*/
    pdfDoc.cell(51, 232, 36, 7,  ' ');  pdfDoc.text(`${Patient[27][1]}`, 53, 237);/*EVA*/
    pdfDoc.cell(87, 232, 36, 7,  ' ');  pdfDoc.text(`${Patient[27][2]}`, 89, 237);/*Local*/
    pdfDoc.cell(123, 232, 36, 7, ' ');  pdfDoc.text(`${Patient[27][3]}`, 125, 237);/*Característica*/
    pdfDoc.cell(159, 232, 36, 7, ' ');  pdfDoc.text(`${Patient[27][4]}`, 161, 237);/*Quando Ocorre*/

    pdfDoc.cell(15, 239, 36, 7,  ' ');  pdfDoc.text(`${Patient[28][0]}`, 17, 244);/*Data*/
    pdfDoc.cell(51, 239, 36, 7,  ' ');  pdfDoc.text(`${Patient[28][1]}`, 53, 244);/*EVA*/
    pdfDoc.cell(87, 239, 36, 7,  ' ');  pdfDoc.text(`${Patient[28][2]}`, 89, 244);/*Local*/
    pdfDoc.cell(123, 239, 36, 7, ' ');  pdfDoc.text(`${Patient[28][3]}`, 125, 244);/*Característica*/
    pdfDoc.cell(159, 239, 36, 7, ' ');  pdfDoc.text(`${Patient[28][4]}`, 161, 244);/*Quando Ocorre*/

    pdfDoc.cell(15, 246, 36, 7,  ' ');  pdfDoc.text(`${Patient[29][0]}`, 17, 251);/*Data*/
    pdfDoc.cell(51, 246, 36, 7,  ' ');  pdfDoc.text(`${Patient[29][1]}`, 53, 251);/*EVA*/
    pdfDoc.cell(87, 246, 36, 7,  ' ');  pdfDoc.text(`${Patient[29][2]}`, 89, 251);/*Local*/
    pdfDoc.cell(123, 246, 36, 7, ' ');  pdfDoc.text(`${Patient[29][3]}`, 125, 251);/*Característica*/
    pdfDoc.cell(159, 246, 36, 7, ' ');  pdfDoc.text(`${Patient[29][4]}`, 161, 251);/*Quando Ocorre*/

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 5

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("REVISÃO DE SISTEMAS", 110, 35, null, null, "center");

    pdfDoc.text('Alterações de peso:', 15, 50);
    pdfDoc.text('Apetite:', 15, 72);
    pdfDoc.text('Sono:', 15, 94);
    pdfDoc.text('Pele:', 15, 116);
    pdfDoc.text('Respiratório:', 15, 138);
    pdfDoc.text('Cardiovascular:', 15, 160);
    pdfDoc.text('Geniturinário:', 15, 182);
    pdfDoc.text('Gastrointestinal:', 15, 204);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    pdfDoc.text(`${Patient[30]}`, 15, 55, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[31]}`, 15, 77, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[32]}`, 15, 99, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[33]}`, 15, 121, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[34]}`, 15, 143, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[35]}`, 15, 165, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[36]}`, 15, 187, { maxWidth: 180, align: "left" });
    pdfDoc.text(`${Patient[37]}`, 15, 209, { maxWidth: 180, align: "left" });

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 6

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 35, 180, 7, " "); pdfDoc.text('Testes especiais de Ortopedia:', 18, 41);
    pdfDoc.cell(15, 42, 180, 70, " ");
    pdfDoc.cell(15, 112, 180, 7, " "); pdfDoc.text('Encurtamento(s) Muscular(es):', 18, 118);
    pdfDoc.cell(15, 119, 180, 70, " ");
    pdfDoc.cell(15, 189, 180, 7, " "); pdfDoc.text('Diagnóstico Cinético Funcional:', 18, 195);
    pdfDoc.cell(15, 196, 180, 70, " ");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.text(`${Patient[38]}`, 17, 47, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[39]}`, 17, 124, { maxWidth: 176, align: "left" })
    pdfDoc.text(`${Patient[40]}`, 17, 201, { maxWidth: 176, align: "left" })

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 7

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.text("ANÁLISE DE MARCHA", 110, 35, null, null, "center");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.cell(15, 50, 60, 12, " "); pdfDoc.cell(75, 50, 105, 12, " "); pdfDoc.cell(180, 50, 15, 12, " ");
    pdfDoc.text('Início da Marcha', 18, 57); pdfDoc.text('Hesitação ou várias tentativas para iniciar', 77, 55); pdfDoc.text(`0 ( ${Patient[41][0] == '0' ? "x" : " "} )`, 182, 55);
    /*                                     */pdfDoc.text('Sem Hesitação', 77, 60); pdfDoc.text(`1 ( ${Patient[41][0] == '1' ? "x" : " "} )`, 182, 60);

    pdfDoc.cell(15, 62, 60, 52, " "); pdfDoc.cell(75, 62, 105, 52, " "); pdfDoc.cell(180, 62, 15, 52, " ");
    pdfDoc.text('Comprimento e', 18, 69); pdfDoc.text('a) Pé Direito', 77, 67);
    pdfDoc.text('Altura dos passos', 18, 74); pdfDoc.text('- não ultrapassa o pé esquerdo', 85, 72); pdfDoc.text(`0 ( ${Patient[41][1] == '0' ? "x" : " "} )`, 182, 72);
   /*                                      */ pdfDoc.text('- ultrapassa o pé esquerdo', 85, 77); pdfDoc.text(`1 ( ${Patient[41][1] == '1' ? "x" : " "} )`, 182, 77);
   /*                                      */ pdfDoc.text('- não sai completamento do chão', 85, 82); pdfDoc.text(`0 ( ${Patient[41][2] == '0' ? "x" : " "} )`, 182, 82);
   /*                                      */ pdfDoc.text('- sai completamento do chão', 85, 87); pdfDoc.text(`1 ( ${Patient[41][2] == '1' ? "x" : " "} )`, 182, 87);
   /*                                      */ pdfDoc.text('b) Pé Esquerdo', 77, 92);
   /*                                      */ pdfDoc.text('- não ultrapassa o pé direito', 85, 97); pdfDoc.text(`0 ( ${Patient[41][3] == '0' ? "x" : " "} )`, 182, 97);
   /*                                      */ pdfDoc.text('- ultrapassa o pé direito', 85, 102); pdfDoc.text(`1 ( ${Patient[41][3] == '1' ? "x" : " "} )`, 182, 102);
   /*                                      */ pdfDoc.text('- não sai completamento do chão', 85, 107); pdfDoc.text(`0 ( ${Patient[41][4] == '0' ? "x" : " "} )`, 182, 107);
   /*                                      */ pdfDoc.text('- sai completamento do chão', 85, 112); pdfDoc.text(`1 ( ${Patient[41][4] == '1' ? "x" : " "} )`, 182, 112);

    pdfDoc.cell(15, 114, 60, 12, " "); pdfDoc.cell(75, 114, 105, 12, " "); pdfDoc.cell(180, 114, 15, 12, " ");
    pdfDoc.text('Simetria dos passos', 18, 121); pdfDoc.text('Passos diferentes', 77, 119); pdfDoc.text(`0 ( ${Patient[41][5] == '0' ? "x" : " "} )`, 182, 119);
    /*                                        */ pdfDoc.text('Passos semelhantes', 77, 124); pdfDoc.text(`1 ( ${Patient[41][5] == '1' ? "x" : " "} )`, 182, 124);

    pdfDoc.cell(15, 126, 60, 12, " "); pdfDoc.cell(75, 126, 105, 12, " "); pdfDoc.cell(180, 126, 15, 12, " ");
    pdfDoc.text('Continuidade dos passos', 18, 133); pdfDoc.text('Paradas ou Passos descontínuos', 77, 131); pdfDoc.text(`0 ( ${Patient[41][6] == '0' ? "x" : " "} )`, 182, 131);
    /*                                            */ pdfDoc.text('Passos contínuos', 77, 136); pdfDoc.text(`1 ( ${Patient[41][6] == '1' ? "x" : " "} )`, 182, 136);

    pdfDoc.cell(15, 138, 60, 17, " "); pdfDoc.cell(75, 138, 105, 17, " "); pdfDoc.cell(180, 138, 15, 17, " ");
    pdfDoc.text('Direção', 18, 145); pdfDoc.text('Desvio nítido', 77, 143); pdfDoc.text(`0 ( ${Patient[41][7] == '0' ? "x" : " "} )`, 182, 143);
    /*                            */ pdfDoc.text('Desvio leve ou moderado ou uso de apoio', 77, 148); pdfDoc.text(`1 ( ${Patient[41][7] == '1' ? "x" : " "} )`, 182, 148);
    /*                            */ pdfDoc.text('Linha reta sem apoio', 77, 153); pdfDoc.text(`2 ( ${Patient[41][7] == '2' ? "x" : " "} )`, 182, 153);

    pdfDoc.cell(15, 155, 60, 17, " "); pdfDoc.cell(75, 155, 105, 17, " "); pdfDoc.cell(180, 155, 15, 17, " ");
    pdfDoc.text('Tronco', 18, 162); pdfDoc.text('Balanço grave ou uso de apoio', 77, 160); pdfDoc.text(`0 ( ${Patient[41][8] == '0' ? "x" : " "} )`, 182, 160);
    /*                           */ pdfDoc.text('Flexão dos joelhos ou dorso ou abertura dos braços', 77, 165); pdfDoc.text(`1 ( ${Patient[41][8] == '1' ? "x" : " "} )`, 182, 165);
    /*                           */ pdfDoc.text('Sem flexão, balanço, não usa os braços ou apoio', 77, 170); pdfDoc.text(`2 ( ${Patient[41][8] == '2' ? "x" : ""} )`, 182, 170);

    pdfDoc.cell(15, 172, 60, 12, " "); pdfDoc.cell(75, 172, 105, 12, " "); pdfDoc.cell(180, 172, 15, 12, " ");
    pdfDoc.text('Distância dos tronozelos', 18, 179); pdfDoc.text('Tronozelos Sepadados', 77, 177); pdfDoc.text(`0 ( ${Patient[41][9] == '0' ? "x" : " "} )`, 182, 177);
    /*                                             */ pdfDoc.text('Tronozelos quase se toncam enquanto anda', 77, 182); pdfDoc.text(`1 ( ${Patient[41][9] == '1' ? "x" : " "} )`, 182, 182);

    pdfDoc.cell(15, 184, 180, 7, " "); pdfDoc.text('Descritivos', 18, 190);
    pdfDoc.cell(15, 191, 180, 70, " ");
    pdfDoc.text(`${Patient[42]}`, 17, 196, { maxWidth: 176, align: "left" })

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 8

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("OBJETIVOS E CONDUTAS", 110, 35, null, null, "center");

    pdfDoc.cell(15, 40, 180, 7, " "); pdfDoc.text('Objetivos Curto Prazo:', 18, 45);
    pdfDoc.cell(15, 69, 180, 7, " "); pdfDoc.text('Condutas Curto Prazo:', 18, 74);
    pdfDoc.cell(15, 98, 180, 7, " "); pdfDoc.text('Objetivos Médio Prazo:', 18, 103);
    pdfDoc.cell(15, 127, 180, 7, " "); pdfDoc.text('Condutas Médio Prazo:', 18, 132);
    pdfDoc.cell(15, 156, 180, 7, " "); pdfDoc.text('Objetivos Longo Prazo:', 18, 161);
    pdfDoc.cell(15, 185, 180, 7, " "); pdfDoc.text('Condutas Longo Prazo:', 18, 190);
    pdfDoc.cell(15, 214, 180, 7, " "); pdfDoc.text('Classificação Internacional de Funcionalidade:', 18, 219);
    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    pdfDoc.cell(15, 47, 180, 22, " "); pdfDoc.text(`${Patient[43]}`, 17, 52, { maxWidth: 176, align: "left" });
    pdfDoc.cell(15, 76, 180, 22, " "); pdfDoc.text(`${Patient[44]}`, 17, 81, { maxWidth: 176, align: "left" });
    pdfDoc.cell(15, 105, 180, 22, " "); pdfDoc.text(`${Patient[45]}`, 17, 110, { maxWidth: 176, align: "left" });
    pdfDoc.cell(15, 134, 180, 22, " "); pdfDoc.text(`${Patient[46]}`, 17, 139, { maxWidth: 176, align: "left" });
    pdfDoc.cell(15, 163, 180, 22, " "); pdfDoc.text(`${Patient[47]}`, 17, 168, { maxWidth: 176, align: "left" });
    pdfDoc.cell(15, 192, 180, 22, " "); pdfDoc.text(`${Patient[48]}`, 17, 197, { maxWidth: 176, align: "left" });

    pdfDoc.cell(15, 221, 180, 22, " "); pdfDoc.text(`${Patient[49]}`, 17, 226, { maxWidth: 176, align: "left" });

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);


    pdfDoc.addPage(); //Pagina 8

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("Perspectiva do paciente", 110, 35, null, null, "center");
    pdfDoc.cell(15, 40, 180, 63, " ");

    pdfDoc.text("Orientações ao paciente", 110, 110, null, null, "center");
    pdfDoc.cell(15, 115, 180, 70, " ");


    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);
    pdfDoc.text(`${Patient[50]}`, 17, 45, { maxWidth: 176, align: "left" });
    pdfDoc.text(`${Patient[51]}`, 17, 120, { maxWidth: 176, align: "left" });

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);

    pdfDoc.line(55, 210, 155, 210);
    pdfDoc.text("Academico(a)", 105, 215, null, null, "center");
    pdfDoc.line(55, 235, 150, 235);
    pdfDoc.text("Professor(a)", 105, 240, null, null, "center");

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    // Save or display the PDF
    pdfDoc.save(`Avaliação - ${Patient[0][2]}.pdf`);
};
