const loadComments = () => {

    const url = ("https://jsonplaceholder.typicode.com/comments");
    fetch(url)
    .then(res => res.json())
    .then(data => showComments(data))
}



// {
//     "postId": 100,
//     "id": 497,
//     "name": "doloribus dolores ut dolores occaecati",
//     "email": "Dolly@mandy.co.uk",
//     "body": "non dolor consequatur\nlaboriosam ut deserunt autem odit\nlibero dolore non nesciunt qui\naut est consequatur quo dolorem"
// }




const showComments = (comments) => {

    const commentsContainer =document.getElementById("comments-container");

    commentsContainer.innerHTML = ""

    comments.forEach(comment => {
        // console.log(comment);
        
        const div = document.createElement("div");
        div.innerHTML = `
        
            <h1>${comment.name}</h1>

            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
        
        `
        commentsContainer.appendChild(div)
    });
}







loadComments();