import { Outlet } from "react-router-dom"
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
