[![Netlify Status](https://api.netlify.com/api/v1/badges/20ee7ec1-8f07-46fd-891c-09aefb669382/deploy-status)](https://app.netlify.com/sites/mailbox-mockup/deploys)

# Mail mockup

## Deploy
Demo -> [Click here](https://mailbox-mockup.netlify.com/)

## Installation

This requires [Node.js](https://nodejs.org/) to run.
Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) to install the dependencies
```bash
npm install
```

## Usage
Make sure you installed the required packages and then start the application.

```bash
npm start
```

## Solution

## Assumptions
- Indicator next to the inbox means the amount of unread mails
- There'll also be an indicator next to the trash when you have unread deleted mails
- Always have the latest mail open when you load the client.

## Out of scope
- Responsive design. Normally I would start with the mobile in mind, however due to the time constraints I only focused on the desktop version.
- Moving mails from trash to inbox
- Marking mails as (un)read
- Marking mails as spam
- Favoriting mails
- Composing mails

## Limitations
- Search bar only works when pressing the search icon. Normally this would also work on enters.
- When reaching the first/last email, there shouldn't be a previous/next button
- Navigating through the mails with the arrows won't update the read status.
- Data is not persistent.

## Future
- Add some unit tests and if needed maybe some E2E tests. (For example 
show the time when the mail is received on the same day, show the year when the mail is received in the previous years. **[Functionality already imlplemented]**
- Normal compose and account validation on client and server side.
- Create a design for mobile users in mind since it's likely people would want to use the mail client on the mobile too. Maybe a react native app?
- Think about paging. Eventually people will have a lot of mails and we don't want to immediately send all the mails to the client. Simple paging? Infinite scrolling?
- How are attachments handled by the client?
