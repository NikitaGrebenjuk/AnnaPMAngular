export class Client{
  fname: string;
  lname: string;
  email: string;
  phone: string;
  project: string;

  constructor(
    fname: string ="",
    lname: string ="",
    email: string ="",
    phone: string ="",
    project: string ="") {
      this.fname=fname;
      this.lname=lname;
      this.email=email;
      this.phone=phone;
      this.project=project;
  }

  validateInput(client:Client):boolean {
    if (client.fname != null && client.lname != null && client.email != null){
        return true;
    } else {
        return false;
    }
  }

  checkNumbers(param:string):boolean {
          if ((param.match(/\d+/g)) != null) {
              alert("numbers in name detected");
              return false;
          } else{
              return true;
          }
  }

  checkEmail(emailToCheck:string) {
      let validRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailToCheck.match(validRegEx) != null) {
          return true;
      } else{
          alert("email invalid");
          return false;
      }
  }

  emailExists(email:string) {
      if ((window.localStorage.getItem(email)?true:false)){
          alert("Email: " + email + " exists");
          return false;
      } else{
          return true;
      }
  }

  check() {
      if(this.validateInput(this)){ // checking if requierd inputs are not empty
          if(this.checkEmail(this.email) && this.emailExists(this.email) && this.checkNumbers(this.fname) && this.checkNumbers(this.lname)){
              window.localStorage.setItem(this.email,JSON.stringify(this));
              alert("client created: " +JSON.stringify(this));
          } else {
              alert("no client was created");
          }
      }
  }
}
