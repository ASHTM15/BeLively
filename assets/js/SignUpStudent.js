var main_email;

function SignUp() {

    name = document.getElementById("student_name").value;
    email = document.getElementById("student_email").value;
    password = document.getElementById("password").value;
    password_confirm = document.getElementById("password_confirm").value;

    if (password != password_confirm) {
        alert("Passwords do not match");
    }

    else if (password.length < 8) {
        alert("Password not long enough");
    }

    else {

        var db = firebase.firestore();
        SetEmail(email);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                
            })

            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // github didn't deploy new code
                alert(errorMessage);
                // ...
            });
        db.collection("Students").doc(email).set({
            Type: "Student"
        })
        .then(function () {

        })
        .catch(function (error) {
            console.error("Error creating database entry: ", error);
        });

        db.collection("Students").doc(email).collection("Profile").doc(name).set({
            Name: name,
            Email: email,
            Number: "",
            Address: ""
        })
            .then(function () {
                window.location.href = 'student_homepage.html';
            })
            .catch(function (error) {
                console.error("Error creating database entry: ", error);
         });

                
    }
};

function SetEmail(email) {
    main_email = email;
    localStorage.setItem("user_email", main_email);
};
