import axios from 'axios';


const apiKey = `vabfdNJURSCCNEnOMyOU9yGO21uA7YGX`;

const giphhyData = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs`,
  params: {
    api_key: apiKey,
  }
});


giphhyData.get('/random')
  .then(resp => {
    const {url} = resp.data.data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
});



// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
// .then( resp => resp.json() )
// .then( ( {data} ) => {
// const { url } = data.images.original;
//   console.log(url);
//   const img = document.createElement('img');
//   img.src = url;
//   document.body.append(img);
// } )