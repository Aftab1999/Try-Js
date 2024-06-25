// record = [10,4,30,45,90,5];

// console.log(record);
// max = -Infinity;
// last = record.lenght - 1;
// for (i=0; i<=last;i++){
//     if(record[i] > max ){
//         max = record[i];

//     }
// }
// console.log(max);
// var myFriends = ['Sahil', 'altaf', 'Azim','Sohle']
// console.log(myFriends[myFriends.length -1]);
// for (var i=0; i<myFriends.length; i++){
//  console.log(myFriends[i]);
//  }
// var myFriends = ['Sahil', 'altaf', 'Azim','Sohle']
// for(let elements of myFriends){
//     console.log(elements);
// }



// // Array.prototype.forEach() 🙋‍♂️
// // Calls a function for each element in the array.

// var myFriends = ['Sahil', 'altaf', 'Azim','Sohle']
// myFriends.forEach(function(element, index, array){
//     console.log(element + " index : " + index + " " + array  )

// });
// myFriends.forEach((element, index, array ) =>{
//     console.log(element + " index : " + index + " " + array  )

// });

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// // console.log(myFriendNames.lastIndexOf("thapa", 4));

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// // console.log(myFriendNames.includes("bahadur"));








var ages = [10,28,14,20];
// ages.sort();
console.log(ages);

var b = ages.filter(checkAdult);

function checkAdult(age){
    return age >= 18;
}
console.log(b);




