const site = window.location.hostname
alert("injected into " + site)
if(site.includes("discord.com")){
   
    setTimeout(() => {
        let teste = document.querySelectorAll('.messageListItem-ZZ7v6g')
        console.log(teste)
        
    }, 5000);
         
}

var port = chrome.runtime.connectNative('com.my_company.my_application');

        port.onMessage.addListener(function (msg) {
            console.log('Received' + msg);
        });
        port.onDisconnect.addListener(function () {
            console.log('Disconnected');
        });
        port.postMessage({text: 'Hello, my_application'});




let chat_holder = document.querySelector('.chat-2ZfjoI')
let caching;
console.log("Injesjk")

function unify_text(input){
    message = ""
    for(let i=0; i<input.children.length;i++){
        message += input.children[i].textContent
    }
    return message
}

function print_last_message(){
    var getElementos = document.querySelectorAll('.messageListItem-ZZ7v6g')
    var ultimo = getElementos[getElementos.length -1]   //retorna div com spans normal sem node
    var lastDiv = ultimo.querySelector('div[id*="content"]')


    last_message = unify_text(lastDiv) 
    last_message == caching? null: fetch('http://localhost:8000', {
        method: 'POST',
        body: JSON.stringify({ parametro: "parametro" }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    caching = last_message
}

function callback() {
    print_last_message()
}

let config = { childList: true, subtree: true }
let observer = new MutationObserver(callback);

observer.observe(chat_holder, config)
var pai = document.querySelectorAll("message-content-1162103208525709342")

alert("injected into " + site)