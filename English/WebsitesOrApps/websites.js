// Change language func
function changelanguage(){
    window.location.href = '/Hebrew/index.he.html';
}


//------------------------- The input work ---------------------\\


// The redirect function that redirect the user to a game from the input
function redirect() {
    let websiteSearch = document.getElementById('websiteSearch').value;
    websiteSearch = websiteSearch.toLowerCase();
    if (websiteSearch === 'games projects') {
        window.location.href = 'https://noamarie12.github.io/GamesProjects/';

    } else {
        console.log('Hello');
    }
}
// The redirect key that do when you click the enter key
document.getElementById('websiteSearch').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirect();
    }
});

document.getElementById('websiteSearch').addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase().trim();
    const NotFindGame = document.getElementById('NotFindGame');

    // Importing the games widgets
    const games = {
        'gamesProjects': { element: document.getElementById('GamesProjects'), name: 'games projects' }
    };

    let foundMatch = false;

    // Iterate through each game to check if the value matches
    for (let key in games) {
        const game = games[key];
        if (game.name.toLowerCase().includes(value)) {
            // Show the matching game and hide others
            game.element.style.display = 'block';
            foundMatch = true;
        } else {
            game.element.style.display = 'none';
        }
    }

    // Handle "Not Find Game" message
    if (foundMatch) {
        NotFindGame.style.display = 'none';
    } else {
        NotFindGame.style.display = value === '' ? 'none' : 'block';
    }

    // If the input is empty, show all games
    if (value === '') {
        Object.values(games).forEach(game => {
            game.element.style.display = 'block';
        });
        NotFindGame.style.display = 'none';
    }

    console.log(value);
});


//------------------------- Scall About ---------------------\\


function scrollAbout() {
    // Navigate to the parent folder and include the query parameter
    window.location.href = '../index.html?scrollToBottom=true';
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToBottom = urlParams.get('scrollToBottom');

    // Check if the query parameter is present
    if (scrollToBottom === 'true') {
        // Wait until the page is fully rendered before scrolling
        setTimeout(() => {
            // Scroll to the bottom with smooth behavior
            document.documentElement.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }, 300); // Adjust the delay as needed
    }
};