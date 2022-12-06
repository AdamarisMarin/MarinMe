$(document).ready(function() {

    $('#btnConsultar').click(function() {
          let varid =prompt('Ingrese el id del cliente');
          $.post('Consulta.php',{idC:varid},function(data){
          refrescar(data);
          },'json');
    });
  
    function refrescar(reg){ 
    document.getElementById("idC").value=reg.id;
    document.getElementById("idNombre").value=reg.nombre;
    document.getElementById("idApellidos").value=reg.apellidos;
    document.getElementById("idDireccion").value=reg.direccion;
    document.getElementById("idTelefono").value=reg.telefono;
    document.getElementById("idCorreo").value=reg.correo;
    document.getElementById("idCantidad").value=reg.cantidad;
    document.getElementById("idTipo").value=reg.tipo;
    document.getElementById("idTamano").value=reg.tamano;
    document.getElementById("idEntrega").value=reg.entrega;
    document.getElementById("idPago").value=reg.pago;
  }
  $('#btnIngresar').click(function() {
    let id = $("#idC").val();
    let Nombre = $("#idNombre").val();
    let Apellidos = $("#idApellidos").val();
    let Direccion = $("#idDireccion").val();
    let Telefono = $("#idTelefono").val();
    let Correo = $("#idCorreo").val();
    let Cantidad = $("#idCantidad").val();
    let Tipo = $("#idTipo").val();
    let Tamano = $("#idTamano").val();
    let Entrega = $("#idEntrega").val();
    let Pago = $("#idPago").val();

    $.post('Registrar.php',{id:id,Nombre:Nombre,Apellidos:Apellidos,Direccion:Direccion,Telefono:Telefono,Correo:Correo,Cantidad:Cantidad,Tipo:Tipo,Tamano:Tamano,Entrega:Entrega,Pago:Pago});
});
  
$('#btnModificar').click(function() {

    let varid = $('#idC').val();
    let Nombre = $("#idNombre").val();
    let Apellidos = $("#idApellidos").val();
    let Direccion = $("#idDireccion").val();
    let Telefono = $("#idTelefono").val();
    let Correo = $("#idCorreo").val();
    let Cantidad = $("#idCantidad").val();
    let Tipo = $("#idTipo").val();
    let Tamano = $("#idTamano").val();
    let Entrega = $("#idEntrega").val();
    let Pago = $("#idPago").val();
  
    Swal.fire({
          title:'Estas seguro de aplicar los cambios?',
          text: "Esto no se puede revertir",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aplicar',
          cancelButtonText:'Cancelar'
  
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Cambios aplicados!',
              'Los cambios al registro han sido guardados',
              'success'
            )
            $.post('Modificar.php',{idC:varid,Nombre:Nombre,Apellidos:Apellidos,Direccion:Direccion,Telefono:Telefono,Correo:Correo,Cantidad:Cantidad,Tipo:Tipo,Tamano:Tamano,Entrega:Entrega,Pago:Pago});
          }
    })
  });
  $('#btnBorrar').click(function() {
    let varid = $('#idC').val();
         Swal.fire({
          title: 'Estas seguro?',
          text: "Esto no se puede revertir",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado',
              'success'
            )
            $.post('Borrar.php',{idC:varid});
          }
    })    
    });
});