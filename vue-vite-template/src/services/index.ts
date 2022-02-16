import axios from 'axios';
import qs from 'qs';

function getData() {
    return axios({
        url: '/api/calendar/year',
        method: 'post',
        data: qs.stringify({
            year: 2020
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res => {
        console.log(res);
        return res.data;
    })
}

export default {
    getData
}
