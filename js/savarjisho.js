
/*ელსე იფ პირობის გამოყენება

let a = 70;
b = 20;


let logic = a >= b || a > 200 || b == 500 || a < 10;


if (a >= 20 && a < 30){
	console.log('a 20 dan 30 amde')
}else if (a >= 35 && a < 50){
	console.log('a 35 dan 50 amde')
}else{
	console.log('a cvladis mnishvneloba ucnobia')
}*/




/*let d = 0;
let h;

d != 0 ? h = 'yes' : h = 'no';*/


/*სვიჩ და ქეის ფუნქცია

let amount = 100;


switch(amount){
  
  case 10 :

  	console.log('10');

  	break;

  case 20 :

  	console.log('20');

  	break;

  case 100 :

  	console.log('100')
}*/



/*მასივის ყველა წევრის დაბეჭდვა

let user = ['name', 'surname',['1', 2],'45']

console.log(user[2][1])

console.log(user.length)

for (var i = 0; i < user.length; i++) {

	console.log(user[i])
}


let index = 0;

while (index < user.length){
	console.log(user[index])

	index++
}*/







/*function Calculate (a , b) {



	let z = a + b;
	alert(z)
}*/

/*Calculate(10 , 50)*/


/*function Square(a){
	return a * a;
}

console.log(Square(10) * 25)*/


/*function Square(a){
	return a * a * a;
}


function Calculate(a , b , c){
	let aSquare = Square(a);
	let f = aSquare + b + c;
	console.log(f)
}

Calculate(5 , 10 , 15)*/


/*function(message){
	alert(message)

}('შეტყობინება');*/


/*let button = document.getElementById('Button');




button.addEventListener('click', changeDiv)



function changeDiv(){

	this.classList.toggle('rotate');
}
*/





/*let openMenu = document.getElementById('toggle_menu');
let header = document.querySelector('header');

openMenu.addEventListener('click', toggleMenu)


function toggleMenu(){
	header.classList.toggle('show')
	header.classList.toggle('toggle_menu')
	this.innerHTML = '<i class="fa-solid fa-check"></i>';

}*/


/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["მარცხნივ","მარჯვნივ"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})*/






/*let button = document.getElementById('Button');*/


/*button.onclick = message;

function message(){
	alert('delete this photo?')
}*/

/*let div = document.getElementById('Div');
let photo = document.getElementById('img');*/


/*button.addEventListener('click', changeDiv)*/

/*function changeDiv(){*/
	/*let text = '<p>' + div.innerText + " " + 'divis teqsti <p>';*/
  /*div.innerHTML = text*/
  /*console.log(photo.src)
	div.style.backgroundColor = 'red';
  photo.src = 'image/f-3.jpg'
  photo.className = photo.className + " " + "myclass";


  /*let url = photo.getAttribute('data-src');
  photo.setAttribute('src', url);
  console.log(photo.hasAttribute('style'))
  photo.removeAttribute('style');*/


/*  photo.classList.add('myclass', 'class_2');
  photo.classList.remove('myclass');
  photo.classList.toggle('toggle');
  photo.classList.contains('toggle');*/
  /*console.log(photo.classList.contains('toggle'))*/

 /*div.classList.toggle('show'){
 }*/







/*let create = document.getElementById('Crete');
let parent = document.getElementById('Parent');


create.addEventListener('click', CreteElement)

let inc = 1; 




function CreteElement(){
  let  div = document.createElement('div');
  let  but = document.createElement('button');
  but.innerText = "x";
  but.type = "button";
  but.classList.add('delete');
  let input = document.createElement('input');
  input.classList.add('mine_input');
  input.type = 'text';
  input.placeholder = "სახელი";
  
	
	inc++;

	div.append(input);
	div.append(but);


  let firstChild = parent.firstElementChild;

	parent.insertBefore(div, firstChild)

  

}*/


/*const numbers = [8, 19, 5, 6, 14, 9, 13];

const odds = [];
for (const num of numbers){
    if (num % 2 == 0){
        odds.push(num);
    }
}

console.log(odds);
*/



let button = document.getElementById('Button');

let div = document.getElementById('Div');

button.addEventListener('click', changeDiv)


function changeDiv(){
    div.style.backgroundColor = 'red';
}
