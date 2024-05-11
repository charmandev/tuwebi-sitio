function SendMail(){
    var params = {
      email_id : document.getElementById("email_id").value, 
      message : document.getElementById("message").value,
    }
    emailjs.send("service_mycz9mj", "template_sb0azkn", params).then(function(res) {
      alert("¡Hecho! " + res.status);
    });
  }