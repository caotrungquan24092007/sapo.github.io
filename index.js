var orders;

function sendMail() {

  let orders = sessionStorage.getItem("Furniture-cart")
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    product: orders,

  };

  const serviceID = "service_ua2pklx";
  const templateID = "template_3cp7zy7";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{  
        // let data = sessionStorage.getItem("key");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Gửi thành công !!!")

    })
    .catch(err=>console.log(err));

}

function sendMail2() {

  // let orders = sessionStorage.getItem("Furniture-cart")
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    // product: orders,

  };

  const serviceID = "service_ua2pklx";
  const templateID = "template_vfnq5ci";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{  
        // let data = sessionStorage.getItem("key");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Gửi thành công !!!")

    })
    .catch(err=>console.log(err));

}



