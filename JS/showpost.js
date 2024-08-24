let entire_container = document.getElementById("Depicts-container");
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let html = ``;
posts.forEach((posts, index) => {
    html += `<div class="card"  style="max-width: 12rem; background-color: #520404;border:solid rgb(119, 6, 6) 2px;margin-top:5%">
    <img src="${posts.img_url}" class="card-img-top" alt="..." />
    <div class="card-body" >
        <div>
            <h5 class="name-user" style="color:#f7fa52;font-size:18px">${posts.name}</h5>
            <p style="color:#ffffe7;font-size:11px">${posts.timestamp}</p>
        </div>
        <p class="card-text" style="color:white">${posts.content_url}</p>
        <a href="#" class="btn btn" style:"text-align:center;border:solid 1px white"><i class="fa-solid fa-heart" style="color: #fcfdb4;"></i></a>
    </div>
</div>`;
});
entire_container.innerHTML = html;
