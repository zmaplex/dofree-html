const debugSeverHost = 'http://192.168.123.25';
const debugSeverPort = '8000';
const StableSeverHost = 'https://domain-api.dofree.xyz';
const StableSeverPort = '';

const debug = false;


function getApiHost(){
    if(debug){
        return debugSeverHost + ':'+debugSeverPort;
    }else{
        return StableSeverHost;
    }
}
