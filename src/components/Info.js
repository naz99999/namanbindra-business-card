import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="/naman.jpg"/>
            <h2>Naman Bindra</h2>
            <h4>Full Stack Developer</h4>
            <h5>namanbindra.website</h5>
            <div className="info--buttons">   
                <button className="info--email">
                    <img src="/email.png"/>
                </button> 
                <button className="info--email">
                    <img src="/ll.png"/>
                </button>
            </div>
        </div>
    )
}