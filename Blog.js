document.addEventListener("DOMContentLoaded", function() {
    loadPosts();
});

function loadPosts() {
    const postsContainer = document.querySelector(".posts");

    // Fetch the XML file
    fetch("posts.xml")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Data loaded:", data);
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "text/xml");
            const posts = xml.getElementsByTagName("post");

            // Clear loading message
            postsContainer.innerHTML = "";

            // Loop through each post and display it
            for (let post of posts) {
                const title = post.getElementsByTagName("title")[0].textContent;
                const date = post.getElementsByTagName("date")[0].textContent;
                const content = post.getElementsByTagName("content")[0].textContent;

                // Create a blog post element
                const postElement = document.createElement("div");
                postElement.className = "post";

                const titleElement = document.createElement("h2");
                const titleLink = document.createElement("a");
                titleLink.href = "#"; // Update this to the actual link if needed
                titleLink.textContent = title;
                titleElement.appendChild(titleLink);

                const dateElement = document.createElement("p");
                dateElement.innerHTML = `<em>${date}</em>`;

                const contentElement = document.createElement("p");
                contentElement.textContent = content;

                postElement.appendChild(titleElement);
                postElement.appendChild(dateElement);
                postElement.appendChild(contentElement);

                postsContainer.appendChild(postElement);
            }
        })
        .catch(error => {
            postsContainer.innerHTML = "<p>Failed to load posts.</p>";
            console.error('Error loading posts:', error);
        });
}
