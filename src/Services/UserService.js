import AxiosService from './AxiosService';

const obj = new AxiosService();
const baseurl = "https://new-bookstore-backend.herokuapp.com/bookstore_user/"
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
    Authorization: token,
    }
};

class UserServices {
    registration(data) {
        let response = obj.postMeth(`${baseurl}registration`, data, headerconfig);
        return response;
    }
    login(data) {
        let response = obj.postMeth(`${baseurl}login`, data, headerconfig);
        return response;
    }
    getAllbooks(data) {
        let response = obj.getMeth(`${baseurl}get/book`, data, headerconfig);
        return response;
    }
    getCartItem(data) {
        let response = obj.getMeth(`${baseurl}get_cart_items`, data, headerconfig);
        return response;
    }
    customerDetails(data) {
        let response = obj.putMeth(`${baseurl}edit_user`, data, headerconfig);
        return response;
    }
    orderItem(data) {
        let response = obj.postMeth(`${baseurl}add/order`, data, headerconfig);
        return response;
    }
}

export default UserServices