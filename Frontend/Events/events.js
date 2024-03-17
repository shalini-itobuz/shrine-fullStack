function displayCards(pageNumber, data) {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    const imageSection = document.getElementById('imageSection');
    imageSection.innerHTML = ''; // Clear existing cards
    
    for (let i = startIndex; i < endIndex && i < data.message.length; i++) {
        const imageUrl = data.message[i];
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'justify-content-center', 'd-flex');
        imageDiv.innerHTML = `
            <div class="card position-relative z-3 hover-card bg-white" role="button">
                <div class="position-relative">
                    <img src="${imageUrl}" class="card-img-top" alt="event-card-image">
                    <span class="calendar-card d-inline-block rounded-top-2 position-absolute bottom-0"></span>
                </div>
                <div class="card-body p-3">
                    <p class="card-text fw-bold font-10">26.10.2013</p>
                    <p class="d-flex gap-3 font-mysecondary">
                        <span class="card-text fw-normal font-10"><img src="http://localhost:8000/images/events/eventsection/circle-time.svg" alt="circle time" width="15px"> 12:00 AM</span>
                        <span class="card-text fw-normal font-10"><img src="http://localhost:8000/images/events/eventsection/location.svg" alt="location" width="15px"> Kingdom Church</span>
                    </p>
                    <h5 class="card-title my-2 ">Event Title</h5>
                    <p class="card-text fw-normal font-mysecondary font-10 my-3">Description of the event goes here.</p>
                    <a href="#" class="btn hover-button border border-2 border-black text-capitalize p-3 px-5">Learn More</a>
                </div>
            </div>
        `;
        imageSection.appendChild(imageDiv);
    }
}

function highlightActivePage(pageNumber) {
    const paginationLinks = document.querySelectorAll('#pagination .page-link');
    paginationLinks.forEach(link => {
        if (link.dataset.page && parseInt(link.dataset.page) === pageNumber) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

fetch('http://localhost:8000/api/pages/events')
    .then(response => response.json())
    .then(data => {
        displayCards(1, data);
        highlightActivePage(1);

        const paginationLinks = document.querySelectorAll('#pagination .page-link');
        paginationLinks.forEach(link => {
            link.addEventListener('click', () => {
                const pageNumber = link.dataset.page === 'next' ? currentPage + 1 : parseInt(link.dataset.page);
                displayCards(pageNumber, data);
                highlightActivePage(pageNumber);
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
