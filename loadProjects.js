document.addEventListener("DOMContentLoaded", function() {
    fetch('projects.json')  // Assumes the JSON file is named 'projects.json' and located in the same directory
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            data.forEach(project => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${project.number}</td>
                    <td>${project.name}</td>
                    <td><a href="${project.links.EEDB}" target="_blank"><i class="fa-solid fa-database"></i></a></td>
                    <td><a href="${project.links.Proposal}" target="_blank"><i class="fa-regular fa-folder"></i></a></td>
                    <td><a href="${project.links.PTT}" target="_blank">${project.links.PTT === '-' ? '-' : '<i class="fa-regular fa-folder"></i>'}</a></td>
                    <td><a href="${project.links.Network}" target="_blank"><i class="fa-regular fa-folder"></i></a></td>
                    <td>${project.links.Teams.constructor === Array ? project.links.Teams.map(link => `<a href="${link}" target="_blank">Link</a><br>`).join('') : `<a href="${project.links.Teams}" target="_blank">${project.links.Teams === '-' ? '-' : 'Link'}</a>`}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error loading the projects data:', error));
});
