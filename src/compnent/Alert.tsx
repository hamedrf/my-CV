import { useEffect } from "react"
import $ from "jquery";

export enum colors
{
    "warning" , 
    "danger",
    "success" 
}
interface propsType
{
    text : string,
    color : colors
}
export const Alert = (props : propsType)=>
    {    
    useEffect((() =>
        {
            
                    setTimeout(() => {
                        $(".close-alert").hide(500) ;
                    }, 5000);
                }
            ), [props.text])
            return(
            <div className={`alert alert-${colors[props.color]} close-alert overflow-hidden alert-dismissible fade show position-fixed m-auto z-3 center`} style={{top : "90px"}} role="alert">
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                {props.text}
                <div className="close-loading"></div>
            </div>
    )}