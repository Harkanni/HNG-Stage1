// const fetchUserInfo = () => {

// }

function fetchUserInfo() {
  // Your OAuth access token
  const token = 'xoxb-5525350307635-5862068693698-NwVunIgkD6bdjafJSSQ66F6G' //'YOUR_OAUTH_ACCESS_TOKEN'; // xoxb-5525350307635-5862068693698-NwVunIgkD6bdjafJSSQ66F6G

  // The user's Slack ID (replace with the actual ID)
  const userId = 'U05RD9H6UA0' // 'USER_ID_TO_FETCH'; // U05RD9H6UA0

  // API endpoint URL
  const apiUrl = `https://slack.com/api/users.info?user=${userId}`;

  // Set headers including your OAuth token
  const headers = {
    Authorization: `Bearer ${token}`
  };

  // Make the API request using the Fetch API
  fetch(apiUrl, { headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        const user = data.user;
        console.log('User Name:', user.real_name);
        console.log('User Image:', user.profile.image_72);
      } else {
        console.error('Error:', data.error);
      }
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
    });
}
