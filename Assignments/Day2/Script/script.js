const button1= document.getElementById('button-box1')
const button2= document.getElementById('button-box2');
const button3= document.getElementById('button-box3');
const textarea=document.getElementById('content');
button1.addEventListener('click',()=>{
    let div=document.getElementById('showable');
    let image=document.createElement('img');
    image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s';
    div.appendChild(image);
})
// button2.addEventListener('click',()=>{
//     textarea.innerText("This is my text")
// })
const table=document.querySelector("tbody");
button2.addEventListener("click",()=>{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText='1';
    const td2=document.createElement("td");
    td2.innerText="Sonali Bhatta";
    const td3=document.createElement("td");
    td3.innerText="Female";
    tr.append(td1,td2,td3);
    table.append(tr);
})