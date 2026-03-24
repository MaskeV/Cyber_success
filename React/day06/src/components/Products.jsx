import {useParams} from "react-router-dom";
export default function ProductPage(){
        const {id} = useParams();
        console.log(id);
         return (
        <>
        <h1>This is Product {id}</h1>   
        </>

    );
      
}