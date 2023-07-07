<?php
// сбор данных из полей формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$token = "5194682541:AAHXBWo4NOZJbvulUjlbtgeQYEK0icUI1pU"; // токен телеграмм бот
$chat_id = "-782706071"; // id группы, куда будет отправляться сообщение
$sitename = "urkul.beget.tech"; // название сайта

$arr = array(
    'Заказ с сайта: ' => $sitename,
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Почта: ' => $email,
    'Вопрос: ' => $comment
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

// сообщение в телеграмм
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
//https://api.telegram.org/bot2060938459:AAEo-YnMroQqLQGV7OcvEIl6k6fyKspyHn4/getUpdates?offser=-10

//сообщение на почту
$recepient = "kud74@ukr.net"; // почта получателя
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nВопрос: $comment";
$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
