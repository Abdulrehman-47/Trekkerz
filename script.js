function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const service = document.querySelector('input[name="service"]:checked').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const destination = document.getElementById('destination').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Log form data to console
    console.log('Service:', service);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Destination:', destination);
    console.log('Contact Number:', contactNumber);
    console.log('Adults:', adults);
    console.log('Children:', children);

    // Check if any fields are empty
    if (!service || !checkInDate || !checkOutDate || !destination || !contactNumber || !adults || !children) {
        alert('Please fill in all fields');
        return;
    }

    // Create message
    let message = `Service: ${service}%0A`;
    message += `Check-in Date: ${checkInDate}%0A`;
    message += `Check-out Date: ${checkOutDate}%0A`;
    message += `Destination: ${destination}%0A`;
    message += `Contact Number: ${contactNumber}%0A`;
    message += `Adults: ${adults}%0A`;
    message += `Children: ${children}`;

    // WhatsApp number
    const whatsappNumber = "+923337384660"; // Replace with your WhatsApp number

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    console.log('WhatsApp URL:', whatsappURL); // Log URL to console
    window.open(whatsappURL, '_blank');
}

// FORM SECTION ENDS HERE




// auto nav close after clicking link 

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav .nav-link');
    const checkbox = document.getElementById('click');
    
    menuLinks.forEach(link => {
       link.addEventListener('click', () => {
          checkbox.checked = false; // Uncheck the checkbox to close the menu
       });
    });
 });

 // auto nav close after clicking link Ends






// car Whatsapp text 

 document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("messageInput").value;
    var phoneNumber = "+923054122637"; // Replace with the recipient's WhatsApp number

    // Construct the WhatsApp message URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
});


function bookNow(carName) {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number in international format, e.g., "1234567890"
    const message = `Hi, I would like to book the ${carName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${+923054122637}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}


// car Whatsapp text end here





