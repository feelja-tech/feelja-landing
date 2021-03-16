import React from "react";

function GdprPage() {
  return (
    <>
      <h1>User Data Deletion Instructions</h1>

      <p>
        In order to delete your account's data you must send an email to{" "}
        <a href="mailto:contact@feelja.com">contact@feelja.com</a> with the
        following information:
      </p>
      <ul>
        <li>The mobile number you registered with (including country code)</li>
      </ul>
      <p>
        We'll then send you an SMS with a link to confirm the ownership of the
        account.
      </p>
      <p>
        Upon opening the previous link, we'll review your request and proceed to
        delete all your account's data wthin 24 hours.
      </p>
    </>
  );
}

export default GdprPage;
