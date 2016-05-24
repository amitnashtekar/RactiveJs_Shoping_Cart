/**
 * Created by amita on 5/23/2016.
 */
function checkResponseStatus(res) {
    if (res.status < 400) {
        return res;
    } else {
        let error = new Error(res.statusText);
        error.statusCode = res.status;
        error.response = res;
        throw error;
    }
}

function parseJson(res) {
    return new Promise((resolve) => {
            res.json().then(data => {
            resolve({
                json: data,
                url: res.url
            });
});
});
}

export function getJson(url) {
    return fetch(url)
        .then(checkResponseStatus)
        .then(parseJson)
}
