# Netflix GPT

This is a web based projecct, which integrates ChatGPT into a Netflix Clone App, for better movie recommendations.

## Tech Stack

- React
- Tailwind CSS
- Firebase
- Redux
- OpenAI API

## Features

- User Authentication
- Fetch Movies from TMDB
- ChatGPT Integration
- Movie Recommendations

## How to run the project

The boilerplate code is generated using `create-react-app`. To run the project, follow these steps:

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following:
    ```
    REACT_APP_OPENAI_API_KEY=<YOUR_OPEN_AI_API_KEY>
    REACT_APP_TMDB_API_KEY=<YOUR_TMDB_API_KEY>
    ```
4. Run `npm start`

**Sample Credentaials for Login**
- Email: `email@gmail.com`
- Password: `Password@1234`

## Live Demo
![Netflix GPT](https://raw.githubusercontent.com/AnuragAnalog/netflix-gpt/main/demo.gif?token=GHSAT0AAAAAACRHGYEWNKYJZVOIXTL42L2IZS3S7VA)

- [x] Started the project with Create React App.
- [x] Installed Tailwind CSS for styling
- [x] Header
- [x] Login/Sign Up Page
- [x] Routing of the App
- [x] Form Validation
- [x] useRef Hook
- [x] Firebase Setup
- [x] Deploy App to production
- [x] Auth with Firebase
- [x] Implemeting SignOut
- [x] Created Redux Store
- [x] Updated our Profile
- [x] Fetch Movies from TMDB
- [x] GPT Search Button

## Layout

- Browse (after auth)
    - Header
    - Trailer
        - Title and Description
    - Movie List
        - Movie
            - Thumbnail
    - Footer

- Login (before auth)
    - Logo
    - Sign In Form
        - Email
        - Password
    - Sign In Button
    - Sign Up Button
- GPT Integration
    - Search Bar
    - Movie Suggestions
        - Movie
            - Thumbnail