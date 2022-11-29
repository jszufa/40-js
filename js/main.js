let imie = document.getElementById('fname').value;
let nazwisko = document.getElementById('lname').value;
let nrtel = document.getElementById('telnum').value;



let mainb = document.querySelector('button');

let p1 = document.getElementById("name");
let p2 = document.getElementById("surname");
let p3 = document.getElementById("phone");


mainb.onclick = function (){
    p1.textContent = imie;
    p2.textContent = nazwisko;
    p3.textContent = nrtel;
}