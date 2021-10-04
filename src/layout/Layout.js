import React from 'react'
import Header from '../componentes/Header'
import './Layout.css'

export default function Layout(props){
    const { children } = props;
    return(
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" ariaCurrent="page" href="/">
                                        <span datafeather="home"></span>
                                        Dashboard
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}