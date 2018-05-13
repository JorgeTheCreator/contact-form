// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8CnsZAtV60JlVpaN9x9xvY0lxZbVKHUU",
    authDomain: "contact-form-cd77f.firebaseapp.com",
    databaseURL: "https://contact-form-cd77f.firebaseio.com",
    projectId: "contact-form-cd77f",
    storageBucket: "contact-form-cd77f.appspot.com",
    messagingSenderId: "734609651550"
  };
  firebase.initializeApp(config)

// reference messages collection
const messagesRef = firebase.database().ref("messages")
//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm)

//prevent the default behavior
//submit form
function submitForm(e){
  e.preventDefault();


  //get values
  const name = getInputVal("name")
  const company = getInputVal("company");
  const email = getInputVal("email");
  const phone = getInputVal("phone");
  const message = getInputVal("message");
  saveMessage(name, company, email, phone, message);
  //show alert
  document.querySelector('.alert').style.display="block"
  //hide alert after 3 secs
  setTimeout(()=>{
    document.querySelector('.alert').style.display="none"
  },4000)
  document.getElementById('contactForm').reset();
}

//function to get form value
 function getInputVal(id){
   return document.getElementById(id).value
 }


 // save messages to firebase
 function saveMessage(name, company, email, phone, messages){
   const newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
 }
