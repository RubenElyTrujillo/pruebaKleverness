import { useParams } from "react-router-dom";
import Detail from "../../componentes/Detail";

export default function Details(){
    const { id } = useParams();
    console.log(id)
    return(
        <>
            <Detail idRoom={id} />
        </>
    )
}