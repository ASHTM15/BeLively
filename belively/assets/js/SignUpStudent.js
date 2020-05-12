
function SignUp() {
    name = document.getElementById("student_name").value;
    email = document.getElementById("student_email").value;
    password = document.getElementById("password").value;
    password_confirm = document.getElementById("password_confirm").value;

    if (password != password_confirm) {
        //alert("Passwords do not match");
    }

    else if (password.length < 8) {
        //this
    }

    else {

        var db = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            location.href = 'generic.html';
        })
        .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // github didn't deploy new code
                // alert(errorMessage);
                // ...
        });
    }
};