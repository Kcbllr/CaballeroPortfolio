function appendMailTo() {
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");

    mailToAttr.setAttribute("href", "mailto:Kairacaballero092695@gmail.com?subject=" + subject + "&body=" + message);
}