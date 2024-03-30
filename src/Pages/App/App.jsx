import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CollectionsAppProvider } from '../../Context/Context'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Collections from '../Collections/Collections'
import CreateCollection from '../CreateCollection/CreateCollection'
import SignIn from '../SignIn/SignIn'
import NotFound from '../NotFound/NotFound'
import Navbar from '../../Components/Navbar/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path : '/', element: <Home /> },
    { path : '/account', element: <Account /> },
    { path : '/collections', element: <Collections /> },
    { path : '/create-collection', element: <CreateCollection /> },
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
