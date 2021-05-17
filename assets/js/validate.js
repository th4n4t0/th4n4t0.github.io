$(document).ready(
  (onsubmit = () => {
    $("#submit-form").validate({
      rules: {
        name: {
          required: true,
          minlength: 5,
        },

        email: {
          required: true,
          email: true,
        },
        option: {
          required: true,
        },
        subject: {
          required: true,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
        },
      },

      messages: {
        name: {
          required: "enter your name",
        },
      },

      submitHandler: function (form) {
        $.ajax({
          url: "",
          data: $("#submit-form").serialize(),
          method: "POST",
          dataType: "jsonp", //you may use jsonp for cross origin request
          crossDomain: true,
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            window.location.href = "index.html";
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      },
    });
  })
);
