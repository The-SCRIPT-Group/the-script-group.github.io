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
    console.log(phoneNum);
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
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAALQCAMAAAD4oy1kAAAAxlBMVEUAAABAAAAwAAAYAACXAADnAAD/AACPAABIAADvAACvAABgAAAQAADXAADPAAD3AAB4AABwAAAIAAC3AABYAACAAAAgAAC/AACfAACnAADHAADfAABAQEBYWFiAgIA4ODgQEBBwcHBgYGC/v7/X19f///+Xl5evr6/Hx8efn58wMDB4eHhQUFAICAjf39+Pj48gICAYGBiHh4fv7+9oaGjPz8+np6f39/e3t7fn5+dISEhoAAA4AAAoKCgoAABQAACHAAAAAADGO/GWAAAAQnRSTlP//////////////////////////////////////////////////////////////////////////////////////wBEFhAAAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGoWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTMwVDE5OjM2OjEzKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0wMlQwMDowMDozNyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0wMlQwMDowMDozNyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQyNDc4MjEtODM0MS0yNjQyLWEwZDUtOGI1MDVhZWU4NDdiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmU2ODUwZjctYzk1Yi03NzQ0LTlkMWEtNmFkYWVkZTAyMWZjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2Y5MjIzNTgtNzQ2OS03NDRmLTgwODctY2NiYTNkZDZkOTRlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjkyMjM1OC03NDY5LTc0NGYtODA4Ny1jY2JhM2RkNmQ5NGUiIHN0RXZ0OndoZW49IjIwMjAtMDMtMzBUMTk6MzY6MTMrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Y2UzOTAxNDQtZDMyZS0zMzQ1LWEwZTEtN2JmZGI2NjRkZDU1IiBzdEV2dDp3aGVuPSIyMDIwLTA0LTAyVDAwOjAwOjM3KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAu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YgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVgCCMQSQCCWAAKxBBCIJYBALAEEYgkgEEsAgVj/AaQCHhO+m55KAAAAAElFTkSuQmCC' style="margin-right: auto; margin-left: auto;">`
    if (flg) {
        data = {
            'name': $("#name").val(),
            'email': $("#email").val(),
            'phone': $("#phoneNum").val(),
            'hackerrank_username': $("#hacker_id").val(),
            'country': $("#country").val(),
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