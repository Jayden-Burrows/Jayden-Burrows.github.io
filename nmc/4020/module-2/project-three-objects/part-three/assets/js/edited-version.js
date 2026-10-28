/* ===== Narrative Recap data (the only section rendered from an object) ===== */
const narrativeRecapData = {
    games: [
        {
            id: "ff7-original",
            title: "Final Fantasy VII (Original)",
            releaseYear: 1997,
            bannerImage: "https://i.redd.it/iwq93k97bye81.jpg",
            overview: "Cloud Strife, a former SOLDIER turned mercenary, joins AVALANCHE and ends up chasing Sephiroth across the Planet. Aerith, the last of the Cetra, becomes the heart of the party. Her death at the Forgotten Capital is the story's turning point: it breaks Cloud's confidence, unites the group in grief, and her prayer for Holy, carried by the Lifestream, helps save the world.",
            gallery: [
                { caption: "Midgar: where Cloud and Aerith meet", image: "https://i.ytimg.com/vi/1annlcfEbQY/hqdefault.jpg", tint: ["#0f3d3aa8", "#050811cf"] },
                { caption: "The Forgotten Capital altar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiv7k_K72eOGWMOvfieEfsAE2DG5lnpqezdXCPn0QZDCIGncLb0mr2nLA&s=10", tint: ["#3a1a4aa8", "#050811cf"] },
                { caption: "The Lifestream carries Aerith's wish", image: "https://www.svg.com/img/gallery/clouds-entire-final-fantasy-7-timeline-explained/meteorfall-1563317712.jpg", tint: ["#00ffc6a8", "#0b1329cf"] }
            ],
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
            bannerImage: "https://log-wp-media.s3.amazonaws.com/wp-content/uploads/2020/04/final-fantasy-7-remake-famitsu-1.jpg",
            overview: "Remake retells and greatly expands the Midgar section. Its big addition is the Whispers, ghostly guardians of fate that push events back toward the original script. Aerith seems to know what is coming, and by the end the party defeats the Whispers, breaking fate open and showing alternate branches, including one where Zack survives.",
            gallery: [
                { caption: "Sector 5 slums and Aerith's church", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/aerith-final-fantasy-7-church.jpg?q=50&fit=crop&w=825&dpr=1.5", tint: ["#4a3a10a8", "#050811cf"] },
                { caption: "The Whispers watch over fate", image: "https://substackcdn.com/image/fetch/$s_!wykW!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2008f4c0-b0b4-495a-b108-eb882c768484_3840x2160.png", tint: ["#2a2a5aa8", "#050811cf"] },
                { caption: "Zack survives in another world", image: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/11/zack-fair-final-fantasy-7-remake-ending-two-cloud.jpg?q=50&fit=crop&w=825&dpr=1.5", tint: ["#0b3a5aa8", "#050811cf"] }
            ],
            timeline: [
                "Retells and vastly expands the Midgar section of the original narrative.",
                "Introduces 'Whispers', mysterious ghostly entities acting as guardians of fate to enforce the original timeline.",
                "Aerith demonstrates unnatural knowledge of future events, hinting at multiversal awareness.",
                "The party defeats the Whisper Harbinger at the highway perimeter, successfully severing fate.",
                "Alternative timeline branches are created, showing Zack Fair surviving his fatal last stand."
            ]
        },
        {
            id: "ff7-rebirth",
            title: "Final Fantasy VII Rebirth",
            releaseYear: 2024,
            bannerImage: "https://cdn1.epicgames.com/offer/e9a679451d094c1ba3d008b6a01adec5/EGS_FINALFANTASYVIIREBIRTH_SquareEnix_S1_2560x1440-e254f978084058f898118dc49728d04c",
            overview: "Rebirth retells the journey from Kalm through Aerith's death at the Forgotten Capital, adding new scenes, Aerith's memories, and cross-world glimpses of Zack. The ending is the key piece of evidence for this whole case study: Aerith gives Cloud her white materia, Cloud parries Sephiroth's strike, the world splits, and the party sees her dead while Cloud alone sees her alive.",
            gallery: [
                { caption: "Gongaga and the Zack storyline", image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/03/feature-image-of-aerith-and-cloud-at-torgan-s-farm-in-gongaga.jpg", tint: ["#1a4a2aa8", "#050811cf"] },
                { caption: "The white materia changes hands", image: "https://preview.redd.it/whats-actually-going-on-in-ff7r-the-white-materia-v0-v7z0h4vhlp2d1.png?width=1076&format=png&auto=webp&s=3ed244d1e9a640433218a79995cfe7a923c9cec7", tint: ["#e8f4ffa8", "#0b1329cf"] },
                { caption: "Cloud, Zack and Aerith's final battle", image: "https://i.ytimg.com/vi/Ap9T91lpt-Q/maxresdefault.jpg", tint: ["#5a1a2aa8", "#050811cf"] }
            ],
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

/* ===== Carousel content (images are optional: add a URL to `image` and it fades in over the gradient) ===== */
const carouselData = {
    background: [
        { title: "A 3D leap for JRPGs", text: "Cinematic 3D worlds brought the genre to a global audience.", tint: ["#0f3d3aa8", "#050811cf"], image: "https://i.ytimg.com/vi/19OECgt-pIw/maxresdefault.jpg" },
        { title: "An iconic loss", text: "Aerith's death is still one of gaming's most discussed scenes.", tint: ["#3a1a4aa8", "#050811cf"], image: "https://i.ytimg.com/vi/FGuohjmGY3Q/maxresdefault.jpg" },
        { title: "A trilogy retelling", text: "Remake, Rebirth and Revelation expand and change the original.", tint: ["#0b3a5aa8", "#050811cf"], image: "https://i.ebayimg.com/images/g/t00AAOSwWyRi6d6V/s-l1200.jpg" }
    ],
    predictions: [
        { tag: "Confirmed", title: "Wutai", text: "Yuffie's homeland returns with a much larger role as the Shinra war with Wutai is expanded.", tint: ["#5a1a2aa8", "#0b1329cf"] },
        { tag: "Confirmed", title: "Rocket Town", text: "Cid's story arrives in the second half of the game, with the space program legacy and the Highwind.", tint: ["#3a3a5aa8", "#0b1329cf"] },
        { tag: "Confirmed", title: "Highwind & Submarine", text: "Airship travel and an underwater section are teased for the world-spanning finale.", tint: ["#0b3a5aa8", "#0b1329cf"] },
        { tag: "Confirmed", title: "Mideel & the Lifestream", text: "The hot-spring town sets up Cloud's identity collapse and Tifa's role in rebuilding it.", tint: ["#0f4a3aa8", "#0b1329cf"] },
        { tag: "Confirmed", title: "The WEAPONs", text: "Gamescom footage spotlights Weapon battles, and earlier regions will change because of them.", tint: ["#4a2a10a8", "#0b1329cf"] },
        { tag: "Speculation", title: "Junon", text: "Not shown yet, but the original's Junon parade and Rufus plot, plus Shinra's marine base, make a return likely.", tint: ["#2a2a2aa8", "#0b1329cf"] },
        { tag: "Speculation", title: "Vincent's backstory", text: "A Shinra Mansion-linked reveal about Lucrecia and Hojo fits the Vincent DLC and his prominence in trailers.", tint: ["#4a1a3aa8", "#0b1329cf"] },
        { tag: "Speculation", title: "The Northern Crater", text: "The original's final dungeon is a natural place for the Sephiroth and Aerith reckoning.", tint: ["#1a1a4aa8", "#0b1329cf"] }
    ],
    release: [
        { title: "June 5, 2026", text: "Revelation revealed at Summer Game Fest with a Spring 2027 window.", tint: ["#0f3d3aa8", "#050811cf"] },
        { title: "August 2026", text: "A Gamescom trailer spotlights Weapon battles.", tint: ["#5a1a2aa8", "#050811cf"] },
        { title: "September 3, 2026", text: "State of Play confirms April 8, 2027 and opens pre-orders.", tint: ["#0b3a5aa8", "#050811cf"] },
        { title: "April 8, 2027", text: "Launch on PS5, Xbox Series X|S, Switch 2 and PC.", tint: ["#00ffc6a8", "#0b1329cf"] }
    ]
};

/* ===== Recap rendering ===== */
function renderNarrativeRecap() {
    const container = document.getElementById('narrative-recap-container');
    if (!container) return;

    const nav = document.createElement('nav');
    nav.className = 'game-nav-tabs';
    const display = document.createElement('div');
    display.className = 'game-card-display';

    narrativeRecapData.games.forEach((game, i) => {
        const btn = document.createElement('button');
        btn.className = i === 0 ? 'tab-btn active' : 'tab-btn';
        btn.textContent = `${game.title} (${game.releaseYear})`;
        btn.addEventListener('click', () => {
            nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSelectedGameCard(game, display);
        });
        nav.appendChild(btn);
    });

    container.append(nav, display);
    renderSelectedGameCard(narrativeRecapData.games[0], display);
}

function renderSelectedGameCard(game, container) {
    container.innerHTML = '';
    const card = document.createElement('article');
    card.className = 'game-card';

    const banner = document.createElement('img');
    banner.src = game.bannerImage;
    banner.alt = `${game.title} cover art`;
    banner.className = 'banner-img';
    banner.onerror = () => banner.remove();

    const header = document.createElement('div');
    header.className = 'game-card-header';
    const h3 = document.createElement('h3');
    h3.textContent = `${game.title} (${game.releaseYear})`;
    header.appendChild(h3);

    const body = document.createElement('div');
    body.className = 'timeline-container';
    const overview = document.createElement('p');
    overview.className = 'game-overview';
    overview.textContent = game.overview;

    const gal = document.createElement('div');
    gal.className = 'carousel carousel-small';
    body.append(overview, gal);
    buildCarousel(gal, game.gallery, true);

    const ol = document.createElement('ol');
    ol.className = 'timeline-list';
    game.timeline.forEach(text => {
        const li = document.createElement('li');
        li.className = 'timeline-item';
        li.textContent = text;
        ol.appendChild(li);
    });
    body.appendChild(ol);

    card.append(banner, header, body);
    container.appendChild(card);
}

/* ===== Reusable rotating carousel ===== */
function buildCarousel(el, slides) {
    el.innerHTML = '';
    const track = document.createElement('div');
    track.className = 'car-track';
    slides.forEach(s => {
        const slide = document.createElement('div');
        slide.className = 'car-slide';
        if (s.image) {
            slide.style.background = `linear-gradient(135deg, ${s.tint[0]}, ${s.tint[1]}), url('${s.image}') center 20% / cover no-repeat, #0f1c3f`;
            console.log(slide.style.background);
        } else {
            slide.style.background = `linear-gradient(135deg, ${s.tint[0]}, ${s.tint[1]})`;
        }
        const info = document.createElement('div');
        info.className = 'car-info';
        if (s.tag) {
            const tag = document.createElement('span');
            tag.className = 'car-tag ' + s.tag.toLowerCase();
            tag.textContent = s.tag;
            info.appendChild(tag);
        }
        const t = document.createElement('h4');
        t.textContent = s.title || s.caption;
        info.appendChild(t);
        if (s.text) {
            const p = document.createElement('p');
            p.textContent = s.text;
            info.appendChild(p);
        }
        slide.appendChild(info);
        track.appendChild(slide);
    });

    const prev = Object.assign(document.createElement('button'), { className: 'car-btn prev', textContent: '‹', ariaLabel: 'Previous' });
    const next = Object.assign(document.createElement('button'), { className: 'car-btn next', textContent: '›', ariaLabel: 'Next' });
    const dots = document.createElement('div');
    dots.className = 'car-dots';
    const dotEls = slides.map((_, i) => {
        const d = document.createElement('button');
        d.className = 'dot';
        d.ariaLabel = `Slide ${i + 1}`;
        d.addEventListener('click', () => go(i, true));
        dots.appendChild(d);
        return d;
    });
    el.append(track, prev, next, dots);

    let index = 0, timer;
    function go(i, user) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dotEls.forEach((d, n) => d.classList.toggle('active', n === index));
        if (user) restart();
    }
    function restart() {
        clearInterval(timer);
        timer = setInterval(() => go(index + 1), 5000);
    }
    prev.addEventListener('click', () => go(index - 1, true));
    next.addEventListener('click', () => go(index + 1, true));
    el.addEventListener('mouseenter', () => clearInterval(timer));
    el.addEventListener('mouseleave', restart);
    go(0);
    restart();
}

function setupCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(el => {
        const slides = carouselData[el.dataset.carousel];
        if (slides) buildCarousel(el, slides);
    });
}

/* ===== Scroll animations & progress bar ===== */
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.scroll-reveal, .theory, .transition-line, .verdict-strip').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

function setupProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNarrativeRecap();
    setupCarousels();
    setupScrollObserver();
    setupProgressBar();
});