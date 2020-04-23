$(document).ready(() => {
  $('select').on('contentChanged', function () {
    $(this).formSelect();
    $('.select-dropdown').addClass('white-text');
    $('.dropdown-content').css('background', 'rgba(25, 28, 29, 0.95)');
  });
  $('#modal').modal();

  $("#reg-form").on("reset", () => {
    $(".clogo").slideDown();
    $(".field").slideUp();
    $(".f2").slideUp();
  })

  $("#faculty").on('change', () => {
    if ($("#faculty").val() !== "")
      getSchools();
  })

  $("#school").on('change', () => {
    getPrograms();
  })

  $("#name,#prn").on('focus', () => {
    $(".clogo").slideUp();
    $(".f2").slideDown();

  });

  $.getJSON("js/faculties.json", data => {
    data.forEach(element => {
      $("#faculty").append(`<option value='${element}'>${element}</option>`);
    });

    $('#faculty').trigger('contentChanged');
  });

  $('select').formSelect();
  $('.select-dropdown').addClass('white-text');
  $('.dropdown-content').css('background', 'rgba(25, 28, 29, 0.95)');

  $("#reg-form").on('submit', e => {
    e.preventDefault();
    let validflag = true;
    validflag = validate();
    if (validflag) {
      let email_content = `
        <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Coursera Email</title>
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
  </head>`
      let email_formattable_content = `
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
          <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"></span>
            <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                  <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;" align="center"><img src="https://raw.githubusercontent.com/The-SCRIPT-Group/Media-Kit/master/CourseraProgram/courser.png" height=60>
                        </p>
                        <br/><br/>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hi there, {name}</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Thank you for registering for the Coursera courses sponsored by MIT-WPU, powered by The S.C.R.I.P.T. Group.</p>
                        <br/>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Your subscription will be enabled for<b> {email}</b>. You will receive an email regarding this soon.</p>
                        <p style="font-family: sans-serif; font-size: 16px; font-weight: bold; margin: 0; Margin-bottom: 15px;">DETAILS:</p>
                        
                        <ul>
                            <li><b>Number of courses offered:</b> 1200</li><br/>
                            <li><b>Price of courses/certificates:</b> NIL</li><br/>
                            <li><b>Certificates offered by:</b> Coursera and/or respective university/organization</li><br/>
                            <li><b>Validity of license:</b> expires June 30, courses can be completed by September 30 after enrollment.</li><br/>
                            <li><b>Applicable for MOOC credits?</b> Only if course duration more than 8 weeks or is a Coursera specialization. Get in touch with us on <a href="mailto:support@thescriptgroup.in">support@thescriptgroup.in</a> for clarification/doubts regarding this.</li>
                        </ul>
                        <br/>                        
                        
                        
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      
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
                    <br>Leading tech-driven club of MIT-WPU.
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
      data = {
        'name': $("#name").val(),
        'email': $("#email").val(),
        'phone': $("#phno").val(),
        'prn': $("#prn").val(),
        'faculty': $("#faculty").val(),
        'school': $("#school").val(),
        'program': $("#program").val(),
        'year': $("#year").val(),
        'email_content': email_content,
        'email_formattable_content': email_formattable_content,
        'email_content_fields': 'name,email',
        'no_qr': '',
      }

      $(".main-loader").css("display", "flex")
      $.post("https://hades.thescriptgroup.in/submit",
        data,
        (data, status) => {
          $(".main-loader").css("display", "none")
          var instance = M.Modal.getInstance($("#modal"));
          $(".modal-content").html(data);

          instance.open();
          $("#reg-form").trigger("reset");
        }
      )
    }
  })
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

  $('.field').slideDown();

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

function validate() {
  var res = true;

  if ($("#name").val().split(" ").length <= 1) {
    M.toast({ html: "Please enter full name" });
    res = false;
  }

  if ($("#faculty").val() == "") {
    M.toast({ html: "Please select Faculty" });
    res = false;
  }

  let phone = $("#phno").val();
  if (phone.length != 10 || phone.match(/^\d+$/) == null) {
    M.toast({ html: "Please enter the correct phone number" });
    res = false;
  }

  let prn = $("#prn").val()
  if (prn.length != 10 || prn.match(/^\d{10}$/) == null) {
    M.toast({ html: "Please enter the correct PRN! Remember, your PRN consists only of numbers." });
    res = false;
  }

  return res;
}
