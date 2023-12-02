const accessKey = "N4LXBrx7j-t3CZDO50HtplUJyvQykxGCvXsqlg-kGGA"

const formSection = document.querySelector("form");
const inputValue = document.querySelector("input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector(".show-more-btn");

let input = "";
let page = 1;

formSection.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);
    page = 1;
    searchImage();
})

async function searchImage() {
    input = inputValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page == 1){
        searchResults.innerHTML = ""
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const link = document.createElement("a");
        link.href = result.links.html;
        link.target = "_blank";
        link.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(link);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

showMore.addEventListener("click", ()=>{
    searchImage();
})