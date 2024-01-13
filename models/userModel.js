var Employee = {
    constructor (firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }, 
     add ({newfirstName, newlastName, newemail}){
        this.firstName = newfirstName,
        this.lastName = newlastName,
        this.email = newemail;

        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        }
     },
};
const employee1 = new Employee('fsssdsd', 'fss', 'emngg')