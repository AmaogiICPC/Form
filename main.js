// Your web app's Firebase configuration
var firebaseConfig = {

	// YOUR API KEY //

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messageRef = firebase.database().ref('message');

//Code Starts
document.getElementById('contact_form').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var msg = getInputVal('msg');

    saveMessage(name, email, msg);

    //Show COnfirmation
    alert("You Message Has Been Submitted");      
}

function getInputVal(id){   // For Form Values
    return document.getElementById(id).value;
}

function saveMessage(name, email, msg){
    var newMessageRef = messageRef.push();

    newMessageRef.set({
        name : name,
        email : email,
        msg : msg
    });
}