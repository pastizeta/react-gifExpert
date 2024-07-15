//pór cada categoria que sea agrega desde el input que se guarda en el arreglo categorys
//crea un h3 y un p
//el UseEffect sirve para ejecutar 1 vez la llamada al API de gifs que esta en un archivo independiente
//importado llamado getGifs, si esto no se ahce el API se llama cada ves que se dibuja un h3 y p por categoria y esto es incorrecto.
import {GifItem} from '../components/GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( { category } ) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3> { category } </h3>

      {//and logico
        isLoading && ( <h2> Cargando... </h2>)
      }

     
      
      <div className='card-grid'>
        { 
            images.map( imagen =>
            (
              <GifItem 
                key = {imagen.id}
                { ...imagen } //propagar las props en el componente
              />
            )) 
        }
      </div>
    </>
  )
}
