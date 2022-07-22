
function formData(){

    
    var name = (document.getElementById("personName").value);
    var phone = (document.getElementById("personPhone").value);
    var ticket = Math.floor(Math.random() *100000000);
    //var ticket = (document.getElementById("personTicket").value);
    var from = (document.getElementById("personFrom").value);
    var destination = (document.getElementById("personDestination").value);
    var price = (document.getElementById("personPrice").value);
    var date = (document.getElementById("personDate").value);

    
    document.getElementById("nam").innerHTML="Full Name: " + name;
    document.getElementById("phon").innerHTML="Phone No: " + phone;
    document.getElementById("ticke").innerHTML="Ticket No: " + ticket;
    document.getElementById("fro").innerHTML="Coming From: " + from;
    document.getElementById("destinatio").innerHTML="Destination: " + destination;
    document.getElementById("pric").innerHTML="Ticket Price: " + price;
    document.getElementById("dat").innerHTML="Travel Date: " + date;
    
    alert("Dear " + name+ " thankyou for choosing gariYangu, your ticket details will be displayed below the input form. We wish you a safe journey." );


    
   


}