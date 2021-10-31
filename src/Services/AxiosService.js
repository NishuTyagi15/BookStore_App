import axios from "axios";

class AxiosService {
    postMeth(url, data, header=false) {
        return axios.post(url, data, header);
    }
    getMeth(url, header=false) {
        return axios.get(url, header);
    }
    putMeth(url, data, header=false) {
        return axios.put(url, data, header);
    }
}

export default AxiosService;