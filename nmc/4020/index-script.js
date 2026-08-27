const indexHeading = document.getElementById('index-heading');

// Automatically detects your GitHub username and repository from the URL
const pathParts = window.location.pathname.split('/').filter(Boolean);

// This could be more sustainable if I changed this repository's name, but it creates a problem when I run it locally.
// const repo = pathParts[0];
const repo = 'jayden-burrows.github.io'

// This could be more sustainable if I changed this account's username, but it creates a problem when I run it locally.
// const username = window.location.hostname.split('.')[0];
const username = 'jayden-burrows'

// Target folder path relative to the repository root
const folderPath = pathParts.slice(0).join('/');

const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${folderPath}/`;

var folderName = pathParts[pathParts.length - 1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

indexHeading.textContent += folderName;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('file-list');
        list.innerHTML = ''; // Clear loading text

        console.log(data);
        if (Array.isArray(data)) {
            data.forEach(item => {
                // Skip the index.html itself
                if (item.name === 'index.html') return;

                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.name;
                a.textContent = item.name + (item.type === 'dir' ? '/' : '');
                li.appendChild(a);
                list.appendChild(li);
            });
        } else {
            // In this case the GitHub API rate has been reached, so if I 
            // hard coded the file names into index.html, try that
            fileArr.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item;
                a.textContent = item.split('.html')[0];
                li.appendChild(a);
                list.appendChild(li);
            });
        }
    })
    .catch(err => {
        document.getElementById('file-list').textContent = 'Error loading directory.';
        console.error(err);
    });