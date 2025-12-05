fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById('users');

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';

      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.username}</p>
        <ul>
        <li><span class="data">Email:</span> ${user.email}</li>
        <li><span class="data">Phone:</span> ${user.phone}</li>
        <li><span class="data">Address:</span> ${user.address.suite}, ${user.address.street}, ${user.address.city}</li>
        </ul>
      `;

      container.appendChild(userCard);
    });
  })
  .catch(error => console.error('Error Fetching Users:', error));
