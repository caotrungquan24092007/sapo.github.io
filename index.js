// var params;

// function getData() {

// }

var kkk = (sessionStorage.getItem("key") || []).reduce((prev, curr) => {
  return prev + curr.product + ", qty: " + curr.qty + "; ";
}, "")

function sendMail() {

  console.log(kkk)
  var orders = sessionStorage.getItem("Funiture-cart");
  var params = {
    // ...params,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value+kkk,
    product: orders,
    
    

  };
  // kkk = sessionStorage.getItem("key").reduce((prev, curr) => {
  //   return prev + curr.product + ", qty: " + curr.qty + "; ";
  // }, "");
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



