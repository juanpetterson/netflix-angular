import { UserResponse } from './models/user-response';
import { Injectable } from '@angular/core';
import * as users from '../../assets/data/users.json';

@Injectable({ providedIn: 'root' })
export class UserApiClient {
  public queryAsync(): Promise<UserResponse[]> {
    return Promise.resolve(users);
  }
}
