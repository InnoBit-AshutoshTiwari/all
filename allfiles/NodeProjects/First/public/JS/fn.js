alert("ji")
const submitBtn= document.getElementById('submitBtn')

const getInfo=(event)=>{
    event.preventDefault();
    alert("hello")
}

submitBtn.addEventListener('click',getInfo)