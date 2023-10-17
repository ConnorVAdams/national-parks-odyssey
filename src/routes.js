import App from './App.js'
import ErrorPage from './components/nav/ErrorPage.js'
import Home from './components/home/Home.js'
import Book from './components/book/Book.js'
import Game from './components/game/Game.js'
import Rules from './components/rules/Rules.js'

const routes =[
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/book',
                element: <Book />
            },
            {
                path: '/game',
                element: <Game />
            },
            {
                path: '/rules',
                element: <Rules />
            }
        ]
    }
]

export default routes