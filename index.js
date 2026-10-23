

// Write your code here!
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        displayPosts(posts);
    });

function displayPosts(posts){
    posts.forEach(element => {
        const list = document.createElement("li")
        const heading = document.createElement("h1")
        
        heading.textContent = element.title
        
        const body = document.createElement("p")
        body.textContet = element.body

        list.append(body, heading)

        const unorderedList = document.querySelector("#post-list")
        
        unorderedList.appendChild(list)
    });
}





