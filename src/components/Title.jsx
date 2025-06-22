import React, { useEffect, useRef, useState } from 'react'
import Randomcard from './Randomcard'

function Title({setSearch,cntdata}) {

    const inpRef = useRef(null)
    
    const [status,setStatus] = useState(false)

    useEffect(() => {
        if (status && inpRef.current) {
          inpRef.current.focus(); 
        }
      }, [status]); 

    function letGo() {

        
        window.scrollTo({
            top:500,
            behavior: 'smooth'
        })        
    }
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 text-center md:pt-32 md:px-10 lg:px-32 xl:max-w-5xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-4xl">Welcome to CountryApp Website
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-3xl">You can find data of any country in this website</p>
                    <div className="flex flex-wrap justify-center">
                        <button onClick={letGo} className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">HAVE A LOOK</button>
                        <button onClick={() => setStatus(!status)} className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-100 dark:border-gray-300">SEARCH</button>
                    </div>
                    <input ref={inpRef} onChange={(e) => setSearch(e.target.value)} placeholder='olke axtar' type="text" className={`border p-3 rounded-xl ${status ? 'visible' : 'hidden'}`} />
                    {!status && <Randomcard cntdata={cntdata} />}
                </div>
                
            </section>
        </>
    )
}

export default Title