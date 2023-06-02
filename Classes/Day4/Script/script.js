// const data=[
//     {
//         image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
//         title:"Soulmate",
//         rating:6
//     },
//     {
//         image:"https://m.media-amazon.com/images/M/MV5BNjIwOTkxZGItYmU2YS00MGIyLWEyZDItYzBjZjUxZmNjY2M3XkEyXkFqcGdeQXVyMTA0MzA1MzQy._V1_FMjpg_UX1000_.jpg",
//         title:"Recalled",
//         rating:6
//     },
//     {
//         image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
//         title:"Soulmate",
//         rating:6
//     },
//     {
//         image:"https://kdramadiary.com/wp-content/uploads/2023/02/Soulmate-kdramadiary-1.jpg",
//         title:"Soulmate",
//         rating:6
//     },{
//         image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
//         title:"Soulmate",
//         rating:6
//     },
//     {
//         image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
//         title:"Soulmate",
//         rating:6
//     }
// ]
fetch(" http://localhost:5501/data",{
    method:"GET"
}).then((response)=>response.json())
.then((data)=>{
    console.log(data);
    
const movie_box= document.getElementById("show-movie");


for(let i=0;i<data.length;i++){
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data[i].image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerHTML=data[i].title;
    const movieRating= document.createElement("p");
    movieRating.innerHTML=data[i].rating;
    const updatebtn=document.createElement("button");
    updatebtn.id="up-btn"
    updatebtn.innerText="Update";
    updatebtn.addEventListener('click',()=>{
        const upd_title=prompt("Enter the new title:");
        const upd_obj={
            image: data[i].image,
            title: upd_title,
            rating:data[i].rating
        };
        fetch(`http://localhost:5501/data/${data[i].id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(upd_obj),
        })
        .then((response)=>response.json())
        .then((data)=>alert("Updated successfully"));
    });
    const deletebtn=document.createElement("button");
    deletebtn.id="up-btn"
    deletebtn.innerText="Delete";
    deletebtn.addEventListener('click',()=>{
        fetch(`http://localhost:5501/data/${data[i].id}`,{
            method:"delete",
        })
        .then((response)=>response.json())
        .then((data)=>alert("Deleted successfully"));
    });
    const button=document.createElement("button");
    button.innerText="Watchlist";
    button.addEventListener('click',()=>{
        alert(`You have added ${data[i].title}`)
    })
    const button1=document.createElement("button");
    button1.innerText="Select";
    button1.addEventListener('click',()=>{
        localStorage.setItem("id",JSON.stringify(data[i].id))
        window.location.href="./details.html"
        // alert(`You have selected on ${data[i].title}`)
    })
    div.append(image,movieTitle,movieRating,button,updatebtn,deletebtn,button1);
    movie_box.append(div);
}
});

