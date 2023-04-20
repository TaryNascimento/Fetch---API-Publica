const jokeBtn = document.getElementById('new-joke-btn');
const jokeContainer = document.getElementById('joke-container');
const apiUrl = 'https://api.chucknorris.io/jokes/random';

jokeBtn.addEventListener('click', () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      jokeContainer.innerHTML = `<p>${data.value}</p>`;
    })
    .catch(error => console.error(error));
});