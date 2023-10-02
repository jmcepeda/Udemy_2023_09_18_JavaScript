
        let resultadoSuma;
        let resultadoResta;
        function sumar(){
            let traga=2+3;
            resultadoSuna=traga;
            return traga;
        }
        function restar(){
            let traga=99-40;
            resultadoResta=traga;
            return traga;
            let nombre="Juan";
            return nombre;
        }
        let texto=`El resultado de la suma es: ${sumar()}`;
        
        
        function sumar3(num1,num2){
            let num=num1+num2;
            return num;
        }
        let texto2=`El resultado de la suma con parámetros es: ${sumar3(300,67)}`

        alert(sumar() + " - " + texto + " - " + restar() + " - " + texto2);

        function sumaInput(){
            let num1Str=document.getElementById("num1").value;
            let num2Str=document.getElementById("num2").value;
            //Otra manera de convertir string a número es añadir delate "+"
            let calculoSum=+num1Str + +num2Str;
            console.log("Resultado de sumar dos string con +: " + calculoSum);

            let num1=Number(document.getElementById("num1").value);
            
            let num2=Number(document.getElementById("num2").value);
            document.getElementById("resultado").textContent=sumar3(num1,num2);
        }
