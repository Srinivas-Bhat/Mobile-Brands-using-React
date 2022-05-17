import React from "react";



const Mobile = ({head, names}) => {
    return (
        <div>
            <h1>{head}</h1>
            <ul>
                <li>{names.a}</li>
                <li>{names.b}</li>
                <li>{names.c}</li>
                <li>{names.d}</li>
            </ul>
        </div>
    )
}

export default Mobile;