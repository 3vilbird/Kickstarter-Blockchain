import web3 from './web3';
import canpaignFactory from './build/campaignFactory.json';
const instance = new web3.eth.Contract(
    JSON.parse(canpaignFactory.interface),
    '0xC527123D6475FD84F75A467ca79aEb6dB575E10f'
    );

export default instance;