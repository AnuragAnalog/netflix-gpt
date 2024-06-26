// Image Constants

export const LOGO_IMG = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PROFILE_IMG = "https://occ-0-2433-2430.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTchF8ZJt4i17s19XZH3BXPcBvq56vu2056apVxL2AqfuKd-GboxOuAGQIZm7OkLomHV90GPi0005VQ6AKGnai5T5Wf8DYs.png?r=e6c"
export const BODY_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"

// TMDB API URL

// Now Playing Movies
export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?page=1"
export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?page=1"
export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?page=1"

// Video URL
export const VIDEO_URL = "https://api.themoviedb.org/3/movie/{movie_id}/videos"

// TMDB API Options
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTU4ZDFjNDQxZWRmMDNmOWYwYjUzMzYxZTRjY2I5ZCIsInN1YiI6IjY2NDgyZDkxNmFjZWFjZWNiNTJmNjljOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kYK_cDZ1aJibfwtwxROjsRNpenc7DdpKi9xpnT0lBOU",
    }
  };

// Movie Card Image URL
export const MOVIE_CARD_IMG_URL = "https://image.tmdb.org/t/p/w500"

// Language Mapping
export const LANG_MAP = [
  {identifier: "en", name: "English"},
  {identifier: "es", name: "Spanish"},
  {identifier: "hi", name: "Hindi"},
  {identifier: "te", name: "Telugu"},
  {identifier: "ml", name: "Malayalam"}  
]

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY