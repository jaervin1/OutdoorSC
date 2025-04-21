import "./css/Contact.css"
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8c44c7de-b368-4efc-b794-a720c7eb399b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact-us">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name: "required/>
        <input type="email" name="email" placeholder="Email:"required/>
        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit">Submit</button>

      </form>
      <span>{result}</span>

    </div>
  );
}