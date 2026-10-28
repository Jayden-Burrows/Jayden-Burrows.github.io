// JavaScript Object specifically storing data for the Narrative Recap section games
const narrativeRecapData = {
    games: [
        {
            id: "ff7-original",
            title: "Final Fantasy VII (Original)",
            releaseYear: 1997,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/c/c2/FFVIIBoxArt.jpg",
            timeline: [
                "Mercenary Cloud Strife joins eco-terrorist group AVALANCHE to bomb Mako Reactor 1 in Midgar.",
                "Cloud meets Aerith Gainsborough, the last surviving Cetra (Ancient), fleeing Shinra agents.",
                "The party escapes Midgar and pursues the villainous Sephiroth across the Planet.",
                "Aerith travels alone to the Forgotten Capital to pray for Holy to protect the planet from Meteor.",
                "Sephiroth descends from above and kills Aerith in front of Cloud and the party.",
                "Aerith's spirit enters the Lifestream, ultimately guiding it to assist Holy and save the Planet."
            ]
        },
        {
            id: "ff7-remake",
            title: "Final Fantasy VII Remake",
            releaseYear: 2020,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/a/a2/FFVIIRemake-cover.jpg",
            timeline: [
                "Retells and vastly expands the Midgar section of the original narrative.",
                "Introduces 'Whispers'—mysterious ghostly entities acting as guardians of fate to enforce the original timeline.",
                "Aerith demonstrates unnatural knowledge of future events, hinting at multiversal awareness.",
                "The party defeats the Whisper Harbinger at the highway perimeter, successfully severing fate.",
                "Alternative timeline branches are created, showing Zack Fair surviving his fatal last stand."
            ]
        },
        {
            id: "ff7-rebirth",
            title: "Final Fantasy VII Rebirth",
            releaseYear: 2024,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/b/b2/Final_Fantasy_VII_Rebirth_cover_art.jpg",
            timeline: [
                "Covers the journey beyond Midgar from Kalm through the Forgotten Capital.",
                "Aerith hands her white materia to Cloud across world boundaries before entering the altar.",
                "In a pivotal moment at the altar, Cloud parries Sephiroth's falling blade in his personal perspective.",
                "A timeline split occurs: Cloud sees Aerith unharmed, while the rest of the party sees her lying dead.",
                "Multi-phase final battle where Cloud fights alongside Zack in one realm and a manifestation of Aerith in another.",
                "The party departs in the Highwind while Cloud alone sees Aerith waving goodbye and notices a tear in the sky."
            ]
        }
    ]
};

// Render Narrative Recap component from the JS object
function renderNarrativeRecap() {
    const container = document.getElementById('narrative-recap-container');
    if (!container) return;

    // Build interactive game tabs module
    const gameNav = document.createElement('nav');
    gameNav.className = 'game-nav-tabs';

    const cardContainer = document.createElement('div');
    cardContainer.className = 'game-card-display';

    narrativeRecapData.games.forEach((game, index) => {
        const navBtn = document.createElement('button');
        navBtn.className = index === 0 ? 'tab-btn active' : 'tab-btn';
        navBtn.textContent = `${game.title} (${game.releaseYear})`;
        navBtn.dataset.gameId = game.id;

        navBtn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            navBtn.classList.add('active');
            renderSelectedGameCard(game, cardContainer);
        });

        gameNav.appendChild(navBtn);
    });

    container.appendChild(gameNav);
    container.appendChild(cardContainer);

    // Initial render of the first game
    renderSelectedGameCard(narrativeRecapData.games[0], cardContainer);
}

// Render the active game card
function renderSelectedGameCard(game, container) {
    container.innerHTML = '';

    const card = document.createElement('article');
    card.className = 'game-card';

    const bannerImgTag = document.createElement('img');
    bannerImgTag.src = game.bannerImage;
    bannerImgTag.alt = `${game.title} Cover Banner`;
    bannerImgTag.className = 'banner-img';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'game-card-header';

    const gameTitle = document.createElement('h3');
    gameTitle.textContent = `${game.title} (${game.releaseYear})`;
    cardHeader.appendChild(gameTitle);

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-container';

    const timelineList = document.createElement('ol');
    timelineList.className = 'timeline-list';

    game.timeline.forEach(eventText => {
        const item = document.createElement('li');
        item.className = 'timeline-item';

        const contentSpan = document.createElement('span');
        contentSpan.textContent = eventText;

        item.appendChild(contentSpan);
        timelineList.appendChild(item);
    });

    timelineContainer.appendChild(timelineList);

    card.appendChild(bannerImgTag);
    card.appendChild(cardHeader);
    card.appendChild(timelineContainer);

    container.appendChild(card);
}

// Setup Intersection Observer for Scroll Animations
function setupScrollObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderNarrativeRecap();
    setupScrollObserver();
});