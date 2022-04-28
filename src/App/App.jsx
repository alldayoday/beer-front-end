import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// Components
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import BeerForm from '../pages/Forms/BeerForm'
import ShopForm from '../pages/Forms/ShopForm'
import BeerList from '../pages/BeerList/BeerList'
import ShopList from '../pages/ShopList/ShopList'
import Header from '../components/Header/Header'
import ShopDetails from '../pages/ShopDetails/ShopDetails'
import BeerDetails from '../pages/BeerDetails/BeerDetails'
import Confirmation from '../pages/Confirmation/Confirmation'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from '../services/authService'
import * as beerService from '../services/beers'

// Image Assets
import CoolCat from '../assets/cool-cat.svg'
import NerdCat from '../assets/nerd-cat.svg'
import HappyCat from '../assets/happy-cat.svg'
import CatInBox from '../assets/cat-in-box.svg'
import TeaCupCat from '../assets/teacup-cat.svg'
import SkaterCat from '../assets/sk8r-boi-cat.svg'

function App() {
  const navigate = useNavigate()
  const [beers, setBeers] = useState([])
  const [shops, setShops] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const catImages = [
    SkaterCat, CoolCat,
    NerdCat, HappyCat,
    CatInBox, TeaCupCat,
  ]

  const addBeer = async (beerData) => {
    const beer = await beerService.create(beerData)
    setBeers([...beers, beer])
  }

  const addShop = async (shopData) => {}

  const updateBeer = async (beerData) => {
    const updatedBeer = await beerService.update(beerData)
    setBeers(beers.map((beer) => (
      beer.id === updatedBeer.id ? updatedBeer : beer
    )))
  }

  const updateShop = async (shopData) => {}

  const deleteBeer = async (id) => {
    await beerService.deleteOne(id)
    setBeers(beers.filter(beer => beer.id !== parseInt(id)))
  }

  const deleteShop = async (id) => {}

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await beerService.getAll()
      setBeers(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/shops" element={
            <ProtectedRoute user={user}>
              <ShopList shops={shops} />
            </ProtectedRoute>
          } />
          <Route path="/beers" element={
            <ProtectedRoute user={user}>
              <BeerList beers={beers} catImages={catImages} />
            </ProtectedRoute>
          } />
          <Route path="/shops/:id" element={
            <ProtectedRoute user={user}>
              <ShopDetails shops={shops} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/beers/:id" element={
            <ProtectedRoute user={user}>
              <BeerDetails catImages={catImages} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/beers/new" element={
            <ProtectedRoute user={user}>
              <BeerForm addBeer={addBeer} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shops/new" element={
            <ProtectedRoute user={user}>
              <ShopForm addShop={addShop} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/beers/:id/edit" element={
            <ProtectedRoute user={user}>
              <BeerForm beers={beers} updateBeer={updateBeer} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shops/:id/edit" element={
            <ProtectedRoute user={user}>
              <ShopForm shops={shops} updateShop={updateShop} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/beers/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteBeer={deleteBeer} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shops/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteShop={deleteShop} user={user} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App