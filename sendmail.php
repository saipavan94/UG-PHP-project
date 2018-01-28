<?php
include_once"mail\mail\mail.php";
function sendmail($f,$t, $body,$subject)
{
$from = $f;
$to = $t;


$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'XXXX',
        'password' => 'YYYY'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} 
}
?>