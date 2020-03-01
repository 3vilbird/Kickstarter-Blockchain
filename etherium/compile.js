const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// delete the build folder before compilation
const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);


const campaignPath = path.resolve(__dirname,'contracts','Campaign.sol');
console.log(campaignPath);
const source =  fs.readFileSync(campaignPath,'utf8');
console.log(source);
const output = solc.compile(source,1).contracts;
// checks  if the dirctory isnexists or not and if not it will create; 
 fs.ensureDirSync(buildPath);
 console.log(output);

 for(let contract in output){
     fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','')+'.json'),
        output[contract]
     );
 }