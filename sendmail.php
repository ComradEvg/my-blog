<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPmMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/languadge/');
$mail ->isHTML(true);

$mail->setFrom('stekolnikove@mail.ru');
$mail ->addAddress('stekolnikove@mail.ru');
$mail ->Subject = 'Проверка почты';


// Тело письма
$body = '<h1>Встречайте супер письмо!</h1>';

if(trim(!empty($_POST['name']))){
   $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))) {
   $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
   $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
}

$mail -> Body = $body;

// SEND
if (!$mail->send()){
   $message = 'Ошибббка';
}
else{
   $message = 'Сообщение отправлено';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
