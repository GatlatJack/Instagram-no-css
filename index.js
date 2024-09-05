document.getElementById("new").innerHTML="<h1>This was done by Ramazani</h1>";

// A function

let postValue;
function onPostChangehandler(event) {
    postValue = event.target.value
}

const allPosts =[]

function onPostSubmitHandler(event) {
    event.preventDefault()
    const newPost = {
        post: postValue,
        id: Math.random(),
        created: new Date()
    }
    allPosts.push(newPost)
    init()
}

function init(){
document.getElementById("posts").innerHTML = allPosts.map(post => {
    return `
    <div>
    <p>${post.post}</p>
    <p>${post.created}</p>
    </div>
    `
}).join('')
}

init()