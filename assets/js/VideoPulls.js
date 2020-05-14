const video_feed = document.querySelector('#videos');


function renderVideos(doc) {
    let li = document.createElement('div');
    li.setAttribute('data-id', doc.id);
    li.setAttribute('id', 'video_feed');
    var newVideo = document.createTextNode(doc.data().HTML);
    li.appendChild(newVideo);
    video_feed.appendChild(li);
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