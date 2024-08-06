import axios from "axios";
//baseURL:`https://ab-mart-ecom-server-side.vercel.app`
const axiosPublic=axios.create({
    baseURL:`https://ab-mart-ecom-server-side.vercel.app`
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;