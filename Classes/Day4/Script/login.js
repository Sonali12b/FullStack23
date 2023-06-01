const button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    fetch("http://localhost:5503/login",{
        method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        const user=data.find((item)=>item.email===email.value && item.password===password.value);
        console.log(user);
        if(user){
            alert('Logged in Successfully');
        }
        else{
            window.location.href="./index.html"
        }
    });
    console.log(data);
})