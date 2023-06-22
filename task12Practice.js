//Follow as youtuber Does

//Promise.all
// const promise1 = Promise.resolve('Hello WOrld');
// const Promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, 'Goodbye')
// });

// Promise.all([promise1,promise2,promise3]).then((values)=>{
//     console.log(values);
// })


const user = [
    {title: 'POST1'},
     
];

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let myTime = new Date();
            resolve(myTime);
        }, 1000);
    })
}


function printPost(){
    user.forEach((mes)=>{
        console.log(mes.title)
    })
}


function createPost(post){
    return new Promise((resolve, reject)=>{
        user.push(post);
        resolve(post)
    })
}

function deletePost(){
    return new Promise((resolve, reject)=>{
        if(user.length > 0){
            const PoppedElement = user.pop();
            resolve(PoppedElement);
        }else{
            reject('Error')
        }
    })
}


let lastActivityTime;
Promise.all([createPost({title:'POST2'}),updateLastUserActivityTime()])
    .then((values)=>{
        lastActivityTime = values[1];
        printPost();
        console.log(`The first new post is created at ${lastActivityTime}`);
    })
    .then(()=>{
        deletePost().then((deletedPost)=>{
            console.log(`Note that the ${deletedPost.title} is deleted`)
        })
    })
    .then(()=>{
        Promise.all([createPost({title:'POST3'}),updateLastUserActivityTime()])
           .then((values)=>{
            lastActivityTime = values[1];
            printPost()
            console.log(`The Second new post is created at ${lastActivityTime}`);
           })
           .then(()=>{
            deletePost().then((deletedPost)=>{
                console.log(`Note that the ${deletedPost.title} is also deleted`)
            })
        })

        
           
    })
    
    .catch((msg)=> console.log('Error'));


