console.log(document.getElementById('subscribeButton'))
console.log("ihughogu");
document.getElementById('subscribeForm').addEventListener('submit', async function(event) {
    console.log('jhgjkhkgjgkf,,bkjhg');
    event.preventDefault();
    
    const emailInput = document.getElementById('emailInput').value;
    
    try {
        console.log(emailInput)
        const response = await fetch('http://localhost:8000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailInput })
        });

        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.error('Failed to send email');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});