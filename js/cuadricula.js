
function reemplazar(){
    let num1 = document.getElementById("id_fila").value;
    let num2 = document.getElementById("id_columna").value;
    let n11 = document.getElementById("11");
    let n12 = document.getElementById("12");
    let n13 = document.getElementById("13");
    let n21 = document.getElementById("21");
    let n22 = document.getElementById("22");
    let n23 = document.getElementById("23");
    let n31 = document.getElementById("31");
    let n32 = document.getElementById("32");
    let n33 = document.getElementById("33");

    let boton = document.createElement("button");

    if(num1==1){
        if(num2==1)
        n11.innerHTML = boton;
    }else if(num1==1){
        if(num2==2)
            n12.innerHTML = boton;
    }
    else if(num1==1){
        if(num2==3)
            n13.innerHTML = boton;
    }


}
