import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class Pdf extends Component{
    render(){
        return(
            <div>
                <object
                    data={toBeRequired('./docsLeyes/Ley_Municipal_239-1.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >

                </object>
            </div>
        );
    }
}