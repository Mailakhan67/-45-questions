// // //QUESTION NUMBER1:
// console.log("hello, world");

// let message = "hello world";
// console.log(message);


// // //QUESTION NUMBER2:

// let personName: string = '';
// personName = prompt("what is your name?") || ':';
// if (personName !== null && personName !== '') {
//     alert(`hello ${personName},would you like to learn some python today?`)
// }
// else{
//  alert('You have to fill your name!')
// } 



// // //QUESTION NUMBER3:

// let personName:string =personName.toLowerCase();
// let personName:string =personName.toUpperCase();
//  let titleCase: string = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')
//  if (personName !== null && personName !== '') {
//     alert(`hello ${personName}, here are your name in:
//     LowerCase: ${lowerCase}
//      UpperCase: ${upperCase}
//     TitleCase: ${titleCase} `)
// }
// else {
//     alert('please fill your name!');
// }


// // //QUESTION NUMBER4:

// console.log('Imran khan once said,"Absolutely Not"');

// // //QUESTION NUMBER5:
//  let famous_person="Imran Khan";
//  let message='“Absolutely Not!”';

//  console.log(`${famous_person} once said, ${message}`);

// // //QUESTION NUMBER6:

// import { Console } from "console";
// stripping names ////utarny waly naam;
// const personName: string = '   \n\tKamran Tessori\t\n   ';
// console.log(personName);

// const without_whitespace: string = personName.trim();
// console.log(without_whitespace);


// // //QUESTION NUMBER7,8:
// // //--isi ky sath Question number Eight bhi hogya dono same hain--///


//  console.log(5+3);    ////-----addition---////

//  console.log(15-7);  ////----subtraction----////

//  console.log(4*2);  ////-----multiplication----////

//  console.log(16/2);  ////---divide---////

// // //QUESTION NUMBER9:

// const favorite_Number:number = 6;
// const message:string = 'Here is your favorite number ' +favorite_Number;
// console.log(message);

// // //QUESTION NUMBER10:
// program1 written by:Maila Khan
// current Date :13-2-2024
//  This program will write my name.

// console.log("Maila Khan");


// program written by:Maila Khan
// current Date :13-2-2024
//  This program will add two digits.

// console.log(5+5);


// // //QUESTION NUMBER11:

// kisi bhi array me ager humy string ko bulana ho number wise to hum osy osky name se nhi bulky index number se bulayengy;

// let names:string []=["laiba","maila","shagufta","sana","misbah","seema","rehana","asma"];

// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }


// // //QUESTION NUMBER12:

// let friends: string[] = ["laiba", "naila", "nimra", "seema", "rehana"];
// //let greetings = 'assalamualaikm my all friends:';

// //for (let i = 0; i < friends.length; i++) {
// //console.log(greetings[i]+friends);
// //}

// for (let friend of friends) {
//     console.log(`Hey ${friend} i just wanted to say hey`);
// }

// // //QUESTION NUMBER13:

// const myArray:string[] = ["car", "motorbike", "motorcycle", "Bicycle"];
// for(let i=0; i<myArray.length; i++){
//     console.log('I Would Like To Own a ' + myArray[i]);
// }

// // //QUESTION NUMBER14:

// let array:string[]=["laiba","maila","nadia","sadia","shazia","shaista"];

// console.log(array[1],array[3],array[5]+' you all are invited by me for a dinner tonight');


// // //QUESTION NUMBER15:

// let guestList:string[]=["maila","shaista","naila","seema","rehana","zaida"];

// const guestWhoCantCame='rehana';
// console.log(`${guestWhoCantCame} can't make it to the dinner!`);
// const indexOfGuestWhoCantcome=guestList.indexOf(guestWhoCantCame);

// if(indexOfGuestWhoCantcome !== -1){
//     const newPerson="laiba";
//     guestList[indexOfGuestWhoCantcome]=newPerson;

//     guestList.forEach(guest =>{
//         console.log(`Dear ${guest}, you are invited to the dinner!`)
//     })

// }


// // //QUESTION NUMBER16:

// let guestList: string[] = ["Maila", "Shaista", "Naila", "Seema", "Rehana", "Zahida"];
// guestList.unshift("Fozia");
// guestList.push("Shehreem");
// guestList.splice(4, 0, "Sana");

// for (let arrays of guestList) {
//     console.log(`${arrays} you are invited by me for a dinner tonight!`);
// }


// //QUESTION NUMBER17:

// initial list of guest:
// let guest: string[] = ["Shagufta", "Nazli", "Mehwish", "Rehana", "Seema"];

// //informing that two people can be invited:
// console.log("Due to limited space ,only two people can be invited for dinner.");

// while(guest.length > 2){
// const removeGuest = guest.pop();
// console.log(`Sorry ${removeGuest}, you are no longer invited to dinner.`);

// guest.forEach((guest) => {
//     console.log(`Dear ${guest}, you are still invited to dinner.`)
// });

// //Removing last two names from the list
// guestList.pop();
// guestList.pop();

// //printing the last list
// console.log("final guest list:", guests);

// //QUESTION NUMBER 18:

// // let placesToVisit:string[]=["America","Canada","Sri lanka","Dubai","China"];
// // // // ORIGINAL ORDER
// // console.log("Original order:",placesToVisit);

// // // // print the array in alphabetical order without modifying the actual list
// // console.log("Alphabetical order:",[...placesToVisit].sort());

// // // // show that the array is still in its original order
// // console.log("Original order after sorting:",placesToVisit);

// // // // print the array in reverse alphabetical order without changing the order of the original order;
// // console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());
// // // // show the array is still in its original order:
// // console.log("Original order reverse sorting:",placesToVisit);

// // // reverse the order of the list

// // placesToVisit.reverse();
// // console.log("Reversed order:",placesToVisit);

// // // sort the array in alphabetical order
// // placesToVisit.sort();
// // console.log("Sorted in alphabetical order:",placesToVisit);

// // // // sort the array in reverse alphabetical order 
// // placesToVisit.sort((a, b) => b.localeCompare(a));
// // console.log("Sorted in reverse alphabetical order", placesToVisit);

// //QUESTION NUMBER 19:
// // let invitations:string[]=["shagufta","nazli"];
// // let count_invitations:number=invitations.length
// // console.log(`${count_invitations} people will come to the dinner`);


// //QUESTION NUMBER 20:
// //  let languages = ["URDU", "ENGLISH", "SINDHI", "FARSI", "PASHTO", "BALOCHI"];

// //  console.log("List of languages");
// // console.log(languages);


// //QUESTION NUMBER 21:
// //let person:{name:string,fname:string,age:number,qualification:string}={name:"Maila Khan",fname:"female",age:22,qualification:"BA"};
// //console.log(person);

// //QUESTION NUMBER 22:
// //creating an array with indexError
// // let myArray=[1,2,3,4,5,6,7,8];
// // console.log(myArray[9]);    //this will cause an index error
// // console.log("Index Error Occured:", myArray[9]);
// // //correcting the error by accessing a valid index
// // console.log("correcting the error",myArray[7]);

// //QUESTION NUMBER 23:

//let car='subaru';

// // console.log("is car == 'subaru'? predict true");
// // console.log(car == 'subaru');

// // console.log("is car != 'honda city'? predict true");
// // console.log(car != 'honda city');

//  console.log("is car == 'Subaru'? predict false");
//  console.log(car == 'Subaru');

//  console.log("is car == 'SUbaru'? predict false");
//  console.log(car == 'SUbaru');

// console.log("is car.length == 6? predict true");
// console.log(car.length == 6);

//  console.log("is car.length == 9? predict false");
// console.log(car.length == 9);

// console.log("is car.length != 10? predict true");
//  console.log(car.length != 10);

//  console.log("is 12 > 54 ? predict false");
//  console.log(12 > 54);

// console.log("is 12 <= 9 ? predict false");
//   console.log(12 <= 9);


// console.log("is car == 'subaru' && car.length == 6? predict true");
// console.log(car == 'subaru' && car.length == 6);


//QUESTION NUMBER 24:

// let name_1:string = "Maila ";
// let name_2:string = "Maila khan";
// let name_3:string = " Miss Maila khan";

// if(name_1 == name_3){
//     console.log("names are equal");
// }else{
//     console.log("names are not equal");
// }

// if(name_1 != name_2){
//     console.log("names are equal");
// }

// if(name_1 != name_2){
//     console.log("names are equal");
// }

//let age1: number = 18;
//let age2:number = 21;

// if(age1 == 18){
//     console.log("eligible for vote");
// }

// if(age2 == 21){
//          console.log("you are eligible for vote");
//      }

// if(age1 <= age2){
//     console.log("Younger age");
// }

// if(age2 >= age1){
//     console.log("older age");
// }

// if(age1 == 18 && age2 == 21){
//     console.log("This person is eligible for vote");
// }

// if(age1 == 18 || age2 == 21){
//     console.log("This person is not eligible for vote");
// }


// let languages:string[]=["urdu","sindhi","punjabi","pashto","farsi"];

// if(languages.includes("urdu")){
//     console.log("Urdu is a national language of pakistan");
// }


// if(languages.includes("Balochi")){
//     console.log("Balochi is not include in array");
// }

//QUESTION NUMBER 25:
// let alien_color:string = "green";

// if(alien_color == "green"){
//     console.log("you earned 5 points.");
// }

// let alien_color:string = "red";

// if(alien_color == "green"){
//     console.log("no output");
// }


//QUESTION NUMBER 26:

// let alien_color:string = "red";

// if(alien_color == "red"){
//     console.log("You just earned 5 points for shooting the alien.");
//  }  
//  if(alien_color == "green"){

//  } else{
//     console.log("You just earned 10 points");
//  }

//  if(alien_color == "red"){
//     console.log("You just earned 5 points for shooting the alien.");
//  }  else{
//     console.log("You just earned 10 points")
//  }

//QUESTION NUMBER 27:

// let alien_color:string = "yellow";

//  if(alien_color == "green"){
//      console.log(" player earned 5 points.");
//   } else if(alien_color == "yellow"){
//     console.log(" player earned 10 points.")

// } else{
//     console.log(" player earned 15 points.")

// }


//QUESTION NUMBER 28:

// let age:number=100;
// if(age < 2){
//     console.log("you are a babby")
// }else if(age < 4){
//     console.log("you are a toddler")
// }else if(age < 13){
//     console.log("you are a kid")
// }else if(age < 20){
//     console.log("you are a teenager")
// }else if(age < 65 ){
//     console.log("you are a adult")
// }else{
//     console.log("you are a older")
// }


//QUESTION NUMBER 29:
// let favoriteFruits=["banana","apple","mango"];
// let favoriteFruits2=["strawberry","orange"];

// if(favoriteFruits.includes("banana")){
//     console.log("I really like bananas!")
// }

// if(favoriteFruits.includes("apple")){
//     console.log("I really like apples!")
// }

// if(favoriteFruits.includes("mango")){
//     console.log("I really like mangoes!")
// }

// if(favoriteFruits2.includes("strawberry")){
//     console.log("I really like strawberries!")
// }

// if(favoriteFruits2.includes("orange")){
//     console.log("I really like oranges!")
// }


//QUESTION NUMBER 30:
// var username = ["admin", "seema", "rehana", "iqra", "shereem", "misbah",];

// for (let i = 0; i < username.length; i++) {
//     if (username[i] === 'admin') {
//         console.log("Hello admin, would you like to see a status report?")
//     } else {
//         console.log(` Hello ${username[i]}, thank you for logging in again.`)
//     }
// }


//QUESTION NUMBER 31:

// var username = ["admin", "seema", "rehana", "iqra", "shereem", "misbah",];

// if (username.length === 0) {
//     console.log("We need to find some users!")
// } else {
//     for (let user of username) {
//         if (user === 'admin') {
//             console.log("Hello admin, would you like to see a status report?")
//         } else {
//             console.log(` Hello ${user}, thank you for logging in again.`)
//         }
//     }
// }
// username=[]
// if(username.length === 0){
//     console.log("We need to find some users!")
// }


//QUESTION NUMBER 32:
// let current_user: string[] = ["Maila", "Shazia", "Shaista", "Seema", "Rehana"];
// let new_users: string[] = ["Kulsoom", "Kainat", "Aiman", "Mahnoor"];

// let current_users_lower: string[] = current_user.map(user => user.toLowerCase())

// for (let new_user of new_users) {
//     if (current_users_lower.includes(new_user.toLowerCase())) {
//         console.log(`sorry ${new_user}, that name is taken`)
//     } else {
//         console.log(`yes ${new_user}, is still in available list`)
//     }
// }



//QUESTION NUMBER 33:
// let numbers:number[] = [1,2,3,4,5,6,7,8,9];
// for(let number of numbers){
// if(number === 1){
//     console.log(`${number}st`)
// }else if (number === 2){
//     console.log(`${number}nd`)
// }else if (number === 3){
//     console.log(`${number}rd`)
// }else{
//     console.log(`${number}th`)
// }

// }


//QUESTION NUMBER 34:

// let fav_Pizza:string[] = ["pepperoni","chicken","vegetable"];

// for(let pizza of fav_Pizza){
//     console.log(pizza);
// }

// for(let pizza of fav_Pizza){
//     console.log(`I really like ${pizza} pizza`);
// }

// console.log("\nI really love pizza");


//QUESTION NUMBER 35:
// let animal: string[] = ["cat", "lion", "goat"];
// console.log("List of animals");
// for (let animals of animal) {
//     console.log(animals)
// }

// for (let animals of animal) {
//     console.log(`A ${animals}, would make a great pet!`)
// }
// console.log("\nI really love these animals");



//QUESTION NUMBER 36:

// function make_Tshirt(size:string,text:string){
// console.log(`You can order a ${size} shirt ${text}`)
// }
// make_Tshirt('large','"This is a branded T-shirt"')
// make_Tshirt('small','"it will be fit on your body"')


//QUESTION NUMBER 37:
// function makeshirt(size: string = 'large', text: string = 'i love typescript') {
//     console.log(`You have order a ${size},shirt that says ${text}`)
// }
// makeshirt();
// makeshirt('medium')

// makeshirt('small','Ineed a big shirt to wear');



// //QUESTION NUMBER 38:

// function city_country() {
//      console.log('Lahore,Pakistan');
//     console.log('Shinghai,Chaina');
//     console.log('Tokyo,France');
// }
// city_country()



// //QUESTION NUMBER 39:
// function citY(city: string, country: string) {
//     return `${city},${country}`
// }
// let city1 = citY('"Lahore', 'Pakistan"')
// let city2 = citY('"Shinghai', 'Chaina"');
// let city3 = citY('"Tokyo', 'France"');

// console.log(city1);
// console.log(city2);
// console.log(city3);


//QUESTION NUMBER 40: // ye question nhi ho raha mujhse

// function make_album(artist:string,title:string):{artist:string,title:string} {
//     const differentAlbum = {
//         artist:artist.charAt()
//     }
// }


//QUESTION NUMBER 41:

// let magicianOfPakistan = ["P K Sarkar","Shark dimond","Sultan golden","munawar khan","Irfan khan"];

//  function showMagician(magicianOfPakistan:string[]){
//      for(let i =0; i< magicianOfPakistan.length; i++) {
//       console.log(magicianOfPakistan[i].toUpperCase());
//      }
//  }
//  showMagician(magicianOfPakistan);


// //QUESTION NUMBER42:

// let magicianOfPakistan = ["PK Sarkar","Shark dimond","Sultan golden","munawar khan","Irfan khan"];

//   function showMagician(magicianOfPakistan:string[]){
//       for(let i =0; i< magicianOfPakistan.length; i++) {
//       console.log('The great '+ magicianOfPakistan[i].toUpperCase());
//      }
//  }
//  showMagician(magicianOfPakistan);


// //QUESTION NUMBER43:
// let magicianOfPakistan = ["PK Sarkar", "Shark dimond", "Sultan golden", "munawar khan", "Irfan khan"];
// console.log('Original Magicians\n');
 
// for(let name of magicianOfPakistan) {
// console.log(name)
// }
// console.log("\n")
// console.log("Great Magicians\n");


// function showMagician(magicianOfPakistan: string[]) {
//     for (let i = 0; i < magicianOfPakistan.length; i++) {
//         console.log('The great ' + magicianOfPakistan[i].toUpperCase());
//     }
    
// }
// showMagician(magicianOfPakistan);



// //QUESTION NUMBER 44:
// function sandwich(...items:string[]):void{
//     console.log("your sandwich");
//     for(let i = 0; i< items.length; i++) {
//         console.log(`${items[i]}`)
//     }
// }

// sandwich("Cheese", "Tomato", "Lettuce");
// sandwich("Chicken", "Onion", "Ketchup", "Seasoning");
// sandwich('Beef', 'Lettuce', 'Mayonnaise');



// //QUESTION NUMBER 45: // is question ko youtube ki help se kiya khud nhi aaraha tha

// type car = {
//     manufacture:string
//     model:string
//     [key:string]: any;
// }

// function creatCar(manufacture:string,model:string,optional:Record<string,any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const myCar:car =creatCar("toyota","corolla",{color:"silver",year: "2024"})
// console.log(myCar);










// //lecture 4;
// let fullName = "muhammad bilal";
// console.log(fullName);
// fullName = "ariba";
// console.log(fullName);

// let age = 20;
// let new_age:number = 20;
//const gravity = 9.8;
// let gravity = 9.8;
// gravity = 11;



















