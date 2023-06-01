const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const image = document.getElementById("imageurl").value;
  const food = document.getElementById("food").value;
  const desc = document.getElementById("desc").value;
  if (image != "" || title != "" || desc!="") {
    fetch(" http://localhost:5510/dish", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        image: image,
        food: food,
        desc:desc
      }),
    })
      .then(res => res.json)
      .then(data => {
        console.log(data);
        // alert("Added successfully!!");
        window.location.href='./restaurant.html'
      });
  } else {
    alert("Please fill up the form!!");
  }
});
