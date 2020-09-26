import Api from "./Api";

const getUser = async (userId) =>{
    const response = await Api.get(`Account/${userId}`);
    return response.data;
}
export default{getUser};