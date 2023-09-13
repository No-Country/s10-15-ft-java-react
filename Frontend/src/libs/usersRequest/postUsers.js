import axios from "axios";



const postUsers = async (data) => {
    await axios.post(`https://s10-15-ft-java-react-production.up.railway.app/user`, data);

    return data;
};


export default postUsers;