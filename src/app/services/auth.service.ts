export class AuthService {
  isLoggedIn = false;

  isAuth() {
    return this.isLoggedIn;
  }

  checkData(login: string, password: string, arr: Array<Object>) {
    let user = {login, password};
    let num = arr.filter(i => i == user).length;
    let token: string = '';
    if(num) {
      token = JSON.stringify(user);
      this.isLoggedIn = true;
    } else {
      alert('Such login or password is never used')
    }
  } 

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
