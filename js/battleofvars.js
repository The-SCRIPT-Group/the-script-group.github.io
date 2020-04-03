function validateName() {
    let name = $("#name").val();
    let letters = /^[A-Za-z ]+$/;
    if (!(name.match(letters))) {
        $("#name").css("border", "4px solid red");
        return false;
    }
    return true;
}

function validatePhone() {
    let phone = $("#phoneNum").val();
    let country = $("#country").val()
    let phoneNum = phone.replace('+' + country, '');
    console.log(phoneNum);
    if (phoneNum.length == 10) { return true; }
    $("#phoneNum").css("border", "4px solid red");
    return false;
}

function validateEmail() {
    let mail = $("#email").val();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    $("#email").css("border", "4px solid red");
    return false;
}

$("#form-new").submit(function (e) {
    e.preventDefault();
    let flg = 1;
    if (!validateName()) { flg = 0; }
    if (!validatePhone()) { flg = 0; }
    if (!validateEmail()) { flg = 0; }
    if (flg) {
        data = {
            'name': $("#name").val(),
            'email': $("#email").val(),
            'phone': $("#phoneNum").val(),
            'hackerrank_username': $("#hacker_id").val(),
            'country': $("#country").val(),
            'email_content': $("#email_content").val(),
            'event': $("#event").val(),
            'db': $("#db").val(),
            'date': $("#date").val(),
            'no_qr': $("#no_qr").val(),
        }
        console.log(data)

        $.post(
            "https://hades.thescriptgroup.in/submit",
            data,
            function(data, status){
                alert(data);
            }
        );
    } else {
        alert("Please check the highlighted inputs")
        return false;
    }
 }); 


