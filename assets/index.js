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
  const user = {
   username: 'Akanni Emmanuel',
   profileImage: "./assets/userImage.jpg",
  }
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

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
  const d = new Date();
  let dayOfTheWeek = weekday[d.getDay()];

  let currentDayOfTheWeek = document.querySelector(
    '[data-testid = currentDayOfTheWeek]'
  );
  currentDayOfTheWeek.innerHTML = `Current Day Of The Week: ${dayOfTheWeek},`;


  // TIME IN MILLISECONDS 
  let currentUTCTime = document.querySelector('[data-testid = currentUTCTime]');
  currentUTCTime.innerHTML = `Current Time in Milliseconds: ${d.getTime()}`;


  // GITHUB URL
  let githubURL = document.querySelector('[data-testid = githubURL]');
  githubURL.href = `https://github.com/harkanni`;
}

let userInfo = fetchUserInfo();
console.log(userInfo);
