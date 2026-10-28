// JavaScript Object storing data for the interactive Narrative Recap carousel & timeline
const narrativeRecapData = {
    games: [
        {
            id: "ff7-original",
            title: "Final Fantasy VII (Original)",
            releaseYear: 1997,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/c/c2/FFVIIBoxArt.jpg",
            synopsis: "The foundational 1997 classic that established the enduring mythology of Mako, Shinra, and the Lifestream.",
            timeline: [
                "Mercenary Cloud Strife joins eco-terrorist cell AVALANCHE to bomb Mako Reactor 1 in Midgar.",
                "Cloud encounters Aerith Gainsborough, the last surviving Cetra, fleeing corporate capture by Shinra.",
                "The party pursues the legendary fallen hero turned destroyer, Sephiroth, across the globe.",
                "Aerith journeys alone to the Forgotten Capital to invoke Holy and shield the Planet from impending meteor destruction.",
                "Sephiroth descends from the ceiling and kills Aerith in a shocking, emotional climax.",
                "Aerith's spirit integrates into the Lifestream, ultimately commanding it to assist Holy and save Gaia."
            ]
        },
        {
            id: "ff7-remake",
            title: "Final Fantasy VII Remake",
            releaseYear: 2020,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/a/a2/FFVIIRemake-cover.jpg",
            synopsis: "An ambitious expansion of the Midgar arc that introduces metaphysical guardians of destiny known as Whispers.",
            timeline: [
                "Vastly expands the initial Midgar chapter into a standalone narrative experience focusing on corporate oppression.",
                "Introduces mysterious phantom entities called 'Whispers' tasked with policing time to keep the original timeline intact.",
                "Aerith exhibits supernatural foresight, hinting at deep awareness of future events and alternate possibilities.",
                "The party breaches the singularity and defeats the Whisper Harbinger, successfully cutting ties with preordained fate.",
                "Alternative reality branches are unlocked, depicting Zack Fair surviving his iconic last stand outside Midgar."
            ]
        },
        {
            id: "ff7-rebirth",
            title: "Final Fantasy VII Rebirth",
            releaseYear: 2024,
            bannerImage: "https://upload.wikimedia.org/wikipedia/en/b/b2/Final_Fantasy_VII_Rebirth_cover_art.jpg",
            synopsis: "The expansive open-world journey leading to the heartbreaking climax at the Forgotten Capital.",
            timeline: [
                "Spans the continental journey from Kalm across diverse regions leading up to the Forgotten Capital.",
                "Aerith passes her white materia to Cloud across dimensional boundaries just before entering the altar.",
                "In a radical sequence, Cloud perceives himself parrying Sephiroth's fatal downward strike.",
                "A stark timeline fracture occurs: Cloud sees an unharmed Aerith, while companions view her lifeless body.",
                "Multi-tiered final battle where Cloud fights side-by-side with Zack Fair and an alternate manifestation of Aerith.",
                "The party departs aboard the Tiny Bronco while Cloud alone sees Aerith waving farewell beneath a torn sky."
            ]
        }
    ]
};

// Render Narrative Recap Carousel and Interactive Timeline
function renderNarrativeRecap() {
    const container = document.getElementById('narrative-recap-container');
    if (!container) return;

    const navWrapper = document.createElement('div');
    navWrapper.className = 'game-nav-tabs';

    const displayCardWrapper = document.createElement('div');
    displayCardWrapper.className = 'carousel-card-wrapper';

    narrativeRecapData.games.forEach((game, index) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = index === 0 ? 'tab-btn active' : 'tab-btn';
        tabBtn.innerHTML = `<span>${game.title}</span> <small>(${game.releaseYear})</small>`;
        
        tabBtn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            tabBtn.classList.add('active');
            updateCarouselCard(game, displayCardWrapper);
        });

        navWrapper.appendChild(tabBtn);
    });

    container.appendChild(navWrapper);
    container.appendChild(displayCardWrapper);

    // Initial render
    updateCarouselCard(narrativeRecapData.games[0], displayCardWrapper);
}

function updateCarouselCard(game, wrapper) {
    wrapper.style.opacity = '0';
    setTimeout(() => {
        wrapper.innerHTML = '';

        const card = document.createElement('article');
        card.className = 'carousel-card';

        // Banner Image
        const bannerContainer = document.createElement('div');
        bannerContainer.className = 'carousel-banner-container';
        
        const imgTag = document.createElement('img');
        imgTag.src = game.bannerImage;
        imgTag.alt = `${game.title} Official Box Art`;
        imgTag.className = 'carousel-banner-img';
        bannerContainer.appendChild(imgTag);

        // Content Body
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'carousel-body';

        const titleHeader = document.createElement('h3');
        titleHeader.textContent = `${game.title} (${game.releaseYear})`;

        const synopsisP = document.createElement('p');
        synopsisP.className = 'carousel-synopsis';
        synopsisP.textContent = game.synopsis;

        // Timeline List
        const timelineList = document.createElement('ol');
        timelineList.className = 'timeline-list';

        game.timeline.forEach(eventText => {
            const li = document.createElement('li');
            li.className = 'timeline-item';
            li.innerHTML = `<span>${eventText}</span>`;
            timelineList.appendChild(li);
        });

        bodyDiv.appendChild(titleHeader);
        bodyDiv.appendChild(synopsisP);
        bodyDiv.appendChild(timelineList);

        card.appendChild(bannerContainer);
        card.appendChild(bodyDiv);
        wrapper.appendChild(card);

        wrapper.style.transition = 'opacity 0.4s ease-in-out';
        wrapper.style.opacity = '1';
    }, 150);
}

// Setup Intersection Observer for Scroll Animations
function setupScrollObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.10
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNarrativeRecap();
    setupScrollObserver();
});