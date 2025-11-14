import {getCategorias} from '../services/categoriaService'
import { useState, useEffect } from 'react'

export function useGetCategorias(){
        const [categorias,setCategorias] = useState([])
            
        useEffect(()=> {
            getCategorias()
               .then((response) => setCategorias(response))
               .catch(error => console.error("Error al obtener las categorias:", error))
        },[])

        return {categorias};
}


