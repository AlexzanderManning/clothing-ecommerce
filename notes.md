# Changelog
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
- added Enzyme for snapshot testing components.

## Libraries
Reselect - Used for memoization and to select the smallest slice of state possible.
Redux Persist - Used for session/local storage.
Redux Logger - For logging state for development.
Redux - For global state managment across front end application.
GraphQL - Only query the data we need.
React Stripe Checkout - Checkout component using the stripe api.
React Router - For dynamic routing of page components.
AWS Amplify - For hosting on aws and generating a backend with aws.


# TODO
- [x] Make sign in persist with local storage. 
- [x] Make sign out button work. 
- [x] Make sign up route to login, and confirm email or turn off confirm settings. 
- [x] Refactor sign in/sign up. 
- PUSH amplify backend to update GraphQL Schema.
- Redo Incogntion MFA settings to let users create accounts without confirmation.npm

# Tested Reducers
- [x] Directory Reducer
- [x] Shop Reducer
- [x] User Reducer
- [x] Cart Reducer

# Component Testing
- [x] Cart Item Component
- [x] Custom Button Component