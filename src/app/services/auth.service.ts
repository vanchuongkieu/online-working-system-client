import {http} from '@/utils/httpOption';

class AuthService {
  getGoogleProfile() {
    return http.get('/auth/google/login/success', {
      headers: {
        'Access-Control-Allow-Credentials': true,
      },
      withCredentials: true,
    });
  }
}

export default new AuthService();
