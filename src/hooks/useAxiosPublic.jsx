import axios from "axios";
//baseURL:`http://localhost:9000`
const axiosPublic=axios.create({
    baseURL:`http://localhost:9000`
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;