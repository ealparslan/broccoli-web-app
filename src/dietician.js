
import {api} from './apiFactory'

export class Dietician {

    constructor(id) {
        this.id = id;
    }

    getAggreementsWithDieters() {

        return api.get(`/aggreements-dieters-dieticians`, {
            params: {
                dieticianId: this.id
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(e => {
            return e;
        })
    }
}