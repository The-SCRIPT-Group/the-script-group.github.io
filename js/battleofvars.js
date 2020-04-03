function validateInput() {
    let name = $("#name").val();
    let letters = /^[A-Za-z ]+$/;
    if (!(name.match(letters))) {
        $("#name").css("border", "4px solid red");
        return false;
    }
    return true;
}
$("form").submit(function (event) {
    if (validateInput()) {
        alert("TRUE")
        return;
    }
    alert("false")
    $("#name").css("border", "4px solid red");
    event.preventDefault();
});