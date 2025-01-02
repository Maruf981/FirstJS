
function How13fridayinyear(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}
console.log(How13fridayinyear(2020));





// function FindDifDays(date){
//   let res = new Date(date);
//   let diff = Math.floor((new Date(2021, 0, 1) - res) / (1000 * 60 * 60 * 24))
//   return  `"${diff} days"`;
// }
// console.log(FindDifDays("12/28/2020"));
// console.log(FindDifDays("1/1/2020"));





// function Differenceday(date1, date2) {
//   let res = Math.abs(new Date(date1) - new Date(date2));
    
//   return Math.ceil(res / (1000 * 60 * 60 * 24));
// }
// console.log(Differenceday(("June 14, 2019"),("June 20, 2019")));
// console.log(Differenceday(("Dec 29, 2018"),("Jan 1, 2019")));



// function Polindrom(date){
//   let origin = date;
//   let res = date.replaceAll("/", "") === date.split("").toReversed().join("").replaceAll("/", "");
//   return res;
  
// }
// console.log(Polindrom("02/02/2020"));
// console.log(Polindrom("11/12/2019"));





// function StrtoIntigers(str){
//   let res = new Date(str);
//   return [res.getMonth() + 1, res.getDate(), res.getFullYear()];
// }
// console.log(StrtoIntigers("January 9, 2019"));
// console.log(StrtoIntigers("Jan 9, 2019"));
// console.log(StrtoIntigers("01/09/2019"));
// console.log(StrtoIntigers("01-09-2019"));
// console.log(StrtoIntigers("01.09.2019"));




// function ValidDate(days, month, year){
//   let result = new Date(year, month - 1, days)
  
//    return result.getDate() === days && result.getMonth() === month - 1 && result.getFullYear() === year;
// }
// console.log(ValidDate(35, 2, 2020));
// console.log(ValidDate(8, 3, 2020));




// function DaysinMonth(month, year ) {
//     return new Date(year, month, 0).getDate();
     
// }
// console.log(DaysinMonth(2, 2018 ));







// function times(hour, minute, second) {
//   let res1 = hour * 3600;
//   let res2 = minute * 60;
//   let res3 = second; 
//   let total = Math.max(res1, res2, res3);
//   if(total === res1){
//    return hour;
//   }
//   if(total === res2){
//     return minute;
//   }
//   else {
//     return second;
//   }
// }
// console.log(times(1, 59, 3598)); 



// function Christmas(year, month, day){
//   let date = new Date(year, month, day);
    
//   return date.getMonth() === 11 && date.getDate() === 24;

// }
// console.log(Christmas(2013, 11, 24));
// console.log(Christmas(2013, 0, 23));




//  function Friday13(month, year){
//   let res = new Date(year, month - 1, 13);
     
//   return res.getDay() === 5;
//  }
//  console.log(Friday13(10, 2017));
//  console.log(Friday13(1, 1985));
 


// let date = new Date(2025, 0, 2, 15, 30);  
// console.log(date.getHours());


// let map = new Map();
// console.log(typeof map);



// function reversedate(date){
//   let [year, month, day] = date.split("/");
//   return `"${year}${month}${day}" `;
// }
// console.log(reversedate(("11/12/2019")));
// console.log(reversedate(("12/31/2019")));




  
// function aftermonth(year, month) {
//   let date = new Date(year, month - 1);  
//   date.setMonth(date.getMonth() + 1);  
//   return date.getFullYear();  
// }

// console.log(aftermonth(2020, 24));
// console.log(aftermonth(1832, 2));



// function nameofmonth(date){
//     if(date === 1) return "January";
//     if(date === 2) return "February";
//     if(date === 3) return "March";
//     if(date === 4) return "April";
//     if(date === 5) return "May";
//     if(date === 6) return "June";
//     if(date === 7) return "July";
//     if(date === 8) return "August";
//     if(date === 9) return "September";
//     if(date === 10) return "October";
//     if(date === 11) return "November";
//     if(date === 12) return "December";
//   }
// console.log(nameofmonth(1));
// console.log(nameofmonth(4));
// console.log(nameofmonth(9));



// function century(year){
//     return Math.ceil(year / 100);
// }
// console.log(century(2005));
// console.log(century(1950));
// console.log(century(1900));






// function checkyear(year){
//     let item = year.getDate()
//     if(item === 31){
//       return `"toffee"`;
//     }else{
//       return `"Bonfire toffee"`;
//     }
//   }
// console.log(checkyear(new Date("2013/10/31")));
// console.log(checkyear(new Date("2012/07/12")));



// _________________________________________________________________

// function leapyear(year){
//   let result = year.getFullYear();
//   if(result % 4 === 0 && result % 100 !== 0 || result % 400 === 0){
//     return true;}
// else{
//     return false;
// }
// }
// console.log(leapyear(new Date("2023-08-05")));




// function daysremandingnyear(year) {
//     let current = year.getFullYear();
//     let res = new Date(current, 11, 31);
//     let diff = (res - year);
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
        
// }
// console.log(daysremandingnyear(new Date("2024-08-05")));




// function delatenum(set, num){
//   let newset = [];
//   for(let item of set){
//     if(item !== num){
//       newset.push(item);      
//     }
//   }
//   return `new Set(${JSON.stringify(newset)}`;
// }
// console.log(delatenum(new Set([1, 2, 3]), 2));
// console.log(delatenum(new Set(["a", "b", "c"]), "b"));
// console.log(delatenum(new Set([true, false]), false));




// function Retset(setA, setB) {
//   let newset = [];
//   let arrA = [...setA];   
//   let arrB = [...setB];   
//   for(let itemA of arrA){
//     for(let itemB of arrB){
//       if(itemA === itemB){
//         newset.push(itemA);
//       }
//     }
//   }
//   return `new Set(${JSON.stringify(newset)})`;
// }
// console.log(Retset(new Set([1, 2, 3]), new Set([2, 3, 4])));




// function daysbeetwentwoobj(date1, date2){
//   let day = 84600000;
//   return Math.round(Math.abs(date1.getTime() - date2.getTime()) / day);
// }
// console.log(daysbeetwentwoobj(new Date("2024-08-05"), new Date("2024-08-10")));



// function returndayofweek(date){
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   return days[date.getDay()];
// }
// console.log(returndayofweek(new Date("2024-08-05")));
// console.log(returndayofweek(new Date("2023-01-01")));
// console.log(returndayofweek(new Date("2020-12-31")));



 //__________________________________________________________________new Date


// quiztime task 4 / 10task
// function factorial(num){
//   let sum = 1;
//   for(let i = 1; i <= num; i++){
//     sum *= i;
//   }
//   let result = sum.toString().split("").reverse().join("");
//   return parseInt(result, 10);
// }
// console.log(factorial(4));




// quiztime task 4 / 4task
// function task(num) {
//   if (num > 0) {
//     return num - 2;
//   } else if (num < 0) {
//     return num + 1;
//   } else {
//     return 10;
//   }
// }

// console.log(task(4));




// quiztime task 4 / 2task
//  function add(a, b, c){
//   if(a < b && b < c){
//     let one = a * a;
//     let two = b * b;
//     let three = c * c; 
//     return one + "," + two + "," + three;
//   }else{
//     return -a + "," + -b + "," + -c;
//   }

//  }
//  console.log(add(3, -2, 8));
 





  // function polindromandprime(num){
  //   let origin = num.toString();
  //   let res = origin.split("").reverse().join("");
  //   if(origin === res){
  //   for(let i = 0; i < res.length; i++){      
  //     if(Number(res[i]) % 2 !== 1){    
  //       return false;
  //     }
  //   }
  // }
  //   return true;
  // }
  // console.log(add(11));           
      
    
  
  
  
  
  
  // function arithmeticsequence(num){
  //   let res = num.toString().split("").map(Number)    
  //   let itog = res[1] - res[0]
  //   for (let i = 1; i < res.length-1; i++){
  //   if(res[i + 1] - res[i] !== itog){
      
  //     return false;
  //   }
  // }
  //   return true;
  // }
  // console.log(arithmeticsequence(2468));

  
    // quiztime 2 / 1task
    
    // function ispoweroftwo(num){
    //  let pi = 3.16
    //  let res = num * num * pi;
    //  return `Theareaofacirclewithradius${num}is${res}.`
    //   }
    //    console.log(ispoweroftwo(5));
  

  
  //  // quiztim2 2 / 6
  //  function MainFunction(a, b){
  //   let count = 0;
  //   if(a < 0 && b < 0){
  //   for(let i = a; i < b; i++){
  //     if(i % 2 === 0) 
  //       count += i;
  //   } 
  // }
  //   return count;
  // }
  //  console.log(MainFunction(-1, -1));
   


// function highestverage(scores) {
//     let sum = scores.reduce((acc, obj) => acc + obj.score, 0);
//     let max = Math.max(...scores.map(obj => obj.score));
//     let min = Math.min(...scores.map(obj => obj.score));
//     return { highest: max, lowest: min, average: (max + min) / 2 };
// }

// console.log(highestverage([{name:"Alex",score:80},{name:"Emily",score:95},{name:"Charlie",score:88}]));





// function concattwoobjects(obj1, obj2) {
//     return {...obj1, ...obj2};
// }
// console.log(concattwoobjects({hello:23,hi:21,egg:100},{egg:66,nice:40,dear:25}));



//     function addnums (...arr) {
//     let cnt = 1;
//     let sum = 0;
//     for(let elem of [...arr]){
//           cnt = 1;
//           for(let item of elem){
//                 if(item % 2 != 0) 
//                     cnt *= item;
//           }
//           sum += cnt;        
//     }
//    return sum;
// }
// console.log(addnums([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));







// function MainFunction(objj) {
//     return names.map((obj)=>obj[0].toUpperCase()+obj.slice(1).toLowerCase())
//  }

// function swapvaluetokey(obj){
//     let newobj = {};
//     for(let key in obj){
//         newobj[obj[key]] = key;
//     }
//     return newobj;
// }
// console.log(swapvaluetokey({a:"apple",b:"banana",c:"cherry"}));




// function longeststr(obj){
//     let long = "";
//     let max = 0;
//     for(let key in obj){
//       if(obj[key].length > max){
//           long = obj[key];
//           max = obj[key].length;
//       }
//   }
//     return long;
// }
// console.log(longeststr({name:'Mr.Smith',city:'Korea',profession:'none'}));
 


// function sumofevenelement(obj){
//     let sum = 0;
//     for(let key in obj){
//         if(obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
// console.log(sumofevenelement({ a:2,b:5,c:8,d:3}));



// function unique(arr){
//     return arr.every((item, index, value) => {
//         return value.indexOf(item) === index;
//     });
// }
// console.log(unique([1,2,3,4,5])); 
 



// function sumoddelement(...arrs) {
//     let sum = 0;
//     for(let arr of arrs) {
//         for(let i = 0; i < arr.length; i++){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumoddelement([1,2,3,4,5],[1,2,3,4,5]));


// function squaresul(num) {
//     let sum = [];
//     for (let i = 0; i < num; i++) {

//         let res = [];
//         for (let j = 0; j < num; j++) {
//             res.push(num);
            
            
//         }
//         sum.push(res);
//     }
//     return sum;
// }
//  console.log(squaresul(3));
