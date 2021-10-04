import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './PrincipalTable.css'

export default function PrincipalTable(){
    const [floors, setFloor] = useState([])
    useEffect(() =>{
        Axios({
            url: process.env.REACT_APP_API
        })
            .then((floors) => {
                setFloor(floors.data.payload.floor)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setFloor])
    return(
        <>
            <h2>Rooms</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Rooms</th>
                            <th scope="col">HUB</th>
                            <th scope="col">Rooms status</th>
                            <th scope="col">Maintenance</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Comfort Settings</th>
                            <th scope="col">Lighting</th>
                            <th scope="col">Privacy</th>
                            <th scope="col">Housekeeping</th>
                            <th scope="col">Door Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {floors.map((floor, index) =>(
                            floor.room.map((r, index) =>(
                                <tr key={index}>
                                    <th scope="col">{r.name}</th>
                                    <td scope="col">
                                        {
                                            r.roomHub ? (
                                                r.roomHub.map((hub, index) => (
                                                    hub.isHubOnline ? (
                                                        <span className="dot-green" key={index}></span>
                                                    ) : (
                                                        <span className="dot-red" key={index}></span>
                                                    )
                                                ))
                                            ) : (
                                                <span className="dot-gray"></span>
                                            ) 
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.status === 1 ? (<button type="button" class="btn btn-success">Creado</button>) :
                                            r.status === 2 ? (<button type="button" class="btn btn-warning">Asigando</button>) :
                                            (<button type="button" class="btn btn-secondary">Ocupado</button>)
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.maintenance === 1 ? (<button type="button" class="btn btn-light">None</button>) : 
                                            (<button type="button" class="btn btn-light">Requested</button>)
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.id === 1 ? (<p>25.00&#8451;</p>) : 
                                            (<p>Not available</p>)
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.id === 1 ? (<button type="button" class="btn btn-light">SMART AWAY</button>) : 
                                            (<button type="button" class="btn btn-secondary">OFF</button>)
                                        }
                                    </td>
                                    <td scope="col">{r.lighting}</td>
                                    <td scope="col">
                                        {
                                            r.privacy ? (<span className="dot-green"></span>) : 
                                            (<span className="dot-red"></span>)
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.housekeeping == 1 ? (<span className="dot-green"></span>) :
                                            (<span className="dot-red"></span>)
                                        }
                                    </td>
                                    <td scope="col">
                                        {
                                            r.doorStatus ? (<button type="button" class="btn btn-light">OPEN</button>) :
                                            (<button type="button" class="btn btn-light">CLOSE</button>)
                                        }
                                    </td>
                                    <td>
                                        <a href={`/detalles/`+r.id} class="btn btn-light">Report</a>
                                    </td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}