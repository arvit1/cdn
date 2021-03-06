var DIRECTION = {
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    },
    DropdownNavigation = function(t, e) {
        e || (e = {});
        var i = document.querySelector(t);
        i ? (this.isShort = i.classList.contains("-short"), this.header = i, this.navigationLinks = i.querySelectorAll(".navigation__link[data-nav-dropdown]"), this.navigationLinkWrapper = i.querySelector(".horizontalNavigation"), this.mobileNavToggle = i.querySelector("#mobileNavToggle"), this.dropdownWrapper = i.querySelector(".navigation__dropdown__wrapper"), this.featuredBackground = i.querySelector(".navigation__dropdown__featured-background"), this.indicator = i.querySelector(".navigation__link-indicator"), this.scrim = document.querySelector(".navigation__scrim"), this.footer = i.querySelector(".navigation__dropdown__footer"), this.topbar = document.querySelector(".topbar"), this.dropdowns = {}, this.activeDropdownId = null, this.previousActiveDropdownId = null, this.closeTimer = null, this.closeTimerDelay = e.closeTimerDelay || 100, this.drawerCloseTimer = null, this.drawerTimerDelay = e.drawerTimerDelay || 400, this.redrawDelay = 16, this.triggerMode = e.triggerMode || "click", this.mobileOpen = !1, this.isMobile = window.innerWidth < this.mobileThreshold, this.wasMobile = window.innerWidth < this.mobileThreshold, this.mobileThreshold = 1120, this.isScrolling = !1, this.isScrollLocked = !1, this.scrollDepth = 0, this.toggleDropdown = function(t, e) {
            var i;
            if ("string" == typeof t ? i = t : t instanceof Element ? i = t.id : t instanceof Event && (t.preventDefault(), i = t.target.dataset.navDropdown, e = 0 === t.detail), !this.dropdowns[i]) return Bugsnag.notifyException("DropdownNavigation.toggleDropdown() was called with " + i + ", which is not a valid dropdown id."), !1;
            this.wasMobile = this.isMobile, this.isMobile = window.innerWidth < this.mobileThreshold, this.activeDropdownId === i ? this.closeDropdown(!1) : this.openDropdown(i, e)
        }, this.toggleMobileMenu = function() {
            this.wasMobile = this.isMobile, this.isMobile = !0, this.mobileOpen ? (this.mobileOpen = !1, this.previousActiveDropdownId = this.activeDropdownId, this.activeDropdownId = null) : this.mobileOpen = !0, this.updateActiveClasses()
        }, this.openDropdown = function(t, e) {
            var i = this.dropdowns[t].dropdown;
            if (!i) return Bugsnag.notifyException("DropdownNavigation.openDropdown() was called with " + t + ", which is not a valid dropdown id."), !1;
            this.previousActiveDropdownId = this.activeDropdownId, this.activeDropdownId = t, this.updateActiveClasses(), e ? i.querySelector(".navigation__dropdown__item a").focus() : document.activeElement instanceof Element && document.activeElement.blur()
        }, this.closeDropdown = function(t) {
            this.previousActiveDropdownId = this.activeDropdownId, this.activeDropdownId = null, this.updateActiveClasses(), !this.previousActiveDropdownId && this.isMobile || (t ? this.dropdowns[this.previousActiveDropdownId].link.focus() : document.activeElement instanceof Element && document.activeElement.blur())
        }, this.updateActiveClasses = function() {
            var t = this.dropdowns[this.previousActiveDropdownId] || null,
                e = this.dropdowns[this.activeDropdownId] || null;
            t && (t.dropdown.setAttribute("aria-hidden", "true"), t.dropdown.classList.remove("-active"), t.link.setAttribute("aria-expanded", "false"), t.link.classList.remove("-active")), e && (e.dropdown.setAttribute("aria-hidden", "false"), e.dropdown.classList.add("-active"), e.link.setAttribute("aria-expanded", "true"), e.link.classList.add("-active"), this.activateSections(this.activeDropdownId, this.previousActiveDropdownId)), e && !this.isMobile && (this.openDrawer(), this.setFeaturedBackgroundPosition(this.activeDropdownId, this.previousActiveDropdownId)), !e && t && (this.footer.setAttribute("aria-hidden", "true"), this.scrim.classList.remove("-active"), this.deactivateSections(this.previousActiveDropdownId, DIRECTION.UP)), e || !t || this.isMobile || (this.closeDrawer(), this.drawerCloseTimer && clearTimeout(this.drawerCloseTimer), this.drawerCloseTimer = setTimeout(function() {
                this.header.classList.remove("-dropdown-active")
            }.bind(this), this.drawerTimerDelay)), e && !t && (this.header.classList.add("-dropdown-active"), this.footer.setAttribute("aria-hidden", "false")), !e || t || this.isMobile || this.scrim.classList.add("-active"), this.isMobile ? this.setFeaturedBackgroundPosition(null, null) : (this.moveLinkIndicator(this.activeDropdownId, this.previousActiveDropdownId), this.unlockScroll()), this.isMobile && !this.mobileOpen && this.navigationLinkWrapper && (this.navigationLinkWrapper.classList.remove("-active"), this.mobileNavToggle.classList.remove("-active"), this.unlockScroll(), this.drawerCloseTimer && clearTimeout(this.drawerCloseTimer), this.drawerCloseTimer = setTimeout(function() {
                this.header.classList.remove("-dropdown-active")
            }.bind(this), this.drawerTimerDelay), this.closeDrawer()), this.isMobile && this.mobileOpen && this.navigationLinkWrapper && (this.header.classList.add("-dropdown-active"), this.navigationLinkWrapper.classList.add("-active"), this.mobileNavToggle.classList.add("-active"), this.dropdownWrapper.classList.add("-active"), this.lockScroll(), this.setPrecedingLinkClass(), this.openDrawer())
        }, this.timeout, this.lockScroll = function() {
            this.isScrollLocked = !0, this.scrollDepth = window.pageYOffset, this.timeout = setTimeout((function() {
                document.getElementsByTagName("html")[0].classList.add("-no-scroll")
            }), 500)
        }, this.unlockScroll = function() {
            clearTimeout(this.timeout), this.isScrollLocked = !1, document.getElementsByTagName("html")[0].classList.remove("-no-scroll"), window.scrollTo(0, this.scrollDepth)
        }, this.toggleScrollLock = function() {
            this.isScrollLocked ? this.unlockScroll() : this.lockScroll()
        }, this.activateSections = function(t, e) {
            if (e !== t) {
                var i, o = this.dropdowns[t].sections,
                    s = this.calculateDirection(t, e);
                switch (e && this.deactivateSections(e, s), s) {
                    case DIRECTION.LEFT:
                        i = "translateX(-30px)";
                        break;
                    case DIRECTION.RIGHT:
                        i = "translateX(30px)";
                        break;
                    case DIRECTION.UP:
                        i = "translateY(30px)";
                        break;
                    case DIRECTION.DOWN:
                    default:
                        i = "translateY(-30px)"
                }
                o.forEach(function(t, e) {
                    t.style.transition = "none", t.style.transform = i, setTimeout((function() {
                        t.style.transition = "", t.style.transform = "", t.style.transitionDelay = 50 * e + (s === DIRECTION.DOWN ? 200 : 100) + "ms", t.classList.add("-active")
                    }), this.redrawDelay)
                }.bind(this))
            }
        }, this.calculateDirection = function(t, e) {
            return t && !e ? DIRECTION.DOWN : !t && e ? DIRECTION.UP : this.isMobile ? DIRECTION.DOWN : Object.keys(this.dropdowns).indexOf(t) > Object.keys(this.dropdowns).indexOf(e) ? DIRECTION.RIGHT : DIRECTION.LEFT
        }, this.deactivateSections = function(t, e) {
            this.dropdowns[t].sections.forEach((function(t) {
                if (t.classList.remove("-active"), e) switch (t.style.transition = "transform 120ms cubic-bezier(1, 0.01, 1, 0.99), opacity 120ms cubic-bezier(1, 0.01, 1, 0.99)", e) {
                    case DIRECTION.LEFT:
                        t.style.transform = "translateX(20px)";
                        break;
                    case DIRECTION.RIGHT:
                        t.style.transform = "translateX(-20px)";
                        break;
                    case DIRECTION.DOWN:
                        t.style.transform = "translateY(20px)";
                        break;
                    default:
                    case DIRECTION.UP:
                        t.style.transform = "translateY(-20px)"
                }
            }))
        }, this.setPrecedingLinkClass = function() {
            var t = this.header.querySelector(".-preceding");
            t && t.classList.remove("-preceding");
            var e = Object.keys(this.dropdowns),
                i = this.dropdowns[e[e.indexOf(this.activeDropdownId) - 1]];
            i && i.link.classList.add("-preceding")
        }, this.hoverSections = function(t) {
            this.dropdowns[t].sections.forEach((function(t) {
                t.classList.add("-hovered")
            }))
        }, this.unHoverSections = function(t) {
            this.dropdowns[t].sections.forEach((function(t) {
                t.classList.remove("-hovered")
            }))
        }, this.openDrawer = function() {
            var t;
            t = this.isMobile ? "100%" : this.calculateDrawerHeight(), this.dropdownWrapper.classList.add("-active"), this.setDrawerHeight(t)
        }, this.closeDrawer = function() {
            this.dropdownWrapper.classList.remove("-active"), this.setDrawerHeight(0)
        }, this.calculateDrawerHeight = function(t) {
            var e = t || this.activeDropdownId;
            if (!e || !this.dropdowns[e]) return 0;
            var i = this.footer.clientHeight,
                o = this.header.clientHeight,
                s = this.dropdowns[e].dropdown.clientHeight;
            return Math.min(s + i + o, window.innerHeight)
        }, this.resetDropdownMaxHeight = function() {
            var t = document.querySelectorAll(".siteHeader__wrapper .navigation__dropdown");
            t && t.forEach((function(t) {
                t.style.maxHeight = "calc(100vh - 101px)"
            }))
        }, this.setDrawerHeight = function(t) {
            this.dropdownWrapper && (this.dropdownWrapper.style.transition = "", "number" == typeof t && (t += "px"), requestAnimationFrame(function() {
                this.dropdownWrapper.style.transform = "translateY(" + t + ")"
            }.bind(this)))
        }, this.closeDrawer = function() {
            this.dropdownWrapper && (this.dropdownWrapper.style.transition = "transform 300ms cubic-bezier(1, 0.01, 1, 0.99), opacity 450ms cubic-bezier(1, 0.01, 1, 0.99)", this.dropdownWrapper.style.transform = "translateY(0)", this.dropdownWrapper.classList.remove("-active"))
        }, this.setFeaturedBackgroundPosition = function(t, e) {
            if (this.featuredBackground) {
                if (!t) return this.featuredBackground.style.transition = "none", void(this.featuredBackground.style.transform = "none");
                var i = this.dropdowns[t].featuredSectionList,
                    o = i ? window.innerWidth - i.getBoundingClientRect().left : 0;
                e || (this.featuredBackground.style.transition = "none", requestAnimationFrame(function() {
                    this.featuredBackground.style.transition = ""
                }.bind(this))), this.featuredBackground.style.transform = "translateX(" + -o + "px)"
            }
        }, this.moveLinkIndicator = function(t, e) {
            if (!t && !e) return this.indicator.style.transition = "none", void(this.indicator.style.transform = "translateX(0) scaleX(0)");
            var i = this.dropdowns[t || e].linkText.getBoundingClientRect(),
                o = i.left,
                s = t ? i.width / 100 : 0;
            e ? this.indicator.style.transform = "translateX(" + o + "px) scaleX( " + s + ")" : (this.indicator.style.transition = "none", this.indicator.style.transform = "translateX(" + o + "px) scaleX(0)", setTimeout(function() {
                this.indicator.style.transition = "", this.indicator.style.transform = "translateX(" + o + "px) scaleX( " + s + ")"
            }.bind(this), this.redrawDelay))
        }, this.recalculateLayout = function() {
            if (this.wasMobile = this.isMobile, this.isMobile = window.innerWidth < this.mobileThreshold, this.isMobile !== this.wasMobile) return this.mobileOpen = !1, this.closeDropdown(), void this.closeDrawer();
            !this.isMobile && this.activeDropdownId && (this.setDrawerHeight(this.calculateDrawerHeight()), this.setFeaturedBackgroundPosition(this.activeDropdownId), this.moveLinkIndicator(this.activeDropdownId))
        }, this.focusColumn = function(t) {
            var e = document.activeElement.parentElement.parentElement.parentElement;
            if (e.classList.contains("navigation__dropdown__item")) {
                var i = e.parentElement,
                    o = this.dropdowns[this.activeDropdownId].columns,
                    s = 0;
                Array.prototype.forEach.call(o, (function(e, n) {
                    i === e && (t === DIRECTION.RIGHT && (s = n === o.length - 1 ? 0 : n + 1), t === DIRECTION.LEFT && (s = 0 === n ? s = o.length - 1 : n - 1))
                })), o[s].querySelector("a").focus()
            }
        }, this.focusItem = function(t) {
            var e = document.activeElement.parentElement.parentElement.parentElement;
            if (e.classList.contains("navigation__dropdown__item")) {
                var i = e.parentElement.parentElement.querySelectorAll(".navigation__dropdown__item"),
                    o = 0;
                Array.prototype.forEach.call(i, (function(s, n) {
                    e === s && (t === DIRECTION.DOWN && (o = n === i.length - 1 ? 0 : n + 1), t === DIRECTION.UP && (o = 0 === n ? o = i.length - 1 : n - 1))
                })), i[o].querySelector("a").focus()
            }
        }, this.queueDropdownClose = function() {
            this.closeTimer = setTimeout(this.closeDropdown.bind(this), this.closeTimerDelay)
        }, this.cancelDropdownClose = function() {
            this.closeTimer && clearTimeout(this.closeTimer)
        }, this.calculateScrollClasses = function() {
            var t = window.pageYOffset || document.documentElement.scrollTop,
                e = 0;
            if (this.topbar && this.topbar.classList.contains("-is-active") && (e = this.topbar.clientHeight), t > e) {
                if (this.isScrolling) return;
                this.isScrolling = !0, this.header.classList.add("-is-scrolling")
            } else this.isScrolling = !1, this.header.classList.remove("-is-scrolling")
        }, this.initResourceClasses = function() {
            var t = this.header.querySelector(".navigation__dropdown__resource-card");
            if (t) {
                var e = t.closest(".navigation__dropdown__column");
                e && e.classList.add("-resource-card-column")
            }
        }, this.bindDropdownListeners = function() {
            var t, e;
            for (t = 0; t < this.navigationLinks.length; t++) {
                var i = (e = this.navigationLinks[t]).dataset.navDropdown,
                    o = document.querySelector("#" + i),
                    s = o.querySelectorAll(".navigation__dropdown__section"),
                    n = o.querySelectorAll(".navigation__dropdown__column"),
                    r = o.querySelector(".navigation__dropdown__featured-section-list"),
                    a = e.querySelector(".navigation__link-text"),
                    d = this;
                "hover" === this.triggerMode && (o.addEventListener("mouseenter", this.cancelDropdownClose.bind(this)), o.addEventListener("mouseleave", this.queueDropdownClose.bind(this)), this.dropdownWrapper.addEventListener("mouseenter", this.cancelDropdownClose.bind(this)), this.dropdownWrapper.addEventListener("mouseleave", this.queueDropdownClose.bind(this)));
                for (var c = [], l = 0; l < s.length; l++) c.push(s[l]);
                Array.prototype.forEach.call(s, function(t) {
                    var e = {
                        dropdownId: i
                    };
                    t.addEventListener("mouseenter", function() {
                        d.hoverSections(this.dropdownId)
                    }.bind(e)), t.addEventListener("mouseleave", function() {
                        d.unHoverSections(this.dropdownId)
                    }.bind(e))
                }.bind(this)), this.dropdowns[i] = {
                    dropdown: o,
                    sections: c,
                    columns: n,
                    featuredSectionList: r,
                    link: e,
                    linkText: a
                }, e.addEventListener("mousedown", (function(t) {
                    t.preventDefault()
                })), "hover" === this.triggerMode ? (e.addEventListener("mouseleave", this.queueDropdownClose.bind(this)), e.addEventListener("blur", this.queueDropdownClose.bind(this)), e.addEventListener("mouseenter", function(t) {
                    var e = t.target.dataset.navDropdown;
                    this.openDropdown(e), this.cancelDropdownClose()
                }.bind(this)), e.addEventListener("focus", function(t) {
                    var e = t.target.dataset.navDropdown;
                    this.openDropdown(e, !0), this.cancelDropdownClose()
                }.bind(this))) : e.addEventListener("click", this.toggleDropdown.bind(this))
            }
            "click" === this.triggerMode && this.scrim && this.scrim.addEventListener("click", function() {
                this.closeDropdown(!1)
            }.bind(this)), this.mobileNavToggle && this.mobileNavToggle.addEventListener("click", this.toggleMobileMenu.bind(this)), window.addEventListener("resize", this.recalculateLayout.bind(this)), document.addEventListener("keydown", function(t) {
                if (this.activeDropdownId) switch (t.key) {
                    case "ArrowRight":
                        t.preventDefault(), this.focusColumn(DIRECTION.RIGHT);
                        break;
                    case "ArrowLeft":
                        t.preventDefault(), this.focusColumn(DIRECTION.LEFT);
                        break;
                    case "ArrowDown":
                        t.preventDefault(), this.focusItem(DIRECTION.DOWN);
                        break;
                    case "ArrowUp":
                        t.preventDefault(), this.focusItem(DIRECTION.UP);
                        break;
                    case "Escape":
                        this.closeDropdown(!0)
                }
            }.bind(this));
            [".navigation__dropdown__card", ".navigation__dropdown__resource-card"].forEach((function(t) {
                document.querySelectorAll(t).forEach((function(t) {
                    t.addEventListener("click", (function(t) {
                        t.stopPropagation(), t.currentTarget.querySelector("a").click()
                    }))
                }))
            }))
        }, this.init = function() {
            this.calculateScrollClasses(), this.isShort || (this.initResourceClasses(), this.bindDropdownListeners())
        }) : Bugsnag.notifyException('DropdownNavigation was initialized with the selector "' + t + '", which did not exist in the DOM at the time of initialization')
    };
window.addEventListener("load", (function() {
    var t = new DropdownNavigation(".siteHeader");
    try {
        t.init(), window.nav = t, window.addEventListener("scroll", (function() {
            t.calculateScrollClasses()
        }))
    } catch (t) {
        Bugsnag.notifyException("DropdownNavigation error: " + t)
    }
}));