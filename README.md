# Drip Clothing
npm install. npm start.

## Features
- Payments using the stripe api.
- State management with redux.
- User state , and cart state saved to local storage with redux persist.
- Some components refactored with Hooks.
- Hosted on AWS.
- Responsive UI.
- Multipage app with react router.
- Component Snap shots with Enzyme + Jest.




## Libraries Used
- Reselect - Used for memoization and to select the smallest slice of state possible.
- Redux Persist - Used for session/local storage.
- Redux Logger - For logging state for development.
- Redux - For global state managment across front end application.
- GraphQL - Only query the data we need.
- React Stripe Checkout - Checkout component using the stripe api.
- React Router - For dynamic routing of page components.
- AWS Amplify - For hosting on aws and generating a backend with aws.
- Enzyme - Snapshot testing.

## Changelog For Version 0.2.0
- Removed Firebase.
- Removed styled components.
- Hosted On AWS
- Sign up/Login with Amplify
- Refactored Sign In & Sign Up components to use hooks and amplify.
- Added Sign Out Functionality. Updated user.types, user.actions, User Reducer to accomodate Sign Out functionlaity.
- Added User Reducer to Local Storage via Redux Persist.
- Added GraphQL.
- Added comments across codebase to clarify some things.
- Refactored Header component.
- Refactored App.js
- Added Enzyme for snapshot testing components.
- Fully tested reducers.
- Added snapshots for some components.