function sendMail(){
    var params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value       
    };
    const serviceID="service_bdaqpmv";
    const templateID ="template_k18u4tn";
    emailjs.send(serviceID,templateID,params).then(
        res=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("your messege sent succesfuly")
        })

        .catch((err)=>console.log(err));


}