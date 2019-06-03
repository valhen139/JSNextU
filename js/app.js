

var Calculadora ={
    numero1:0,
    numero2:0,
    oper: "",
    punto: false,
    display: document.getElementById("display"),
    
    
    pressnumero: function (numero)
    {    console.log("es: " + numero);
        if (display.innerHTML=="0" || display.innerHTML== "")
        {
               display.innerHTML = numero; 
            
        }else{
            if (display.innerHTML.length < 8)
            {
                display.innerHTML = display.innerHTML + numero;
            }
        }
        
    },
    cleardisplay: function()
    {
         display.innerHTML="";
    },
    operar: function()
    {   var resultado = 0;
        var displaystring="";
        switch (oper){
            case 'mas':
                    resultado=numero1 + numero2;
                    console.log("resultado: " + resultado);
                    break;
            case 'por':
                    resultado=numero1 * numero2;
                    console.log("resultado: " + resultado);
                    break;
            case 'dividido':
                    resultado=numero1 / numero2;
                    console.log("resultado: " + resultado);
                    break;
            case 'menos':
                    resultado=numero1  - numero2;
                    console.log("resultado: " + resultado);
                    break;
            
        }
        displaystring="" + resultado;
        display.innerHTML = displaystring.substring(0,8);
        numero1=resultado;
        
    },
    presstecla: function()
    {   
        if (!isNaN(this.id)){
            Calculadora.pressnumero(this.id);
        }
        else{
            switch (this.id) {
                case "mas":
                    oper="mas";
                    numero1 = parseFloat(display.innerHTML);
                    numero2=0;
                    Calculadora.cleardisplay();
                    break;
                case "igual":
                    if (numero2 == 0){
                        numero2 = parseFloat(display.innerHTML);
                    }
                    console.log("numero2: " + numero2);
                    Calculadora.operar();
                    break;
                case "por":
                    oper="por";
                    numero1 = parseFloat(display.innerHTML);
                    numero2=0;
                    Calculadora.cleardisplay();
                    break;
                case "dividido":
                    oper="dividido";
                    numero1 = parseFloat(display.innerHTML);
                    numero2=0;
                    Calculadora.cleardisplay();
                    break;
                case "menos":
                    oper="menos";
                    numero1 = parseFloat(display.innerHTML);
                    numero2=0;
                    Calculadora.cleardisplay();
                    break;
                case "punto":
                    if (!Calculadora.punto){
                        Calculadora.punto=true;
                        Calculadora.pressnumero(".");
                    }
                    break;
                case "on":
                    numero1=0;
                    numero2=0;
                    oper= "";
                    punto=false;
                    display.innerHTML = "0";
                    break;
                case "sign":
                    display.innerHTML = parseFloat(display.innerHTML) * -1;
                    break;
                default:
                    alert("operación no implementada");
            }
        }
        
    },
    
    inicia: function (){
        var anchors = document.getElementsByTagName("img");
        for(var i = 0; i < anchors.length-1; i++) {
              anchor = anchors[i];
              anchor.addEventListener("mouseup", function(){
                    this.style.height="63px";
              });
              anchor.addEventListener("mousedown", function(){
                    this.style.height="61px";
              });
              anchor.addEventListener("click", Calculadora.presstecla);
        }
        var suma= document.getElementById("mas");
        suma.addEventListener("mouseup", function(){
                    suma.style.height="141px";
              });
        suma.addEventListener("mousedown", function(){
                    suma.style.height="139px";
              });
        suma.addEventListener("click", Calculadora.presstecla);
    }
    
};

Calculadora.inicia();
