var input_field = document.getElementById("player_input");
var search_button = document.getElementById("search_button");

// position abbreviations
const pos_abv = {
    "Point Guard": "PG",
    "Shooting Guard": "SG",
    "Small Forward": "SF",
    "Power Forward": "PF",
    "Center": "C"
}

// empty nba_player object
var nba_player = {
    "name" : "",
    "age" : 0,
    "position" : ""
    // NEED MORE & STUFF PUT INTO CATEGORIES
    // THEN A BUNCH OF THESE PLAYER OBJECTS WILL DEFINE A TEAM OBJECT
    // DO I REALLY NEED THIS FORMATTED THE WAY I WANT? API results contain an obj just like this!!
}

// empty nba_team object
var nba_team = {

};

// empty league object
var nba_league = {

};

function getPlayer(search_term) {
    /* need a better API with more stats & ideally photos etc. no pricing plan or request limit. 
       will buy pricing plan if i eventually publish the website & somehow make money off it - maybe by 
       ads or maybe manually enter data & connect db & sell program - one time pay or maybe pay per use or make a
       personal request limit like u get 500 requests per day for $12.99. and i can programatically restrict
       this if i have unlimited requests or whatever i have etc. can plan accordingly when it gets to that point
       maybe 

       - balldontlie api??? has season averages etc. are they accurate? accuracy check
       have 2 other options to use - & then will search for more if none of those are suitable - write
       blog on best api for each topic. ex. best food api, best nba api etc. rate for accuracy & information
       avaiable, ease of use & getting that info thru api call (do we have to search for playerid 
       or game # first??... etc.

       - from rapid api: API-NBA, Free NBA, NBA Stats, Basketball Data, Real-Time
         Basketball Content, JsonOdds for sports betting - would be a cool little different side project
         gunna end up going with "NBA Player Individual Stats" on rapidapi - has everything i need including
         player info, season and career stats, player headshot url, etc. updated a day ago. Perfect API for this project!
         only problem is, api querys go by either first name or last name. not both. i commented a post to the creator
         about this asking for full name queries. until then i will search by last name & parse thru the results to find
         desired player
    */
   // fix indent - only 3 spaces below
   let names = search_term.split(' ');
   // make sure names are first letter uppercase - problem is someone like Lamelo Ball is listed as LaMelo in the db
   // the code that checks this needs to check against all lowercase first names - last names need to be first letter
   // capitals for the api query term

   // they changed the api to make an endpoint that searches by full name. after a comment i made to the creator.
   fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=${names[1]}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21"
	}
    })
    .then(response => response.json())
    .then(responseJSON => {
        console.log(responseJSON);

        // loop thru results & match first name (names[0])
        for (let counter = 0; counter < responseJSON.length; counter++) {
            console.log(responseJSON[counter]);
            // match first name with user input
            if (responseJSON[counter]["firstName"] === names[0]) {
                console.log("Player match");
                // necessary to store this exact object? seems like a waste bc just creating another reference to it in memory

                // grab the team for displayTeamPhoto()
                var team = responseJSON[counter]["team"];
                // grab playerId for getSeasons()
                var player_id = responseJSON[counter]["id"];
                console.log("Player ID: " + player_id);

                // open player_window
                var player_window = window.open('html/player_page.php', '_blank');

                // wait for the window to load before inserting new content
                player_window.onload = function() {
                    // display api fetch results
                    displayPlayerContent(responseJSON[counter], player_window);
                    displayTeamPhoto(team, player_window);

                    // get each season for players & display season stats
                    // grid needs to be dynamic to add for more rows (seasons) based on player
                    getSeasons(player_id, player_window);
                    // displaySeasons is inside this above function ^^
                };
            }
        }

        /* have to store playerid = use that in another fetch to get stats!!
           make a function getStats(playerId) that does another api call & gets called here. returns
           object full of the stats data
        */
       // get stats for specific player. make it return & store obj
       /* populate and return nba player object. pass that into a function that
          displays properties of that object etc on corresponding page
          (player or team page etc)
        */
    })
    .catch(err => {
	    console.error(err);
    });
}

function displayTeamPhoto(team_name, opened_window) {
    fetch("https://nba-player-individual-stats.p.rapidapi.com/teams", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21"
	}
    })
    .then(rspns => rspns.json())
    .then(rspnsJSON => {
        // loop thru teams
        for (let i = 0; i < 30; i++) {
            // match team name - made a note to api creator to query api by name so this loop ^
            // is not needed
            if (rspnsJSON[i]["name"] == team_name) {
                console.log("Team match: " + rspnsJSON[i]["name"]);
                var team_photo_url = rspnsJSON[i]["teamLogoUrl"];
                // set team logo to url from api results
                opened_window.document.getElementById("team_logo").src = team_photo_url;
            }
        }
    })
    .catch(err => {
	    console.error(err);
    });
}

function displayPlayerContent(result_obj, opened_window) {
    // obj destructuring
    var { headShotUrl, age, height, weight, position, team, careerPoints, carrerAssists, careerRebounds,
        careerTurnovers, careerPercentageFieldGoal, careerPercentageThree } = result_obj;
    // Hi im Matt Conforti. Im a 23 year old, 5'11" 200lb point guard from the New York Knicks.
    // I average x for my career, but this season i average... i am a x time MVP, x time DPOY, etc.
    
    // get position abbreviation from key/value pair
    position = pos_abv[position];

    // display stuff
    opened_window.document.getElementById("player_photo").src = headShotUrl;
    opened_window.document.getElementById("player_age").innerText = age;
    opened_window.document.getElementById("player_height").innerText = height;
    opened_window.document.getElementById("player_position").innerText = position;
    opened_window.document.getElementById("career_pts").innerText = careerPoints;
    opened_window.document.getElementById("career_ast").innerText = carrerAssists;  // mispelled in actual API
    opened_window.document.getElementById("career_reb").innerText = careerRebounds;
    opened_window.document.getElementById("career_tov").innerText = careerTurnovers;
    opened_window.document.getElementById("career_fgp").innerText = careerPercentageFieldGoal;
    opened_window.document.getElementById("career_3pp").innerText = careerPercentageThree;
}

// click the search button
search_button.addEventListener('click', () => {
    var player_name = input_field.value;
    // DO INPUT VALIDATION HERE... OR WHEN USER CLICKS OUT OF INPUT FIELD?? STRAT?
    console.log(`Search Term: ${player_name}`);

    // CIRCLE LOADER BEFORE API CALL for UX - lets them know something computational
    // & time consuming is being done

    // API call
    getPlayer(player_name);
});

function getSeasons(player_ID, opened_window) {
    // do this & then extract individual seasons into objects
    fetch(`https://nba-player-individual-stats.p.rapidapi.com/playerseasons?playerId=${player_ID}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21"
	}
    })
    .then(resp => resp.json())
    .then(respJSON => {
        console.log(respJSON);

        // display the season data and statistics
        displaySeasons(respJSON, opened_window);

        // possible issue: for ex. carmelo got traded mid season 2010-2011 so he has 2 seasons for that season
        // how do we address this? if statement to check if any season names are equal - if so... teams should be different
        // (if teams not different, error in API?? or some other weird reason i cant think of rn)... handle _____ way...
    })
    .catch(err => {
	    console.error(err);
    });
}

function displaySeasons(result_object, opened_window) {
    for (let count = 0; count < result_object.length; count++) {
        console.log(result_object[count]);
        // pass this obj to a function to display or do it right here - up to you stylistically
        const { season, team, minsPerGame, pointsPerGame, assistsPerGame, reboundsPerGame,
              blocksPerGame, turnoversPerGame } = result_object[count];
        // get rest of stats & same for career - i want to displauy every stat this API has. make grid & areas
        // bigger if need be (deff will at least for rows of season data & maybe for columns new stats added)
        console.log(season);
        // create new rows for seasons, get elements & add text to them
        createRow(season, opened_window);
    }
}

function createRow(season, opened_window) {
    // create element, add class = text element etc, add it to DOM. doing this for each season
    const subrid_2_item = opened_window.document.createElement("div");
    subrid_2_item.classList.add("subgrid2_item");
    const h3_node = opened_window.document.createElement("h3");
    h3_node.classList.add("season_stat");
    h3_node.innerText = season;  // probably want these season names in reverse order!!! 2021 at the top!!

    // add stuff to DOM
    subrid_2_item.appendChild(h3_node);
    var subgrid2_container = opened_window.document.getElementById("subgrid_container2");
    subgrid2_container.appendChild(subrid_2_item);

    // have to create other columns as well, can maybe insert data above?? or do it all here & pass
    // in more than the season name

    // do this in a loop?? deff would be more readable & maybe complexity/time efficient
    // REFACTOR THIS PART!!! DONE IN A LOOP EASILY!!! for 6 iterations (7 if i wanna include the season label)
    const subrid_2_item_2 = opened_window.document.createElement("div");
    subrid_2_item_2.classList.add("subgrid2_item");
    const h3_node_2 = opened_window.document.createElement("h3");
    h3_node_2.classList.add("season_stat");
    // add to DOM
    subrid_2_item_2.appendChild(h3_node_2);
    subgrid2_container.appendChild(subrid_2_item_2);

    const subrid_2_item_3 = opened_window.document.createElement("div");
    subrid_2_item_3.classList.add("subgrid2_item");
    const h3_node_3 = opened_window.document.createElement("h3");
    h3_node_3.classList.add("season_stat");
    // add to DOM
    subrid_2_item_3.appendChild(h3_node_3);
    subgrid2_container.appendChild(subrid_2_item_3);

    const subrid_2_item_4 = opened_window.document.createElement("div");
    subrid_2_item_4.classList.add("subgrid2_item");
    const h3_node_4 = opened_window.document.createElement("h3");
    h3_node_4.classList.add("season_stat");
    // add to DOM
    subrid_2_item_4.appendChild(h3_node_4);
    subgrid2_container.appendChild(subrid_2_item_4);

    const subrid_2_item_5 = opened_window.document.createElement("div");
    subrid_2_item_5.classList.add("subgrid2_item");
    const h3_node_5 = opened_window.document.createElement("h3");
    h3_node_5.classList.add("season_stat");
    // add to DOM
    subrid_2_item_5.appendChild(h3_node_5);
    subgrid2_container.appendChild(subrid_2_item_5);

    const subrid_2_item_6 = opened_window.document.createElement("div");
    subrid_2_item_6.classList.add("subgrid2_item");
    const h3_node_6 = opened_window.document.createElement("h3");
    h3_node_6.classList.add("season_stat");
    // add to DOM
    subrid_2_item_6.appendChild(h3_node_6);
    subgrid2_container.appendChild(subrid_2_item_6);

    const subrid_2_item_7 = opened_window.document.createElement("div");
    subrid_2_item_7.classList.add("subgrid2_item");
    const h3_node_7 = opened_window.document.createElement("h3");
    h3_node_7.classList.add("season_stat");
    // add to DOM
    subrid_2_item_7.appendChild(h3_node_7);
    subgrid2_container.appendChild(subrid_2_item_7);

    // have to update grid itself to allow for new elements?
    // yes - have to update css to do rows: repeat for as many seasons as the player has (pass in length)
    console.log(opened_window.document);
}

// make 'enter' key trigger search button
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        e.preventDefault();  // prevent default behavior
        search_button.click();  // trigger button click
        // BUTTON CLICK HOVER & ANIMATION DOESNT HAPPEN... MAKE IT HAPPEN FOR UX
    }
});
