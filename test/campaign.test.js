const assert =  require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../etherium/build/campaignFactory.json');
const compiledCampaign = require("../etherium/build/Campaign.json");


let accounts;
let factory;
let campaignAddres;
let campaign;

beforeEach(async()=>{
accounts= await web3.eth.getAccounts();
factory = await new  web3.eth.Contract(JSON.parse(compiledFactory.interface))
.deploy({data:compiledFactory.bytecode }).send({from:accounts[0],gas:'1000000'});

await factory.methods.createCampaign('100').send({
    from :accounts[0],
    gas:'1000000'
});
[campaignAddres]=await factory.methods.getdeployedCampaigns().call();
campaign =  await new web3.eth.Contract(

    JSON.parse(compiledCampaign .interface),
    campaignAddres
);

});

describe("Campaigns",()=>{
    it('deploys a factory and a campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    // test for  manager
    it('marks caller as the manager',async()=>{
           // we didn't create function called manager since it is a public variable 
           // a method well be automatically generated 
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    });
    //test for providers
    it(('allows peopie to contribute and marks as provider'),async()=>{
        await campaign.methods.contribute().send({
            value:'200',
            from:accounts[1] 
       });
       // approvers is a maapping returns treu if value exists else returns false
       const isContributor = await campaign.methods.approvers(accounts[1]).call();
       assert(isContributor);
    });
    it('it requires a minimum  contribution',async()=>{
        try {
            await campaign.methods.contribute().send({
                value:'2',
                from:accounts[1]
            });
            assert(false)            
        } catch (error) {
            assert(error);            
        }
    });

    it('it allows a manager to make a payment request',async()=>{
        await campaign.methods
        .createRequest('Buy batteries','100',accounts[1])   
        .send({
            from :accounts[0],
            gas:'1000000'
        });
        const request = await campaign.methods.requests(0).call();
        assert.equal('Buy batteries',request.description);
    });
    it('process request',async()=>{
        await campaign.methods.contribute().send({
            from :accounts[0],
            value:web3.utils.toWei('10','ether')
        });
        await campaign.methods
        .createRequest('A something',web3.utils.toWei('5','ether'),accounts[1]).send({
            from:accounts[0],gas:'1000000'
        });
        await campaign.methods.approveRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        });
        await campaign.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        });
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance,'ether');
        balance =  parseFloat(balance);
        console.log(balance);
        
        assert(balance > 103);    
    
    });


} );



