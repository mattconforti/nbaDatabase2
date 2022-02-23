<!-- not for financial gain. education purposes only. self education on web development.
     licenses?? dont need if im not selling and im the only one consuming this for rn.
-->

<!-- DERRICK ROSE PRESENTS A BUG WHERE THERE IS 2020-2021 STATS IN 2 diff rows!!! DUPLICATE DATA! CHECK ACTUAL API RESULTS.
OR DOING SOMETHING FUNNY IN MY JS CODE IF THERE ARE 2 ROWS. ITS PROBABLY BC 2 DIFF TEAMS! PUT TEAM NAMES IN ROWS & WILL FIX THAT
-->

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Web-based data views of nba players and teams">
        <meta name="keywords" content="NBA,Basketball,Database,Sports">
        <meta name="author" content="Matt Conforti">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NBA Database - Player Search</title>
        <!-- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="/nbaDatabase/images/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/nbaDatabase/images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/nbaDatabase/images/favicon/favicon-16x16.png">
        <!---->
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
        <div id="search_div_container">
            <div id="search_div">
                <!-- use <input type="search"> ?? for field designed for search queries.
                     may be styled differently than text inputs.. ? what does this mean??
                -->
                <input id="player_input" type="text" name="player_in" placeholder="Player Name">
                <!-- ex. Michael Jordan default (transparent) text inside text input???!!? -->
                <!-- NEEED MORE INPUT/FORM VALIDATION BEFORE MAKING SITE PUBLIC!!!!!!!! wanna have a secure unhackable site!-->
                <button id="search_button">
                    <img id="search_icon" src="images/search_icon.png" alt="search button icon">
                </button>
                <div id="loader_wrapper">
                    <div id="circle_loader"></div>
                </div>
            </div>
        </div>
        <?php
            // include the footer
            include('includes/footer.php');
        ?>
    </body>
    <script type="text/javascript" src="scripts/search.js"></script>
</html>
