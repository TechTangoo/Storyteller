// registration api
export const RegistrationAPI = (reqbody) => {

    const url = process.env.REACT_APP_API_URL + '/user/register'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}

// Login api
export const LoginAPI = (reqbody) => {

    const url = process.env.REACT_APP_API_URL + '/user/login'
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reqbody)
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}