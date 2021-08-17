<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Web-based data views of nba players and teams">
        <meta name="keywords" content="NBA,Basketball,Database,Sports">
        <meta name="author" content="Matt Conforti">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NBA Database</title>
        <!-- Google Font API -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif+Caption&display=swap" rel="stylesheet">
        <!---->
        <link rel="stylesheet" type="text/css" href="styles/style.css">
    </head>
    <body>
        <?php
            // include the header
            include('includes/header.php');
        ?>
        <hr>
        <label id="player_label" for="player_in">Search Player:</label>
        <input id="player_input" type="text" name="player_in">
        <button id="search_button">Search</button>
    </body>
    <script type="text/javascript" src="scripts/search.js"></script>
</html>