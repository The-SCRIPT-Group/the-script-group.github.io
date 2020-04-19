function getSchools() {
    
    $.getJSON("js/schools.json",data=> {
        
        
        let faculty=$("#faculty").val();
        console.log(data[faculty])
        $("#school").html("");
        data[faculty].forEach((element,index) => {
            $("#school").append(`<option value="${element[0]}"  >${element[1]}</option>`);
        });
    });
    getPrograms();

    $('.field').removeClass("d-none");
    
   
}

function getPrograms(){
    $.getJSON("js/programs.json", data => {
        console.log(data)
        let school= $("#school").val();
        $("#program").html("");
        data[school].forEach(element => {
            $("#program").append(`<option value="${element[0]}" >${element[1]}</option>`);
        });
    })
}