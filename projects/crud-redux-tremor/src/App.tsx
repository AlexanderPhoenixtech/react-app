import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewuser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {

  return (
    <>
      <ListOfUsers/>
      <CreateNewUser/>
      <Toaster richColors/>
    </>
  )
}

export default App
