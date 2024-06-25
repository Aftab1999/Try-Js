console.log('This is my tutorial 42');

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");

// Get Data 

function getData(){
    console.log("Started getData")
    url = "https://api.tvmaze.com/search/shows?q=all";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}

console.log("before runing getData");
getData()
console.log("After runing getData");

// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// console.log("Before running getData")
// getData()
// console.log("After running getData")
// postData()








