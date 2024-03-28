import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statehook from './hooks/Statehook'
import Reducerhokk from './hooks/Reducerhook'
import Effecthooks from './hooks/Effecthooks'
import Refhook from './hooks/Refhook'
import LayoutEffect from './hooks/LayoutEffect'
import Context from './hooks/ContextAPI/Context'

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path : '/',
        element : <Statehook/>
      },
      {
        path : '/reducer',
        element : <Reducerhokk/>
      },
      {
        path : '/effect',
        element : <Effecthooks/>
      },
      {
        path : '/ref',
        element : <Refhook/>
      },
      {
        path : '/layouteffect',
        element : <LayoutEffect/>
      },
      {
        path : '/context',
        element : <Context/>
      },
  ]
  )


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App