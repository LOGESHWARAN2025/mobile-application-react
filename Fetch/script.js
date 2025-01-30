
    async function fetchUsers() {
        const userListDiv = document.getElementById('user-list');
        userListDiv.innerHTML = 'Loading...';

        try {
            const response = await fetch('https://randomuser.me/api/?results=10');

            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            const users = data.results;

            // Clear the loading 
            userListDiv.innerHTML = '';

            // Dynamically create and render user cards
            users.forEach(user => {

            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="User Picture">
                <p><strong>${user.name.first} ${user.name.last}</strong></p>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
            `;

            userListDiv.appendChild(userCard);
            });
        } catch (error) {
            userListDiv.innerHTML = `<p style="color: red;">Error fetching user info: ${error.message}</p>`;
        }
    }
