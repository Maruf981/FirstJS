



// function returntwoarg(arr1, arr2){
//     return [arr1, arr2];
// }
// console.log(returntwoarg(1,2));





// function firstindex(arr){
//  return arr [0];
// }
// console.log(firstindex([80, 5, 100]));
// console.log(firstindex([500, 6, 220]));





// function splitevenodd(arr){
//     let result = {even: [], odd: []};
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             result.even.push(arr[i]);
//         }
//         else{
//             result.odd.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(splitevenodd([1, 2, 3, 4, 5, 6]));





// function twomax(arr){
//     let max1 = -Infinity, max2 = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max1) {
//             max2 = max1;
//             max1 = arr[i];
            
//            }
//            else if(arr[i] > max2 && arr[i] < max1) max2 = arr[i];
//     }
//     return  max1 + ", " + max2;
// }
// console.log(twomax([3, 1, 4, 1, 5, 9, 2]));




// function Object(arr){
//     let count = {};
//     for(let i = 0; i < arr.length; i++){
//         if(count[arr[i]]){
//             count[arr[i]]++;
//         }
//         else{
//             count[arr[i]] = 1;
//         }
//     }
//     return count;
// }
// console.log(Object(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));




// function polindrom(arr){
//     const rev = arr.toReversed();
//     return rev.join("") === arr.join("");
    
// }
// console.log(polindrom([1,2,3,4]));
// console.log(polindrom([1,2,2,1]));





// function sumevenindex(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){
//             count += arr[i];        
//         }
//     } 
//     return count;
// }
// console.log(sumevenindex([10, 20, 30, 40, 50]));



//  function array(arr, arr1){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr1){
//             res.push(arr[i]);
//         }
//     }
//     return res;
//  }
//  console.log(array([3, 5, 7, 3, 2, 3], 3).join(" "));
 


// function findmin(arr){ // JS
//     let min = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min) min = arr[i];
//     }
//     return min;
// }
// console.log(findmin([5, 2, 9, 1, 7]));



//  function average(array){
//     let count = 0;
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//         count++;
//     }
//     return Math.floor(sum / count);
//  }
//  console.log(average([2, 4, 6, 8]));
//  console.log(average([1, 4, 6, 9, 10]));
//  console.log(average([2, 4]));
 


// function array(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] === arr2){
//             return true;
//         }             
//     }
//     return false;
// }
// console.log(array([10, 20, 30, 40, 50], 30));
// console.log(array([1, 2, 3, 4, 5], 7));
// console.log(array([ 123,222,321], 321));



// function addeven(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(addeven([1, 2, 3, 4, 5, 6]));
// console.log(addeven([2, 4, 6, 8]));
// console.log(addeven([1, 3, 5, 7, 9]));




// function array(arr){
//     let max = -99999;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > max) max = arr[i]; 
//     }
//     return max;
// }
 
//  console.log(array([3, 8, 1, 6, 2]));
//  console.log(array([1, 2, 5, 7, 9]));
//  console.log(array([1, 2, 3, 4, 5]));
 
  


// function Array(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(Array([2,4,6, 8]));
// console.log(Array([1,2,3,4,5]));
// console.log(Array([]));

 


//_________________________________________________________________Array

// task 15
//    function rev(str){
//     let reverse = str.toString().split("").reverse().join("");
//     return reverse.concat(str);
//    }
//    console.log(rev(123));
//    console.log(rev(152));
//    console.log(rev(123456789));
   




// task 14
// function capital(str){
//     let sum1 = "";
//     let sum2 = "";
//      for(let i = 0; i < str.length; i++){
//     if(str[i] >= 'A' && str[i] <= 'Z'){
//         sum1 += str[i];
//     }
//     if(str[i] >= 'a' && str[i] <= 'z'){
//         sum2 += str[i];
//     }
// }
// return sum1.concat(sum2);
// }
// console.log(capital("hApPy"));
// console.log(capital("moveMENT"));
// console.log(capital("shOrtCAKE"));




// task 13
// function foundchar(str1, str2){
//     let count = 0;
//     for(let i = 0; i < str2.length; i++){
//         if(str1 === str2[i]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(foundchar("a", "edabit"));
// console.log(foundchar("c", "Chamber of secrets"));
// console.log(foundchar("b", "big fat bubble"));




// task 12
// function polindrom(str){
//     let res = str.split("").reverse().join("");
//     if(res === str){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(polindrom("mom"));
// console.log(polindrom("scary"));
// console.log(polindrom("reviver"));




// task 11
// function joinDigit(n) {
//     let result = '';
//     for (let i = 1; i <= n; i++) {
//         result += i.toString().split('').join('-');  
//         if (i < n) result += '-'; 
//     }
//     return result;
// }

// console.log(joinDigit(4));   
// console.log(joinDigit(11));  
// console.log(joinDigit(15)); 




// task 10
// function vowel(str) {
//     return str.replace(/([aeiouyAEIOUY])/g, '-$1-');
// }

// console.log(vowel('Edabit')); // "-E-d-a-b-i-t-"
// console.log(vowel('Carpe Diem')); // "C-a-r-p-e- D-i-e-m"
// console.log(vowel('Fight for your right to party!')); // "F-i-g-h-t f-o-r -y-o-u-r r-i-g-h-t t-o- p-a-r-t-y-!"


// task 10
// function vowel(str){
//     let res = "";
//     let vowels = 'aeiouyAEIOUY';
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             res += '-' + str[i] + '-';
//         }
//         else{
//          res += str[i];
//         }
//     }
//     return res;
// }
// console.log(vowel('Edabit'));
// console.log(vowel('Carpe Diem'));
// console.log(vowel('Fight for your right to party!'));




// task 9
// function reverseif5(str){
//     let sum = str.split(" ");
//     for(let i = 0; i < sum.length; i++){
//         if(sum[i].length >= 5){
//            sum[i] = sum[i].split("").reverse().join("");
//         }
//     }
//     return sum.join(" ");
// }
// console.log(reverseif5('Reverse'));
// console.log(reverseif5('This is a lacipyt sentence'));
// console.log(reverseif5('The dog is big'));




// task 8
// function Nemo(str){
//     let res = str.split(" ");
//     let count = res.indexOf('Nemo') + 1;
//     if(count === 0){
//         return "Nemo not found"
//     }    
//     return `I found Nemo at ${count}`;
// }
// console.log(Nemo("I am finding Nemo !"));
// console.log(Nemo("Nemo is me"));
// console.log(Nemo("I am Nemo"));





// task 7
// function identical(str){
//     let count = 0;
//     for(let i = 0; i < str.length-1; i++){
//         if(str[i] === str[i+1]){
//             count++;
//         }
//     }
//     return count >= 1;
// }
// console.log(identical("loop"));
// console.log(identical("yummy”"));
// console.log(identical("orange"));





// task 6
// function Middle(str){
//     let judo = str.length;
//     let res = Math.floor(judo / 2);
//     if(judo % 2 === 0){
//         return str[res - 1] + str[res]
//     }
//     else{
//         return str[res];
//     }
// }
// console.log(Middle('test'));
// console.log(Middle('testing'));
// console.log(Middle('A'));




// task 5;
// const greeting = (str) => {
//     let result = "Hello";
//     return result.concat(str);
// } 
// console.log(greeting(" Gerald"));
// console.log(greeting(" Said"));
// console.log(greeting(" Exem"));




// task 4
// function spaces(str){
//     for(let i = 0; i < str.length; i++){
//       if(str[i] === " "){
//         return true;
//     }
//     }
//         return false;
// }
// console.log(spaces("hello, word”"));




//task 3
// function changename(str1, str2){
//     return str1.includes(str2);
//  }
// console.log(changename("abc", "bc"));




//task 2
// function countslog(str){
//     let count = 0;
//     let sum = str.split("-");
//     count = sum.length;
//     return count;
// }
// console.log(countslog('but-fet'));
// console.log(countslog('beau-ti-ful'));
// console.log(countslog('on-o-mat-o-poe-ai'));

//task 2
// function countslog(str){
//     let count = 0;
//     let sum = str.split("");
//     for(let i = 0; i < sum.length; i++){
//         if(sum[i] === '-'){
//             count++;         
//         }
//     }
//     return count + 1;
// }
// console.log(countslog('but-fet'));
// console.log(countslog('beau-ti-ful'));
// console.log(countslog('on-o-mat-o-poe-ai'));




// task 1.
// function changetonum(str){
//     let numbers = str.split(",").join("");
//     let sumofnum = Number(numbers);
//     let sum = 1;
//     for(let i = sumofnum; i > 0; i = Math.floor(i / 10)){
//         sum *= i % 10;
//     }
//     return sum;
// }
// console.log(changetonum("2,3"));
// console.log(changetonum('1,2,3,4'));
// console.log(changetonum("54,75,453,0"));



//___________________________________________________________


// function capital(str){
//     let count = "";
//     let sum = "";
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             count += str[i];
//         }
//         else if(str[i] >= 'a' && str[i] <= 'z'){
//             sum += str[i];
//         }
//     }
//     return count.concat(sum);
// }
// console.log(capital('hgTkjPJdf'));





// function rev(num){
//     let res = num.toString().split("").reverse().join("");
//     return res.concat(num);  
// }
// console.log(rev(123));




// function checkchar(str1, str2) {
//     let count = 0;
//     for (let char of str2) { 
//         if (char === str1) { 
//             count++; 
//         }
//     }
//     return count; 
// }
// console.log(checkchar("a", "edabit")); 
// console.log(checkchar("c","Chamber secrets")); 




// function strpolindrom(str1){
//     let reversed = str1.split("").reverse().join("");
//     if (str1 === reversed){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(strpolindrom("moh"));




//  function checktwolast(str1, str2){
// return str1.includes(str2)
//  }
//  console.log(checktwolast("sine","nine"));
 
//-------------------------------------------------


// function Reversestr(str){
//     let result = str.split("").reverse().join("");
//     return result.toUpperCase();
// }
// console.log(Reversestr("abc"));
// console.log(Reversestr("hellothere"));



// function isPlural(str){
//     let check = str.at(-1);
//     if(check === 's'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPlural('change'));





// function toint(num){
//     let first = Number(num);
//         return first;    
// }
// function tostr(str){
//     let second = str.toString()
//     return second;
// }
// console.log(toint("1234"));
// console.log(tostr(1234));





// function startend(str){
//     let start = str.at(0);
//     let end = str.at(-1);
//     return start + end;
// }
// console.log(startend("ganesh"));
// console.log(startend("dollar"));
// console.log(startend("softclub"));





//  function Lastelement(str,num){
//     let last = str.at(-1);
//     let count = "";
//     for(let i = 1; i < num; i++){
//         count += last; // в last сохранен 'o' при каждой итерации 'o' прибавляется к count;
//     }
//     return str + count; // str у нас hello, у count-а внутри два "o". Значит Hello + oo = Hellooo.
//  }
//  console.log(Lastelement("Hello", 3));
//  console.log(Lastelement("Hey", 6));
//  console.log(Lastelement("Excuse me what?", 5));
 
//----------------------------------------------------------------String


// function ismultiply(num1){

//     return (num2) => {
//     return Math.max(num1, num2) % Math.min(num1, num2) == 0;
//     };
// }
// let checkmultiply = ismultiply(3)
// console.log(checkmultiply(9))
// console.log(checkmultiply(11))




// function isArmstrong(num, originalNum = num, sum = 0){
//     if(num == 0) return originalNum == sum;
//     return isArmstrong(Math.floor(num / 10), originalNum, sum + Math.pow(num % 10, 3))
// };
//      console.log(isArmstrong(153));




// function ismultiply(num1){
//     return (num2) => {
//         return num2 % num1 === 0;
// }
// }
// let add = ismultiply(3);
// console.log(add(9));
// console.log(add(10));
 



// function division(a, b) {
//     if (a < b) return false;  
//     if (a % b === 0) return true;  
//     return division(a - b, b);  
// }

// console.log(division(10, 5)); 
// console.log(division(15, 4));    
// console.log(division(12, 3)); 
 

// function generator(num) {
//     let cnt = num;  
//     return () => {
//         console.log(cnt);  
//         cnt += num;  
//     };
// }

// let add = generator(2);
// add();  
// add();  
  
 

// function sumFibonacci(n, a = 1, b = 1, sum = 1) {
//     if (n === 1) return sum;   
//     return sumFibonacci(n - 1, b, a + b, sum + b);   
// }
// console.log(sumFibonacci(6));  
// console.log(sumFibonacci(5));  
// console.log(sumFibonacci(3));  


// function average(){
//     let count = 0;
//     let sum = 0;
//     return (num) => {
//          sum += num;
//          count++;
//         return sum / count; 
//     };
// }
// let result = average();
// console.log(result(10));
// console.log(result(15));




// function Numbers(){
//     let count = 0;
//     return (num) => {
//         return count += num;
//     };
// }
// let addnums = Numbers();
// console.log(addnums(3));
// console.log(addnums(5));
 



// function Binary(num){
//     if(num === 0) return 0;
//     return (num % 10) + 2 * Binary(Math.floor(num / 10));
    
// }
// console.log(Binary(1101));
// console.log(Binary(101));
// console.log(Binary(1111));




// function findmax(num1){
//     return (num2) => {
//      return num1 > num2 ? num1: num2;
//     };
// }
// let sum = findmax(10);
// console.log(sum(10));
// console.log(sum(5));



// function Plus(num){
//     if(num <= 1) return 1;
//     if(num % 2 != 0){
//     return num + Plus(num - 1);
// }
//     else {
//     return Plus(num - 1);
//     }
// }   
// console.log(Plus(5));
// console.log(Plus(8));
// console.log(Plus(1));
// ---------------------------------------------------------


// function Suf(suffix){  // suffix = "ly"; иваз намешавад.
//     return function(word){ // word = total, hopeless, even, sure; при каждом вызове измениться
//         return word + suffix; // например word = total + suffix = ly === totally;
//     };
// }
// const add = Suf('ly')
// console.log(add('total'));
// console.log(add('hopeless'));
// console.log(add('even'));
// console.log(add('sure'));

 



// function pow(a,b){
//     if(b === 0) return 1;
//     return a * pow(a, b - 1);
// }
// console.log(pow(2,2));
// console.log(pow(2,3));
// console.log(pow(2,4));




// function twofactorial(n) {
//     if (n < 0) {
//         return undefined; 
//     }
//     if (n === 0 || n === 1) {
//         return 1; 
//     }
//     return n * twofactorial(n - 2);
// }
// console.log(twofactorial(9));


//  function addclosure(num){
//     return function(add){
//         return num + add;
//     };
//  }
//  let res = addclosure(5);
//  console.log(res(10));
//  console.log(res(10));
 



// function evenodd(num){
//     if(num < 0) num = -num;

//     if(num === 0) return true;
//     if(num === 1) return false;
//     return evenodd(num - 2);
      
// }
// console.log(evenodd(124));
// console.log(evenodd(-41));
// console.log(evenodd(16));



// function division(a,b, min = Math.min(a,b)){
     
//     if(a % min === 0 && b % min === 0) return min;
//     return  division(a,b, min - 1);
// }
// console.log(division(32,8));
// console.log(division(8,12));
// console.log(division(17,13));



// function increas(num, i = 1) {
  
//     if (i > 10) return 0;  
//     return num * i + increas(num, i + 1);  
// }
// console.log(increas(1));   
// console.log(increas(6));  
// console.log(increas(10));  
 



// function multiply(num){
//     let count = 0;
//     if(num === 0) return 0;
//     return count += num % 10 + multiply(Math.floor(num / 10));
// }
// console.log(multiply(111));
// console.log(multiply(222));
// console.log(multiply(333));

//---------------------------------------------------- 

// function isPalindrome(num, reversed = 0, original = num) {
//     if (num === 0) return original === reversed;  
//     return isPalindrome(Math.floor(num / 10), reversed * 10 + (num % 10), original);  
// }
// console.log(isPalindrome(12321));  
// console.log(isPalindrome(12345));  



// function MultTable(num, i = 1) {
//     if (i > 10) return 0;  
//     console.log(`${num} * ${i} = ${num * i}`);  
//     return MultTable(num, i + 1);  
// }
// MultTable(5);



// function fibonacci(n) {
//     if (n === 0) return 0;  
//     if (n === 1) return 1;  
//     if (n === 3) return 1;  
//     return fibonacci(n - 1) + fibonacci(n - 2);  
//  }
//  console.log(fibonacci(3));



// function Rev(num){
//     if(num === 0) return "";
//     return num % 10 + Rev(Math.floor(num / 10));
// }
// console.log(Rev(12345));



// function Closurplus(num){
//     return function(plus){
//         return num + plus;
//     };
// }
// let result = Closurplus(5);
// console.log(result(3));
 
 



// function Multipl(num){
//     if(num === 0) return 0;
//     return num + Multipl(num - 1);
// }
// console.log(Multipl(10));
// console.log(Multipl(7));
// console.log(Multipl(5));




// function Plus(num){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// let counter = Plus(1);
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function Pow(a,b){
//     if(b == 0) return 1;
//     return a * Pow(a, b - 1)
// }
// console.log(Pow(2,3));



// function factorialr(num){
//     if (num == 0) return 1;
//     return num * factorialr(num-1);
// }
// console.log(factorialr(5));


//--------------------------------------------------------------------------- Recurcion && Closure

// const sum = (a,b,c) => (a * b) + 5;
// console.log(sum(5,5,2));



// function calculator(a, c, b){
//     if(c === '+'){
//         return a + b;
//     }
//     if(c === '-'){
//         return a - b;
//     }
//     if(c === '*'){
//         return a * b;
//     }
//     if(c === '/'){
//         return Math.floor(a / b);
//     }
//     if(c === '%'){
//         return a % b;
//     }
//     return "Invalid operator";
// }
// console.log(calculator(12, '%', 5));





// tast4
// function Vsechisla(a, b){
//     let cnt = "";
//     for(let i = a; i <= b; i++){
//         cnt += i;
//         if(i < b){
//             cnt += ", ";
//         }
//     }
//     return cnt;
// }
// console.log(Vsechisla(4,5));






// function removedigit(num, dig){
//     return Number(('' + num).split(dig).join(''));
// }
// console.log(removedigit(1121212, 1));

 



// function twofactorial(n) {
//     if (n < 0) {
//         return undefined; 
//     }
//     if (n === 0 || n === 1) {
//         return 1; 
//     }
//     return n * twofactorial(n - 2);
// }
// console.log(twofactorial(9));




    // function fibonacci(n) {
    //     if (n === 0) return 0;  
    //     if (n === 1) return 1;  
    //     if (n === 3) return 1;  
    //     return fibonacci(n - 1) + fibonacci(n - 2);  
    //  }
    //  console.log(fibonacci(3));
     


// function add(num){
//     let sum = 0;
//     let cnt = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum += i % 10; 
//         cnt++;       
//     }
//     return Math.floor(sum / cnt);
// }
// console.log(add(50));



// function add(num){
//     let maxx = -99999;
//     sum = 0;
//     if(num === 0) return 'All digits are equal';
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum = sum * 10 + i % 10;
//         if(i % 10 > maxx) maxx = i % 10;
//     }
    
//     return "The largest digit in " + num + " is " + maxx;
// }
// console.log(add(87561));



// function add(a,b,c){
//     if(a === b && a === c){
//         return 3;
//     }
//     else if((a === b && a !== c) || (a === c && b !== a)) {
//         return 2;
//     }
//     else{
//         return 0;
//     }
// }
// console.log(add(3,4,3));

 
// function add(num){
//     let sum = num - 1;
//      if(num >= 1){
//         return  num*6-sum;
//      }
//   }
//   console.log(add(2));
 



// function add(num){
//     let sum = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum = sum * 10 + i % 10;
//     } 
//     if(num >= 1 && num <= 9){
//         return "It’s one digit";
//       }
//     return sum + '';
// }
// console.log(add(1378));





// function isPalindromePrime(num) {
//      let rev = 0;
//      let sum = num;
//      for(; num > 0; num = Math.floor(num / 10)){
//         rev = rev * 10 + num % 10;
//      }
//      if(rev !== sum) return false;

//      if(sum < 2) return false;
//      for(let i = 2; i < sum; i++){
//         if(sum % i === 0) return false; 
//      }
//      return true;
// }
// console.log(isPalindromePrime(101));    



// function polindromprime(num){
//     let sum = num;
//     let cnt = "";
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         cnt = cnt * 10 + i % 10;
//     }
//     if(sum === cnt){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(polindromprime(1001));



// function notusefor(num){
//     let i = 1;
//     let sum = 0;
//     while(i <= num){
//         sum += i;
//         if(i < num){
//             sum += ', ';
//         }
//         i++;
//     }
//     return sum;
// }
// console.log(notusefor(5));




// function factorial(num){
//     let sum = 1;
//     for(let i = 1; i <= num; i++){
//         sum *= i;
//     }
//     let itog = sum.toString().split("").join("");
//     return parseInt(itog);
// }
// console.log(factorial(5));



// function sortnum(num){
//     let sortt = num.toString().split("").sort((a,b) => a - b);
    
//     return sortt.join("");
// }
// console.log(sortnum(453821901));




// function diapazonPrime(num1, num2){
//     let sum = 0;
// for(let i = num1; i <= num2; i++){
//     let isPrime = true;
// for(let j = 2; j < i; j++)
//     if(i % j === 0){
//         isPrime = false;
//         break;
//     }
//     if(isPrime && i > 1){
//         sum += i;
//     }
// }
// return sum;
// }
// console.log(diapazonPrime(10,50));
 




// function unique(num){
//     let xat = num.toString();
//     for(let i = 0; i < xat.length; i++){
//         for(let j = i + 1; j < xat.length; j++){
//             if(xat[i] === xat[j]){
//                 return false;
//             }
//         }
//     }  
//     return true;
// }
// console.log(unique(1234));
 

// function Add(num){
//     let sum = 0;
//     for(let i = 1; i <= num / 2; i++){
//         if(num % i === 0){
//             sum += i;
//         }
//     }
//     if(sum === num){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(Add(28));

// function NOK(a,b){ // Наименьшее общее кратное.
//    let max = Math.max(a,b);
//    for(let i = max; ; i++){
//     if(i % a === 0 && i % b === 0){
//         return i;
//     }
//    }
// }
// console.log(NOK(4,6));




// function add(num){
//     if(num > 0){
//      return num - 2;
//     }
//     else if(num < 0){
//         return num + 1;
//     }
//     else{
//         return 10;
//     }
// }
// console.log(add(-5));





// function oddeven(num){
//     let next, prev;
//     if(num % 2 === 0){
//         next = num + 2;
//         prev = num - 2;
//     }
//     else{
//         next = num + 1;
//         prev = num - 1;
//     }
//     return "next:" + next + "," + "prev:" + prev;  
// }
// console.log(oddeven(3));





// function Add(a, b, c){
//     if((a < b && b < c) || (a > b && b > c)){
//         a = a*2;
//         b = b*2;
//         c = c*2;
//     }
//     else{
//        a = -a;
//        b = -b;
//        c = -c;
//     }
//     return `${a} ${b} ${c}`;
// }
// console.log(Add(2,-2,9));




// function pirozhok(a, b, c, d){
//     let sum1 = a * 100 + b;
//     let sum2 = c * 100 + d;
//     let res = Math.floor(sum2 / sum1);
//     return res;
// }
// console.log(pirozhok(1,70,3,80));





// const calculateFuel = (distance) => {
//      if(distance >= 10) {
//         return (distance * 10);
//      }
//      else{
//         return(100);
//      }
// }

// console.log(calculateFuel(15));  
 



// function polindrome(num){
//     let eq = num;
//     let sum = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum = sum * 10 + i % 10;        
//     }
//     if(eq === sum){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(polindrome(443));

 




// function zarb(num) {
//     let sum = 0;
//     let results = [];  

//     for (let i = 1; i <= 10; i++) {
//         let Result = num * i + 1;
//         sum += Result;
//         results.push(Result);
//     }
//     console.log(results.join(',')); 
//     return sum;
// }
// zarb(7);





// function multiplay(num){
//     let sum = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum += i % 10;
//     }
//     return sum;
// }
// console.log(multiplay(12345));




// function increas(num){
//     let num1 = Math.floor(num / 1000);
//     let num2 = Math.floor(num / 100 % 10);
//     let num3 = Math.floor(num / 10 % 10);
//     let num4 = Math.floor(num % 10);
//     if(num1 < num2 && num2 < num3 && num3 < num4) return true;
    
//     else{
//         return false;
//     }
// }
//  console.log(increas(2467));
 


// function Divisnum(a,b){
//     let min;
//     if(a < b){
//         min = a;
//     }else{
//         min = b;
//     }
//     for(let i = min; i > 0; i--){
//         if(a % i === 0 && b % i === 0){
//             return i;
//         }
//     }
//     return 1;
// }
// console.log(Divisnum(3,5));




//  function Finddif(a,b){
//     if(a > b){
//         [a, b] = [b, a];
//     }
//     return Math.log(b) / Math.log(a);
//  }
//  console.log(Finddif(4, 1024));
 


// function Squarenum(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum += i ** 2;
//     }
//     return sum;
// }
// console.log(Squarenum(2));
 

// function addprime(a,b){
//     for(let i = a; i <= b; i++){
//         let isPrime = true;
//         for(let j = 2; j <= Math.sqrt(i); j++){
//             if(i % j === 0){
//                 isPrime = false;
//             }
//         }
//         if(isPrime && i > 1){
//             return true;
//             break;
//         }
//     }
//     return false;
// }
// console.log(addprime(10,15));


// function swapsnums(num){
//     let sum = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         sum = sum * 10 + i % 10;
//     }
//         if(num > sum){
//             return "true";
//         }
//         else{
//             return "false";
//         }
// }
// console.log(swapsnums(27));

  

// function Pokazatel(a, b){
//     let sum = 1;
//     for(let i = 1; i <= a; i++){
//         sum *= b;        
//     }
//     return sum;
// }
// console.log(Pokazatel(5,5));


// function fibonacci(n) {
//     if (n === 0) return 0;  
//     if (n === 1) return 1;  
//     return fibonacci(n - 1) + fibonacci(n - 2);  
//  }
//  console.log(fibonacci(8));
 

// function isPrimesumtwoNum(a, b){
//     const sum = a + b;
//     if(sum < 2) return false;
//     for (let i = 2; i <= Math.sqrt(sum); i++){
//        if(sum % i === 0) return false;
//     }
//     return true;
//  }
//  console.log(isPrimesumtwoNum(20,20));
 


// function addnums(a, b){
//     if(a === 10 || b === 10 || a+b === 10 ){
//        return "true";
//     }
//     else{
//        return "false";
//     }
//  }
//  console.log(addnums(9, 10))




// function Factorial(num) {
     
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     let reversedFactorial = parseInt(factorial.toString().split('').reverse().join(''));

//     return reversedFactorial;
// }
// console.log(Factorial(4));  
// console.log(Factorial(5));  
// console.log(Factorial(6));  

 


// function sortDescending(num) {
//     return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
// }

// console.log(sortDescending(1254859723));  
// console.log(sortDescending(123));  
// console.log(sortDescending(73065));  
 
 
 




// function diapazonPrime(num1, num2){
//     let sum = 0;
// for(let i = num1; i <= num2; i++){
//     let isPrime = true;
// for(let j = 2; j < i; j++)
//     if(i % j === 0){
//         isPrime = false;
//         break;
//     }
//     if(isPrime && i > 1){
//         sum += i;
//     }
// }
// return sum;
// }
// console.log(diapazonPrime(10,50));





// function unique(num){
//     let xat = num.toString()
//     for(let i = 0; i < xat.length; i++){
//        for(let j = i + 1; j < xat.length; j++){
//         if(xat[i] === xat[j]){
//             return "false";
//         }
//        }
//     }
//     return "true";
// }
// console.log(unique(1233));

 


// function ifdeliteliequalnum(num){
//     let cnt = 0; 
// for(let i = 1; i <= num / 2; i++){
//     if(num % i === 0){
//         cnt += i;
//     }
// }
//     if(cnt === num){
//         return "true";
//     }
//     else{
//         return "false";
//     }
// }
// console.log(ifdeliteliequalnum(28));


// function NOK(a,b){
//     let max = Math.max(a,b);
//     for(let i = max; ; i++){
//         if(i % a === 0 && i % b === 0){
//             return i;
//         }
//     }
// }
//   console.log(NOK(4,6));
//   console.log(NOK(3,8));
//   console.log(NOK(2,6));





// function checknum(num){
//     if(num > 0){
//         return num - 2;
//     }
//     else if(num < 0){
//         return num + 1;
//     }
//     else{
//         return 10;
//     }
// }
// console.log(checknum(5));
// console.log(checknum(-5));
// console.log(checknum(0));


// function prevnext(num){
//         let pre, next;
//     if(num % 2 === 0){
//          pre = num - 2;
//          next = num + 2;
//     }
//     else{
//          pre = num - 1;
//          next = num + 1;
//     }
//     return pre + " " + next;
// }
// console.log(prevnext(4));
// console.log(prevnext(5));


// function Zarb(a, b, c){
//     if((a < b && b < c) || (a > b && b > c)){
//         a *= 2; b *= 2; c *= 2;
//     }
//     else{
//         a =-a; b =-b; c =-c;
//     }
//     return a + " " + b + " " + c;
// }
// console.log(Zarb(3, -2, 8))+ " ";
 

// function Petya(s,d,som, dir){
//     let som1 = s * 100 + d;
//     let som2 = som * 100 + dir;
//     let res = Math.floor(som2 / som1);
//     return res;
// }
// console.log(Petya(1,70,3,80));
// console.log(Petya(2,10,6,90));
// console.log(Petya(1,30,5,20));
//--------------------------------------------------------------------------------------




// function Square(num){
//      if(num % 2 == 0){
//         return 3;
//      }
//      else{
//         return 4;
//      }
// }
// console.log(Square(16));


// function plusnums(num1, num2){
//     if(num1 + num2 < 100){
//         return "true";
//     }
//     else{
//         return "false";
//     }
// }
// console.log(plusnums(43, 55));




// function udvoitdvazdi(num){
//     return Number(String(num).split('').map(digit => digit * 2).join(''));
// }
// console.log(udvoitdvazdi(7132));




// function udvoitdvazdi(num) {
//     let result = "";  
//     let digits = String(num).split("");  

//     for (let digit of digits) {
//         let udvoit = Number(digit) * 2;  
//         result += String(udvoit);  
//     }
//     return Number(result); 
// }
// console.log(udvoitdvazdi(7132));




// function Addnum(num){
//     if(num % 2 == 0){
//         return num + 1;
//     }
//     else{
//         return num - 2;
//     }
// }
// console.log(Addnum(8));


// function plusnum(num){
//     let count = 0;
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//         count += i % 10;
//     }
//     return count;
// }
// console.log(plusnum(123));


 
// function circle(num){
//     let pi = 3.16;
//     let result =  "The area of a circle with radius " + num + " is " + pi * num * num;
//     return result;
// }
// console.log(circle(5));


// function sortt(num){
//     let res = parseInt(num.toString().split('').sort((a,b) => a - b).join(''));
//     return res;
// }
// console.log(sortt(5483));


// function sortnums(num) {
//     let sum = 0;

//     for (let i = 0; i <= 9; i++) { 
//         for (let j = num; j > 0; j = Math.floor(j / 10)) {
//             if (j % 10 === i) {
//                 sum = sum * 10 + i;  
//             }
//         }
//     }

//     return sum;
// }

// console.log(sortnums(5483)); 



// function factorial(num){
//     let count = 1;
//     for(let i = 1; i <= num; i++){
//         count *= i;
//     }
//     return count;
// }
// console.log(factorial(5));


// function Prime(num){
    
//     if(num < 2) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0){
//         return false;
//         }
//     }    
//     return true;
// }
// console.log(Prime(7));


// function Prime(num){
//     let count = 0;
//     if(num <= 1){
//         return "false";
//     }
//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//             count++;
//         }
//     }
//         if(count === 2){
//             return "true";
//         }
//         else{
//             return "false";
//         }
// }
// console.log(Prime(7));



// function lastdigit(num) {
//     return num === 0 ? 0 : 1 + (num - 1) % 9;
//     // if до ? 0 return : else
// }
// console.log(lastdigit(38));





// function lastdigit(num) {
//     let sum = 0;
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         sum += i % 10;
//     }

//     let cnt = sum;
//     for (let i = cnt; i >= 10; i = Math.floor(i / 10)) {
//         cnt = i % 10 + Math.floor(i / 10);
//     }

//     return cnt;
// }

// console.log(lastdigit(38));


// function polindrom(num){
//     let equal = num;
//     let sum = "";
//     for(let i = num; i > 0; i = Math.floor(i / 10)){
//          sum = sum * 10 + (i % 10);
//         }
//          if(sum == equal){
//             return "true"
//          }
//          else{
//             return "false";
//          }
// }
// console.log(polindrom(7221));


// function multinum(num){
//     let sum = 1;
//     for(let i = num; i > 0; i = Math.floor(i / 10))
//     {
//         sum *= i % 10;
//     }
//     return sum;
// }
// console.log(multinum(713));


// function plusnum(num){
//     let cnt = 0;
//     for(let i = 1; i <= num; i++){
//         cnt = cnt += i;
//     }
//     return cnt;
// }
// console.log(plusnum(5));


// task8
// function largenum(num){
//     let maxx = -99999, minn = 99999;
//     let count = "";
//     for(let i = num; i > 0; i = Math.floor(i / 10)){

//         if(i % 10 > maxx) maxx = i % 10;
//     }
//     for(let i = num; i > 0; i = Math.floor(i / 10)){

//         if(i % 10 < minn) minn = i % 10;
//     }
//     return "min:" + minn + " , " + "max:" + maxx;
// }
// console.log(largenum(1745));

// function largenum(num){
//     let maxx = -99999;
//     let count = "";
//     for(let i = num; i > 0; i = Math.floor(i / 10)){

//         if(i % 10 > maxx) maxx = i % 10;
//     }
//     return maxx;
// }
// console.log(largenum(1745));

//task 6
// function evennum(num1, num2) {
//     let sum = " ";  
//     if (num1 % 2 === 0 || num2 % 2 === 0) {
//         return "0";
//     }
//     for (let i = num1; i < num2; i++) {  
//         if (i % 2 === 0) { 
//             sum += i + " ";
//         }
//     }
//     return sum; 
// }
// console.log(evennum(-5, 13));


// function Difnum(num1, num2, num3){
//     if(num1 === num2){
//         return "3";
//     }
//     else if(num1 === num3){
//         return "2";
//     }
//     else{
//         return "1";
//     }
// }
// console.log(Difnum(5,5,10));



// function larger(num){
//     let num1 = Math.floor(num / 10);
//     let num2 = num % 10;
//     let res = + (num2 + "" + num1);
//     if(num >= res){
//         return "true";
//     }
//     else{
//         return "false";
//     }
// }
// console.log(larger(41));


// function thesame(num){
//     let num1 = Math.floor(num / 100);
//     let num2 = Math.floor(num / 10);
//     let num3 = num % 10;
//     if(num1 == num2 || num1 == num3 || num2 == num3){
//         return "True";
//     }
//     return "False";   
// }
// console.log(thesame(123));


// function long(h, min, sec){
//     let hour = h * 3600;
//     let minute = min * 60;
//     if(hour >= minute && hour >= sec){
//         return h;
//     }
//     else if(minute >= hour && minute >= sec){
//         return min;
//     }
//     else{
//         return sec;
//     }
// }
// console.log(long(1, 121, 3598));



// function zarb(num){
//     let count = "";
//     for(let i = 1; i <= 10; i++)
//     {
//         if(i !== 10){
//             count += num * i + ",";
//         }
//         else{
//             count += num * i;
//         }
//     }
//     return count;
// }
// console.log(zarb(5));


// function Plus(num){
//     let cnt = 0;
//     for(let i = 1; i <= num; i++)
//     {
//         cnt += i;
//     }
//     return cnt;    
// }
// console.log(Plus(4));

 


/*function century(num){
    let res = parseInt(num / 100); // perseInt удаляет дробную часть. например 17.05 мы получим 17
    if(num % 100 !== 0)
    {
        res += 1;
    }
    return res;
}
console.log(century(1601));
console.log(century(1900));
console.log(century(2000));*/


//-----------------------------------------------------------------------------------------------
/*
function deternum(num){
    if(num % 10 === 9){
        return "True";
    }
    else{
        return "False";
    }
}
console.log(deternum(129));
console.log(deternum(536473));
console.log(deternum(1458731569));
console.log(deternum(9)); */

//---------------------------------------------------------------------------------------------
 
// function multiTable(num) {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         result += num + " * " + i + " = " + (num * i) + "\n";
//     }
//     return result;
// }
// console.log(multiTable(5));  
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------
/*
function checknum(num){
    if(num > 0){
        return "Positive";
    }
    else if (num < 0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
console.log(checknum(0));
console.log(checknum(-5));
console.log(checknum(1)); */
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------

/*
function CalculTwonum(num1, num2){
    let resultoffunc = (num1 + num2);
    return resultoffunc;
}
console.log(CalculTwonum(5, 11));
console.log(CalculTwonum(2, 19));
console.log(CalculTwonum(1, 10)); */
//---------------------------------------------------------------------------------------------


/*function word(str){
    let xat = ('Hello World')
    return xat;
}
console.log(word('n'));*/


/*function myF(a, b){
   let sum = 5 + 9;
   return sum;
}
let res = myF(1, 2);
console.log(res);*/

/*let age = 18;
if(age >= 18){
    console.log(true);
}else{
    console.log(false);
    
}*/
 

/*function myF(a, b){
   let sum = 5 + 9;
   return sum;
}
let res = myF(1, 2);
console.log(res);*/


 /*let num = 6; let sum = 6; 
if(num == sum){
console.log("YES");
}
else {
console.log("NO");
} */
 


/*for(let i = 0; i < 20; i++){
    console.log(i);
    
}*

/*for (let i = 10; i >= 1; i--) {
    process.stdout.write(i + (i > 1 ? ', ' : '\n'));
}*/

/*for(let i = 10; i >= 1; i--){
    console.log(i);
    
}*/
