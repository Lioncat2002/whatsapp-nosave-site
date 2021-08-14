const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });


function process(event) {
 event.preventDefault();

 const phoneNumber = phoneInput.getNumber();
 //var mobileCheck=navigator.userAgentData.mobile;
 location.href="https://api.whatsapp.com/send?phone="+phoneNumber;
 
 /*
 if (!mobileCheck) {
  location.href="https://web.whatsapp.com/send?phone="+phoneNumber+"&text&app_absent=0";
 }
else{
  location.href="https://api.whatsapp.com/send?phone="+phoneNumber;
}
*/
}
