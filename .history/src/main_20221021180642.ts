import './style.css'
import axios from 'axios';

const apiKey = `vabfdNJURSCCNEnOMyOU9yGO21uA7YGX`;

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=1&limit=25&offset=0&rating=g&lang=en`)
.then( resp => resp.json() )
.then( ( {data} ) => {
const { url } = data.images.original;
console.log(url);
console.log(data);
} )