//Codigo del cuadrado
function perimetroCuadrado(lado){return lado*4;}
function areaCuadrado(lado){return lado*lado;}

//Código del triangulo
function perimetroTriangulo(lado1,lado2,base){return lado1+lado2+base;}
function areaTriangulo(base,altura){return base*altura/2;}

//Código del circulo
const pi =Math.PI;
function diametroCirculo(radio){return radio*2;};
function perimetroCirculo(radio){return diametroCirculo(radio)*pi;};
function areaCirculo(radio){return radio*radio*pi;};


function calcularPerimetroC(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const parrafo = document.getElementById("respuesta");
    if(!perimetro){
        parrafo.innerHTML="Ingrese valor";
        parrafo.style.textAlign="center"
    }else{
        parrafo.innerHTML="Valor "+perimetro;
        parrafo.style.cssText ="color: #f47f58;font-size: 50px;text-align: center;"
    }
 
}

function calcularAreaC(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}