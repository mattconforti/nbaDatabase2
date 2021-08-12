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

function getPlayer() {
    fetch("https://free-nba.p.rapidapi.com/players?search=davis&per_page=25&page=0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
    })
    .then(response => {
        console.log(response);
        // get into & parse this response -  have to fulfill 1 more promise (resolve the response)?
    })
    .catch(err => {
	    console.error(err);
    });
}

function getPlayerStats() {
    console.log();
}

getPlayer();
