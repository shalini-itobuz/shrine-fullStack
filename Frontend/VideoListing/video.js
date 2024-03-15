const imageUrls = [
    'http://localhost:8000/images/videoListing/bible/worries.png',
    'http://localhost:8000/images/videoListing/bible/phillipians.png',
    'http://localhost:8000/images/videoListing/bible/sleep.png',
    'http://localhost:8000/images/videoListing/bible/afterlife.png',
    'http://localhost:8000/images/videoListing/bible/counting.png',
    'http://localhost:8000/images/videoListing/bible/bread.png',
    'http://localhost:8000/images/videoListing/bible/dust.png',
    'http://localhost:8000/images/videoListing/bible/faith.png',

];

// Array of image labels
const imageLabels = [
    'Download your worries and get God.',
    'Philippians 4:4 Rejoice in the Lord.',
    'Can’t sleep? Counting sheep?',
    'What section would you prefer in the afterlife? Smoking or non-smoking?',
    'Can’t sleep? Counting sheep? Talk to.',
    'God wants full custody, not just visits.',
    'Dust on your Bible leads to your life.',
    'Faith tells me that God guards my path.'
];

// Get reference to the section
const imageSection = document.getElementById('imageSection');

// Loop through imageUrls array
for (let i = 0; i < imageUrls.length; i++) {
    // Create div element for each image and label
    const card = document.createElement('div');
    card.classList.add('card');

    // Create image element
    const image = document.createElement('img');
    image.src = imageUrls[i];
    card.appendChild(image);
    image.style.height = '80%'
    image.style.objectFit = 'cover'
    i === 3 ?  card.classList.add('grid-item-big') : ''

    // Create label element
    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = imageLabels[i];
    card.appendChild(label);
    label.style.height = '20%'

    // Append card to imageSection
    imageSection.appendChild(card);
}
