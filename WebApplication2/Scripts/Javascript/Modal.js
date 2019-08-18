function agregarCargo() {
    var titulo = $("#id-titulo").val();
    var monto = $("#id-monto").val();
    $("#padre").append
        ("<div class='cardView'><div class= 'linea' ></div ><div class='custom-switch d-flex justify-content-between'><div class='spanText'>" + titulo + "</div><div style='margin-top: 5px;'><input type='checkbox' class='custom-control-input' id='customSwitch1' checked><label class='custom-control-label' for='customSwitch1'></label></div></div><div class='hr'></div><div><div class='d-flex justify-content-center ammountText'>$" + monto + "</div></div><div class='d-flex justify-content-end' style='margin-right: 10px;'><a href='#'><i class='material-icons icono'>border_color</i></a><a href='##'><i class='material-icons icono'>delete</i></a></div></div>")
    var json = new Object();
    json.titulo = $("#id-titulo").val();
    json.monto = $("#id-monto").val();
    limpiarCampos();
    /*$.ajax({
        data: json,
        url: "./Roles",
        dataType: "json",
        method: "post",
        //.done recibe la respuesta de nuestro controlador (URL)
    }).done(function (respuesta) {
        console.log(json);
    }).fail(function (jqhr) {
        console.log("Error al crear nuevo cargo");
    })*/
}

function limpiarCampos() {
    $('#id-monto').val('');
    $('#id-titulo').val('');
}