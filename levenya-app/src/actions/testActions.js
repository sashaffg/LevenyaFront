import * as types from '../types/'
import axios from 'axios';

const onTestRequest = () => ({
    type: types.GET_TEST_REQUEST,
});

const onTestSuccess = data => ({
    type: types.GET_TEST_SUCCESS,
    payload: data,
});

const onTestError = error => ({
    type: types.GET_TEST_FAIL,
    payload: error,
});

export const getTests = email => dispatch => {
    var mail = JSON.stringify({email:email, name: "NAME"});
    console.log(mail);
    dispatch(onTestRequest());
    fetch('http://localhost:8080/test', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: mail
    })
    .then(res => dispatch(onTestRequest(res.data.email)))
    .catch(err => {
        console.warn(`Error: ${err}`)
        dispatch(onTestError(err.message))
    })
}

// export const getTests = (email) => dispatch => {
//         dispatch(onTestRequest())
//         console.warn('SEND !', email)
//         axios.post('http://localhost:8080/test', email)
//         .then(res => console.warn('CHEEE', res))
//         .catch(err => console.warn('PEZDA', err))
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/approve-service/test',
        //     dataType: 'json',
        //     data: email,
        // })
//}

//    fetch(`${environment.apiUrl}/user-service/send-admin-reg-mail`, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(adminMail)
//    })
//    .catch(error => console.warn(error))