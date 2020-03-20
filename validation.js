function check(){
    var firstname = document.getElementById ("firstname").value;
    var lastname = document.getElementById ("lastname").value;
    var address = document.getElementById ("address").value;
    var phone = document.getElementById ("phone").value;
    var email = document.getElementById ("email").value;
    
    if(firstname.trim() == "" || lastname.trim() == "" || address.trim() == "" || phone.trim() == "" || email.trim() == ""){
        alert("Molimo Vas da popunite sva polja");
        return false;
    } else{
        alert("Narudžba poslana");
        return true;
    }
}
