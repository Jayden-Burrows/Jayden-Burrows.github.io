let gamesLibrary = [
    {
        "title": "FINAL FANTASY VII",
        "description": "The timeless classic that redefined RPGs, following Cloud Strife and AVALANCHE in their fight against the Shinra Electric Power Company.",
        "release_date": "1997-01-31",
        "price": 11.99,
        "genres": ["JRPG", "Classic", "Story Rich", "Turn-Based Combat", "Fantasy"],
        "developer": "Square Enix",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/39140/header.jpg",
        "store_page": "https://store.steampowered.com/app/39140/FINAL_FANTASY_VII/",
        "rating": "Very Positive"
    },
    {
        "title": "FINAL FANTASY VII REMAKE INTERGRADE",
        "description": "A bold reimagining of the original FINAL FANTASY VII, featuring a hybrid combat system and an additional adventure with Yuffie Kisaragi.",
        "release_date": "2021-12-16",
        "price": 69.99,
        "genres": ["Action RPG", "Remake", "Story Rich", "Singleplayer", "Cinematic"],
        "developer": "Square Enix",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
        "store_page": "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/",
        "rating": "Very Positive"
    },
    {
        "title": "FINAL FANTASY VII REBIRTH",
        "description": "The second game of the FINAL FANTASY VII remake trilogy. Cloud and his friends embark on a new journey across a vast, expansive world.",
        "release_date": "2025-01-23",
        "price": 69.99,
        "genres": ["Action RPG", "Open World", "Story Rich", "Adventure", "Fantasy"],
        "developer": "Square Enix",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2909400/header.jpg",
        "store_page": "https://store.steampowered.com/app/2909400/FINAL_FANTASY_VII_REBIRTH/",
        "rating": "Very Positive"
    },
    {
        "title": "It Takes Two",
        "description": "A co-op action-adventure where players control a married couple transformed into dolls, navigating a fantastical world to repair their relationship.",
        "release_date": "2021-03-25",
        "price": 39.99,
        "genres": ["Co-op", "Adventure", "Local Co-Op", "Online Co-Op", "Platformer"],
        "developer": "Hazelight Studios",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        "store_page": "https://store.steampowered.com/app/1426210/It_Takes_Two/",
        "rating": "Overwhelmingly Positive"
    },
    {
        "title": "A Way Out",
        "description": "An exclusively co-op adventure where two prisoners, Leo and Vincent, must work together to escape from prison.",
        "release_date": "2018-03-23",
        "price": 29.99,
        "genres": ["Co-op", "Action", "Story Rich", "Local Co-Op", "Crime"],
        "developer": "Hazelight Studios",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        "store_page": "https://store.steampowered.com/app/1222700/A_Way_Out/",
        "rating": "Very Positive"
    },
    {
        "title": "Split Fiction",
        "description": "A boundary-pushing co-op adventure from Hazelight Studios where two writers trapped in their own stories must rely on each other to break free.",
        "release_date": "2025-03-06",
        "price": 49.99,
        "genres": ["Co-op", "Action-Adventure", "Local Co-Op", "Online Co-Op", "Sci-Fi"],
        "developer": "Hazelight Studios",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2001120/header.jpg",
        "store_page": "https://store.steampowered.com/app/2001120/Split_Fiction/",
        "rating": "Very Positive"
    },
    {
        "title": "Red Dead Redemption 2",
        "description": "An epic tale of life in America's unforgiving heartland, following Arthur Morgan and the Van der Linde gang on the run from federal agents.",
        "release_date": "2019-12-05",
        "price": 59.99,
        "genres": ["Open World", "Western", "Story Rich", "Action", "Multiplayer"],
        "developer": "Rockstar Games",
        "poster_link": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        "store_page": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
        "rating": "Very Positive"
    },
    {
        "title": "PEAK",
        "description": "A co-op climbing game where players are lost scouts on a mysterious island, working together to scale the central peak to be rescued.",
        "release_date": "2025-06-16",
        "price": 7.99,
        "genres": ["Co-op", "Multiplayer", "Survival", "Climbing", "Indie"],
        "developer": "Aggro Crab, Landfall",
        "poster_link": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3527290/31bac6b2eccf09b368f5e95ce510bae2baf3cfcd/header.jpg?",
        "store_page": "https://store.steampowered.com/app/3527290/PEAK/",
        "rating": "Very Positive"
    }
]

let steamRatingScale = {
    'Overwhelmingly Positive': 9,
    'Very Positive': 8,
    'Positive': 7,
    'Mostly Positive': 6,
    'Mixed': 5,
    'Mostly Negative': 4,
    'Negative': 3,
    'Very Negative': 2,
    'Overwhelmingly Negative': 1
}

const sortSelect = document.getElementById('sort');
const includedGenresSelect = document.getElementById('includedGenres');
const excludedGenresSelect = document.getElementById('excludedGenres');
const gamesContainer = document.getElementById('games-container');

const sortByOptions = ['Oldest', 'Newest', 'Price (Highest)', 'Price (Lowest)', 'Rating (Highest)', 'Rating (Lowest)']

function getGames(games) {
    gamesContainer.innerHTML = "";

    for (let game of games) {
        let gameGenres = game.genres;
        let gameGenresHtml = "";
        for (let gameGenre of gameGenres) {
            gameGenresHtml += `<span>${gameGenre}</span>`
        }
        gamesContainer.innerHTML += `
        <div class="game-container">
            <a href="${game.store_page}"><img src="${game.poster_link}"></a>
            <div class="game-details">
                <a href="${game.store_page}"><h3>${game.title}</h3></a>
                <p>${game.description}</p>
                <p>Genres:</p> 
                <div class="game-genres">
                    ${gameGenresHtml}
                </div>
                <p>Developer: ${game.developer}</p>
                <p>Reviews: ${game.rating}</p>
                <p>Steam Release Date: ${game.release_date}</p>
                <p>Price (USD): $${game.price}</p>
            </div>
        </div>`;
    }
}

function sortAndFilter() {
    let sortByOption = sortSelect.value;
    let includedGenres = Array.from(includedGenresSelect.selectedOptions).map(option => option.value);
    let excludedGenres = Array.from(excludedGenresSelect.selectedOptions).map(option => option.value);
    includedGenres = new Set(includedGenres);
    excludedGenres = new Set(excludedGenres);

    let sortFilterGames = gamesLibrary;

    if (includedGenres.size > 0) {
        sortFilterGames = sortFilterGames.filter(game => {
            let gameGenres = new Set(game.genres);
            let genresIntersection = gameGenres.intersection(includedGenres);
            return genresIntersection.size == includedGenres.size;
        });
    }

    if (excludedGenres.size > 0) {
        sortFilterGames = sortFilterGames.filter(game => {
            let gameGenres = new Set(game.genres);
            let genresIntersection = gameGenres.intersection(excludedGenres);
            return genresIntersection.size == 0;
        })
    }

    switch (sortByOption) {
        case "Oldest":
            sortFilterGames.sort((a, b) => a.release_date.localeCompare(b.release_date))
            break;
        case "Newest":
            sortFilterGames.sort((a, b) => b.release_date.localeCompare(a.release_date))
            break;
        case "Price (Highest)":
            sortFilterGames.sort((a, b) => b.price - a.price);
            break;
        case "Price (Lowest)":
            sortFilterGames.sort((a, b) => a.price - b.price);
            break;
        case "Rating (Highest)":
            console.log(sortFilterGames);
            sortFilterGames.sort((a, b) => 
                steamRatingScale[b.rating] - steamRatingScale[a.rating]);
            console.log(sortFilterGames);
            break;
        case "Rating (Lowest)":
            console.log(steamRatingScale);
            console.log(sortFilterGames);
            sortFilterGames.sort((a, b) => 
                steamRatingScale[a.rating] - steamRatingScale[b.rating]);
            console.log(sortFilterGames);
            break;
        default:
            sortFilterGames.sort((a, b) => a.release_date.localeCompare(b.release_date))
            break;
    }
    getGames(sortFilterGames);
}

for (let sortByOption of sortByOptions) {
    sortSelect.innerHTML += `<option value='${sortByOption}'>${sortByOption}</option>`
}

// Using a set so no duplicate genres
let allGenres = new Set();

for (let game of gamesLibrary) {
    let gameGenres = new Set(game.genres);
    allGenres = allGenres.union(gameGenres);
}

for (let genre of allGenres) {
    includedGenresSelect.innerHTML += `<option value='${genre}'>${genre}</option>`;
    excludedGenresSelect.innerHTML += `<option value='${genre}'>${genre}</option>`;
}

getGames(gamesLibrary);