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
    if (phone.length == 0) { return true; }
    let country = $("#country").val()
    let phoneNum = phone.replace('+' + country, '');
    if (phoneNum.length == 10 || phoneNum.length == 0) { return true; }
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
    let email_content = `Dear {name},
    <br>Thank you for registering to participate in Battle of Vars hosted by The S.C.R.I.P.T. Group.
    <br>The event will begin at 09:30 AM IST / 04:00 AM GMT on April 12th 2020.
    <br>Be sure to prepare for the competition and review the event information <a href=https://thescriptgroup.in/battleofvars>here</a>.
    <br>Rules of the competition are as follows:
    <br>
    <ul>
        <li>Challenges are not necessarily straightforward. For eg: they might be stated as a story or a real-life situation.</li>
        <li>Each challenge has a pre-determined score.</li>
        <li>A participant’s score depends on the number of test cases a participant’s code submission successfully passes.</li>
        <li>Each challenge will have some sample test cases that you can check your code for before you submit. HackerRank also has a system to test your program against custom inputs directly on their platform. You can test locally as well, but final code submission to be done on HackeRank</li>
        <li>If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved.</li>
        <li>Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score</li>
        <li><b>Unrestricted Internet access allowed</b>. Yup, that's right! You can technically copy code from sites, but you won't learn anything.</li>
        <li>Top 2 scorers (final decision as per HackerRank leaderboard) after the allotted time will be declared winners (1st and 2nd).</li>
    </ul> 
    <img src="https://thescriptgroup.in/images/LogoB-Trans.png" class="script-logo  mx-auto">`

    let phone = $("#phoneNum").val()
    if (flg) {
        data = {
            'name': $("#name").val(),
            'email': $("#email").val(),
            'phone': phone.length > 5 ? phone : "",
            'hackerrank_username': $("#hacker_id").val(),
            'country': $("#country option:selected").html().replace(/ \(\+?\d+\)/, ''),
            'email_content': email_content,
            'email_content_fields': 'name',
            'event': 'Battle of Vars, 2020',
            'db': 'bov_2020',
            'date': '12th April, 2020',
            'no_qr': '',
        }

        $.post(
            "https://hades.thescriptgroup.in/submit",
            data,
            function (data, status) {
                alert(data);
                $("#name").val("");
                $("#email").val("");
                $("#hacker_id").val("");
                $("#phoneNum").val("+" + $("#country").val());
            }
        );
    } else {
        alert("Please check the highlighted inputs")
        return false;
    }
});
