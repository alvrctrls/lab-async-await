

// Write your code here!
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
}

fetchPosts();

function displayPosts(posts) {
    posts.forEach(element => {
        const list = document.createElement("li");
        const heading = document.createElement("h1");

        heading.textContent = element.title;

        const body = document.createElement("p");
        body.textContent = element.body;

        list.append(heading, body);

        const unorderedList = document.querySelector("#post-list");

        unorderedList.appendChild(list);
    });
}





