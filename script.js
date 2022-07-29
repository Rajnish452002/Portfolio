console.log("running ")

document.querySelector('.cros').style.display='none';
document.querySelector('.hamberger').addEventListener("click", ()=>{
    document.querySelector('.side').classList.toggle('sidebargo');
})