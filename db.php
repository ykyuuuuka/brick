<?php

//Heroku PostgresへのDB接続
$url = parse_url(getenv('DATABASE_URL'));
echo '<pre>';
var_dump($url);
echo '</pre>';

?>
