// funções anonimas não tem nome -- c# se chama denegade
//esta variavel armazena um metodo, ou seja, resultado de uma função
var x = function (n1,n2){
    return n1+n2
}

//como invocar a função anonima?
let z = x("ola",20)
console.log(z);

// função autoinvocada. Tem como caracteristica ser criada entre parenteses
(
    function(n1,n2){
        console.log(n1+n2)
    }
)(10,10)