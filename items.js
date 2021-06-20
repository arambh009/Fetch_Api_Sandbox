 function getText(){
     console.log('sdfa');
    fetch('sample.txt')
    .then(res=> res.text())
    .then(data=>{
        console.log(data);
        output=document.querySelector('#output')
        output.innerHTML=data;
        })
        .catch((err)=>console.log(err))
     
}
function getUsers(){
    fetch('users.json')
    .then(res=>res.json())
    .then((data)=>{
        let output='<h2 class="mb-4">Users</h2>';
        data.forEach(user => {
            output+=`
            <ul class="list-group mb-3">
                <li class="list-group-item">ID:${user.id}</li>
                <li class="list-group-item">Name:${user.name}</li>
                <li class="list-group-item">Email:${user.email}</li>

            </ul>`
            document.querySelector('#output').innerHTML=output;
        });
    })
}

function getApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
        let output='<h2 class="mb-4">Posts</h2>';
        data.forEach(posts => {
            output+=`
            <div class="card card-body mb-3">
                <h3>${posts.title}</h3>
                <p>${posts.body}</p>
            </div>
            `;
            document.querySelector('#output').innerHTML=output;
        });
    })
}

function addPosts(e){
    e.preventDefault();
    let title=document.getElementById('title').value;
    let body=document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-type':'application/json'
        },
        body : JSON.stringify({title:title,body:body})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

 document.querySelector('#getText').addEventListener('click',getText);
 document.querySelector('#getUsers').addEventListener('click',getUsers);
 document.querySelector('#getApi').addEventListener('click',getApi);
 document.querySelector('#addpost').addEventListener('submit',addPosts);