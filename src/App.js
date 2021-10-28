import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';

function App() {

  const canvasRef = useRef(null);

  let gameState = {
    player: {
      x: 301,
      y: 300,
    }
  };

  let pressedKeys = {};
  window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; };
  window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    setInterval(() => {
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      context.beginPath();
      context.arc(gameState.player.x, gameState.player.y, 25, 0, 2 * Math.PI);
      context.fillStyle = 'black';
      context.fill();

      const speed = 5;
      if (pressedKeys[87]) {
        gameState.player.y -= speed;
      }
      if (pressedKeys[65]) {
        gameState.player.x -= speed;
      }
      if (pressedKeys[83]) {
        gameState.player.y += speed;
      }
      if (pressedKeys[68]) {
        gameState.player.x += speed;
      }
    }, 33);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <canvas ref={canvasRef} id="myCanvas" width="600" height="600" style={{border:"1px solid #000000"}} />
      </header>
    </div>
  );
}

export default App;
