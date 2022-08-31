import {http} from '@/utils/httpOption';
import {IUserModel} from './models/User.model';

class UserService {
  getUsers() {
    return http.get<IUserModel[]>('users');
  }
}

export default new UserService();
