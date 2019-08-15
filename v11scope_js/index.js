// Para proteger nuestras variables ,COLOCAMOS todo dentro de una funcion autollama q egloba y protege todo
var varGlobal='Soy una global';
// si se le quista el var(no funciona,desfasado supongo) SE CONVIERTE EN GLOBal (dentro de una funcion obviament)
var miFuncion=function(){
    var varLocal='soy una Local';
    // alert(varLocal);
    var funcionLocal=function(){
        var local2='soy una variable local dentro de una funcion a  a su vez esta en otra funcion';
        // alert(local2);
    }
    funcionLocal();
    //local2 no esta definida DEBIDO A QUE SOLO PUEDE BUSCAR DE la funcion donde esta HACIA afuera
    alert(local2);
}
alert(varLocal);
miFuncion();
