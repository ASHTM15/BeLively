const video_feed = document.querySelector('#videos');


function renderVideos(doc) {
    let div = document.createElement('div');
    let li = document.createElement('iframe');
    li.setAttribute('width', "700");
    li.setAttribute('height', "400");
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

        // get snapshot of data for each allows us to cycle through each document
        snapshot.docs.forEach(doc => {
            renderVideos(doc);
            console.log(doc.id);
        })
    })
};