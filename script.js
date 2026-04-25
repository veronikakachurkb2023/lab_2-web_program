const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem("systemInfo", JSON.stringify(browserInfo));

const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));

const footer = document.querySelector("footer");

footer.innerHTML += `
    <div class="system-info">
        <p><strong>Browser:</strong> ${savedInfo.userAgent}</p>
        <p><strong>Platform:</strong> ${savedInfo.platform}</p>
        <p><strong>Language:</strong> ${savedInfo.language}</p>
    </div>
`;
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("reviews-container");

        data.forEach(comment => {
            const div = document.createElement("div");
            div.classList.add("review-card");

            div.innerHTML = `
                <p><strong>${comment.name}</strong></p>
                <p>${comment.body}</p>
            `;

            container.appendChild(div);
        });
    })
    .catch(error => console.error("Error:", error));
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

setTimeout(() => {
    modal.classList.add("show");
}, 60000);

const toggleBtn = document.getElementById("theme-toggle");

function setThemeByTime() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 7 && hours < 21) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
}

// автоматично при завантаженні
setThemeByTime();

// ручне перемикання
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});