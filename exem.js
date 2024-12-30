// task 9
// function longeststring(obj){
//       let long = "";
//       let max = 0;
//       for(let key in obj){
//         if(obj[key].length > max){
//             long = obj[key];
//             max = obj[key].length;
//         }
//     }
//       return long;
// }
// console.log(longeststring({a: "short", b: "longer", c: "longest"}));
// console.log(longeststring({name: "Alice", city: "San Francisco"}));




// // task 8
// function onlygreaternum(obj, num){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([Key, value]) => value > num)
//     )
// }
// console.log(onlygreaternum({a: 1, b: 2, c: 3, d: 4}, 2));
// console.log(onlygreaternum({x: 10, y: 15, z: 20}, 12));



// task 7
// function onlystringvalue(obj){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, value]) => typeof value === 'string'))
// ;}
// console.log(onlystringvalue({a: 1, b: "hello", c: true, d: "world"}));
// console.log(onlystringvalue({name: "Alice", age: 25, city: "New York"}));





// task 6
// function objfunctionappliedtoeachvalue(obj, func){
//     return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key, func(value)]))
// }
// console.log(objfunctionappliedtoeachvalue({a: 1, b: 2}, x => x * 2));






// task 5
// function propertiestruthyvalues(obj){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, value]) => value))
// }
// console.log(propertiestruthyvalues({a: 1, b: 0, c: false, d: "hello"}));
// console.log(propertiestruthyvalues({key1: null, key2: 5}));





// task 4
// function Multiplyvalues(obj){
//      return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key, value + value]));
//     };
// console.log(Multiplyvalues({a: 1, b: 2}));
// console.log(Multiplyvalues({x: 10, y: 20}));


// task 3
// function onlespecifiedkeys(obj, keys){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key]) => keys.includes(key)));
// }
// console.log(onlespecifiedkeys({a: 1, b: 2, c: 3}, ["a", "c"]));
// console.log(onlespecifiedkeys({name: "Alice", age: 25, city: "New York"}, ["name", "city"]));





// task 2
// function add(obj){
//     let newobj = {};
//     for(let key in obj){
//         newobj[obj[key]] = key;
//     }
//     return Object.entries(newobj).map(([key, value]) => `${key}: ${value}`).join(", "); // барои он ки ключи бе нохунак бароянд.
// }
// console.log(add({a: 1, b: 2}));
// console.log(add({name: "Alice", age: 25}));





// task 1
// function propertyexists(obj, str){
//     return  Object.entries(obj).some(([key]) => key === str)
//         // return obj.hasOwnProperty(str)
//         // return str in obj; 
// }
// console.log(propertyexists({a: 1, b: 2},"b"));
// console.log(propertyexists({name: "Alice", age: 25},"city"));

//______________________________________________________________Homework27/12


// task 10
// function StringValueReversed(obj){
//     return Object.fromEntries(
//         Object.entries(obj).map(([Key, value]) => [Key, value.split("").reverse().join("")]));
// }
// console.log(StringValueReversed({a: "hello", b: "world", c: "foo"}));
// console.log(StringValueReversed({x: "Alice", y: "Bob", z: "Charlie"}));






// task 9
// function convertedtoabsolutevalues(obj){
//     return Object.fromEntries(
//         Object.entries(obj).map(([Key, value]) => [Key, Math.abs(value)])
//     )
// }
// console.log(convertedtoabsolutevalues({a: -1, b: 2, c: -3}));
// console.log(convertedtoabsolutevalues({x: -10, y: 20, z: -30}));




// task 8
// function valuesconcat(obj, sufix){
//     return Object.fromEntries(
//         Object.entries(obj).map(([Key, value]) => [Key, value + sufix])
//     )
// }
// console.log(valuesconcat({a: "hello", b: "world", c: "foo"}, "!"));




// task 7
// function dividedvalues(obj, num){
//     return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key, value / num]));
// };
// console.log(dividedvalues({a: 4, b: 8, c: 12}, 2));




// test 6
// function Multiplyvalues(obj, num){
//      return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key, value * num]));
//     };
// console.log(Multiplyvalues({a: 1, b: 2, c: 3}, 2));
// console.log(Multiplyvalues({x: 10, y: 20, z: 30}, 3));



// // task 5
// function objecttoLowerCase(obj){
//     return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key.toLowerCase(), value])
//     );
// }
// console.log(objecttoLowerCase({A: 1, B: 2, C: 3}));
// console.log(objecttoLowerCase({Name: "Alice", Age: 25, City: "New York"}));




// task 4
// function newobjectaddedkeyaluepair(obj){
//      return {...obj, c: 3};
// }
// console.log(newobjectaddedkeyaluepair({a: 1, b: 2},"c", 3));






// task 3
// function returnjustbooleanvalue(obj){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, values]) => typeof values === 'boolean'))
     
// };
// console.log(returnjustbooleanvalue({a: true, b: false, c: 3, d: "hello"}));
// console.log(returnjustbooleanvalue(({isActive: true, age: 25, isMember: false})));




// task 2
// function returnjustobjects(obj) {
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, value]) => typeof value === 'object' && value !== null)
//     );
// }

// console.log(returnjustobjects({a: 1, b: {inner: "object"}, c: 3, d: {another: "object"}}));
// console.log(returnjustobjects({name: "Alice", details: {age: 25, city: "New York"}, city: "New York"}));






// task 1
// function evenValues(obj){
//     let result = [];
//     for(let key in obj) {
//         if(obj[key] % 2 === 0){
//             result.push(obj[key]);
//         }
//     }
//     return result;
// }
// console.log(evenValues({a: 1, b: 2, c: 3, d: 4}));
// console.log(evenValues({x: 10, y: 20, z: 30}));



//__________________________________________________________________hometask27.12.24


// task 15

// function filterStrings(obj) {
//     const result = {};
//     for (let key in obj) {
//         if (typeof obj[key] === "string" && /[0-9]/.test(obj[key])) {
//             result[key] = obj[key];
//         }
//     }
//     return result;
// }
// console.log(filterNonAlphabeticStrings({ a: "dsadsa", b: "abc11", c: "abc" }));




// task 14
// function swapKeys(obj1, obj2) {
//     const newObj1 = {};
//     const newObj2 = {};

//     const keys2 = Object.keys(obj2);
//     let i = 0;
//     for (let key in obj1) {
//         newObj1[keys2[i]] = obj1[key];
//         i++;
//     }

//     const keys1 = Object.keys(obj1);
//     i = 0;
//     for (let key in obj2) {
//         newObj2[keys1[i]] = key;
//         i++;
//     }

//     return [newObj1, newObj2];
// }
// console.log(swapKeys({a: 1, b: 2,}, {c: 3, d:4}));





// task 12
// function concatallstrings(obj){
//     let result = "";
//     for(let key in obj){
//         if(typeof obj[key] === 'string'){
//             result += obj[key];
//         }
//     }
//     return result;
// }
// console.log(concatallstrings({a: "dsadsa", b: 123, c: "abc"}));






// task 11
// function lengthofobjects(obj){
//     //  return Object.keys(obj).length;
//     return Object.keys(obj).reduce((acc, value) => acc + 1, 0)};
// console.log(lengthofobjects({a: "dsadsa", b: 123, c: 345}));
// console.log(lengthofobjects({a: true , b: 4, c: 5, d:5}));






// // task 10
// function sumofnumbertype(obj){
//    return Object.values(obj).reduce((acc, values) => {
//     if(typeof values === 'number'){
//         acc += values;
//     }
//     return acc;
//    },0)
// }
// console.log(sumofnumbertype({a: "dsadsa", b: 123, c: 345}));
// console.log(sumofnumbertype({a: true , b: 4, c: 5, d:5}));






// task 9
// function UserInfo(user) {
//     const age = new Date().getFullYear() - user.year;
//     const start = user.year + 7;
//     const end = start + 11;

//     return { ...user, age, start, end };
// }
// console.log(UserInfo({ name: "John", year: 1992 })); 
// console.log(UserInfo({name: "Johnson", year:2000})); 





// task 8
// function hasarray(obj){
//     return Object.values(obj).some((elem) => Array.isArray(elem));
// }
// console.log(hasarray({name: "John",age:[1,2,3]}));
// console.log(hasarray({name:false,age:14}));






// task 6
// function propertiesisundefined(obj){
//     return Object.values(obj).includes(undefined);
// }
// console.log(propertiesisundefined({name: undefined, age: 11}));
// console.log(propertiesisundefined({name: false, age:14}));





// task 5
// function olderuser(obj) {
//     let oldest = obj[0];  
//     for (let i = 1; i < obj.length; i++) {  
//         if (obj[i].age > oldest.age) {  
//             oldest = obj[i];  
//         }
//     }
//     return oldest;
// }
// console.log(olderuser([{name:"vv",age:49}, {name:"nn",age:17}]));
// console.log(olderuser([{name:"aa",age:22},{name:"bb",age:39}]));




// task 4
// function replacekeytovalue(obj){
//      let newKey =  {};
//      for(let key in obj){
//         newKey[obj[key]] = key;
//      }
//      return newKey;
// }
// console.log(replacekeytovalue({c:3,d:4}));





// task 3
// function lettersandnumbers(str){
//     const obj = {letters: 0, numbers: 0};
//     for(let i = 0; i < str.length; i++){
//         if(!isNaN(str[i]) && str[i] !== ' '){
//             obj.numbers++;
//         }
//         else if(/[a-zA-Z]/.test(str[i])){
//             obj.letters++;
//         }
//     }
//     return `{letters: ${obj.letters}, numbers: ${obj.numbers}}`;
// }
// console.log(lettersandnumbers("Hello World!"));

// task 2
// function ifidenticalobjects(obj1, obj2){
//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
// console.log(ifidenticalobjects({a:1,b:2},{a:1,b:3}));



//task 1
// function returnvalueofobj(obj){
//     let newarr = [];
//     for(let key in obj){
//         if(obj[key] !== undefined){
//             newarr.push(obj[key]);
//         }        
//     }
//     return newarr;
// }
// console.log(returnvalueofobj({a:1, b:2}));  



// _______________________________________________________quiztimeobj

// task 10
// function addName(obj, name, value) {
//     obj[name] = value;
//     return  obj;
// }
// console.log(addName({}, "Brutus", 300));
// console.log(addName({ piano: 500 }, "Brutus", 400));




// task 9
// function maxposiblescore(arr){
//      let result = arr.reduce((acc, obj) => acc + obj.score, 0);
     
//      return result;
// }
// console.log(maxposiblescore(([
//     { tile: "N", score: 1 }, { tile: "K", score: 5 },
//     { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
//     { tile: "A", score: 1 }, { tile: "E", score: 1 }
//     ])));
//     console.log(maxposiblescore(([
//         { tile: "B", score: 2 }, { tile: "V", score: 4 },
//         { tile: "F", score: 4 }, { tile: "U", score: 1 }, { tile: "D", score: 2 },
//         { tile: "O", score: 1 }, { tile: "U", score: 1 }
//         ])));
    




// task 8
// function differenceyourlost(obj, num){
    
//     return Object.values(obj).reduce((acc, value) => (acc + value), 0) - num;
// }
// console.log(differenceyourlost({ "baseball bat": 20 }, 5)); 
// console.log(differenceyourlost({ skate: 10, painting: 20 }, 19)); 





// task 7
// function ifobjempty(obj){
    
//     return Object.keys(obj).length === 0;
// }
// console.log(ifobjempty({}));
// console.log(ifobjempty({a: 1}));





// task 6
// function ink(obj){
//     return Math.min(...Object.values(obj));
// }
// console.log(ink({"cyan": 23,"magenta": 12,"yellow": 10}));
// console.log(ink({"cyan": 432, "magenta": 543, "yellow": 777}));





// task 5
// function ifhashcontainsaspecified(obj, str){
//     return Object.keys(obj).includes(str);
// }
// console.log(ifhashcontainsaspecified({ a: 44, b: 45, c: 46 },"d"));
// console.log(ifhashcontainsaspecified({ pot: 1, tot: 2, not: 3 }, "not"));





// task 4
// function secondkeyinaend(obj) {

//     let values = Object.values(obj);
//     let String = values.join(" ");  
//     return `${String} ${obj[2]}`;
// }
// console.log(secondkeyinaend({ 1: "Mommy", 2: "please", 3: "help" }));
// console.log(secondkeyinaend({ 1: "Me", 2: "innocent", 3: "is" }
// ));





// task 3
// function isinrange(num, obj){
//     return num >= obj.min && num <= obj.max;
// }
// console.log(isinrange(4, { min: 0, max: 5 }));
// console.log(isinrange(4, { min: 6, max: 10 }));




// task 2
// function accordingthnum(obj){
//     let allnums = {
//         1: `"circle"`,
//         2: `"semi-circle"`,
//         3: `"traingle"`,
//         4: `"square"`,
//         5: `"pentagon"`,
//         6: `"hexagon"`,
//         7: `"heptagon"`,
//         8: `"octagon"`,
//         9: `"nonagon"`,
//         10: `"decagon"`,
// };
// return allnums[obj];
// }
// console.log(accordingthnum(1));
// console.log(accordingthnum(10));
// console.log(accordingthnum(5));





// task 1
// function totalamontofinsults(obj){
//     let count = 0;
//     Object.values(obj).forEach((elem) => {
//             count++;
//     });
//     return count;
// }
// console.log(totalamontofinsults({ a: "idiot", b: "idiot", c: "idiot" }));
// console.log(totalamontofinsults({ a: "moron", b: "scumbag", c:"moron", d: "dirtbag" }));




// __________________________________________________________hometask object



// function cityInfo(city) {
//     return `"${city.name} has a population of ${city.population} and is situated in ${city.continent}"`;
// }

// console.log(cityInfo({ name: "Paris", population: "2,140,526", continent: "Europe" }));





// function Lukefamily(member) {
//     const family = {
//         "Darth Vader": "father",
//         "Leia": "sister",
//         "Han": "brother-in-law",
//     };
//     return `"Luke, I am your ${family[member]}"`;
// }
// console.log(Lukefamily("Darth Vader"));  
// console.log(Lukefamily("Leia"));         
// console.log(Lukefamily("Han"));         
 
 



// function spendsaving(sum){
//     return `{
//         "Needs": ${sum * 0.5},
//         "Wants": ${sum * 0.3},
//         "Saving": ${sum * 0.2}
//     }`; 
// }
// console.log(spendsaving(1000));





// function Multiplyobj({width, length, height}){
//     return Object.values({width, length, height}).reduce((acc, elem) => acc * elem, 1);

// }
// console.log(Multiplyobj({width:2,length:5,height:1}));


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
   




