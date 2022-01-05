
function sendMail(params){
    var tempParams={
        from_name: document.getElementById('fromName').value,
        to_name: "Moayad",
        message: document.getElementById('msg').value,
    };
    emailjs.send('gmail', 'template_qan95ge', tempParams)
    .then(
        message => alert("message sent successfully")
    )
}