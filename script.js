function calcular(){
    var a = window.prompt("Qual é o valor de a?")
    var b = window.prompt("Qual é o valor de b?")
    var c = window.prompt("Qual é o valor de c?")
    var res = window.document.getElementById('res')
    
    //transforma os itens em inteiros
    d = parseInt(a)
    e = parseInt(b)
    f = parseInt(c)
    var delta = ((e*e) - 4*d*f)
    //testa se o resultado for negativo e tranforma em positivo
    /*if(delta<0){
        delta = delta *(-1)
        }*/

    res.innerHTML = `<h2>Resovendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${d}x² + ${e}x + ${f} = 0</strong></p>`
    res.innerHTML += `O cálculo realizado será <strong>&Delta; = ${e}² - 4.${a}.${f} = 0</strong>`
    res.innerHTML += `<p>O valor calculado foi <strong>&Delta; = ${delta}</strong></p>`

}