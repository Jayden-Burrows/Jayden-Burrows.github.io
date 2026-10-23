document.addEventListener('DOMContentLoaded', () => {
    // Kali Linux terminal: expands into the hero, loads, then opens the about window
    const stage = document.getElementById('about-sec');
    const stageInner = stage.querySelector('.stage-inner');
    const aboutWindow = document.getElementById('about-window');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInputLine = document.getElementById('terminal-input-line');
    const mobileFallback = document.getElementById('mobile-fallback');
    const mobileProceed = document.getElementById('mobile-proceed');
    const mainContent = document.getElementById('main-content');
    const skipBtn = document.getElementById('skip-intro');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const deepLink = location.hash.length > 1;

    const asciiArt = `
    ████╗██╗     ██╗██████╗  
    ╚═██║████╗ ████║██╔═══██╗
      ██║██╔═██╔═██║██████╔═╝
██╗   ██║██║ ╚═╝ ██║██╔═══██╗
╚═████╔═╝██║     ██║██████╔═╝
  ╚═══╝  ╚═╝     ╚═╝╚═════╝ 
    `;

    const commands = [
        { text: "> Initializing secure connection...", delay: 500 },
        { text: "> Loading profile data...", delay: 800 },
        { text: "> Decrypting user identity...", delay: 600 },
        { text: "> Access granted.", delay: 400 },
        { text: "", delay: 200 },
        { text: asciiArt, delay: 100 },
        { text: "Jayden Burrows — Cybersecurity & GRC", delay: 100 },
        { text: "", delay: 200 },
        { text: "Type 'help' for available commands.", delay: 300 }
    ];

    let commandIndex = 0, started = false, skipped = false;

    function typeCommand() {
        if (commandIndex < commands.length) {
            const cmd = commands[commandIndex];
            terminalOutput.innerHTML += cmd.text + "\n";
            commandIndex++;
            setTimeout(typeCommand, cmd.delay);
        } else {
            terminalInputLine.classList.remove('hidden');
            if (window.innerWidth <= 600) mobileFallback.classList.remove('hidden');
        }
    }


    if (!deepLink) setTimeout(typeCommand, 500);

    const sleep = ms => new Promise(r => setTimeout(r, skipped ? 0 : ms));

    function finishIntro() {
        const need = aboutWindow.offsetHeight + 48;
        if (need > stageInner.offsetHeight) stageInner.style.minHeight = need + 'px';
        stage.classList.add('expanded', 'about-open');
        mainContent.classList.replace('invisible', 'visible');
        document.documentElement.classList.remove('intro-lock');
        skipBtn.classList.add('hidden');
    }

    async function typeLine(text, speed = 28) {
        const line = document.createElement('div');
        terminalOutput.appendChild(line);
        if (skipped) { line.textContent = text; return; }
        for (const ch of text) { line.textContent += ch; await sleep(speed); }
    }

    async function runLoading() {
        terminalOutput.textContent = '';
        terminalInputLine.classList.add('hidden');
        mobileFallback.classList.add('hidden');
        skipBtn.classList.remove('hidden');
        await typeLine('$ ./load_profile.sh');
        const bar = document.createElement('div');
        terminalOutput.appendChild(bar);
        for (let i = 0; i <= 20; i++) {
            if (skipped) i = 20;
            bar.textContent = `[${'#'.repeat(i)}${'-'.repeat(20 - i)}] ${i * 5}%`;
            await sleep(55);
        }
        await typeLine('> profile loaded.', 15);
        await typeLine('$ whoami');
        await typeLine('jayden', 0);
        await typeLine('$ xdg-open about.html');
        await sleep(500);
        finishIntro();
    }

    async function proceedToPortfolio() {
        if (started) return;
        started = true;
        if (reduceMotion) skipped = true;
        stage.classList.add('expanded');
        await sleep(750);
        runLoading();
    }

    function skipIntro() {
        skipped = true;
        stage.classList.add('no-anim');
        finishIntro();
    }

    document.getElementById('btn-minimize').addEventListener('click', proceedToPortfolio);
    document.getElementById('btn-maximize').addEventListener('click', proceedToPortfolio);
    document.getElementById('btn-close').addEventListener('click', proceedToPortfolio);
    document.addEventListener('keydown', (e) => {
        if (!started) { if (e.key === 'Enter') proceedToPortfolio(); }
        else if (!stage.classList.contains('about-open')) skipIntro();
    });
    mobileProceed.addEventListener('click', proceedToPortfolio);
    skipBtn.addEventListener('click', skipIntro);

    if (deepLink) {
        started = true;
        stage.classList.add('no-anim');
        terminalInputLine.classList.add('hidden');
        finishIntro();
    } else {
        document.documentElement.classList.add('intro-lock');
    }

    const repoItems = document.querySelectorAll('.repo-item');
    const readmes = document.querySelectorAll('.repo-readme');

    repoItems.forEach(item => {
        item.addEventListener('click', () => {
            const repo = item.dataset.repo;
            repoItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            readmes.forEach(r => r.classList.remove('active'));
            document.getElementById(`readme-${repo}`).classList.add('active');
        });
    });

    // Write-ups section
    const binderTabs = document.querySelectorAll('.binder-tab');
    const binderPapers = document.querySelectorAll('.binder-paper');

    binderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const paperId = tab.dataset.tab;
            binderTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            binderPapers.forEach(p => p.classList.remove('active'));
            document.querySelector(`.binder-paper[data-paper="${paperId}"]`).classList.add('active');
        });
    });

    // Experience Timeline
    const sections = document.querySelectorAll('.section-container');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { section.classList.add('hidden-section'); sectionObserver.observe(section); });

    const networkNodes = document.querySelectorAll('.network-node');
    const nodeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('reveal'), index * 200);
                nodeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    networkNodes.forEach(node => nodeObserver.observe(node));
});