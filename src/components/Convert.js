import React, { useState, useEffect } from "react";


const Convert = ({ language, text}) => {
    useEffect(() => {
        console.log("Change")
    }, [language, text]);

    return (
        <div>

        </div>
    )
}

export default Convert;