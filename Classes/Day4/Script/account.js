const button=document.getElementById("btn")
button.addEventListener("click",()=>{
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    fetch(" http://localhost:5503/login",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({
        id:Date.now(),
        email:email,
        password:password
    })
}).then
})
