// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      Host: 'open-api.wooribank.com:444',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'appkey':'l7xxzgr6bTqrCxyGZpPclrHBPlD1RXNcMzrz'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://openapi.wooribank.com:444/oai/wb/v1/login/getCellCerti', {  "dataHeader": {
    "UTZPE_CNCT_IPAD": "",
    "UTZPE_CNCT_MCHR_UNQ_ID": "",
    "UTZPE_CNCT_TEL_NO_TXT": "",
    "UTZPE_CNCT_MCHR_IDF_SRNO": "",
    "UTZ_MCHR_OS_DSCD": "",
    "UTZ_MCHR_OS_VER_NM": "",
    "UTZ_MCHR_MDL_NM": "",
    "UTZ_MCHR_APP_VER_NM": ""
  },
  "dataBody": {
    "COMC_DIS": "1",
    "HP_NO": "01012345678",
    "HP_CRTF_AGR_YN": "Y",
    "FNM": "홍길동",
    "RRNO_BFNB": "930216",
    "ENCY_RRNO_LSNM": "1234567"
  } })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });