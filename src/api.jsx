// registration api
export const Registration = (reqbody) => {
    const JWT = sessionStorage.getItem('token')

    const url = process.env.REACT_APP_API_URL + '/register'
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
            Sentry.captureException(error);
        });
}

// Login api
export const Login = (reqbody) => {
    const JWT = sessionStorage.getItem('token')

    const url = process.env.REACT_APP_API_URL + '/login'
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
            Sentry.captureException(error);
        });
}