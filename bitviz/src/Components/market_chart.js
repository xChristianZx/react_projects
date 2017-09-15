import React, {Component} from 'react';
import Axios from 'axios';
var Client = require('coinbase').Client;
var client = new Client({'apiKey': 'API KEY',
'apiSecret': 'API SECRET'});

class MarketChart extends Component {
    constructor(props) {
        super(props) 
        
    }
    
    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        const BFX_URL = 'https://api.coinbase.com/v2/prices/spot?currency=USD';
        
        // client.getSpotPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
        //     console.log(price);
        //   });
        
        // client.getCurrencies((err, currencies) => console.log(currencies))
        Axios.get(BFX_URL)
        .then((response) => console.log(response))
        .catch((err) => console.log('ERROR: ', err));
        
        Axios({
            method: 'get',
            url:'https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/Time',
            withCredentials: false,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log('ERROR: ', err));

    }

    render () {
        return (
            <div>
                Hello World!
            </div>
        )
    }

}

export default MarketChart;