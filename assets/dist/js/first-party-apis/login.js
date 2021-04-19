var AsanaLoginUtils = {
    loginButtons: {
        requestClassName: "-request",
        submitButtonClassName: ".loginForm-submit",
        request: function(e) {
            e.addClass(this.requestClassName)
        }
    },
    submitLoginForm: function(e, t) {
        t.preventDefault(), AsanaHelpers.requestRecaptchaScoreToken("login", (function(t) {
            var s = document.createElement("input");
            s.type = "hidden", s.name = "g-recaptcha-enterprise-response", s.value = t, e.appendChild(s), e.submit()
        }), e.submit)
    }
};