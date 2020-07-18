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



// // chp 43-48

// // task1

// function greet(){
//     alert('hello world')
// }


// // task2

// function thanks(){
//     alert("Thanks for purchasing a phone from us");
// }


// // task3


// function deleteRow1(){
//       document.getElementById('row1').remove();
//     }
// function deleteRow2(){
//     document.getElementById('row2').remove();
//  }
//  function deleteRow3(){
//     document.getElementById('row3').remove();
//  }
//  function deleteRow4(){
//     document.getElementById('row4').remove();
//  }
//  function deleteRow5(){
//     document.getElementById('row5').remove();
//  }
//  function deleteRow6(){
//     var row = document.getElementById('row6')
//     row.parentElement.removeChild(row);
//  }
//  function deleteRow7(){
//     var row = document.getElementById('row7')
//     row.parentElement.removeChild(row);
//  }
//  function deleteRow8(){
//     var row = document.getElementById('row8')
//     row.parentElement.removeChild(row);
//  }
//  function deleteRow9(){
//     var row = document.getElementById('row9')
//     row.parentElement.removeChild(row);
//  }
//  function deleteRow10(){
//     var row = document.getElementById('row10')
//     row.parentElement.removeChild(row);
//  }


// // task4

// //done in index.html




// // task5

// var counter = 0;

// var val = document.getElementById('count')
// val.value = counter;

// function increase(){
//     val.value = ++counter;
// }


// function decrease(){
//     val.value = --counter;
// }


// // chapter 49-52

// // task1

// var naam = document.getElementById('name');
// var lName = document.getElementById('lname');
// var agee = document.getElementById('age');

// function sub(){

//     var x = naam.value;
//     document.write("First Name: "+x+"<br>");
//     var y = lName.value;
//     document.write("Last Name: "+y+"<br>");
//     var z = agee.value;
//     document.write("Age: "+z+"<br>");
// }


// // task2

// function read(){
//     var dot = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var textbtn = document.getElementById("mybtn");

//     if(dot.style.display==="none"){
//         dot.style.display = "inline";
//         textbtn.innerHTML = "Read More";
//         moreText.style.display = "none";
//     }
//     else{
//         dot.style.display = "none";
//         textbtn.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }


// task3

function AddData(){
    var x = document.getElementById('age').value;
    var y = document.getElementById('name').value;
    var letters = '/^[a-zA-Z]+$/';

    if((parseInt(x) != (x)) && (y == parseInt(y))){

        alert("Wrong Input");

    }else{
        var rows = "";
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var country = document.getElementById('country').value;

        rows += "<tr><td>" + name + "</td><td>" + age + "</td><td>" + country + "</td><td><button onclick = 'del()'>Delete</button></td><td><button onclick='edit()'>Edit</button></td></tr>";
        var tbody = document.querySelector("#list tbody");
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        tbody.appendChild(tr);
    }
}

function ResetForm(){
    document.getElementById('student').reset();
}

function del(){
          var td = event.target.parentNode;
          var tr = td.parentNode;
          tr.parentNode.removeChild(tr);
}




