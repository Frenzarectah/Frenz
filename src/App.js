import './App.scss'
import Layout from './components/Template/Layout/Layout'
import React, { useState, useEffect } from "react"
import Spinner from './components/Spinner/Spinner'

/**
 * main app returning the Layout component which contain the
 * entire website
 */

const App =()=> {
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 50000)
    }, [])

    return (
        <>
            { isLoading ? <Spinner/> : <Layout/> }
        </>
    )
}

export default App