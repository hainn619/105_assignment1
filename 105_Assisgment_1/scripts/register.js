class User {
    constructor(fname, lname,gender,address, email,phone, pw, payment) {
        this.fistname = fname;
        this.lastname = lname;
        this.gender=gender;
        this.address= address;
        this.email = email;
        this.phone = phone;
        this.password = pw;
        this.payment = payment;
    }
}
function isValid(user) {
    let valid = true;
    if (user.email.length == 0) {
        valid = false;
        console.log("add an email");
        $("#txtEmail").addClass("input-error");
    }
    if (user.password.length == 0) {
        valid = false;
        console.log("add an password");
    }
    if (user.fistname.length == 0) {
        valid = false;
        console.log("add an First Name");
    }
    return valid;
}
function register() {
    let inputFname = $("#txtFName").val();
    let inputLnam = $("#txtLName").val();
    let inputGender=$("#sGender").val();
    let inputAddress=$("#txtAddress").val();
    let inputEmail = $("#txtEmail").val();
    let inputPhone = $("#txtPhone").val();
    let inputPw = $("#txtPW").val();
    let payment = $("#sPayment").val();

    // console.log(inputFname, inputLnam, inputEmail, inputPw);
    let newUser = new User(inputFname, inputLnam,inputGender,inputAddress, inputEmail,inputPhone, inputPw,payment);
    console.log(newUser);

    // if (isValid(newUser)) {
    //     saveUser(newUser);
    // }
}
function init(){
    console.log("init function");
    let user1= new User("Ben","Nguyen","male","ben@gmail.com","123abc");
    let user2= new User("Ben","Nguyen","female","ben@gmail.com","123abc");
    console.log(user1, user2);
}