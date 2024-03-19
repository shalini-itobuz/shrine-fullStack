document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');

    if (eventId) {
        fetch(`http://localhost:8000/api/pages/events`)
            .then(response => response.json())
            .then(data => {
                const eventData = data.message.find(event => event.id === parseInt(eventId));
                if (eventData) {
                    const eventBookDiv = document.querySelector('.event-book-div');
                    eventBookDiv.innerHTML = `
                        <div class="slogan">
                            <h3>${eventData.slogan}</h3>
                        </div>
                        <div class="desc">
                            <p>${eventData.desc}</p>
                        </div>
                        <div class="duration">
                            <p>Duration: ${eventData.duration}</p>
                        </div>
                        <div class="time">
                            <p>Time: ${eventData.time}</p>
                        </div>
                        <div class="location">
                            <p>Location: ${eventData.location}</p>
                        </div>
                        <div class="booking-button">
                            <button class="btn btn-primary book-now" data-event-id="${eventData.id}">Book Now</button>
                        </div>
                        <div class="desc">
                            <p>${eventData.desc}</p>
                        </div>
                        <div class="points">
                            <ul>
                                <li>${eventData.points[1]}</li>
                                <li>${eventData.points[2]}</li>
                                <li>${eventData.points[3]}</li>
                            </ul>
                        </div>
                        <div class="conclusion">
                            <p>${eventData.conclusion}</p>
                        </div>
                    `;
                } else {
                    console.error('Event data not found.');
                }
            })
            .catch(error => console.error('Error fetching event data:', error));
    } else {
        console.error('Event ID not found in URL.');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const tabContent = document.getElementById('myTabContent');

    // Function to fetch and display location tab content
    function displayLocation() {
        // Clear previous content
        tabContent.innerHTML = '';
    
        // Create map element
        const mapDiv = document.createElement('div');
        mapDiv.setAttribute('id', 'map');
        mapDiv.style.height = '400px';
        tabContent.appendChild(mapDiv);
    
        // Initialize Google Maps
        const map = new google.maps.Map(mapDiv, {
            center: { lat: 0, lng: 0 }, // Set default center
            zoom: 2 // Set default zoom
        });
    
        // Fetch location data from API
        fetch('http://localhost:8000/api/pages/events')
            .then(response => response.json())
            .then(data => {
                // Add markers for each location
                data.message.forEach(event => {
                    const marker = new google.maps.Marker({
                        position: { lat: parseFloat(event.lat), lng: parseFloat(event.lon) },
                        map: map,
                        title: event.location
                    });
                });
            })
            .catch(error => console.error('Error fetching location data:', error));
    }
    
    // Function to fetch and display contact details tab content
    function displayContactDetails() {
        // Clear previous content
        tabContent.innerHTML = '';
    
        // Fetch contact details from API
        fetch('http://localhost:8000/api/contact')
            .then(response => response.json())
            .then(data => {
                // Extract phone number from the message object
                const phoneNumber = data.message.phone;
    
                // Create phone number element
                const phoneNumberElement = document.createElement('div');
                phoneNumberElement.textContent = `Phone Number: ${phoneNumber}`;
                phoneNumberElement.className = 'text-center fw-bold fs-4';
                tabContent.appendChild(phoneNumberElement);
            })
            .catch(error => console.error('Error fetching contact details:', error));
    }
    
    // Function to fetch and display gallery tab content
    function displayGallery() {
        // Clear previous content
        tabContent.innerHTML = '';

        // Fetch gallery data from API
        fetch('http://localhost:8000/api/about/tab')
            .then(response => response.json())
            .then(data => {
                // Create gallery container
                const galleryContainer = document.createElement('div');
                galleryContainer.classList.add('row', 'm-0');
                tabContent.appendChild(galleryContainer);

                // Iterate over gallery images
                data.message.forEach(image => {
                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('col-md-4', 'mb-3');

                    const img = document.createElement('img');
                    img.src = image.image;
                    img.classList.add('img-fluid');

                    galleryItem.appendChild(img);
                    galleryContainer.appendChild(galleryItem);
                });
            })
            .catch(error => console.error('Error fetching gallery data:', error));
    }

    // Display the Location tab by default when the page loads
    displayLocation();

    // Event listener for tab clicks
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.getAttribute('href').substring(1);
            switch (tabId) {
                case 'tab1':
                    displayLocation();
                    break;
                case 'tab2':
                    displayContactDetails();
                    break;
                case 'tab3':
                    displayGallery();
                    break;
            }
            // Activate tab
            document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// Function to fetch data from API and display cards
function fetchDataAndDisplayCards() {
    fetch('http://localhost:8000/api/pages/events')
        .then(response => response.json())
        .then(data => {
            displayCards(1, data); // Display cards with page number 1 and fetched data
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display cards
function displayCards(pageNumber, data) {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = Math.min(startIndex + 6, data.message.length);
    const imageSection = document.getElementById('imageSection');
    imageSection.innerHTML = ''; // Clear existing cards

    // Inside the loop where you create event cards
    for (let i = startIndex; i < endIndex; i++) {
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
                    
                </div>
            </div>
        `;
        imageSection.appendChild(imageDiv);
    }
}

fetchDataAndDisplayCards();

let currentPage = 1;
const cardsPerPage = 2; 

// Function to handle moving to the next set of cards
function moveToNextPage() {
    const imageSection = document.getElementById('imageSection');
    const cardWidth = imageSection.querySelector('.col-12').offsetWidth; 
    const totalCards = imageSection.childElementCount; 

    if (currentPage < Math.ceil(totalCards / cardsPerPage)) {
        imageSection.style.transform = `translateX(-${currentPage * cardWidth * cardsPerPage }px)`;
        currentPage++;
    }
}

// Function to handle moving to the previous set of cards
function moveToPreviousPage() {
    const imageSection = document.getElementById('imageSection');
    const cardWidth = imageSection.querySelector('.col-12').offsetWidth; // Get the width of a single card

    if (currentPage > 1) {
        currentPage--;
        imageSection.style.transform = `translateX(-${(currentPage - 1) * cardWidth * cardsPerPage}px)`;
    }
}

// Event listeners for the navigation buttons
document.getElementById('next').addEventListener('click', moveToNextPage);
document.getElementById('back').addEventListener('click', moveToPreviousPage);
