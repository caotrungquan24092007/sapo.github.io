var orders;
var count;
document.querySelector(".contact__form").addEventListener("submit", (e) => {
  e.preventDefault();
});
function sendMail() {

  window.onload = function() {
  document.getElementById("count").innerHTML = count;
  } 
  let orders = sessionStorage.getItem("Furniture-cart");
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    product: orders,

  };

  const serviceID = "service_bzdq81o";
  const templateID = "template_d3kk2ps";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{  
        // let data = sessionStorage.getItem("key");
        alert("Gửi thành công !!!")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";


        console.log(res);
        

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
  const serviceID = "service_bzdq81o";
  const templateID = "template_twee7m9";

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



