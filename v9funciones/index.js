function saludo(nombre){
    document.write('Holaaa '+nombre);
}
saludo('arturin');
// funcion que no retornan nada y las que retornan
// COMO si funcion suma no existiera
var carro= function suma(n1,n2){
    //coment
return n1+n2
}
document.write('<br>',carro);
// document.write('<br>',suma(10,20));

// los parametreos tienen q ser iguales creo)
var numeroMaximo= function(valor1,valor2){
    if(valor1>valor2){
        return valor1;
    }

return valor2;
}
let pruebas=numeroMaximo(10,20);
alert(pruebas+1);

