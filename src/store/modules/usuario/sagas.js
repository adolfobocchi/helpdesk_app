import Api from "../../../services/api";
import { loginFailure, loginSuccess } from "./actions";
import { all, put, takeLatest} from 'redux-saga/effects';

async function logIn(email, password) {
    const data = JSON.stringify({
        email,
        password
    });
    const response = await Api.post('/signin', data);
    return response.data;
}

function* logInWithCredentials({ credentials }) {
    try {
        const user = yield logIn(credentials.email, credentials.password);
        yield put(loginSuccess(user)); 
    } catch(error) {
        yield put(loginFailure(error)); 
    }
}

export default all([
    takeLatest("@usuario/LOGIN_START", logInWithCredentials),
]);