import { useState } from "react";
import {ButtonHTMLAttributes} from 'react'
import '../styles/button.scss'



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}


export function ButtonCounter({isOutlined = false, ...props}: ButtonProps){

    
 


    return(
        <button className={`button ${isOutlined ? 'outlined' : ''}`}  {...props} />

    )
}