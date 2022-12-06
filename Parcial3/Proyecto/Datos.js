$(document).ready(function() {

  $('#btnRegistrar').click(function() {
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
    Swal.fire(
      '¡Cliente Registrado!',
      'El cliente se ha registrado correctamente',
      'success'
    )
    $.post('Registrar.php',{id:id,Nombre:Nombre,Apellidos:Apellidos,Direccion:Direccion,Telefono:Telefono,Correo:Correo,Cantidad:Cantidad,Tipo:Tipo,Tamano:Tamano,Entrega:Entrega,Pago:Pago});
});

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
          title:'¿Estas seguro de guardar los cambios?',
          //text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#8df505',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Guardar',
          cancelButtonText:'Cancelar'
  
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Registro Modificado!',
              'Los cambios se han guardado correctamente',
              'success'
            )
            $.post('Modificar.php',{idC:varid,Nombre:Nombre,Apellidos:Apellidos,Direccion:Direccion,Telefono:Telefono,Correo:Correo,Cantidad:Cantidad,Tipo:Tipo,Tamano:Tamano,Entrega:Entrega,Pago:Pago});
          }
    })
  });

  $('#btnEliminar').click(function() {   
      let varid =prompt('Ingrese el id del cliente');  
         Swal.fire({
          title: '¿Estas seguro de eliminar el registro?',
          //text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#8df505',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '¡Registro Eliminado!',
              'El registro se ha eliminado correctamente',
              'success'
            )
            $.post('Eliminar.php',{idC:varid});
          }
    })    
    });
});