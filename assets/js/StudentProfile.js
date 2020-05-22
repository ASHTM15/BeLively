// JavaScript source code
//student profile
var db = firebase.firestore();
const profilelist = document.querySelector('#profile_user');
function getUserProfile() {
    //document.getElementById("profilelist").reset(); 
    var user_email = localStorage.getItem("user_email");
    
    db.collection("Students").doc(user_email).collection("Profile").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            
            renderProfile(doc);
            
            console.log(doc.id);

        })
    }).then(function () {
    })
        .catch(function (error) {
            console.error("Error Grabbing Data: ", error);
        });
};

/*
 *  //get the student information from their doc
           var  student_name = doc.data().Name;
            var student_email = doc.data().Email;
            var student_number = doc.data().Number;
            var student_address = doc.data().Address;
            var student_Instructor = doc.data().Instructor;
            var student_InstructorsEmail = doc.data().Instructor_Email;

*/

function renderProfile(doc)
{

    let list = document.createElement('dt');
    list.setAttribute('data-id', doc.id);
    list.setAttribute('id', 'profilelist');
    list.setAttribute('style', 'font-size:38px');
    list.textContent = "Name: " + doc.data().Name;
    profilelist.appendChild(list);

    let list1 = document.createElement('dt');
    list1.setAttribute('data-id', doc.id);
    list1.setAttribute('id', 'profilelist');
    list1.setAttribute('style', 'font-size:38px');
    list1.textContent = "Email: " + doc.data().Email;
    profilelist.appendChild(list1);

    let list2 = document.createElement('dt');
    list2.setAttribute('data-id', doc.id);
    list2.setAttribute('id', 'profilelist');
    list2.setAttribute('style', 'font-size:38px');
    list2.textContent = "Number: " + doc.data().Number;
    profilelist.appendChild(list2);

    let list3 = document.createElement('dt');
    list3.setAttribute('data-id', doc.id);
    list3.setAttribute('id', 'profilelist');
    list3.setAttribute('style', 'font-size:38px');
    list3.textContent = "Address: " + doc.data().Address;
    profilelist.appendChild(list3);

    let space = document.createElement('h1');
    profilelist.appendChild(space);

    let list4 = document.createElement('dt');
    list4.setAttribute('data-id', doc.id);
    list4.setAttribute('id', 'profilelist');
    list4.setAttribute('style', 'font-size:38px');
    list4.textContent = "Instructor: " + doc.data().Instructor;
    profilelist.appendChild(list4);

    let list5 = document.createElement('dt');
    list5.setAttribute('data-id', doc.id);
    list5.setAttribute('id', 'profilelist');
    list5.setAttribute('style', 'font-size:38px');
    list5.textContent = "Instructor Email: " + doc.data().Instructor_Email;
    profilelist.appendChild(list5);

}

function DeleteProfile() {
    document.getElementById("profilelist").reset();
    window.location.href = 'my_student_profile.html';
};

function editUserProfile() {
    var db = firebase.firestore();
    var email = localStorage.getItem("user_email");

    name = document.getElementById("student_name").value;
    address = document.getElementById("address").value;
    number = document.getElementById("number").value;
    instructor = document.getElementById("instructor").value;
    instructor_email = document.getElementById("instructor_email").value;

    if (name && address && number && instructor && instructor_email) {
        db.collection("Students").doc(email).collection("Profile").doc(name).update({
            Name: name,
            Number: number,
            Address: address,
            Instructor: instructor,
            Instructor_Email: instructor_email
        })
            .then(function () {
                //document.getElementById("profilelist").reset();
                location.href = 'my_student_profile.html';

            })
            .catch(function (error) {

                console.error("Error creating database entry: ", error);
            });
    }
    else {
        alert("Please Fill Out All Fields");
    }
};