const video_feed = document.querySelector('#videos');

function renderVideos(doc) {
    let div = document.createElement('div');
    let li = document.createElement('iframe');
    li.setAttribute('width', "560");
    li.setAttribute('height', "315");
    li.setAttribute('src', doc.data().HTML);
    li.setAttribute('frameborder', "0");
    li.setAttribute('allow', "accelerometer; autoplay; encrypted - media; gyroscope; picture -in -picture");
    li.setAttribute('allowfullscreen', true);
    div.appendChild(li);
    video_feed.appendChild(div);
}


function videos() {
    var db = firebase.firestore();
    var user_email = localStorage.getItem("user_Email");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var category = document.getElementById("video-category").value;

    db.collection("Videos").doc(category).collection(months[date.getMonth()]).orderBy("Timestamp", "desc").get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderVideos(doc);
            console.log(doc.id);
        })
    })
};

function DeleteVideos() {
    location.reload();
    document.getElementById("video_feed").reset();
    videos();
};
