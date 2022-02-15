class Map {
  constructor(){
    this.ip;
    this.lat;
    this.long;
  }

  async getIpData(ipAddress){
    let data = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_Vd9V7RfXcNnnNbl69el94S51ORuj1&ipAddress=${ipAddress}`);
    let response = await data.json();
    let lat = await response.location.lat;
  }

  getLat(){
    return this.lat;
  }
}

const teste = new Map();

teste.getIpData("8.8.8.8");
console.log(teste.getLat());
