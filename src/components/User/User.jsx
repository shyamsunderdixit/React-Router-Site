// import React from 'react'
import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams();
    return (
        <div className="mx-48 rounded-xl text-white bg-slate-500 p-4 text-[35px] flex justify-center">User : {userid}</div>
    )
}

export default User