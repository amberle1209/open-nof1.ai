import ccxt from "ccxt";  
  
export const binance = new ccxt.binance({  
  apiKey: process.env.BINANCE_API_KEY,  
  secret: process.env.BINANCE_API_SECRET,  
  options: {  
    defaultType: "future",  
  },  
  urls: {  
    api: {  
      public: 'https://demo-fapi.binance.com/fapi',  
      private: 'https://demo-fapi.binance.com/fapi',  
    }  
  }  
});
