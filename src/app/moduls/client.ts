export class Client{
  fname: string ;
  lname: string;
  email: string;
  phone: string;
  project: string;

  constructor(
    fname: string = "",
    lname: string = "",
    email: string = "",
    phone: string = "",
    project: string = ""
   ) {
      this.fname=fname!;
      this.lname=lname!;
      this.email=email!;
      this.phone=phone!;
      this.project=project!;
  }

  validateInput():boolean {
    if (this.fname != null && this.lname != null && this.email != null){
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

  checkEmail():boolean{
      let validRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.email.match(validRegEx) != null) {
          return true;
      } else{
          alert("email invalid");
          return false;
      }
  }

  emailExists():boolean{
        if ((window.localStorage.getItem(this.email)?true:false)){
            alert("Email: " + this.email + " exists");
            return true;
        } else{
          alert("email does not exist: " + this.email);
          return false;
        }
  }

  public static emailExists(email:string):boolean{
    if ((window.localStorage.getItem(email)?true:false)){
      alert("Email: " + email + " exists");
      return true;
  } else{
    alert("email does not exist: " + email);
    return false;
  }

  }

  validateClient(): boolean {
      if(this.validateInput()){ // checking if requierd inputs are not empty
          if(this.checkEmail() && this.checkNumbers(this.fname) && this.checkNumbers(this.lname)){
            alert("valid client")
            return true;
          }
      }
      alert("not valid client");
      return false;
  }
}
