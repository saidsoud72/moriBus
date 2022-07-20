// const formData = document.querySelector("ticketing"),
//      form =ticketing.querySelector("#ticketForm"),
//       submitInput = form[0].querySelector("input[type = 'submit']");

// function getFormData(null){
//    e.preventDefault();
    
//     var dataForm = new formData(form[0]);

//    alert(dataForm.get("personName ") + dataForm.get("personPhone ") +  dataForm.get("personTicket ")  + dataForm.get("personFrom ") + dataForm.get("personDestination ")  + dataForm.get("personPrice ") + dataForm.get("personDate ")  
//    );
// }

// document.addEventListener("DOMContentLoaded", function(){
//    submitInput.addEventListener("click",getFormData, false);

// }, false);


function formData(){
    var name = (document.getElementById("personName").value);
    var phone = (document.getElementById("personPhone").value);
    var ticket = (document.getElementById("personTicket").value);
    var from = (document.getElementById("personFrom").value);
    var destination = (document.getElementById("personDestination").value);
    var price = (document.getElementById("personPrice").value);
    var date = (document.getElementById("personDate").value);

    
    
    
    //document.getElementById("displayData").value = "\n Full Names: " + name + "<br/>" + "<br/>"  + "\n Phone Number: " + phone + "<br/>" + "<br/>"  + "\n Ticket No.: " + ticket + "<br/>" + "<br/>"  + "\n Coming From: " + from + "<br/>" + "<br/>"  + "\n Destination: " + destination + "<br/>" + "<br/>"  + "\n Ticket Price: " + price + "<br/>" + "<br/>"  + "\n Travel Date: " + date  + "<br/>" + "<br/>"   + "Thankyou for choosing GariYangu as your " ; 
    //document.getElementById("displayData").innerHTML = "\n Full Names: " + name + "<br/>" + "<br/>"  + "\n Phone Number: " + phone + "<br/>" + "<br/>"  + "\n Ticket No.: " + ticket + "<br/>" + "<br/>"  + "\n Coming From: " + from + "<br/>" + "<br/>"  + "\n Destination: " + destination + "<br/>" + "<br/>"  + "\n Ticket Price: " + price + "<br/>" + "<br/>"  + "\n Travel Date: " + date  + "<br/>" + "<br/>"   + "Thankyou for choosing GariYangu as your " ; 

    
  //document.getElementById("displayData").innerHTML = "\n Full Names: " + name + "<br/>" + "<br/>"  + "\n Phone Number: " + phone + "<br/>" + "<br/>"  + "\n Ticket No.: " + ticket + "<br/>" + "<br/>"  + "\n Coming From: " + from + "<br/>" + "<br/>"  + "\n Destination: " + destination + "<br/>" + "<br/>"  + "\n Ticket Price: " + price + "<br/>" + "<br/>"  + "\n Travel Date: " + date  + "<br/>" + "<br/>"   + "Thankyou for choosing GariYangu as your " ; 



}