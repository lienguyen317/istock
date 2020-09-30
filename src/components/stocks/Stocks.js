import React from 'react';
import data from './stock-data';
import {Link, Switch} from 'react-router-dom'

const Stocks = () => {
    let list = data.map((item)=>{
        return (
            <div className='stocks' key={item.name}>
                <p>
                    <Link to={'/prices' + item.name}>{item.name}</Link>
                </p>
                <div className='stockInfo'>
                    <Switch>
                        <Route
                        <h3>Name:{item.name}</h3>
                        <h4>Symbol:{item.symbol}</h4>
                        <h5>Last Price:{item.lastPrice}</h5>
                        <h5>Change:{item.change}</h5>
                        <h5>High:{item.high}</h5>
                        <h5>Low:{item.low}</h5>
                    </Switch>
                    
                </div>
            </div>
        )
    })

    return(
        <div>
           {list}
           <div className='stockInfo'></div>
        </div>
    )
}

export default Stocks