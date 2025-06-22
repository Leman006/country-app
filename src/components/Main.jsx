import React, { useContext } from 'react'
import Card from './Card'
import Title from './Title'
import { useParams } from 'react-router-dom'
import Error from '../pages/Error'
import { CountryData } from '../context/DataContext'
import Loading from './Loading'

function Main({ setSearch, search }) {
    const {cntdata} = useContext(CountryData)

    const { error, loader} = useContext(CountryData)

    const regData = [...new Set(cntdata.map(item => item.region))]

    const { region } = useParams()
    const currentRegion = region || 'all' 

    const isHave = regData.some(item => item == region)   

    if(loader){
        return <Loading />
    }
    
    if((!isHave && region)){
        return <Error />
    }
    
    return (
        <>
            {currentRegion === 'all' && <Title cntdata={cntdata} setSearch={setSearch} />}
            <div className='py-7 dark:bg-gray-800 dark:text-gray-300 flex justify-center items-center flex-wrap gap-3'>
                {
                    cntdata
                        .filter(item =>
                            (item.region === currentRegion || currentRegion === 'all') &&
                            item.name.toLowerCase().startsWith(search.toLowerCase())
                        )
                        .map((item, i) => <Card key={i} {...item} />)
                }
            </div>
        </>
    )
}

export default Main
