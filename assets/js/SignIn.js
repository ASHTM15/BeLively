var main_email;

function SignIn() {
    email = document.getElementById("sign_in_email").value;
    password = document.getElementById("sign_in_password").value;
    SetEmail(email);
    var type;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
            var db = firebase.firestore();
            db.collection("Instructors").doc(email).get().then(function (doc) {
                if (doc.data().Type == "Instructor") {
                    location.href = "instructor_homepage.html";
                }
            });

            db.collection("Students").doc(email).get().then(function (doc) {
                if (doc.data().Type == "Student") {
                    location.href = "Student_homepage.html";
                }
            });

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
    });
};

function SetEmail(email) {
    main_email = email;
    localStorage.setItem("user_email", main_email);
};

function Logout() {
    localStorage.clear();
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

    location.href = "index.html";
};
