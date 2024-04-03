import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CollectionsAppProvider } from '../../Context/Context'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Collection from '../Collection/Collection'
import MyCollections from '../MyCollections/MyCollections'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'
import Navbar from '../../Components/Navbar/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path : '/', element: <Home /> },
    { path : '/account', element: <Account /> },
    { path : '/collection', element: <MyCollections /> },
    { path : '/collection/:index', element: <Collection /> },
    { path : '/my-collections', element: <MyCollections /> },
    { path : '/my-collections/latest', element: <Collection /> },
    { path : '/sign-in', element: <SignIn /> },
    { path : '*', element: <NotFound /> }
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
