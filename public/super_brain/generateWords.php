<?php

ini_set("allow_url_fopen", 1);

echo("Let's start...<br/>");

$password = $_POST['password'];

if ($password == 'dE8bdTUE') {

    $json10Words = file_get_contents('https://random-word-api.herokuapp.com/word?number=10');
    $json15Words = file_get_contents('https://random-word-api.herokuapp.com/word?number=15');
    $json20Words = file_get_contents('https://random-word-api.herokuapp.com/word?number=20');
    $json100Words = file_get_contents('https://random-word-api.herokuapp.com/word?number=100');

    $words10 = json_decode($json10Words);
    $words15 = json_decode($json15Words);
    $words20 = json_decode($json20Words);
    $words100 = json_decode($json100Words);

    for ($i=0; $i < 9; $i++) { 
        $words10String .= ucfirst($words10[$i]) . ',';
    }
    $words10String .= ucfirst($words10[9]);
    
    for ($i=0; $i < 14; $i++) { 
        $words15String .= ucfirst($words15[$i]) . ',';
    }
    $words15String .= ucfirst($words15[14]);
    
    for ($i=0; $i < 19; $i++) { 
        $words20String .= ucfirst($words20[$i]) . ',';
    }
    $words20String .= ucfirst($words20[19]);

    for ($i=0; $i < 99; $i++) { 
        $words100String .= ucfirst($words100[$i]) . ',';
    }
    $words100String .= ucfirst($words100[99]);

    file_put_contents("10words", $words10String);
    file_put_contents("15words", $words15String);
    file_put_contents("20words", $words20String);
    file_put_contents("100words", $words100String);

    echo("Success");
}
else {
    echo("The password is not correct...");
}
?>