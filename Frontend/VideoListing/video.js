const imageSection = document.getElementById('imageSection');

fetch('http://localhost:8000/api/pages/videos')
    .then(response => response.json())
    .then(data => {
        const imageUrls = data.message;
        const imageLabels = data.imageLabels;

        // Loop through imageUrls array
        for (let i = 0; i < imageUrls.length; i++) {
            // Create div element for each image and label
            const card = document.createElement('div');
            card.classList.add('card');

            // Create image element
            const image = document.createElement('img');
            image.src = imageUrls[i];
            image.style.height = '80%';
            image.style.objectFit = 'cover';
            card.appendChild(image);
            i === 3 ? card.classList.add('grid-item-big') : '';

            // Create label element
            const label = document.createElement('div');
            label.classList.add('label');
            label.textContent = imageLabels[i];
            label.style.height = '20%';
            card.appendChild(label);

            // Append card to imageSection
            imageSection.appendChild(card);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
