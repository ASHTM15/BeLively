function UploadVideo() {
    var category = document.getElementById("video-category").value;
    var html = document.getElementById("youtube-html").value;
    var user_email = localStorage.getItem("user_email");
    var video_name = document.getElementById("video-name").value;
    var instructor_name = document.getElementById("instructor-name").value;
    var discord_link = document.getElementById("discord-link").value
    const regex = /https(...){12}/;

    html = html.match(regex);

    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var numbers = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    var d = Date(Date.now());
    currDate = d.toString();

    var db = firebase.firestore();

    db.collection("Videos").doc("All").collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()] + ":" + numbers[date.getSeconds()]).set({
        Category: category,
        HTML: html[0],
        User: user_email,
        Video_Name: video_name,
        Instructor_Name: instructor_name,
        Discord_Link: discord_link,
        Timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    db.collection("Videos").doc(category).collection(months[date.getMonth()]).doc("Day: " + numbers[date.getDate()] + ", " + numbers[date.getHours()] + ":" + numbers[date.getMinutes()] + ":" + numbers[date.getSeconds()]).set({
        Category: category,
        HTML: html[0],
        User: user_email,
        Video_Name: video_name,
        Instructor_Name: instructor_name,
        Discord_Link: discord_link,
        Timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function () {
            location.href = 'upload_class.html';
        })
        .catch(function (error) {
            console.error("Error uploading video: ", error);
        });

   
};