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
    { path : '/collections-app/', element: <Home /> },
    { path : '/collections-app/:genre', element: <Home />},
    { path : '/collections-app/account', element: <Account /> },
    { path : '/collections-app/collection/:id', element: <Collection /> },
    { path : '/collections-app/my-collections/latest', element: <Collection /> },
    { path : '/collections-app/my-collections', element: <MyCollections /> },
    { path : '/collections-app/register', element: <Register /> },
    { path : '/collections-app/login', element: <Login />}
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
