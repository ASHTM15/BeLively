// JavaScript source code
//student profile
var db = firebase.firestore();
const profinstruct = document.querySelector('#profile_user_instructor');
function getInstructorProfile() {
    var user_email = localStorage.getItem("user_email");
    
    db.collection("Instructors").doc(user_email).collection("Profile").get().then(snapshot => {
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

function renderProfile(doc)
{

    let list = document.createElement('dt');
    list.setAttribute('data-id', doc.id);
    list.setAttribute('id', 'profinstruct');
    list.setAttribute('style', 'font-size:38px');
    list.textContent = "Name: " + doc.data().Name;
    profinstruct.appendChild(list);

    let list1 = document.createElement('dt');
    list1.setAttribute('data-id', doc.id);
    list1.setAttribute('id', 'profinstruct');
    list1.setAttribute('style', 'font-size:38px');
    list1.textContent = "Email: " + doc.data().Email;
    profinstruct.appendChild(list1);

    let list4 = document.createElement('dt');
    list4.setAttribute('data-id', doc.id);
    list4.setAttribute('id', 'profinstruct');
    list4.setAttribute('style', 'font-size:38px');
    list4.textContent = "ID: " + doc.data().ID;
    profinstruct.appendChild(list4);

    let list2 = document.createElement('dt');
    list2.setAttribute('data-id', doc.id);
    list2.setAttribute('id', 'profinstruct');
    list2.setAttribute('style', 'font-size:38px');
    list2.textContent = "Number: " + doc.data().Number;
    profinstruct.appendChild(list2);

    let list3 = document.createElement('dt');
    list3.setAttribute('data-id', doc.id);
    list3.setAttribute('id', 'profinstruct');
    list3.setAttribute('style', 'font-size:38px');
    list3.textContent = "Address: " + doc.data().Address;
    profinstruct.appendChild(list3);


}

function DeleteProfile() {
    document.getElementById("profinstruct").reset();
    window.location.href = 'my_instructor_profile.html';
};

function editInstructorProfile() {
    var db = firebase.firestore();
    //local Storage
    var email = localStorage.getItem("user_email");
   

    name = document.getElementById("name_instructor").value;
    address = document.getElementById("address").value;
    number = document.getElementById("number").value;
    id = document.getElementById("id").value;

    if (name && address && number && id) {
        db.collection("Instructors").doc(email).collection("Profile").doc(id).update({
            Name: name,
            Number: number,
            Address: address
        })
            .then(function () {
                location.href = 'my_instructor_profile.html';

            })
            .catch(function (error) {

                console.error("Error creating database entry: ", error);
            });
    }
    else {
        alert("Please Fill Out All Fields");
    }
};