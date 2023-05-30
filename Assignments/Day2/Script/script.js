const button1= document.getElementById('button-box1')
const button2= document.getElementById('button-box2');
const button3= document.getElementById('button-box3');
const textarea=document.getElementById('content');
button1.addEventListener('click',()=>{
    let div=document.getElementById('showable');
    let image=document.createElement('img');
    image.src='https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/356100/356129.6.jpg';
    image.style.height='200px';
    div.appendChild(image);
})

const table=document.querySelector("tbody");
button2.addEventListener("click",()=>{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText='2023';
    const td2=document.createElement("td");
    td2.innerText="Women's T20 World Cup";
    const td3=document.createElement("td");
    td3.innerText="South Africa";
    const td4=document.createElement("td");
    td4.innerText="Australia";
    tr.append(td1,td2,td3,td4);
    table.append(tr);
})
button3.addEventListener("click",()=>{
    window.location.reload();
})
