var AsanaSignupUtils = {
    signupButtons: {
        requestClassName: "-request",
        submitButtonClassName: ".signupForm-submit",
        request: function(i) {
            i.addClass(this.requestClassName)
        },
        reset: function(i) {
            $(this.submitButtonClassName).removeClass(this.requestClassName)
        }
    },
    validateDomain: {
        failedEnrollment: !1,
        levenshteinThreshold: 1,
        hasTriedInvalidDomain: !1,
        signupForm: null,
        emailInput: null,
        invalidDomainError: null,
        closeDomainError: null,
        badFormatError: null,
        activeErrorClass: "-active",
        invalidInputClass: "-invalid",
        setFormElements: function(i) {
            this.signupForm = i, this.emailInput = this.signupForm.querySelector("input.signup-email"), this.invalidDomainError = this.signupForm.querySelector("#signup-email__invalid-domain"), this.closeDomainError = this.signupForm.querySelector("#signup-email__close-domain"), this.badFormatError = this.signupForm.querySelector("#signup-email__bad_format"), this.submitButton = this.signupForm.querySelector(".signupForm-submit"), this.emailInput.addEventListener("input", this.clearErrors.bind(this))
        },
        invalidateSignupForm: function(i) {
            this.setFormElements(i), this.hasTriedInvalidDomain = !0, this.showError(this.emailInput, this.invalidDomainError), AsanaSignupUtils.signupButtons.reset($(this.submitButton))
        },
        showEmailFormatValidationError: function(i) {
            this.setFormElements(i), this.showError(this.emailInput, this.badFormatError)
        },
        validateEmailSuggestion: function(i) {
            if (this.hasTriedInvalidDomain) return !0;
            this.setFormElements(i);
            var s = this.findClosestDomain(this.emailInput.value, this.levenshteinThreshold);
            return !s || 0 === s.distance || (this.hasTriedInvalidDomain = !0, AsanaAnalytics.trackSignupEventsInGtm.init("SignupError", "Error Invalid Email Domain", "Includes Suggestion"), this.showSuggestionError(this.emailInput, this.closeDomainError, s), !1)
        },
        showSuggestionError: function(i, s, e) {
            try {
                s.querySelector(".suggested-email").innerText = e.account + "@" + e.domain
            } catch (i) {
                Bugsnag.notify("Email Suggestion failed - could not find .suggested-email selector in error message")
            }
            this.showError(i, s)
        },
        showError: function(i, s) {
            this.clearErrors(), i.classList.add(this.invalidInputClass), s.classList.add(this.activeErrorClass)
        },
        hideError: function(i, s) {
            i.classList.remove(this.invalidInputClass), s.classList.remove(this.activeErrorClass)
        },
        clearErrors: function() {
            this.hideError(this.emailInput, this.invalidDomainError), this.hideError(this.emailInput, this.closeDomainError), this.hideError(this.emailInput, this.badFormatError)
        },
        findClosestDomain: function(i, s) {
            var e = i.split("@")[1],
                t = i.split("@")[0];
            return !!e && AsanaEmail.personalDomains.reduce((function(i, n) {
                var r = window.Levenshtein.get(n, e);
                return r > s ? i : !i || r < i.distance ? {
                    domain: n,
                    distance: r,
                    account: t
                } : i
            }), !1)
        }
    },
    setLoginWithSSOSAMLCookie: function(i, s, e, t) {
        i && AsanaStorage.setCookie("email_domain_provider", i, AsanaStorage.CATEGORY.NECESSARY), !0 === s ? AsanaStorage.setCookie("sso_status", "gsuite_required", AsanaStorage.CATEGORY.NECESSARY) : "enabled" === e ? (AsanaStorage.setCookie("sso_status", "saml_optional", AsanaStorage.CATEGORY.NECESSARY), AsanaStorage.setCookie("sso_redirect", t, AsanaStorage.CATEGORY.NECESSARY)) : "required" === e ? (AsanaStorage.setCookie("sso_status", "saml_required", AsanaStorage.CATEGORY.NECESSARY), AsanaStorage.setCookie("sso_redirect", t, AsanaStorage.CATEGORY.NECESSARY)) : "off" === e && i && "gsuite" === i && AsanaStorage.setCookie("sso_status", "gsuite_optional", AsanaStorage.CATEGORY.NECESSARY)
    },
    getConfirmationPageRedirect: function() {
        var i = AsanaHelpers.signupEmailType.isSignupEmailTypePersonal(),
            s = AsanaHelpers.signupEmailType.isSignupEmailTypeWork();
        return AsanaHelpers.tier.isTierFree() && s ? "/thanks" : AsanaHelpers.tier.isTierFree() && i ? "/thank" : AsanaHelpers.tier.isTierPremium() && s ? "/thank-you" : AsanaHelpers.tier.isTierPremium() && i ? "/thankyou" : AsanaHelpers.tier.isTierBusiness() && s ? "/confirm" : AsanaHelpers.tier.isTierBusiness() && i ? "/confirmation" : "/thank"
    },
    shouldGoToConfirmationPage: function() {
        return AsanaHelpers.billableGroupType.isFullyPaid()
    },
    getPreviousScreen: function() {
        return AsanaStorage.getEcommerceConfig().previous_screen
    },
    setPreviousScreen: function(i) {
        AsanaStorage.updateEcommerceConfig((function(s) {
            return s.previous_screen = i, s
        }))
    },
    getPathPriorToSignup: function() {
        return AsanaStorage.getEcommerceConfig().path_prior_to_signup
    },
    setPathPriorToSignup: function(i) {
        AsanaStorage.updateEcommerceConfig((function(s) {
            return s.path_prior_to_signup = i, s
        }))
    },
    signupResponseData: null,
    setSignupResponseData: function(i) {
        this.signupResponseData = i
    },
    getSignupResponseData: function() {
        return this.signupResponseData
    },
    clearSignupResponseData: function() {
        this.setSignupResponseData(null)
    },
    isFromPricingPage: function() {
        var i = this.getPathPriorToSignup();
        return !!i && /pricing/g.test(i)
    },
    isFromBuyPage: function() {
        var i = this.getPathPriorToSignup();
        return !!i && /(buy-)(premium|business)/g.test(i)
    },
    isOnPricingPage: function() {
        return /pricing/g.test(window.location.pathname)
    }
};