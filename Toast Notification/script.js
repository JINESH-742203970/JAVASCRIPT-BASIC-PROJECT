let toastBox=document.getElementById('toastBox');
console.log(toastBox);
let buttons=document.getElementById('successBtn');
console.log(buttons);
buttons.addEventListener('click',()=>{
    let toast=document.createElement('div');
    console.log("Khatushyam");
    toast.innerHTML='success';
    toast.classList.add('toast');
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
})
