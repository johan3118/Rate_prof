import React, {useRef, useState} from "react";
import { useAuth } from "./AuthContext";

export default function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Las contraseñas no coinciden')
        }

        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('error al crear cuenta')
        }

        setLoading(false)
    }

    return (
        <div >
         {error && <h1>error</h1>}   
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" ,justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem'}}>
            <label>Email: </label>
            <input type="text" name='email' ref={emailRef}></input>
            <label>Password: </label>
            <input type="password" name='password' ref={passwordRef}></input>
            <label>Confirm password: </label>
            <input type="password" name='password' ref={passwordConfirmRef}></input>
            <button disabled={loading} type="submit">sign up</button>
        </form>
      </div>
    );
}