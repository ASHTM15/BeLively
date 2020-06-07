const video_feed = document.querySelector('#videos');

function renderVideos(doc) {
    let div = document.createElement('div');

    let h2 = document.createElement('h2');
    h2.textContent = doc.data().Video_Name;

    let h3 = document.createElement('h3');
    h3.textContent = "Instructor: " + doc.data().Instructor_Name;
    h3.style.color = "#F56A6A";

    let link = document.createElement('h3');
    if (doc.data().Discord_Link) {
        link.textContent = "Live Discord: " + doc.data().Discord_Link;
    }
    link.style.color = "#F56A6A";

    let category = document.createElement('h3');
    category.textContent = "Category: " + doc.data().Category;

    let li = document.createElement('iframe');
    li.setAttribute('width', "800");
    li.setAttribute('height', "450");
    li.setAttribute('src', doc.data().HTML);
    li.setAttribute('frameborder', "0");
    li.setAttribute('allow', "accelerometer; autoplay; encrypted - media; gyroscope; picture -in -picture");
    li.setAttribute('allowfullscreen', true);

    div.appendChild(h2);
    div.appendChild(li);
    div.appendChild(h3);
    div.appendChild(link);
    //div.appendChild(category);
    video_feed.appendChild(div);
}


function videos() {
    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_email");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var category = document.getElementById("video-category").value;
    var Instructor = document.getElementById("search-name").value;

    if (Instructor) {
        db.collection("Videos").doc(category).collection(months[date.getMonth()]).orderBy("Timestamp", "desc").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                if (doc.data().Instructor_Name == Instructor) {
                    renderVideos(doc);
                    console.log(doc.id);
                }
            })
        })
    }
    else {
        db.collection("Videos").doc(category).collection(months[date.getMonth()]).orderBy("Timestamp", "desc").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderVideos(doc);
                console.log(doc.id);
            })
        })
    }

    
};

function DeleteVideos() {
    location.reload();
    document.getElementById("video_feed").reset();
    videos();
};

function MyVideos() {
    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_email");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();

    db.collection("Videos").doc("All").collection(months[date.getMonth()]).orderBy("Timestamp", "desc").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if (doc.data().User == user_email) {
                renderVideos(doc);
                console.log(doc.id);
            }
        })
    })
};
