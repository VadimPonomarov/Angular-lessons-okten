import {environment} from '../../environments/environment';

const {API} = environment;

export const urls = {
  login: `${API}/auth`,
  cars: `${API}/cars`,
  register: `${API}/users`,
};
