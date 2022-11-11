import {cuadrado} from './modulo';
import Swal from 'sweetalert2';

console.log("Hello world webpack");

console.log(cuadrado(2));

document.getElementById("btn").addEventListener(click, ()=> {
Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
})