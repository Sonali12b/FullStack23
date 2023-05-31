const data=[
    {
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    },
    {
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    },
    {
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    },
    {
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    },{
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    },
    {
        image:"https://www.pinkvilla.com/images/2023-02/1675757339_kim-da-mi-1432x2048.jpeg",
        title:"Soulmate",
        rating:6
    }
]
const movie_box= document.getElementById("show-movie");
// data.map((item)=>{
//     const div=document.createElement("div");
//     const image=document.createElement("img");
//     image.src=el.image;

// })

for(let i=0;i<data.length;i++){
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data[i].image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerHTML=data[i].title;
    const movieRating= document.createElement("p");
    movieRating.innerHTML=data[i].rating;
    div.append(image,movieTitle,movieRating);
    movie_box.append(div);

}