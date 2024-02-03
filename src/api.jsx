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

// create story api
/** 
reqbody{
    "userid":"82fd9455-d5ac-46a1-b19d-7cf1342e524c",
    "description":"description description description description description",
    "title": "title title",
    "category":"kids",
    "imgurl": "laksfdlkasdflsldfjld"
}
 */
export const CreateStoryAPI = (reqbody) => {

    const url = process.env.REACT_APP_API_URL + '/story/create'
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

// get story with storyid api
export const GetStorywithStoryidAPI = (storyid) => {

    const url = process.env.REACT_APP_API_URL + '/story/'+storyid
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}


// get all the stories with userid api
export const GetStorywithUseridAPI = (userid) => {

    const url = process.env.REACT_APP_API_URL + '/story/user/' + userid
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}


// get all the stories with category api
export const GetStorywithCategoryAPI = (category) => {

    const url = process.env.REACT_APP_API_URL + '/story/category/'+category
    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}

// update story with story id with patch api
export const UpdateStorywithStoryidAPI = (reqbody, storyid) => {

    const url = process.env.REACT_APP_API_URL + '/story/'+ storyid
    const fetchOptions = {
        method: "PATCH",
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

// delete story with storyid
export const DeleteStorywithstoryid = (storyid) => {

    const url = process.env.REACT_APP_API_URL + '/story/'+storyid
    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, fetchOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });
}