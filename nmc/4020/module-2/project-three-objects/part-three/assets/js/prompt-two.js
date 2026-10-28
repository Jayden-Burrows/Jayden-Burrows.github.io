// JavaScript Object storing all required case study data
const ff7CaseStudyData = {
    metadata: {
        title: "Case Study: Conflicting Theories on Aerith's Fate",
        subtitle: "Analyzing Narrative Mechanics, Multiversal Splinters, and Fan Theories in Final Fantasy VII Revelation",
        author: "Jayden Burrows",
        course: "NMC 4020 - Advanced Web Development"
    },
    sections: [
        {
            id: "overview-background",
            title: "1. Project Overview & Background",
            type: "standard",
            content: `
                <p>Released in 1997, <em>Final Fantasy VII</em> revolutionized the video game industry by bringing Japanese Role-Playing Games (JRPGs) into the global mainstream through cinematic 3D graphics, intricate thematic storytelling, and the shocking, iconic tragic loss of its key heroine, Aerith Gainsborough.</p>
                <p>Decades later, Square Enix initiated an ambitious reimagining with the Remake Trilogy—comprising <em>Final Fantasy VII Remake</em> (2020), <em>Final Fantasy VII Rebirth</em> (2024), and the upcoming <em>Final Fantasy VII Revelation</em> (2027). While maintaining the core narrative framework of the original game, this trilogy expands world-building and introduces crucial plot variations, altering player expectations surrounding fate and destiny.</p>
            `
        },
        {
            id: "core-question",
            title: "2. Core Question",
            type: "standard",
            content: `
                <div class="callout-box">
                    <p class="question-text">Will the main cast successfully change Aerith's fate, or is Cloud hallucinating her survival?</p>
                    <p>The central enigma framing the narrative climax of <em>Final Fantasy VII Revelation</em> centers on Aerith's ultimate state of existence: Will Cloud Strife and the surviving companions successfully rewrite fate to keep Aerith alive in physical reality, or is Cloud suffering from severe Jenova-induced hallucinations and psychological denial over her true death?</p>
                </div>
            `
        },
        {
            id: "narrative-recap",
            title: "3. Narrative Recap",
            type: "interactive-games",
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
        },
        {
            id: "upcoming-events",
            title: "5. Predicted Upcoming Events",
            type: "standard",
            content: `
                <p><em>Final Fantasy VII Revelation</em> is set to address the remaining major story arcs from the original 1997 release, including:</p>
                <ul class="custom-list">
                    <li><strong>Vincent's Backstory:</strong> Exploration of his connections to Lucrecia Crescent and Professor Hojo.</li>
                    <li><strong>The Underground & Wutai:</strong> Infiltration of Shinra facilities and Yuffie's war effort in Wutai.</li>
                    <li><strong>Identity & Tifa:</strong> Tifa helping Cloud enter the Lifestream to reconstruct his fractured memories and identity.</li>
                    <li><strong>Cid & The Highwind:</strong> Rocket Town history, space program legacy, and full airship command.</li>
                    <li><strong>The WEAPONs:</strong> Planetary defense titans awakening to protect Gaia.</li>
                </ul>
            `
        },
        {
            id: "debate",
            title: "6. Theory Debate: Fate vs. Convergence",
            type: "standard",
            content: `
                <div class="debate-grid">
                    <div class="debate-card theory-a">
                        <h3>Theory A: Canonical Convergence (Aerith Is Dead)</h3>
                        <p>Proponents argue that Aerith is physically deceased in the primary timeline. The scenes where Cloud sees her alive stem from his fractured psyche, severe PTSD, and Jenova cell manipulation meant to prevent him from grieving and keeping his mind unstable. In this view, Aerith exists solely within the Lifestream, comforting Cloud until he faces reality.</p>
                    </div>
                    <div class="debate-card theory-b">
                        <h3>Theory B: Defying Destiny (Aerith Lives in Parallel)</h3>
                        <p>Proponents suggest that when Cloud deflected Sephiroth's sword, he successfully split fate and created a new parallel world branch where Aerith survived, similar to Zack's timelines. Cloud's dual consciousness allows him to see across the Lifestream tear into this alternate reality. In <em>Revelation</em>, the party will merge or traverse these worlds to reunite fully.</p>
                    </div>
                </div>
            `
        },
        {
            id: "my-opinion",
            title: "7. Personal Assessment & Conclusion",
            type: "standard",
            content: `
                <div class="opinion-card">
                    <p><strong>My Stance:</strong> Aerith may be officially dead within the physical realm of the main cast's world—meaning she will never be able to physically reunite or journey with Cloud, Tifa, and the rest of the main group again. However, through the mechanics of the Lifestream and branching timelines, she will retain the opportunity to live out her life peacefully in a distinct parallel world.</p>
                </div>
            `
        },
        {
            id: "release-coverage",
            title: "8. Release Date, Platforms & DLC Details",
            type: "standard",
            content: `
                <div class="info-grid">
                    <div class="info-item"><strong>Release Date:</strong> April 8, 2027 (24-Hour Early Access April 7, 2027)</div>
                    <div class="info-item"><strong>Platforms:</strong> PS5, Nintendo Switch 2, Windows (Steam), Xbox Series X/S</div>
                    <div class="info-item"><strong>Editions:</strong> Standard ($69.99), Premium ($99.99), Premium Plus ($109.99)</div>
                    <div class="info-item"><strong>Pre-Order Bonus:</strong> "Mecha-Chocobo & Moogle" Summoning Materia</div>
                    <div class="info-item"><strong>Coverage:</strong> Summer Game Fest 2026 & Sony State of Play (Sept 2026)</div>
                    <div class="info-item"><strong>Planned DLCs:</strong> Story DLC 1 (Sephiroth) & Story DLC 2 (Vincent & The Turks)</div>
                </div>
            `
        }
    ]
};

// Main function to render page contents dynamically
function renderCaseStudyPage() {
    document.getElementById('main-title').textContent = ff7CaseStudyData.metadata.title;
    document.getElementById('main-subtitle').textContent = ff7CaseStudyData.metadata.subtitle;
    document.getElementById('author-name').textContent = ff7CaseStudyData.metadata.author;
    document.getElementById('course-name').textContent = ff7CaseStudyData.metadata.course;

    const container = document.getElementById('content-container');

    ff7CaseStudyData.sections.forEach(section => {
        const sectionElement = document.createElement('section');
        sectionElement.setAttribute('id', section.id);
        sectionElement.className = 'content-section';

        const headingElement = document.createElement('h2');
        headingElement.textContent = section.title;
        sectionElement.appendChild(headingElement);

        if (section.type === 'standard') {
            const bodyElement = document.createElement('div');
            bodyElement.innerHTML = section.content;
            sectionElement.appendChild(bodyElement);
        } else if (section.type === 'interactive-games') {
            // Build interactive game tabs module
            const gameNav = document.createElement('nav');
            gameNav.className = 'game-nav-tabs';

            const cardContainer = document.createElement('div');
            cardContainer.className = 'game-card-display';

            section.games.forEach((game, index) => {
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

            sectionElement.appendChild(gameNav);
            sectionElement.appendChild(cardContainer);

            // Initial rendering of first game
            renderSelectedGameCard(section.games[0], cardContainer);
        }

        container.appendChild(sectionElement);
    });
}

// Function to render the active game object inside the card container
function renderSelectedGameCard(game, container) {
    container.innerHTML = ''; // Clear prior content

    const card = document.createElement('article');
    card.className = 'game-card';

    // Banner image
    const imgBanner = document.createElement('div');
    imgBanner.className = 'game-banner';
    imgBanner.style.backgroundImage = `url('${game.bannerImage}')`;
    
    const bannerImgTag = document.createElement('img');
    bannerImgTag.src = game.bannerImage;
    bannerImgTag.alt = `${game.title} Cover Banner`;
    bannerImgTag.className = 'banner-img';

    // Title & Year Header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'game-card-header';
    
    const gameTitle = document.createElement('h3');
    gameTitle.textContent = `${game.title} (${game.releaseYear})`;
    cardHeader.appendChild(gameTitle);

    // Timeline component
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

    // Assembly
    card.appendChild(bannerImgTag);
    card.appendChild(cardHeader);
    card.appendChild(timelineContainer);

    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', renderCaseStudyPage);