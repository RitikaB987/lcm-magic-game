<?php
if(isset($_POST['name']) && isset($_POST['score'])){
    $name = $_POST['name'];
    $score = $_POST['score'];
    $line = $name . " - " . $score . "\n";
    file_put_contents("data.txt", $line, FILE_APPEND);
    echo "Score saved!";
}
?>