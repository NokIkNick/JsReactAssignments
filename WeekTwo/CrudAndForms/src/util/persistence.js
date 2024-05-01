//Function to fetch data from the server genericly:
export function fetchData(url, callback, method, body){
    
    //We start off by defining the headers. We always want to accept JSON.
    const headers = {
        'Accept': 'application/json'
    }

    //If we are sending data to the server, we also want to set the Content-Type to JSON.
    if(method === 'POST' || method === 'PUT'){
        headers['Content-Type'] = 'application/json'
    }

    //We define the options object that we will use in the fetch call. We do this because we want to be able to set the body of the request, if we are sending data to the server.
    const options = {
        method,
        headers
    }

    //If we are sending data to the server, we want to set the body of the request. We use JSON.stringify to convert the body object to a JSON string.
    if(body){
        options.body = JSON.stringify(body);
    }

    //We make the fetch call with the url and the options object. We then convert the response to JSON and call the callback function with the data.
    fetch(url, options)
        .then(response => response.json())
        .then(data => callback(data)) //The callback is basically what we want do with the data we get back from the server.
        .catch(err => {
            if(err.status){ //If the error has a status property, we know that it is a server error.
                err.fullError.then(e => console.log(e.detail));
            }else { //If the error does not have a status property, we know that it is a network error.
                console.log("Network error");
            }
        })
}