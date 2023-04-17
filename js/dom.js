


let button = document.getElementById('Button');
// let button = document.querySelector('button');
// let button = document.getElementsByTagName('button');
// let button = document.getElementsByClassName('buttons');
// let button = document.querySelectorAll('#Button');


// ელემენტი ( რომელზეც ხდება მოქმედება ) => მიმაგრებული ფუნქცია

// button.onclick = message;
// button.onclick = message2;

let div = document.getElementById('Div');


button.addEventListener('click', changeDiv)
// button.addEventListener('click', message2)

function changeDiv(){

   let text = '<p> დივის ტექსტი </p>';
   
   div.style.backgroundColor = 'red';
   // div.innerText = text;
   div.innerHTML = text

	
}

// function message2(){

// 	alert('კლიკი 2')
// }