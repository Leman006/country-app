import { useContext, useEffect, useState } from "react"
import Main from "./components/Main"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Error from "./pages/Error"
import Detail from "./pages/Detail"
import Capital from "./pages/Capital"
import Admin from "./pages/Admin"
import RootLayout from "./layout/RootLayout"
import AdminLayout from "./layout/AdminLayout"
import { CountryData } from "./context/DataContext"


function App() {

  const [search, setSearch] = useState('')

  const {cntdata} = useContext(CountryData)
  

  

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>

          <Route path="/">
            <Route index element={<Main setSearch={setSearch} search={search} />} />
            <Route path="/:region" element={<Main  setSearch={setSearch} search={search} />} />
          </Route>
          
          <Route path="/details">
            <Route index path=":ad" element={<Detail cntdata={cntdata} />} />
            <Route path=":ad/:capital" element={<Capital cntdata={cntdata} />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
