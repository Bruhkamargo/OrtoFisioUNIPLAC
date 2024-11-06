import jsPDF from "jspdf";

/**
 * @description 
 * A folha padrão é A4, retrato usa como medida milimetros 
 * A4 H:297 W:210 a margem padrão é de 15mm
 */
export default async (Children) => {
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

    pdfDoc.text(`Avaliador: NOME TESTE MUITO GRANDE DA SILVA SAURO`, 15, 50); pdfDoc.text(`Data da Avaliação: 00/00/0000`, 140, 43);
    pdfDoc.text(`Nome: NOME TESTE MUITO GRANDE DA SILVA SAURO`, 15, 57); pdfDoc.text(`Sexo: Masculino`, 140, 57);
    pdfDoc.text(`Idade: 00 Anos, 00 Meses e 00 Dias`, 15, 64); pdfDoc.text(`Data de Nascimento: 00/00/0000`, 140, 64);
    pdfDoc.text(`Telefone: (00) 9 0000 0000`, 15, 71);
    pdfDoc.text(`Endereço: Rua Henrique Ataíde dos Santos, Maria Luiza, Lages, SC.`, 15, 78);
    pdfDoc.text(`Profissão: Desenvolvedor de Software`, 15, 85);
    pdfDoc.text(`Dianóstico Médico: Disturbio de Personalidade Narcisista`, 15, 92);
    pdfDoc.text(`Nome do Médico: Dr. Doctor Ray`, 15, 99);
    pdfDoc.text(`Tempo da Lesão: 99 Anos`, 15, 106);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(15);
    pdfDoc.text("ANAMNESE", 110, 116, null, null, "center");

    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 120, 180, 7, " "); pdfDoc.text('Queixa Principal:', 20, 126);
    pdfDoc.cell(15, 127, 180, 63, " ");
    pdfDoc.cell(15, 190, 180, 7, " "); pdfDoc.text('História da Doença Atual e História da Doença Pregressa:', 20, 196);
    pdfDoc.cell(15, 197, 180, 63, " ");

    pdfDoc.setFont("helvetica", "normal");

    // Falta os TEXTOS AQUI

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    pdfDoc.addPage(); //Pagina 2

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 30, 180, 7, " "); pdfDoc.text('História Social:', 20, 36);
    pdfDoc.cell(15, 37, 180, 42, " ");
    //Txt

    pdfDoc.cell(15, 81, 180, 7, " "); pdfDoc.text('Exames Complementares:', 20, 87);
    pdfDoc.cell(15, 88, 180, 42, " ");
    //Txt

    pdfDoc.cell(15, 132, 180, 7, " "); pdfDoc.text('Medicamentos em Uso:', 20, 138);
    pdfDoc.cell(15, 139, 180, 42, " ");
    //Txt

    pdfDoc.cell(15, 183, 180, 7, " "); pdfDoc.text('Cirugias:', 20, 189);
    pdfDoc.cell(15, 190, 180, 35, " ");
    //Txt

    pdfDoc.cell(15, 227, 180, 7, " "); pdfDoc.text('Tratamentos Anteriores:', 20, 233);
    pdfDoc.cell(15, 234, 180, 35, " ");
    //Txt

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);


    pdfDoc.addPage(); //Pagina 3

    pdfDoc.addImage('./src/assets/Header.jpg', "JPG", 0, 0, 210, 28);

    pdfDoc.setFont("helvetica", "bold");
    pdfDoc.setFontSize(13);
    pdfDoc.text("EXAME FÍSICO", 110, 35, null, null, "center");

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.text(`Peso: 000.00 Kg`, 15, 52);
    pdfDoc.text(`Altura: 000 cm`, 15, 59);
    pdfDoc.text(`IMC Pontuação: 00.00 `, 15, 66);
    pdfDoc.text(`IMC Classificação: Obesidade Grau III`, 15, 73);

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

    pdfDoc.setFont("helvetica", "normal");
    pdfDoc.setFontSize(12);

    pdfDoc.cell(15, 120, 45, 7, " "); pdfDoc.text(`PA: 120 / 80 mmhg`, 17, 126);
    pdfDoc.cell(60, 120, 45, 7, " "); pdfDoc.text(`FR: 16 irpm`, 62, 126);
    pdfDoc.cell(105, 120, 45, 7, " "); pdfDoc.text(`FC: 220 bpm`, 107, 126);
    pdfDoc.cell(150, 120, 45, 7, " "); pdfDoc.text(`Spo2: 99%`, 152, 126);

    pdfDoc.text(`Padrão Ventilatório: Diafragmático `, 15, 136);
    pdfDoc.text(`Tórax: Assimétrico  `, 90, 136);
    pdfDoc.text(`Dispnéia: Não Dispneico  `, 135, 136);
    pdfDoc.text(`Ausculta Pulmonar: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nisi necessitatibus dolore molestiae suscipit, eveniet soluta, ea voluptas explicabo delectus; Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nisi necessitatibus dolore molestiae suscipit, eveniet soluta, ea voluptas explicabo delectus`, 15, 143, { maxWidth: 180, align: "left" });
    pdfDoc.text(`Ausculta Cardíaca: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nisi necessitatibus dolore molestiae suscipit, eveniet soluta, ea voluptas explicabo delectus; Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nisi necessitatibus dolore molestiae suscipit, eveniet soluta, ea voluptas explicabo delectus`, 15, 165, { maxWidth: 180, align: "left" });

    pdfDoc.setFontSize(13);
    pdfDoc.cell(15, 185, 180, 7, " "); pdfDoc.text("AVD's - AVP's:", 20, 191);
    pdfDoc.cell(15, 192, 180, 63, " ");

    pdfDoc.addImage('./src/assets/Footer.jpg', "JPG", 0, 269, 210, 28);

    // Save or display the PDF
    pdfDoc.save(`Avaliação.pdf`);
};
