import {cuadrado} from './modulo';
import swal from 'sweetalert2';

//console.log("Hello world webpack");

console.log(cuadrado(2));

  document.getElementById("alerta").addEventListener("click", ()=>{
    swal("Good job!", "You clicked the button!", "success", {
        button: "Aww yiss!",
    })
});
