<?php
    session_start();

    if (!isset($_SESSION['lang']))
        $_SESSION['lang'] = "eng";
    else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
        if ($_GET['lang'] == "eng")
            $_SESSION['lang'] = "eng";
        else if ($_GET['lang'] == "ru")
            $_SESSION['lang'] = "ru";
    }
    require_once "languages/" . $_SESSION['lang'] . ".php";
?>
