import { useState } from "react";
import {ButtonHTMLAttributes} from 'react'
import '../styles/button.scss'



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export function ButtonCounter(props: ButtonProps){

    
 


    return(
        <button className="button"  {...props} />

    )
}