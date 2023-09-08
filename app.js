import dotenv from 'dotenv';

import pkg from '@slack/bolt';

import { WebClient, LogLevel } from '@slack/web-api';

const { App } = pkg

dotenv.config();

console.log("Hello world!");


// Initialize BOLT

const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
   logLevel: LogLevel.DEBUG
 });

 // ID of user you watch to fetch information for
 
 export const fetchUserInfo = async () => {
   
   const userId = process.env.SLACK_USER_ID;

   try {
     // Call the users.info method using the WebClient
     const result = await client.users.info({
       user: userId
     });
   
     return result;
   }
   catch (error) {
     console.log(`Error Fetching User Info from Slack: ${error.message}`);
   }

}

