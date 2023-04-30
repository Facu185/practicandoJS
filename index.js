const num1 = 15;
const num2 = 23;
let suma = num1 + num2;
console.log(suma);
let num3 = 3;
function esPar(num3){
    if(num3 % 2 == 0 ){
        return true;
        
    }
    return false;
}
esPar(0);
if(esPar(num3) === true){
    console.log("el numero",num3,"es par");
}else if (esPar(num3) === false ){
    console.log("el numero",num3,"es impar");
}
let aryNombres = ["Facundo", "Mateo", "Emanuel", "Matias", "Jonathan"];
for (let i = 0; i < aryNombres.length; i++){
    console.log(aryNombres[i]);
}
let alto = 22;
let ancho = 33;
let area = 0;
function areaRectangulo(){
    area = alto * ancho;
    return area;
}
console.log("El area del rectangulo es",areaRectangulo());
let aryNum4 = [5, 9, 14, 49, 89, 54, 27, 33];
let suma2 = 0;
function sumaNums(aryNum4){
    for (n = 0; n < aryNum4.length; n++){
        suma2 += aryNum4[n];
    }
    return suma2;
}
sumaNums(0);
console.log("La suma de los numeros es",sumaNums(aryNum4));
let num5 = 56;
for (x = 0; x < 56; x++){
    if(esPar(x) === true){
        console.log(x,"Es par");
    }
}