import { ACCESS_TOKEN } from '../constants';

const request = (options) => {    

    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    const defaults = { headers: headers };    
    options = Object.assign({}, defaults, options);    
    return fetch(options.url, options)
    .then(response =>         
        response.json().then(json => {            
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );

};

export function get(url) {
    return request({
        url: url,
        method: 'GET'
    });
}

export function del(url) {
    return request({
        url: url,
        method: 'DELETE'
    });
}

export function post(url, requestBody) {
    return request({
        url: url,
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}