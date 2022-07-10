import React from 'react';
import Cards from './Cards';
import series from "./series";


console.log(series[0]);

function App(){
    return (
        <>
            <Cards
                name = {series[0].name}
                img  = {series[0].img}
                link = {series[0].link}
            />
            <Cards
                name = {series[1].name}
                img  = {series[1].img}
                link = {series[1].link}
            />
            <Cards
                name = {series[2].name}
                img  = {series[2].img}
                link = {series[2].link}
            />
            <Cards
                name = {series[3].name}
                img  = {series[3].img}
                link = {series[3].link}
            />
            <Cards
                name = {series[4].name}
                img  = {series[4].img}
                link = {series[4].link}
            />
            <Cards
                name = {series[5].name}
                img  = {series[5].img}
                link = {series[5].link}
            />
            <Cards
                name = {series[6].name}
                img  = {series[6].img}
                link = {series[6].link}
            />
        </>
    );
}

export default App;