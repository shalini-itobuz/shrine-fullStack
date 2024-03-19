function displayCards(pageNumber, data) {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    const imageSection = document.getElementById('imageSection');
    imageSection.innerHTML = ''; // Clear existing cards
    
 // Inside the loop where you create event cards
for (let i = startIndex; i < endIndex && i < data.message.length; i++) {
    const eventData = data.message[i];
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'justify-content-center', 'd-flex');
    imageDiv.innerHTML = `
        <div class="card position-relative z-3 hover-card bg-white" role="button">
            <div class="position-relative">
                <img src="${eventData.img}" class="card-img-top" alt="event-card-image">
                <span class="calendar-card d-inline-block rounded-top-2 position-absolute bottom-0"></span>
            </div>
            <div class="card-body p-3">
                <p class="card-text fw-bold font-10">${eventData.date}</p>
                <p class="d-flex gap-3 font-mysecondary">
                    <span class="card-text fw-normal font-10"><img src="http://localhost:8000/images/events/eventsection/circle-time.svg" alt="circle time" width="15px"> ${eventData.time}</span>
                    <span class="card-text fw-normal font-10"><img src="http://localhost:8000/images/events/eventsection/location.svg" alt="location" width="15px"> ${eventData.location}</span>
                </p>
                <h5 class="card-title my-2 ">${eventData.title}</h5>
                <p class="card-text fw-normal font-mysecondary font-10 my-3">${eventData.subtitle}</p>
                <button class="btn hover-button border border-2 border-black text-capitalize p-3 px-5 join-now" data-event-id="${eventData.id}">Join Now</button>
            </div>
        </div>
    `;
    imageSection.appendChild(imageDiv);

    // Add event listener to join now button
    const joinNowButtons = document.querySelectorAll('.join-now');
    joinNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const eventId = button.getAttribute('data-event-id');
            redirectToEventDetailsPage(eventId);
        });
    });
}

function redirectToEventDetailsPage(eventId) {
    // Redirect to the event details page with the event  ID as a parameter
    window.location.href = `/Frontend/EventDetails/eventDetail.html?eventId=${eventId}`;
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
 
    
    