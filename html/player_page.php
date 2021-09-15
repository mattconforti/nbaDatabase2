<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- make sizes dynamic & good for mobile!!! percentages of screen or media queries. -->
        <!-- search - "responsive mobile design using" on Google. -->
        <title>Player View</title>
        <!-- get player name above? using php maybe?? or just js?? -->
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
                <div id="subgrid_container">
                    <div id="team_info" class="subgrid_item">
                        <!-- need to load these images based on the specific player and team. src will be variable -->
                        <img id="team_logo" src="" alt="logo of player's team">
                    </div>
                    <div id="player_photo_item" class="subgrid_item">
                        <img id="player_photo" src="" alt="player headshot">
                    </div>
                    <div id="player_info_item" class="subgrid_item">
                    <!-- also a nested subgrid ^^ -->
                        <div class="nested_subgrid_item">
                            <h2 class="player_info_label">Age:</h2>
                        </div>
                        <div class="nested_subgrid_item">
                            <h2 id="player_age" class="player_info"></h2>
                            <!-- NEED TO CHANGE FONT FOR THIS ^^ -->
                        </div>
                        <div class="nested_subgrid_item">
                            <h2 class="player_info_label">Height:</h2>
                        </div>
                        <div class="nested_subgrid_item">
                            <h2 id="player_height" class="player_info"></h2>
                        </div>
                        <div class="nested_subgrid_item">
                            <h2 class="player_info_label">Position:</h2>
                        </div>
                        <div class="nested_subgrid_item">
                            <h2 id="player_position" class="player_info"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div id="season_stats" class="grid_item">
                <h2>Season Stats</h2>
                <hr class="stats_dividers">
                <div id="subgrid_container2">
                    <div class="subgrid2_item">
                        <h3>Season:</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>PTS</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>MIN</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>AST</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>REB</h3>
                    </div>

                    <div class="subgrid2_item">
                        <h3>FG%</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>3P%</h3>
                    </div>
                    <div class="subgrid2_item">
                        <h3>'20-'21</h3>
                    </div>
                    <div class="subgrid2_item">
                    </div>
                    <div class="subgrid2_item">
                    </div>
                    <div class="subgrid2_item">
                    </div>
                    <div class="subgrid2_item">
                    </div>
                    <div class="subgrid2_item">
                    </div>
                    <div class="subgrid2_item">
                    </div>
                </div>
            </div>
            <div id="career_stats" class="grid_item">
                <h2>Career Stats</h2>
                <hr class="stats_dividers">
                <div id="subgrid3">
                    <div class="subgrid3_item">
                        <h3>Season:</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>PTS</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>AST</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>REB</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>TOV</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>FG%</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3>3P%</h3>
                    </div>
                    <!-- make blocks & free throw percentage category?? other stats from API? -->
                    <!-- show dateLastUpdated for each result set?????? only if its constantly updated... -->
                    <div class="subgrid3_item">
                        <h3>Career</h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_pts"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_ast"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_reb"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_tov"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_fgp"></h3>
                        <!-- make these fonts different ^^ -->
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_3pp"></h3>
                    </div>
                </div>
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
