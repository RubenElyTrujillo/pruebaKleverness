import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Detail({idRoom}){
    const [floors, setFloor] = useState([])
    const [valor, setValor] = useState({})
    useEffect(() =>{
        Axios({
            url: process.env.REACT_APP_API
        })
            .then((floors) => {
                floors.data.payload.floor.map(function(floor, index){
                    floor.room.map(function(r, index){
                        if(r.id == idRoom){
                            return setValor(r)
                        }
                    })
                })
                setFloor(floors.data.payload.floor)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setFloor, setValor])
    console.log(valor)
    return(
        <>
            <h1>Detalles de: {valor.name}</h1>
            <div className="col-md-4">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>Nombre: </td>
                            <td> {valor.name}</td>
                        </tr>
                        <tr>
                            <td>HUB:</td>
                            <td>
                                {
                                    valor.roomHub ? (
                                        valor.roomHub.map((hub, index) => (
                                            hub.isHubOnline ? (
                                                <span className="dot-green"></span>
                                            ) : (
                                                <span className="dot-red"></span>
                                            )
                                        ))
                                    ) : (
                                        <span className="dot-gray"></span>
                                    ) 
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Rooms status:</td>
                            <td>
                                {
                                    valor.status === 1 ? (<button type="button" class="btn btn-success">Creado</button>) :
                                    valor.status === 2 ? (<button type="button" class="btn btn-warning">Asigando</button>) :
                                    (<button type="button" class="btn btn-secondary">Ocupado</button>)  
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Maintenance: </td>
                            <td>
                                {
                                    valor.maintenance === 1 ? (<button type="button" class="btn btn-light">None</button>) : 
                                    (<button type="button" class="btn btn-light">Requested</button>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Temperature: </td>
                            <td>
                                {
                                    valor.id === 1 ? (<p>25.00&#8451;</p>) : 
                                    (<p>Not available</p>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Comfort Settings: </td>
                            <td>
                                {
                                    valor.id === 1 ? (<button type="button" class="btn btn-light">SMART AWAY</button>) : 
                                    (<button type="button" class="btn btn-secondary">OFF</button>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Lighting: </td>
                            <td> {valor.lighting}</td>
                        </tr>
                        <tr>
                            <td>Privacy: </td>
                            <td>
                                {
                                    valor.privacy ? (<span className="dot-green"></span>) : 
                                    (<span className="dot-red"></span>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Housekeeping: </td>
                            <td>
                                {
                                    valor.housekeeping == 1 ? (<span className="dot-green"></span>) :
                                    (<span className="dot-red"></span>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Door Status: </td>
                            <td>
                                {
                                    valor.doorStatus ? (<button type="button" class="btn btn-light">OPEN</button>) :
                                    (<button type="button" class="btn btn-light">CLOSE</button>)
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}