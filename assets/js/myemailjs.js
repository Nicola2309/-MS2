function sendMail(contactForm) {
    emailjs.send("gmail", "Nicola", {
        "from_namae": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectssummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        });
}