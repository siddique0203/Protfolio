document.getElementById("appointment").addEventListener("submit", function (e) {
    e.preventDefault();
    let randomInt = Math.floor(Math.random() * 9000) + 1000;
    alert(`Taken Appointment, Token No: ${randomInt}`);
    window.location.href = "Two.html"
    
});

document.getElementById("GO").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="One.html"
});
