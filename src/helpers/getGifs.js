
export const getGifs = async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=6nzkVSek50ad1uSDpSWUg4coaDe2Wqp7&q=${ category }&limit=10`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}   