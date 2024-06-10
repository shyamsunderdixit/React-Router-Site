// import React from 'react'
// import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shyamsunderdixit')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //     // .catch(error => console.error('Error fetching data:', error));
    // }, [])

    return (
    <div className="mx-4 sm:mx-10 lg:mx-72 rounded-xl text-white bg-slate-500 p-4 sm:p-6 md:p-8 text-center flex flex-col md:flex-row justify-center items-center">
        <div className="text-[20px] sm:text-[25px] md:text-[35px] lg:text-[55px]">GitHub followers: {data.followers}</div>
        <div className="mt-4 md:mt-0 md:ml-10 lg:ml-36" >
            <img src={data.avatar_url} alt="Git Picture" width={250} />
        </div>
    </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shyamsunderdixit')
    return response.json();
}