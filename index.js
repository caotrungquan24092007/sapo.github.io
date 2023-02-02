const orders = sessionStorage.getItem('Funiture-cart');
document.getElementById('user_form').addEventListener('click',(e) => {
    e.preventDefault()
    document.getElementById('user_form').removeEventListener('click')
})
function sendMail() {
  
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    
    
    // product: document.getElementById("product").value,
    // qty: document.getElementById("qty").value,

  };
  console.log(orders.items);
  const serviceID = "service_6brmgh5";
  const templateID = "template_8nnbcz5";

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

