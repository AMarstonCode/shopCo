const setSiteData = () => {
    return fetch('../assests/bigData/data.json')
        .then(response => response.json())
        .then(data => {
            if (!localStorage.getItem('myData')) {
                localStorage.setItem('myData', JSON.stringify(data));
            }
        })
        .catch(error => console.log(error));
    }
    
    setSiteData();
    
    const parsedSiteData = JSON.parse(localStorage.getItem('myData'))    