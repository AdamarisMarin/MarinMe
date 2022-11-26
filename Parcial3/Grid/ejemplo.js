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
            { name: "id", type: "number",validate: "required" },
            { name: "nombre", type: "text"},
            { name: "apellidos", type: "text"},
            { name: "direccion", type: "text"},
            { name: "telefono", type: "text"},
            { name: "correo", type: "text"},
            { name: "cantidad", type: "number"},
            { name: "tipo", type: "text"},
            { name: "tamano", type: "text"},
            { name: "entrega", type: "text"},
            { name: "pago", type: "text"},
            { type: "control" }
        ]
    });
    });
})