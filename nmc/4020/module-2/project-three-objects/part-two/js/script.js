// Navigation Links Object Data
const page_links = [
    { label: 'Portfolio', href: "/", icon: "zmdi-home" },
    { label: 'Overview', href: '#overview-sec', icon: 'zmdi-info-outline' },
    { label: 'Recap', href: '#recap-sec', icon: 'zmdi-time-restore' },
    { label: 'Agents', href: '#agents-sec', icon: 'zmdi-accounts-alt' },
    { label: 'Roadmap', href: '#roadmap-sec', icon: 'zmdi-compass' },
    { label: 'Theories', href: '#theories-sec', icon: 'zmdi-border-color' },
    { label: 'Summary', href: '#summary-sec', icon: 'zmdi-flag' }
];

// Primary Timeline Agents Object Data
const timeline_agents = [
    {
        name: "Aerith Gainsborough",
        role: "THE CETRA / LIFESTREAM NEXUS",
        description: "Possesses future memories passed down via the Lifestream. Uses empty vs full White Materia swaps across dream dimensions to preserve Holy and bypass Sephiroth's temporal traps.",
        statusTag: "Holy Materia Keeper",
        statusColorClass: "text-emerald-400/90",
        imgUrl: "https://preview.redd.it/whats-actually-going-on-in-ff7r-the-white-materia-v0-rbf11mamjf3d1.jpeg?width=1076&format=pjpg&auto=webp&s=4148b836454470cc6abdd440ba9b688e7c92c616",
        placeholderText: "Aerith+Image+Holder"
    },
    {
        name: "Cloud Strife",
        role: "UNRELIABLE NARRATOR / NEXUS",
        description: "Infused with Jenova cells and S-cells. Cloud's fractured psyche makes it unclear whether he is witnessing genuine alternate timeline realities or Jenova-driven hallucinations.",
        statusTag: "S-Cell Carrier / Nexus",
        statusColorClass: "text-sky-400/90",
        imgUrl: "https://preview.redd.it/ff7-rebirth-ending-exploration-v0-x1xjdo8gbdpc1.png?width=3026&format=png&auto=webp&s=682051487e2ebb139961670071663c1d62abaac4",
        placeholderText: "Cloud+Image+Holder"
    },
    {
        name: "Sephiroth",
        role: "THE METAPHYSICAL ANTAGONIST",
        description: "Seeks \"The Confluence\"—a merging of infinite decaying worlds into a singular nexus to absorb all planetary energy, utilizing Black Whispers to enforce his will.",
        statusTag: "Black Whisper Master",
        statusColorClass: "text-red-400/90",
        imgUrl: "https://i.redd.it/zi3rt7ojt1he1.jpeg",
        placeholderText: "Sephiroth+Image+Holder"
    },
    {
        name: "Zack Fair",
        role: "TIMELINE DIVERGENCE POINT",
        description: "Saved from his canonical fate at Midgar. Navigates multiple branching worlds where Biggs, Aerith, and Cloud suffer different fates, eventually bridging worlds in battle.",
        statusTag: "Timeline Divergence Point",
        statusColorClass: "text-amber-400/90",
        imgUrl: "https://i.redd.it/just-finished-rebirth-after-120-hours-v0-tyvag7azodrd1.jpg?width=3840&format=pjpg&auto=webp&s=971beb65f18fb3d412f837a98c4d38fbfd638d2e",
        placeholderText: "Zack+Image+Holder"
    }
];

// Continuity Roadmap Object Data
const roadmap_data = [
    {
        id: "tab-1",
        btnText: "1997 Canon",
        btnIcon: "zmdi-play",
        bannerTag: "1997 CANON PHASE",
        bgUrl: "https://preview.redd.it/final-fantasy-viis-ending-is-a-reference-to-secret-of-mana-v0-co9fr0v6by6c1.png?width=768&format=png&auto=webp&s=8eba2f5ce1317809318eb0014110355ec72f21e6",
        title: "Unbroken Single Reality (1997 Canon)",
        description: "Aerith dies permanently at the Forgotten Capital. Her spirit returns to the Lifestream, channelling the planet's spiritual force to assist Holy against Meteor. The story progresses linearly through Advent Children, Dirge of Cerberus, and the distant future where Midgar returns to nature.",
        takeaway: "Destiny is singular and immutable. Loss is unconditional and permanent."
    },
    {
        id: "tab-2",
        btnText: "Remake Intergrade",
        btnIcon: "zmdi-flash",
        bannerTag: "REMAKE / INTERGRADE PHASE",
        bgUrl: "https://preview.redd.it/did-she-know-v0-t57ev7o17pcg1.png?width=640&crop=smart&auto=webp&s=e7670aa05f258ba57a0df911e978c68092ca30fa",
        title: "Shattering the Arbiters of Fate (Remake)",
        description: "By defeating the Whisper Harbinger at the Singularity in Midgar, the main party severs the timeline from its predetermined course. This act creates branching temporal paths, saving Zack Fair in an alternate world branch while leaving the main timeline open to divergence.",
        takeaway: "\"The future is a blank page.\" The canonical script of 1997 is officially unlocked."
    },
    {
        id: "tab-3",
        btnText: "Rebirth Splinters",
        btnIcon: "zmdi-layers",
        bannerTag: "REBIRTH SPLINTERS PHASE",
        bgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0Mke8cb3UxU8oUtSoucsnPd-9k-6HVYXZry9CuD6Njj-cm6La89E7Byh&s=10",
        title: "Multiversal Fractures (Rebirth)",
        description: "Multiple distinct worlds exist simultaneously (differentiated visually by variations of Stamp the dog). Cloud deflects Sephiroth's blade at the altar, triggering a rainbow particle burst—a signature visual indicator of timeline splits. Cloud sees Aerith alive, while others see her death.",
        takeaway: "Cloud exists at the focal nexus of two conflicting realities: one where Aerith died, and one where she survived."
    },
    {
        id: "tab-4",
        btnText: "Part 3 Expectations",
        btnIcon: "zmdi-flag",
        bannerTag: "PART 3 EXPECTATIONS",
        bgUrl: "https://i.redd.it/w5zc2hwwdxgd1.jpeg",
        title: "The Final Convergence (Part 3)",
        description: "Part 3 must reconcile Cloud's fractured perception. Either Cloud will experience a devastating psychological breakdown upon realizing Aerith's true death, or the party will physically unite parallel worlds to defeat Sephiroth once and for all across time.",
        takeaway: "Will the trilogy rejoin the original canon, or permanently redefine Final Fantasy VII's destiny?"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    // 1. Render Navigation Bar Links Dynamically
    renderDynamicNav();

    // 2. Render Timeline Agents Cards Dynamically
    renderTimelineAgents();

    // 3. Render Continuity Roadmap Components Dynamically
    renderContinuityRoadmap();

    // 4. Scroll Reveal Intersection Observer
    initScrollReveal();
});

/**
 * Dynamic Nav Generator
 */
function renderDynamicNav() {
    const navContainer = document.getElementById("dynamic-nav");
    if (!navContainer) return;

    navContainer.innerHTML = page_links.map(link => `
        <a href="${link.href}" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all flex items-center gap-1.5">
            <i class="zmdi ${link.icon} text-sky-400"></i> ${link.label}
        </a>
    `).join("");
}

/**
 * Dynamic Timeline Agents Generator
 */
function renderTimelineAgents() {
    const agentsContainer = document.getElementById("agents-grid-container");
    if (!agentsContainer) return;

    agentsContainer.innerHTML = timeline_agents.map(agent => `
        <div class="glass-card rounded-xl overflow-hidden border border-gray-800 flex flex-col justify-between">
            <div>
                <div class="relative h-44 overflow-hidden border-b border-gray-800 bg-gray-900">
                    <img src="${agent.imgUrl}"
                        alt="${agent.name}"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onerror="this.src='https://placehold.co/500x350/161b22/38bdf8?text=${agent.placeholderText}'">
                </div>
                <div class="p-5 space-y-2">
                    <h4 class="text-lg font-bold text-white">${agent.name}</h4>
                    <p class="text-xs text-gray-400 leading-relaxed">${agent.description}</p>
                </div>
            </div>
            <div class="px-5 pb-4 text-[11px] ${agent.statusColorClass} font-mono flex items-center gap-1">
                <i class="zmdi zmdi-dot-circle"></i> ${agent.statusTag}
            </div>
        </div>
    `).join("");
}

/**
 * Dynamic Continuity Roadmap Generator & Handler
 */
function renderContinuityRoadmap() {
    const tabsContainer = document.getElementById("roadmap-tabs-container");
    const contentsContainer = document.getElementById("roadmap-contents-container");
    const bannerImg = document.getElementById("roadmap-banner-img");
    const bannerTag = document.getElementById("roadmap-banner-tag");

    if (!tabsContainer || !contentsContainer) return;

    // Generate Tab Buttons
    tabsContainer.innerHTML = roadmap_data.map((item, index) => {
        const isActive = index === 0;
        const btnClasses = isActive
            ? "tab-btn active px-4 py-2 rounded-lg bg-sky-500 text-white font-medium text-sm transition-all flex items-center gap-2"
            : "tab-btn px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 font-medium text-sm transition-all flex items-center gap-2";

        return `
            <button type="button"
                class="${btnClasses}"
                data-tab="${item.id}"
                data-bg="${item.bgUrl}"
                data-tag="${item.bannerTag}">
                <i class="zmdi ${item.btnIcon}"></i> ${item.btnText}
            </button>
        `;
    }).join("");

    // Generate Tab Content Panels
    contentsContainer.innerHTML = roadmap_data.map((item, index) => {
        const isActive = index === 0;
        const contentClasses = isActive ? "tab-content active space-y-4" : "tab-content space-y-4 hidden";

        return `
            <div id="${item.id}" class="${contentClasses}">
                <h3 class="text-xl font-bold text-white">${item.title}</h3>
                <p class="text-sm text-gray-300 leading-relaxed">${item.description}</p>
                <div class="p-4 rounded-lg bg-gray-900/60 border border-gray-800 text-xs text-gray-400 space-y-2">
                    <div class="text-sky-400 font-semibold uppercase tracking-wider">Key Takeaway:</div>
                    <p>${item.takeaway}</p>
                </div>
            </div>
        `;
    }).join("");

    // Set Initial Banner Image & Tag
    if (bannerImg && roadmap_data[0]) {
        bannerImg.src = roadmap_data[0].bgUrl;
    }
    if (bannerTag && roadmap_data[0]) {
        bannerTag.textContent = roadmap_data[0].bannerTag;
    }

    // Tab Switching Click Event Listeners
    const tabBtns = tabsContainer.querySelectorAll(".tab-btn");
    const tabPanels = contentsContainer.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-tab");
            const bgUrl = btn.getAttribute("data-bg");
            const tagText = btn.getAttribute("data-tag");

            // Update Active Tab Button Styles
            tabBtns.forEach(b => {
                b.classList.remove("active", "bg-sky-500", "text-white");
                b.classList.add("bg-gray-800", "text-gray-300");
            });

            btn.classList.add("active", "bg-sky-500", "text-white");
            btn.classList.remove("bg-gray-800", "text-gray-300");

            // Fade Banner Image Transition
            if (bannerImg && bgUrl) {
                bannerImg.style.opacity = '0.3';
                setTimeout(() => {
                    bannerImg.src = bgUrl;
                    bannerImg.style.opacity = '1';
                }, 150);
            }

            if (bannerTag && tagText) {
                bannerTag.textContent = tagText;
            }

            // Switch Panel Visibility
            tabPanels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.remove("hidden");
                    panel.classList.add("active");
                } else {
                    panel.classList.add("hidden");
                    panel.classList.remove("active");
                }
            });
        });
    });
}

/**
 * Scroll Reveal Animation Observer
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}