import './style.css'
import axios from 'axios';

const apiKey = `abfdNJURSCCNEnOMyOU9yGO21uA7YGX`;

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=&limit=25&offset=0&rating=g&lang=en`)
.then( ({data}) => {
    console.log(data);
} )