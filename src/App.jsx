
import './App.css'

function App() {
 

  return (
    <body>
      <input type='checkbox' name='light' id='light'/>
      <input type='checkbox' name='night' id='night'/>
      <div className='sky'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className='sea'><span></span></div>
      <div className='content'>
        <div className='lighthouse'>
          <div className='base'></div>
          <div className='tower'></div>
          <div className='top'></div>
          <div className='roof'></div>
          <div className='light'></div>
        </div>
        <div className='lighthouse'>
        <div className='base'></div>
        <div className='tower'></div>
        </div>
        <label for="light"></label>
      </div>
      <label for="night"></label>
    </body>
  )
}

export default App
