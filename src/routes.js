import App from './App.js'
import ErrorPage from './components/nav/ErrorPage.js'
import Home from './components/home/Home.js'
import Book from './components/book/Book.js'
import Game from './components/game/Game.js'
import Rules from './components/rules/Rules.js'
import MemoryGame from './components/game/MemoryGame.js'
import ArrowGame from './components/game/ArrowGame.js'
import Hangman from './components/game/Hangman.js'

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
                path: '/game/',
                element: <Game />,
                children: [
                    {
                        path: '/game/memory',
                        element: <MemoryGame />
                    },
                    {
                        path: '/game/hangman',
                        element: <Hangman />
                    },
                    {
                        path: '/game/arrow-game',
                        element: <ArrowGame />
                    }
                ]
            },
            {
                path: '/rules',
                element: <Rules />
            }
        ]
    }
]

export default routes