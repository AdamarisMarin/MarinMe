$(document).ready(function(){

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost/MarinMe/Parcial3/Grid/Consulta.php",
        "method": "GET",
        "headers": {
            "Accept": "*/*"
        }
      };
      
      $.ajax(settings).done(function (response) {
        let table = JSON.parse(response);

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        data: table,
 
        fields: [
            { name: "id", type: "number", width:24, validate: "required" },
            { name: "nombre", type: "text",width:35},
            { name: "apellidos", type: "text",width:35},
            { name: "direccion", type: "text",width:37},
            { name: "telefono", type: "text",width:37},
            { name: "correo", type: "text",width:62},
            { name: "cantidad", type: "number",width:24},
            { name: "tipo", type: "text",width:30},
            { name: "tamano", type: "text",width:30},
            { name: "entrega", type: "text",width:30},
            { name: "pago", type: "text",width:30},
            { type: "control" }
        ]
    });
    });
})