import {cuadrado} from './modulo';
import swal from 'sweetalert';

console.log("Hello world webpack");

console.log(cuadrado(2));

document.getElementById("btn").addEventListener(click, ()=> {
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  })
})