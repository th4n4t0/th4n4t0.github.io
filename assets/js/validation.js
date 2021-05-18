$(document).ready(
  (onsubmit = () => {
    $("#submit-form").validate({
      rules: {
        firstname: {
          required: true,
          minlength: 5,
        },

        email: {
          required: true,
          email: true,
        },
        lastname: {
          required: true,
        },
        subject: {
          required: true,
        },
      },

      messages: {
        firstname: {
          required: "enter your name",
        },
      },

      submitHandler: function (form) {
        $.ajax({
          url: "https://script.google.com/macros/s/AKfycbxAO4YIK_Dj8C6SukO133S4fRlhcnbVujclaoiBe65tuBoCheHHondizzB1sJ7aZ_bf/exec",
          data: $("#submit-form").serialize(),
          method: "POST",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            window.location.href = "/index.html";
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      },
    });
  })
);
