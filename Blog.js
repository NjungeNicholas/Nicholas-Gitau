document.addEventListener("DOMContentLoaded", function () {
    loadPosts();
});
function loadPosts () {
    const postsContainer = document.getElementById("posts");

    // Fetch the XML file
    fetch("posts.xml")
        .then(response => response.text())
        .then(data => {
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
                const postElement = `
                    <div class="post">
                        <h2><a href = ${title}>${title}</a></h2>
                        <p><em>${date}</em></p>
                        <p>${content}</p>
                    </div>
                `;
                postsContainer.innerHTML += postElement;
            }
        })
        .catch(error => {
            postsContainer.innerHTML = "<p>Failed to load posts.</p>";
            console.error(error);
        });
};
