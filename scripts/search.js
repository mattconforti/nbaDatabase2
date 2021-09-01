var input_field = document.getElementById("player_input");
var search_button = document.getElementById("search_button");

// empty nba_player object
var nba_player = {
    "name" : "",
    "age" : 0,
    "position" : ""
    // NEED MORE & STUFF PUT INTO CATEGORIES
    // THEN A BUNCH OF THESE PLAYER OBJECTS WILL DEFINE A TEAM OBJECT
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
   let names = search_term.split(' ');
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
            if (responseJSON[counter]["firstName"] === names[0]) {
                console.log("match");
                // this is the one we want to parse thru further & extract info from
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

function getStats(playerId) {
    fetch(`https://free-nba.p.rapidapi.com/stats?player_ids=${playerId}&per_page=25&page=0`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21"
	}
    })
    .then(r => r.json())
    .then(rJSON => {
        console.log(rJSON);
    })
    .catch(err => {
	    console.error(err);
    });
}

search_button.addEventListener('click', () => {
    var player_name = input_field.value;
    // DO INPUT VALIDATION HERE... OR WHEN USER CLICKS OUT OF INPUT FIELD?? STRAT?
    console.log(`Search Term: ${player_name}`);
    // API call
    getPlayer(player_name);
    // open window with populated player stats from API
    window.open('html/player_page.php', '_blank');
});

// make 'enter' key trigger search button
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        e.preventDefault();  // prevent default behavior
        search_button.click();  // trigger button click
        // BUTTON CLICK HOVER & ANIMATION DOESNT HAPPEN... MAKE IT HAPPEN FOR UX
    }
});
