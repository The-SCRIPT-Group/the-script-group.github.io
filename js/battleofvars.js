function validateInputs() {
    let flg = 1;
    let name = $("#name").val();
    let letters = /^[A-Za-z ]+$/;
    if(!(name.match(letters))) {
        flg = 0;
        $("#name").css("border", "4px solid red");
    }
    if(!flg) {
        alert("Incorrect name");
    }
}