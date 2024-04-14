import axios from "axios";

const BASEURL = "http://localhost:3000";

const usersEndpoint = `${BASEURL}/users`;

const apiCall = async (method, endpoint, params) => {
    const options = {
        method: method,
        url: endpoint,
        data: params ? params : {},
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const fetchUsers = () => {
    return apiCall("GET", usersEndpoint)
}
export const addUsers = (body) => {
    return apiCall("POST", usersEndpoint, body)
}
export const deleteUser = (id) => {
    return apiCall("DELETE", `${usersEndpoint}/${id}`)
}
export const updateUser = (id, body) => {
    return apiCall("PATCH", `${usersEndpoint}/${id}`, body)
}