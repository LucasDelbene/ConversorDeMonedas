function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 280;
    let euro = 260;
    if(document.getElementById("uno").checked){
        resultado = valore * dolar;
        alert("CAMBIO DE PESOS ARGENTINOS A DOLARES ES: $" + resultado.toFixed(2));   
    }else if(document.getElementById("dos").checked){
        resultado = valore * euro;
        alert("CAMBIO DE PESOS ARGENTINOS A EUROS ES: $" + resultado.toFixed(2));
    }else{
        alert("TIENES QUE COMPLETAR TODOS LOS REQUERIMIENTOS")
    }

}