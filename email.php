<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
         = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'diego.decort@gmail.com';
    $headers = "From: $email\r\nReply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message.';
    } else {
        echo 'There was a problem sending the email.';
    }
}
?>
