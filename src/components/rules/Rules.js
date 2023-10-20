import NavButtons from "../nav/NavButtons.js"

const Rules = () => {
  return (
    <>
      <NavButtons />
      <div className="rules">
        <div>
          <header >
            <h1>How To Play</h1>
            <div className='rules-p'>
              <p>
                Welcome to Untitled National Parks Game! Here are the instructions on how to play:
              </p>
              <p>
                <strong>Goal</strong>: Win minigames to obtain as many National Park Collectible Cards as possible. Display your knowledge and skills to gain more points, and climb to the top of the leaderboard!
              </p>
              <p>
              <strong>Learn</strong>: Take as much time as needed to gather information about the many wonderful National Parks in the United States. Search through all 63 parks and even open their encyclapedias. The more you know, the easier the challenges!
              </p>
              <p>
              <strong>Map</strong>: Explore the National Parks on our map, by clicking on the designated park tile. With each park a random minigame will appear, that you will have to beat. If beaten, you will recieve a certain amount of points (based on your performance and park popularity), and you will also recieve a Collecters Card of that specific park. Collect them all if you dare!
              </p>
              <p>
              <strong>Minigames</strong>: There will be three total minigames that you could have the possibility of landing on. The encyclopedia cannot be opened during challenges!
                <ul>
                  <li><strong>Wildlife Memory</strong>: User plays a memory game with tiles featuring images of flora and fauna local to that park. Match all memory tiles to win!
      </li>
                  <li><strong>Hangman</strong>: Game uses a word or words in the park object and plays a hangman game with them. Guess the correct associated word or words within the givin amount of attempts to succeed!
      </li>
                  <li><strong>Stay on the Trail</strong>: A hiking trail will be shown, use the arrow keys to navigate the hiker through the trail. If you fall off the trail, you have to restart. Get to the end to complete the minigame!

      </li>
                </ul>
              </p>
              <p>Good Luck!</p>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Rules