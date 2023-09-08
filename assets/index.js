// async function fetchUserInfo() {
//   // API endpoint URL
//   const apiUrl = `http://localhost:3000/server`;

//   // Make the API request using the Fetch API
//   await fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       const weekday = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday'
//       ];

//       const {
//         userInfo: { user }
//       } = data;

//       console.log(user.real_name);

//       let slackDisplayImageId = document.querySelectorAll('[data-testid = slackDisplayImage]');
//       slackDisplayImageId.forEach((slackDisplayImage) => {
//          slackDisplayImage.src = user.profile.image_original
//          slackDisplayImage.alt = user.real_name
//       });

//       let slackUserNameId = document.querySelectorAll('[data-testid = slackUserName]');
//       slackUserNameId.forEach((slackUserTag) => (slackUserTag.innerHTML = `${user.real_name}`));

//       const d = new Date();
//       let dayOfTheWeek = weekday[d.getDay()];

//       let currentDayOfTheWeek = document.querySelector('[data-testid = currentDayOfTheWeek]');
//       currentDayOfTheWeek.innerHTML = `${dayOfTheWeek},`

//       let currentUTCTime = document.querySelector('[data-testid = currentUTCTime]');
//       currentUTCTime.innerHTML = `(${d.toUTCString()} : ${d.getTime()})`

//       let githubURL = document.querySelector('[data-testid = githubURL]');
//       githubURL.href = `https://github.com/harkanni`
//     })
//     .catch((error) => {
//       console.error('Fetch Error:', error);
//     });

//   // UPDATE HTML PAGE;
// }

async function fetchUserInfo() {
  const d = new Date();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  // USER INFO
  const user = {
    username: 'Akanni Emmanuel',
    profileImage: './assets/userImage.jpg'
  };

  // IMAGE
  let slackDisplayImageId = document.querySelectorAll(
    '[data-testid = slackDisplayImage]'
  );
  slackDisplayImageId.forEach((slackDisplayImage) => {
    slackDisplayImage.src = user.profileImage;
    slackDisplayImage.alt = user.username;
  });

  // USERNAME
  let slackUserNameId = document.querySelectorAll(
    '[data-testid = slackUserName]'
  );
  slackUserNameId.forEach(
    (slackUserTag) => (slackUserTag.innerHTML = `${user.username}`)
  );

  // DAY OF THE WEEK
  let dayOfTheWeek = weekday[d.getDay()];
  let currentDayOfTheWeek = document.querySelector(
    '[data-testid = currentDayOfTheWeek]'
  );
  currentDayOfTheWeek.innerHTML = `${dayOfTheWeek}`;

  // TIME IN MILLISECONDS
  let currentUTCTime = document.querySelector('[data-testid = currentUTCTime]');
  currentUTCTime.innerHTML = `${d.getTime()}`;

  // GITHUB URL
  let githubURL = document.querySelector('[data-testid = githubURL]');
  githubURL.href = `https://github.com/Harkanni/HNG-Stage1`;
}

let userInfo = fetchUserInfo();
console.log(userInfo);
