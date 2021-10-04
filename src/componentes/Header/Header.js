import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './Header.css';

export default function Header(){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("")
    useEffect(() =>{
        Axios({
            url: process.env.REACT_APP_API
        })
            .then((name) =>{
                setName(name.data.payload.name)
                setAddress(name.data.payload.address)
            })
            .catch((error) =>{
                console.log(error)
            })
    }, [setName]);
    return(
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow nav-bar-custom">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-break" href="/">
                    {name}
                    <br/>
                    <h6 className="address">{address}</h6>
                </a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-current="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </header>
        </>
    )
}