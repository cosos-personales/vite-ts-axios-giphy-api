import './style.css'
import axios from 'axios';

const apiKey = `vabfdNJURSCCNEnOMyOU9yGO21uA7YGX`;

fetch(``)
.then( resp => resp.json() )
.then( ( {data} ) => {
const { url } = data.images.original;
console.log(url);
} )