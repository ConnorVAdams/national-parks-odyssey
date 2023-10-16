import React, { useState, useEffect } from "react";

const characterImage = "https://www.nickgowman.com/wp-content/uploads/cartoon-illustration-hiker-1.png";

const maze = [
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
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  const cellSize = 20;

const ArrowGame = () => {
    const [position, setPosition] = useState({ x: 10, y: 380 });

    const handleKeyDown = (e) => {
        // Set amount of pixels we want character to move
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
  
      // Check for collisions with walls
      if (!isCollision(newPosition.x, newPosition.y)) {
        setPosition(newPosition);
      } else {
        // Alert that game is over
        alert("Game Over! You touched the wall.");
        setPosition({x: 10, y: 380})
        // You can reset the game or perform any other action on collision
      }
    };
  
    const isCollision = (x, y) => {
      // Convert the character position to maze coordinates
      const mazeX = Math.floor(x / cellSize);
      const mazeY = Math.floor(y / cellSize);
  
      // Check if the new position is a wall
      return maze[mazeY][mazeX] === 1;
    };
  
    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleKeyDown]);
  
    return (
      <div style={{ position: "relative", height: "400px", width: "400px", border: "1px solid #ccc" }}>
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: cellSize,
                  height: cellSize,
                  borderTop: cell === 1 ? "1px solid black" : "none",
                  borderRight: cell === 1 ? "1px solid black" : "none",
                  borderBottom: cell === 1 ? "1px solid black" : "none",
                  borderLeft: cell === 1 ? "1px solid black" : "none",
                  boxSizing: "border-box",
                  
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
          }}
        />
      </div>
    );
  };

export default ArrowGame;