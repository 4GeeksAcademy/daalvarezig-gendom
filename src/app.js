import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let articulo = ['the', 'our'];
  let adjetivo = ['great', 'big'];
  let nombre = ['jogger', 'racoon'];
  let terminacion = ['.com', '.es'];

  articulo.forEach(i => {
    adjetivo.forEach(j => {
      nombre.forEach(k => {
        terminacion.forEach(l => {
          console.log('valor i ${i}, valor j ${j}, valor k ${k}, valor l ${l}, el dominio seria =>', i+j+k+l);
        })
      })
    })
  }) 
};
