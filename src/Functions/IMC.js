
/**
 * @description Calculo do IMC
 * 
 * @param {Numver} peso 
 * @param {Numver} altura 
 * @param {String} sexo 
 */
export default function CalcIMC(peso, altura, sexo) {
    let result = peso / ((altura / 100) ** 2)
    if (sexo == "Masculino") {
        if (result < 20.69) {
            return ["IMC Abaixo do Normal", result.toFixed(2)];
        } else if (result <= 26.40) {
            return ["IMC Normal", result.toFixed(2)];
        } else if (result <= 27.80) {
            return ["IMC Acima do Peso", result.toFixed(2)];
        } else if (result <= 32.30) {
            return ["IMC Obesidade", result.toFixed(2)];
        } else {
            return ["IMC Obesidade Morbida", result.toFixed(2)];
        }
    } else if (sexo == "Feminino") {
        if (result < 19.09) {
            return ["IMC Abaixo do Normal", result.toFixed(2)];
        } else if (result <= 25.80) {
            return ["IMC Normal", result.toFixed(2)];
        } else if (result <= 27.30) {
            return ["IMC Acima do Peso", result.toFixed(2)];
        } else if (result <= 32.30) {
            return ["IMC Obesidade", result.toFixed(2)];
        } else {
            return ["IMC Obesidade Morbida", result.toFixed(2)];
        }
    }
}