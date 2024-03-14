fetch('http://localhost:8000/api/about/statistics')
            .then(response => response.json())
            .then(data => {
                const{message: {newVolunteer, ChurchLoc, managedDonation, newMember}} = data
                document.getElementById('newVolunteer').textContent = newVolunteer;
                document.getElementById('ChurchLoc').textContent = ChurchLoc;
                document.getElementById('managedDonation').textContent = managedDonation;
                document.getElementById('newMember').textContent = newMember;
            })
            .catch(error => console.error('Error fetching data:', error));


fetch('http://localhost:8000/api/about/happyCount')
            .then(response => response.json())
            .then(data => {
                document.getElementById('happy-prayers-count').textContent = data.message;
            })
            .catch(error => console.error('Error fetching data:', error));