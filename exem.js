// // task 10
// function toUpCase(obj){

//     let newobj = {};
//     Object.keys(obj).forEach((keys) => {
//         newobj[keys.toUpperCase()] = obj[keys];
//     });
//     return newobj;
// }
// console.log(toUpCase({a: 1, b: 2}));
// console.log(toUpCase({name: "Alice", age: 25}));


// task 9
// function delatetheproperty(obj, propName){
//     delete obj[propName];
//     return obj;
// }
// console.log(delatetheproperty({a: 1, b: 2, c: 3},"b"));
// console.log(delatetheproperty({name: "Alice", age: 25},"age"))



// // task 8
// function objectkeysorder(obj){
//     let forkeys = Object.keys(obj).sort();
//     let newobj = {};
//     forkeys.forEach((keys) => {
//         newobj[keys] = obj[keys];
//     });
//     return newobj;
// }
// console.log(objectkeysorder({b: 2, a: 1, c: 3}));
// console.log(objectkeysorder({name: "Charlie", age: 30, job: "Engineer"}));




// task 7
// function getproperty(obj, propName) {
//     return obj[propName];
// }
 
// console.log(getproperty({name: "John", age: 30}, "name"));
// console.log(getproperty({name: "Bob", age: 30},"age"));



// // task 6
// function countproperties({name, age, city}){
//     return Object.keys({name, age, city}).length;
// }
// console.log(countproperties({name: "John", age: 30, city: "New York"}));




// task 5
// function summarizeBook({title, author, ratings}){
//     const average = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
//     return `${title} by ${author} has an average rating of ${average}`; 
// }
// console.log(summarizeBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", ratings: [5, 4, 5, 3, 4] }));




// task 4
// function Ageman({ firstName, lastName, birthYear }){
//     let currentyear = new Date().getFullYear();
//     return `${currentyear - birthYear}`;
// }
    

// console.log(Ageman({ firstName: "John", lastName: "Doe", birthYear: 2000 }));
// console.log(Ageman({ firstName: "Alice", lastName: "Smith", birthYear: 1990 }));

    


// task 3
// function totalPrice(allprice){
//     return allprice.reduce((acc, products) => acc + products.price, 0);}
//     const allprice = [
//         {name: "Book", price: 10},
//         {name: "Pen", price: 2},
//         {name: "Notebook", price: 5}
//     ];

// console.log(totalPrice([{ name: "Shoes", price: 50 }, { name: "Shirt", price: 20 }, { name: "Hat", price: 15 }]));
// console.log(totalPrice([{name: "Bag", price: 30 },{ name: "Belt", price: 10 }, { name: "Jacket", price: 100 }]));



// task 2
// function upvotedownvote ({upvotes, downvotes}){
//     let up = `${upvotes}`;
//     let down =  `${downvotes}`;
//     return up - down;
// }
// console.log(upvotedownvote({upvotes: 13, downvotes: 0}));
// console.log(upvotedownvote({ upvotes: 2, downvotes: 33 }));




// function personData({ name, age, location }) {
//     return `${name} is ${age} years old and he lives in ${location}`;
// }

// console.log(personData({ name: "John", age: 30, location: "New York" }));
    

//___________________________________________________________Object

// task 10
// function differencebetweenmaxmin(arr){
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     return max - min;
// }
// console.log(differencebetweenmaxmin([100, 200, 300, 400, 500]));





// task 9
// function squareofevennums(arr){
//     return arr.reduce((acc, nums) => {
//         if(nums % 2 === 0){
//             return acc + nums ** 2;
//         }
//         return acc; 
//     },0); 
// }
// console.log(squareofevennums([11, 12, 13, 14, 15]));






// task 8
// function toreversedarr(arr){
//     return arr.toReversed();
// }
// console.log(toreversedarr([11, 12, 13, 14, 15]));




// task 7
// function indexofmaxnum(arr){
//     return arr.indexOf(Math.max(...arr));
// }
// console.log(indexofmaxnum([1, 5, 3, 5, 2]));




// task 6
// function onlynegativenums(arr){
//  return arr.filter((nums) => nums < 0);
// }
// console.log(onlynegativenums([100, -200, 300, -400, 500]));




// task 5
// function averageofallelem(arr) {
//     let sum = arr.reduce((acc, val) => acc + val, 0);{
//         return sum / arr.length;
//     };
// } 
// console.log(averageofallelem([11, 12, 13, 14, 15]));



// task 4
// function shorteststring(arr){
//     let short = "99999999999";
//     arr.forEach((str) => {
//         if(str.length < short.length){
//             short = str;
//         }
//     });
//     return short;
// }
// console.log(shorteststring(["apple", "banana", "cherry"]));


 



// task 3
// function minelementarr(arr){
//     return Math.min(...arr);
// }
// console.log(minelementarr([1, 2, 3, 4, 5]));
// console.log(minelementarr([4, 2, 6, 4, 5]));




// task 2
// function sortedarr(arr){
//     return arr.toSorted((a, b) => b - a);
// }
// console.log(sortedarr([1, 3, 2]));





// //task 1;
// function eachelementsquared(arr){
//     return arr.map((num) => num * num);
// }
// console.log(eachelementsquared([1, 2, 3]));


//______________________________________________________________________________


// // task 15
// function alphabetindex(str){
//       return str.toLowerCase().split("").map((char) => { // replace(/[^a-z]/g, '')
//         if(char >= 'a' && char <= 'z'){
//             return char.charCodeAt(0) - 96;
//         }
//         return -1;
//       });
// }
// console.log(alphabetindex('abc'));
// console.log(alphabetindex('zyx'));
// console.log(alphabetindex('e'));





//task 14
// function returnarrlength(arr){
//     let count = 0;
//     arr.forEach((num) => {
//         count++;
//     });
//     return count;
// }
// console.log(returnarrlength([1, 2, 3, 4]));
// console.log(returnarrlength([1, 1, 1]));





// task 13
// function withoutduplicate(arr){
//     let result = [];
//     arr.forEach((num) => {
//         if(result.indexOf(num) === -1){
//             result.push(num);
//         }
//     });
//     return result;
// }
// console.log(withoutduplicate([7, 13, 2, 6, 4, 7, 2]));
// console.log(withoutduplicate([89, 7, 5, 21, 7, 89]));





// task 12
// function numbermatchteindex(arr){
//     return arr.every((num, index) => num === index);
    
// }
// console.log(numbermatchteindex([0, 1, 2, 3, 4, 5, 6, 7]));
// console.log(numbermatchteindex([1, 2, 3, 4, 5, 6, 7]));




// task 11
// function differencebetweenmaxmin(arr){
//      let max = Math.max(...arr);
//      let min = Math.min(...arr);
//      return  max - min;
// }
// console.log(differencebetweenmaxmin([7, 13, 2, 6, 4]));
// console.log(differencebetweenmaxmin([89, 7, 5, 21]));





// task 10
// function onlyprime(arr){
//     return arr.every((num) => {
//         if(num <= 1){
//             return false;
//         }
//         for(let i = 2; i <= Math.sqrt(num); i++){
//             if(num % i === 0){
//                 return false
//             }
//         }
//         return true;
//     });
// }
// console.log(onlyprime([19, 1]));
// console.log(onlyprime([5, 2]));





// // task 9
// function factorialeveryelement(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let fact = 1;
//         for(let j = 1; j <= arr[i]; j++){
//             fact *= j;
//         }
//         result.push(fact);
//     }   
//     return result;
// }
// console.log(factorialeveryelement([1, 2, 3, 4, 5]));

// function factorialeveryelement(arr) {
//     return arr.map(n => {
//         let fact = 1;
//         for (let i = 1; i <= n; i++) {
//             fact *= i;
//         }
//         return fact;
//     });
// }

// console.log(factorialeveryelement([1, 2, 3, 4, 5]));




// task 8
// function mostfrequencynum(arr){
//     let count = 0;
//     let array = arr.sort((a, b) => a - b);
//     for(let i = 0; i < array.length; i++){
//         if(arr[i] === arr[i + i]){
//             count = arr[i];
//         }
//     }
//     return count;
// }
// console.log(mostfrequencynum([7, 13, 2, 6, 4, 2]));
// console.log(mostfrequencynum([89, 7, 5, 21, 7]));




// // task 7
// function findnum(arr, number){
//     return arr.find((num) => num === number) ? "Boom" : "Not Boom";
// }
// console.log(findnum([1, 2, 3, 4, 5, 6, 7], 7));





// task 6
// function sorted(arr){
//     return arr.toSorted((a, b) => a - b);
// }
// console.log(sorted([7, 13, 2, 6, 4]));
// console.log(sorted([89, 7, 5, 21]));




// task 5
// function isPrime(arr){
//      return arr.filter((num) => {
//         if(num < 1){
//             return false;
//         }
//         for(let j = 2; j <= Math.sqrt(num); j++){
//             if(num % j === 0){
//                 return false;
//             }
//         }
//         return true;
//      }).length;
// }
// console.log(isPrime([7, 13, 2, 6, 4]));
// console.log(isPrime([89, 7, 5, 21]));
// console.log(isPrime([8, 11, 1]));




// task 4
// function maxandmin(arr){
//     let max = -Infinity;
//     let min = Infinity;
//     arr.forEach((value) => {
//         if(value > max){
//             max = value;
//         }
//         if(value < min){
//             min = value;
//         }
//     });
//     return [max, min];
// }
// console.log(maxandmin([7, 13, 2, 6, 4]));
// console.log(maxandmin([89, 7, 5, 21]));




// task 3
// function productnumofarrays(arr){
//     let res = 1;
//     arr.forEach((value) => {
//         res *= value;
//     });
//     return res;
// }
// console.log(productnumofarrays([7, 13, 2, 6, 4]));
// console.log(productnumofarrays([89, 7, 5, 21]));





// task 2
// function thesumofevenodd(arr){
//     let even = 0;
//     let odd = 0;
//     arr.forEach((value) => {
//         if(value % 2 !== 0){
//             odd += value;
//         }
//         else{
//             even += value;
//         }
//     });
//     return [even, odd];
// }
// console.log(thesumofevenodd([1, 2, 3, 4, 5, 6]));
// console.log(thesumofevenodd([-1, -2, -3, -4, -5, -6]));




// task 1
//  function diapazonstartend(arr1, arr2){
//     let res = [];
//     for(let i = arr1; i <= arr2; i++){
//         res.push(i);
//     }
//     return res;
//  }
//  console.log(diapazonstartend(1, 5));
 
 //________________________________________________________


// function findword(str) {
//     let words = str.split(' ');
//     let longword = words[0];  

//     for (let i = 0; i < words.length; i++) 
//         {
//         let word = words[i];
//         if (word.length > longword.length) 
//         {
//             longword = word;
//         }
//     }
//     return longword;
// }
// console.log(findword("Hello darkness my old friend"));
// console.log(findword("Hello there Mate"));



// function cub(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i ** 3;
//     }
//     return sum;
// }

// console.log(cub(3)); 





// function MainFunction(){
//     let sum = 0
//        return ()=>{
//      sum++;
//      return sum;
//     }
//  }
//  let Count = MainFunction();
//  console.log(MainFunction(0));
//  console.log(MainFunction(1));
 



 
// function add(num){
//     let str = num.toString().split("");
//     let count = 0;
//     for(let i = 0; i <str.length; i++)
//         count+= + str[i];
//     return count;
// }
// console.log(add(100));




// function Add(string) {
//     let result = "";
//     for (let i = 0; i < string.length; i++) {
//         if (result.indexOf(string[i]) === -1) {
//             result += string[i];
//         }
//     }
//     return result;
// }
// console.log(Add("Hello"));




// function Reverse(str) {
//     let reversed = str.split("").reverse().map(char => {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase();
//         } 
//         else 
//         {
//             return char.toUpperCase();
//         }
//     });
//     return reversed.join("");
// }
// console.log(Reverse("hello World"));



// function mubash(str) {
     
//     let result = str.replace(/\d/g, "");  
//     return result;  
// }
// console.log(mubash('mubashir1'));


 
 
// function boom(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '7') {
//             return "Boom!";
//         }
//     }
//     return "Not!";  
// }

// console.log(boom('1,2,4,5,76'));  
   




