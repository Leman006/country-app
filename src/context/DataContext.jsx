import React, { createContext, useEffect, useState } from 'react'
import { getAllCountries } from '../service/CountryServices'


export const CountryData = createContext()

function DataContext({children}) {
    const [cntdata, setcntdata] = useState([])
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(true)
    
      useEffect(()=> {
        getAllCountries()
          .then(item => setcntdata(item)) 
          .catch(err => setError(err))
          .finally(() => setLoader(false))
      }, [])
      console.log(cntdata);
  return (
    <>
      <CountryData.Provider value={{cntdata, error, loader}}>
        {children}
      </CountryData.Provider>
    </>
  )
}

export default DataContext
