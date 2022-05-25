import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>
{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Los efectos no puede ser async
    useEffect( () => 
    {
        getGifs(category).then( (gifs) => {
            setState({
                data: gifs, 
                loading: false
            });
            
        });
    }, [category]);

    

    return state;
}