import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    /*Hook para mantener el estado*/
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{

    if ( categories.includes(newCategory) ) return;

      setCategories([ newCategory, ...categories]);
    }


  return (
    <>
        <div>GifExpertApp</div>

        {/* Input */}
        <AddCategory 
            onNewCategory = { onAddCategory }
        /> 

        { 
          categories.map( category =>
            (
              <GifGrid 
                key={ category } 
                category={ category } />
            )) 
        }
            
    </>
  )
}
