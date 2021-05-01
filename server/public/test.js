var xhr = new XMLHttpRequest();
var url = 'https://openapi.wooribank.com:444/oai/wb/v1/login/getCellCerti';
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type','application/json;charset=utf-8');
xhr.setRequestHeader('appkey', 'l7xxzgr6bTqrCxyGZpPclrHBPlD1RXNcMzrz');

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
    }
};


xhr.send();