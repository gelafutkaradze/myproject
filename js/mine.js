var Name_2, Name_3, Name;

Name = 'levan';

const Price = 1200;


 let number = 150; // 20.50 Number რიცხვითი მნიშვნელობა 
 let str = "სახელი"; // String ტექსტური მნიშვნელობა 
 let bool = true; // false / true Boolean ლოგიკური მნიშვნელობა
 let undefin = undefined; // undefined (უცნობი) ლოგიკური მნიშვნელობა
 let nul = null; // null განუსაზღვრელი მნიშვნელობა
 let nan = NaN; // NaN not a number
 let obj = Object; // Object ობიექტი

 // typeof(number)

 let name = 'Giorgi';
 let Surname = 'Dvalishvili';

 let fullname = name + " " + Surname;
  
 let a = 60;
 let b = 20;

 let z = (parseInt(a) + parseInt(b)) / 10 * 2;
 // let z = a - b;
 // let z = a * b;
 // let z = a / b;

 // && - და
// || - ან


let logic = a >= b || a > 200 || b == 500 || a < 10;



if (a >= 20 && a < 30) {

    console.log('a 20 დან 30 -მდე !')

}else if(a >= 30 && a < 50){

    console.log('a 30 დან 50 -მდე !')
}else if(a >= 50 && a < 70){

    console.log('a 50 დან 70 -მდე !')
}else{

	console.log('a ცვლადის მნიშვნელობა უცნობია !')
}

let d = 0;
let h;

d != 0 ? h = 'yes' : h = 'no';

let amount = 100;


// switch(amount){
 
//  case 10 :
  
//   console.log('10');

//  break;

//  case 20 :
  
//   console.log('20');

//  break;

//  case 30 :
  
//   console.log('30');

//  break;

//  case 50 :
  
//   console.log('50');

//  break;

//  default :

//  console.log('დამთხვევა ვერ მოიძებნა');

//  break;
// }






// console.log(user.length)

let t = 0;


// t++ t = t + 1
// ++t  t = t + 1

// t-- t = t - 1
// --t  t = t - 1


t += 5 // t = t + 5

t *= 5 // t = t * 5

t /= 5 // t = t / 5

t -= 5 // t = t - 5

let user = ['name', 'surname', 598454554, 'user@mail.ge', true];




// for (var i = 0; i < user.length; i++) {

// 	console.log(user[i])

// }

let numbers = [1,2,3,4,5,6,7,8,9,15,12,13,2,5,7,3];


for (var i = 0; i < numbers.length; i++) {

	// if (numbers[i] > 10) {

	// 	 break;
	// }

	// if (numbers[i] > 10) {
		
	// 	 continue;
	// }

	// console.log(numbers[i])

}


for (var i = numbers.length - 1; i >= 0; i--) {

	// console.log(numbers[i])
}


let index = 5;

// while(index < numbers.length){
   
//    console.log(numbers[index])

//    index++

// }

do{

    console.log(numbers[index])

    index++

}while(index < 3)


let time = 2;


// if (time >= 1 && time <= 6) {

// 	alert('ღამე მშვიდობის')

// }else if(time > 6 && time <= 12){

// 	alert('დილა მშვიდობის')

// }else if(time > 12 && time <= 18){

//     alert('შაუდღე მშვიდობის')

// }else{
// 	  alert('საღამო მშვიდობის')
// }

// let user_type = 10;


// switch(user_type){
// 	 case 1 :
//        alert('ადმინი')
// 	 break;

// 	 case 2 :
//        alert('იუზერი')
// 	 break;

// 	  case 3 :
//        alert('ედიტორი')
// 	 break;

// 	 default:

//        alert('403')
// 	 break;
// }

// let log = false;
// let p;


// log ? p = 1 : p = 0;

// console.log(p)



// console.log(logic)
// document.write(fullname)

function Square(a){

  return a * a;
}

function Cube(b){

	 return b * b * b;
}

let f;


function Calculate(squar,b,c){


    f = squar(b) + c;

     console.log(f)

}

// Calculate(Cube, 10, 15)

// (function(message){

// alert(message)

// })('Setyobineba');



