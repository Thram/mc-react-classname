Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

(function (HTMLTags) {
    HTMLTags["a"] = "a";
    HTMLTags["abbr"] = "abbr";
    HTMLTags["address"] = "address";
    HTMLTags["area"] = "area";
    HTMLTags["article"] = "article";
    HTMLTags["aside"] = "aside";
    HTMLTags["audio"] = "audio";
    HTMLTags["b"] = "b";
    HTMLTags["base"] = "base";
    HTMLTags["bdi"] = "bdi";
    HTMLTags["bdo"] = "bdo";
    HTMLTags["blockquote"] = "blockquote";
    HTMLTags["body"] = "body";
    HTMLTags["br"] = "br";
    HTMLTags["button"] = "button";
    HTMLTags["canvas"] = "canvas";
    HTMLTags["caption"] = "caption";
    HTMLTags["cite"] = "cite";
    HTMLTags["code"] = "code";
    HTMLTags["col"] = "col";
    HTMLTags["colgroup"] = "colgroup";
    HTMLTags["data"] = "data";
    HTMLTags["datalist"] = "datalist";
    HTMLTags["dd"] = "dd";
    HTMLTags["del"] = "del";
    HTMLTags["details"] = "details";
    HTMLTags["dfn"] = "dfn";
    HTMLTags["dialog"] = "dialog";
    HTMLTags["div"] = "div";
    HTMLTags["dl"] = "dl";
    HTMLTags["dt"] = "dt";
    HTMLTags["em"] = "em";
    HTMLTags["embed"] = "embed";
    HTMLTags["fieldset"] = "fieldset";
    HTMLTags["figcaption"] = "figcaption";
    HTMLTags["figure"] = "figure";
    HTMLTags["footer"] = "footer";
    HTMLTags["form"] = "form";
    HTMLTags["h1"] = "h1";
    HTMLTags["h2"] = "h2";
    HTMLTags["h3"] = "h3";
    HTMLTags["h4"] = "h4";
    HTMLTags["h5"] = "h5";
    HTMLTags["h6"] = "h6";
    HTMLTags["head"] = "head";
    HTMLTags["header"] = "header";
    HTMLTags["hgroup"] = "hgroup";
    HTMLTags["hr"] = "hr";
    HTMLTags["html"] = "html";
    HTMLTags["i"] = "i";
    HTMLTags["iframe"] = "iframe";
    HTMLTags["img"] = "img";
    HTMLTags["input"] = "input";
    HTMLTags["ins"] = "ins";
    HTMLTags["kbd"] = "kbd";
    HTMLTags["label"] = "label";
    HTMLTags["legend"] = "legend";
    HTMLTags["li"] = "li";
    HTMLTags["link"] = "link";
    HTMLTags["main"] = "main";
    HTMLTags["map"] = "map";
    HTMLTags["mark"] = "mark";
    HTMLTags["menu"] = "menu";
    HTMLTags["meta"] = "meta";
    HTMLTags["meter"] = "meter";
    HTMLTags["nav"] = "nav";
    HTMLTags["noscript"] = "noscript";
    HTMLTags["object"] = "object";
    HTMLTags["ol"] = "ol";
    HTMLTags["optgroup"] = "optgroup";
    HTMLTags["option"] = "option";
    HTMLTags["output"] = "output";
    HTMLTags["p"] = "p";
    HTMLTags["param"] = "param";
    HTMLTags["picture"] = "picture";
    HTMLTags["pre"] = "pre";
    HTMLTags["progress"] = "progress";
    HTMLTags["q"] = "q";
    HTMLTags["rp"] = "rp";
    HTMLTags["rt"] = "rt";
    HTMLTags["ruby"] = "ruby";
    HTMLTags["s"] = "s";
    HTMLTags["samp"] = "samp";
    HTMLTags["script"] = "script";
    HTMLTags["section"] = "section";
    HTMLTags["select"] = "select";
    HTMLTags["slot"] = "slot";
    HTMLTags["small"] = "small";
    HTMLTags["source"] = "source";
    HTMLTags["span"] = "span";
    HTMLTags["strong"] = "strong";
    HTMLTags["style"] = "style";
    HTMLTags["sub"] = "sub";
    HTMLTags["summary"] = "summary";
    HTMLTags["sup"] = "sup";
    HTMLTags["table"] = "table";
    HTMLTags["tbody"] = "tbody";
    HTMLTags["td"] = "td";
    HTMLTags["template"] = "template";
    HTMLTags["textarea"] = "textarea";
    HTMLTags["tfoot"] = "tfoot";
    HTMLTags["th"] = "th";
    HTMLTags["thead"] = "thead";
    HTMLTags["time"] = "time";
    HTMLTags["title"] = "title";
    HTMLTags["tr"] = "tr";
    HTMLTags["track"] = "track";
    HTMLTags["u"] = "u";
    HTMLTags["ul"] = "ul";
    HTMLTags["var"] = "var";
    HTMLTags["video"] = "video";
    HTMLTags["wbr"] = "wbr";
})(exports.HTMLTags || (exports.HTMLTags = {}));
var createTagRenderer = function (Tag) { return function (mainClassName) { return function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, props = __rest(_a, ["className"]);
    var sanitizedClass = mainClassName
        .toString()
        .split("\n")
        .map(function (c) { return c.trim(); })
        .join(" ");
    return React.createElement(Tag, __assign({ className: sanitizedClass + " " + className }, props), null);
}; }; };
var css = Object.keys(exports.HTMLTags).reduce(function (res, tag) {
    var _a;
    return (__assign(__assign({}, res), (_a = {}, _a[tag] = createTagRenderer(tag), _a)));
}, {});

exports.default = css;
//# sourceMappingURL=index.js.map
