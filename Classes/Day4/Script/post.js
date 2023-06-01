const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const image = document.getElementById("imageurl").value;
  const title = document.getElementById("title").value;
  const rating = document.getElementById("rate").value;
  if (image != "" || title != "" || rating!="") {
    fetch(" http://localhost:5501/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        image: image,
        title: title,
        rating:rating
      }),
    })
      .then(res => res.json)
      .then(data => {
        console.log(data);
        // alert("Added successfully!!");
        window.location.href='./index.html'
      });
  } else {
    alert("Please fill up the form!!");
  }
});
