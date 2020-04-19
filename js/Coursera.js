facultySelect = true;

$(document).ready(() => {
    $('select').on('contentChanged', function () {
        $(this).formSelect();
        $('.select-dropdown').addClass('white-text');
        $('.dropdown-content').css('background', 'rgba(25, 28, 29, 0.95)');
    });

    $("#faculty").on('change', () => {
        getSchools();
    })

    $.getJSON("js/faculties.json", data => {
        data.forEach(element => {
            $("#faculty").append(`<option value='${element}'>${element}</option>`);
        });
        $('#faculty').trigger('contentChanged');
    });

    $("#reg-form").on('submit', (e) => {
        validate();
    })

    $('select').formSelect();
    $('.select-dropdown').addClass('white-text');
    $('.dropdown-content').css('background', 'rgba(25, 28, 29, 0.95)');
});

function getSchools() {

    $.getJSON("js/schools.json", data => {
        let faculty = $("#faculty").val();
        $("#school").html("");
        data[faculty].forEach((element, index) => {
            $("#school").append(`<option value="${element[0]}"  >${element[1]}</option>`);
        });

        $('#school').trigger('contentChanged');
    });

    getPrograms();

    $('.field').css("display", "block");


}

function getPrograms() {
    $.getJSON("js/programs.json", data => {
        let school = $("#school").val();
        $("#program").html("");
        data[school].forEach(element => {
            $("#program").append(`<option value="${element[0]}" >${element[1]}</option>`);
        });

        $('#program').trigger('contentChanged');
    })
}

function validate(e) {
    console.log($("#school").val());
    if ($("#faculty").val() == "") {
        e.preventDefault();
        alert("Please select Faculty");
        return false;
    }
    return false;
}