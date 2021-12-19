import {notify} from 'react-notify-toast';
import {apiService} from '~/api/actionGeneralApi';
import {GetUsersAPI} from '~/api/methodConstApi';
import {PARAMS_PAGE} from '~/constants/variable';


export const getDataDriver = async (param) => {
    const result = {
        listData: [],
        status: false,
    };
    try {
        let getDataDriver = JSON.parse(localStorage.getItem('DATA_USERS'));
        let reloadData = false;
        if (!getDataDriver) {
            getDataDriver = await apiService({
                endpoint: GetUsersAPI,
                query: `?results=${param}`,
            });
            reloadData = true;
        }
        if (getDataDriver.status) {
            notify.show(getDataDriver.data, 'error');
        } else {
            if (getDataDriver.results) {
                result.listData = getDataDriver.results;
                result.status = true;
            }
            if (reloadData) {
                localStorage.setItem('DATA_USERS', JSON.stringify(getDataDriver));
            }
        }
    } catch (error) {
        notify.show('Maaf ada gangguan saat mengambil data.', 'error');
    }

    return result;
};

export const limitData = (params, limit) => {
    const page = parseInt((params.get(PARAMS_PAGE) ? params.get(PARAMS_PAGE) : 1));
    const from = (page - 1) * limit;
    const to = page * limit;

    return {
        from,
        to,
        page,
    };
};
