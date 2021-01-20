let URL = "https://api.control-z.cl/api/feriados"

$.get(URL, function(respuesta){
    let feriado = respuesta[respuesta.length -1]
    $("#feriado").text(feriado.nombre + " - " + feriado.fecha)
}, "json")