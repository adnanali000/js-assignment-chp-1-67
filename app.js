// CHAPTER 1
 
// task2
// alert("Error! Please enter a valid password.");
// task3
// alert("Welcome to JS Land... \n Happy Coding!");
// task4
// alert("Welcome to JS Land...");
// task5
// alert("Happy Coding!");

// chapter2

// //task1
// var username;
// //task2
// var myName = "Adnan Musil";
// //task3
// var message = "Hello World";
// alert(message);

// //task4
// var name = "Jhone Doe";
// var age = "15 years old";
// var qualification = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(qualification);

// //task5
// var pizza = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
// alert(pizza);

// //task6
// var email = "adnan.museel123@gmail.com";
// alert("hey email address is " + email);

// //task7
// var book = "A smarter way to learn Javascript";
// alert("I am trying to learn from the book "+book);

// //task8
// document.write("Yah! I can write HTML content through Javascript");

// //task9
// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);
// document.write(x);


// // chapter 3

// // task1
// var age = 20;
// alert("I am "+age+" years old");

// // task2
// var visit = 14;
// alert("you have visited this site "+visit+" times");

// // task3
// var birth = 1999;
// document.write("My birth year is " + birth + "<br>" + " Data type of my declared variable is number"+"<br>");

// //task4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write(visitorName+" ordered "+quantity+" "+productTitle+" on XYZ clothing store");



// // chapter 4

// // task1
// var firstVar,secondVar,thirdVar;

// // task2
// //legal var

// // var mail,mail123,mail$,mail_done,mailSent;

// //illegal
// // var 123hello,hello world,for,{hell world},hell-world;

// // task3

// document.write("Variables name can only contain , numbers,$ and _.For example:$my_1stVariable"+"<br>"+
//                "Variable must begin with a letter,$ or _.For example: $name,_name or name "+"<br>"+
//                "Variable names are case sensitive"+"<br>"+
//                "Variable names should not be JS keyword");


// // chapter 5

// // task1
// var num1 = 3;
// var num2 = 5;
// var add = num1 + num2;
// document.write("Sum of 3 and 5 is "+add + "<br> ");

// //task2

// var sub = num1-num2;
// var mul = num1*num2;
// var div = num1/num2;
// var mod = num1%num2;

// document.write("subtraction "+sub+"<br> "+"Multiplication "+mul+"<br> "+"division "+div+"<br> "+"modulus "+mod+"<br> ");

// // task3

// var num;
// document.write("value after variable declaration is "+num+"<br>");
// num = 5;
// document.write("initial value: "+num+"<br>");
// num++;
// document.write("value after incriment is: "+num+"<br> ");
// num = num+7;
// document.write("value after addition is: "+num+"<br> ");
// num--;
// document.write("value after decrement is: "+num+"<br> ");
// num = num%3;
// document.write("The remainder is: "+num+"<br>");

// // task4
// var cost = 600;
// document.write("The cost to buy 5 tickets to a movie is: "+cost*5+"PKR "+"<br>");

// // task5

// var table = 4;
// document.write("Table of "+table+"<br>");
// document.write(table+"* "+"1 "+"= "+table*1+"<br>");
// document.write(table+"* "+"2 "+"= "+table*2+"<br>");
// document.write(table+"* "+"3 "+"= "+table*3+"<br>");
// document.write(table+"* "+"4 "+"= "+table*4+"<br>");
// document.write(table+"* "+"5 "+"= "+table*5+"<br>");
// document.write(table+"* "+"6 "+"= "+table*6+"<br>");
// document.write(table+"* "+"7 "+"= "+table*7+"<br>");
// document.write(table+"* "+"8 "+"= "+table*8+"<br>");
// document.write(table+"* "+"9 "+"= "+table*9+"<br>");
// document.write(table+"* "+"10 "+"= "+table*10+"<br>");

// // task6

// var cel = 32;
// var convert_Fahrenheit = (cel * 9/5)+32;
// document.write(cel+"'C is "+convert_Fahrenheit+" 'F"+"<br>");


// var fah = 56;
// var convert_celsius = (fah - 32) * 9/5;
// document.write(fah+"'F is "+convert_celsius+" 'C"+"<br>");

// // task7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;

// var item1 = priceItem1 * quantityItem1;
// var item2 = priceItem2 * quantityItem2;
// var total = item1+item2+shippingCharges;

// document.write("SHOPPING CART"+"<br>");
// document.write("price of item 1 is: "+priceItem1+"<br>");
// document.write("quantity of item 1 is: "+quantityItem1+"<br>");
// document.write("price of item 2 is: "+priceItem2+"<br>");
// document.write("quantity of item 1 is: "+quantityItem1+"<br>");
// document.write("shipping charges: "+shippingCharges+"<br>");
// document.write("Total cost of your order is: "+total+"<br>");

// // task8

// document.write("MARKS SHEET"+"<br>");
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks*100) / totalMarks; 
// document.write("Total marks: "+totalMarks+"<br>");
// document.write("Marks obtained: "+obtainedMarks+"<br>");
// document.write("Percentage: "+percentage+"<br>");

// // task9
// document.write("CURRENCY IN PKR "+"<br>");

// var usDollarPkr = 104.80;
// var saudiRyalPkr = 28;
// var totalRupees = (10*usDollarPkr) + (25*saudiRyalPkr);
// document.write("Total currency in PKR: "+totalRupees+"<br>");

// // task10
// var cal = 10;
// cal = cal+5;
// cal = cal*10;
// cal = cal/2;
// document.write("ANS: "+cal+"<br>");

// // task11
//  document.write("AGE CALCULATOR"+"<br>");   
//  var currentYear = 2016;
//  var birthYear = 1992;
//  var yourAge = currentYear - birthYear;
//  document.write("current year: "+currentYear+"<br>"+
//                 "birth year: "+birthYear+"<br>"+
//                  "your age: "+yourAge+"<br>");
                 
// //  task12

// document.write("THE GEOMETRIZER"+"<br>");
// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*(radius*radius);
// document.write("radius of a circle: "+radius+"<br>");
// document.write("circumference of a circle: "+circumference+"<br>");
// document.write("area of a circle: "+area+"<br>");

// // task13
// document.write("THE LIFETIME SUPPLY CALCULATOR"+"<br>");
// var snack = "wavy";
// var currentAge = 20;
// var maxAge = 65;
// var snackPerDay = 3;
// var eatTotal = (maxAge - currentAge) * 3;
// document.write("favourite snack "+snack+"<br>"+"current age "+currentAge+"<br>"+"estimated maximum age "+maxAge+"<br>"+"amount of snacks per day "+snackPerDay+"<br>");
// document.write("you will need "+eatTotal+" wavy to last you until the ripe old age of "+maxAge+"<br>");


// // chapter 6-9

// // task1
// var a = 10;
// document.write("The value of ++a is: "+ ++a +"<br>");
// document.write("now the value of a is: "+ a + "<br>");

// document.write("The value of a++ is: "+ a++ + "<br>");
// document.write("now the value of a is: "+ a +"<br>");

// document.write("The value of --a is: "+ --a +"<br>");
// document.write("now the value of a is: "+ a + "<br>");

// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("now the value of a is: "+ a + "<br>");


// // task2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--; 
// //--a; 1
// //--a - --b; 1-0 = 1
// //--a - --b + ++b; 1-0+1 = 2
// //--a - --b + ++b + b--; 1-0+1+1 = 3
// document.write("The value of result: "+ result + "<br>");//3
// document.write("The value of a: "+a+"<br>");//1
// document.write("The value of b: "+b+"<br>");//0

// // task3

// var user = prompt("Enter your name");
// alert("Welcome "+user);

// //task4 //missing question

// //task5
// var five = 5;
// var table = prompt("enter number",five);
// document.write("Table of "+table+"<br>");
// document.write(table+"* "+"1 "+"= "+table*1+"<br>");
// document.write(table+"* "+"2 "+"= "+table*2+"<br>");
// document.write(table+"* "+"3 "+"= "+table*3+"<br>");
// document.write(table+"* "+"4 "+"= "+table*4+"<br>");
// document.write(table+"* "+"5 "+"= "+table*5+"<br>");
// document.write(table+"* "+"6 "+"= "+table*6+"<br>");
// document.write(table+"* "+"7 "+"= "+table*7+"<br>");
// document.write(table+"* "+"8 "+"= "+table*8+"<br>");
// document.write(table+"* "+"9 "+"= "+table*9+"<br>");
// document.write(table+"* "+"10 "+"= "+table*10+"<br>");


// // task6

//     var sub1 = prompt("Enter first subject name");
//     var sub2 = prompt("Enter second subject name");
//     var sub3 = prompt("Enter third subject name");
//     var marksTotal = 100;
//     var sub1Marks = Number(prompt("Enter obtained marks of "+sub1))
//     var sub2Marks = Number(prompt("Enter obtained marks of "+sub2))
//     var sub3Marks = Number(prompt("Enter obtained marks of "+sub3))
//     var sub1Percentage = (sub1Marks * 100) / marksTotal;
//     var sub2Percentage = (sub2Marks * 100) / marksTotal;
//     var sub3Percentage = (sub3Marks * 100) / marksTotal; 

//     var totalAdd = 300;
//     var obtainedAdd = sub1Marks + sub2Marks + sub3Marks;
//     var totalPercentage = (obtainedAdd * 100)/totalAdd;

//     document.write("Subject"+" "+"Total Marks"+" "+"Obtained Marks"+" "+"Percentage"+"<br>");
//     document.write(sub1+"--------"+marksTotal+"-----------"+sub1Marks+"-----------------------"+sub1Percentage+"%"+"<br>");
//     document.write(sub2+"--------"+marksTotal+"-----------"+sub2Marks+"-----------------------"+sub2Percentage+"%"+"<br>");
//     document.write(sub3+"--------"+marksTotal+"-----------"+sub3Marks+"------------------------"+sub3Percentage+"%"+"<br>");
//     document.write("Total"+"--------"+totalAdd+"-----------"+obtainedAdd+"----------------------"+totalPercentage+"%"+"<br>");
   

// // chapter 9-11

// // task1

// var city = prompt("Enter your city");
// if(city == "Karachi"){

//     alert("Welcome to the city of lights");
// }

// // task2
// var gender = prompt("Enter your gender");
// if(gender == "male"){
//     alert("Good morning sir");
// }
// else if(gender == "female"){
//     alert("Good morning Ma'am");
// }
// else{
//     alert("Enter your gender")
// }

// //task3
// var signalColour = prompt("Enter signal colour");
// if(signalColour == "Red"){
//     alert("Must Stop");
// }
// else if(signalColour == "Yellow"){
//     alert("Ready to move");
// }
// else if(signalColour == "Green"){
//     alert("Move Now");
// }


// // task4
// var fuel = Number(prompt("Enter your fuel in litres"));
// if(fuel < 0.25){
//     alert("Please refil the fuel in your car");
// }
// else{
//     alert("Okay");
// }

// //task5
// //a
// var a = 4;
// if(++a === 5){
//     alert("given condition for a variable a is true");
// }
// else{
//     alert("false")
// }

// //b
// var b = 82;
// if(b++ === 83){
//     alert("given conditon for a variable b is true")
// }
// else{
//     alert("false")
// }

// //c
// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(c === 13){
//     alert("condtion 2 is true");
// }
// if(++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// //d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost == laborCost + materialCost){
//     alert("The cost equals")
// }
// else{
//     alert("Not equal")
// }


// //e
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }

// //f
// if("car" < "cat"){
//     alert("car is less than cat");
// }


// // task6

// document.write("Marks Sheet"+"<br>");

// var subject1Marks = Number(prompt("Enter subject 1 marks"));
// var subject2Marks = Number(prompt("Enter subject 2 marks"));
// var subject3Marks = Number(prompt("Enter subject 3 marks"));
// var marksTotal = 300;
// var subjectsTotal = subject1Marks + subject2Marks + subject3Marks;
// var percent = (subjectsTotal * 100) / marksTotal;

// if(percent >= 80){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: A-one"+"<br>");
//     document.write("Remarks: Excellent"+"<br>");
// }
// else if(percent >= 70){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: A"+"<br>");
//     document.write("Remarks: Good"+"<br>");
// }
// else if(percent >= 60){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: B"+"<br>");
//     document.write("Remarks: You need to improve"+"<br>");
// }
// else if(percent < 60){
//     document.write("Total Marks: "+marksTotal+"<br>");
//     document.write("Marks obtained: "+subjectsTotal+"<br>");
//     document.write("Percentage: "+percent+"%"+"<br>");
//     document.write("Grade: Fail"+"<br>");
//     document.write("Remarks: Sorry"+"<br>");
// }

// // task 7

// var secretNum = 4;
// var userNum = Number(prompt("Guess the secret number between 1-10"));
// if(secretNum === userNum){
//     alert("Bingo! correct answer");
// }
// else if(userNum === 3){
//     alert("close enough to the correct answer")
// }


// // task 8

// var divisibleBy3 = 9;
// if(divisibleBy3 % 3 === 0){
//     alert("Number is divisible by 3")
// }
// else{
//     alert("not divisible by 3")
// }

// // task 9 

// var userInput = Number(prompt("enter number"));
// if(userInput % 2 === 0){
//     alert("even");
// }
// else if(userInput % 2 !== 0){
//     alert("odd");
// }
// else{
//     alert("enter correct number")
// }

// // task 10

// var temperature = prompt("Enter temperature");
// if(temperature > 40){
//     alert("It is too hot outside")
// }
// else if(temperature > 30){
//     alert("The weather today is normal")
// }
// else if(temperature > 20){
//     alert("Today's weather is cool");
// }
// else if(temperature > 10){
//     alert("OMG! Today's weather is so cool")
// }
// else{
//     alert("enter temperature")
// }

// // task 11

// var firstNum = Number(prompt("Enter first number"));
// var secondNum = Number(prompt("Enter second number"));
// var operator =  prompt("Enter operator","+,-,*,/,%");

// if(operator === "+"){
//     document.write(firstNum + "+" + secondNum + "=" + (firstNum+secondNum));

// }
// if(operator === "-"){
//     document.write(firstNum + "-" + secondNum + "=" + (firstNum-secondNum));

// }
// if(operator === "*"){
//     document.write(firstNum + "*" + secondNum + "=" + (firstNum*secondNum));

// }
// if(operator === "/"){
//     document.write(firstNum + "/" + secondNum + "=" + (firstNum/secondNum));

// }
// if(operator === "%"){
//     document.write(firstNum + "%" + secondNum + "=" + (firstNum%secondNum));

// }



// // chapter 12-13

// task1



// // task2
// var number1 = prompt("enter first number");
// var number2 = prompt("enter second number");
// if(number1 > number2){
//     alert("number1 is greater than number2")
// }
// else if(number2 > number1)
// {
//     alert("number2 is greater than number1")
// }
// else if(number1 === number2){
//     alert("both are equal");
// }

// // task3
// var userNumber = Number(prompt("Enter number"));
// if(userNumber > 0){
//     alert("Number is positive")
// }
// else if(userNumber < 0){
//     alert("Number is negative")
// }
// else if(userNumber == 0){
//     alert("Number is zero");
// }
// else{
//     alert("enter number");
// }

// // task4

// var vowel = prompt("Enter vowel");
// var smallVawel = vowel.toLocaleLowerCase();
// if(smallVawel === "a" || smallVawel === "e" || smallVawel === "i" || smallVawel === "o" || smallVawel === "u"){
//     alert("True")
// }
// else{
//     alert("False")
// }

// // task5

// var pass = prompt("Enter your password");
// var confirmPass = prompt("Confirm your password");

// if(pass === confirmPass){
//     alert("Correct! The password you entered matches the original password")
// }
// else if(pass !== confirmPass){
//     alert("Incorrect password");
// }

// // task6

// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good Day"; 
//     alert(greeting)   
// }
// else{
//     greeting = "Good Evening"
//     alert(greeting)
// }


// // task7
// var time = prompt("Enter time in 24 hours clock format like 1900")
// if(time >= 0000 && time < 1200){
//     alert("Good morning")
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon")
// }
// else if(time >= 1700 && time < 2100){
//     alert("good evening")
// }
// else if(time >= 2100 && time < 2359){
//     alert("good night")
// }
// else{
//     alert("enter correct time")
// }


// // chapter 14-16
// // task1
// var studentName = [];

// //task2
// var studName = {};

// //task3
// var fruits = ["mangoes","apple","banana"];

// //task4
// var numArr = [1,2,3,4,5];

// //task5
// var boolArr = [true,false];

// //task6
// var mixArr = [1,true,3,"adnan"];

// //task7
// var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("QUALIFICATION"+"<br>");
// document.write("1)"+education[0]+"<br>");
// document.write("2)"+education[1]+"<br>");
// document.write("3)"+education[2]+"<br>");
// document.write("4)"+education[3]+"<br>");
// document.write("5)"+education[4]+"<br>");
// document.write("6)"+education[5]+"<br>");
// document.write("7)"+education[6]+"<br>");
// document.write("8)"+education[7]+"<br>");

// //task8
// var student = ["Michael","john","Tony"];
// var studentScore = [320,230,480];
// var total_Marks = 500;
// var percentageStudent1 = (studentScore[0] * 100) / total_Marks;
// var percentageStudent2 = (studentScore[1] * 100) / total_Marks;
// var percentageStudent3 = (studentScore[2] * 100) / total_Marks;
// document.write("Score of "+student[0]+"is "+studentScore[0]+". Percentage "+percentageStudent1+"%"+"<br>");
// document.write("Score of "+student[1]+"is "+studentScore[1]+". Percentage "+percentageStudent2+"%"+"<br>");
// document.write("Score of "+student[2]+"is "+studentScore[2]+". Percentage "+percentageStudent3+"%"+"<br>");


// //task9
// var colourNames = ["green","black","yellow","blue"];
// document.write(colourNames+"<br>");

// //a
// var addBegining = prompt("What colour do you want to add in the begining");
// colourNames.unshift(addBegining);
// document.write(colourNames+"<br>");

// //b
// var addend = prompt("What colour do you want to add in the end");
// colourNames.push(addend);
// document.write(colourNames+"<br>")

// //c
// colourNames.unshift("brown","pink");
// document.write(colourNames+"<br>");

// //d
// colourNames.shift();
// document.write(colourNames+"<br>");

// //e
// colourNames.shift();
// document.write(colourNames+"<br>");

// //f
// var addColour = prompt("At which index do you want to add colour");
// var addColourName = prompt("Colour Name");
// colourNames.splice(addColour,0,addColourName);
// document.write(colourNames+"<br>");

// //g
// var removeColour = prompt("At which index you want to delete colour");
// var endingPoint = prompt("How many colours do you want to delete");
// colourNames.splice(removeColour,endingPoint);
// document.write(colourNames+"<br>");

// // task10
// var scoreStudent = [320,230,480,120];
// document.write("Scores of students: "+scoreStudent+"<br>");
// var ascOrder = scoreStudent.sort();
// document.write("Ordered scores of students: "+ascOrder+"<br>");

// //task11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: "+"<br>"+cities+"<br>");

// var citiesSelected = cities.slice(2,4);
// document.write("Selected Cities list: "+"<br>"+citiesSelected+"<br>");

// //task12
// var str = ["This","is","my","cat"];
// document.write("Array: "+"<br>"+str+"<br>");

// var joinStr = str.join(" ");
// document.write("String: "+"<br>"+joinStr+"<br>");


// //task13
// var device = [];
// device.unshift("keyboard","mouse","printer","monitor");
// document.write("Devices: "+"<br>"+device+"<br>");

// document.write("Out: "+"<br>"+device.shift()+"<br>");
// document.write("Out: "+"<br>"+device.shift()+"<br>");
// document.write("Out: "+"<br>"+device.shift()+"<br>");
// document.write("Out: "+"<br>"+device.shift()+"<br>");


// // task14
// var device = [];
// device.push("keyboard","mouse","printer","monitor");
// document.write("Devices: "+"<br>"+device+"<br>");

// document.write("Out: "+"<br>"+device.pop()+"<br>");
// document.write("Out: "+"<br>"+device.pop()+"<br>");
// document.write("Out: "+"<br>"+device.pop()+"<br>");
// document.write("Out: "+"<br>"+device.pop()+"<br>");


// // task15

// var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write(phone[0]+"<br>");
// document.write(phone[1]+"<br>");
// document.write(phone[2]+"<br>");
// document.write(phone[3]+"<br>");
// document.write(phone[4]+"<br>");
// document.write(phone[5]+"<br>");


// // chapter 17-20

// //task1
// var mulArr = [[1,2],[4,5]];


// // task2
// var multidimensionalArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multidimensionalArr[0].join(" ")+"<br>"+multidimensionalArr[1].join(" ")+"<br>"+multidimensionalArr[2].join(" ")+"<br>");


// //task3

// for(var i = 1; i <= 10; i++){
//       document.write(i+"<br>");
// }


// // task4

// var tabNum = prompt("enter a number to show its multiplication table")
// var tabNumLength = prompt("enter length multiplication table");

// document.write("Multiplication table of "+tabNum+"<br>");
// document.write("Length "+tabNumLength+"<br>");
// for(var i = 1; i<=tabNumLength; i++)
// {
//     document.write(tabNum+"*"+i+"="+(tabNum * i)+"<br>");
// }

// // task5

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+"<br>");
// }    
// for(var j = 0; j < fruits.length; j++){
//     document.write("Element at index "+j+" is "+fruits[j]+"<br>");
// }

// // task6

// //a
// document.write("Counting: "+"<br>");
// for(var i = 1; i <= 15; i++)
// {
//     document.write(i+",");
// }

// //b
// document.write("<br>"+"Reverse Counting: "+"<br>")
// for(var j = 10; j > 0; j--){
//     document.write(j+",");
// }

// //c
// document.write("<br>"+"Even"+"<br>");
// for(var k = 0; k <= 20; k=k+2){
//     document.write(k+",");
// }

// //d
// document.write("<br>"+"Even"+"<br>");
// for(var x = 1; x <= 20; x=x+2){
//     document.write(x+",");
// }

// //e
// document.write("<br>"+"Series: "+"<br>")
// for(var a = 2; a <= 20; a+=2){
//     document.write(a+"k, ");
// }


// // task7

// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var bakSearch = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am ?");
// var newbakSearch = bakSearch.toLocaleLowerCase();

// for(var x = 0; x < bakery.length; x++){
//     if(bakery[x] === newbakSearch){
//         alert(newbakSearch+" is available at index "+ x +" in our bakery");
//         break;
//     }
//     else{
//         alert(newbakSearch + " is not available in our bakery");
//         break;
//     }
// }

// // task8

// var arrLarge = [24,53,78,91,12];
// var num = 0;

// for(var i = 0; i <= num; i++){
//     if(arrLarge[i] > num){
//         var num = arrLarge[i];
//     }

// }
// document.write("Array items: "+arrLarge+"<br>");
// document.write("The largest number: "+num+"<br>");

// // task9

// var arrSmall = [24,53,78,91,12];
// var num = arrSmall[0];

// for(var i = 0; i < arrSmall.length; i++){
//     if(arrSmall[i] < num){
//         num = arrSmall[i];
//     }
// }
// document.write("Array items: "+arrSmall+"<br>");
// document.write("The smallest number: "+num+"<br>");



// // task10

// for(var i = 5; i <= 100; i+=5){
//     document.write(i+", ");
// }


//////////////////////////////////////////////////////////////

// // chapter 21-25

// // task1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your lastname");
// var fullName = firstName + " " +  lastName;
// alert("Welcome "+fullName);


// // task2
// var favMobile = prompt("Write your favourite mobile model");
// var mobileLength = favMobile.length;
// document.write("My favourite phone is: "+favMobile+"<br>");
// document.write("Length of string: "+mobileLength+"<br>");_

// // task3

// var nationality = "Pakistani";
// var nInd = nationality.indexOf('n');
// document.write("String: "+nationality+"<br>");
// document.write("index of 'n': "+nInd);

// // task4

// var greet = "Hello world";
// var lInd = greet.lastIndexOf('l');
// document.write("string: "+greet+"<br>");
// document.write("last index of 'l': "+lInd);


// // task5
// var nationality = "Pakistani";
// var thirdInd = nationality.charAt(3);
// document.write("string: "+nationality+"<br>");
// document.write("character at index 3: "+thirdInd);


// // task6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your lastname");
// var fullName = firstName.concat(" "+lastName);
// alert("Welcome "+fullName);


// // task7

// var city = "Hyderabad";
// var afterRep = city.replace("Hyder","Islam");
// document.write("city: "+city+"<br>");
// document.write("after replacement: "+afterRep);

// // task8

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var repAnd = message.replaceAll("and","&");

// document.write("message: "+message+"<br>");
// document.write("After replacement: "+repAnd);

// // task9

// var str = "472";
// document.write("value: "+str+"<br>");
// document.write("type: "+typeof(str)+"<br>");

// var changeType = Number(str);
// document.write("value: "+str+"<br>");
// document.write("type: "+typeof(changeType));


// // task10

// var usrInp = prompt("enter your fav colour");
// var userInp_upper = usrInp.toLocaleUpperCase();
// document.write("user input: "+usrInp+"<br>");
// document.write("upper case: "+userInp_upper);


// // task11
// var animal = prompt("enter animal name");
// var firstLet = animal.slice(0,1);
// var firstLetUpp = firstLet.toLocaleUpperCase();
// var remLet = animal.slice(1);
// var titleCase = firstLetUpp + remLet;
// document.write("user input: "+animal+"<br>");
// document.write("title case: "+titleCase);



// // task12
// var num = 35.36;
// var res = num.toString().replace(".","");
// document.write("Numbre: "+num+"<br>");
// document.write("Result: "+res);


// task13

// var res = String.fromCharCode(33,44,46,64);
// var name = "adnan!";

// for(var i=0; i<res.length; i++){
//     if(res[i] == name){
//         alert("wrong input");
//         break;
//     }
//     else{
//         alert("correct");
//         break;
//     }
    

// }


// // task14

// var bak = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");
// var bakLow = bak.toLowerCase();
// var bakery = ["cake","apple pie","cookie","chips","patties"];

// for(var i=0; i<bakery.length; i++){
//     if(bakLow == bakery[i]){
//         alert(bakLow+" is available at index "+i+" in our bakery");
//         break;
//     }
//     else{
//         alert("We are sorry."+bakLow+" is not available in our bakery");
//         break;
//     }
// }


// // task15

// var pass = prompt("Enter your password");
// var firstLet = pass.slice(0,1);
// var lowerLetter = /[a-z]/g;
// var upperLetter = /[A-Z]/g;
// var number = /[0-9]/g;

// if(pass.match(lowerLetter)){
//     if(pass.match(upperLetter)){
//         if(pass.match(number)){
//             if(pass.length >= 6){
//                 if(isNaN(parseInt(pass[0]))){
//                     alert("correct password")
//                 }
//                 else{
//                     alert("Entered password: "+pass+"\r\n"+
//                     "first letter should not be a number"+"\r\n"+
//                     "Please enter a valid password");

//                 }
                
//             }
//             else{
//                 alert("Entered password: "+pass+"\r\n"+
//                 "Password atleat 6 characters long"+"\r\n"+
//                 "Please enter a valid password");
//             }
//         }
//         else{
//             alert("Entered password: "+pass+"\r\n"+
//             "Password should contain number"+"\r\n"+
//             "Please enter a valid password");
//         }
        
//     }
//     else{
//         alert("Entered password: "+pass+"\r\n"+
//         "Password should contain upper case"+"\r\n"+
//         "Please enter a valid password");
//     }
       
// }
// else{
//     alert("Entered password: "+pass+"\r\n"+
//     "Password should contain lower case"+"\r\n"+
//     "Please enter a valid password");
// }
    

// // task16

// var university = "university of karachi";
// var spl = university.split("");

// for(var i = 0; i < spl.length; i++){
//     document.write(spl[i]+"<br>");
// }

// // task17

// var usrIn = prompt("enter your country");
// var lastChr = usrIn.charAt(usrIn.length-1);
// alert("user input: "+usrIn+"\r\n"+"Last character of input: "+lastChr);


// // task18

// var text = "the quick brown fox jumps over the lazy dog";
// var countThe = (text.match(/the/g)).length;
// document.write("Text: "+"the quick brown fox jumps over the lazy dog"+"<br>");
// document.write("There are "+countThe+" occurrence(s) of word 'the'")


// // chapter 26-30

// // task1
// var num = prompt("enter positive integer");
// document.write("number: "+num+"<br>");
// document.write("round of value: "+Math.round(num)+"<br>")
// document.write("floor value: "+Math.floor(num)+"<br>");
// document.write("ceil value: "+Math.ceil(num));

// // task2

// var num = prompt("enter negative integer");
// document.write("number: "+num+"<br>");
// document.write("round of value: "+Math.round(num)+"<br>")
// document.write("floor value: "+Math.floor(num)+"<br>");
// document.write("ceil value: "+Math.ceil(num));


// // task3
// var num = prompt("enter number");
// var numabs = Math.abs(num);
// document.write("The absolute value of "+num+" is "+numabs);

// // task4

// var ranNum = Math.random();
// var ranSix = (ranNum * 6) + 1;
// var ranSixFlr = Math.floor(ranSix);
// document.write("random dice value: "+ranSixFlr);


// // task5

// var coin = Math.random();
// var headTail = (coin * 2) + 1;
// var headTailFlr = Math.floor(headTail);

// if(headTailFlr == 2){
//     document.write(headTailFlr+"<br>")
//     document.write("random coin value: Heads")
// }
// else{
//     document.write(headTailFlr+"<br>")
//     document.write("random coin value: Tails")

// }


// // task6

// var number = Math.random();
// var numberHund = (number * 100) + 1;
// var numberHundFlr = Math.floor(numberHund);

// document.write("random number between 1 and 100: "+numberHundFlr);


// // task7

// var weight = prompt("enter your weight in kilograms");
// var weightPar = parseInt(weight) + 8.3;

// document.write("The weight of user is "+weightPar+" kilograms");



// // task8

// var secNum = Math.random();
// var secOne_Ten = (secNum * 10) + 1;
// var secOne_Ten_Flr = Math.floor(secOne_Ten);
// alert(secOne_Ten_Flr)
// var user = prompt("Enter a number between 1-10");
// if(user == secOne_Ten_Flr){
//     alert("congratulation");
// }
// else{
//     alert("Try again");
// }


// //chapter 31-34

// // task1
// var rn = new Date();
// document.write(rn);

// // task2

// var rn = new Date();
// var month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
// var monthInWord = month[rn.getMonth()];
// document.write("current month: "+monthInWord);


// // task3

// var rn = new Date();
// var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var dayInWord = days[rn.getDay()];
// var dayThree = dayInWord.slice(0,3);
// alert("Today is: "+dayThree);

// // task4

// var rn = new Date();
// var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var dayInWord = days[rn.getDay()];

// if(dayInWord == "sunday" || dayInWord == "saturday"){
//     alert("It's fun day");
// }
// else{
//     alert("normal day");
// }

// // task5

// var rn = new Date();
// var dat = rn.getDate();

// if(dat < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("last days of the month");
// }


// // task6

// var rn = new Date();
// var since1970 = rn.getTime();
// var min = since1970 / 1000 * 60;

// document.write("current date: "+rn+"<br>");
// document.write("Elapsed milliseconds sice january 1,1970: "+since1970+"<br>");
// document.write("Elapsed minutes sice january 1,1970: "+min);


// // task7

// var rn = new Date();
// var time = rn.getHours();

// if(time < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM");
// }


// // task8

// var lastdate = new Date("December 31, 2020");
// var laterDate = new Date(lastdate);
// alert("later date: "+laterDate);

// // task9

// var firstRam = new Date("June 18, 2015");
// var rn = new Date("June 24, 2020");
// var diff = rn.getTime() - firstRam.getTime();
// var SinceDays = diff / (1000 * 60 * 60 * 24);
// document.write(SinceDays+ " days have passed since 1st Ramadan, 2015");

// // task10

// var refDate = new Date("Dec 05, 2015");
// var begDate = new Date("jan 01, 2015");
// var diff = refDate.getTime() - begDate.getTime();
// var sec = diff / 1000;
// document.write(sec+" seconds had passed since beginning of 2015");


// // task11

// var rn = new Date(2020,5,25,00,35,30);
// document.write("curent date: "+rn+"<br>");

// rn = new Date(2020,5,24,23,35,30);
// document.write("1 hour ago it was: "+rn);


// // task12

//  var rn = new Date();
//  document.write("current date: "+rn+"<br>");
//  rn.setFullYear(1920);
//  document.write("100 years back, it was: "+rn);

// // task13


// var age = prompt("What is your age?");
// document.write("Your age is: "+age+"<br>");
// var rn = new Date();
// var birthYear = rn.getFullYear() - age;
// document.write("your birth year is: "+birthYear);


// // task14

// document.write("K-Electric Bill"+"<br>");
// var name = "ADNAN";
// var month = "February";
// var unit = Math.round(410).toFixed(2);
// var charge = Math.round(16).toFixed(2);
// var netAmount_withInDue = unit * charge;
// var latePay = 350;
// var grossAmount_afterDue = (netAmount_withInDue + latePay);

// document.write("Customer name: "+name+"<br>");
// document.write("Month: "+month+"<br>");
// document.write("Number of units: "+unit+"<br>");
// document.write("charges per unit: "+charge+"<br>"+"<br>");

// document.write("Net amount payable with in due date: "+Math.round(netAmount_withInDue).toFixed(2)+"<br>");
// document.write("Late payment surcharge: "+Math.round(latePay).toFixed(2)+"<br>");
// document.write("Gross amount payable after due date: "+Math.round(grossAmount_afterDue).toFixed(2)+"<br>");


// //chapter 35-38

// //task1

// function currentDate(){

//     var a = new Date();
//     alert(a);
// }
// currentDate();


// // task2

// function greet(firstname,lastname){
//     alert("welcome "+firstname + " "+lastname);
// }
// greet("steves","jobs");

// // task3

// function add(num1,num2){
//     return num1 + num2;
// }

// var plus = add(5,10);
// alert(plus);


// // task4

// function calculator(num1,num2,ope){
//     if(ope == '+'){
//         return num1 + num2
//     }
//     else if(ope == '-'){
//         return num1 - num2;
//     }
//     else if(ope == '*'){
//         return num1*num2;
//     }
//     else if(ope == '/'){
//         return num1 / num2;
//     }
//     else{
//         return "wrong input";
//     }
// }

// var result = calculator(10,2,'/');
// alert("Result: "+result);

// // task5

// function square(num){
//     return Math.pow(num,2);
// }
// var sq = square(7);
// alert("Square is: "+sq);


// // task6

// function factorial(num){
//     if(num == 0){
//         return 1;
//     }
//     else{
//         return num * factorial(num - 1);
//     }
   
// }

// var res = factorial(5);
// alert("Factorial is: "+res);


// // task7

// function counting(start,end){
//     for(var i = start; i <= end; i++){
//         document.write(i+"<br>");
//     }
// }
// counting(1,20);


// // task8

// function hyp(bas,per){
//        var hyp = Math.pow(bas,2) + Math.pow(per,2);
//        alert("hypotenuse2: "+hyp);

//        function hypsqroot(hyp){
               
//            alert("hypotenuse: "+Math.sqrt(hyp))
//        }
//        hypsqroot(hyp)
// }

// hyp(10,5)


// //task9

// function Area(width = 10,height = 20){
//        alert("Area: "+width*height);
// }
// Area(5,4);



// // task10

// function palindrome(word){
//     var check = "";
//     for(var i = word.length - 1; i >= 0; i--){
//         check += word[i];
//     }
//     if(word == check){
//         alert("word is palindrome word");
//     }
//     else{
//         alert("not a palindrome word");
//     }
// }
// palindrome("madam");



// // task11
// function str(sentence){
//     var arr = sentence.split(" ");
//     for(var i = 0; i < arr.length; i++)
//     {
//         var word = arr[i];
//         var firstLet = word.slice(0,1);
//         var firstLetCap = firstLet.toUpperCase();
        
//         var rem = word.slice(1);
//         var sent = firstLetCap + rem;
//         document.write(sent+" ");
//     }
     
    
// }
// str("the quick brown fox");


// // task12

// function longStr(sent){

//     document.write(sent+"<br>");
//     var word = sent.split(" ");
//     for(var i = 0; i < word.length; i++){
//         if(word[0].length > word[i].length){
//             document.write(word[0]);
//             break;
//         }
//         else if(word[1].length > word[i].length){
//             document.write(word[1])
//             break;
//         }
//         else if(word[2].length > word[i].length){
//             document.write(word[2])
//             break;
//         }
//         else{
//             document.write("sorry")
//             break;
//         }
//     }

    

// }
// longStr("web Development Tutorial")


// // task13

// function occur(str,alpha){
//     document.write(str.split(alpha).length-1);
// }
// occur('JSResourceS.com','o')


// // task14

// function calcCircumference(radius){
//     alert("circumference: "+(2 * 3.142 * radius));

//     function calcArea(radius){
//         alert("The Area is: "+ (3.142 * Math.pow(radius,2)));

//     }
//     calcArea(radius);
// }
// calcCircumference(3);


/////////////////////////////////////////////////


