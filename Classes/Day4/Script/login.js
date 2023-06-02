const button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    fetch("http://localhost:5503/login",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((login)=>{
        console.log(login);
        const user=login.find((item)=>item.email===email.value && item.password===password.value);
        console.log(user);
        if (user) {
            localStorage.setItem("token",JSON.parse(Date.now()));
            alert("Logged in Successfully");
            window.location.href = "./index.html";
          } else {
            document.getElementById("error").innerText = "Invalid credentials!";
          }
    
    });
    // console.log(data);
})