import React from 'react'

import "./styles.css";

function Loading({visible}) {
    if(visible){
        return (
            <div className="loading-container">
                <div>
                cargando...
                </div>
            </div>
        )
    }
    return null;
}

export default Loading
