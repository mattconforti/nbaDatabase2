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
        <link href="https://fonts.googleapis.com/css2?family=Graduate&family=Orbitron:wght@500&family=PT+Serif+Caption&display=swap" rel="stylesheet">
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
                    <div id="player_name_item" class="subgrid_item">
                        <div class="nested_subgrid_item">
                            <h3 id="player_name_heading" class="player_info"></h3>
                        </div>
                        <div class="nested_subgrid_item">
                            <h3 id="jersey_num_heading" class="player_info"></h3>
                            <!-- should these be h2 for size / importance heirarchy sake? but needs to be styled correctly -->
                        </div>
                    </div>
                </div>
            </div>
            <div id="player_info_item" class="grid_item">
                <h2>Player Info</h2>
                <hr class="stats_dividers">
                <div id="info_subgrid">
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">Age:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_age" class="player_info_heading"></h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">Position:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_position" class="player_info_heading"></h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">Height:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_height" class="player_info_heading"></h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">Team:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_team" class="player_info_heading"></h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">Weight:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_weight" class="player_info_heading"></h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 class="player_info_label">DOB:</h3>
                    </div>
                    <div class="info_subgrid_item">
                        <h3 id="player_dob" class="player_info_heading"></h3>
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
                    <div id="tpp_label" class="subgrid2_item">
                        <h3>3P%</h3>
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
                        <h3 id="career_pts" class="career_stat"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_ast" class="career_stat"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_reb" class="career_stat"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_tov" class="career_stat"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_fgp" class="career_stat"></h3>
                    </div>
                    <div class="subgrid3_item">
                        <h3 id="career_3pp" class="career_stat"></h3>
                    </div>
                </div>
            </div>
            <!-- add a section to search by game by entering date - ex. 06/21/21 default text on search input box -->
            <!-- will have to design another screen and or area in the player page to display these results -->
        </div>
    </body>
</html>
