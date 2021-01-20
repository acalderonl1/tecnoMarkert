
$.validator.addMethod("terminarPor", function(value, element, parametro){
    if(value.endsWith(parametro)){
        return true;
    }

    return false;

}, "Debe terminar por {0}")

$("#formulario_contacto").validate({
    rules:{
        nombre:{
            required: true,
            minLength:3,
            maxLength: 30
        },
        email:{
            required: true,
            email: true,
            terminarPor: "@gmail.com"
        },
        tipo_solicitud: {
            required: true
        },
        mensaje: {
            required: true,
            minLength: 5,
            maxLength: 200
        }
    }
})


$("#guardar").click(function(){
    if($("#formulario_contacto").valid()==false){
        return
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tipoSolicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let avisos = $("#avisos").is(":checcked")

    //construir un json
    //enviar los datos por post $.post
})