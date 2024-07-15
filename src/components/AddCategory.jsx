import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('')

  //se usa para manternet el estado del input y poder escribir en el 
  const onInputChange = ({target}) => {
    setInputValue(target.value); //esta fuincion es la que hace le update al valor inputValue
  }

  //hace le submit del formulario y emite el evento onNewCategory con el valor del input
  //esto actualiza el arreglo que se esta dibujando en el componente GiExpertApp
  const onSubmit = (event)=>{
    event.preventDefault();
    
    console.log(inputValue);

    if( inputValue.trim().length <= 1 ) return;

    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (

    <form onSubmit = { onSubmit } >
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>

   
  )
}
