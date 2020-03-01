import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //WE ARE IN         browser
    web3= new Web3(Web3.givenProvider || "http://localhost:8545");
}
else{
    const provider = new  Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/8b26dde229f6446b9d8ad92d0b2fcce8'
    );
    web3= new Web3(provider);
}
export default web3;


