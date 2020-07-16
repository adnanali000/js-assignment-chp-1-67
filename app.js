// // chapter 39-67

// // task1

// function power(a,b){
//             return Math.pow(a,b);_
// }
// alert(power(5,2));
// 

// //task2

// function leapyear(year){
//     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// alert(leapyear(2016));
// _


// // task3

// function sides(a,b,c){

//     var sid = (a+b+c)/2;

//     function area(){

//         return sid*(sid-a)*(sid-b)*(sid-c)
//     }
//     alert("area of triangle: " +area());
// }
// sides(2,3,4);


// task4

// function mainFun(maths,english,history){

//     var total = maths + english + history;
//     function average(){

//         return total/3;

//     }
//     function percentage(){

//         return (total/300)*100
//     }
 

//     alert("average marks: "+average());
//     alert("percenyage: "+percentage()+"%");
// }
// mainFun(80,60,40);


// // task5


// function sentence(word){

//     function singlechr(chr){
      
        
//         var a = word.split("");
//          console.log(a);
           
//         for(var i = 0; i < a.length; i++){

//             if(chr == a[i]){
//                 console.log(chr+" is at index "+i)
//                 break
//             }
//         } 
      
//         }
//         singlechr("a")

//     }
    

// sentence("islamabad")


// // task6


// function sentence(str){

//  var val = str.toLowerCase();   
// var res = val.replace(/[aeiou]/g,'');
// console.log(res)
// }
// sentence("hello wOrld");


// // task 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }

// console.log(findOccurrences());


// // task8

// function distance(km){

//     console.log(km+" km")

//     function meter(){
//         var res = km * 1000
//         return res;

//     }
//     function feet(){

//         var res = km * 3280.84;
//         return res;

//     }
//     function inches(){
//         var res = km * 39370.08;
//         return res

//     }
//     function centimeters(){

//         var res = km * 100000;
//         return res;

//     }
//     console.log("Meter: "+meter());
//     console.log("Feet: "+feet());
//     console.log("inches: "+inches());
//     console.log("Centimeter: "+centimeters());
// }
// distance(2)



// // task9

// var employees = prompt("enter number of employees");
// var i = 1;
// var workingHour;
// var overTime;
// var overTimePay;

// while(i <= employees){

//     workingHour = prompt("Enter working hour of " + i +" employees");
//     if(workingHour > 40){
//         overTime = workingHour - 40;
//         overTimePay = overTime * 12;
//         alert("Employee No: "+i+" over time pay is: "+overTimePay)
//         i++;
//     }
//     else{
//         alert("Work more than 40 hours to get overtime pay")
//         i++
//     }
// }


// // // task10

// var amount = prompt("Enter amount to withdraw!!")

// var hundredNotes = Math.floor(amount / 100);
// var fiftyNotes = Math.floor((amount % 100) / 50);
// var tenNotes = Math.floor((((amount % 100) % 50) / 10));
// var remainingAmount = Math.floor((((amount % 100)%50)%10))

// alert("you will have "+hundredNotes+" hundred notes "+fiftyNotes+" fifty notes "+tenNotes+" ten notes");
// alert("remaining amount "+remainingAmount)











