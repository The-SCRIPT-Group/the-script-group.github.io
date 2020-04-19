function setPrograms() {
    $.getJSON("js/programs.json", data => {
        let school= $("#school").val();
        $("#program").html("");
        data[school].forEach(element => {
            $("#program").append(`<option value="${element[0]}">${element[1]}</option>`);
        });
    })
}