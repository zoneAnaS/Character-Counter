const textareaE = document.getElementById("textarea");

textareaE.addEventListener("keyup", ()=>{
        setInterval(()=>{
            update();
        },300)
            
})
update();

function update(){
    document.getElementById("totalCount").innerHTML=textareaE.value.length;
    document.getElementById("remainingCount").innerHTML=textareaE.getAttribute("maxlength")-textareaE.value.length;
}