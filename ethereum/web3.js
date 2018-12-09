import Web3 from 'web3';
import ACCESS_TOKEN from '../key';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //on the server or user is not running metamask


    const provider = new Web3.providers.HttpProvider(
        `https://rinkeby.infura.io/v3/${ACCESS_TOKEN}`
    );
    web3 = new Web3(provider);
}

export default web3;