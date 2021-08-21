<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Player View</title>
        <!-- get player name above? using php maybe?? -->
        <!-- Google Font API -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif+Caption&display=swap" rel="stylesheet">
        <!---->
        <link rel="stylesheet" type="text/css" href="../styles/style.css">
    </head>
    <body>
        <?php
            // include the header
            include('../includes/header.php');
        ?>
        <hr>
        <!-- grid here -->
        <div id="grid_container">
            <div id="player_item" class="grid_item">
                <img id="player_photo" src="../images/player_photo.png" alt="player headshot">
            </div>
            <div id="season_stats" class="grid_item">
                <h2>Season Stats</h2>
                <hr class="stats_dividers">
                <div id="subgrid_container">
                    <div class="subgrid_item">
                        <h3>Season:</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>PTS</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>MIN</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>AST</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>REB</h3>
                    </div>

                    <div class="subgrid_item">
                        <h3>FG%</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>3P%</h3>
                    </div>
                    <div class="subgrid_item">
                        <h3>'20-'21</h3>
                    </div>
                    <div class="subgrid_item">
                    </div>
                    <div class="subgrid_item">
                    </div>
                    <div class="subgrid_item">
                    </div>
                    <div class="subgrid_item">
                    </div>
                    <div class="subgrid_item">
                    </div>
                    <div class="subgrid_item">
                    </div>
                </div>
            </div>
            <div id="career_stats" class="grid_item">
                <h2>Career Stats</h2>
                <hr class="stats_dividers">
            </div>
            <div id="career_accolades" class="grid_item">
                <h2>Career Accolades</h2>
                <hr id="accolades_divider" class="stats_dividers">
                <h3 id="mvp_awards">MVP</h3>
                <h3>ALL STAR</h3>
                <h3>DPOY</h3>
            </div>
        </div>
    </body>
</html>
