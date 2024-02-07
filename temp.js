let resposta = document.getElementById('resposta')


function calcular(){
    let v1 = Number(document.getElementById('v1').value)
    console.log(v1)

    let celcius = (v1 * 1.8) + 32
    console.log("Valor " + celcius.toFixed(2))
    resposta.innerHTML = "É igual a: " + celcius +"°F "
}