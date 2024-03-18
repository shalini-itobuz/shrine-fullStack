

fetch('http://localhost:8000/api/blog/quoteOfTheDay')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.message)) {
                    const quotes = data.message;
                    const randomIndex = Math.floor(Math.random() * quotes.length);
                    const randomQuote = quotes[randomIndex];

                    document.getElementById('dayQuoteContent').textContent = randomQuote.dayQuote;
                    document.getElementById('quoteAuthorContent').textContent = randomQuote.quoteAuthor;
                } else {
                    throw new Error('Invalid response format: "message" array not found.');
                }
            })
            .catch(error => console.error('Error fetching and displaying quote:', error));

 fetch('http://localhost:8000/api/blog/quote')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.message.length);
                const randomQuote = data.message[randomIndex];

                document.getElementById('verseContent').textContent = randomQuote.dayQuote;
            })
            .catch(error => {
                console.error('Error fetching and displaying quote:', error);
            });