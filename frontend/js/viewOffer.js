 // Get URL parameters
 const params = new URLSearchParams(window.location.search);


document.addEventListener("DOMContentLoaded", () => {
   
    // Extract data from URL parameters
    const offerData = {
        requestId: params.get("requestId"),
        serviceName: params.get("serviceName"), // Using serviceName as the request name
        requestDescription: params.get("requestDescription"),
        technicianId: params.get("technicianId"),
        technicianName: params.get("technicianName"),
        offerDemand: params.get("offerDemand"),
        offerDescription: params.get("offerDescription") || "Not Provided", // Default to "Not Provided" if missing
    };

    sessionStorage.setItem("offerData", JSON.stringify(offerData));

    console.log(offerData);
    document.getElementById("request-name").textContent = offerData.serviceName;
    document.getElementById("request-description").textContent = offerData.requestDescription;
    document.getElementById("technician-name").textContent = offerData.technicianName;
    document.getElementById("offer-demand").textContent = offerData.offerDemand;
    document.getElementById("offer-description").textContent = offerData.offerDescription;

    const technicianProfileUrl = `viewTechnician.html?id=${offerData.technicianId}`;
    document.getElementById("technician-name").href = technicianProfileUrl; // Set href to direct to technician profile page
  });
  
  // Redirect function for the RETURN button
  function redirectToOffersPage() {
    window.location.href = "./offer.html";
  }
  
  function confirmAction(action) {
    const popupMessage = action === 'ACCEPT'
        ? "Are you sure you want to accept this offer?"
        : "Are you sure you want to reject this offer?";

    // Set the message in the popup
    document.getElementById("popup-message").textContent = popupMessage;

    // Show the popup
    document.getElementById("confirmation-popup").style.display = "block";
}

// Handle confirmation (Yes button)
 function handlePopupConfirm() {
    window.location.href = `invoiceForwarded.html?${params.toString()}`;
}


function handlePopupCancel() {
    // Close the popup
    document.getElementById("confirmation-popup").style.display = "none";
}