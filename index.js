function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    // product: document.getElementById("product").value,
    // qty: document.getElementById("qty").value,

  };

  const serviceID = "service_80qnrqm";
  const templateID = "template_3cp7zy7";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{  
        let data = sessionStorage.getItem("key");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        // document.getElementById("product").value = "";
        // document.getElementById("qty").value = "";
        console.log(res);
        alert("Gửi thành công !!!")

    })
    .catch(err=>console.log(err));

}

