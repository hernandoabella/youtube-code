

const detectarNavegador = () => {
    let agente = navigator.userAgent.toLowerCase();
    let navegador = "otro";

    if (agente.indexOf("edge") > -1) {
        navegador = "edge";
    } else if (agente.indexOf("edg") > -1) {
        navegador = "edge";
    } else if (agente.indexOf("opr") > -1 && !!window.opr) {
        navegador = "opera";
    } else if (agente.indexOf("chrome") > -1 && !!window.chrome) {
        navegador = "chrome";
    } else if (agente.indexOf("trident") > -1) {
        navegador = "ie";
    } else if (agente.indexOf("firefox") > -1) {
        navegador = "mozila";
    } else if (agente.indexOf("safari") > -1) {
        navegador = "safari";
    }

    document.querySelector('.navegador').innerHTML = 
    navegador[0].toUpperCase() + navegador.slice(1);

    const logo = document.querySelector(`.logos .${navegador}`);

    if(logo !== "") {
        logo.style.opacity = "1";
    }
}

detectarNavegador();