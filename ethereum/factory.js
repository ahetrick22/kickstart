import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0281812A5C8D18033c026c2Bb581aB11822F94d1'
);

export default instance;