// 1

console.log("tralalerotralala");
const array = ["agua","cactus"];
const arrayNum=[4,6,5,4]

// 2
function mostrarFuncionTradicional() 
{ 
  array.map((Number)=>{
    console.log(Number)
});
}

mostrarFuncionTradicional();




 const mostrarFuncionFlecha=()=>{
     array.map((Number)=>{
         console.log(Number)
    
    
     });

 }

 mostrarFuncionFlecha();
//3
 const agregarValorArray=()=>{
 array.push("bombardiro cocodrilo");
 mostrarFuncionFlecha();
 }

 
 agregarValorArray();
 //4

 const mostrarUltimaPosicion= ()=>{
     let ultPosicion = array.lastIndexOf("agua");
     console.log(ultPosicion);
 }
 mostrarUltimaPosicion();
 //5

 const mostrarSumatoria=()=>{
     let sumatoria=0;
     arrayNum.forEach(numero => {
        sumatoria+=numero; 
     });
     console.log(sumatoria); }

 mostrarSumatoria();
 //6

 const invertirElementosArray = array.reverse();

 console.log(invertirElementosArray);
//7
 const ordenarValores=()=>{
 arrayNum.sort();
 console.log(arrayNum);
 }
 ordenarValores();
//8
 let valor = 4;
 function filtrarMayoresQue(array, valor) {
     return array.filter(num => num > valor);
 }
//9
 console.log(filtrarMayoresQue(arrayNum,valor));
 let contarCantVeces = arrayNum.filter(num=>num===4).length;

 console.log(contarCantVeces);