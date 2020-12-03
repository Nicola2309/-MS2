function sendMail(contactForm) {
    // EmailjJS template testing inputs
	emailjs.send("service_u488se7", "template_icii652", {
            "from_email": contactForm.email.value,
            "reply_to": contactForm.email.value,
			"to_name": "Nicola",
			"from_name": contactForm.name.value,
			"infos_message": contactForm.info.value
		})
        .then(alert("Thank you " + contactForm.name.value + "! Your email has been sent, check your inbox tomorrow for our detailed answer!"));

        $("#contact-form").text();
}

/* Source of guidance used to create this code:
EmailJS: https://www.emailjs.com/docs/sdk/send/
*/