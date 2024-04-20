import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CollectionsAppProvider } from '../../Context/Context'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Collection from '../Collection/Collection'
import MyCollections from '../MyCollections/MyCollections'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Navbar from '../../Components/Navbar/Navbar'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path : '/', element: <Home /> },
    { path : '/:genre', element: <Home />},
    { path : '/account', element: <Account /> },
    { path : '/collection/:id', element: <Collection /> },
    { path : '/my-collections/latest', element: <Collection /> },
    { path : '/my-collections', element: <MyCollections /> },
    { path : '/register', element: <Register /> },
    { path : '/login', element: <Login />}
  ])
  return routes
}

function App() {
  return (
    <CollectionsAppProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CollectionsAppProvider>
  )
}

export default App
