
const loadPost = () => {
    
    const url = ("https://jsonplaceholder.typicode.com/posts");
    fetch(url)
    .then(res => res.json())
    .then(json => displayPost(json) )
}




// {
//     "userId": 9,
//     "id": 83,
//     "title": "odit et voluptates doloribus alias odio et",
//     "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
// }





const displayPost = (posts)=>{

    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ''

    posts.forEach(post => {
        

        const postCard = document.createElement ("div");

        postCard.innerHTML = `

            <div class="post-card">
            <h1>${post.title}</h1>
            <p> ${post.body}</p>
            </div>
        
        `

        postContainer.appendChild(postCard)
        
    });

}

loadPost()