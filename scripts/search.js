// ORGANIZE THIS FILE BETTER & COMMENTS/DOCUMENTATION/DOCSTRINGS?? - JSDOC??!??

let c_loader = document.getElementById("circle_loader");
c_loader.style.visibility = "hidden";
/* visibility hidden vs display none - depends on if u want space allocated */

var input_field = document.getElementById("player_input");
var search_button = document.getElementById("search_button");

// abbreviations
const pos_abv = {
    "Point Guard": "PG",
    "Shooting Guard": "SG",
    "Small Forward": "SF",
    "Power Forward": "PF",
    "Center": "C"
}

const team_abv = {
    "Atlanta Hawks": "ATL",
    "Boston Celtics": "BOS",
    "Brooklyn Nets": "BKN",
    "Charlotte Hornets": "CHA",
    "Chicago Bulls": "CHI",
    "Cleveland Cavaliers": "CLE",
    "Dallas Mavericks": "DAL",
    "Denver Nuggets": "DEN",
    "Detroit Pistons": "DET",
    "Golden State Warriors": "GSW",
    "Houston Rockets": "HOU",
    "Indiana Pacers": "IND",
    "Los Angeles Clippers": "LAC",
    "Los Angeles Lakers": "LAL",
    "Memphis Grizzlies": "MEM",
    "Miami Heat": "MIA",
    "Milwaukee Bucks": "MIL",
    "Minnesota Timberwolves": "MIN",
    "New Orleans Pelicans": "NOP",
    "New York Knicks": "NYK",
    "Oklahoma City Thunder": "OKC",
    "Orlando Magic": "ORL",
    "Philadelphia 76ers": "PHI",
    "Phoenix Suns": "PHO",
    "Portland Trail Blazers": "POR",
    "Sacramento Kings": "SAC",
    "San Antonio Spurs":"SAS",
    "Toronto Raptors":"TOR",
    "Utah Jazz": "UTA",
    "Washington Wizards":"WAS"
}

// empty nba_player object
var nba_player = {
    "name" : "",
    "age" : 0,
    "position" : ""
    // NEED MORE & STUFF PUT INTO CATEGORIES
    // THEN A BUNCH OF THESE PLAYER OBJECTS WILL DEFINE A TEAM OBJECT & THEN TEAMS DEFINE LEAGUE OBJECT
    // DO I REALLY NEED THIS FORMATTED THE WAY I WANT? API results contain an obj just like this!!
    // *** NOT USING FOR NOW BC NOT STORING THIS INFO. API has all the results i need formatted easily accessible
    // if i use destructuring etc
}

// ****************************************************************************************************************
// ******************************************  MAIN FUNCTION  *****************************************************
// ****************************************************************************************************************
// envoked by search button click
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
   // turn search term all lowercase so the program does not check terms case sensitive wise. Users should be able to enter it any way
   search_term = search_term.toLowerCase();
   console.log ("Lowercase search term: " + search_term);

   // fix indent - only 3 spaces this section not a tab 4 like i usually use
   let names = search_term.split(' ');

   // problem is someone like Lamelo Ball in api db is LaMelo Ball. so need to format user input in way we need it. make check against
   // all lowercase? the way user enters it shouldnt matter, as long as all letters match regardless of capitalization in any place.
   // ^^ turn names into lowercase before splitting makes easier & no loop / foreach method/loop etc required.
   // MAKES IT EASIER ON ME ACTUALLY BC UPON TESTING LAST NAME CAPITALIZATION DOESNT MATTER IN THE API!!!! JUST FIRST NAME CAP MATTERS!
   // so we just need the extracted first name from API to be all lowercase as well (we lowercased the usr input already) before it 
   // is checked against the user input.

   // they changed the api to make an endpoint that searches by full name. after a comment i made to the creator.
   fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=${names[1]}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21"
	}
    })
    .then(response => response.json())  // have to check if (response.status === 200) or catch will auto handle??
    .then(responseJSON => {
        console.log(responseJSON);

        // loop thru results & match first name (names[0])
        for (let counter = 0; counter < responseJSON.length; counter++) {
            console.log(responseJSON[counter]);
            // match (lowercase version) first name with user input
            if ((responseJSON[counter]["firstName"]).toLowerCase() === names[0]) {
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
                    // displaySeasons is inside this above function ^^ handles updating rows & grid size
                    // **** UPDATE FOOTER BC SEASONS GRID NOW OVERFLOWS **** done upon updating seasons grid size
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
    var { firstName, lastName, headShotUrl, age: p_age, height, weight, position, team, jerseyNumber, dateOfBirth,
          careerPoints, carrerAssists, careerRebounds, careerTurnovers, careerPercentageFieldGoal, careerPercentageThree 
        } = result_obj;
        console.log("Age: " + p_age);
    // Hi im Matt Conforti. Im a 23 year old, 5'11" 200lb point guard from the New York Knicks.
    // I average x for my career, but this season i average... i am a x time MVP, x time DPOY, etc.

    // display stuff
    opened_window.document.getElementById("player_photo").src = headShotUrl;
    opened_window.document.getElementById("player_name_heading").innerText = firstName + " " + lastName;
    opened_window.document.getElementById("jersey_num_heading").innerText = jerseyNumber;
    opened_window.document.getElementById("player_age").innerText = p_age;
    opened_window.document.getElementById("player_height").innerText = height;
    opened_window.document.getElementById("player_weight").innerText = weight;
    opened_window.document.getElementById("player_position").innerText = pos_abv[position];
    opened_window.document.getElementById("player_jerseynum").innerText = jerseyNumber;
    opened_window.document.getElementById("player_team").innerText = team_abv[team];
    opened_window.document.getElementById("player_dob").innerText = dateOfBirth;
    opened_window.document.getElementById("career_pts").innerText = careerPoints;
    opened_window.document.getElementById("career_ast").innerText = carrerAssists;  // mispelled in actual API
    opened_window.document.getElementById("career_reb").innerText = careerRebounds;
    opened_window.document.getElementById("career_tov").innerText = careerTurnovers;
    opened_window.document.getElementById("career_fgp").innerText = careerPercentageFieldGoal;
    opened_window.document.getElementById("career_3pp").innerText = careerPercentageThree;
}

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

// used in getSeasons. gets & displays in one function call
function displaySeasons(result_object, opened_window) {
    const career_length = result_object.length;
    console.log("Career Length: " + career_length + " years");  // exception for Melo b/c 2 2010-11 seasons
    for (let count = career_length-1; count >= 0; count--) {
        console.log(result_object[count]);
        // get rest of stats & same for career - i want to displauy every stat this API has. make grid & areas
        // bigger if need be (deff will at least for rows of season data & maybe for columns new stats added)
        // create new rows for seasons, get elements & add text to them & update grid
        createRow(result_object[count], opened_window);
        updateSeasonsGrid(career_length, opened_window);
    }
}

// used in displaySeasons function
function createRow(season_obj, opened_window) {
    // define subgrid to be added to
    var subgrid2_container = opened_window.document.getElementById("subgrid_container2");

    // define all stats & put into easily iterable array
    const { season, team, minsPerGame, pointsPerGame, assistsPerGame, reboundsPerGame,
            blocksPerGame, turnoversPerGame, percentageFieldGoal, percentageThree } = season_obj;
    const stats_arr = [ season, pointsPerGame, minsPerGame, assistsPerGame, reboundsPerGame,
                        percentageFieldGoal, percentageThree ];

    // create element, add class = text element etc, add it to DOM. doing this for each season
    // for each column
    for (let col_count = 0; col_count < 7; col_count++) {
        // create div grid item
        const new_subgrid2_item = opened_window.document.createElement("div");
        new_subgrid2_item.classList.add("subgrid2_item");
        // create h3 to put stats into
        const h3_node = opened_window.document.createElement("h3");
        if (col_count === 0) {  // this is the season label ("2020-21")
            h3_node.classList.add("season_num_label");
        }
        else {
            h3_node.classList.add("season_stat");
        }
        h3_node.innerText = stats_arr[col_count];

        // add new elems to DOM
        new_subgrid2_item.appendChild(h3_node);
        subgrid2_container.appendChild(new_subgrid2_item);
    }
    console.log(opened_window.document);
}

// used in displaySeasons function. also updates footer to account for seasons grid
function updateSeasonsGrid(amt_of_seasons, opened_window) {
    // update amount of rows in season stats grid
    opened_window.document.getElementById("subgrid_container2").style.gridTemplateRows = `repeat(${amt_of_seasons + 1}, 35px)`;
    // add 1 for label row in grid! ^^
    // update size of the entire grid item itself
    opened_window.document.getElementById("season_stats").style.height = `${35 * (amt_of_seasons + 3)}px`;
    // need to clean up this number a few pixels - decide if i want room around grids inside grid items - how big should
    // the margin really be??


    // FIX FOOTER OVERFLOW ISSUE
    if (amt_of_seasons > 8) {
        opened_window.document.getElementById("footer_hr").style.marginTop = `${(35 * (amt_of_seasons + 3)) - 300}px`;
        console.log(opened_window.document.getElementById("footer_hr").style.marginTop);
    }
    else {  // redundant????? bc its already 75 by default so shouldnt have to change it unless its above 8 seasons
        opened_window.document.getElementById("footer_hr").style.marginTop = '75px';
    }

    // need index page spaced out & aesthetics better in general. circle loading animation will help. put it below
    // vertically?? page needs some verticality!! maybe show a small pic of a player card. NEED TO ADD SHADOWS LIKE CARDS
    // ON THE PLAYER PAGE!!!!!
}

// used in search button click. returns true or false if the input is valid or not. HOW IS THIS NORMALLY DONE WITH FORMS? IM DOING IT MY
// OWN WAY NOW BUT I WILL RESEARCH HOW INPUT VALIDATION IS NORMALLY DONE IN JS AND ALSO IF USING HTML FORM ATTRIBUTES & FUNCTIONS ETC
// WOULD BE A BETTER OPTION. see https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation & other research threads about this topic.
// client vs server side validation! thru js or built in html form validation? built in validation better performance but less customization than JS validation
// which can be from your own code or thru a JS library! MY STUFF NEEDS TO BE WRAPPED IN FORM ELEMENTS IF WE ARE DOIN THAT! could change css slightly cuz of preset margins etc!
// prolly gunna do this & then if its good u can use css valid & invalid pseudo class to make the styles for red & green border and or error message etc!
// NEED MORE READING/RESEARCH ABOUT FORMS TO SEE WHERE THEY SUBMIT TO / ARE BEING SENT TO! ETC! 

// ****************************************************************************************************************
// *************************************  SEARCH BUTTON CLICK  ****************************************************
// ****************************************************************************************************************
search_button.addEventListener('click', () => {
    var player_name = input_field.value;
    // DO INPUT VALIDATION HERE... OR WHEN USER CLICKS OUT OF INPUT FIELD?? STRAT? CAN TRY BOTH. Like giving them the opportunity
    // to hit search before i tell them that their input is wrong. that way it doesnt happen after every character or accidental click
    // out or too pre-emptively like some search boxes u see online giving u suggestions and corrections before you even type the full phrase or get it correct
    // yourself ex. if user makes a typo that they know is wrong and then click out and click back in its kinda annoying for the program
    // to tell them they are wrong when they may be aware of the mistake. wait till they actually click search to check input (ie here)
    console.log(`User Input: ${player_name}`);

    // clean/validate input - goal is to make sure 2 words 3 in some odd cases. dont worry about caps thats done programatically. 
    // no special characters? what about if they have a tilde over the e. idk. cover. also karl anthony towns how does he exist in the db? hyphen? caldwell pope?
        // chkUsrIn();


    // CIRCLE LOADER BEFORE API CALL for UX - lets them know something computational
    // & time consuming is being done
    // ******* ONLY SHOW LOADING INDICATOR IF INPUT IS VALID *******

    // show the loading indicator
    c_loader.style.visibility = "visible";

    // do the work on a delay to let the loading indicator animation run
    setTimeout(() => {
        // API call & all display work
        getPlayer(player_name);
        // NEED SOME TYPE OF RETURN VALUE MAYBE THAT SAYS IF PLAYER IS IN THE DB OR NOT. ex. random 2 word name would result in 
        // nothing happening. We want a little error red border and or error message in this case.

        // the work is done, hide the loading indicator
        c_loader.style.visibility = "hidden";
    }, 1750);
});

// make 'enter' key trigger search button
// consistency on single or double quotes!! & other conventions like camelcase or underscore etc
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        e.preventDefault();  // prevent default behavior
        search_button.click();  // trigger button click
        // BUTTON CLICK HOVER & ANIMATION DOESNT HAPPEN... MAKE IT HAPPEN FOR UX
    }
});
