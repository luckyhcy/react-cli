import {observable} from "mobx";
import {action} from "mobx/lib/mobx";

export class LoginModel {
    @observable userName = '';
    @observable password = '';

    @action
    login($router) {
        console.log(this.userName, this.password)
        const location = {
            pathname: '/index/aa/CustomerStatistics',
        };
        $router.push(location)
    }

    @action
    uName(e) {
        this.userName = e.target.value;
    }

    @action
    pWord(e) {
        this.password = e.target.value;
    }
}

const loginModel = new LoginModel();

export default loginModel

