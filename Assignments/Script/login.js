const button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const email= document.getElementById("email");
    const password= document.getElementById("password");
    fetch("http://localhost:5511/login",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((login)=>{
        console.log(login);
        const user=login.find((item)=>item.email===email.value && item.password===password.value);
        console.log(user);
        if(user){
            window.location.href="./restaurant.html"
        }
        else{
            alert("Enter correct credentials!!")
        }
    });
    // console.log(data);
})