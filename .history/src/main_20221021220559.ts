import './style.css'
import axios from 'axios';

const apiKey = `vabfdNJURSCCNEnOMyOU9yGO21uA7YGX`;

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
.then( resp => resp.json() )
.then( ( {data} ) => {
const { url } = data.images.original;
  console.log(url);
  document.body.appendChild(url);
} )