// var params;

// function getData() {
  
//   var orders = sessionStorage.getItem('Funiture-cart');
//   params = {product: JSON.stringify(orders)};
// }

function sendMail() {


  var orders = sessionStorage.getItem("Funiture-cart");
  var params = {
    // ...params,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value+"abcdef",
    product: orders,
    
    

  };
  // console.log(params);
  // sessionStorage.setItem('Data',params.items);


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



