$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$('#phoneCode').inputAutogrow()
$('#phoneCode').trigger('change');

function validateName() {
  let name = $("#name").val();
  let letters = /^[A-Za-z\u0080-\uFFFF ]+$/;
  if (!(name.match(letters))) {
    $("#name").css("border", "4px solid red");
    return false;
  }
  return true;
}

function validatePhone() {
  let phone = $("#phoneNum").val();
  if (phone.length == 0) {
    $("#phoneCode").val("")
    return true;
  } else if (!isNaN(phone) && phone.length <= 12) {
    return true;
  }
  $("#phoneNum").css("border", "4px solid red");
  return false;
}

function validateEmail() {
  let mail = $("#email").val();
  if (/^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  $("#email").css("border", "4px solid red");
  return false;
}

function alertModal(message) {
    $("#modalContent").html(message);
    $('#SubmitModal').modal()
}

$("#form-new").submit(function (e) {
  e.preventDefault();
  let flg = 1;
  if (!validateName()) { flg = 0; }
  if (!validatePhone()) { flg = 0; }
  if (!validateEmail()) { flg = 0; }
  let email_content = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Simple Transactional Email</title>
    <style>
    /* -------------------------------------
        INLINED WITH htmlemail.io/inline
    ------------------------------------- */
    /* -------------------------------------
        RESPONSIVE AND MOBILE FRIENDLY STYLES
    ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }
      table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
        font-size: 16px !important;
      }
      table[class=body] .wrapper,
            table[class=body] .article {
        padding: 10px !important;
      }
      table[class=body] .content {
        padding: 0 !important;
      }
      table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
      }
      table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      table[class=body] .btn table {
        width: 100% !important;
      }
      table[class=body] .btn a {
        width: 100% !important;
      }
      table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }

    /* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      .btn-primary table td:hover {
        background-color: #34495e !important;
      }
      .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
      }
    }
    </style>
    </head>
    `
  let email_formattable_content = `
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Battle of Vars : Fight from 127.0.0.1</span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;" align="center"><img src="https://raw.githubusercontent.com/The-SCRIPT-Group/Website/master/images/bovposter.png" height="400">
                        </p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there, {name}</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Thank you for registering to participate in Battle of Vars hosted by The S.C.R.I.P.T. Group.</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">The event will begin at 09:30 AM IST / 04:00 AM GMT on April 12th 2020. Be sure to prepare for the competition and review the event information below.</p>
                        <br/>
                        <p style="font-family: sans-serif; font-size: 16px; font-weight: bold; margin: 0; Margin-bottom: 15px;">RULES:</p>
                        
                        <ul>
                            <li>Challenges are not necessarily straightforward. For eg: they might be stated as a story or a real-life situation.</li>
        <li>Each challenge has a pre-determined score.</li>
        <li>Your score depends on the number of test cases your submission will successfully pass.</li>
        <li>Each challenge will have some sample test cases that you can check your code for before you submit. HackerRank also has a system to test your program against custom inputs directly on their platform. You can test locally as well, but final code submission is to be done on HackerRank.</li>
        <li>If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved.</li>
        <li>Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.</li>
        <li>Top 3 scorers (final decision as per HackerRank leaderboard) after the allotted time will be declared winners (1st, 2nd and 3rd).</li>
                        </ul>
                        <br/>                        
                        
                        
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;"> <a href="https://instagram.com/script.ig" target="_blank" style="display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;">Follow Us</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                       
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;" align="center"><img src="https://thescriptgroup.in/images/LogoB-trans.png" height="82">
                        </p>
                        
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">The S.C.R.I.P.T Group</span>
                    <br>Sent by a mailing service on behalf of The S.C.R.I.P.T Group.
                  </td>
                </tr>
                
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`
  let phoneCode = $("#phoneCode").val()
  let phone = $("#phoneNum").val()
  if (flg) {
    data = {
      'name': $("#name").val(),
      'email': $("#email").val(),
      'phone': phoneCode + phone,
      'hackerrank_username': $("#hacker_id").val(),
      'country': $("#country option:selected").html().replace(/ \(\+?\d+\)/, ''),
      'email_content': email_content,
      'email_content_fields': 'name',
      'email_formattable_content': email_formattable_content,
      'event': 'Battle of Vars, 2020',
      'db': 'bov_2020',
      'date': '12th April, 2020',
      'no_qr': '',
    }

    document.getElementById("loader").style.display = "block";

    $('#phoneCode').val('+' + $("#country").val())

    $.post(
      "https://hades.thescriptgroup.in/submit",
      data,
      function (data, status) {
        alertModal(data);
        document.getElementById("loader").style.display = "none";
        if (data.includes("hackerrank")) {
          $("#hacker_id").val("");
        }
        else if (data.includes("Email")) {
          $("#email").val("");
        }
        else if (data.includes("Phone")) {
          $("#phoneNum").val("");
        }
        else {
          $("#name").val("");
          $("#email").val("");
          $("#hacker_id").val("");
          $("#phoneNum").val("");
        }
      }
    );
  } else {
    alertModal("Please check the highlighted inputs")
    return false;
  }
});
