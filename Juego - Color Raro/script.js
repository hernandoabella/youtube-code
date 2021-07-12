function cargar(){
    document.getElementById('cargador').style.display = "none";
    document.getElementById('game_con').style.display = "flex";
    start();
}

setTimeout(cargar, 1000);

function start(){

    var color, numero, circuloraro, color_aleatorio,
    r, g, b, color_raro;

    function reiniciar(){
        puntuacion = -10;
        tiempo = 100;
        document.getElementById('game_con').style.display = "flex";
        document.getElementById('cn_menu').style.display = "none";
        actualizar();
    }

    var puntuacion = -10;
    var tiempo = 100;

    function incorrecto(){
        puntuacion -= 15;
    }

    var circle1 = document.getElementById('circulo1');
    var circle2 = document.getElementById('circulo2');
    var circle3 = document.getElementById('circulo3');
    var circle4 = document.getElementById('circulo4');
    var circle5 = document.getElementById('circulo5');
    var circle6 = document.getElementById('circulo6');
    var circle7 = document.getElementById('circulo7');
    var circle8 = document.getElementById('circulo8');
    var circle9 = document.getElementById('circulo9');
    
    // Agregando addEventListener

    document.getElementById('circulo1').addEventListener('click', color1);
    document.getElementById('circulo2').addEventListener('click', color2);
    document.getElementById('circulo3').addEventListener('click', color3);
    document.getElementById('circulo4').addEventListener('click', color4);
    document.getElementById('circulo5').addEventListener('click', color5);
    document.getElementById('circulo6').addEventListener('click', color6);
    document.getElementById('circulo7').addEventListener('click', color7);
    document.getElementById('circulo8').addEventListener('click', color8);
    document.getElementById('circulo9').addEventListener('click', color9);
    document.getElementById('btn').addEventListener('click', reiniciar);

    var ar = [circle1, circle2, circle3, circle4, circle5, circle6, circle7,
    circle8, circle9]

    function actualizar(){
        numero = Math.floor(Math.random() * 9)
        r = Math.floor(Math.random() * 235);
        g = Math.floor(Math.random() * 235);
        b = Math.floor(Math.random() * 235);
        color_aleatorio = "rgb" + "(" + r + ", " +g+ ", " + b + ")";
        color_raro = "rgb" + "(" + (r + 20) + "," + (g + 20) + 
        ", " + (b + 20) + ")";
        circuloraro = ar[numero];
        puntuacion += 10;

        document.getElementById('puntuacion').innerHTML =
        "Puntuación : " + puntuacion;
        document.getElementById('puntuacion').innerHTML = 
        "Puntuación : " + puntuacion;

        circuloraro.style.backgroundColor = color_raro;

        for(i = 0; i <= 8; i++){
            if(i == numero){
                
            }else{
                ar[i].style.backgroundColor = color_aleatorio;
            }
        }
    }

    function color1(){
        if(numero != 0){
            incorrecto();
        }

        actualizar();
    }

    function color2(){
        if(numero != 1){
            incorrecto();
        }

        actualizar();
    }

    function color3(){
        if(numero != 2){
            incorrecto();
        }

        actualizar();
    }

    function color4(){
        if(numero != 3){
            incorrecto();
        }

        actualizar();
    }

    function color5(){
        if(numero != 4){
            incorrecto();
        }

        actualizar();
    }

    function color6(){
        if(numero != 5){
            incorrecto();
        }

        actualizar();
    }

    function color7(){
        if(numero != 6){
            incorrecto();
        }

        actualizar();
    }

    function color8(){
        if(numero != 7){
            incorrecto();
        }

        actualizar();
    }

    function color9(){
        if(numero != 8){
            incorrecto();
        }

        actualizar();
    }

    actualizar();

    function temporizador(){

        tiempo -= 0.1;
        document.getElementById('tiempo').style.width = tiempo + "vw";

        if(tiempo <= 0){
            menu();
        }

        function menu(){
            document.getElementById('cn_menu').style.display = "flex";
            document.getElementById('game_con').style.display = "none";
        }


    }


    setInterval(temporizador, 50)


}