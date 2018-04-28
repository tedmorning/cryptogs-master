module.exports = function(contractList,web3,network){
  let contracts = []
  console.log("Network:",network)
  for(let c in contractList){
    try{
      let abi = require("../contracts/"+contractList[c]+"."+network+".abi.js")
      let address = require("../contracts/"+contractList[c]+"."+network+".address.js")
      console.log(contractList[c],address,abi.length)
      contracts[contractList[c]] = new web3.eth.Contract(abi,address)
      console.log("contract")
      contracts[contractList[c]].blockNumber = require("../contracts/"+contractList[c]+"."+network+".blockNumber.js")
      console.log("@ Block",contracts[contractList[c]].blockNumber)
    }catch(e){console.log(e)}
  }
  return contracts
}
