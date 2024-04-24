const modulo = (()=> {
    const privada = (url, id) => {
        //manipilar el dom y cargar el vídeo
        console.log(url, id)
        document.getElementById(id).src = url
    }

    return {
        publica: (url, id) => {
            privada(url, id)
            
        }
    }
})();

export default modulo;