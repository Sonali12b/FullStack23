const data=[
    {
        image:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
        food:"Biryani",
        desc:"Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes."

    },
    {
        image:"https://realhousemoms.com/wp-content/uploads/One-Pot-Alfredo-Pasta-RECIPE-CARD2.jpg",
        food:"Pasta",
        desc:"Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes."
    },
    {
        image:"https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
        food:"Egg roll",
        desc:"Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes."
    },
    {
        image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/paneer-sandwich-recipe.jpg.webp",
        food:"Paneer Sandwich",
        desc:"Biryani is a mixed rice dish originating in South Asia. It is made with Indian spices, vegetables, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes."
    }
]
const food_box= document.getElementById("show-movie");
data.map((item)=>{
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=item.image;
    image.style.height="200px";
    image.style.width="270px";

    const movieTitle=document.createElement("h3");
    movieTitle.innerHTML=item.food;
    const foodDesc= document.createElement("p");
    foodDesc.innerHTML=item.desc;
    foodDesc.id="desc";
    const button1=document.createElement("button");
    button1.innerText="Show more";
    button1.addEventListener('click',()=>{
        if(foodDesc.style.display==="none")
        {
            foodDesc.style.display="block";
        }
        else{
            foodDesc.style.display="block";
        }
    });
    const button2=document.createElement("button");
    button2.innerText="Show less";
    button2.addEventListener('click',()=>{
        foodDesc.style.display="none";
    });
    div.append(image,movieTitle,foodDesc,button1,button2);
    food_box.append(div);
})

