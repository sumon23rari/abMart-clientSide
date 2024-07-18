import axios from "axios";

const axiosPublic=axios.create({
    baseURL:`https://ab-mart-ecom-server-side.vercel.app`
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;