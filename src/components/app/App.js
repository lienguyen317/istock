import React, {useState} from 'react';
import './App.css';
import Home from '../home/Home.js';
import About from '../about/About.js';
import Stocks from '../stocks/Stocks.js';


function App() {
  const [info, setInfo] = useState(null); 
  
  const handleClick = (info) => {
    setInfo(info);
  }

  return (
    <div className="app">
      <nav>
        <Link to='/'>
          <h1>iStocks</h1>
        </Link>
        <Link to='/stocks'>
          <h2>Stocks</h2>
        </Link>
        <Link to='/about'>
          <h2>About</h2>
        </Link> 
      </nav>
      <main>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route path='/stocks'>
            <Stocks/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          {/* <Route
            path="/prices/:currency/"
            render={(routerProps) => (
              <Prices handleClick={handleClick} {...routerProps} info={info} />
            )}
          /> */}
        </Switch> 
      </main>
    </div>
  );
}

export default App;
