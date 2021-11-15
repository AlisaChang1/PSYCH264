import box from './box.png';
import funnel from './funnel.png';
import './App.css';

function App() {

  function Drop (xposition) {
      var context;
      var canvas;
      var dx=4;  
      var dy=4;
      var y=20;
      var x=xposition;
      function draw(){
          canvas = document.getElementById('canvas');
          context= canvas.getContext('2d');
          context.clearRect(0,0,500,500);
          context.beginPath();
          context.fillStyle="red";
          context.arc(x,y,6,0,Math.PI*2,true);
          context.closePath();
          context.fill();
          if( x<0 || x>100)
              dx=-dx;
          if( y<0 || y>300)
              dy=0;
              // x+=dx;
              y+=dy;
      }
      setInterval(draw,15); 
      function clear() {
          canvas = document.getElementById('canvas');
          context= canvas.getContext('2d');
          context.clearRect(0,0,500,500);
      }
      setTimeout(() => { console.log("World!"); }, 3000);
      clear()
  }

  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
      Drop(100) 
    } else {
      Drop(398)
    }
    setTimeout(() => { console.log("World!"); }, 10000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Top">
          <img src={funnel} className="Funnel" alt="funnel" />
          <img src={funnel} className="Funnel" alt="funnel" />
        </div>
        <canvas id="canvas" height="320" width="500" top="0">Get a better browser!</canvas>
        <div className="Bottom">
          <img src={box} className="Container" alt="box" />
          <img src={box} className="Container" alt="box" />
        </div>
      </header>
    </div>
  );
}

export default App;
