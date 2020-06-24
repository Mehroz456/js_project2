// chapter 21 - 25

// function first(){
//     var first_name = prompt("enter ur first name:");
//     var last_name = prompt("enter ur last name:");
//     document.write("<h1>Hello!" + " " + first_name + " " + last_name + "</h1>");
// }
// first()

// function second(){
//     var phone = prompt("enter ur favourite phone model:");
//     var blah = phone.length;
//     document.write("<h3>Your favourite phone is:" + " " + phone + "</h3>");
//     document.write("<p>Length of string:" + " " +  blah + "</p>");
// }
// second()

// function third(){
//     var country = "Pakistani";
//     document.write("<h2>string: " + country + "</h2>");
//     var c = country.indexOf('n')
//     document.write("<p>Index of 'n' : " + c + "</p>");
// }
// third()

// function forth() {
//     var p = "Pakistani";
//     document.write("<p>String: " + p + "</p>");
//     document.write("<br />Character at 3rd index is:" + p.charAt(3));
// }
// forth()

// function fifth(){
//     var first_name = prompt("enter ur first name:");
//     var last_name = prompt("enter ur last name:");
//     var bluu  = first_name.concat(last_name);
//     document.write("<h1>Hello! " + bluu + "</h1>");
// }
// fifth()

// function sixth(){
//     var city = "Hyderabad";
//     var city1 = city.replace(/Hyder/,"Islam");
//     document.write("<h4>City: " + city + "</h4>");
//     document.write("<h4>After replacement: " + city1 + "</h4>");
// }
// sixth()

// function seventh(){
//     var message = "“Ali and Sami are best friends. They play cricket and football together.”";
//     var m = message.replace(/and/g,"&");
//     document.write(m)
// }
// seventh()


// function eight(){
//     var val = '472';
//     var val1 = parseInt(val);
//     alert(typeof(val));
//     alert(typeof(val1))
// }
// eight()

// function ninth(){
//     var dry_f = prompt("enter ur favourite dry fruit: ");
//     var dry_f1 = dry_f.toUpperCase();
//     document.write("<p>String: " + dry_f + "</p>");
//     document.write("<p>Uppercase: " + dry_f1 + "</p>");
// }
// ninth()

// function tenth(){
//     var str = prompt("Enter any word: ");
//     console.log(
//         str.split(' ')
//             .map(a => a[0].toUpperCase() + a.substr(1).toLowerCase())
//             .join(' ')
//     )
// }
// tenth()

// function eleven() {
//     var num = 35.36;
//     var string1 = num.toFixed(2);
//     document.write("<p>number: " + num + "</p>");
//     document.write("<p>result: " + string1 + "</p>");
// }
// eleven()

// function twelve() {
//     var firstName = prompt("Enter first name");
//     if(firstName.includes("!")||firstName.includes(",")||firstName.includes(".")||firstName.includes("@")){
//         alert("Please enter a valid username");
//     }
// }
// twelve()

// function thirteen(){
//     var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
//     var name = prompt("Welcome to ABC bakery, what do you want to order?");
//     var c=name.toLowerCase();
//     for (var i = 0; i < A.length; i++) {
//         if (c == A[i]) {
//             alert(name + "is available");
//         }
//         else {
//             alert(name + "is not available");
//         }
//     }
// }
// thirteen()

// function forteen(){
//     var inputtxt=prompt("Enter Password");
//     var a=CheckPassword(inputtxt);
//     function CheckPassword(inputtxt) 
// { 
// var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
// if(inputtxt.value.match(decimal)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// }
// }
// forteen()

// function fifteen(){
//     var university="University of Karachi";
//     var s=university.split("");
//     for (i=0;i<s.length;i++){
//         document.write(s[i]);
//     }
// }
// fifteen()

// function sixteen(){
//     var str=prompt("Enter any string");
//     var last=str.charAt(str.length-1);
//     alert(last+" is last character of string");
// }
// sixteen()

// function seventeen(){
//     var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g) || []).length;
// alert(count);
// }
// seventeen()

// Chapter 26 - 30

// function f_irst() {
//     var num = prompt("Enter any positive number");
//     var num1 = parseInt(num);
//     var round = Math.round(num1);
//     var ceil = Math.ceil(num1);
//     var floor = Math.floor(num1);
//     document.write("<p>Number: " + num1 + "</p>");
//     document.write("<p>Round off: " + round + "</p>");
//     document.write("<p>Ceil: " + ceil + "</p>");
//     document.write("<p>Floor: " + floor + "</p>");
// }
// f_irst()

// function s_econd() {
//     var num = prompt("Enter any negative number");
//     var num1 = parseInt(num);
//     var round = Math.round(num1);
//     var ceil = Math.ceil(num1);
//     var floor = Math.floor(num1);
//     document.write("<p>Number: " + num1 + "</p>");
//     document.write("<p>Round off: " + round + "</p>");
//     document.write("<p>Ceil: " + ceil + "</p>");
//     document.write("<p>Floor: " + floor + "</p>");
// }
// s_econd()

// function t_hird() {
//     var num = ("Enter any number");
//     var num1 = parseInt(num);
//     var round = Math.abs(num1);
//     document.write("<p>Absolute Value: " + round + "</p>");
// }
// t_hird()

// function f_orth() {
//     var rand = Math.floor(Math.random() * 6) + 1;
//     document.write("<p>Random Dice Value: " + round + "</p>");
// }
// f_orth()

// function f_ifth() {
//     var rand = Math.floor(Math.random() * 2) + 1;
//     if (rand == 1) {
//         document.write("<p>Heads </p>");
//     }
//     else {
//         document.write("<p> Tails</p>");
//     }
// }
// f_ifth()

// function s_ixth() {
//     var rand = Math.floor(Math.random() * 100) + 1;
//     document.write("<p>Random Value between 1 and 100: " + rand + "</p>");
// }
// s_ixth()

// function e_ight() {
//     var num = 7, num1;
//     num1 = prompt("Guess the secret number");
//     if (num1 == num) {
//         alert("Bingo!Correct answer");
//     }
//     else if (num1 == (num - 1)) {
//         alert("Close enough to the correct answer");
//     }
// }
// 

// Chapter 31 - 34

// function one() {
//     var d = new Date();
//     document.write(d);
// }
// one()

// function two() {
//     var d = new Date();
//     var n = d.getMonth();
//     switch (n) {
//         case 0:
//             document.write("Current Month: January");
//             break;
//         case 1:
//             document.write("Current Month:Febuary");
//             break;
//         case 2:
//             document.write("Current Month:March");
//             break;
//         case 3:
//             document.write("Current Month:April");
//             break;
//         case 4:
//             document.write("Current Month:May");
//             break;
//         case 5:
//             document.write("Current Month:June");
//             break;
//         case 6:
//             document.write("Current Month:July");
//             break;
//         case 7:
//             document.write("Current Month:August");
//             break;
//         case 8:
//             document.write("Current Month:September");
//             break;
//         case 9:
//             document.write("Current Month:October");
//             break;
//         case 10:
//             document.write("Current Month:November");
//             break;
//         case 11:
//             document.write("Current Month:December");
//             break;
//     }
// }
// two()

// function three(){
//     var d = new Date();
//     var n = d.getDay();
//     switch (n) {
//         case 0:
//             document.write("Today is Mon");
//             break;
//         case 1:
//             document.write("Today is Tue");
//             break;
//         case 2:
//             document.write("Today is Wed");
//             break;
//         case 3:
//             document.write("Today is Thu");
//             break;
//         case 4:
//             document.write("Today is Fri");
//             break;
//         case 5:
//             document.write("Today is Sat");
//             break;
//         case 6:
//             document.write("Today is Sun");
//             break;
//     }
// }
// three()

// function four(){
// var d= new Date();
// var n=d.getDay();
// if(n==6||n==5){
// document.write("Today is funday");
// }
// }
// four()

// function five(){
// var n= new Date();
// var m= n.getDate();
// if (m<=15){
// document.write("First fifteen days of the month");
// }
// else{
// document.write("Last days of the month");
// }
// }
// five()

// function six(){
// var today = new Date();
// var c = new Date("1970-01-01");
// var diffMs = (c - today); // milliseconds
// var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
// alert(diffMs + " Milliseconds, " + diffMins + " Minutes");
// }
// six()

// function seven(){
//     var hours = new Date().getHours();
//     var hours = (hours+24-2)%24; 
//     var mid='am';
//     if(hours==0){ 
//     hours=12;
//     }
//     else if(hours>12)
//     {
//     hours=hours%12;
//     mid='pm';
//     }
//     alert ('Its ' +  mid);

// }
// seven()

// function eight(){
//     var d = new Date("2020-12-31");
//     document.write(d);
// }
// eight()

// function nine(){
//     var today = new Date();
// var c = new Date("2015-06-18");
// var diffDays = Math.floor(diffMs / 86400000); // days
// alert(diffDays + " days since 1st Ramdan 2015");
// }
// nine()

// function ten(){
// var dn= new Date();
// var df= new Date("2015-12-05");
//     var delta = Math.abs(df - dn) / 1000;

//     var seconds = delta % 60;  
//     alert(seconds+"have passed since"+df);

// }
// ten()
// function eleven(){
//     var n= new Date();
//     var h=n.getHours();
//     document.write("Date:"+n+"1 hour before:"+n.setHours(n.getHours()-1));
// }
// eleven()

// function twelve(){
//     var n= new Date();
//     var year = n.getFullYear();
//     var month = n.getMonth();
//     var day = n.getDate();
//     var c = new Date(year + 100, month, day);
// }
// twelve()

// function thirteen(){
//     var d=prompt("Enter your age");
//     var d1=parseInt(d);
//     var n= new Date();
//     var y=n.getFullYear();
//     var dob=y-d1;
//     document.write("Age:"+d+"Date of birth year:"+dob);
// }
// thirteen()

// function forteen(){
//     var customer=prompt("Enter your name");
//     var month=prompt("Enter current month");
//     var units1=prompt("Enter number of units");
//     var charges1=prompt("Enter charges per unit");
//     var late1=prompt("Enter late payment surcharge");
//     var units=parseInt(units1);
//     var charges=parseInt(charges1);
//     var late=parseInt(late1);
//     var net=units*charges;
//     var gross=net+late;
//     document.write("<h1>K-electric Bill</h1>");
//     document.write("Customer name:"+customer);
//     document.write("Current Month:"+month);
//     document.write("Number of units:"+units);
//     document.write("Charges per unit:"+charges);
//     document.write("<br>Net payable amount(within due date):"+net);
//     document.write("Late payment surcharge:"+late);
//     document.write("Gross Amount payable(after due date):"+gross);
// }
// forteen()

// chapter 35 - 38

// function one() {
//     var d = new Date();
//     document.write(d);
// }
// one()

// function two() {
//     var firstName = prompt("Enter first name");
//     var lastName = prompt("Enter last name");
//     var fullname = firstName + " " + lastName;
//     alert("Hello " + fullname);
// }
// two()

// function three(){
//     var n=prompt("Enter any num");
//     var n1=prompt("Enter other number");
//     var num=parseInt(n);
//     var num1=parseInt(n);
//     var result=add(num,num1);
//     function add(num,num1){
//         return num+num1;
//     }
//     alert("Sum is:"+result);
// }
// three()

// function four(){
//     var num = prompt("Enter first number");
//         var num1 = prompt("Enter second number");
//         var n1 = parseInt(num1);
//         var n = parseInt(num);
//         var operation = prompt("Enter operation");
//         var result=chapter911Eleven(n,n1,operation);
//     function chapter911Eleven(n,n1,operation) {
        
//         if (operation == "+") {
//             return(n + n1);
//         }
//         else if (operation == "-") {
//             return(n - n1);
//         }
//         else if (operation == "*") {
//             return(n * n1);
//         }
//         else if (operation == "/") {
//             return(n / n1);
//         }
//     }
//     alert("Result:"+result);
// }
// four()

// function five(){
//     var num=prompt("Enter any number");
//     var n=parseInt(num);
//     var result=square(n);
//     function square(n){
//         return (n*n);
//     }
//     alert("Square:"+result);
// }
// five()

// function six(){
//     var n=prompt("Enter any number");
//     var num=parseInt(n);
//     var result=fact(num);
//     function fact(num){
//         var rval=1;
//     for (var i = 2; i <= num; i++)
//         rval = rval * i;
//     return rval
//     }
//     alert("Factorial:"+result);
// }
// six()

// function seven(){
//     var n=prompt("Enter start number");
//     var num=parseInt(n);
//     var n1=prompt("Enter end number");
//     var num1=parseInt(n);
//     if (n<n1){
//     for(i=n;i<=n1;i++){
//         document.write("<br>"+i);
//     }}
//     else if (n>n1){
//         for(i=n;i<=n1;i--){
//             document.write("<br>"+i);
//         }
//     }

// }
// seven()

// function eight(){
//     var p=prompt("Enter perpendicular value");
//     var b=prompt("Enter base value");
//     var perpendicular=calculatesquare(p);
//     var base=calculatesquare(b);
//     var Hypotenuse=calculateHypotenuse(perpendicular,base);
//     function calculatesquare(n){
//         var p=n*n;
//         return n;
//     }
//     function calculateHypotenuse(perpendicular,base){
//         var Hypotenuse=perpendicular+base;
//         return Hypotenuse;
//     }
//     document.write("Hypotenuse:"+Hypotenuse);
// }
// eight()

// function ten(){
// var str=prompt("Enter any string");
// a=checkPalindrome(str);
//    function checkPalindrome(str) {
//   return str == str.split('').reverse().join('');
// }
// if (a==true){
//     alert(str+" is palindrome");
// }
// else{
//     alert(str+" is not palindrome");
// }
// }
// ten()

// function eleven(){
//     var str=prompt("Enter any string");
//     a=uppercase(str);
//     function uppercase(str){
//         return str.toUppercase(); 
//     }
// alert(a+" uppercase");
// }
// eleven()

// function twelve(){
//     var str1=prompt("Enter string");
//     var a =longestWord(str1);
//     function longestWord(str1) {

//         var str = str1.split(" ");
//         var longest = 0;
//         var word = null;
//         for (var i = 0; i < str.length ; i++) {
//             if (longest < str[i].length) {
//                 longest = str[i].length;
//                 word = str[i];
//             }
//         }
//         return word;
//     }
//     alert(a+"is longest word");
    
// }
// twelve()

// function thirteen(){
//     var str=prompt("Enter string");
//     var letter=prompt("Enter letter to count");
//     var a=char_count(str,letter);
//     function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// alert(a+" number of occurences");
// }
// thirteen()

// function fourteen(){
//     var radiu=prompt("Enter radius");
//     var radius=parseInt(radiu);
//     var area=calcArea(radius);
//     var circumference=calcCircumference(radius);
//     function calcCircumference(radius){
//         return (2*3.14*radius);
//     }
//     function calcArea(radius){
//         return (3.14*radius*radius);
//     }
//     alert("Area of circle:"+area);
//     alert("Circumference of circle:"+circumference);
// }
// fourteen()