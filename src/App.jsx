import './App.css'
import AppRouter from "./AppRouter"
import { FlightsContextProvider } from './Context'

function App() {
  return (
    <FlightsContextProvider>
      <AppRouter />
    </FlightsContextProvider>
  )
}

export default App
