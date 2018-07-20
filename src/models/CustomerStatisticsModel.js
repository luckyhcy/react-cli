import {observable} from "mobx";
import {action} from "mobx/lib/mobx";

export class CustomerStatisticsModel {
    @observable userName = '';
    @observable qMoney = '';
    @observable xqMoney = '';
    @observable getTime = '';
    @observable termOfValidity = '';
    @observable status = '';

    @action
    vModel(e, key) {
        if (Array.isArray(e)) {
            this[key] = e[0].format('YYYY-MM-DD') + ' ' +  e[1].format('YYYY-MM-DD')
        } else {
            this[key] = e.target ? e.target.value : e;
        }
        console.log(this[key])
    }
}

const customerStatisticsModel = new CustomerStatisticsModel();

export default customerStatisticsModel

