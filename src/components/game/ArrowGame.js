import React, { useState, useEffect, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
const characterImage = "https://www.nickgowman.com/wp-content/uploads/cartoon-illustration-hiker-1.png";

const maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
];
const winBox = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const cellSize = 20;

const ArrowGame = () => {
  // const { gamePark: { id, name, attractions, wildlife, image, location, gameWon } } = currentGameData
  // const { path } = currentGameData

  const { currentGameData, handleWin} = useOutletContext()
  const { gamePark: { id, name, attractions, wildlife, image, location, gameWon } } = currentGameData
  const { path } = currentGameData
  const [position, setPosition] = useState({ x: 10, y: 380 });
  const [startTime, setStartTime] = useState(Date.now())
  // const [wallHits, setWallHits] = useState(1)

  const handleKeyDown = useCallback((e) => {
    const step = 10;
    let newPosition = { ...position };

  switch (e.key) {
    case "ArrowUp":
      newPosition.y = Math.max(position.y - step, 0);
      break;
    case "ArrowDown":
      newPosition.y = Math.min(position.y + step, (maze.length - 1) * cellSize);
      break;
    case "ArrowLeft":
      newPosition.x = Math.max(position.x - step, 0);
      break;
    case "ArrowRight":
      newPosition.x = Math.min(position.x + step, (maze[0].length - 1) * cellSize);
      break;
    default:
      break;
  }

if (!isCollisionWinBox(newPosition.x, newPosition.y)) {
    setPosition(newPosition);
  } else {
    // Log the message to the console or display it in the component
    const endTime = Date.now()
    // Callback handleWin function if end is reached
    handleWin(id, (endTime - startTime))

    // Reset the position
    // Add points or perform any other action on winning
  }

     // Check for collisions with walls
  if (!isCollision(newPosition.x, newPosition.y)) {
    setPosition(newPosition);
  } else {
    // Reset the position
    setPosition({ x: 10, y: 380 })
    // setWallHits(wallHits + 1)
  }

  // Check for collisions with the win box
  
}, [position, handleWin, id])
  

  const isCollision = (x, y) => {
    // Convert the character position to maze coordinates
    const mazeX = Math.floor(x / cellSize);
    const mazeY = Math.floor(y / cellSize);

    // Check if the new position is a wall
    return maze[mazeY][mazeX] === 1;
  };

// Check for collisions with walls


  const isCollisionWinBox = (x, y) => {
    // Convert the character position to winBox coordinates
    const winBoxX = Math.floor(x / cellSize);
    const winBoxY = Math.floor(y / cellSize);

    // Check if the new position is a winBox
    return winBox[winBoxY][winBoxX] === 1;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // const reset = () => {
  //   console.log('hi isaac')
  // }

  return (
    <>
      <div style={{backgroundImage: {image}, position: "relative", height: "400px", width: "400px", border: "1px solid #ccc" }}>
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell === 1 ? "rgba(139, 69, 19, 0.1)" : "transparent",
                  borderTop: cell === 1 ? "rgba(139, 69, 19, 0.1)" : "transparent",
                  borderRight: cell === 1 ? "rgba(139, 69, 19, 0.1)" : "transparent",
                  borderBottom: cell === 1 ? "rgba(139, 69, 19, 0.1)" : "transparent",
                  borderLeft: cell === 1 ? "rgba(139, 69, 19, 0.1)" : "transparent",
                  boxSizing: "border-box",
                  position: "absolute",
                  top: `${rowIndex * cellSize}px`,
                  left: `${colIndex * cellSize}px`,
                }}
              ></div>
            ))}
          </div>
        ))}
        {winBox.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", position: "absolute", top: `${rowIndex * cellSize}px` }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell === 1 ? "rgba(0, 255, 0, 0.2)" : "transparent",
                  borderTop: cell === 1 ? "rgba(0, 255, 0, 0.2)" : "transparent",
                  borderRight: cell === 1 ? "rgba(0, 255, 0, 0.2)" : "transparent",
                  borderBottom: cell === 1 ? "rgba(0, 255, 0, 0.2)" : "transparent",
                  borderLeft: cell === 1 ? "rgba(0, 255, 0, 0.2)" : "transparent",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: `${colIndex * cellSize}px`,
                  zIndex: 1, // Ensure the win box is rendered above the maze
                }}
              ></div>
            ))}
          </div>
        ))}
        <img
          src={characterImage}
          alt="Character"
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: "10px",
            height: "10px",
            zIndex: 2, // Ensure the character is rendered above the win box and the maze
          }}
        />
      </div>
      {/* <button onClick={reset}>Retry</button> */}
    </>
  );
};

export default ArrowGame;