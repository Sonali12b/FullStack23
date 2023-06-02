const id =JSON.parse(localStorage.getItem("id"));
console.log(id);
const show=document.getElementById("show-details");
fetch(`http://localhost:5501/data/${id}`,{
    method:"GET",
}
)
.then((res)=>res.json())
.then((data)=>appendData(data));

function appendData(data){
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data.image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerHTML=data.title;
    const movieRating= document.createElement("p");
    movieRating.innerHTML=data.rating;
    const button=document.createElement("button");
    button.innerText="Watchlist";
    button.addEventListener('click',()=>{
        alert(`You have added ${data.title}`)
    })
    div.append(image,movieTitle,movieRating,button);
    show.append(div);
}