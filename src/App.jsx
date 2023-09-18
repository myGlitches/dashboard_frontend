import './App.css'
import Sidebar from './components/Sidebar'
import MainScreen from './components/MainScreen'

function App() {
  return (
    <>
      <div className="main flex w-full">
        <Sidebar />
        <MainScreen />
      </div>
    </>
  )
}

export default App