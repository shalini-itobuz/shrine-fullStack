function generateTabContent(tabIndex, images) {
    let html = '<div class="tab-pane fade show ' + (tabIndex === 0 ? 'active' : '') + '" id="tab' + (tabIndex + 1) + '" role="tabpanel" aria-labelledby="tab' + (tabIndex + 1) + '-tab">';
    for (let i = 0; i < images.length; i++) {
        if (i % 3 === 0) {
            html += '<div class="row mt-4">';
        }
        html += '<div class="col-sm-4 mt-2 mt-md-0">';
        html += '<img src="' + images[i] + '" class="img-fluid">';
        html += '</div>';
        if ((i + 1) % 3 === 0 || i === images.length - 1) {
            html += '</div>'; //row close
        }
    }
    html += '</div>'; 
    return html;
}

fetch('http://localhost:8000/api/about/tab')
    .then(response => response.json())
    .then(data => {
        const tabContents = document.getElementById('myTabContent');
        data.message.forEach((tabData, index) => {
            const tabContent = generateTabContent(index, tabData);
            tabContents.innerHTML += tabContent;
        });

        const tabLinks = document.querySelectorAll('.nav-link');
        tabLinks.forEach((tabLink) => {
            tabLink.addEventListener('click', function () {
                const targetTabId = this.getAttribute('href');
                const targetTabContent = document.querySelector(targetTabId);
                const tabPanes = document.querySelectorAll('.tab-pane');
                tabPanes.forEach((tabPane) => {
                    tabPane.classList.remove('active', 'show');
                });
                targetTabContent.classList.add('active', 'show');
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
