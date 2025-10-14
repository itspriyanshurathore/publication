function emailSend() {
  // Get values
  let name = document.getElementById("firstname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let requirements = document.getElementById("requirements").value;
  let termsAccepted = document.getElementById("terms").checked;

  // Show data in console (debugging)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Service:", service);
  console.log("Requirements:", requirements);
  console.log("Terms Accepted:", termsAccepted);

  // Send email
  Email.send({
    Host: "s1.maildns.net",
    Username: "priyanshurathore266@gmail.com",
    Password: "543E91CDF95BF24B17D9A1A01098D7E2E0B4",  
    To: "priyanshurathore266@gmail.com",
    From: "priyanshurathore266@gmail.com",
    Subject: "New Form Submission",
    Body: `
      <h3>New Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Requirements:</b> ${requirements}</p>
      <p><b>Terms Accepted:</b> ${termsAccepted}</p>
    `
  }).then(
    message => {
      alert("✅ Done! Your form has been submitted.");
      console.log("Mail server response:", message);
    }
  );
}