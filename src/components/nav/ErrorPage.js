import Header from "./Header"
import Footer from "./Footer"
import NavButtons from './NavButtons.js'

const ErrorPage = () => {

  return (
    <>
      <Header />
      <NavButtons />
        
        <div className="error-div">
          <h1 className="error-message">You got lost!</h1>
          <img src='https://i0.wp.com/jetsettingfools.com/wp-content/uploads/2020/10/Hidden-Lake-Trail-Glacier-National-Park-Montana.jpg?resize=1024%2C683&ssl=1' alt='glacier-np' />
        </div>
      <Footer />
    </>
  )
}

export default ErrorPage