import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import '../Leyes.css';

class Pdf extends Component{
    render(){
        return(
            <div className="pdfStyle">
                <object
                    data={toBeRequired('../docsLeyes/Ley_Municipal_239.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >

                </object>
            </div>
        );
    }
}

export {Pdf};