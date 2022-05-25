import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";


const GifExpertApp = () =>
{
    //const categories = ['One punch', 'Samurai X', 'Dragon Ball', 'MCU', 'Huskies'];
    const [categories, setCategories] = useState(['Marvel']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid key={category} category={category} />;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;