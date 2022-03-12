import './App.css';
import logo from './logoctc.png';

function App() {

  return (
    <div className="App">
      <div className="navbar">
          <div className="navbar-logo">
              <img src={logo} alt='LOGO' height='50px' width='100px' />
          </div>
          <div className="navbar-login">
              <button className="login-btn">Login</button>
          </div>
      </div>
      <div className="main-content">
        <div className='hero'>
          <div className="hero-content">
            <span className="hero-content-head">Cut the chase, get the job done.</span>
            <br/>
            <span className="hero-content-body">get refarrals easily without the trouble of cold messaging.</span>
          </div>
          <div className="hero-image">
            <img src='https://woobro.design/thumbnails/48/sartup-fly-5e5e1f173a287.png' alt='hero' height='700px'/>
          </div>
        </div>
        <div className="hero-logos">
          <div className="logo"/>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
