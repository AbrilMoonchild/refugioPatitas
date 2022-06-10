import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Leyes } from '../Leyes';
import { Pdf } from '../pagesLeyes/Pdf';

function RoutesL(){
    return(
        <BrowserRouter>
            
                
                <Route exact path='/Pdf' component={Pdf}/>
            
        </BrowserRouter>
    );
}

export {RoutesL};