self.__BUILD_MANIFEST = {
    __rewrites: {
        beforeFiles: [],
        afterFiles: [{
            source: "\u002F:lang(de|fr|es|pt|ja|zh-tw|pl|nl|ru)?\u002Fjobs\u002Fapply\u002F:id(\\d*)\u002F:position([A-Za-z-]*)",
            destination: "\u002Fjobs\u002Fapply"
        }, {
            source: "\u002F:language(de|fr|es|pt|ja|zh-tw|pl|nl|ru)?\u002Fpress\u002Freleases\u002Fpr\u002F:id\u002F:title",
            destination: "\u002Fpress\u002Freleases\u002Fpr"
        }],
        fallback: []
    },
    "/404": ["static\u002Fchunks\u002Fpages\u002F404-4521bd6fe51f1f738eb4.js"],
    "/_error": ["static\u002Fchunks\u002Fpages\u002F_error-e6d1d8c029822b263d29.js"],
    "/[[...slug]]": ["static\u002Fchunks\u002Fpages\u002F[[...slug]]-d01036969f953589ad74.js"],
    sortedPages: ["\u002F404", "\u002F_app", "\u002F_error", "\u002F[[...slug]]"]
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()