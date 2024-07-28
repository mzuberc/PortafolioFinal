
$(document).ready(function(){

    function limpiarErrores() {
        $("#nombre-help").html("")
        $("#apellido-help").html("")
        $("#email-help").html("")
        $("#msg-help").html("")
        $("#lbl-nombre").removeClass("")
        $("#lbl-apellido").removeClass("")
        $("#lbl-email").removeClass("")
        $("#lbl-msg").removeClass("")

    }

    $("#formulario").submit(function(evento) {
        evento.preventDefault();
        limpiarErrores();

        var nombre = $("#txt-nombre").val();
        var apellido = $("#txt-apellido").val();
        var email = $("#txt-email").val();
        var msg = $("#txt-msg").val();

        var valido = true;
        if(nombre == "") {
            $("#nombre-help").html("Ingresa el nombre")
        }
        if(apellido == "") {
            valido = false
            $("#apellido-help").html("Ingresa el apellido")
        }
        if(email == "") {
            
            $("#email-help").html("Ingresa el email")
        }
        if(msg == "") {
            
            $("#msg-help").html("Ingresa el mensaje")
        }
        if(valido){
            $("#alert-send").removeClass("d-none")
        
        
        }
    })


})













// -----------Otra opción----------
// var txtEmail = document.getElementById("txt-email");
// var txtApellido = document.getElementById("txt-apellido");
// var txtNombre = document.getElementById("txt-nombre");
// var txtMsg = document.getElementById("txt-msg");
// var formulario = document.querySelector("#formulario");
// var divNombreHelp = document.getElementById("nombre-help");
// var divApellidoHelp = document.getElementById("apellido-help");
// var divEmailHelp =  document.getElementById("email-help");
// var divMsgHelp = document.getElementById("msg-help");
// var labelNombre = document.getElementById("lbl-nombre");
// var labelApellido = document.getElementById("lbl-apellido");
// var labelEmail = document.getElementById("lbl-email");
// var labelMsg = document.getElementById("lbl-msg");
// var alertSend = document.getElementById("alert-send");


// function limpiarErrores() {
//     divNombreHelp.innerHTML = ""
//     divApellidoHelp.innerHTML = ""
//     divEmailHelp.innerHTML = ""
//     divMsgHelp.innerHTML = ""

//     labelNombre.classList.remove("text-danger")
//     labelApellido.classList.remove("text-danger")
//     labelEmail.classList.remove("text-danger")
//     labelMsg.classList.remove("text-danger")

// }


// formulario.addEventListener("submit", function(evento){
//     evento.preventDefault()
//     var valido = true
//     if (txtNombre.value == '') {
//         divNombreHelp.innerHTML = "Ingresa el nombre"
//         labelNombre.classList.add("text-danger")
//         valido = false
//     }

//     if (txtApellido.value == '') {
//         divApellidoHelp.innerHTML = "Ingresa el apellido"
//         labelApellido.classList.add("text-danger")
//         valido = false
//     }

//     if (txtEmail.value == '') {
//         divEmailHelp.innerHTML = "Ingresa el email"
//         labelEmail.classList.add("text-danger")
//         valido = false
//     }
//     if (txtMsg.value == '') {
//         divMsgHelp.innerHTML = "Ingresa tu comentario"
//         labelMsg.classList.add("text-danger")
//         valido = false
//     }

//     if(valido) {
//         alertSend.classList.remove("d-none")
//     }


// })





















