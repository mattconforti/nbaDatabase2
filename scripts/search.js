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
    fetch(`https://free-nba.p.rapidapi.com/players?search=${search_term}&per_page=25&page=0`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3683bd61dfmshd234785dbb9d5bep1253d9jsn5a556f7f2e21",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(responseJSON => {
        console.log(responseJSON['data']);

    })
    .catch(err => {
	    console.error(err);
    });
}

function getPlayerStats() {
    console.log();
    // do another fetch here of stats part of api
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
