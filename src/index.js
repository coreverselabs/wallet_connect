import { createCaptcha } from "freecaptcha";

async function connect_keplr() {
    if (!window.keplr) {
        throw ("Please install keplr extension");
    } else {
        try {
            const chainId = "cosmoshub-4";

            await window.keplr.enable(chainId);
        
            const offlineSigner = window.keplr.getOfflineSigner(chainId);
        
            const accounts = await offlineSigner.getAccounts();
            console.log(accounts[0].address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_keplr = connect_keplr;


async function connect_leap() {
    if (!window.leap) {
        throw ("Please install leap extension");
    } else {
        try {
            const chainId = "cosmoshub-4";

            await window.leap.enable(chainId);
        
            const offlineSigner = window.leap.getOfflineSigner(chainId);
        
            const accounts = await offlineSigner.getAccounts();
            console.log(accounts[0].address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_leap = connect_leap;



async function connect_cosmostation() {
    if (!window.cosmostation) {
        throw ("Please install cosmostation extension");
    } else {
        try {
            const chainId = "cosmoshub-4";
            const account = await window.cosmostation.cosmos.request({
                method: "cos_requestAccount",
                params: { chainName: chainId },
              });
            console.log(account.address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_cosmostation = connect_cosmostation;




async function generateCaptcha() {
    var el = document.getElementById('captcha');
    var captcha_val = createCaptcha(el);
    console.log(captcha_val);
    localStorage.setItem("cap_key", captcha_val);
   }
  window.generateCaptcha = generateCaptcha;


  async function validateCaptcha() {
    var captcha_val = localStorage.getItem("cap_key");
    console.log(captcha_val);
    var input_val = document.getElementById("captchaTextBox").value;
    console.log(input_val);
    if (input_val == captcha_val){
        console.log("true");
        return 1;
    }
    else {
        console.log("false");
        return 0;
    }
   }
  window.validateCaptcha = validateCaptcha;


  async function resetCaptcha(){
    localStorage.setItem("cap_key", "");
  }
  window.resetCaptcha = resetCaptcha;
