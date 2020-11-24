function sendMail(contactForm) {
	emailjs.send("service_u488se7", "template_icii652", {
			"from_email": contactForm.email.value,
			"to_name": "Nicola",
			"from_name": contactForm.name.value,
			"infos_message": contactForm.info.value
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
			},
			function (error) {
				console.log("FAILED", error);
			});
}