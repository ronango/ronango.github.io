/*! For license information please see scripts.min.js.LICENSE.txt */
(() => {
    var e = {
        895: () => {
            "use strict";
            "function" != typeof Object.assign && (Object.assign = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                if (!e) throw TypeError("Cannot convert undefined or null to object");
                for (var i = function (t) {
                    t && Object.keys(t).forEach((function (n) {
                        return e[n] = t[n]
                    }))
                }, s = 0, a = t; s < a.length; s++) {
                    var o = a[s];
                    i(o)
                }
                return e
            })
        }, 809: function (e, t) {
            !function (e) {
                "use strict";
                var t = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    n = {
                        weekdays: {
                            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
                        },
                        months: {
                            shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                            longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Нед.",
                        scrollTitle: "Прокрутите для увеличения",
                        toggleTitle: "Нажмите для переключения",
                        amPM: ["ДП", "ПП"],
                        yearAriaLabel: "Год",
                        time_24hr: !0
                    };
                t.l10ns.ru = n;
                var i = t.l10ns;
                e.Russian = n, e.default = i, Object.defineProperty(e, "__esModule", {value: !0})
            }(t)
        }
    }, t = {};

    function n(i) {
        var s = t[i];
        if (void 0 !== s) return s.exports;
        var a = t[i] = {exports: {}};
        return e[i].call(a.exports, a, a.exports, n), a.exports
    }

    (() => {
        "use strict";
        var e, t;
        e = "undefined" != typeof window ? window : void 0, t = function (e, t) {
            var n = [], i = Object.getPrototypeOf, s = n.slice, a = n.flat ? function (e) {
                    return n.flat.call(e)
                } : function (e) {
                    return n.concat.apply([], e)
                }, o = n.push, r = n.indexOf, l = {}, c = l.toString, u = l.hasOwnProperty, d = u.toString,
                h = d.call(Object), p = {}, f = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                }, m = function (e) {
                    return null != e && e === e.window
                }, g = e.document, v = {type: !0, src: !0, nonce: !0, noModule: !0};

            function y(e, t, n) {
                var i, s, a = (n = n || g).createElement("script");
                if (a.text = e, t) for (i in v) (s = t[i] || t.getAttribute && t.getAttribute(i)) && a.setAttribute(i, s);
                n.head.appendChild(a).parentNode.removeChild(a)
            }

            function b(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
            }

            var w = "3.5.1", x = function (e, t) {
                return new x.fn.init(e, t)
            };

            function C(e) {
                var t = !!e && "length" in e && e.length, n = b(e);
                return !f(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }

            x.fn = x.prototype = {
                jquery: w, constructor: x, length: 0, toArray: function () {
                    return s.call(this)
                }, get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                }, pushStack: function (e) {
                    var t = x.merge(this.constructor(), e);
                    return t.prevObject = this, t
                }, each: function (e) {
                    return x.each(this, e)
                }, map: function (e) {
                    return this.pushStack(x.map(this, (function (t, n) {
                        return e.call(t, n, t)
                    })))
                }, slice: function () {
                    return this.pushStack(s.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, even: function () {
                    return this.pushStack(x.grep(this, (function (e, t) {
                        return (t + 1) % 2
                    })))
                }, odd: function () {
                    return this.pushStack(x.grep(this, (function (e, t) {
                        return t % 2
                    })))
                }, eq: function (e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: o, sort: n.sort, splice: n.splice
            }, x.extend = x.fn.extend = function () {
                var e, t, n, i, s, a, o = arguments[0] || {}, r = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof o && (c = o, o = arguments[r] || {}, r++), "object" == typeof o || f(o) || (o = {}), r === l && (o = this, r--); r < l; r++) if (null != (e = arguments[r])) for (t in e) i = e[t], "__proto__" !== t && o !== i && (c && i && (x.isPlainObject(i) || (s = Array.isArray(i))) ? (n = o[t], a = s && !Array.isArray(n) ? [] : s || x.isPlainObject(n) ? n : {}, s = !1, o[t] = x.extend(c, a, i)) : void 0 !== i && (o[t] = i));
                return o
            }, x.extend({
                expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                    throw new Error(e)
                }, noop: function () {
                }, isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof (n = u.call(t, "constructor") && t.constructor) || d.call(n) !== h))
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, globalEval: function (e, t, n) {
                    y(e, {nonce: t && t.nonce}, n)
                }, each: function (e, t) {
                    var n, i = 0;
                    if (C(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (C(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
                }, inArray: function (e, t, n) {
                    return null == t ? -1 : r.call(t, e, n)
                }, merge: function (e, t) {
                    for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
                    return e.length = s, e
                }, grep: function (e, t, n) {
                    for (var i = [], s = 0, a = e.length, o = !n; s < a; s++) !t(e[s], s) !== o && i.push(e[s]);
                    return i
                }, map: function (e, t, n) {
                    var i, s, o = 0, r = [];
                    if (C(e)) for (i = e.length; o < i; o++) null != (s = t(e[o], o, n)) && r.push(s); else for (o in e) null != (s = t(e[o], o, n)) && r.push(s);
                    return a(r)
                }, guid: 1, support: p
            }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase()
            }));
            var E = function (e) {
                var t, n, i, s, a, o, r, l, c, u, d, h, p, f, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    x = e.document, C = 0, E = 0, k = le(), S = le(), M = le(), T = le(), D = function (e, t) {
                        return e === t && (d = !0), 0
                    }, A = {}.hasOwnProperty, I = [], P = I.pop, $ = I.push, L = I.push, _ = I.slice, O = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    z = "[\\x20\\t\\r\\n\\f]",
                    j = "(?:\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    F = "\\[" + z + "*(" + j + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + z + "*\\]",
                    B = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    H = new RegExp(z + "+", "g"),
                    R = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                    Y = new RegExp("^" + z + "*," + z + "*"), W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                    q = new RegExp(z + "|>"), V = new RegExp(B), X = new RegExp("^" + j + "$"), G = {
                        ID: new RegExp("^#(" + j + ")"),
                        CLASS: new RegExp("^\\.(" + j + ")"),
                        TAG: new RegExp("^(" + j + "|[*])"),
                        ATTR: new RegExp("^" + F),
                        PSEUDO: new RegExp("^" + B),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
                    }, Z = /HTML$/i, U = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + z + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, ae = function () {
                        h()
                    }, oe = we((function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }), {dir: "parentNode", next: "legend"});
                try {
                    L.apply(I = _.call(x.childNodes), x.childNodes), I[x.childNodes.length].nodeType
                } catch (t) {
                    L = {
                        apply: I.length ? function (e, t) {
                            $.apply(e, _.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                            e.length = n - 1
                        }
                    }
                }

                function re(e, t, i, s) {
                    var a, r, c, u, d, f, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                    if (!s && (h(t), t = t || p, m)) {
                        if (11 !== x && (d = K.exec(e))) if (a = d[1]) {
                            if (9 === x) {
                                if (!(c = t.getElementById(a))) return i;
                                if (c.id === a) return i.push(c), i
                            } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return i.push(c), i
                        } else {
                            if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                            if ((a = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(a)), i
                        }
                        if (n.qsa && !T[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === x && (q.test(e) || W.test(e))) {
                                for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, se) : t.setAttribute("id", u = w)), r = (f = o(e)).length; r--;) f[r] = (u ? "#" + u : ":scope") + " " + be(f[r]);
                                v = f.join(",")
                            }
                            try {
                                return L.apply(i, y.querySelectorAll(v)), i
                            } catch (t) {
                                T(e, !0)
                            } finally {
                                u === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(R, "$1"), t, i, s)
                }

                function le() {
                    var e = [];
                    return function t(n, s) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = s
                    }
                }

                function ce(e) {
                    return e[w] = !0, e
                }

                function ue(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = t
                }

                function he(e, t) {
                    var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function fe(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function me(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return ce((function (t) {
                        return t = +t, ce((function (n, i) {
                            for (var s, a = e([], n.length, t), o = a.length; o--;) n[s = a[o]] && (n[s] = !(i[s] = n[s]))
                        }))
                    }))
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                for (t in n = re.support = {}, a = re.isXML = function (e) {
                    var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                    return !Z.test(t || n && n.nodeName || "HTML")
                }, h = re.setDocument = function (e) {
                    var t, s, o = e ? e.ownerDocument || e : x;
                    return o != p && 9 === o.nodeType && o.documentElement && (f = (p = o).documentElement, m = !a(p), x != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ae, !1) : s.attachEvent && s.attachEvent("onunload", ae)), n.scope = ue((function (e) {
                        return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = ue((function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    })), n.getElementsByTagName = ue((function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    })), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ue((function (e) {
                        return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    })), n.getById ? (i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n, i, s, a = t.getElementById(e);
                            if (a) {
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                for (s = t.getElementsByName(e), i = 0; a = s[i++];) if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [], s = 0, a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[s++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                    }, v = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (ue((function (e) {
                        var t;
                        f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + z + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + z + "*name" + z + "*=" + z + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                    })), ue((function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    }))), (n.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue((function (e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", B)
                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(f.compareDocumentPosition), b = t || Q.test(f.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, D = t ? function (e, t) {
                        if (e === t) return d = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == x && b(x, e) ? -1 : t == p || t.ownerDocument == x && b(x, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return d = !0, 0;
                        var n, i = 0, s = e.parentNode, a = t.parentNode, o = [e], r = [t];
                        if (!s || !a) return e == p ? -1 : t == p ? 1 : s ? -1 : a ? 1 : u ? O(u, e) - O(u, t) : 0;
                        if (s === a) return he(e, t);
                        for (n = e; n = n.parentNode;) o.unshift(n);
                        for (n = t; n = n.parentNode;) r.unshift(n);
                        for (; o[i] === r[i];) i++;
                        return i ? he(o[i], r[i]) : o[i] == x ? -1 : r[i] == x ? 1 : 0
                    }), p
                }, re.matches = function (e, t) {
                    return re(e, null, null, t)
                }, re.matchesSelector = function (e, t) {
                    if (h(e), n.matchesSelector && m && !T[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                        var i = y.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (e) {
                        T(t, !0)
                    }
                    return 0 < re(t, p, null, [e]).length
                }, re.contains = function (e, t) {
                    return (e.ownerDocument || e) != p && h(e), b(e, t)
                }, re.attr = function (e, t) {
                    (e.ownerDocument || e) != p && h(e);
                    var s = i.attrHandle[t.toLowerCase()],
                        a = s && A.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                    return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                }, re.escape = function (e) {
                    return (e + "").replace(ie, se)
                }, re.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, re.uniqueSort = function (e) {
                    var t, i = [], s = 0, a = 0;
                    if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), d) {
                        for (; t = e[a++];) t === e[a] && (s = i.push(a));
                        for (; s--;) e.splice(i[s], 1)
                    }
                    return u = null, e
                }, s = re.getText = function (e) {
                    var t, n = "", i = 0, a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                        } else if (3 === a || 4 === a) return e.nodeValue
                    } else for (; t = e[i++];) n += s(t);
                    return n
                }, (i = re.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = k[e + " "];
                            return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && k(e, (function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        }, ATTR: function (e, t, n) {
                            return function (i) {
                                var s = re.attr(i, e);
                                return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && -1 < s.indexOf(n) : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? -1 < (" " + s.replace(H, " ") + " ").indexOf(n) : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (e, t, n, i, s) {
                            var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), r = "of-type" === t;
                            return 1 === i && 0 === s ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var c, u, d, h, p, f, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode,
                                    v = r && t.nodeName.toLowerCase(), y = !l && !r, b = !1;
                                if (g) {
                                    if (a) {
                                        for (; m;) {
                                            for (h = t; h = h[m];) if (r ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                        for (b = (p = (c = (u = (d = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();) if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [C, p, b];
                                            break
                                        }
                                    } else if (y && (b = p = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b) for (; (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((r ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t));) ;
                                    return (b -= s) === i || b % i == 0 && 0 <= b / i
                                }
                            }
                        }, PSEUDO: function (e, t) {
                            var n,
                                s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return s[w] ? s(t) : 1 < s.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                                for (var i, a = s(e, t), o = a.length; o--;) e[i = O(e, a[o])] = !(n[i] = a[o])
                            })) : function (e) {
                                return s(e, 0, n)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ce((function (e) {
                            var t = [], n = [], i = r(e.replace(R, "$1"));
                            return i[w] ? ce((function (e, t, n, s) {
                                for (var a, o = i(e, null, s, []), r = e.length; r--;) (a = o[r]) && (e[r] = !(t[r] = a))
                            })) : function (e, s, a) {
                                return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                            }
                        })), has: ce((function (e) {
                            return function (t) {
                                return 0 < re(e, t).length
                            }
                        })), contains: ce((function (e) {
                            return e = e.replace(te, ne), function (t) {
                                return -1 < (t.textContent || s(t)).indexOf(e)
                            }
                        })), lang: ce((function (e) {
                            return X.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        })), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === f
                        }, focus: function (e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: me(!1), disabled: me(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !i.pseudos.empty(e)
                        }, header: function (e) {
                            return J.test(e.nodeName)
                        }, input: function (e) {
                            return U.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: ge((function () {
                            return [0]
                        })), last: ge((function (e, t) {
                            return [t - 1]
                        })), eq: ge((function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        })), even: ge((function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })), odd: ge((function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })), lt: ge((function (e, t, n) {
                            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                            return e
                        })), gt: ge((function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        }))
                    }
                }).pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = pe(t);
                for (t in {submit: !0, reset: !0}) i.pseudos[t] = fe(t);

                function ye() {
                }

                function be(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function we(e, t, n) {
                    var i = t.dir, s = t.next, a = s || i, o = n && "parentNode" === a, r = E++;
                    return t.first ? function (t, n, s) {
                        for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, s);
                        return !1
                    } : function (t, n, l) {
                        var c, u, d, h = [C, r];
                        if (l) {
                            for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                        } else for (; t = t[i];) if (1 === t.nodeType || o) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[i] || t; else {
                            if ((c = u[a]) && c[0] === C && c[1] === r) return h[2] = c[2];
                            if ((u[a] = h)[2] = e(t, n, l)) return !0
                        }
                        return !1
                    }
                }

                function xe(e) {
                    return 1 < e.length ? function (t, n, i) {
                        for (var s = e.length; s--;) if (!e[s](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function Ce(e, t, n, i, s) {
                    for (var a, o = [], r = 0, l = e.length, c = null != t; r < l; r++) (a = e[r]) && (n && !n(a, i, s) || (o.push(a), c && t.push(r)));
                    return o
                }

                function Ee(e, t, n, i, s, a) {
                    return i && !i[w] && (i = Ee(i)), s && !s[w] && (s = Ee(s, a)), ce((function (a, o, r, l) {
                        var c, u, d, h = [], p = [], f = o.length, m = a || function (e, t, n) {
                                for (var i = 0, s = t.length; i < s; i++) re(e, t[i], n);
                                return n
                            }(t || "*", r.nodeType ? [r] : r, []), g = !e || !a && t ? m : Ce(m, h, e, r, l),
                            v = n ? s || (a ? e : f || i) ? [] : o : g;
                        if (n && n(g, v, r, l), i) for (c = Ce(v, p), i(c, [], r, l), u = c.length; u--;) (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                        if (a) {
                            if (s || e) {
                                if (s) {
                                    for (c = [], u = v.length; u--;) (d = v[u]) && c.push(g[u] = d);
                                    s(null, v = [], c, l)
                                }
                                for (u = v.length; u--;) (d = v[u]) && -1 < (c = s ? O(a, d) : h[u]) && (a[c] = !(o[c] = d))
                            }
                        } else v = Ce(v === o ? v.splice(f, v.length) : v), s ? s(null, o, v, l) : L.apply(o, v)
                    }))
                }

                function ke(e) {
                    for (var t, n, s, a = e.length, o = i.relative[e[0].type], r = o || i.relative[" "], l = o ? 1 : 0, u = we((function (e) {
                        return e === t
                    }), r, !0), d = we((function (e) {
                        return -1 < O(t, e)
                    }), r, !0), h = [function (e, n, i) {
                        var s = !o && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                        return t = null, s
                    }]; l < a; l++) if (n = i.relative[e[l].type]) h = [we(xe(h), n)]; else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (s = ++l; s < a && !i.relative[e[s].type]; s++) ;
                            return Ee(1 < l && xe(h), 1 < l && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(R, "$1"), n, l < s && ke(e.slice(l, s)), s < a && ke(e = e.slice(s)), s < a && be(e))
                        }
                        h.push(n)
                    }
                    return xe(h)
                }

                return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, o = re.tokenize = function (e, t) {
                    var n, s, a, o, r, l, c, u = S[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (r = e, l = [], c = i.preFilter; r;) {
                        for (o in n && !(s = Y.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(a = [])), n = !1, (s = W.exec(r)) && (n = s.shift(), a.push({
                            value: n,
                            type: s[0].replace(R, " ")
                        }), r = r.slice(n.length)), i.filter) !(s = G[o].exec(r)) || c[o] && !(s = c[o](s)) || (n = s.shift(), a.push({
                            value: n,
                            type: o,
                            matches: s
                        }), r = r.slice(n.length));
                        if (!n) break
                    }
                    return t ? r.length : r ? re.error(e) : S(e, l).slice(0)
                }, r = re.compile = function (e, t) {
                    var n, s, a, r, l, u, d = [], f = [], g = M[e + " "];
                    if (!g) {
                        for (t || (t = o(e)), n = t.length; n--;) (g = ke(t[n]))[w] ? d.push(g) : f.push(g);
                        (g = M(e, (s = f, r = 0 < (a = d).length, l = 0 < s.length, u = function (e, t, n, o, u) {
                            var d, f, g, v = 0, y = "0", b = e && [], w = [], x = c, E = e || l && i.find.TAG("*", u),
                                k = C += null == x ? 1 : Math.random() || .1, S = E.length;
                            for (u && (c = t == p || t || u); y !== S && null != (d = E[y]); y++) {
                                if (l && d) {
                                    for (f = 0, t || d.ownerDocument == p || (h(d), n = !m); g = s[f++];) if (g(d, t || p, n)) {
                                        o.push(d);
                                        break
                                    }
                                    u && (C = k)
                                }
                                r && ((d = !g && d) && v--, e && b.push(d))
                            }
                            if (v += y, r && y !== v) {
                                for (f = 0; g = a[f++];) g(b, w, t, n);
                                if (e) {
                                    if (0 < v) for (; y--;) b[y] || w[y] || (w[y] = P.call(o));
                                    w = Ce(w)
                                }
                                L.apply(o, w), u && !e && 0 < w.length && 1 < v + a.length && re.uniqueSort(o)
                            }
                            return u && (C = k, c = x), b
                        }, r ? ce(u) : u))).selector = e
                    }
                    return g
                }, l = re.select = function (e, t, n, s) {
                    var a, l, c, u, d, h = "function" == typeof e && e, p = !s && o(e = h.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (a = G.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !i.relative[u = c.type]);) if ((d = i.find[u]) && (s = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(a, 1), !(e = s.length && be(l))) return L.apply(n, s), n;
                            break
                        }
                    }
                    return (h || r(e, p))(s, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(D).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ue((function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                })), ue((function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                })) || de("type|href|height|width", (function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                })), n.attributes && ue((function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                })) || de("value", (function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                })), ue((function (e) {
                    return null == e.getAttribute("disabled")
                })) || de(N, (function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                })), re
            }(e);
            x.find = E, x.expr = E.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = E.uniqueSort, x.text = E.getText, x.isXMLDoc = E.isXML, x.contains = E.contains, x.escapeSelector = E.escape;
            var k = function (e, t, n) {
                for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (s && x(e).is(n)) break;
                    i.push(e)
                }
                return i
            }, S = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }, M = x.expr.match.needsContext;

            function T(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(e, t, n) {
                return f(t) ? x.grep(e, (function (e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? x.grep(e, (function (e) {
                    return e === t !== n
                })) : "string" != typeof t ? x.grep(e, (function (e) {
                    return -1 < r.call(t, e) !== n
                })) : x.filter(t, e, n)
            }

            x.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function (e) {
                    return 1 === e.nodeType
                })))
            }, x.fn.extend({
                find: function (e) {
                    var t, n, i = this.length, s = this;
                    if ("string" != typeof e) return this.pushStack(x(e).filter((function () {
                        for (t = 0; t < i; t++) if (x.contains(s[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, s[t], n);
                    return 1 < i ? x.uniqueSort(n) : n
                }, filter: function (e) {
                    return this.pushStack(A(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(A(this, e || [], !0))
                }, is: function (e) {
                    return !!A(this, "string" == typeof e && M.test(e) ? x(e) : e || [], !1).length
                }
            });
            var I, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (x.fn.init = function (e, t, n) {
                var i, s;
                if (!e) return this;
                if (n = n || I, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : P.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), D.test(i[1]) && x.isPlainObject(t)) for (i in t) f(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (s = g.getElementById(i[2])) && (this[0] = s, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : f(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
            }).prototype = x.fn, I = x(g);
            var $ = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

            function _(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;) ;
                return e
            }

            x.fn.extend({
                has: function (e) {
                    var t = x(e, this), n = t.length;
                    return this.filter((function () {
                        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0
                    }))
                }, closest: function (e, t) {
                    var n, i = 0, s = this.length, a = [], o = "string" != typeof e && x(e);
                    if (!M.test(e)) for (; i < s; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
                    return this.pushStack(1 < a.length ? x.uniqueSort(a) : a)
                }, index: function (e) {
                    return e ? "string" == typeof e ? r.call(x(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), x.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return k(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return k(e, "parentNode", n)
                }, next: function (e) {
                    return _(e, "nextSibling")
                }, prev: function (e) {
                    return _(e, "previousSibling")
                }, nextAll: function (e) {
                    return k(e, "nextSibling")
                }, prevAll: function (e) {
                    return k(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return k(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return k(e, "previousSibling", n)
                }, siblings: function (e) {
                    return S((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return S(e.firstChild)
                }, contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (T(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
                }
            }, (function (e, t) {
                x.fn[e] = function (n, i) {
                    var s = x.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = x.filter(i, s)), 1 < this.length && (L[e] || x.uniqueSort(s), $.test(e) && s.reverse()), this.pushStack(s)
                }
            }));
            var O = /[^\x20\t\r\n\f]+/g;

            function N(e) {
                return e
            }

            function z(e) {
                throw e
            }

            function j(e, t, n, i) {
                var s;
                try {
                    e && f(s = e.promise) ? s.call(e).done(t).fail(n) : e && f(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            x.Callbacks = function (e) {
                var t, n;
                e = "string" == typeof e ? (t = e, n = {}, x.each(t.match(O) || [], (function (e, t) {
                    n[t] = !0
                })), n) : x.extend({}, e);
                var i, s, a, o, r = [], l = [], c = -1, u = function () {
                    for (o = o || e.once, a = i = !0; l.length; c = -1) for (s = l.shift(); ++c < r.length;) !1 === r[c].apply(s[0], s[1]) && e.stopOnFalse && (c = r.length, s = !1);
                    e.memory || (s = !1), i = !1, o && (r = s ? [] : "")
                }, d = {
                    add: function () {
                        return r && (s && !i && (c = r.length - 1, l.push(s)), function t(n) {
                            x.each(n, (function (n, i) {
                                f(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i)
                            }))
                        }(arguments), s && !i && u()), this
                    }, remove: function () {
                        return x.each(arguments, (function (e, t) {
                            for (var n; -1 < (n = x.inArray(t, r, n));) r.splice(n, 1), n <= c && c--
                        })), this
                    }, has: function (e) {
                        return e ? -1 < x.inArray(e, r) : 0 < r.length
                    }, empty: function () {
                        return r && (r = []), this
                    }, disable: function () {
                        return o = l = [], r = s = "", this
                    }, disabled: function () {
                        return !r
                    }, lock: function () {
                        return o = l = [], s || i || (r = s = ""), this
                    }, locked: function () {
                        return !!o
                    }, fireWith: function (e, t) {
                        return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                    }, fire: function () {
                        return d.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!a
                    }
                };
                return d
            }, x.extend({
                Deferred: function (t) {
                    var n = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]],
                        i = "pending", s = {
                            state: function () {
                                return i
                            }, always: function () {
                                return a.done(arguments).fail(arguments), this
                            }, catch: function (e) {
                                return s.then(null, e)
                            }, pipe: function () {
                                var e = arguments;
                                return x.Deferred((function (t) {
                                    x.each(n, (function (n, i) {
                                        var s = f(e[i[4]]) && e[i[4]];
                                        a[i[1]]((function () {
                                            var e = s && s.apply(this, arguments);
                                            e && f(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, s ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            }, then: function (t, i, s) {
                                var a = 0;

                                function o(t, n, i, s) {
                                    return function () {
                                        var r = this, l = arguments, c = function () {
                                            var e, c;
                                            if (!(t < a)) {
                                                if ((e = i.apply(r, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                c = e && ("object" == typeof e || "function" == typeof e) && e.then, f(c) ? s ? c.call(e, o(a, n, N, s), o(a, n, z, s)) : (a++, c.call(e, o(a, n, N, s), o(a, n, z, s), o(a, n, N, n.notifyWith))) : (i !== N && (r = void 0, l = [e]), (s || n.resolveWith)(r, l))
                                            }
                                        }, u = s ? c : function () {
                                            try {
                                                c()
                                            } catch (e) {
                                                x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), a <= t + 1 && (i !== z && (r = void 0, l = [e]), n.rejectWith(r, l))
                                            }
                                        };
                                        t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                                    }
                                }

                                return x.Deferred((function (e) {
                                    n[0][3].add(o(0, e, f(s) ? s : N, e.notifyWith)), n[1][3].add(o(0, e, f(t) ? t : N)), n[2][3].add(o(0, e, f(i) ? i : z))
                                })).promise()
                            }, promise: function (e) {
                                return null != e ? x.extend(e, s) : s
                            }
                        }, a = {};
                    return x.each(n, (function (e, t) {
                        var o = t[2], r = t[5];
                        s[t[1]] = o.add, r && o.add((function () {
                            i = r
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function () {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = o.fireWith
                    })), s.promise(a), t && t.call(a, a), a
                }, when: function (e) {
                    var t = arguments.length, n = t, i = Array(n), a = s.call(arguments), o = x.Deferred(),
                        r = function (e) {
                            return function (n) {
                                i[e] = this, a[e] = 1 < arguments.length ? s.call(arguments) : n, --t || o.resolveWith(i, a)
                            }
                        };
                    if (t <= 1 && (j(e, o.done(r(n)).resolve, o.reject, !t), "pending" === o.state() || f(a[n] && a[n].then))) return o.then();
                    for (; n--;) j(a[n], r(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            x.Deferred.exceptionHook = function (t, n) {
                e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, x.readyException = function (t) {
                e.setTimeout((function () {
                    throw t
                }))
            };
            var B = x.Deferred();

            function H() {
                g.removeEventListener("DOMContentLoaded", H), e.removeEventListener("load", H), x.ready()
            }

            x.fn.ready = function (e) {
                return B.then(e).catch((function (e) {
                    x.readyException(e)
                })), this
            }, x.extend({
                isReady: !1, readyWait: 1, ready: function (e) {
                    (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || B.resolveWith(g, [x])
                }
            }), x.ready.then = B.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", H), e.addEventListener("load", H));
            var R = function (e, t, n, i, s, a, o) {
                var r = 0, l = e.length, c = null == n;
                if ("object" === b(n)) for (r in s = !0, n) R(e, t, r, n[r], !0, a, o); else if (void 0 !== i && (s = !0, f(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(x(e), n)
                })), t)) for (; r < l; r++) t(e[r], n, o ? i : i.call(e[r], r, t(e[r], n)));
                return s ? e : c ? t.call(e) : l ? t(e[0], n) : a
            }, Y = /^-ms-/, W = /-([a-z])/g;

            function q(e, t) {
                return t.toUpperCase()
            }

            function V(e) {
                return e.replace(Y, "ms-").replace(W, q)
            }

            var X = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function G() {
                this.expando = x.expando + G.uid++
            }

            G.uid = 1, G.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                }, set: function (e, t, n) {
                    var i, s = this.cache(e);
                    if ("string" == typeof t) s[V(t)] = n; else for (i in t) s[V(i)] = t[i];
                    return s
                }, get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                }, access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                }, remove: function (e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(O) || []).length;
                            for (; n--;) delete i[t[n]]
                        }
                        (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                }, hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !x.isEmptyObject(t)
                }
            };
            var Z = new G, U = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;

            function K(e, t, n) {
                var i, s;
                if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : J.test(s) ? JSON.parse(s) : s)
                    } catch (e) {
                    }
                    U.set(e, t, n)
                } else n = void 0;
                return n
            }

            x.extend({
                hasData: function (e) {
                    return U.hasData(e) || Z.hasData(e)
                }, data: function (e, t, n) {
                    return U.access(e, t, n)
                }, removeData: function (e, t) {
                    U.remove(e, t)
                }, _data: function (e, t, n) {
                    return Z.access(e, t, n)
                }, _removeData: function (e, t) {
                    Z.remove(e, t)
                }
            }), x.fn.extend({
                data: function (e, t) {
                    var n, i, s, a = this[0], o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (s = U.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
                            for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = V(i.slice(5)), K(a, i, s[i]));
                            Z.set(a, "hasDataAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof e ? this.each((function () {
                        U.set(this, e)
                    })) : R(this, (function (t) {
                        var n;
                        if (a && void 0 === t) return void 0 !== (n = U.get(a, e)) || void 0 !== (n = K(a, e)) ? n : void 0;
                        this.each((function () {
                            U.set(this, e, t)
                        }))
                    }), null, t, 1 < arguments.length, null, !0)
                }, removeData: function (e) {
                    return this.each((function () {
                        U.remove(this, e)
                    }))
                }
            }), x.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = Z.get(e, t), n && (!i || Array.isArray(n) ? i = Z.access(e, t, x.makeArray(n)) : i.push(n)), i || []
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = x.queue(e, t), i = n.length, s = n.shift(), a = x._queueHooks(e, t);
                    "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete a.stop, s.call(e, (function () {
                        x.dequeue(e, t)
                    }), a)), !i && a && a.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return Z.get(e, n) || Z.access(e, n, {
                        empty: x.Callbacks("once memory").add((function () {
                            Z.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), x.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var n = x.queue(this, e, t);
                        x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                    }))
                }, dequeue: function (e) {
                    return this.each((function () {
                        x.dequeue(this, e)
                    }))
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, i = 1, s = x.Deferred(), a = this, o = this.length, r = function () {
                        --i || s.resolveWith(a, [a])
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) (n = Z.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(r));
                    return r(), s.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"],
                ie = g.documentElement, se = function (e) {
                    return x.contains(e.ownerDocument, e)
                }, ae = {composed: !0};
            ie.getRootNode && (se = function (e) {
                return x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            });
            var oe = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === x.css(e, "display")
            };

            function re(e, t, n, i) {
                var s, a, o = 20, r = i ? function () {
                        return i.cur()
                    } : function () {
                        return x.css(e, t, "")
                    }, l = r(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; o--;) x.style(e, t, u + c), (1 - a) * (1 - (a = r() / l || .5)) <= 0 && (o = 0), u /= a;
                    u *= 2, x.style(e, t, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, s = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = s)), s
            }

            var le = {};

            function ce(e, t) {
                for (var n, i, s, a, o, r, l, c = [], u = 0, d = e.length; u < d; u++) (i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Z.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && oe(i) && (c[u] = (l = o = a = void 0, o = (s = i).ownerDocument, r = s.nodeName, (l = le[r]) || (a = o.body.appendChild(o.createElement(r)), l = x.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), le[r] = l)))) : "none" !== n && (c[u] = "none", Z.set(i, "display", n)));
                for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
                return e
            }

            x.fn.extend({
                show: function () {
                    return ce(this, !0)
                }, hide: function () {
                    return ce(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                        oe(this) ? x(this).show() : x(this).hide()
                    }))
                }
            });
            var ue, de, he = /^(?:checkbox|radio)$/i, pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                fe = /^$|^module$|\/(?:java|ecma)script/i;
            ue = g.createDocumentFragment().appendChild(g.createElement("div")), (de = g.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ue.appendChild(de), p.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", p.option = !!ue.lastChild;
            var me = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function ge(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && T(e, t) ? x.merge([e], n) : n
            }

            function ve(e, t) {
                for (var n = 0, i = e.length; n < i; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
            }

            me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, p.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ye = /<|&#?\w+;/;

            function be(e, t, n, i, s) {
                for (var a, o, r, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++) if ((a = e[p]) || 0 === a) if ("object" === b(a)) x.merge(h, a.nodeType ? [a] : a); else if (ye.test(a)) {
                    for (o = o || d.appendChild(t.createElement("div")), r = (pe.exec(a) || ["", ""])[1].toLowerCase(), l = me[r] || me._default, o.innerHTML = l[1] + x.htmlPrefilter(a) + l[2], u = l[0]; u--;) o = o.lastChild;
                    x.merge(h, o.childNodes), (o = d.firstChild).textContent = ""
                } else h.push(t.createTextNode(a));
                for (d.textContent = "", p = 0; a = h[p++];) if (i && -1 < x.inArray(a, i)) s && s.push(a); else if (c = se(a), o = ge(d.appendChild(a), "script"), c && ve(o), n) for (u = 0; a = o[u++];) fe.test(a.type || "") && n.push(a);
                return d
            }

            var we = /^key/, xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;

            function Ee() {
                return !0
            }

            function ke() {
                return !1
            }

            function Se(e, t) {
                return e === function () {
                    try {
                        return g.activeElement
                    } catch (e) {
                    }
                }() == ("focus" === t)
            }

            function Me(e, t, n, i, s, a) {
                var o, r;
                if ("object" == typeof t) {
                    for (r in "string" != typeof n && (i = i || n, n = void 0), t) Me(e, r, n, i, t[r], a);
                    return e
                }
                if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = ke; else if (!s) return e;
                return 1 === a && (o = s, (s = function (e) {
                    return x().off(e), o.apply(this, arguments)
                }).guid = o.guid || (o.guid = x.guid++)), e.each((function () {
                    x.event.add(this, t, s, i, n)
                }))
            }

            function Te(e, t, n) {
                n ? (Z.set(e, t, !1), x.event.add(e, t, {
                    namespace: !1, handler: function (e) {
                        var i, a, o = Z.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length) (x.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = s.call(arguments), Z.set(this, t, o), i = n(this, t), this[t](), o !== (a = Z.get(this, t)) || i ? Z.set(this, t, !1) : a = {}, o !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value
                        } else o.length && (Z.set(this, t, {value: x.event.trigger(x.extend(o[0], x.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
                    }
                })) : void 0 === Z.get(e, t) && x.event.add(e, t, Ee)
            }

            x.event = {
                global: {}, add: function (e, t, n, i, s) {
                    var a, o, r, l, c, u, d, h, p, f, m, g = Z.get(e);
                    if (X(e)) for (n.handler && (n = (a = n).handler, s = a.selector), s && x.find.matchesSelector(ie, s), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function (t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(O) || [""]).length; c--;) p = m = (r = Ce.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p && (d = x.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = x.event.special[p] || {}, u = x.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: s,
                        needsContext: s && x.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), x.event.global[p] = !0)
                }, remove: function (e, t, n, i, s) {
                    var a, o, r, l, c, u, d, h, p, f, m, g = Z.hasData(e) && Z.get(e);
                    if (g && (l = g.events)) {
                        for (c = (t = (t || "").match(O) || [""]).length; c--;) if (p = m = (r = Ce.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                            for (d = x.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) u = h[a], !s && m !== u.origType || n && n.guid !== u.guid || r && !r.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                            o && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || x.removeEvent(e, p, g.handle), delete l[p])
                        } else for (p in l) x.event.remove(e, p + t[c], n, i, !0);
                        x.isEmptyObject(l) && Z.remove(e, "handle events")
                    }
                }, dispatch: function (e) {
                    var t, n, i, s, a, o, r = new Array(arguments.length), l = x.event.fix(e),
                        c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                        u = x.event.special[l.type] || {};
                    for (r[0] = l, t = 1; t < arguments.length; t++) r[t] = arguments[t];
                    if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (o = x.event.handlers.call(this, l, c), t = 0; (s = o[t++]) && !l.isPropagationStopped();) for (l.currentTarget = s.elem, n = 0; (a = s.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (i = ((x.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, r)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result
                    }
                }, handlers: function (e, t) {
                    var n, i, s, a, o, r = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[s = (i = t[n]).selector + " "] && (o[s] = i.needsContext ? -1 < x(s, this).index(c) : x.find(s, this, null, [c]).length), o[s] && a.push(i);
                        a.length && r.push({elem: c, handlers: a})
                    }
                    return c = this, l < t.length && r.push({elem: c, handlers: t.slice(l)}), r
                }, addProp: function (e, t) {
                    Object.defineProperty(x.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: f(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                        }
                    })
                }, fix: function (e) {
                    return e[x.expando] ? e : new x.Event(e)
                }, special: {
                    load: {noBubble: !0}, click: {
                        setup: function (e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && T(t, "input") && Te(t, "click", Ee), !1
                        }, trigger: function (e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && T(t, "input") && Te(t, "click"), !0
                        }, _default: function (e) {
                            var t = e.target;
                            return he.test(t.type) && t.click && T(t, "input") && Z.get(t, "click") || T(t, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, x.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, x.Event = function (e, t) {
                if (!(this instanceof x.Event)) return new x.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
            }, x.Event.prototype = {
                constructor: x.Event,
                isDefaultPrevented: ke,
                isPropagationStopped: ke,
                isImmediatePropagationStopped: ke,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, x.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, x.event.addProp), x.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                x.event.special[e] = {
                    setup: function () {
                        return Te(this, e, Se), !1
                    }, trigger: function () {
                        return Te(this, e), !0
                    }, delegateType: t
                }
            })), x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (e, t) {
                x.event.special[e] = {
                    delegateType: t, bindType: t, handle: function (e) {
                        var n, i = e.relatedTarget, s = e.handleObj;
                        return i && (i === this || x.contains(this, i)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), x.fn.extend({
                on: function (e, t, n, i) {
                    return Me(this, e, t, n, i)
                }, one: function (e, t, n, i) {
                    return Me(this, e, t, n, i, 1)
                }, off: function (e, t, n) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (s in e) this.off(s, t, e[s]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each((function () {
                        x.event.remove(this, e, n, t)
                    }))
                }
            });
            var De = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Pe(e, t) {
                return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
            }

            function $e(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Le(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function _e(e, t) {
                var n, i, s, a, o, r;
                if (1 === t.nodeType) {
                    if (Z.hasData(e) && (r = Z.get(e).events)) for (s in Z.remove(t, "handle events"), r) for (n = 0, i = r[s].length; n < i; n++) x.event.add(t, s, r[s][n]);
                    U.hasData(e) && (a = U.access(e), o = x.extend({}, a), U.set(t, o))
                }
            }

            function Oe(e, t, n, i) {
                t = a(t);
                var s, o, r, l, c, u, d = 0, h = e.length, m = h - 1, g = t[0], v = f(g);
                if (v || 1 < h && "string" == typeof g && !p.checkClone && Ae.test(g)) return e.each((function (s) {
                    var a = e.eq(s);
                    v && (t[0] = g.call(this, s, a.html())), Oe(a, t, n, i)
                }));
                if (h && (o = (s = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === s.childNodes.length && (s = o), o || i)) {
                    for (l = (r = x.map(ge(s, "script"), $e)).length; d < h; d++) c = s, d !== m && (c = x.clone(c, !0, !0), l && x.merge(r, ge(c, "script"))), n.call(e[d], c, d);
                    if (l) for (u = r[r.length - 1].ownerDocument, x.map(r, Le), d = 0; d < l; d++) c = r[d], fe.test(c.type || "") && !Z.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, u) : y(c.textContent.replace(Ie, ""), c, u))
                }
                return e
            }

            function Ne(e, t, n) {
                for (var i, s = t ? x.filter(t, e) : e, a = 0; null != (i = s[a]); a++) n || 1 !== i.nodeType || x.cleanData(ge(i)), i.parentNode && (n && se(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
                return e
            }

            x.extend({
                htmlPrefilter: function (e) {
                    return e
                }, clone: function (e, t, n) {
                    var i, s, a, o, r, l, c, u = e.cloneNode(!0), d = se(e);
                    if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (o = ge(u), i = 0, s = (a = ge(e)).length; i < s; i++) r = a[i], "input" === (c = (l = o[i]).nodeName.toLowerCase()) && he.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
                    if (t) if (n) for (a = a || ge(e), o = o || ge(u), i = 0, s = a.length; i < s; i++) _e(a[i], o[i]); else _e(e, u);
                    return 0 < (o = ge(u, "script")).length && ve(o, !d && ge(e, "script")), u
                }, cleanData: function (e) {
                    for (var t, n, i, s = x.event.special, a = 0; void 0 !== (n = e[a]); a++) if (X(n)) {
                        if (t = n[Z.expando]) {
                            if (t.events) for (i in t.events) s[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                            n[Z.expando] = void 0
                        }
                        n[U.expando] && (n[U.expando] = void 0)
                    }
                }
            }), x.fn.extend({
                detach: function (e) {
                    return Ne(this, e, !0)
                }, remove: function (e) {
                    return Ne(this, e)
                }, text: function (e) {
                    return R(this, (function (e) {
                        return void 0 === e ? x.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                }, append: function () {
                    return Oe(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                    }))
                }, prepend: function () {
                    return Oe(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Pe(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                }, before: function () {
                    return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                }, after: function () {
                    return Oe(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ge(e, !1)), e.textContent = "");
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return x.clone(this, e, t)
                    }))
                }, html: function (e) {
                    return R(this, (function (e) {
                        var t = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !De.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = x.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ge(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {
                            }
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return Oe(this, arguments, (function (t) {
                        var n = this.parentNode;
                        x.inArray(this, e) < 0 && (x.cleanData(ge(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), x.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                x.fn[e] = function (e) {
                    for (var n, i = [], s = x(e), a = s.length - 1, r = 0; r <= a; r++) n = r === a ? this : this.clone(!0), x(s[r])[t](n), o.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var ze = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), je = function (t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            }, Fe = function (e, t, n) {
                var i, s, a = {};
                for (s in t) a[s] = e.style[s], e.style[s] = t[s];
                for (s in i = n.call(e), t) e.style[s] = a[s];
                return i
            }, Be = new RegExp(ne.join("|"), "i");

            function He(e, t, n) {
                var i, s, a, o, r = e.style;
                return (n = n || je(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || se(e) || (o = x.style(e, t)), !p.pixelBoxStyles() && ze.test(o) && Be.test(t) && (i = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = s, r.maxWidth = a)), void 0 !== o ? o + "" : o
            }

            function Re(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
                        var t = e.getComputedStyle(u);
                        i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", o = 36 === n(t.right), s = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }

                var i, s, a, o, r, l, c = g.createElement("div"), u = g.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(p, {
                    boxSizingReliable: function () {
                        return t(), s
                    }, pixelBoxStyles: function () {
                        return t(), o
                    }, pixelPosition: function () {
                        return t(), i
                    }, reliableMarginLeft: function () {
                        return t(), l
                    }, scrollboxSize: function () {
                        return t(), a
                    }, reliableTrDimensions: function () {
                        var t, n, i, s;
                        return null == r && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", ie.appendChild(t).appendChild(n).appendChild(i), s = e.getComputedStyle(n), r = 3 < parseInt(s.height), ie.removeChild(t)), r
                    }
                }))
            }();
            var Ye = ["Webkit", "Moz", "ms"], We = g.createElement("div").style, qe = {};

            function Ve(e) {
                return x.cssProps[e] || qe[e] || (e in We ? e : qe[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) if ((e = Ye[n] + t) in We) return e
                }(e) || e)
            }

            var Xe = /^(none|table(?!-c[ea]).+)/, Ge = /^--/,
                Ze = {position: "absolute", visibility: "hidden", display: "block"},
                Ue = {letterSpacing: "0", fontWeight: "400"};

            function Je(e, t, n) {
                var i = te.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function Qe(e, t, n, i, s, a) {
                var o = "width" === t ? 1 : 0, r = 0, l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; o < 4; o += 2) "margin" === n && (l += x.css(e, n + ne[o], !0, s)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[o], !0, s)), "margin" !== n && (l -= x.css(e, "border" + ne[o] + "Width", !0, s))) : (l += x.css(e, "padding" + ne[o], !0, s), "padding" !== n ? l += x.css(e, "border" + ne[o] + "Width", !0, s) : r += x.css(e, "border" + ne[o] + "Width", !0, s));
                return !i && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - r - .5)) || 0), l
            }

            function Ke(e, t, n) {
                var i = je(e), s = (!p.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
                    a = s, o = He(e, t, i), r = "offset" + t[0].toUpperCase() + t.slice(1);
                if (ze.test(o)) {
                    if (!n) return o;
                    o = "auto"
                }
                return (!p.boxSizingReliable() && s || !p.reliableTrDimensions() && T(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (s = "border-box" === x.css(e, "boxSizing", !1, i), (a = r in e) && (o = e[r])), (o = parseFloat(o) || 0) + Qe(e, t, n || (s ? "border" : "content"), a, i, o) + "px"
            }

            function et(e, t, n, i, s) {
                return new et.prototype.init(e, t, n, i, s)
            }

            x.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = He(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var s, a, o, r = V(t), l = Ge.test(t), c = e.style;
                        if (l || (t = Ve(r)), o = x.cssHooks[t] || x.cssHooks[r], void 0 === n) return o && "get" in o && void 0 !== (s = o.get(e, !1, i)) ? s : c[t];
                        "string" == (a = typeof n) && (s = te.exec(n)) && s[1] && (n = re(e, t, s), a = "number"), null != n && n == n && ("number" !== a || l || (n += s && s[3] || (x.cssNumber[r] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function (e, t, n, i) {
                    var s, a, o, r = V(t);
                    return Ge.test(t) || (t = Ve(r)), (o = x.cssHooks[t] || x.cssHooks[r]) && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = He(e, t, i)), "normal" === s && t in Ue && (s = Ue[t]), "" === n || n ? (a = parseFloat(s), !0 === n || isFinite(a) ? a || 0 : s) : s
                }
            }), x.each(["height", "width"], (function (e, t) {
                x.cssHooks[t] = {
                    get: function (e, n, i) {
                        if (n) return !Xe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : Fe(e, Ze, (function () {
                            return Ke(e, t, i)
                        }))
                    }, set: function (e, n, i) {
                        var s, a = je(e), o = !p.scrollboxSize() && "absolute" === a.position,
                            r = (o || i) && "border-box" === x.css(e, "boxSizing", !1, a),
                            l = i ? Qe(e, t, i, r, a) : 0;
                        return r && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)), l && (s = te.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Je(0, n, l)
                    }
                }
            })), x.cssHooks.marginLeft = Re(p.reliableMarginLeft, (function (e, t) {
                if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {marginLeft: 0}, (function () {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), x.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
                x.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, s = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[e + ne[i] + t] = a[i] || a[i - 2] || a[0];
                        return s
                    }
                }, "margin" !== e && (x.cssHooks[e + t].set = Je)
            })), x.fn.extend({
                css: function (e, t) {
                    return R(this, (function (e, t, n) {
                        var i, s, a = {}, o = 0;
                        if (Array.isArray(t)) {
                            for (i = je(e), s = t.length; o < s; o++) a[t[o]] = x.css(e, t[o], !1, i);
                            return a
                        }
                        return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                    }), e, t, 1 < arguments.length)
                }
            }), ((x.Tween = et).prototype = {
                constructor: et, init: function (e, t, n, i, s, a) {
                    this.elem = e, this.prop = n, this.easing = s || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (x.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = et.propHooks[this.prop];
                    return e && e.get ? e.get(this) : et.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = et.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
                }
            }).init.prototype = et.prototype, (et.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    }, set: function (e) {
                        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = et.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, x.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, x.fx = et.prototype.init, x.fx.step = {};
            var tt, nt, it, st, at = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

            function rt() {
                nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, x.fx.interval), x.fx.tick())
            }

            function lt() {
                return e.setTimeout((function () {
                    tt = void 0
                })), tt = Date.now()
            }

            function ct(e, t) {
                var n, i = 0, s = {height: e};
                for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = ne[i])] = s["padding" + n] = e;
                return t && (s.opacity = s.width = e), s
            }

            function ut(e, t, n) {
                for (var i, s = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), a = 0, o = s.length; a < o; a++) if (i = s[a].call(n, t, e)) return i
            }

            function dt(e, t, n) {
                var i, s, a = 0, o = dt.prefilters.length, r = x.Deferred().always((function () {
                    delete l.elem
                })), l = function () {
                    if (s) return !1;
                    for (var t = tt || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(i);
                    return r.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || r.notifyWith(e, [c, 1, 0]), r.resolveWith(e, [c]), !1)
                }, c = r.promise({
                    elem: e,
                    props: x.extend({}, t),
                    opts: x.extend(!0, {specialEasing: {}, easing: x.easing._default}, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: tt || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (t) {
                        var n = 0, i = t ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (r.notifyWith(e, [c, 1, 0]), r.resolveWith(e, [c, t])) : r.rejectWith(e, [c, t]), this
                    }
                }), u = c.props;
                for (function (e, t) {
                    var n, i, s, a, o;
                    for (n in e) if (s = t[i = V(n)], a = e[n], Array.isArray(a) && (s = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = x.cssHooks[i]) && "expand" in o) for (n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = s); else t[i] = s
                }(u, c.opts.specialEasing); a < o; a++) if (i = dt.prefilters[a].call(c, e, u, c.opts)) return f(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return x.map(u, ut, c), f(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }

            x.Animation = x.extend(dt, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return re(n.elem, e, te.exec(t), n), n
                    }]
                }, tweener: function (e, t) {
                    f(e) ? (t = e, e = ["*"]) : e = e.match(O);
                    for (var n, i = 0, s = e.length; i < s; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                }, prefilters: [function (e, t, n) {
                    var i, s, a, o, r, l, c, u, d = "width" in t || "height" in t, h = this, p = {}, f = e.style,
                        m = e.nodeType && oe(e), g = Z.get(e, "fxshow");
                    for (i in n.queue || (null == (o = x._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, r = o.empty.fire, o.empty.fire = function () {
                        o.unqueued || r()
                    }), o.unqueued++, h.always((function () {
                        h.always((function () {
                            o.unqueued--, x.queue(e, "fx").length || o.empty.fire()
                        }))
                    }))), t) if (s = t[i], at.test(s)) {
                        if (delete t[i], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
                            if ("show" !== s || !g || void 0 === g[i]) continue;
                            m = !0
                        }
                        p[i] = g && g[i] || x.style(e, i)
                    }
                    if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p)) for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Z.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = x.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (h.done((function () {
                        f.display = c
                    })), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always((function () {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    }))), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(e, "fxshow", {display: c}), a && (g.hidden = !m), m && ce([e], !0), h.done((function () {
                        for (i in m || ce([e]), Z.remove(e, "fxshow"), p) x.style(e, i, p[i])
                    }))), l = ut(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
                }], prefilter: function (e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }), x.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? x.extend({}, e) : {
                    complete: n || !n && t || f(e) && e,
                    duration: e,
                    easing: n && t || t && !f(t) && t
                };
                return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    f(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue)
                }, i
            }, x.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(oe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
                }, animate: function (e, t, n, i) {
                    var s = x.isEmptyObject(e), a = x.speed(t, n, i), o = function () {
                        var t = dt(this, x.extend({}, e), a);
                        (s || Z.get(this, "finish")) && t.stop(!0)
                    };
                    return o.finish = o, s || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                }, stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                        var t = !0, s = null != e && e + "queueHooks", a = x.timers, o = Z.get(this);
                        if (s) o[s] && o[s].stop && i(o[s]); else for (s in o) o[s] && o[s].stop && ot.test(s) && i(o[s]);
                        for (s = a.length; s--;) a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(n), t = !1, a.splice(s, 1));
                        !t && n || x.dequeue(this, e)
                    }))
                }, finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each((function () {
                        var t, n = Z.get(this), i = n[e + "queue"], s = n[e + "queueHooks"], a = x.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, x.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), x.each(["toggle", "show", "hide"], (function (e, t) {
                var n = x.fn[t];
                x.fn[t] = function (e, i, s) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, s)
                }
            })), x.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, (function (e, t) {
                x.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            })), x.timers = [], x.fx.tick = function () {
                var e, t = 0, n = x.timers;
                for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || x.fx.stop(), tt = void 0
            }, x.fx.timer = function (e) {
                x.timers.push(e), x.fx.start()
            }, x.fx.interval = 13, x.fx.start = function () {
                nt || (nt = !0, rt())
            }, x.fx.stop = function () {
                nt = null
            }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fn.delay = function (t, n) {
                return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
                    var s = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(s)
                    }
                }))
            }, it = g.createElement("input"), st = g.createElement("select").appendChild(g.createElement("option")), it.type = "checkbox", p.checkOn = "" !== it.value, p.optSelected = st.selected, (it = g.createElement("input")).value = "t", it.type = "radio", p.radioValue = "t" === it.value;
            var ht, pt = x.expr.attrHandle;
            x.fn.extend({
                attr: function (e, t) {
                    return R(this, x.attr, e, t, 1 < arguments.length)
                }, removeAttr: function (e) {
                    return this.each((function () {
                        x.removeAttr(this, e)
                    }))
                }
            }), x.extend({
                attr: function (e, t, n) {
                    var i, s, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === a && x.isXMLDoc(e) || (s = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (i = s.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!p.radioValue && "radio" === t && T(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, i = 0, s = t && t.match(O);
                    if (s && 1 === e.nodeType) for (; n = s[i++];) e.removeAttribute(n)
                }
            }), ht = {
                set: function (e, t, n) {
                    return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, x.each(x.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var n = pt[t] || x.find.attr;
                pt[t] = function (e, t, i) {
                    var s, a, o = t.toLowerCase();
                    return i || (a = pt[o], pt[o] = s, s = null != n(e, t, i) ? o : null, pt[o] = a), s
                }
            }));
            var ft = /^(?:input|select|textarea|button)$/i, mt = /^(?:a|area)$/i;

            function gt(e) {
                return (e.match(O) || []).join(" ")
            }

            function vt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function yt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
            }

            x.fn.extend({
                prop: function (e, t) {
                    return R(this, x.prop, e, t, 1 < arguments.length)
                }, removeProp: function (e) {
                    return this.each((function () {
                        delete this[x.propFix[e] || e]
                    }))
                }
            }), x.extend({
                prop: function (e, t, n) {
                    var i, s, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t, s = x.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = x.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ft.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {for: "htmlFor", class: "className"}
            }), p.optSelected || (x.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }, set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                x.propFix[this.toLowerCase()] = this
            })), x.fn.extend({
                addClass: function (e) {
                    var t, n, i, s, a, o, r, l = 0;
                    if (f(e)) return this.each((function (t) {
                        x(this).addClass(e.call(this, t, vt(this)))
                    }));
                    if ((t = yt(e)).length) for (; n = this[l++];) if (s = vt(n), i = 1 === n.nodeType && " " + gt(s) + " ") {
                        for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        s !== (r = gt(i)) && n.setAttribute("class", r)
                    }
                    return this
                }, removeClass: function (e) {
                    var t, n, i, s, a, o, r, l = 0;
                    if (f(e)) return this.each((function (t) {
                        x(this).removeClass(e.call(this, t, vt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length) for (; n = this[l++];) if (s = vt(n), i = 1 === n.nodeType && " " + gt(s) + " ") {
                        for (o = 0; a = t[o++];) for (; -1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
                        s !== (r = gt(i)) && n.setAttribute("class", r)
                    }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e, i = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : f(e) ? this.each((function (n) {
                        x(this).toggleClass(e.call(this, n, vt(this), t), t)
                    })) : this.each((function () {
                        var t, s, a, o;
                        if (i) for (s = 0, a = x(this), o = yt(e); t = o[s++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                    }))
                }, hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            x.fn.extend({
                val: function (e) {
                    var t, n, i, s = this[0];
                    return arguments.length ? (i = f(e), this.each((function (n) {
                        var s;
                        1 === this.nodeType && (null == (s = i ? e.call(this, n, x(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = x.map(s, (function (e) {
                            return null == e ? "" : e + ""
                        }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                    }))) : s ? (t = x.valHooks[s.type] || x.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                }
            }), x.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = x.find.attr(e, "value");
                            return null != t ? t : gt(x.text(e))
                        }
                    }, select: {
                        get: function (e) {
                            var t, n, i, s = e.options, a = e.selectedIndex, o = "select-one" === e.type,
                                r = o ? null : [], l = o ? a + 1 : s.length;
                            for (i = a < 0 ? l : o ? a : 0; i < l; i++) if (((n = s[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(), o) return t;
                                r.push(t)
                            }
                            return r
                        }, set: function (e, t) {
                            for (var n, i, s = e.options, a = x.makeArray(t), o = s.length; o--;) ((i = s[o]).selected = -1 < x.inArray(x.valHooks.option.get(i), a)) && (n = !0);
                            return n || (e.selectedIndex = -1), a
                        }
                    }
                }
            }), x.each(["radio", "checkbox"], (function () {
                x.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
                    }
                }, p.checkOn || (x.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), p.focusin = "onfocusin" in e;
            var wt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {
                e.stopPropagation()
            };
            x.extend(x.event, {
                trigger: function (t, n, i, s) {
                    var a, o, r, l, c, d, h, p, v = [i || g], y = u.call(t, "type") ? t.type : t,
                        b = u.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = p = r = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), h = x.event.special[y] || {}, s || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                        if (!s && !h.noBubble && !m(i)) {
                            for (l = h.delegateType || y, wt.test(l + y) || (o = o.parentNode); o; o = o.parentNode) v.push(o), r = o;
                            r === (i.ownerDocument || g) && v.push(r.defaultView || r.parentWindow || e)
                        }
                        for (a = 0; (o = v[a++]) && !t.isPropagationStopped();) p = o, t.type = 1 < a ? l : h.bindType || y, (d = (Z.get(o, "events") || Object.create(null))[t.type] && Z.get(o, "handle")) && d.apply(o, n), (d = c && o[c]) && d.apply && X(o) && (t.result = d.apply(o, n), !1 === t.result && t.preventDefault());
                        return t.type = y, s || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !X(i) || c && f(i[y]) && !m(i) && ((r = i[c]) && (i[c] = null), x.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, xt), i[y](), t.isPropagationStopped() && p.removeEventListener(y, xt), x.event.triggered = void 0, r && (i[c] = r)), t.result
                    }
                }, simulate: function (e, t, n) {
                    var i = x.extend(new x.Event, n, {type: e, isSimulated: !0});
                    x.event.trigger(i, null, t)
                }
            }), x.fn.extend({
                trigger: function (e, t) {
                    return this.each((function () {
                        x.event.trigger(e, t, this)
                    }))
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return x.event.trigger(e, t, n, !0)
                }
            }), p.focusin || x.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
                var n = function (e) {
                    x.event.simulate(t, e.target, x.event.fix(e))
                };
                x.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this, s = Z.access(i, t);
                        s || i.addEventListener(e, n, !0), Z.access(i, t, (s || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this.document || this, s = Z.access(i, t) - 1;
                        s ? Z.access(i, t, s) : (i.removeEventListener(e, n, !0), Z.remove(i, t))
                    }
                }
            }));
            var Ct = e.location, Et = {guid: Date.now()}, kt = /\?/;
            x.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n
            };
            var St = /\[\]$/, Mt = /\r?\n/g, Tt = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;

            function At(e, t, n, i) {
                var s;
                if (Array.isArray(t)) x.each(t, (function (t, s) {
                    n || St.test(e) ? i(e, s) : At(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i)
                })); else if (n || "object" !== b(t)) i(e, t); else for (s in t) At(e + "[" + s + "]", t[s], n, i)
            }

            x.param = function (e, t) {
                var n, i = [], s = function (e, t) {
                    var n = f(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function () {
                    s(this.name, this.value)
                })); else for (n in e) At(n, e[n], t, s);
                return i.join("&")
            }, x.fn.extend({
                serialize: function () {
                    return x.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map((function () {
                        var e = x.prop(this, "elements");
                        return e ? x.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !x(this).is(":disabled") && Dt.test(this.nodeName) && !Tt.test(e) && (this.checked || !he.test(e))
                    })).map((function (e, t) {
                        var n = x(this).val();
                        return null == n ? null : Array.isArray(n) ? x.map(n, (function (e) {
                            return {name: t.name, value: e.replace(Mt, "\r\n")}
                        })) : {name: t.name, value: n.replace(Mt, "\r\n")}
                    })).get()
                }
            });
            var It = /%20/g, Pt = /#.*$/, $t = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                _t = /^(?:GET|HEAD)$/, Ot = /^\/\//, Nt = {}, zt = {}, jt = "*/".concat("*"), Ft = g.createElement("a");

            function Bt(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, s = 0, a = t.toLowerCase().match(O) || [];
                    if (f(n)) for (; i = a[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Ht(e, t, n, i) {
                var s = {}, a = e === zt;

                function o(r) {
                    var l;
                    return s[r] = !0, x.each(e[r] || [], (function (e, r) {
                        var c = r(t, n, i);
                        return "string" != typeof c || a || s[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                    })), l
                }

                return o(t.dataTypes[0]) || !s["*"] && o("*")
            }

            function Rt(e, t) {
                var n, i, s = x.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
                return i && x.extend(!0, e, i), e
            }

            Ft.href = Ct.href, x.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": jt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (e, t) {
                    return t ? Rt(Rt(e, x.ajaxSettings), t) : Rt(x.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(Nt),
                ajaxTransport: Bt(zt),
                ajax: function (t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, s, a, o, r, l, c, u, d, h, p = x.ajaxSetup({}, n), f = p.context || p,
                        m = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, v = x.Deferred(),
                        y = x.Callbacks("once memory"), b = p.statusCode || {}, w = {}, C = {}, E = "canceled", k = {
                            readyState: 0, getResponseHeader: function (e) {
                                var t;
                                if (c) {
                                    if (!o) for (o = {}; t = Lt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = o[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            }, getAllResponseHeaders: function () {
                                return c ? a : null
                            }, setRequestHeader: function (e, t) {
                                return null == c && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                            }, overrideMimeType: function (e) {
                                return null == c && (p.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e) if (c) k.always(e[k.status]); else for (t in e) b[t] = [b[t], e[t]];
                                return this
                            }, abort: function (e) {
                                var t = e || E;
                                return i && i.abort(t), S(0, t), this
                            }
                        };
                    if (v.promise(k), p.url = ((t || p.url || Ct.href) + "").replace(Ot, Ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
                        l = g.createElement("a");
                        try {
                            l.href = p.url, l.href = l.href, p.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                        } catch (t) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), Ht(Nt, p, n, k), c) return k;
                    for (d in (u = x.event && p.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_t.test(p.type), s = p.url.replace(Pt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (h = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (kt.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace($t, "$1"), h = (kt.test(s) ? "&" : "?") + "_=" + Et.guid++ + h), p.url = s + h), p.ifModified && (x.lastModified[s] && k.setRequestHeader("If-Modified-Since", x.lastModified[s]), x.etag[s] && k.setRequestHeader("If-None-Match", x.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || c)) return k.abort();
                    if (E = "abort", y.add(p.complete), k.done(p.success), k.fail(p.error), i = Ht(zt, p, n, k)) {
                        if (k.readyState = 1, u && m.trigger("ajaxSend", [k, p]), c) return k;
                        p.async && 0 < p.timeout && (r = e.setTimeout((function () {
                            k.abort("timeout")
                        }), p.timeout));
                        try {
                            c = !1, i.send(w, S)
                        } catch (t) {
                            if (c) throw t;
                            S(-1, t)
                        }
                    } else S(-1, "No Transport");

                    function S(t, n, o, l) {
                        var d, h, g, w, C, E = n;
                        c || (c = !0, r && e.clearTimeout(r), i = void 0, a = l || "", k.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, o && (w = function (e, t, n) {
                            for (var i, s, a, o, r = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) for (s in r) if (r[s] && r[s].test(i)) {
                                l.unshift(s);
                                break
                            }
                            if (l[0] in n) a = l[0]; else {
                                for (s in n) {
                                    if (!l[0] || e.converters[s + " " + l[0]]) {
                                        a = s;
                                        break
                                    }
                                    o || (o = s)
                                }
                                a = a || o
                            }
                            if (a) return a !== l[0] && l.unshift(a), n[a]
                        }(p, k, o)), !d && -1 < x.inArray("script", p.dataTypes) && (p.converters["text script"] = function () {
                        }), w = function (e, t, n, i) {
                            var s, a, o, r, l, c = {}, u = e.dataTypes.slice();
                            if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                            for (a = u.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                                if (!(o = c[l + " " + a] || c["* " + a])) for (s in c) if ((r = s.split(" "))[1] === a && (o = c[l + " " + r[0]] || c["* " + r[0]])) {
                                    !0 === o ? o = c[s] : !0 !== c[s] && (a = r[0], u.unshift(r[1]));
                                    break
                                }
                                if (!0 !== o) if (o && e.throws) t = o(t); else try {
                                    t = o(t)
                                } catch (e) {
                                    return {state: "parsererror", error: o ? e : "No conversion from " + l + " to " + a}
                                }
                            }
                            return {state: "success", data: t}
                        }(p, w, k, d), d ? (p.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (x.lastModified[s] = C), (C = k.getResponseHeader("etag")) && (x.etag[s] = C)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, h = w.data, d = !(g = w.error))) : (g = E, !t && E || (E = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || E) + "", d ? v.resolveWith(f, [h, E, k]) : v.rejectWith(f, [k, E, g]), k.statusCode(b), b = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [k, p, d ? h : g]), y.fireWith(f, [k, E]), u && (m.trigger("ajaxComplete", [k, p]), --x.active || x.event.trigger("ajaxStop")))
                    }

                    return k
                },
                getJSON: function (e, t, n) {
                    return x.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return x.get(e, void 0, t, "script")
                }
            }), x.each(["get", "post"], (function (e, t) {
                x[t] = function (e, n, i, s) {
                    return f(n) && (s = s || i, i = n, n = void 0), x.ajax(x.extend({
                        url: e,
                        type: t,
                        dataType: s,
                        data: n,
                        success: i
                    }, x.isPlainObject(e) && e))
                }
            })), x.ajaxPrefilter((function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), x._evalUrl = function (e, t, n) {
                return x.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {
                        }
                    },
                    dataFilter: function (e) {
                        x.globalEval(e, t, n)
                    }
                })
            }, x.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (f(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                }, wrapInner: function (e) {
                    return f(e) ? this.each((function (t) {
                        x(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = x(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                }, wrap: function (e) {
                    var t = f(e);
                    return this.each((function (n) {
                        x(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                }, unwrap: function (e) {
                    return this.parent(e).not("body").each((function () {
                        x(this).replaceWith(this.childNodes)
                    })), this
                }
            }), x.expr.pseudos.hidden = function (e) {
                return !x.expr.pseudos.visible(e)
            }, x.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, x.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {
                }
            };
            var Yt = {0: 200, 1223: 204}, Wt = x.ajaxSettings.xhr();
            p.cors = !!Wt && "withCredentials" in Wt, p.ajax = Wt = !!Wt, x.ajaxTransport((function (t) {
                var n, i;
                if (p.cors || Wt && !t.crossDomain) return {
                    send: function (s, a) {
                        var o, r = t.xhr();
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        for (o in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) r.setRequestHeader(o, s[o]);
                        n = function (e) {
                            return function () {
                                n && (n = i = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? a(0, "error") : a(r.status, r.statusText) : a(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                            }
                        }, r.onload = n(), i = r.onerror = r.ontimeout = n("error"), void 0 !== r.onabort ? r.onabort = i : r.onreadystatechange = function () {
                            4 === r.readyState && e.setTimeout((function () {
                                n && i()
                            }))
                        }, n = n("abort");
                        try {
                            r.send(t.hasContent && t.data || null)
                        } catch (s) {
                            if (n) throw s
                        }
                    }, abort: function () {
                        n && n()
                    }
                }
            })), x.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })), x.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /\b(?:java|ecma)script\b/},
                converters: {
                    "text script": function (e) {
                        return x.globalEval(e), e
                    }
                }
            }), x.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), x.ajaxTransport("script", (function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function (i, s) {
                        t = x("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                        }), g.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }));
            var qt, Vt = [], Xt = /(=)\?(?=&|$)|\?\?/;
            x.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var e = Vt.pop() || x.expando + "_" + Et.guid++;
                    return this[e] = !0, e
                }
            }), x.ajaxPrefilter("json jsonp", (function (t, n, i) {
                var s, a, o,
                    r = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
                if (r || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Xt, "$1" + s) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
                    return o || x.error(s + " was not called"), o[0]
                }, t.dataTypes[0] = "json", a = e[s], e[s] = function () {
                    o = arguments
                }, i.always((function () {
                    void 0 === a ? x(e).removeProp(s) : e[s] = a, t[s] && (t.jsonpCallback = n.jsonpCallback, Vt.push(s)), o && f(a) && a(o[0]), o = a = void 0
                })), "script"
            })), p.createHTMLDocument = ((qt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), x.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(i)) : t = g), a = !n && [], (s = D.exec(e)) ? [t.createElement(s[1])] : (s = be([e], t, a), a && a.length && x(a).remove(), x.merge([], s.childNodes)));
                var i, s, a
            }, x.fn.load = function (e, t, n) {
                var i, s, a, o = this, r = e.indexOf(" ");
                return -1 < r && (i = gt(e.slice(r)), e = e.slice(0, r)), f(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < o.length && x.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    a = arguments, o.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
                })).always(n && function (e, t) {
                    o.each((function () {
                        n.apply(this, a || [e.responseText, t, e])
                    }))
                }), this
            }, x.expr.pseudos.animated = function (e) {
                return x.grep(x.timers, (function (t) {
                    return e === t.elem
                })).length
            }, x.offset = {
                setOffset: function (e, t, n) {
                    var i, s, a, o, r, l, c = x.css(e, "position"), u = x(e), d = {};
                    "static" === c && (e.style.position = "relative"), r = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (o = (i = u.position()).top, s = i.left) : (o = parseFloat(a) || 0, s = parseFloat(l) || 0), f(t) && (t = t.call(e, n, x.extend({}, r))), null != t.top && (d.top = t.top - r.top + o), null != t.left && (d.left = t.left - r.left + s), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
                }
            }, x.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                        x.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {top: 0, left: 0} : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n, i = this[0], s = {top: 0, left: 0};
                        if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect(); else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((s = x(e).offset()).top += x.css(e, "borderTopWidth", !0), s.left += x.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - s.top - x.css(i, "marginTop", !0),
                            left: t.left - s.left - x.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                        return e || ie
                    }))
                }
            }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
                var n = "pageYOffset" === t;
                x.fn[e] = function (i) {
                    return R(this, (function (e, i, s) {
                        var a;
                        if (m(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s) return a ? a[t] : e[i];
                        a ? a.scrollTo(n ? a.pageXOffset : s, n ? s : a.pageYOffset) : e[i] = s
                    }), e, i, arguments.length)
                }
            })), x.each(["top", "left"], (function (e, t) {
                x.cssHooks[t] = Re(p.pixelPosition, (function (e, n) {
                    if (n) return n = He(e, t), ze.test(n) ? x(e).position()[t] + "px" : n
                }))
            })), x.each({Height: "height", Width: "width"}, (function (e, t) {
                x.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
                    x.fn[i] = function (s, a) {
                        var o = arguments.length && (n || "boolean" != typeof s),
                            r = n || (!0 === s || !0 === a ? "margin" : "border");
                        return R(this, (function (t, n, s) {
                            var a;
                            return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? x.css(t, n, r) : x.style(t, n, s, r)
                        }), t, o ? s : void 0, o)
                    }
                }))
            })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                x.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })), x.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }, hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                x.fn[t] = function (e, n) {
                    return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            x.proxy = function (e, t) {
                var n, i, a;
                if ("string" == typeof t && (n = e[t], t = e, e = n), f(e)) return i = s.call(arguments, 2), (a = function () {
                    return e.apply(t || this, i.concat(s.call(arguments)))
                }).guid = e.guid = e.guid || x.guid++, a
            }, x.holdReady = function (e) {
                e ? x.readyWait++ : x.ready(!0)
            }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = T, x.isFunction = f, x.isWindow = m, x.camelCase = V, x.type = b, x.now = Date.now, x.isNumeric = function (e) {
                var t = x.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, x.trim = function (e) {
                return null == e ? "" : (e + "").replace(Gt, "")
            }, "function" == typeof define && define.amd && define("jquery", [], (function () {
                return x
            }));
            var Zt = e.jQuery, Ut = e.$;
            return x.noConflict = function (t) {
                return e.$ === x && (e.$ = Ut), t && e.jQuery === x && (e.jQuery = Zt), x
            }, void 0 === t && (e.jQuery = e.$ = x), x
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    })(), (() => {
        "use strict";
        var e = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
            t = {
                _disable: [],
                allowInput: !1,
                allowInvalidPreload: !1,
                altFormat: "F j, Y",
                altInput: !1,
                altInputClass: "form-control input",
                animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
                ariaDateFormat: "F j, Y",
                autoFillDefaultTime: !0,
                clickOpens: !0,
                closeOnSelect: !0,
                conjunction: ", ",
                dateFormat: "Y-m-d",
                defaultHour: 12,
                defaultMinute: 0,
                defaultSeconds: 0,
                disable: [],
                disableMobile: !1,
                enableSeconds: !1,
                enableTime: !1,
                errorHandler: function (e) {
                    return "undefined" != typeof console && console.warn(e)
                },
                getWeek: function (e) {
                    var t = new Date(e.getTime());
                    t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                    var n = new Date(t.getFullYear(), 0, 4);
                    return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
                },
                hourIncrement: 1,
                ignoredFocusElements: [],
                inline: !1,
                locale: "default",
                minuteIncrement: 5,
                mode: "single",
                monthSelectorType: "dropdown",
                nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                noCalendar: !1,
                now: new Date,
                onChange: [],
                onClose: [],
                onDayCreate: [],
                onDestroy: [],
                onKeyDown: [],
                onMonthChange: [],
                onOpen: [],
                onParseConfig: [],
                onReady: [],
                onValueUpdate: [],
                onYearChange: [],
                onPreCalendarPosition: [],
                plugins: [],
                position: "auto",
                positionElement: void 0,
                prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                shorthandCurrentMonth: !1,
                showMonths: 1,
                static: !1,
                time_24hr: !1,
                weekNumbers: !1,
                wrap: !1
            }, i = {
                weekdays: {
                    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                months: {
                    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                firstDayOfWeek: 0,
                ordinal: function (e) {
                    var t = e % 100;
                    if (t > 3 && t < 21) return "th";
                    switch (t % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th"
                    }
                },
                rangeSeparator: " to ",
                weekAbbreviation: "Wk",
                scrollTitle: "Scroll to increment",
                toggleTitle: "Click to toggle",
                amPM: ["AM", "PM"],
                yearAriaLabel: "Year",
                monthAriaLabel: "Month",
                hourAriaLabel: "Hour",
                minuteAriaLabel: "Minute",
                time_24hr: !1
            };
        const s = i;
        var a = function (e, t) {
            return void 0 === t && (t = 2), ("000" + e).slice(-1 * t)
        }, o = function (e) {
            return !0 === e ? 1 : 0
        };

        function r(e, t) {
            var n;
            return function () {
                var i = this, s = arguments;
                clearTimeout(n), n = setTimeout((function () {
                    return e.apply(i, s)
                }), t)
            }
        }

        var l = function (e) {
            return e instanceof Array ? e : [e]
        };

        function c(e, t, n) {
            if (!0 === n) return e.classList.add(t);
            e.classList.remove(t)
        }

        function u(e, t, n) {
            var i = window.document.createElement(e);
            return t = t || "", n = n || "", i.className = t, void 0 !== n && (i.textContent = n), i
        }

        function d(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }

        function h(e, t) {
            return t(e) ? e : e.parentNode ? h(e.parentNode, t) : void 0
        }

        function p(e, t) {
            var n = u("div", "numInputWrapper"), i = u("input", "numInput " + e), s = u("span", "arrowUp"),
                a = u("span", "arrowDown");
            if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), void 0 !== t) for (var o in t) i.setAttribute(o, t[o]);
            return n.appendChild(i), n.appendChild(s), n.appendChild(a), n
        }

        function f(e) {
            try {
                return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
            } catch (t) {
                return e.target
            }
        }

        var m = function () {
        }, g = function (e, t, n) {
            return n.months[t ? "shorthand" : "longhand"][e]
        }, v = {
            D: m, F: function (e, t, n) {
                e.setMonth(n.months.longhand.indexOf(t))
            }, G: function (e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            }, H: function (e, t) {
                e.setHours(parseFloat(t))
            }, J: function (e, t) {
                e.setDate(parseFloat(t))
            }, K: function (e, t, n) {
                e.setHours(e.getHours() % 12 + 12 * o(new RegExp(n.amPM[1], "i").test(t)))
            }, M: function (e, t, n) {
                e.setMonth(n.months.shorthand.indexOf(t))
            }, S: function (e, t) {
                e.setSeconds(parseFloat(t))
            }, U: function (e, t) {
                return new Date(1e3 * parseFloat(t))
            }, W: function (e, t, n) {
                var i = parseInt(t), s = new Date(e.getFullYear(), 0, 2 + 7 * (i - 1), 0, 0, 0, 0);
                return s.setDate(s.getDate() - s.getDay() + n.firstDayOfWeek), s
            }, Y: function (e, t) {
                e.setFullYear(parseFloat(t))
            }, Z: function (e, t) {
                return new Date(t)
            }, d: function (e, t) {
                e.setDate(parseFloat(t))
            }, h: function (e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            }, i: function (e, t) {
                e.setMinutes(parseFloat(t))
            }, j: function (e, t) {
                e.setDate(parseFloat(t))
            }, l: m, m: function (e, t) {
                e.setMonth(parseFloat(t) - 1)
            }, n: function (e, t) {
                e.setMonth(parseFloat(t) - 1)
            }, s: function (e, t) {
                e.setSeconds(parseFloat(t))
            }, u: function (e, t) {
                return new Date(parseFloat(t))
            }, w: m, y: function (e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        }, y = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        }, b = {
            Z: function (e) {
                return e.toISOString()
            }, D: function (e, t, n) {
                return t.weekdays.shorthand[b.w(e, t, n)]
            }, F: function (e, t, n) {
                return g(b.n(e, t, n) - 1, !1, t)
            }, G: function (e, t, n) {
                return a(b.h(e, t, n))
            }, H: function (e) {
                return a(e.getHours())
            }, J: function (e, t) {
                return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
            }, K: function (e, t) {
                return t.amPM[o(e.getHours() > 11)]
            }, M: function (e, t) {
                return g(e.getMonth(), !0, t)
            }, S: function (e) {
                return a(e.getSeconds())
            }, U: function (e) {
                return e.getTime() / 1e3
            }, W: function (e, t, n) {
                return n.getWeek(e)
            }, Y: function (e) {
                return a(e.getFullYear(), 4)
            }, d: function (e) {
                return a(e.getDate())
            }, h: function (e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            }, i: function (e) {
                return a(e.getMinutes())
            }, j: function (e) {
                return e.getDate()
            }, l: function (e, t) {
                return t.weekdays.longhand[e.getDay()]
            }, m: function (e) {
                return a(e.getMonth() + 1)
            }, n: function (e) {
                return e.getMonth() + 1
            }, s: function (e) {
                return e.getSeconds()
            }, u: function (e) {
                return e.getTime()
            }, w: function (e) {
                return e.getDay()
            }, y: function (e) {
                return String(e.getFullYear()).substring(2)
            }
        }, w = function (e) {
            var n = e.config, s = void 0 === n ? t : n, a = e.l10n, o = void 0 === a ? i : a, r = e.isMobile,
                l = void 0 !== r && r;
            return function (e, t, n) {
                var i = n || o;
                return void 0 === s.formatDate || l ? t.split("").map((function (t, n, a) {
                    return b[t] && "\\" !== a[n - 1] ? b[t](e, i, s) : "\\" !== t ? t : ""
                })).join("") : s.formatDate(e, t, i)
            }
        }, x = function (e) {
            var n = e.config, s = void 0 === n ? t : n, a = e.l10n, o = void 0 === a ? i : a;
            return function (e, n, i, a) {
                if (0 === e || e) {
                    var r, l = a || o, c = e;
                    if (e instanceof Date) r = new Date(e.getTime()); else if ("string" != typeof e && void 0 !== e.toFixed) r = new Date(e); else if ("string" == typeof e) {
                        var u = n || (s || t).dateFormat, d = String(e).trim();
                        if ("today" === d) r = new Date, i = !0; else if (s && s.parseDate) r = s.parseDate(e, u); else if (/Z$/.test(d) || /GMT$/.test(d)) r = new Date(e); else {
                            for (var h = void 0, p = [], f = 0, m = 0, g = ""; f < u.length; f++) {
                                var b = u[f], w = "\\" === b, x = "\\" === u[f - 1] || w;
                                if (y[b] && !x) {
                                    g += y[b];
                                    var C = new RegExp(g).exec(e);
                                    C && (h = !0) && p["Y" !== b ? "push" : "unshift"]({fn: v[b], val: C[++m]})
                                } else w || (g += ".")
                            }
                            r = s && s.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), p.forEach((function (e) {
                                var t = e.fn, n = e.val;
                                return r = t(r, n, l) || r
                            })), r = h ? r : void 0
                        }
                    }
                    if (r instanceof Date && !isNaN(r.getTime())) return !0 === i && r.setHours(0, 0, 0, 0), r;
                    s.errorHandler(new Error("Invalid date provided: " + c))
                }
            }
        };

        function C(e, t, n) {
            return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
        }

        var E = function (e, t, n) {
            return 3600 * e + 60 * t + n
        };

        function k(e) {
            var t = e.defaultHour, n = e.defaultMinute, i = e.defaultSeconds;
            if (void 0 !== e.minDate) {
                var s = e.minDate.getHours(), a = e.minDate.getMinutes(), o = e.minDate.getSeconds();
                t < s && (t = s), t === s && n < a && (n = a), t === s && n === a && i < o && (i = e.minDate.getSeconds())
            }
            if (void 0 !== e.maxDate) {
                var r = e.maxDate.getHours(), l = e.maxDate.getMinutes();
                (t = Math.min(t, r)) === r && (n = Math.min(l, n)), t === r && n === l && (i = e.maxDate.getSeconds())
            }
            return {hours: t, minutes: n, seconds: i}
        }

        n(895);
        var S = function () {
            return S = Object.assign || function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++) for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }, S.apply(this, arguments)
        }, M = function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var i = Array(e), s = 0;
            for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, r = a.length; o < r; o++, s++) i[s] = a[o];
            return i
        };

        function T(n, i) {
            var m = {config: S(S({}, t), A.defaultConfig), l10n: s};

            function v() {
                var e;
                return (null === (e = m.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
            }

            function b(e) {
                return e.bind(m)
            }

            function T() {
                var e = m.config;
                !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function () {
                    if (void 0 !== m.calendarContainer && (m.calendarContainer.style.visibility = "hidden", m.calendarContainer.style.display = "block"), void 0 !== m.daysContainer) {
                        var t = (m.days.offsetWidth + 1) * e.showMonths;
                        m.daysContainer.style.width = t + "px", m.calendarContainer.style.width = t + (void 0 !== m.weekWrapper ? m.weekWrapper.offsetWidth : 0) + "px", m.calendarContainer.style.removeProperty("visibility"), m.calendarContainer.style.removeProperty("display")
                    }
                }))
            }

            function D(e) {
                if (0 === m.selectedDates.length) {
                    var t = void 0 === m.config.minDate || C(new Date, m.config.minDate) >= 0 ? new Date : new Date(m.config.minDate.getTime()),
                        n = k(m.config);
                    t.setHours(n.hours, n.minutes, n.seconds, t.getMilliseconds()), m.selectedDates = [t], m.latestSelectedDateObj = t
                }
                void 0 !== e && "blur" !== e.type && function (e) {
                    e.preventDefault();
                    var t = "keydown" === e.type, n = f(e), i = n;
                    void 0 !== m.amPM && n === m.amPM && (m.amPM.textContent = m.l10n.amPM[o(m.amPM.textContent === m.l10n.amPM[0])]);
                    var s = parseFloat(i.getAttribute("min")), r = parseFloat(i.getAttribute("max")),
                        l = parseFloat(i.getAttribute("step")), c = parseInt(i.value, 10),
                        u = c + l * (e.delta || (t ? 38 === e.which ? 1 : -1 : 0));
                    if (void 0 !== i.value && 2 === i.value.length) {
                        var d = i === m.hourElement, h = i === m.minuteElement;
                        u < s ? (u = r + u + o(!d) + (o(d) && o(!m.amPM)), h && j(void 0, -1, m.hourElement)) : u > r && (u = i === m.hourElement ? u - r - o(!m.amPM) : s, h && j(void 0, 1, m.hourElement)), m.amPM && d && (1 === l ? u + c === 23 : Math.abs(u - c) > l) && (m.amPM.textContent = m.l10n.amPM[o(m.amPM.textContent === m.l10n.amPM[0])]), i.value = a(u)
                    }
                }(e);
                var i = m._input.value;
                I(), Ce(), m._input.value !== i && m._debouncedChange()
            }

            function I() {
                if (void 0 !== m.hourElement && void 0 !== m.minuteElement) {
                    var e, t, n = (parseInt(m.hourElement.value.slice(-2), 10) || 0) % 24,
                        i = (parseInt(m.minuteElement.value, 10) || 0) % 60,
                        s = void 0 !== m.secondElement ? (parseInt(m.secondElement.value, 10) || 0) % 60 : 0;
                    void 0 !== m.amPM && (e = n, t = m.amPM.textContent, n = e % 12 + 12 * o(t === m.l10n.amPM[1]));
                    var a = void 0 !== m.config.minTime || m.config.minDate && m.minDateHasTime && m.latestSelectedDateObj && 0 === C(m.latestSelectedDateObj, m.config.minDate, !0),
                        r = void 0 !== m.config.maxTime || m.config.maxDate && m.maxDateHasTime && m.latestSelectedDateObj && 0 === C(m.latestSelectedDateObj, m.config.maxDate, !0);
                    if (void 0 !== m.config.maxTime && void 0 !== m.config.minTime && m.config.minTime > m.config.maxTime) {
                        var l = E(m.config.minTime.getHours(), m.config.minTime.getMinutes(), m.config.minTime.getSeconds()),
                            c = E(m.config.maxTime.getHours(), m.config.maxTime.getMinutes(), m.config.maxTime.getSeconds()),
                            u = E(n, i, s);
                        if (u > c && u < l) {
                            var d = function (e) {
                                var t = Math.floor(e / 3600), n = (e - 3600 * t) / 60;
                                return [t, n, e - 3600 * t - 60 * n]
                            }(l);
                            n = d[0], i = d[1], s = d[2]
                        }
                    } else {
                        if (r) {
                            var h = void 0 !== m.config.maxTime ? m.config.maxTime : m.config.maxDate;
                            (n = Math.min(n, h.getHours())) === h.getHours() && (i = Math.min(i, h.getMinutes())), i === h.getMinutes() && (s = Math.min(s, h.getSeconds()))
                        }
                        if (a) {
                            var p = void 0 !== m.config.minTime ? m.config.minTime : m.config.minDate;
                            (n = Math.max(n, p.getHours())) === p.getHours() && i < p.getMinutes() && (i = p.getMinutes()), i === p.getMinutes() && (s = Math.max(s, p.getSeconds()))
                        }
                    }
                    $(n, i, s)
                }
            }

            function P(e) {
                var t = e || m.latestSelectedDateObj;
                t && t instanceof Date && $(t.getHours(), t.getMinutes(), t.getSeconds())
            }

            function $(e, t, n) {
                void 0 !== m.latestSelectedDateObj && m.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), m.hourElement && m.minuteElement && !m.isMobile && (m.hourElement.value = a(m.config.time_24hr ? e : (12 + e) % 12 + 12 * o(e % 12 == 0)), m.minuteElement.value = a(t), void 0 !== m.amPM && (m.amPM.textContent = m.l10n.amPM[o(e >= 12)]), void 0 !== m.secondElement && (m.secondElement.value = a(n)))
            }

            function L(e) {
                var t = f(e), n = parseInt(t.value) + (e.delta || 0);
                (n / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(n.toString())) && K(n)
            }

            function _(e, t, n, i) {
                return t instanceof Array ? t.forEach((function (t) {
                    return _(e, t, n, i)
                })) : e instanceof Array ? e.forEach((function (e) {
                    return _(e, t, n, i)
                })) : (e.addEventListener(t, n, i), void m._handlers.push({
                    remove: function () {
                        return e.removeEventListener(t, n, i)
                    }
                }))
            }

            function O() {
                ve("onChange")
            }

            function N(e, t) {
                var n = void 0 !== e ? m.parseDate(e) : m.latestSelectedDateObj || (m.config.minDate && m.config.minDate > m.now ? m.config.minDate : m.config.maxDate && m.config.maxDate < m.now ? m.config.maxDate : m.now),
                    i = m.currentYear, s = m.currentMonth;
                try {
                    void 0 !== n && (m.currentYear = n.getFullYear(), m.currentMonth = n.getMonth())
                } catch (e) {
                    e.message = "Invalid date supplied: " + n, m.config.errorHandler(e)
                }
                t && m.currentYear !== i && (ve("onYearChange"), q()), !t || m.currentYear === i && m.currentMonth === s || ve("onMonthChange"), m.redraw()
            }

            function z(e) {
                var t = f(e);
                ~t.className.indexOf("arrow") && j(e, t.classList.contains("arrowUp") ? 1 : -1)
            }

            function j(e, t, n) {
                var i = e && f(e), s = n || i && i.parentNode && i.parentNode.firstChild, a = ye("increment");
                a.delta = t, s && s.dispatchEvent(a)
            }

            function F(e, t, n, i) {
                var s = ee(t, !0), a = u("span", e, t.getDate().toString());
                return a.dateObj = t, a.$i = i, a.setAttribute("aria-label", m.formatDate(t, m.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === C(t, m.now) && (m.todayDateElem = a, a.classList.add("today"), a.setAttribute("aria-current", "date")), s ? (a.tabIndex = -1, be(t) && (a.classList.add("selected"), m.selectedDateElem = a, "range" === m.config.mode && (c(a, "startRange", m.selectedDates[0] && 0 === C(t, m.selectedDates[0], !0)), c(a, "endRange", m.selectedDates[1] && 0 === C(t, m.selectedDates[1], !0)), "nextMonthDay" === e && a.classList.add("inRange")))) : a.classList.add("flatpickr-disabled"), "range" === m.config.mode && function (e) {
                    return !("range" !== m.config.mode || m.selectedDates.length < 2) && C(e, m.selectedDates[0]) >= 0 && C(e, m.selectedDates[1]) <= 0
                }(t) && !be(t) && a.classList.add("inRange"), m.weekNumbers && 1 === m.config.showMonths && "prevMonthDay" !== e && i % 7 == 6 && m.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + m.config.getWeek(t) + "</span>"), ve("onDayCreate", a), a
            }

            function B(e) {
                e.focus(), "range" === m.config.mode && se(e)
            }

            function H(e) {
                for (var t = e > 0 ? 0 : m.config.showMonths - 1, n = e > 0 ? m.config.showMonths : -1, i = t; i != n; i += e) for (var s = m.daysContainer.children[i], a = e > 0 ? 0 : s.children.length - 1, o = e > 0 ? s.children.length : -1, r = a; r != o; r += e) {
                    var l = s.children[r];
                    if (-1 === l.className.indexOf("hidden") && ee(l.dateObj)) return l
                }
            }

            function R(e, t) {
                var n = v(), i = te(n || document.body),
                    s = void 0 !== e ? e : i ? n : void 0 !== m.selectedDateElem && te(m.selectedDateElem) ? m.selectedDateElem : void 0 !== m.todayDateElem && te(m.todayDateElem) ? m.todayDateElem : H(t > 0 ? 1 : -1);
                void 0 === s ? m._input.focus() : i ? function (e, t) {
                    for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : m.currentMonth, i = t > 0 ? m.config.showMonths : -1, s = t > 0 ? 1 : -1, a = n - m.currentMonth; a != i; a += s) for (var o = m.daysContainer.children[a], r = n - m.currentMonth === a ? e.$i + t : t < 0 ? o.children.length - 1 : 0, l = o.children.length, c = r; c >= 0 && c < l && c != (t > 0 ? l : -1); c += s) {
                        var u = o.children[c];
                        if (-1 === u.className.indexOf("hidden") && ee(u.dateObj) && Math.abs(e.$i - c) >= Math.abs(t)) return B(u)
                    }
                    m.changeMonth(s), R(H(s), 0)
                }(s, t) : B(s)
            }

            function Y(e, t) {
                for (var n = (new Date(e, t, 1).getDay() - m.l10n.firstDayOfWeek + 7) % 7, i = m.utils.getDaysInMonth((t - 1 + 12) % 12, e), s = m.utils.getDaysInMonth(t, e), a = window.document.createDocumentFragment(), o = m.config.showMonths > 1, r = o ? "prevMonthDay hidden" : "prevMonthDay", l = o ? "nextMonthDay hidden" : "nextMonthDay", c = i + 1 - n, d = 0; c <= i; c++, d++) a.appendChild(F("flatpickr-day " + r, new Date(e, t - 1, c), 0, d));
                for (c = 1; c <= s; c++, d++) a.appendChild(F("flatpickr-day", new Date(e, t, c), 0, d));
                for (var h = s + 1; h <= 42 - n && (1 === m.config.showMonths || d % 7 != 0); h++, d++) a.appendChild(F("flatpickr-day " + l, new Date(e, t + 1, h % s), 0, d));
                var p = u("div", "dayContainer");
                return p.appendChild(a), p
            }

            function W() {
                if (void 0 !== m.daysContainer) {
                    d(m.daysContainer), m.weekNumbers && d(m.weekNumbers);
                    for (var e = document.createDocumentFragment(), t = 0; t < m.config.showMonths; t++) {
                        var n = new Date(m.currentYear, m.currentMonth, 1);
                        n.setMonth(m.currentMonth + t), e.appendChild(Y(n.getFullYear(), n.getMonth()))
                    }
                    m.daysContainer.appendChild(e), m.days = m.daysContainer.firstChild, "range" === m.config.mode && 1 === m.selectedDates.length && se()
                }
            }

            function q() {
                if (!(m.config.showMonths > 1 || "dropdown" !== m.config.monthSelectorType)) {
                    var e = function (e) {
                        return !(void 0 !== m.config.minDate && m.currentYear === m.config.minDate.getFullYear() && e < m.config.minDate.getMonth() || void 0 !== m.config.maxDate && m.currentYear === m.config.maxDate.getFullYear() && e > m.config.maxDate.getMonth())
                    };
                    m.monthsDropdownContainer.tabIndex = -1, m.monthsDropdownContainer.innerHTML = "";
                    for (var t = 0; t < 12; t++) if (e(t)) {
                        var n = u("option", "flatpickr-monthDropdown-month");
                        n.value = new Date(m.currentYear, t).getMonth().toString(), n.textContent = g(t, m.config.shorthandCurrentMonth, m.l10n), n.tabIndex = -1, m.currentMonth === t && (n.selected = !0), m.monthsDropdownContainer.appendChild(n)
                    }
                }
            }

            function V() {
                var e, t = u("div", "flatpickr-month"), n = window.document.createDocumentFragment();
                m.config.showMonths > 1 || "static" === m.config.monthSelectorType ? e = u("span", "cur-month") : (m.monthsDropdownContainer = u("select", "flatpickr-monthDropdown-months"), m.monthsDropdownContainer.setAttribute("aria-label", m.l10n.monthAriaLabel), _(m.monthsDropdownContainer, "change", (function (e) {
                    var t = f(e), n = parseInt(t.value, 10);
                    m.changeMonth(n - m.currentMonth), ve("onMonthChange")
                })), q(), e = m.monthsDropdownContainer);
                var i = p("cur-year", {tabindex: "-1"}), s = i.getElementsByTagName("input")[0];
                s.setAttribute("aria-label", m.l10n.yearAriaLabel), m.config.minDate && s.setAttribute("min", m.config.minDate.getFullYear().toString()), m.config.maxDate && (s.setAttribute("max", m.config.maxDate.getFullYear().toString()), s.disabled = !!m.config.minDate && m.config.minDate.getFullYear() === m.config.maxDate.getFullYear());
                var a = u("div", "flatpickr-current-month");
                return a.appendChild(e), a.appendChild(i), n.appendChild(a), t.appendChild(n), {
                    container: t,
                    yearElement: s,
                    monthElement: e
                }
            }

            function X() {
                d(m.monthNav), m.monthNav.appendChild(m.prevMonthNav), m.config.showMonths && (m.yearElements = [], m.monthElements = []);
                for (var e = m.config.showMonths; e--;) {
                    var t = V();
                    m.yearElements.push(t.yearElement), m.monthElements.push(t.monthElement), m.monthNav.appendChild(t.container)
                }
                m.monthNav.appendChild(m.nextMonthNav)
            }

            function G() {
                m.weekdayContainer ? d(m.weekdayContainer) : m.weekdayContainer = u("div", "flatpickr-weekdays");
                for (var e = m.config.showMonths; e--;) {
                    var t = u("div", "flatpickr-weekdaycontainer");
                    m.weekdayContainer.appendChild(t)
                }
                return Z(), m.weekdayContainer
            }

            function Z() {
                if (m.weekdayContainer) {
                    var e = m.l10n.firstDayOfWeek, t = M(m.l10n.weekdays.shorthand);
                    e > 0 && e < t.length && (t = M(t.splice(e, t.length), t.splice(0, e)));
                    for (var n = m.config.showMonths; n--;) m.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
                }
            }

            function U(e, t) {
                void 0 === t && (t = !0);
                var n = t ? e : e - m.currentMonth;
                n < 0 && !0 === m._hidePrevMonthArrow || n > 0 && !0 === m._hideNextMonthArrow || (m.currentMonth += n, (m.currentMonth < 0 || m.currentMonth > 11) && (m.currentYear += m.currentMonth > 11 ? 1 : -1, m.currentMonth = (m.currentMonth + 12) % 12, ve("onYearChange"), q()), W(), ve("onMonthChange"), we())
            }

            function J(e) {
                return m.calendarContainer.contains(e)
            }

            function Q(e) {
                if (m.isOpen && !m.config.inline) {
                    var t = f(e), n = J(t),
                        i = !(t === m.input || t === m.altInput || m.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(m.input) || ~e.path.indexOf(m.altInput)) || n || J(e.relatedTarget)),
                        s = !m.config.ignoredFocusElements.some((function (e) {
                            return e.contains(t)
                        }));
                    i && s && (m.config.allowInput && m.setDate(m._input.value, !1, m.config.altInput ? m.config.altFormat : m.config.dateFormat), void 0 !== m.timeContainer && void 0 !== m.minuteElement && void 0 !== m.hourElement && "" !== m.input.value && void 0 !== m.input.value && D(), m.close(), m.config && "range" === m.config.mode && 1 === m.selectedDates.length && m.clear(!1))
                }
            }

            function K(e) {
                if (!(!e || m.config.minDate && e < m.config.minDate.getFullYear() || m.config.maxDate && e > m.config.maxDate.getFullYear())) {
                    var t = e, n = m.currentYear !== t;
                    m.currentYear = t || m.currentYear, m.config.maxDate && m.currentYear === m.config.maxDate.getFullYear() ? m.currentMonth = Math.min(m.config.maxDate.getMonth(), m.currentMonth) : m.config.minDate && m.currentYear === m.config.minDate.getFullYear() && (m.currentMonth = Math.max(m.config.minDate.getMonth(), m.currentMonth)), n && (m.redraw(), ve("onYearChange"), q())
                }
            }

            function ee(e, t) {
                var n;
                void 0 === t && (t = !0);
                var i = m.parseDate(e, void 0, t);
                if (m.config.minDate && i && C(i, m.config.minDate, void 0 !== t ? t : !m.minDateHasTime) < 0 || m.config.maxDate && i && C(i, m.config.maxDate, void 0 !== t ? t : !m.maxDateHasTime) > 0) return !1;
                if (!m.config.enable && 0 === m.config.disable.length) return !0;
                if (void 0 === i) return !1;
                for (var s = !!m.config.enable, a = null !== (n = m.config.enable) && void 0 !== n ? n : m.config.disable, o = 0, r = void 0; o < a.length; o++) {
                    if ("function" == typeof (r = a[o]) && r(i)) return s;
                    if (r instanceof Date && void 0 !== i && r.getTime() === i.getTime()) return s;
                    if ("string" == typeof r) {
                        var l = m.parseDate(r, void 0, !0);
                        return l && l.getTime() === i.getTime() ? s : !s
                    }
                    if ("object" == typeof r && void 0 !== i && r.from && r.to && i.getTime() >= r.from.getTime() && i.getTime() <= r.to.getTime()) return s
                }
                return !s
            }

            function te(e) {
                return void 0 !== m.daysContainer && -1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && m.daysContainer.contains(e)
            }

            function ne(e) {
                var t = e.target === m._input, n = m._input.value.trimEnd() !== xe();
                !t || !n || e.relatedTarget && J(e.relatedTarget) || m.setDate(m._input.value, !0, e.target === m.altInput ? m.config.altFormat : m.config.dateFormat)
            }

            function ie(e) {
                var t = f(e), i = m.config.wrap ? n.contains(t) : t === m._input, s = m.config.allowInput,
                    a = m.isOpen && (!s || !i), o = m.config.inline && i && !s;
                if (13 === e.keyCode && i) {
                    if (s) return m.setDate(m._input.value, !0, t === m.altInput ? m.config.altFormat : m.config.dateFormat), m.close(), t.blur();
                    m.open()
                } else if (J(t) || a || o) {
                    var r = !!m.timeContainer && m.timeContainer.contains(t);
                    switch (e.keyCode) {
                        case 13:
                            r ? (e.preventDefault(), D(), de()) : he(e);
                            break;
                        case 27:
                            e.preventDefault(), de();
                            break;
                        case 8:
                        case 46:
                            i && !m.config.allowInput && (e.preventDefault(), m.clear());
                            break;
                        case 37:
                        case 39:
                            if (r || i) m.hourElement && m.hourElement.focus(); else {
                                e.preventDefault();
                                var l = v();
                                if (void 0 !== m.daysContainer && (!1 === s || l && te(l))) {
                                    var c = 39 === e.keyCode ? 1 : -1;
                                    e.ctrlKey ? (e.stopPropagation(), U(c), R(H(1), 0)) : R(void 0, c)
                                }
                            }
                            break;
                        case 38:
                        case 40:
                            e.preventDefault();
                            var u = 40 === e.keyCode ? 1 : -1;
                            m.daysContainer && void 0 !== t.$i || t === m.input || t === m.altInput ? e.ctrlKey ? (e.stopPropagation(), K(m.currentYear - u), R(H(1), 0)) : r || R(void 0, 7 * u) : t === m.currentYearElement ? K(m.currentYear - u) : m.config.enableTime && (!r && m.hourElement && m.hourElement.focus(), D(e), m._debouncedChange());
                            break;
                        case 9:
                            if (r) {
                                var d = [m.hourElement, m.minuteElement, m.secondElement, m.amPM].concat(m.pluginElements).filter((function (e) {
                                    return e
                                })), h = d.indexOf(t);
                                if (-1 !== h) {
                                    var p = d[h + (e.shiftKey ? -1 : 1)];
                                    e.preventDefault(), (p || m._input).focus()
                                }
                            } else !m.config.noCalendar && m.daysContainer && m.daysContainer.contains(t) && e.shiftKey && (e.preventDefault(), m._input.focus())
                    }
                }
                if (void 0 !== m.amPM && t === m.amPM) switch (e.key) {
                    case m.l10n.amPM[0].charAt(0):
                    case m.l10n.amPM[0].charAt(0).toLowerCase():
                        m.amPM.textContent = m.l10n.amPM[0], I(), Ce();
                        break;
                    case m.l10n.amPM[1].charAt(0):
                    case m.l10n.amPM[1].charAt(0).toLowerCase():
                        m.amPM.textContent = m.l10n.amPM[1], I(), Ce()
                }
                (i || J(t)) && ve("onKeyDown", e)
            }

            function se(e, t) {
                if (void 0 === t && (t = "flatpickr-day"), 1 === m.selectedDates.length && (!e || e.classList.contains(t) && !e.classList.contains("flatpickr-disabled"))) {
                    for (var n = e ? e.dateObj.getTime() : m.days.firstElementChild.dateObj.getTime(), i = m.parseDate(m.selectedDates[0], void 0, !0).getTime(), s = Math.min(n, m.selectedDates[0].getTime()), a = Math.max(n, m.selectedDates[0].getTime()), o = !1, r = 0, l = 0, c = s; c < a; c += 864e5) ee(new Date(c), !0) || (o = o || c > s && c < a, c < i && (!r || c > r) ? r = c : c > i && (!l || c < l) && (l = c));
                    Array.from(m.rContainer.querySelectorAll("*:nth-child(-n+" + m.config.showMonths + ") > ." + t)).forEach((function (t) {
                        var s, a, c, u = t.dateObj.getTime(), d = r > 0 && u < r || l > 0 && u > l;
                        if (d) return t.classList.add("notAllowed"), void ["inRange", "startRange", "endRange"].forEach((function (e) {
                            t.classList.remove(e)
                        }));
                        o && !d || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function (e) {
                            t.classList.remove(e)
                        })), void 0 !== e && (e.classList.add(n <= m.selectedDates[0].getTime() ? "startRange" : "endRange"), i < n && u === i ? t.classList.add("startRange") : i > n && u === i && t.classList.add("endRange"), u >= r && (0 === l || u <= l) && (a = i, c = n, (s = u) > Math.min(a, c) && s < Math.max(a, c)) && t.classList.add("inRange")))
                    }))
                }
            }

            function ae() {
                !m.isOpen || m.config.static || m.config.inline || ce()
            }

            function oe(e) {
                return function (t) {
                    var n = m.config["_" + e + "Date"] = m.parseDate(t, m.config.dateFormat),
                        i = m.config["_" + ("min" === e ? "max" : "min") + "Date"];
                    void 0 !== n && (m["min" === e ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0), m.selectedDates && (m.selectedDates = m.selectedDates.filter((function (e) {
                        return ee(e)
                    })), m.selectedDates.length || "min" !== e || P(n), Ce()), m.daysContainer && (ue(), void 0 !== n ? m.currentYearElement[e] = n.getFullYear().toString() : m.currentYearElement.removeAttribute(e), m.currentYearElement.disabled = !!i && void 0 !== n && i.getFullYear() === n.getFullYear())
                }
            }

            function re() {
                return m.config.wrap ? n.querySelector("[data-input]") : n
            }

            function le() {
                "object" != typeof m.config.locale && void 0 === A.l10ns[m.config.locale] && m.config.errorHandler(new Error("flatpickr: invalid locale " + m.config.locale)), m.l10n = S(S({}, A.l10ns.default), "object" == typeof m.config.locale ? m.config.locale : "default" !== m.config.locale ? A.l10ns[m.config.locale] : void 0), y.D = "(" + m.l10n.weekdays.shorthand.join("|") + ")", y.l = "(" + m.l10n.weekdays.longhand.join("|") + ")", y.M = "(" + m.l10n.months.shorthand.join("|") + ")", y.F = "(" + m.l10n.months.longhand.join("|") + ")", y.K = "(" + m.l10n.amPM[0] + "|" + m.l10n.amPM[1] + "|" + m.l10n.amPM[0].toLowerCase() + "|" + m.l10n.amPM[1].toLowerCase() + ")", void 0 === S(S({}, i), JSON.parse(JSON.stringify(n.dataset || {}))).time_24hr && void 0 === A.defaultConfig.time_24hr && (m.config.time_24hr = m.l10n.time_24hr), m.formatDate = w(m), m.parseDate = x({
                    config: m.config,
                    l10n: m.l10n
                })
            }

            function ce(e) {
                if ("function" != typeof m.config.position) {
                    if (void 0 !== m.calendarContainer) {
                        ve("onPreCalendarPosition");
                        var t = e || m._positionElement,
                            n = Array.prototype.reduce.call(m.calendarContainer.children, (function (e, t) {
                                return e + t.offsetHeight
                            }), 0), i = m.calendarContainer.offsetWidth, s = m.config.position.split(" "), a = s[0],
                            o = s.length > 1 ? s[1] : null, r = t.getBoundingClientRect(),
                            l = window.innerHeight - r.bottom, u = "above" === a || "below" !== a && l < n && r.top > n,
                            d = window.pageYOffset + r.top + (u ? -n - 2 : t.offsetHeight + 2);
                        if (c(m.calendarContainer, "arrowTop", !u), c(m.calendarContainer, "arrowBottom", u), !m.config.inline) {
                            var h = window.pageXOffset + r.left, p = !1, f = !1;
                            "center" === o ? (h -= (i - r.width) / 2, p = !0) : "right" === o && (h -= i - r.width, f = !0), c(m.calendarContainer, "arrowLeft", !p && !f), c(m.calendarContainer, "arrowCenter", p), c(m.calendarContainer, "arrowRight", f);
                            var g = window.document.body.offsetWidth - (window.pageXOffset + r.right),
                                v = h + i > window.document.body.offsetWidth,
                                y = g + i > window.document.body.offsetWidth;
                            if (c(m.calendarContainer, "rightMost", v), !m.config.static) if (m.calendarContainer.style.top = d + "px", v) if (y) {
                                var b = function () {
                                    for (var e = null, t = 0; t < document.styleSheets.length; t++) {
                                        var n = document.styleSheets[t];
                                        if (n.cssRules) {
                                            try {
                                                n.cssRules
                                            } catch (e) {
                                                continue
                                            }
                                            e = n;
                                            break
                                        }
                                    }
                                    return null != e ? e : (i = document.createElement("style"), document.head.appendChild(i), i.sheet);
                                    var i
                                }();
                                if (void 0 === b) return;
                                var w = window.document.body.offsetWidth, x = Math.max(0, w / 2 - i / 2),
                                    C = b.cssRules.length, E = "{left:" + r.left + "px;right:auto;}";
                                c(m.calendarContainer, "rightMost", !1), c(m.calendarContainer, "centerMost", !0), b.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + E, C), m.calendarContainer.style.left = x + "px", m.calendarContainer.style.right = "auto"
                            } else m.calendarContainer.style.left = "auto", m.calendarContainer.style.right = g + "px"; else m.calendarContainer.style.left = h + "px", m.calendarContainer.style.right = "auto"
                        }
                    }
                } else m.config.position(m, e)
            }

            function ue() {
                m.config.noCalendar || m.isMobile || (q(), we(), W())
            }

            function de() {
                m._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(m.close, 0) : m.close()
            }

            function he(e) {
                e.preventDefault(), e.stopPropagation();
                var t = h(f(e), (function (e) {
                    return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
                }));
                if (void 0 !== t) {
                    var n = t, i = m.latestSelectedDateObj = new Date(n.dateObj.getTime()),
                        s = (i.getMonth() < m.currentMonth || i.getMonth() > m.currentMonth + m.config.showMonths - 1) && "range" !== m.config.mode;
                    if (m.selectedDateElem = n, "single" === m.config.mode) m.selectedDates = [i]; else if ("multiple" === m.config.mode) {
                        var a = be(i);
                        a ? m.selectedDates.splice(parseInt(a), 1) : m.selectedDates.push(i)
                    } else "range" === m.config.mode && (2 === m.selectedDates.length && m.clear(!1, !1), m.latestSelectedDateObj = i, m.selectedDates.push(i), 0 !== C(i, m.selectedDates[0], !0) && m.selectedDates.sort((function (e, t) {
                        return e.getTime() - t.getTime()
                    })));
                    if (I(), s) {
                        var o = m.currentYear !== i.getFullYear();
                        m.currentYear = i.getFullYear(), m.currentMonth = i.getMonth(), o && (ve("onYearChange"), q()), ve("onMonthChange")
                    }
                    if (we(), W(), Ce(), s || "range" === m.config.mode || 1 !== m.config.showMonths ? void 0 !== m.selectedDateElem && void 0 === m.hourElement && m.selectedDateElem && m.selectedDateElem.focus() : B(n), void 0 !== m.hourElement && void 0 !== m.hourElement && m.hourElement.focus(), m.config.closeOnSelect) {
                        var r = "single" === m.config.mode && !m.config.enableTime,
                            l = "range" === m.config.mode && 2 === m.selectedDates.length && !m.config.enableTime;
                        (r || l) && de()
                    }
                    O()
                }
            }

            m.parseDate = x({
                config: m.config,
                l10n: m.l10n
            }), m._handlers = [], m.pluginElements = [], m.loadedPlugins = [], m._bind = _, m._setHoursFromDate = P, m._positionCalendar = ce, m.changeMonth = U, m.changeYear = K, m.clear = function (e, t) {
                if (void 0 === e && (e = !0), void 0 === t && (t = !0), m.input.value = "", void 0 !== m.altInput && (m.altInput.value = ""), void 0 !== m.mobileInput && (m.mobileInput.value = ""), m.selectedDates = [], m.latestSelectedDateObj = void 0, !0 === t && (m.currentYear = m._initialDate.getFullYear(), m.currentMonth = m._initialDate.getMonth()), !0 === m.config.enableTime) {
                    var n = k(m.config);
                    $(n.hours, n.minutes, n.seconds)
                }
                m.redraw(), e && ve("onChange")
            }, m.close = function () {
                m.isOpen = !1, m.isMobile || (void 0 !== m.calendarContainer && m.calendarContainer.classList.remove("open"), void 0 !== m._input && m._input.classList.remove("active")), ve("onClose")
            }, m.onMouseOver = se, m._createElement = u, m.createDay = F, m.destroy = function () {
                void 0 !== m.config && ve("onDestroy");
                for (var e = m._handlers.length; e--;) m._handlers[e].remove();
                if (m._handlers = [], m.mobileInput) m.mobileInput.parentNode && m.mobileInput.parentNode.removeChild(m.mobileInput), m.mobileInput = void 0; else if (m.calendarContainer && m.calendarContainer.parentNode) if (m.config.static && m.calendarContainer.parentNode) {
                    var t = m.calendarContainer.parentNode;
                    if (t.lastChild && t.removeChild(t.lastChild), t.parentNode) {
                        for (; t.firstChild;) t.parentNode.insertBefore(t.firstChild, t);
                        t.parentNode.removeChild(t)
                    }
                } else m.calendarContainer.parentNode.removeChild(m.calendarContainer);
                m.altInput && (m.input.type = "text", m.altInput.parentNode && m.altInput.parentNode.removeChild(m.altInput), delete m.altInput), m.input && (m.input.type = m.input._type, m.input.classList.remove("flatpickr-input"), m.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function (e) {
                    try {
                        delete m[e]
                    } catch (e) {
                    }
                }))
            }, m.isEnabled = ee, m.jumpToDate = N, m.updateValue = Ce, m.open = function (e, t) {
                if (void 0 === t && (t = m._positionElement), !0 === m.isMobile) {
                    if (e) {
                        e.preventDefault();
                        var n = f(e);
                        n && n.blur()
                    }
                    return void 0 !== m.mobileInput && (m.mobileInput.focus(), m.mobileInput.click()), void ve("onOpen")
                }
                if (!m._input.disabled && !m.config.inline) {
                    var i = m.isOpen;
                    m.isOpen = !0, i || (m.calendarContainer.classList.add("open"), m._input.classList.add("active"), ve("onOpen"), ce(t)), !0 === m.config.enableTime && !0 === m.config.noCalendar && (!1 !== m.config.allowInput || void 0 !== e && m.timeContainer.contains(e.relatedTarget) || setTimeout((function () {
                        return m.hourElement.select()
                    }), 50))
                }
            }, m.redraw = ue, m.set = function (t, n) {
                if (null !== t && "object" == typeof t) for (var i in Object.assign(m.config, t), t) void 0 !== pe[i] && pe[i].forEach((function (e) {
                    return e()
                })); else m.config[t] = n, void 0 !== pe[t] ? pe[t].forEach((function (e) {
                    return e()
                })) : e.indexOf(t) > -1 && (m.config[t] = l(n));
                m.redraw(), Ce(!0)
            }, m.setDate = function (e, t, n) {
                if (void 0 === t && (t = !1), void 0 === n && (n = m.config.dateFormat), 0 !== e && !e || e instanceof Array && 0 === e.length) return m.clear(t);
                fe(e, n), m.latestSelectedDateObj = m.selectedDates[m.selectedDates.length - 1], m.redraw(), N(void 0, t), P(), 0 === m.selectedDates.length && m.clear(!1), Ce(t), t && ve("onChange")
            }, m.toggle = function (e) {
                if (!0 === m.isOpen) return m.close();
                m.open(e)
            };
            var pe = {
                locale: [le, Z],
                showMonths: [X, T, G],
                minDate: [N],
                maxDate: [N],
                positionElement: [ge],
                clickOpens: [function () {
                    !0 === m.config.clickOpens ? (_(m._input, "focus", m.open), _(m._input, "click", m.open)) : (m._input.removeEventListener("focus", m.open), m._input.removeEventListener("click", m.open))
                }]
            };

            function fe(e, t) {
                var n = [];
                if (e instanceof Array) n = e.map((function (e) {
                    return m.parseDate(e, t)
                })); else if (e instanceof Date || "number" == typeof e) n = [m.parseDate(e, t)]; else if ("string" == typeof e) switch (m.config.mode) {
                    case"single":
                    case"time":
                        n = [m.parseDate(e, t)];
                        break;
                    case"multiple":
                        n = e.split(m.config.conjunction).map((function (e) {
                            return m.parseDate(e, t)
                        }));
                        break;
                    case"range":
                        n = e.split(m.l10n.rangeSeparator).map((function (e) {
                            return m.parseDate(e, t)
                        }))
                } else m.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                m.selectedDates = m.config.allowInvalidPreload ? n : n.filter((function (e) {
                    return e instanceof Date && ee(e, !1)
                })), "range" === m.config.mode && m.selectedDates.sort((function (e, t) {
                    return e.getTime() - t.getTime()
                }))
            }

            function me(e) {
                return e.slice().map((function (e) {
                    return "string" == typeof e || "number" == typeof e || e instanceof Date ? m.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                        from: m.parseDate(e.from, void 0),
                        to: m.parseDate(e.to, void 0)
                    } : e
                })).filter((function (e) {
                    return e
                }))
            }

            function ge() {
                m._positionElement = m.config.positionElement || m._input
            }

            function ve(e, t) {
                if (void 0 !== m.config) {
                    var n = m.config[e];
                    if (void 0 !== n && n.length > 0) for (var i = 0; n[i] && i < n.length; i++) n[i](m.selectedDates, m.input.value, m, t);
                    "onChange" === e && (m.input.dispatchEvent(ye("change")), m.input.dispatchEvent(ye("input")))
                }
            }

            function ye(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !0), t
            }

            function be(e) {
                for (var t = 0; t < m.selectedDates.length; t++) {
                    var n = m.selectedDates[t];
                    if (n instanceof Date && 0 === C(n, e)) return "" + t
                }
                return !1
            }

            function we() {
                m.config.noCalendar || m.isMobile || !m.monthNav || (m.yearElements.forEach((function (e, t) {
                    var n = new Date(m.currentYear, m.currentMonth, 1);
                    n.setMonth(m.currentMonth + t), m.config.showMonths > 1 || "static" === m.config.monthSelectorType ? m.monthElements[t].textContent = g(n.getMonth(), m.config.shorthandCurrentMonth, m.l10n) + " " : m.monthsDropdownContainer.value = n.getMonth().toString(), e.value = n.getFullYear().toString()
                })), m._hidePrevMonthArrow = void 0 !== m.config.minDate && (m.currentYear === m.config.minDate.getFullYear() ? m.currentMonth <= m.config.minDate.getMonth() : m.currentYear < m.config.minDate.getFullYear()), m._hideNextMonthArrow = void 0 !== m.config.maxDate && (m.currentYear === m.config.maxDate.getFullYear() ? m.currentMonth + 1 > m.config.maxDate.getMonth() : m.currentYear > m.config.maxDate.getFullYear()))
            }

            function xe(e) {
                var t = e || (m.config.altInput ? m.config.altFormat : m.config.dateFormat);
                return m.selectedDates.map((function (e) {
                    return m.formatDate(e, t)
                })).filter((function (e, t, n) {
                    return "range" !== m.config.mode || m.config.enableTime || n.indexOf(e) === t
                })).join("range" !== m.config.mode ? m.config.conjunction : m.l10n.rangeSeparator)
            }

            function Ce(e) {
                void 0 === e && (e = !0), void 0 !== m.mobileInput && m.mobileFormatStr && (m.mobileInput.value = void 0 !== m.latestSelectedDateObj ? m.formatDate(m.latestSelectedDateObj, m.mobileFormatStr) : ""), m.input.value = xe(m.config.dateFormat), void 0 !== m.altInput && (m.altInput.value = xe(m.config.altFormat)), !1 !== e && ve("onValueUpdate")
            }

            function Ee(e) {
                var t = f(e), n = m.prevMonthNav.contains(t), i = m.nextMonthNav.contains(t);
                n || i ? U(n ? -1 : 1) : m.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? m.changeYear(m.currentYear + 1) : t.classList.contains("arrowDown") && m.changeYear(m.currentYear - 1)
            }

            return function () {
                m.element = m.input = n, m.isOpen = !1, function () {
                    var s = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                        a = S(S({}, JSON.parse(JSON.stringify(n.dataset || {}))), i), o = {};
                    m.config.parseDate = a.parseDate, m.config.formatDate = a.formatDate, Object.defineProperty(m.config, "enable", {
                        get: function () {
                            return m.config._enable
                        }, set: function (e) {
                            m.config._enable = me(e)
                        }
                    }), Object.defineProperty(m.config, "disable", {
                        get: function () {
                            return m.config._disable
                        }, set: function (e) {
                            m.config._disable = me(e)
                        }
                    });
                    var r = "time" === a.mode;
                    if (!a.dateFormat && (a.enableTime || r)) {
                        var c = A.defaultConfig.dateFormat || t.dateFormat;
                        o.dateFormat = a.noCalendar || r ? "H:i" + (a.enableSeconds ? ":S" : "") : c + " H:i" + (a.enableSeconds ? ":S" : "")
                    }
                    if (a.altInput && (a.enableTime || r) && !a.altFormat) {
                        var u = A.defaultConfig.altFormat || t.altFormat;
                        o.altFormat = a.noCalendar || r ? "h:i" + (a.enableSeconds ? ":S K" : " K") : u + " h:i" + (a.enableSeconds ? ":S" : "") + " K"
                    }
                    Object.defineProperty(m.config, "minDate", {
                        get: function () {
                            return m.config._minDate
                        }, set: oe("min")
                    }), Object.defineProperty(m.config, "maxDate", {
                        get: function () {
                            return m.config._maxDate
                        }, set: oe("max")
                    });
                    var d = function (e) {
                        return function (t) {
                            m.config["min" === e ? "_minTime" : "_maxTime"] = m.parseDate(t, "H:i:S")
                        }
                    };
                    Object.defineProperty(m.config, "minTime", {
                        get: function () {
                            return m.config._minTime
                        }, set: d("min")
                    }), Object.defineProperty(m.config, "maxTime", {
                        get: function () {
                            return m.config._maxTime
                        }, set: d("max")
                    }), "time" === a.mode && (m.config.noCalendar = !0, m.config.enableTime = !0), Object.assign(m.config, o, a);
                    for (var h = 0; h < s.length; h++) m.config[s[h]] = !0 === m.config[s[h]] || "true" === m.config[s[h]];
                    for (e.filter((function (e) {
                        return void 0 !== m.config[e]
                    })).forEach((function (e) {
                        m.config[e] = l(m.config[e] || []).map(b)
                    })), m.isMobile = !m.config.disableMobile && !m.config.inline && "single" === m.config.mode && !m.config.disable.length && !m.config.enable && !m.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), h = 0; h < m.config.plugins.length; h++) {
                        var p = m.config.plugins[h](m) || {};
                        for (var f in p) e.indexOf(f) > -1 ? m.config[f] = l(p[f]).map(b).concat(m.config[f]) : void 0 === a[f] && (m.config[f] = p[f])
                    }
                    a.altInputClass || (m.config.altInputClass = re().className + " " + m.config.altInputClass), ve("onParseConfig")
                }(), le(), m.input = re(), m.input ? (m.input._type = m.input.type, m.input.type = "text", m.input.classList.add("flatpickr-input"), m._input = m.input, m.config.altInput && (m.altInput = u(m.input.nodeName, m.config.altInputClass), m._input = m.altInput, m.altInput.placeholder = m.input.placeholder, m.altInput.disabled = m.input.disabled, m.altInput.required = m.input.required, m.altInput.tabIndex = m.input.tabIndex, m.altInput.type = "text", m.input.setAttribute("type", "hidden"), !m.config.static && m.input.parentNode && m.input.parentNode.insertBefore(m.altInput, m.input.nextSibling)), m.config.allowInput || m._input.setAttribute("readonly", "readonly"), ge()) : m.config.errorHandler(new Error("Invalid input element specified")), function () {
                    m.selectedDates = [], m.now = m.parseDate(m.config.now) || new Date;
                    var e = m.config.defaultDate || ("INPUT" !== m.input.nodeName && "TEXTAREA" !== m.input.nodeName || !m.input.placeholder || m.input.value !== m.input.placeholder ? m.input.value : null);
                    e && fe(e, m.config.dateFormat), m._initialDate = m.selectedDates.length > 0 ? m.selectedDates[0] : m.config.minDate && m.config.minDate.getTime() > m.now.getTime() ? m.config.minDate : m.config.maxDate && m.config.maxDate.getTime() < m.now.getTime() ? m.config.maxDate : m.now, m.currentYear = m._initialDate.getFullYear(), m.currentMonth = m._initialDate.getMonth(), m.selectedDates.length > 0 && (m.latestSelectedDateObj = m.selectedDates[0]), void 0 !== m.config.minTime && (m.config.minTime = m.parseDate(m.config.minTime, "H:i")), void 0 !== m.config.maxTime && (m.config.maxTime = m.parseDate(m.config.maxTime, "H:i")), m.minDateHasTime = !!m.config.minDate && (m.config.minDate.getHours() > 0 || m.config.minDate.getMinutes() > 0 || m.config.minDate.getSeconds() > 0), m.maxDateHasTime = !!m.config.maxDate && (m.config.maxDate.getHours() > 0 || m.config.maxDate.getMinutes() > 0 || m.config.maxDate.getSeconds() > 0)
                }(), m.utils = {
                    getDaysInMonth: function (e, t) {
                        return void 0 === e && (e = m.currentMonth), void 0 === t && (t = m.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : m.l10n.daysInMonth[e]
                    }
                }, m.isMobile || function () {
                    var e = window.document.createDocumentFragment();
                    if (m.calendarContainer = u("div", "flatpickr-calendar"), m.calendarContainer.tabIndex = -1, !m.config.noCalendar) {
                        if (e.appendChild((m.monthNav = u("div", "flatpickr-months"), m.yearElements = [], m.monthElements = [], m.prevMonthNav = u("span", "flatpickr-prev-month"), m.prevMonthNav.innerHTML = m.config.prevArrow, m.nextMonthNav = u("span", "flatpickr-next-month"), m.nextMonthNav.innerHTML = m.config.nextArrow, X(), Object.defineProperty(m, "_hidePrevMonthArrow", {
                            get: function () {
                                return m.__hidePrevMonthArrow
                            }, set: function (e) {
                                m.__hidePrevMonthArrow !== e && (c(m.prevMonthNav, "flatpickr-disabled", e), m.__hidePrevMonthArrow = e)
                            }
                        }), Object.defineProperty(m, "_hideNextMonthArrow", {
                            get: function () {
                                return m.__hideNextMonthArrow
                            }, set: function (e) {
                                m.__hideNextMonthArrow !== e && (c(m.nextMonthNav, "flatpickr-disabled", e), m.__hideNextMonthArrow = e)
                            }
                        }), m.currentYearElement = m.yearElements[0], we(), m.monthNav)), m.innerContainer = u("div", "flatpickr-innerContainer"), m.config.weekNumbers) {
                            var t = function () {
                                m.calendarContainer.classList.add("hasWeeks");
                                var e = u("div", "flatpickr-weekwrapper");
                                e.appendChild(u("span", "flatpickr-weekday", m.l10n.weekAbbreviation));
                                var t = u("div", "flatpickr-weeks");
                                return e.appendChild(t), {weekWrapper: e, weekNumbers: t}
                            }(), n = t.weekWrapper, i = t.weekNumbers;
                            m.innerContainer.appendChild(n), m.weekNumbers = i, m.weekWrapper = n
                        }
                        m.rContainer = u("div", "flatpickr-rContainer"), m.rContainer.appendChild(G()), m.daysContainer || (m.daysContainer = u("div", "flatpickr-days"), m.daysContainer.tabIndex = -1), W(), m.rContainer.appendChild(m.daysContainer), m.innerContainer.appendChild(m.rContainer), e.appendChild(m.innerContainer)
                    }
                    m.config.enableTime && e.appendChild(function () {
                        m.calendarContainer.classList.add("hasTime"), m.config.noCalendar && m.calendarContainer.classList.add("noCalendar");
                        var e = k(m.config);
                        m.timeContainer = u("div", "flatpickr-time"), m.timeContainer.tabIndex = -1;
                        var t = u("span", "flatpickr-time-separator", ":"),
                            n = p("flatpickr-hour", {"aria-label": m.l10n.hourAriaLabel});
                        m.hourElement = n.getElementsByTagName("input")[0];
                        var i = p("flatpickr-minute", {"aria-label": m.l10n.minuteAriaLabel});
                        if (m.minuteElement = i.getElementsByTagName("input")[0], m.hourElement.tabIndex = m.minuteElement.tabIndex = -1, m.hourElement.value = a(m.latestSelectedDateObj ? m.latestSelectedDateObj.getHours() : m.config.time_24hr ? e.hours : function (e) {
                            switch (e % 24) {
                                case 0:
                                case 12:
                                    return 12;
                                default:
                                    return e % 12
                            }
                        }(e.hours)), m.minuteElement.value = a(m.latestSelectedDateObj ? m.latestSelectedDateObj.getMinutes() : e.minutes), m.hourElement.setAttribute("step", m.config.hourIncrement.toString()), m.minuteElement.setAttribute("step", m.config.minuteIncrement.toString()), m.hourElement.setAttribute("min", m.config.time_24hr ? "0" : "1"), m.hourElement.setAttribute("max", m.config.time_24hr ? "23" : "12"), m.hourElement.setAttribute("maxlength", "2"), m.minuteElement.setAttribute("min", "0"), m.minuteElement.setAttribute("max", "59"), m.minuteElement.setAttribute("maxlength", "2"), m.timeContainer.appendChild(n), m.timeContainer.appendChild(t), m.timeContainer.appendChild(i), m.config.time_24hr && m.timeContainer.classList.add("time24hr"), m.config.enableSeconds) {
                            m.timeContainer.classList.add("hasSeconds");
                            var s = p("flatpickr-second");
                            m.secondElement = s.getElementsByTagName("input")[0], m.secondElement.value = a(m.latestSelectedDateObj ? m.latestSelectedDateObj.getSeconds() : e.seconds), m.secondElement.setAttribute("step", m.minuteElement.getAttribute("step")), m.secondElement.setAttribute("min", "0"), m.secondElement.setAttribute("max", "59"), m.secondElement.setAttribute("maxlength", "2"), m.timeContainer.appendChild(u("span", "flatpickr-time-separator", ":")), m.timeContainer.appendChild(s)
                        }
                        return m.config.time_24hr || (m.amPM = u("span", "flatpickr-am-pm", m.l10n.amPM[o((m.latestSelectedDateObj ? m.hourElement.value : m.config.defaultHour) > 11)]), m.amPM.title = m.l10n.toggleTitle, m.amPM.tabIndex = -1, m.timeContainer.appendChild(m.amPM)), m.timeContainer
                    }()), c(m.calendarContainer, "rangeMode", "range" === m.config.mode), c(m.calendarContainer, "animate", !0 === m.config.animate), c(m.calendarContainer, "multiMonth", m.config.showMonths > 1), m.calendarContainer.appendChild(e);
                    var s = void 0 !== m.config.appendTo && void 0 !== m.config.appendTo.nodeType;
                    if ((m.config.inline || m.config.static) && (m.calendarContainer.classList.add(m.config.inline ? "inline" : "static"), m.config.inline && (!s && m.element.parentNode ? m.element.parentNode.insertBefore(m.calendarContainer, m._input.nextSibling) : void 0 !== m.config.appendTo && m.config.appendTo.appendChild(m.calendarContainer)), m.config.static)) {
                        var r = u("div", "flatpickr-wrapper");
                        m.element.parentNode && m.element.parentNode.insertBefore(r, m.element), r.appendChild(m.element), m.altInput && r.appendChild(m.altInput), r.appendChild(m.calendarContainer)
                    }
                    m.config.static || m.config.inline || (void 0 !== m.config.appendTo ? m.config.appendTo : window.document.body).appendChild(m.calendarContainer)
                }(), function () {
                    if (m.config.wrap && ["open", "close", "toggle", "clear"].forEach((function (e) {
                        Array.prototype.forEach.call(m.element.querySelectorAll("[data-" + e + "]"), (function (t) {
                            return _(t, "click", m[e])
                        }))
                    })), m.isMobile) !function () {
                        var e = m.config.enableTime ? m.config.noCalendar ? "time" : "datetime-local" : "date";
                        m.mobileInput = u("input", m.input.className + " flatpickr-mobile"), m.mobileInput.tabIndex = 1, m.mobileInput.type = e, m.mobileInput.disabled = m.input.disabled, m.mobileInput.required = m.input.required, m.mobileInput.placeholder = m.input.placeholder, m.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", m.selectedDates.length > 0 && (m.mobileInput.defaultValue = m.mobileInput.value = m.formatDate(m.selectedDates[0], m.mobileFormatStr)), m.config.minDate && (m.mobileInput.min = m.formatDate(m.config.minDate, "Y-m-d")), m.config.maxDate && (m.mobileInput.max = m.formatDate(m.config.maxDate, "Y-m-d")), m.input.getAttribute("step") && (m.mobileInput.step = String(m.input.getAttribute("step"))), m.input.type = "hidden", void 0 !== m.altInput && (m.altInput.type = "hidden");
                        try {
                            m.input.parentNode && m.input.parentNode.insertBefore(m.mobileInput, m.input.nextSibling)
                        } catch (e) {
                        }
                        _(m.mobileInput, "change", (function (e) {
                            m.setDate(f(e).value, !1, m.mobileFormatStr), ve("onChange"), ve("onClose")
                        }))
                    }(); else {
                        var e = r(ae, 50);
                        if (m._debouncedChange = r(O, 300), m.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && _(m.daysContainer, "mouseover", (function (e) {
                            "range" === m.config.mode && se(f(e))
                        })), _(m._input, "keydown", ie), void 0 !== m.calendarContainer && _(m.calendarContainer, "keydown", ie), m.config.inline || m.config.static || _(window, "resize", e), void 0 !== window.ontouchstart ? _(window.document, "touchstart", Q) : _(window.document, "mousedown", Q), _(window.document, "focus", Q, {capture: !0}), !0 === m.config.clickOpens && (_(m._input, "focus", m.open), _(m._input, "click", m.open)), void 0 !== m.daysContainer && (_(m.monthNav, "click", Ee), _(m.monthNav, ["keyup", "increment"], L), _(m.daysContainer, "click", he)), void 0 !== m.timeContainer && void 0 !== m.minuteElement && void 0 !== m.hourElement) {
                            _(m.timeContainer, ["increment"], D), _(m.timeContainer, "blur", D, {capture: !0}), _(m.timeContainer, "click", z), _([m.hourElement, m.minuteElement], ["focus", "click"], (function (e) {
                                return f(e).select()
                            })), void 0 !== m.secondElement && _(m.secondElement, "focus", (function () {
                                return m.secondElement && m.secondElement.select()
                            })), void 0 !== m.amPM && _(m.amPM, "click", (function (e) {
                                D(e)
                            }))
                        }
                        m.config.allowInput && _(m._input, "blur", ne)
                    }
                }(), (m.selectedDates.length || m.config.noCalendar) && (m.config.enableTime && P(m.config.noCalendar ? m.latestSelectedDateObj : void 0), Ce(!1)), T();
                var s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                !m.isMobile && s && ce(), ve("onReady")
            }(), m
        }

        function D(e, t) {
            for (var n = Array.prototype.slice.call(e).filter((function (e) {
                return e instanceof HTMLElement
            })), i = [], s = 0; s < n.length; s++) {
                var a = n[s];
                try {
                    if (null !== a.getAttribute("data-fp-omit")) continue;
                    void 0 !== a._flatpickr && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = T(a, t || {}), i.push(a._flatpickr)
                } catch (e) {
                    console.error(e)
                }
            }
            return 1 === i.length ? i[0] : i
        }

        "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (e) {
            return D(this, e)
        }, HTMLElement.prototype.flatpickr = function (e) {
            return D([this], e)
        });
        var A = function (e, t) {
            return "string" == typeof e ? D(window.document.querySelectorAll(e), t) : e instanceof Node ? D([e], t) : D(e, t)
        };
        A.defaultConfig = {}, A.l10ns = {en: S({}, s), default: S({}, s)}, A.localize = function (e) {
            A.l10ns.default = S(S({}, A.l10ns.default), e)
        }, A.setDefaults = function (e) {
            A.defaultConfig = S(S({}, A.defaultConfig), e)
        }, A.parseDate = x({}), A.formatDate = w({}), A.compareDates = C, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function (e) {
            return D(this, e)
        }), Date.prototype.fp_incr = function (e) {
            return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
        }, "undefined" != typeof window && (window.flatpickr = A);
        const I = A;

        function P(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function $(e = {}, t = {}) {
            Object.keys(t).forEach((n => {
                void 0 === e[n] ? e[n] = t[n] : P(t[n]) && P(e[n]) && Object.keys(t[n]).length > 0 && $(e[n], t[n])
            }))
        }

        n(809);
        const L = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {
                }
            }),
            createElement: () => ({
                children: [], childNodes: [], style: {}, setAttribute() {
                }, getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function _() {
            const e = "undefined" != typeof document ? document : {};
            return $(e, L), e
        }

        const O = {
            document: L,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle: () => ({getPropertyValue: () => ""}),
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function N() {
            const e = "undefined" != typeof window ? window : {};
            return $(e, O), e
        }

        class z extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t, set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function j(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...j(e)) : t.push(e)
            })), t
        }

        function F(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function B(e, t) {
            const n = N(), i = _();
            let s = [];
            if (!t && e instanceof z) return e;
            if (!e) return new z(s);
            if ("string" == typeof e) {
                const n = e.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    let e = "div";
                    0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                    const t = i.createElement(e);
                    t.innerHTML = n;
                    for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e])
                } else s = function (e, t) {
                    if ("string" != typeof e) return [e];
                    const n = [], i = t.querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                    return n
                }(e.trim(), t || i)
            } else if (e.nodeType || e === n || e === i) s.push(e); else if (Array.isArray(e)) {
                if (e instanceof z) return e;
                s = e
            }
            return new z(function (e) {
                const t = [];
                for (let n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(s))
        }

        B.fn = z.prototype;
        const H = "resize scroll".split(" ");

        function R(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) H.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : B(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }

        R("click"), R("blur"), R("focus"), R("focusin"), R("focusout"), R("keyup"), R("keydown"), R("keypress"), R("submit"), R("change"), R("mousedown"), R("mousemove"), R("mouseup"), R("mouseenter"), R("mouseleave"), R("mouseout"), R("mouseover"), R("touchstart"), R("touchend"), R("touchmove"), R("resize"), R("scroll");
        const Y = {
            addClass: function (...e) {
                const t = j(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            }, removeClass: function (...e) {
                const t = j(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            }, hasClass: function (...e) {
                const t = j(e.map((e => e.split(" "))));
                return F(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            }, toggleClass: function (...e) {
                const t = j(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            }, attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(e, t); else for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
                return this
            }, removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            }, transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            }, transition: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            }, on: function (...e) {
                let [t, n, i, s] = e;

                function a(e) {
                    const t = e.target;
                    if (!t) return;
                    const s = e.target.dom7EventData || [];
                    if (s.indexOf(e) < 0 && s.unshift(e), B(t).is(n)) i.apply(t, s); else {
                        const e = B(t).parents();
                        for (let t = 0; t < e.length; t += 1) B(e[t]).is(n) && i.apply(e[t], s)
                    }
                }

                function o(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                }

                "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
                const r = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (n) for (l = 0; l < r.length; l += 1) {
                        const e = r[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: i,
                            proxyListener: a
                        }), t.addEventListener(e, a, s)
                    } else for (l = 0; l < r.length; l += 1) {
                        const e = r[l];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: i,
                            proxyListener: o
                        }), t.addEventListener(e, o, s)
                    }
                }
                return this
            }, off: function (...e) {
                let [t, n, i, s] = e;
                "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
                const a = t.split(" ");
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const a = this[e];
                        let o;
                        if (!n && a.dom7Listeners ? o = a.dom7Listeners[t] : n && a.dom7LiveListeners && (o = a.dom7LiveListeners[t]), o && o.length) for (let e = o.length - 1; e >= 0; e -= 1) {
                            const n = o[e];
                            i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (a.removeEventListener(t, n.proxyListener, s), o.splice(e, 1)) : i || (a.removeEventListener(t, n.proxyListener, s), o.splice(e, 1))
                        }
                    }
                }
                return this
            }, trigger: function (...e) {
                const t = N(), n = e[0].split(" "), i = e[1];
                for (let s = 0; s < n.length; s += 1) {
                    const a = n[s];
                    for (let n = 0; n < this.length; n += 1) {
                        const s = this[n];
                        if (t.CustomEvent) {
                            const n = new t.CustomEvent(a, {detail: i, bubbles: !0, cancelable: !0});
                            s.dom7EventData = e.filter(((e, t) => t > 0)), s.dispatchEvent(n), s.dom7EventData = [], delete s.dom7EventData
                        }
                    }
                }
                return this
            }, transitionEnd: function (e) {
                const t = this;
                return e && t.on("transitionend", (function n(i) {
                    i.target === this && (e.call(this, i), t.off("transitionend", n))
                })), this
            }, outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            }, outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            }, styles: function () {
                const e = N();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            }, offset: function () {
                if (this.length > 0) {
                    const e = N(), t = _(), n = this[0], i = n.getBoundingClientRect(), s = t.body,
                        a = n.clientTop || s.clientTop || 0, o = n.clientLeft || s.clientLeft || 0,
                        r = n === e ? e.scrollY : n.scrollTop, l = n === e ? e.scrollX : n.scrollLeft;
                    return {top: i.top + r - a, left: i.left + l - o}
                }
                return null
            }, css: function (e, t) {
                const n = N();
                let i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (const t in e) this[i].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                }
                return this
            }, each: function (e) {
                return e ? (this.forEach(((t, n) => {
                    e.apply(t, [t, n])
                })), this) : this
            }, html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            }, text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            }, is: function (e) {
                const t = N(), n = _(), i = this[0];
                let s, a;
                if (!i || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (s = B(e), a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                    return !1
                }
                if (e === n) return i === n;
                if (e === t) return i === t;
                if (e.nodeType || e instanceof z) {
                    for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                    return !1
                }
                return !1
            }, index: function () {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            }, eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return B([]);
                if (e < 0) {
                    const n = t + e;
                    return B(n < 0 ? [] : [this[n]])
                }
                return B([this[e]])
            }, append: function (...e) {
                let t;
                const n = _();
                for (let i = 0; i < e.length; i += 1) {
                    t = e[i];
                    for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                        const i = n.createElement("div");
                        for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                    } else if (t instanceof z) for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]); else this[e].appendChild(t)
                }
                return this
            }, prepend: function (e) {
                const t = _();
                let n, i;
                for (n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                    const s = t.createElement("div");
                    for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
                } else if (e instanceof z) for (i = 0; i < e.length; i += 1) this[n].insertBefore(e[i], this[n].childNodes[0]); else this[n].insertBefore(e, this[n].childNodes[0]);
                return this
            }, next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && B(this[0].nextElementSibling).is(e) ? B([this[0].nextElementSibling]) : B([]) : this[0].nextElementSibling ? B([this[0].nextElementSibling]) : B([]) : B([])
            }, nextAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return B([]);
                for (; n.nextElementSibling;) {
                    const i = n.nextElementSibling;
                    e ? B(i).is(e) && t.push(i) : t.push(i), n = i
                }
                return B(t)
            }, prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && B(t.previousElementSibling).is(e) ? B([t.previousElementSibling]) : B([]) : t.previousElementSibling ? B([t.previousElementSibling]) : B([])
                }
                return B([])
            }, prevAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return B([]);
                for (; n.previousElementSibling;) {
                    const i = n.previousElementSibling;
                    e ? B(i).is(e) && t.push(i) : t.push(i), n = i
                }
                return B(t)
            }, parent: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? B(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
                return B(t)
            }, parents: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    let i = this[n].parentNode;
                    for (; i;) e ? B(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                }
                return B(t)
            }, closest: function (e) {
                let t = this;
                return void 0 === e ? B([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            }, find: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) t.push(i[e])
                }
                return B(t)
            }, children: function (e) {
                const t = [];
                for (let n = 0; n < this.length; n += 1) {
                    const i = this[n].children;
                    for (let n = 0; n < i.length; n += 1) e && !B(i[n]).is(e) || t.push(i[n])
                }
                return B(t)
            }, filter: function (e) {
                return B(F(this, e))
            }, remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(Y).forEach((e => {
            Object.defineProperty(B.fn, e, {value: Y[e], writable: !0})
        }));
        const W = B;

        function q(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function V() {
            return Date.now()
        }

        function X(e, t) {
            void 0 === t && (t = "x");
            const n = N();
            let i, s, a;
            const o = function (e) {
                const t = N();
                let n;
                return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
            }(e);
            return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
        }

        function G(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function Z(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
        }

        function U() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let n = 1; n < arguments.length; n += 1) {
                const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                if (null != i && !Z(i)) {
                    const n = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, s = n.length; t < s; t += 1) {
                        const s = n[t], a = Object.getOwnPropertyDescriptor(i, s);
                        void 0 !== a && a.enumerable && (G(e[s]) && G(i[s]) ? i[s].__swiper__ ? e[s] = i[s] : U(e[s], i[s]) : !G(e[s]) && G(i[s]) ? (e[s] = {}, i[s].__swiper__ ? e[s] = i[s] : U(e[s], i[s])) : e[s] = i[s])
                    }
                }
            }
            return e
        }

        function J(e, t, n) {
            e.style.setProperty(t, n)
        }

        function Q(e) {
            let {swiper: t, targetPosition: n, side: i} = e;
            const s = N(), a = -t.translate;
            let o, r = null;
            const l = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
            const c = n > a ? "next" : "prev", u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                d = () => {
                    o = (new Date).getTime(), null === r && (r = o);
                    const e = Math.max(Math.min((o - r) / l, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
                    let h = a + c * (n - a);
                    if (u(h, n) && (h = n), t.wrapperEl.scrollTo({[i]: h}), u(h, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[i]: h})
                    })), void s.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = s.requestAnimationFrame(d)
                };
            d()
        }

        let K, ee, te;

        function ne() {
            return K || (K = function () {
                const e = N(), t = _();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function () {
                        let t = !1;
                        try {
                            const n = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, n)
                        } catch (e) {
                        }
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), K
        }

        const ie = {
            on(e, t, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const s = n ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
                })), i
            }, once(e, t, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function s() {
                    i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    t.apply(i, a)
                }

                return s.__emitterProxy = t, i.on(e, s, n)
            }, onAny(e, t) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof e) return n;
                const i = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            }, off(e, t) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((i, s) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(s, 1)
                    }))
                })), n) : n
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, n, i;
                for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++) a[o] = arguments[o];
                return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], n = a.slice(1, a.length), i = e) : (t = a[0].events, n = a[0].data, i = a[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(i, [t, ...n])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(i, n)
                    }))
                })), e
            }
        }, se = {
            updateSize: function () {
                const e = this;
                let t, n;
                const i = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }

                const i = e.params, {$wrapperEl: s, size: a, rtlTranslate: o, wrongRTL: r} = e,
                    l = e.virtual && i.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                    u = s.children(`.${e.params.slideClass}`), d = l ? e.virtual.slides.length : u.length;
                let h = [];
                const p = [], f = [];
                let m = i.slidesOffsetBefore;
                "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                let g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length, y = e.slidesGrid.length;
                let b = i.spaceBetween, w = -m, x = 0, C = 0;
                if (void 0 === a) return;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, o ? u.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : u.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), i.centeredSlides && i.cssMode && (J(e.wrapperEl, "--swiper-centered-offset-before", ""), J(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const E = i.grid && i.grid.rows > 1 && e.grid;
                let k;
                E && e.grid.initSlides(d);
                const S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
                for (let s = 0; s < d; s += 1) {
                    k = 0;
                    const o = u.eq(s);
                    if (E && e.grid.updateSlide(s, o, d, t), "none" !== o.css("display")) {
                        if ("auto" === i.slidesPerView) {
                            S && (u[s].style[t("width")] = "");
                            const a = getComputedStyle(o[0]), r = o[0].style.transform, l = o[0].style.webkitTransform;
                            if (r && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), i.roundLengths) k = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0); else {
                                const e = n(a, "width"), t = n(a, "padding-left"), i = n(a, "padding-right"),
                                    s = n(a, "margin-left"), r = n(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) k = e + s + r; else {
                                    const {clientWidth: n, offsetWidth: a} = o[0];
                                    k = e + t + i + s + r + (a - n)
                                }
                            }
                            r && (o[0].style.transform = r), l && (o[0].style.webkitTransform = l), i.roundLengths && (k = Math.floor(k))
                        } else k = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (k = Math.floor(k)), u[s] && (u[s].style[t("width")] = `${k}px`);
                        u[s] && (u[s].swiperSlideSize = k), f.push(k), i.centeredSlides ? (w = w + k / 2 + x / 2 + b, 0 === x && 0 !== s && (w = w - a / 2 - b), 0 === s && (w = w - a / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), C % i.slidesPerGroup == 0 && h.push(w), p.push(w)) : (i.roundLengths && (w = Math.floor(w)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && h.push(w), p.push(w), w = w + k + b), e.virtualSize += k + b, x = k, C += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + g, o && r && ("slide" === i.effect || "coverflow" === i.effect) && s.css({width: `${e.virtualSize + i.spaceBetween}px`}), i.setWrapperSize && s.css({[t("width")]: `${e.virtualSize + i.spaceBetween}px`}), E && e.grid.updateWrapperSize(k, h, t), !i.centeredSlides) {
                    const t = [];
                    for (let n = 0; n < h.length; n += 1) {
                        let s = h[n];
                        i.roundLengths && (s = Math.floor(s)), h[n] <= e.virtualSize - a && t.push(s)
                    }
                    h = t, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a)
                }
                if (0 === h.length && (h = [0]), 0 !== i.spaceBetween) {
                    const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    u.filter(((e, t) => !i.cssMode || t !== u.length - 1)).css({[n]: `${b}px`})
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                    })), e -= i.spaceBetween;
                    const t = e - a;
                    h = h.map((e => e < 0 ? -m : e > t ? t + g : e))
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach((t => {
                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                    })), e -= i.spaceBetween, e < a) {
                        const t = (a - e) / 2;
                        h.forEach(((e, n) => {
                            h[n] = e - t
                        })), p.forEach(((e, n) => {
                            p[n] = e + t
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: u,
                    snapGrid: h,
                    slidesGrid: p,
                    slidesSizesGrid: f
                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    J(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"), J(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                }
                if (d !== c && e.emit("slidesLengthChange"), h.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const t = `${i.containerModifierClass}backface-hidden`, n = e.$el.hasClass(t);
                    d <= i.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, n = [], i = t.virtual && t.params.virtual.enabled;
                let s, a = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const o = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || W([])).each((e => {
                    n.push(e)
                })); else for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length && !i) break;
                    n.push(o(e))
                } else n.push(o(t.activeIndex));
                for (s = 0; s < n.length; s += 1) if (void 0 !== n[s]) {
                    const e = n[s].offsetHeight;
                    a = e > a ? e : a
                }
                (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides;
                for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, n = t.params, {slides: i, rtlTranslate: s, snapGrid: a} = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let o = -e;
                s && (o = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < i.length; e += 1) {
                    const r = i[e];
                    let l = r.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
                    const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + n.spaceBetween),
                        u = (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + n.spaceBetween),
                        d = -(o - l), h = d + t.slidesSizesGrid[e];
                    (d >= 0 && d < t.size - 1 || h > 1 && h <= t.size || d <= 0 && h >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), r.progress = s ? -c : c, r.originalProgress = s ? -u : u
                }
                t.visibleSlides = W(t.visibleSlides)
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params, i = t.maxTranslate() - t.minTranslate();
                let {progress: s, isBeginning: a, isEnd: o} = t;
                const r = a, l = o;
                0 === i ? (s = 0, a = !0, o = !0) : (s = (e - t.minTranslate()) / i, a = s <= 0, o = s >= 1), Object.assign(t, {
                    progress: s,
                    isBeginning: a,
                    isEnd: o
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !r && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (r && !a || l && !o) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: n, $wrapperEl: i, activeIndex: s, realIndex: a} = e,
                    o = e.virtual && n.virtual.enabled;
                let r;
                t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), r = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), r.addClass(n.slideActiveClass), n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass));
                let l = r.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                let c = r.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
                    slidesGrid: i,
                    snapGrid: s,
                    params: a,
                    activeIndex: o,
                    realIndex: r,
                    snapIndex: l
                } = t;
                let c, u = e;
                if (void 0 === u) {
                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? u = e : n >= i[e] && n < i[e + 1] && (u = e + 1) : n >= i[e] && (u = e);
                    a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (s.indexOf(n) >= 0) c = s.indexOf(n); else {
                    const e = Math.min(a.slidesPerGroupSkip, u);
                    c = e + Math.floor((u - e) / a.slidesPerGroup)
                }
                if (c >= s.length && (c = s.length - 1), u === o) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: d,
                    previousIndex: o,
                    activeIndex: u
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), r !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }, updateClickedSlide: function (e) {
                const t = this, n = t.params, i = W(e).closest(`.${n.slideClass}`)[0];
                let s, a = !1;
                if (i) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === i) {
                    a = !0, s = e;
                    break
                }
                if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(W(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        }, ae = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {params: t, rtlTranslate: n, translate: i, $wrapperEl: s} = this;
                if (t.virtualTranslate) return n ? -i : i;
                if (t.cssMode) return i;
                let a = X(s[0], e);
                return n && (a = -a), a || 0
            }, setTranslate: function (e, t) {
                const n = this, {rtlTranslate: i, params: s, $wrapperEl: a, wrapperEl: o, progress: r} = n;
                let l, c = 0, u = 0;
                n.isHorizontal() ? c = i ? -e : e : u = e, s.roundLengths && (c = Math.floor(c), u = Math.floor(u)), s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -u : s.virtualTranslate || a.transform(`translate3d(${c}px, ${u}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : u;
                const d = n.maxTranslate() - n.minTranslate();
                l = 0 === d ? 0 : (e - n.minTranslate()) / d, l !== r && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e, t, n, i, s) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                const a = this, {params: o, wrapperEl: r} = a;
                if (a.animating && o.preventInteractionOnTransition) return !1;
                const l = a.minTranslate(), c = a.maxTranslate();
                let u;
                if (u = i && e > l ? l : i && e < c ? c : e, a.updateProgress(u), o.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -u; else {
                        if (!a.support.smoothScroll) return Q({
                            swiper: a,
                            targetPosition: -u,
                            side: e ? "left" : "top"
                        }), !0;
                        r.scrollTo({[e ? "left" : "top"]: -u, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
            }
        };

        function oe(e) {
            let {swiper: t, runCallbacks: n, direction: i, step: s} = e;
            const {activeIndex: a, previousIndex: o} = t;
            let r = i;
            if (r || (r = a > o ? "next" : a < o ? "prev" : "reset"), t.emit(`transition${s}`), n && a !== o) {
                if ("reset" === r) return void t.emit(`slideResetTransition${s}`);
                t.emit(`slideChangeTransition${s}`), "next" === r ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
            }
        }

        const re = {
            slideTo: function (e, t, n, i, s) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let o = e;
                o < 0 && (o = 0);
                const {
                    params: r,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: u,
                    activeIndex: d,
                    rtlTranslate: h,
                    wrapperEl: p,
                    enabled: f
                } = a;
                if (a.animating && r.preventInteractionOnTransition || !f && !i && !s) return !1;
                const m = Math.min(a.params.slidesPerGroupSkip, o);
                let g = m + Math.floor((o - m) / a.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1), (d || r.initialSlide || 0) === (u || 0) && n && a.emit("beforeSlideChangeStart");
                const v = -l[g];
                if (a.updateProgress(v), r.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v), n = Math.floor(100 * c[e]), i = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= n && t < i - (i - n) / 2 ? o = e : t >= n && t < i && (o = e + 1) : t >= n && (o = e)
                }
                if (a.initialized && o !== d) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (d || 0) !== o) return !1
                }
                let y;
                if (y = o > d ? "next" : o < d ? "prev" : "reset", h && -v === a.translate || !h && v === a.translate) return a.updateActiveIndex(o), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(v), "reset" !== y && (a.transitionStart(n, y), a.transitionEnd(n, y)), !1;
                if (r.cssMode) {
                    const e = a.isHorizontal(), n = h ? v : -v;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                        }))
                    } else {
                        if (!a.support.smoothScroll) return Q({
                            swiper: a,
                            targetPosition: n,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, y), 0 === t ? a.transitionEnd(n, y) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, y))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, n, i) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const s = this;
                let a = e;
                return s.params.loop && (a += s.loopedSlides), s.slideTo(a, t, n, i)
            }, slideNext: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const i = this, {animating: s, enabled: a, params: o} = i;
                if (!a) return i;
                let r = o.slidesPerGroup;
                "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : r;
                if (o.loop) {
                    if (s && o.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return o.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
            }, slidePrev: function (e, t, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const i = this, {params: s, animating: a, snapGrid: o, slidesGrid: r, rtlTranslate: l, enabled: c} = i;
                if (!c) return i;
                if (s.loop) {
                    if (a && s.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function u(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const d = u(l ? i.translate : -i.translate), h = o.map((e => u(e)));
                let p = o[h.indexOf(d) - 1];
                if (void 0 === p && s.cssMode) {
                    let e;
                    o.forEach(((t, n) => {
                        d >= t && (e = n)
                    })), void 0 !== e && (p = o[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== p && (f = r.indexOf(p), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning) {
                    const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(s, e, t, n)
                }
                return i.slideTo(f, e, t, n)
            }, slideReset: function (e, t, n) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
            }, slideToClosest: function (e, t, n, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                const s = this;
                let a = s.activeIndex;
                const o = Math.min(s.params.slidesPerGroupSkip, a),
                    r = o + Math.floor((a - o) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[r]) {
                    const e = s.snapGrid[r];
                    l - e > (s.snapGrid[r + 1] - e) * i && (a += s.params.slidesPerGroup)
                } else {
                    const e = s.snapGrid[r - 1];
                    l - e <= (s.snapGrid[r] - e) * i && (a -= s.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, s.slidesGrid.length - 1), s.slideTo(a, e, t, n)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, $wrapperEl: n} = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let s, a = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    s = parseInt(W(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), q((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), q((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a)
                } else e.slideTo(a)
            }
        }, le = {
            loopCreate: function () {
                const e = this, t = _(), {params: n, $wrapperEl: i} = e,
                    s = i.children().length > 0 ? W(i.children()[0].parentNode) : i;
                s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                let a = s.children(`.${n.slideClass}`);
                if (n.loopFillGroupWithBlank) {
                    const e = n.slidesPerGroup - a.length % n.slidesPerGroup;
                    if (e !== n.slidesPerGroup) {
                        for (let i = 0; i < e; i += 1) {
                            const e = W(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                            s.append(e)
                        }
                        a = s.children(`.${n.slideClass}`)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                const o = [], r = [];
                a.each(((t, n) => {
                    const i = W(t);
                    n < e.loopedSlides && r.push(t), n < a.length && n >= a.length - e.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", n)
                }));
                for (let e = 0; e < r.length; e += 1) s.append(W(r[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (let e = o.length - 1; e >= 0; e -= 1) s.prepend(W(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            }, loopFix: function () {
                const e = this;
                e.emit("beforeLoopFix");
                const {
                    activeIndex: t,
                    slides: n,
                    loopedSlides: i,
                    allowSlidePrev: s,
                    allowSlideNext: a,
                    snapGrid: o,
                    rtlTranslate: r
                } = e;
                let l;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const c = -o[t] - e.getTranslate();
                t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((r ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((r ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix")
            }, loopDestroy: function () {
                const {$wrapperEl: e, params: t, slides: n} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
        };

        function ce(e) {
            const t = this, n = _(), i = N(), s = t.touchEventsData, {params: a, touches: o, enabled: r} = t;
            if (!r) return;
            if (t.animating && a.preventInteractionOnTransition) return;
            !t.animating && a.cssMode && a.loop && t.loopFix();
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            let c = W(l.target);
            if ("wrapper" === a.touchEventsTarget && !c.closest(t.wrapperEl).length) return;
            if (s.isTouchEvent = "touchstart" === l.type, !s.isTouchEvent && "which" in l && 3 === l.which) return;
            if (!s.isTouchEvent && "button" in l && l.button > 0) return;
            if (s.isTouched && s.isMoved) return;
            a.noSwipingClass && "" !== a.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (c = W(e.path[0]));
            const u = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                d = !(!l.target || !l.target.shadowRoot);
            if (a.noSwiping && (d ? function (e, t) {
                return void 0 === t && (t = this), function t(n) {
                    if (!n || n === _() || n === N()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const i = n.closest(e);
                    return i || n.getRootNode ? i || t(n.getRootNode().host) : null
                }(t)
            }(u, c[0]) : c.closest(u)[0])) return void (t.allowClick = !0);
            if (a.swipeHandler && !c.closest(a.swipeHandler)[0]) return;
            o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
            const h = o.currentX, p = o.currentY, f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                m = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
            if (f && (h <= m || h >= i.innerWidth - m)) {
                if ("prevent" !== f) return;
                e.preventDefault()
            }
            if (Object.assign(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = h, o.startY = p, s.touchStartTime = V(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                let e = !0;
                c.is(s.focusableElements) && (e = !1, "SELECT" === c[0].nodeName && (s.isTouched = !1)), n.activeElement && W(n.activeElement).is(s.focusableElements) && n.activeElement !== c[0] && n.activeElement.blur();
                const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                !a.touchStartForcePreventDefault && !i || c[0].isContentEditable || l.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
        }

        function ue(e) {
            const t = _(), n = this, i = n.touchEventsData, {params: s, touches: a, rtlTranslate: o, enabled: r} = n;
            if (!r) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l));
            if (i.isTouchEvent && "touchmove" !== l.type) return;
            const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                u = "touchmove" === l.type ? c.pageX : l.pageX, d = "touchmove" === l.type ? c.pageY : l.pageY;
            if (l.preventedByNestedSwiper) return a.startX = u, void (a.startY = d);
            if (!n.allowTouchMove) return W(l.target).is(i.focusableElements) || (n.allowClick = !1), void (i.isTouched && (Object.assign(a, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d
            }), i.touchStartTime = V()));
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
                if (d < a.startY && n.translate <= n.maxTranslate() || d > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
            } else if (u < a.startX && n.translate <= n.maxTranslate() || u > a.startX && n.translate >= n.minTranslate()) return;
            if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && W(l.target).is(i.focusableElements)) return i.isMoved = !0, void (n.allowClick = !1);
            if (i.allowTouchCallbacks && n.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
            a.currentX = u, a.currentY = d;
            const h = a.currentX - a.startX, p = a.currentY - a.startY;
            if (n.params.threshold && Math.sqrt(h ** 2 + p ** 2) < n.params.threshold) return;
            if (void 0 === i.isScrolling) {
                let e;
                n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : h * h + p * p >= 25 && (e = 180 * Math.atan2(Math.abs(p), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
            }
            if (i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
            if (!i.startMoving) return;
            n.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0;
            let f = n.isHorizontal() ? h : p;
            a.diff = f, f *= s.touchRatio, o && (f = -f), n.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
            let m = !0, g = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > n.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + f) ** g)) : f < 0 && i.currentTranslate < n.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - f) ** g)), m && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
        }

        function de(e) {
            const t = this, n = t.touchEventsData, {
                params: i,
                touches: s,
                rtlTranslate: a,
                slidesGrid: o,
                enabled: r
            } = t;
            if (!r) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const c = V(), u = c - n.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), u < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (n.lastClickTime = V(), q((() => {
                t.destroyed || (t.allowClick = !0)
            })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
            let d;
            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
            if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: d});
            let h = 0, p = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== o[e + t] ? d >= o[e] && d < o[e + t] && (h = e, p = o[e + t] - o[e]) : d >= o[e] && (h = e, p = o[o.length - 1] - o[o.length - 2])
            }
            let f = null, m = null;
            i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
            const g = (d - o[h]) / p, v = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (u > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : h + v) : t.slideTo(h)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(h + v) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(h))
            } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : h)) : l.target === t.navigation.nextEl ? t.slideTo(h + v) : t.slideTo(h)
            }
        }

        function he() {
            const e = this, {params: t, el: n} = e;
            if (n && 0 === n.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: s, snapGrid: a} = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function pe(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function fe() {
            const e = this, {wrapperEl: t, rtlTranslate: n, enabled: i} = e;
            if (!i) return;
            let s;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const a = e.maxTranslate() - e.minTranslate();
            s = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        let me = !1;

        function ge() {
        }

        const ve = (e, t) => {
            const n = _(), {params: i, touchEvents: s, el: a, wrapperEl: o, device: r, support: l} = e, c = !!i.nested,
                u = "on" === t ? "addEventListener" : "removeEventListener", d = t;
            if (l.touch) {
                const t = !("touchstart" !== s.start || !l.passiveListener || !i.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                a[u](s.start, e.onTouchStart, t), a[u](s.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: c
                } : c), a[u](s.end, e.onTouchEnd, t), s.cancel && a[u](s.cancel, e.onTouchEnd, t)
            } else a[u](s.start, e.onTouchStart, !1), n[u](s.move, e.onTouchMove, c), n[u](s.end, e.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && a[u]("click", e.onClick, !0), i.cssMode && o[u]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", he, !0) : e[d]("observerUpdate", he, !0)
        }, ye = {
            attachEvents: function () {
                const e = this, t = _(), {params: n, support: i} = e;
                e.onTouchStart = ce.bind(e), e.onTouchMove = ue.bind(e), e.onTouchEnd = de.bind(e), n.cssMode && (e.onScroll = fe.bind(e)), e.onClick = pe.bind(e), i.touch && !me && (t.addEventListener("touchstart", ge), me = !0), ve(e, "on")
            }, detachEvents: function () {
                ve(this, "off")
            }
        }, be = (e, t) => e.grid && t.grid && t.grid.rows > 1, we = {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: n, loopedSlides: i = 0, params: s, $el: a} = e,
                    o = s.breakpoints;
                if (!o || o && 0 === Object.keys(o).length) return;
                const r = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                if (!r || e.currentBreakpoint === r) return;
                const l = (r in o ? o[r] : void 0) || e.originalParams, c = be(e, s), u = be(e, l), d = s.enabled;
                c && !u ? (a.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && u && (a.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && a.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    const n = s[t] && s[t].enabled, i = l[t] && l[t].enabled;
                    n && !i && e[t].disable(), !n && i && e[t].enable()
                }));
                const h = l.direction && l.direction !== s.direction,
                    p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
                h && n && e.changeDirection(), U(e.params, l);
                const f = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), d && !f ? e.disable() : !d && f && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", l), p && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            }, getBreakpoint: function (e, t, n) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                let i = !1;
                const s = N(), a = "window" === t ? s.innerHeight : n.clientHeight, o = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: a * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < o.length; e += 1) {
                    const {point: a, value: r} = o[e];
                    "window" === t ? s.matchMedia(`(min-width: ${r}px)`).matches && (i = a) : r <= n.clientWidth && (i = a)
                }
                return i || "max"
            }
        }, xe = {
            addClasses: function () {
                const e = this, {classNames: t, params: n, rtl: i, $el: s, device: a, support: o} = e,
                    r = function (e, t) {
                        const n = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((i => {
                                e[i] && n.push(t + i)
                            })) : "string" == typeof e && n.push(t + e)
                        })), n
                    }(["initialized", n.direction, {"pointer-events": !o.touch}, {"free-mode": e.params.freeMode && n.freeMode.enabled}, {autoheight: n.autoHeight}, {rtl: i}, {grid: n.grid && n.grid.rows > 1}, {"grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill}, {android: a.android}, {ios: a.ios}, {"css-mode": n.cssMode}, {centered: n.cssMode && n.centeredSlides}, {"watch-progress": n.watchSlidesProgress}], n.containerModifierClass);
                t.push(...r), s.addClass([...t].join(" ")), e.emitContainerClasses()
            }, removeClasses: function () {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        }, Ce = {
            loadImage: function (e, t, n, i, s, a) {
                const o = N();
                let r;

                function l() {
                    a && a()
                }

                W(e).parent("picture")[0] || e.complete && s ? l() : t ? (r = new o.Image, r.onload = l, r.onerror = l, i && (r.sizes = i), n && (r.srcset = n), t && (r.src = t)) : l()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                    const i = e.imagesToLoad[n];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }, Ee = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function ke(e, t) {
            return function (n) {
                void 0 === n && (n = {});
                const i = Object.keys(n)[0], s = n[i];
                "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {auto: !0}), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {enabled: !0}), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), U(t, n)) : U(t, n)) : U(t, n)
            }
        }

        const Se = {
            eventsEmitter: ie, update: se, translate: ae, transition: {
                setTransition: function (e, t) {
                    const n = this;
                    n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    const n = this, {params: i} = n;
                    i.cssMode || (i.autoHeight && n.updateAutoHeight(), oe({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    const n = this, {params: i} = n;
                    n.animating = !1, i.cssMode || (n.setTransition(0), oe({
                        swiper: n,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            }, slide: re, loop: le, grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab"
                }, unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            }, events: ye, breakpoints: we, checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: i} = n;
                    if (i) {
                        const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > n
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            }, classes: xe, images: Ce
        }, Me = {};

        class Te {
            constructor() {
                let e, t;
                for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = U({}, t), e && !t.el && (t.el = e), t.el && W(t.el).length > 1) {
                    const e = [];
                    return W(t.el).each((n => {
                        const i = U({}, t, {el: n});
                        e.push(new Te(i))
                    })), e
                }
                const a = this;
                var o;
                a.__swiper__ = !0, a.support = ne(), a.device = (void 0 === (o = {userAgent: t.userAgent}) && (o = {}), ee || (ee = function (e) {
                    let {userAgent: t} = void 0 === e ? {} : e;
                    const n = ne(), i = N(), s = i.navigator.platform, a = t || i.navigator.userAgent,
                        o = {ios: !1, android: !1}, r = i.screen.width, l = i.screen.height,
                        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = a.match(/(iPad).*OS\s([\d_]+)/);
                    const d = a.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        p = "Win32" === s;
                    let f = "MacIntel" === s;
                    return !u && f && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${r}x${l}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), c && !p && (o.os = "android", o.android = !0), (u || h || d) && (o.os = "ios", o.ios = !0), o
                }(o)), ee), a.browser = (te || (te = function () {
                    const e = N();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), te), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                const r = {};
                a.modules.forEach((e => {
                    e({
                        swiper: a,
                        extendParams: ke(t, r),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a)
                    })
                }));
                const l = U({}, Ee, r);
                return a.params = U({}, l, Me, t), a.originalParams = U({}, a.params), a.passedParams = U({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                    a.on(e, a.params.on[e])
                })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = W, Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: W(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === a.params.direction,
                    isVertical: () => "vertical" === a.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEvents: function () {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return a.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, a.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: V(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.emit("_swiper"), a.params.init && a.init(), a
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const n = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = n.minTranslate(), s = (n.maxTranslate() - i) * e + i;
                n.translateTo(s, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((n => {
                    const i = e.getSlideClasses(n);
                    t.push({slideEl: n, classNames: i}), e.emit("_slideClass", n, i)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: n, slides: i, slidesGrid: s, slidesSizesGrid: a, size: o, activeIndex: r} = this;
                let l = 1;
                if (n.centeredSlides) {
                    let e, t = i[r].swiperSlideSize;
                    for (let n = r + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0));
                    for (let n = r - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0))
                } else if ("current" === e) for (let e = r + 1; e < i.length; e += 1) (t ? s[e] + a[e] - s[r] < o : s[e] - s[r] < o) && (l += 1); else for (let e = r - 1; e >= 0; e -= 1) s[r] - s[e] < o && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: n} = e;

                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let s;
                n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const n = this, i = n.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const n = W(e || t.params.el);
                if (!(e = n[0])) return !1;
                e.swiper = t;
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let s = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = W(e.shadowRoot.querySelector(i()));
                        return t.children = e => n.children(e), t
                    }
                    return n.children ? n.children(i()) : W(n).children(i())
                })();
                if (0 === s.length && t.params.createElements) {
                    const e = _().createElement("div");
                    s = W(e), e.className = t.params.wrapperClass, n.append(e), n.children(`.${t.params.slideClass}`).each((e => {
                        s.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: n,
                    el: e,
                    $wrapperEl: s,
                    wrapperEl: s[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                    wrongRTL: "-webkit-box" === s.css("display")
                }), !0
            }

            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const n = this, {params: i, $el: s, $wrapperEl: a, slides: o} = n;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                    n.off(e)
                })), !1 !== e && (n.$el[0].swiper = null, function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(n)), n.destroyed = !0), null
            }

            static extendDefaults(e) {
                U(Me, e)
            }

            static get extendedDefaults() {
                return Me
            }

            static get defaults() {
                return Ee
            }

            static installModule(e) {
                Te.prototype.__modules__ || (Te.prototype.__modules__ = []);
                const t = Te.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => Te.installModule(e))), Te) : (Te.installModule(e), Te)
            }
        }

        Object.keys(Se).forEach((e => {
            Object.keys(Se[e]).forEach((t => {
                Te.prototype[t] = Se[e][t]
            }))
        })), Te.use([function (e) {
            let {swiper: t, on: n, emit: i} = e;
            const s = N();
            let a = null, o = null;
            const r = () => {
                t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
            }, l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange")
            };
            n("init", (() => {
                t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                    o = s.requestAnimationFrame((() => {
                        const {width: n, height: i} = t;
                        let s = n, a = i;
                        e.forEach((e => {
                            let {contentBoxSize: n, contentRect: i, target: o} = e;
                            o && o !== t.el || (s = i ? i.width : (n[0] || n).inlineSize, a = i ? i.height : (n[0] || n).blockSize)
                        })), s === n && a === i || r()
                    }))
                })), a.observe(t.el)) : (s.addEventListener("resize", r), s.addEventListener("orientationchange", l))
            })), n("destroy", (() => {
                o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", r), s.removeEventListener("orientationchange", l)
            }))
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = [], o = N(), r = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function () {
                        s("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
                }));
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.push(n)
            };
            n({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = t.$el.parents();
                        for (let t = 0; t < e.length; t += 1) r(e[t])
                    }
                    r(t.$el[0], {childList: t.params.observeSlideChildren}), r(t.$wrapperEl[0], {attributes: !1})
                }
            })), i("destroy", (() => {
                a.forEach((e => {
                    e.disconnect()
                })), a.splice(0, a.length)
            }))
        }]);
        const De = Te;

        function Ae(e, t, n, i) {
            const s = _();
            return e.params.createElements && Object.keys(i).forEach((a => {
                if (!n[a] && !0 === n.auto) {
                    let o = e.$el.children(`.${i[a]}`)[0];
                    o || (o = s.createElement("div"), o.className = i[a], e.$el.append(o)), n[a] = o, t[a] = o
                }
            })), n
        }

        function Ie(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function Pe(e) {
            const t = this, {$wrapperEl: n, params: i} = t;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]); else n.append(e);
            i.loop && t.loopCreate(), i.observer || t.update()
        }

        function $e(e) {
            const t = this, {params: n, $wrapperEl: i, activeIndex: s} = t;
            n.loop && t.loopDestroy();
            let a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                a = s + e.length
            } else i.prepend(e);
            n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(a, 0, !1)
        }

        function Le(e, t) {
            const n = this, {$wrapperEl: i, params: s, activeIndex: a} = n;
            let o = a;
            s.loop && (o -= n.loopedSlides, n.loopDestroy(), n.slides = i.children(`.${s.slideClass}`));
            const r = n.slides.length;
            if (e <= 0) return void n.prependSlide(t);
            if (e >= r) return void n.appendSlide(t);
            let l = o > e ? o + 1 : o;
            const c = [];
            for (let t = r - 1; t >= e; t -= 1) {
                const e = n.slides.eq(t);
                e.remove(), c.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                l = o > e ? o + t.length : o
            } else i.append(t);
            for (let e = 0; e < c.length; e += 1) i.append(c[e]);
            s.loop && n.loopCreate(), s.observer || n.update(), s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
        }

        function _e(e) {
            const t = this, {params: n, $wrapperEl: i, activeIndex: s} = t;
            let a = s;
            n.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${n.slideClass}`));
            let o, r = a;
            if ("object" == typeof e && "length" in e) {
                for (let n = 0; n < e.length; n += 1) o = e[n], t.slides[o] && t.slides.eq(o).remove(), o < r && (r -= 1);
                r = Math.max(r, 0)
            } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < r && (r -= 1), r = Math.max(r, 0);
            n.loop && t.loopCreate(), n.observer || t.update(), n.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
        }

        function Oe() {
            const e = this, t = [];
            for (let n = 0; n < e.slides.length; n += 1) t.push(n);
            e.removeSlide(t)
        }

        function Ne(e) {
            const {
                effect: t,
                swiper: n,
                on: i,
                setTranslate: s,
                setTransition: a,
                overwriteParams: o,
                perspective: r,
                recreateShadows: l,
                getEffectParams: c
            } = e;
            let u;
            i("beforeInit", (() => {
                if (n.params.effect !== t) return;
                n.classNames.push(`${n.params.containerModifierClass}${t}`), r && r() && n.classNames.push(`${n.params.containerModifierClass}3d`);
                const e = o ? o() : {};
                Object.assign(n.params, e), Object.assign(n.originalParams, e)
            })), i("setTranslate", (() => {
                n.params.effect === t && s()
            })), i("setTransition", ((e, i) => {
                n.params.effect === t && a(i)
            })), i("transitionEnd", (() => {
                if (n.params.effect === t && l) {
                    if (!c || !c().slideShadows) return;
                    n.slides.each((e => {
                        n.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    })), l()
                }
            })), i("virtualUpdate", (() => {
                n.params.effect === t && (n.slides.length || (u = !0), requestAnimationFrame((() => {
                    u && n.slides && n.slides.length && (s(), u = !1)
                })))
            }))
        }

        function ze(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        function je(e) {
            let {swiper: t, duration: n, transformEl: i, allSlides: s} = e;
            const {slides: a, activeIndex: o, $wrapperEl: r} = t;
            if (t.params.virtualTranslate && 0 !== n) {
                let e, n = !1;
                e = s ? i ? a.find(i) : a : i ? a.eq(o).find(i) : a.eq(o), e.transitionEnd((() => {
                    if (n) return;
                    if (!t || t.destroyed) return;
                    n = !0, t.animating = !1;
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1) r.trigger(e[t])
                }))
            }
        }

        function Fe(e, t, n) {
            const i = "swiper-slide-shadow" + (n ? `-${n}` : ""), s = e.transformEl ? t.find(e.transformEl) : t;
            let a = s.children(`.${i}`);
            return a.length || (a = W(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`), s.append(a)), a
        }

        const Be = [function (e) {
            let t, {swiper: n, extendParams: i, on: s, emit: a} = e;

            function o(e, t) {
                const i = n.params.virtual;
                if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
                const s = i.renderSlide ? W(i.renderSlide.call(n, e, t)) : W(`<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (n.virtual.cache[t] = s), s
            }

            function r(e) {
                const {slidesPerView: t, slidesPerGroup: i, centeredSlides: s} = n.params, {
                    addSlidesBefore: r,
                    addSlidesAfter: l
                } = n.params.virtual, {from: c, to: u, slides: d, slidesGrid: h, offset: p} = n.virtual;
                n.params.cssMode || n.updateActiveIndex();
                const f = n.activeIndex || 0;
                let m, g, v;
                m = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top", s ? (g = Math.floor(t / 2) + i + l, v = Math.floor(t / 2) + i + r) : (g = t + (i - 1) + l, v = i + r);
                const y = Math.max((f || 0) - v, 0), b = Math.min((f || 0) + g, d.length - 1),
                    w = (n.slidesGrid[y] || 0) - (n.slidesGrid[0] || 0);

                function x() {
                    n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load(), a("virtualUpdate")
                }

                if (Object.assign(n.virtual, {
                    from: y,
                    to: b,
                    offset: w,
                    slidesGrid: n.slidesGrid
                }), c === y && u === b && !e) return n.slidesGrid !== h && w !== p && n.slides.css(m, `${w}px`), n.updateProgress(), void a("virtualUpdate");
                if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
                    offset: w,
                    from: y,
                    to: b,
                    slides: function () {
                        const e = [];
                        for (let t = y; t <= b; t += 1) e.push(d[t]);
                        return e
                    }()
                }), void (n.params.virtual.renderExternalUpdate ? x() : a("virtualUpdate"));
                const C = [], E = [];
                if (e) n.$wrapperEl.find(`.${n.params.slideClass}`).remove(); else for (let e = c; e <= u; e += 1) (e < y || e > b) && n.$wrapperEl.find(`.${n.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                for (let t = 0; t < d.length; t += 1) t >= y && t <= b && (void 0 === u || e ? E.push(t) : (t > u && E.push(t), t < c && C.push(t)));
                E.forEach((e => {
                    n.$wrapperEl.append(o(d[e], e))
                })), C.sort(((e, t) => t - e)).forEach((e => {
                    n.$wrapperEl.prepend(o(d[e], e))
                })), n.$wrapperEl.children(".swiper-slide").css(m, `${w}px`), x()
            }

            i({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), n.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, s("beforeInit", (() => {
                n.params.virtual.enabled && (n.virtual.slides = n.params.virtual.slides, n.classNames.push(`${n.params.containerModifierClass}virtual`), n.params.watchSlidesProgress = !0, n.originalParams.watchSlidesProgress = !0, n.params.initialSlide || r())
            })), s("setTranslate", (() => {
                n.params.virtual.enabled && (n.params.cssMode && !n._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                    r()
                }), 100)) : r())
            })), s("init update resize", (() => {
                n.params.virtual.enabled && n.params.cssMode && J(n.wrapperEl, "--swiper-virtual-size", `${n.virtualSize}px`)
            })), Object.assign(n.virtual, {
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.push(e[t]); else n.virtual.slides.push(e);
                    r(!0)
                }, prependSlide: function (e) {
                    const t = n.activeIndex;
                    let i = t + 1, s = 1;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t += 1) e[t] && n.virtual.slides.unshift(e[t]);
                        i = t + e.length, s = e.length
                    } else n.virtual.slides.unshift(e);
                    if (n.params.virtual.cache) {
                        const e = n.virtual.cache, t = {};
                        Object.keys(e).forEach((n => {
                            const i = e[n], a = i.attr("data-swiper-slide-index");
                            a && i.attr("data-swiper-slide-index", parseInt(a, 10) + s), t[parseInt(n, 10) + s] = i
                        })), n.virtual.cache = t
                    }
                    r(!0), n.slideTo(i, 0)
                }, removeSlide: function (e) {
                    if (null == e) return;
                    let t = n.activeIndex;
                    if (Array.isArray(e)) for (let i = e.length - 1; i >= 0; i -= 1) n.virtual.slides.splice(e[i], 1), n.params.virtual.cache && delete n.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else n.virtual.slides.splice(e, 1), n.params.virtual.cache && delete n.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    r(!0), n.slideTo(t, 0)
                }, removeAllSlides: function () {
                    n.virtual.slides = [], n.params.virtual.cache && (n.virtual.cache = {}), r(!0), n.slideTo(0, 0)
                }, update: r
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = _(), o = N();

            function r(e) {
                if (!t.enabled) return;
                const {rtlTranslate: n} = t;
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const r = i.keyCode || i.charCode, l = t.params.keyboard.pageUpDown, c = l && 33 === r,
                    u = l && 34 === r, d = 37 === r, h = 39 === r, p = 38 === r, f = 40 === r;
                if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && d || t.isVertical() && p || c)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || a.activeElement && a.activeElement.nodeName && ("input" === a.activeElement.nodeName.toLowerCase() || "textarea" === a.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (c || u || d || h || p || f)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        const i = t.$el, s = i[0].clientWidth, a = i[0].clientHeight, r = o.innerWidth,
                            l = o.innerHeight, c = t.$el.offset();
                        n && (c.left -= t.$el[0].scrollLeft);
                        const u = [[c.left, c.top], [c.left + s, c.top], [c.left, c.top + a], [c.left + s, c.top + a]];
                        for (let t = 0; t < u.length; t += 1) {
                            const n = u[t];
                            if (n[0] >= 0 && n[0] <= r && n[1] >= 0 && n[1] <= l) {
                                if (0 === n[0] && 0 === n[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((c || u || d || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((u || h) && !n || (c || d) && n) && t.slideNext(), ((c || d) && !n || (u || h) && n) && t.slidePrev()) : ((c || u || p || f) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (u || f) && t.slideNext(), (c || p) && t.slidePrev()), s("keyPress", r)
                }
            }

            function l() {
                t.keyboard.enabled || (W(a).on("keydown", r), t.keyboard.enabled = !0)
            }

            function c() {
                t.keyboard.enabled && (W(a).off("keydown", r), t.keyboard.enabled = !1)
            }

            t.keyboard = {enabled: !1}, n({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), i("init", (() => {
                t.params.keyboard.enabled && l()
            })), i("destroy", (() => {
                t.keyboard.enabled && c()
            })), Object.assign(t.keyboard, {enable: l, disable: c})
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = N();
            let o;
            n({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), t.mousewheel = {enabled: !1};
            let r, l = V();
            const c = [];

            function u() {
                t.enabled && (t.mouseEntered = !0)
            }

            function d() {
                t.enabled && (t.mouseEntered = !1)
            }

            function h(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && V() - l < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && V() - l < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), s("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), s("scroll", e.raw)), l = (new a.Date).getTime(), 1))
            }

            function p(e) {
                let n = e, i = !0;
                if (!t.enabled) return;
                const a = t.params.mousewheel;
                t.params.cssMode && n.preventDefault();
                let l = t.$el;
                if ("container" !== t.params.mousewheel.eventsTarget && (l = W(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !l[0].contains(n.target) && !a.releaseOnEdges) return !0;
                n.originalEvent && (n = n.originalEvent);
                let u = 0;
                const d = t.rtlTranslate ? -1 : 1, p = function (e) {
                    let t = 0, n = 0, i = 0, s = 0;
                    return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, s = 10 * n, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: s
                    }
                }(n);
                if (a.forceToAxis) if (t.isHorizontal()) {
                    if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
                    u = -p.pixelX * d
                } else {
                    if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
                    u = -p.pixelY
                } else u = Math.abs(p.pixelX) > Math.abs(p.pixelY) ? -p.pixelX * d : -p.pixelY;
                if (0 === u) return !0;
                a.invert && (u = -u);
                let f = t.getTranslate() + u * a.sensitivity;
                if (f >= t.minTranslate() && (f = t.minTranslate()), f <= t.maxTranslate() && (f = t.maxTranslate()), i = !!t.params.loop || !(f === t.minTranslate() || f === t.maxTranslate()), i && t.params.nested && n.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    const e = {time: V(), delta: Math.abs(u), direction: Math.sign(u)},
                        i = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
                    if (!i) {
                        r = void 0, t.params.loop && t.loopFix();
                        let l = t.getTranslate() + u * a.sensitivity;
                        const d = t.isBeginning, h = t.isEnd;
                        if (l >= t.minTranslate() && (l = t.minTranslate()), l <= t.maxTranslate() && (l = t.maxTranslate()), t.setTransition(0), t.setTranslate(l), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !h && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                            clearTimeout(o), o = void 0, c.length >= 15 && c.shift();
                            const n = c.length ? c[c.length - 1] : void 0, i = c[0];
                            if (c.push(e), n && (e.delta > n.delta || e.direction !== n.direction)) c.splice(0); else if (c.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                const n = u > 0 ? .8 : .2;
                                r = e, c.splice(0), o = q((() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, n)
                                }), 0)
                            }
                            o || (o = q((() => {
                                r = e, c.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (i || s("scroll", n), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), l === t.minTranslate() || l === t.maxTranslate()) return !0
                    }
                } else {
                    const n = {time: V(), delta: Math.abs(u), direction: Math.sign(u), raw: e};
                    c.length >= 2 && c.shift();
                    const i = c.length ? c[c.length - 1] : void 0;
                    if (c.push(n), i ? (n.direction !== i.direction || n.delta > i.delta || n.time > i.time + 150) && h(n) : h(n), function (e) {
                        const n = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges) return !0;
                        return !1
                    }(n)) return !0
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
            }

            function f(e) {
                let n = t.$el;
                "container" !== t.params.mousewheel.eventsTarget && (n = W(t.params.mousewheel.eventsTarget)), n[e]("mouseenter", u), n[e]("mouseleave", d), n[e]("wheel", p)
            }

            function m() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", p), !0) : !t.mousewheel.enabled && (f("on"), t.mousewheel.enabled = !0, !0)
            }

            function g() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, p), !0) : !!t.mousewheel.enabled && (f("off"), t.mousewheel.enabled = !1, !0)
            }

            i("init", (() => {
                !t.params.mousewheel.enabled && t.params.cssMode && g(), t.params.mousewheel.enabled && m()
            })), i("destroy", (() => {
                t.params.cssMode && m(), t.mousewheel.enabled && g()
            })), Object.assign(t.mousewheel, {enable: m, disable: g})
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;

            function a(e) {
                let n;
                return e && (n = W(e), t.params.uniqueNavElements && "string" == typeof e && n.length > 1 && 1 === t.$el.find(e).length && (n = t.$el.find(e))), n
            }

            function o(e, n) {
                const i = t.params.navigation;
                e && e.length > 0 && (e[n ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass))
            }

            function r() {
                if (t.params.loop) return;
                const {$nextEl: e, $prevEl: n} = t.navigation;
                o(n, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
            }

            function c(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), s("navigationNext"))
            }

            function u() {
                const e = t.params.navigation;
                if (t.params.navigation = Ae(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                const n = a(e.nextEl), i = a(e.prevEl);
                n && n.length > 0 && n.on("click", c), i && i.length > 0 && i.on("click", l), Object.assign(t.navigation, {
                    $nextEl: n,
                    nextEl: n && n[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                }), t.enabled || (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass))
            }

            function d() {
                const {$nextEl: e, $prevEl: n} = t.navigation;
                e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), n && n.length && (n.off("click", l), n.removeClass(t.params.navigation.disabledClass))
            }

            n({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, i("init", (() => {
                !1 === t.params.navigation.enabled ? h() : (u(), r())
            })), i("toEdge fromEdge lock unlock", (() => {
                r()
            })), i("destroy", (() => {
                d()
            })), i("enable disable", (() => {
                const {$nextEl: e, $prevEl: n} = t.navigation;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), n && n[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
            })), i("click", ((e, n) => {
                const {$nextEl: i, $prevEl: a} = t.navigation, o = n.target;
                if (t.params.navigation.hideOnClick && !W(o).is(a) && !W(o).is(i)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
                    let e;
                    i ? e = i.hasClass(t.params.navigation.hiddenClass) : a && (e = a.hasClass(t.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), a && a.toggleClass(t.params.navigation.hiddenClass)
                }
            }));
            const h = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), d()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), u(), r()
                }, disable: h, update: r, init: u, destroy: d
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = "swiper-pagination";
            let o;
            n({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${a}-bullet`,
                    bulletActiveClass: `${a}-bullet-active`,
                    modifierClass: `${a}-`,
                    currentClass: `${a}-current`,
                    totalClass: `${a}-total`,
                    hiddenClass: `${a}-hidden`,
                    progressbarFillClass: `${a}-progressbar-fill`,
                    progressbarOppositeClass: `${a}-progressbar-opposite`,
                    clickableClass: `${a}-clickable`,
                    lockClass: `${a}-lock`,
                    horizontalClass: `${a}-horizontal`,
                    verticalClass: `${a}-vertical`,
                    paginationDisabledClass: `${a}-disabled`
                }
            }), t.pagination = {el: null, $el: null, bullets: []};
            let r = 0;

            function l() {
                return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
            }

            function c(e, n) {
                const {bulletActiveClass: i} = t.params.pagination;
                e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
            }

            function u() {
                const e = t.rtl, n = t.params.pagination;
                if (l()) return;
                const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    a = t.pagination.$el;
                let u;
                const d = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), u > i - 1 - 2 * t.loopedSlides && (u -= i - 2 * t.loopedSlides), u > d - 1 && (u -= d), u < 0 && "bullets" !== t.params.paginationType && (u = d + u)) : u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const i = t.pagination.bullets;
                    let s, l, d;
                    if (n.dynamicBullets && (o = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", o * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (r += u - (t.previousIndex - t.loopedSlides || 0), r > n.dynamicMainBullets - 1 ? r = n.dynamicMainBullets - 1 : r < 0 && (r = 0)), s = Math.max(u - r, 0), l = s + (Math.min(i.length, n.dynamicMainBullets) - 1), d = (l + s) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`)).join(" ")), a.length > 1) i.each((e => {
                        const t = W(e), i = t.index();
                        i === u && t.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= s && i <= l && t.addClass(`${n.bulletActiveClass}-main`), i === s && c(t, "prev"), i === l && c(t, "next"))
                    })); else {
                        const e = i.eq(u), a = e.index();
                        if (e.addClass(n.bulletActiveClass), n.dynamicBullets) {
                            const e = i.eq(s), o = i.eq(l);
                            for (let e = s; e <= l; e += 1) i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                            if (t.params.loop) if (a >= i.length) {
                                for (let e = n.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                                i.eq(i.length - n.dynamicMainBullets - 1).addClass(`${n.bulletActiveClass}-prev`)
                            } else c(e, "prev"), c(o, "next"); else c(e, "prev"), c(o, "next")
                        }
                    }
                    if (n.dynamicBullets) {
                        const s = Math.min(i.length, n.dynamicMainBullets + 4), a = (o * s - o) / 2 - d * o,
                            r = e ? "right" : "left";
                        i.css(t.isHorizontal() ? r : "top", `${a}px`)
                    }
                }
                if ("fraction" === n.type && (a.find(Ie(n.currentClass)).text(n.formatFractionCurrent(u + 1)), a.find(Ie(n.totalClass)).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
                    let e;
                    e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const i = (u + 1) / d;
                    let s = 1, o = 1;
                    "horizontal" === e ? s = i : o = i, a.find(Ie(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`).transition(t.params.speed)
                }
                "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(t, u + 1, d)), s("paginationRender", a[0])) : s("paginationUpdate", a[0]), t.params.watchOverflow && t.enabled && a[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
            }

            function d() {
                const e = t.params.pagination;
                if (l()) return;
                const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    i = t.pagination.$el;
                let a = "";
                if ("bullets" === e.type) {
                    let s = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && s > n && (s = n);
                    for (let n = 0; n < s; n += 1) e.renderBullet ? a += e.renderBullet.call(t, n, e.bulletClass) : a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                    i.html(a), t.pagination.bullets = i.find(Ie(e.bulletClass))
                }
                "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(a)), "custom" !== e.type && s("paginationRender", t.pagination.$el[0])
            }

            function h() {
                t.params.pagination = Ae(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
                const e = t.params.pagination;
                if (!e.el) return;
                let n = W(e.el);
                0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el), n.length > 1 && (n = n.filter((e => W(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`), r = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", Ie(e.bulletClass), (function (e) {
                    e.preventDefault();
                    let n = W(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (n += t.loopedSlides), t.slideTo(n)
                })), Object.assign(t.pagination, {$el: n, el: n[0]}), t.enabled || n.addClass(e.lockClass))
            }

            function p() {
                const e = t.params.pagination;
                if (l()) return;
                const n = t.pagination.$el;
                n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", Ie(e.bulletClass))
            }

            i("init", (() => {
                !1 === t.params.pagination.enabled ? f() : (h(), d(), u())
            })), i("activeIndexChange", (() => {
                (t.params.loop || void 0 === t.snapIndex) && u()
            })), i("snapIndexChange", (() => {
                t.params.loop || u()
            })), i("slidesLengthChange", (() => {
                t.params.loop && (d(), u())
            })), i("snapGridLengthChange", (() => {
                t.params.loop || (d(), u())
            })), i("destroy", (() => {
                p()
            })), i("enable disable", (() => {
                const {$el: e} = t.pagination;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
            })), i("lock unlock", (() => {
                u()
            })), i("click", ((e, n) => {
                const i = n.target, {$el: a} = t.pagination;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !W(i).hasClass(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                    const e = a.hasClass(t.params.pagination.hiddenClass);
                    s(!0 === e ? "paginationShow" : "paginationHide"), a.toggleClass(t.params.pagination.hiddenClass)
                }
            }));
            const f = () => {
                t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), p()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), d(), u()
                }, disable: f, render: d, update: u, init: h, destroy: p
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = _();
            let o, r, l, c, u = !1, d = null, h = null;

            function p() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e, rtlTranslate: n, progress: i} = t, {$dragEl: s, $el: a} = e,
                    o = t.params.scrollbar;
                let c = r, u = (l - r) * i;
                n ? (u = -u, u > 0 ? (c = r - u, u = 0) : -u + r > l && (c = l + u)) : u < 0 ? (c = r + u, u = 0) : u + r > l && (c = l - u), t.isHorizontal() ? (s.transform(`translate3d(${u}px, 0, 0)`), s[0].style.width = `${c}px`) : (s.transform(`translate3d(0px, ${u}px, 0)`), s[0].style.height = `${c}px`), o.hide && (clearTimeout(d), a[0].style.opacity = 1, d = setTimeout((() => {
                    a[0].style.opacity = 0, a.transition(400)
                }), 1e3))
            }

            function f() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const {scrollbar: e} = t, {$dragEl: n, $el: i} = e;
                n[0].style.width = "", n[0].style.height = "", l = t.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, c = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), r = "auto" === t.params.scrollbar.dragSize ? l * c : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? n[0].style.width = `${r}px` : n[0].style.height = `${r}px`, i[0].style.display = c >= 1 ? "none" : "", t.params.scrollbar.hide && (i[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
            }

            function m(e) {
                return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            }

            function g(e) {
                const {scrollbar: n, rtlTranslate: i} = t, {$el: s} = n;
                let a;
                a = (m(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (l - r), a = Math.max(Math.min(a, 1), 0), i && (a = 1 - a);
                const c = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                t.updateProgress(c), t.setTranslate(c), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function v(e) {
                const n = t.params.scrollbar, {scrollbar: i, $wrapperEl: a} = t, {$el: r, $dragEl: l} = i;
                u = !0, o = e.target === l[0] || e.target === l ? m(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), l.transition(100), g(e), clearTimeout(h), r.transition(0), n.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), s("scrollbarDragStart", e)
            }

            function y(e) {
                const {scrollbar: n, $wrapperEl: i} = t, {$el: a, $dragEl: o} = n;
                u && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, g(e), i.transition(0), a.transition(0), o.transition(0), s("scrollbarDragMove", e))
            }

            function b(e) {
                const n = t.params.scrollbar, {scrollbar: i, $wrapperEl: a} = t, {$el: o} = i;
                u && (u = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), n.hide && (clearTimeout(h), h = q((() => {
                    o.css("opacity", 0), o.transition(400)
                }), 1e3)), s("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
            }

            function w(e) {
                const {scrollbar: n, touchEventsTouch: i, touchEventsDesktop: s, params: o, support: r} = t, l = n.$el;
                if (!l) return;
                const c = l[0], u = !(!r.passiveListener || !o.passiveListeners) && {passive: !1, capture: !1},
                    d = !(!r.passiveListener || !o.passiveListeners) && {passive: !0, capture: !1};
                if (!c) return;
                const h = "on" === e ? "addEventListener" : "removeEventListener";
                r.touch ? (c[h](i.start, v, u), c[h](i.move, y, u), c[h](i.end, b, d)) : (c[h](s.start, v, u), a[h](s.move, y, u), a[h](s.end, b, d))
            }

            function x() {
                const {scrollbar: e, $el: n} = t;
                t.params.scrollbar = Ae(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
                const i = t.params.scrollbar;
                if (!i.el) return;
                let s = W(i.el);
                t.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === n.find(i.el).length && (s = n.find(i.el)), s.addClass(t.isHorizontal() ? i.horizontalClass : i.verticalClass);
                let a = s.find(`.${t.params.scrollbar.dragClass}`);
                0 === a.length && (a = W(`<div class="${t.params.scrollbar.dragClass}"></div>`), s.append(a)), Object.assign(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }), i.draggable && t.params.scrollbar.el && t.scrollbar.el && w("on"), s && s[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            }

            function C() {
                const e = t.params.scrollbar, n = t.scrollbar.$el;
                n && n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && w("off")
            }

            n({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, i("init", (() => {
                !1 === t.params.scrollbar.enabled ? E() : (x(), f(), p())
            })), i("update resize observerUpdate lock unlock", (() => {
                f()
            })), i("setTranslate", (() => {
                p()
            })), i("setTransition", ((e, n) => {
                !function (e) {
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                }(n)
            })), i("enable disable", (() => {
                const {$el: e} = t.scrollbar;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            })), i("destroy", (() => {
                C()
            }));
            const E = () => {
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), C()
            };
            Object.assign(t.scrollbar, {
                enable: () => {
                    t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), x(), f(), p()
                }, disable: E, updateSize: f, setTranslate: p, init: x, destroy: C
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({parallax: {enabled: !1}});
            const s = (e, n) => {
                const {rtl: i} = t, s = W(e), a = i ? -1 : 1, o = s.attr("data-swiper-parallax") || "0";
                let r = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y");
                const c = s.attr("data-swiper-parallax-scale"), u = s.attr("data-swiper-parallax-opacity");
                if (r || l ? (r = r || "0", l = l || "0") : t.isHorizontal() ? (r = o, l = "0") : (l = o, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n * a + "%" : r * n * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px", null != u) {
                    const e = u - (u - 1) * (1 - Math.abs(n));
                    s[0].style.opacity = e
                }
                if (null == c) s.transform(`translate3d(${r}, ${l}, 0px)`); else {
                    const e = c - (c - 1) * (1 - Math.abs(n));
                    s.transform(`translate3d(${r}, ${l}, 0px) scale(${e})`)
                }
            }, a = () => {
                const {$el: e, slides: n, progress: i, snapGrid: a} = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    s(e, i)
                })), n.each(((e, n) => {
                    let o = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(n / 2) - i * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), W(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        s(e, o)
                    }))
                }))
            };
            i("beforeInit", (() => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            })), i("init", (() => {
                t.params.parallax.enabled && a()
            })), i("setTranslate", (() => {
                t.params.parallax.enabled && a()
            })), i("setTransition", ((e, n) => {
                t.params.parallax.enabled && function (e) {
                    void 0 === e && (e = t.params.speed);
                    const {$el: n} = t;
                    n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                        const n = W(t);
                        let i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (i = 0), n.transition(i)
                    }))
                }(n)
            }))
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            const a = N();
            n({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {enabled: !1};
            let o, r, l, c = 1, u = !1;
            const d = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            }, h = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            }, p = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
            let f = 1;

            function m(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt((i - t) ** 2 + (s - n) ** 2)
            }

            function g(e) {
                const n = t.support, i = t.params.zoom;
                if (r = !1, l = !1, !n.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    r = !0, d.scaleStart = m(e)
                }
                d.$slideEl && d.$slideEl.length || (d.$slideEl = W(e.target).closest(`.${t.params.slideClass}`), 0 === d.$slideEl.length && (d.$slideEl = t.slides.eq(t.activeIndex)), d.$imageEl = d.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), d.$imageWrapEl = d.$imageEl.parent(`.${i.containerClass}`), d.maxRatio = d.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== d.$imageWrapEl.length) ? (d.$imageEl && d.$imageEl.transition(0), u = !0) : d.$imageEl = void 0
            }

            function v(e) {
                const n = t.support, i = t.params.zoom, s = t.zoom;
                if (!n.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    l = !0, d.scaleMove = m(e)
                }
                d.$imageEl && 0 !== d.$imageEl.length ? (n.gestures ? s.scale = e.scale * c : s.scale = d.scaleMove / d.scaleStart * c, s.scale > d.maxRatio && (s.scale = d.maxRatio - 1 + (s.scale - d.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), d.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && g(e)
            }

            function y(e) {
                const n = t.device, i = t.support, s = t.params.zoom, a = t.zoom;
                if (!i.gestures) {
                    if (!r || !l) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !n.android) return;
                    r = !1, l = !1
                }
                d.$imageEl && 0 !== d.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, d.maxRatio), s.minRatio), d.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), c = a.scale, u = !1, 1 === a.scale && (d.$slideEl = void 0))
            }

            function b(e) {
                const n = t.zoom;
                if (!d.$imageEl || 0 === d.$imageEl.length) return;
                if (t.allowClick = !1, !h.isTouched || !d.$slideEl) return;
                h.isMoved || (h.width = d.$imageEl[0].offsetWidth, h.height = d.$imageEl[0].offsetHeight, h.startX = X(d.$imageWrapEl[0], "x") || 0, h.startY = X(d.$imageWrapEl[0], "y") || 0, d.slideWidth = d.$slideEl[0].offsetWidth, d.slideHeight = d.$slideEl[0].offsetHeight, d.$imageWrapEl.transition(0));
                const i = h.width * n.scale, s = h.height * n.scale;
                if (!(i < d.slideWidth && s < d.slideHeight)) {
                    if (h.minX = Math.min(d.slideWidth / 2 - i / 2, 0), h.maxX = -h.minX, h.minY = Math.min(d.slideHeight / 2 - s / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !h.isMoved && !u) {
                        if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void (h.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void (h.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), h.isMoved = !0, h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX, h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY, h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), p.prevPositionX || (p.prevPositionX = h.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = h.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (h.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (h.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(h.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(h.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = h.touchesCurrent.x, p.prevPositionY = h.touchesCurrent.y, p.prevTime = Date.now(), d.$imageWrapEl.transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
                }
            }

            function w() {
                const e = t.zoom;
                d.$slideEl && t.previousIndex !== t.activeIndex && (d.$imageEl && d.$imageEl.transform("translate3d(0,0,0) scale(1)"), d.$imageWrapEl && d.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, c = 1, d.$slideEl = void 0, d.$imageEl = void 0, d.$imageWrapEl = void 0)
            }

            function x(e) {
                const n = t.zoom, i = t.params.zoom;
                if (d.$slideEl || (e && e.target && (d.$slideEl = W(e.target).closest(`.${t.params.slideClass}`)), d.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : d.$slideEl = t.slides.eq(t.activeIndex)), d.$imageEl = d.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), d.$imageWrapEl = d.$imageEl.parent(`.${i.containerClass}`)), !d.$imageEl || 0 === d.$imageEl.length || !d.$imageWrapEl || 0 === d.$imageWrapEl.length) return;
                let s, o, r, l, u, p, f, m, g, v, y, b, w, x, C, E, k, S;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), d.$slideEl.addClass(`${i.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (s = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (s = h.touchesStart.x, o = h.touchesStart.y), n.scale = d.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, c = d.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (k = d.$slideEl[0].offsetWidth, S = d.$slideEl[0].offsetHeight, r = d.$slideEl.offset().left + a.scrollX, l = d.$slideEl.offset().top + a.scrollY, u = r + k / 2 - s, p = l + S / 2 - o, g = d.$imageEl[0].offsetWidth, v = d.$imageEl[0].offsetHeight, y = g * n.scale, b = v * n.scale, w = Math.min(k / 2 - y / 2, 0), x = Math.min(S / 2 - b / 2, 0), C = -w, E = -x, f = u * n.scale, m = p * n.scale, f < w && (f = w), f > C && (f = C), m < x && (m = x), m > E && (m = E)) : (f = 0, m = 0), d.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${m}px,0)`), d.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
            }

            function C() {
                const e = t.zoom, n = t.params.zoom;
                d.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : d.$slideEl = t.slides.eq(t.activeIndex), d.$imageEl = d.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), d.$imageWrapEl = d.$imageEl.parent(`.${n.containerClass}`)), d.$imageEl && 0 !== d.$imageEl.length && d.$imageWrapEl && 0 !== d.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, d.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), d.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), d.$slideEl.removeClass(`${n.zoomedSlideClass}`), d.$slideEl = void 0)
            }

            function E(e) {
                const n = t.zoom;
                n.scale && 1 !== n.scale ? C() : x(e)
            }

            function k() {
                const e = t.support;
                return {
                    passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}
                }
            }

            function S() {
                return `.${t.params.slideClass}`
            }

            function M(e) {
                const {passiveListener: n} = k(), i = S();
                t.$wrapperEl[e]("gesturestart", i, g, n), t.$wrapperEl[e]("gesturechange", i, v, n), t.$wrapperEl[e]("gestureend", i, y, n)
            }

            function T() {
                o || (o = !0, M("on"))
            }

            function D() {
                o && (o = !1, M("off"))
            }

            function A() {
                const e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const n = t.support, {passiveListener: i, activeListenerWithCapture: s} = k(), a = S();
                n.gestures ? (t.$wrapperEl.on(t.touchEvents.start, T, i), t.$wrapperEl.on(t.touchEvents.end, D, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, a, g, i), t.$wrapperEl.on(t.touchEvents.move, a, v, s), t.$wrapperEl.on(t.touchEvents.end, a, y, i), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, a, y, i)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, b, s)
            }

            function I() {
                const e = t.zoom;
                if (!e.enabled) return;
                const n = t.support;
                e.enabled = !1;
                const {passiveListener: i, activeListenerWithCapture: s} = k(), a = S();
                n.gestures ? (t.$wrapperEl.off(t.touchEvents.start, T, i), t.$wrapperEl.off(t.touchEvents.end, D, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, a, g, i), t.$wrapperEl.off(t.touchEvents.move, a, v, s), t.$wrapperEl.off(t.touchEvents.end, a, y, i), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, a, y, i)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, b, s)
            }

            Object.defineProperty(t.zoom, "scale", {
                get: () => f, set(e) {
                    if (f !== e) {
                        const t = d.$imageEl ? d.$imageEl[0] : void 0, n = d.$slideEl ? d.$slideEl[0] : void 0;
                        s("zoomChange", e, t, n)
                    }
                    f = e
                }
            }), i("init", (() => {
                t.params.zoom.enabled && A()
            })), i("destroy", (() => {
                I()
            })), i("touchStart", ((e, n) => {
                t.zoom.enabled && function (e) {
                    const n = t.device;
                    d.$imageEl && 0 !== d.$imageEl.length && (h.isTouched || (n.android && e.cancelable && e.preventDefault(), h.isTouched = !0, h.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, h.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                }(n)
            })), i("touchEnd", ((e, n) => {
                t.zoom.enabled && function () {
                    const e = t.zoom;
                    if (!d.$imageEl || 0 === d.$imageEl.length) return;
                    if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
                    h.isTouched = !1, h.isMoved = !1;
                    let n = 300, i = 300;
                    const s = p.x * n, a = h.currentX + s, o = p.y * i, r = h.currentY + o;
                    0 !== p.x && (n = Math.abs((a - h.currentX) / p.x)), 0 !== p.y && (i = Math.abs((r - h.currentY) / p.y));
                    const l = Math.max(n, i);
                    h.currentX = a, h.currentY = r;
                    const c = h.width * e.scale, u = h.height * e.scale;
                    h.minX = Math.min(d.slideWidth / 2 - c / 2, 0), h.maxX = -h.minX, h.minY = Math.min(d.slideHeight / 2 - u / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), d.$imageWrapEl.transition(l).transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
                }()
            })), i("doubleTap", ((e, n) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && E(n)
            })), i("transitionEnd", (() => {
                t.zoom.enabled && t.params.zoom.enabled && w()
            })), i("slideChange", (() => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && w()
            })), Object.assign(t.zoom, {enable: A, disable: I, in: x, out: C, toggle: E})
        }, function (e) {
            let {swiper: t, extendParams: n, on: i, emit: s} = e;
            n({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), t.lazy = {};
            let a = !1, o = !1;

            function r(e, n) {
                void 0 === n && (n = !0);
                const i = t.params.lazy;
                if (void 0 === e) return;
                if (0 === t.slides.length) return;
                const a = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                    o = a.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || o.push(a[0]), 0 !== o.length && o.each((e => {
                    const o = W(e);
                    o.addClass(i.loadingClass);
                    const l = o.attr("data-background"), c = o.attr("data-src"), u = o.attr("data-srcset"),
                        d = o.attr("data-sizes"), h = o.parent("picture");
                    t.loadImage(o[0], c || l, u, d, !1, (() => {
                        if (null != t && t && (!t || t.params) && !t.destroyed) {
                            if (l ? (o.css("background-image", `url("${l}")`), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = W(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(i.loadedClass).removeClass(i.loadingClass), a.find(`.${i.preloaderClass}`).remove(), t.params.loop && n) {
                                const e = a.attr("data-swiper-slide-index");
                                a.hasClass(t.params.slideDuplicateClass) ? r(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : r(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                            s("lazyImageReady", a[0], o[0]), t.params.autoHeight && t.updateAutoHeight()
                        }
                    })), s("lazyImageLoad", a[0], o[0])
                }))
            }

            function l() {
                const {$wrapperEl: e, params: n, slides: i, activeIndex: s} = t, a = t.virtual && n.virtual.enabled,
                    l = n.lazy;
                let c = n.slidesPerView;

                function u(t) {
                    if (a) {
                        if (e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                    } else if (i[t]) return !0;
                    return !1
                }

                function d(e) {
                    return a ? W(e).attr("data-swiper-slide-index") : W(e).index()
                }

                if ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress) e.children(`.${n.slideVisibleClass}`).each((e => {
                    r(a ? W(e).attr("data-swiper-slide-index") : W(e).index())
                })); else if (c > 1) for (let e = s; e < s + c; e += 1) u(e) && r(e); else r(s);
                if (l.loadPrevNext) if (c > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                    const e = l.loadPrevNextAmount, t = Math.ceil(c), n = Math.min(s + t + Math.max(e, t), i.length),
                        a = Math.max(s - Math.max(t, e), 0);
                    for (let e = s + t; e < n; e += 1) u(e) && r(e);
                    for (let e = a; e < s; e += 1) u(e) && r(e)
                } else {
                    const t = e.children(`.${n.slideNextClass}`);
                    t.length > 0 && r(d(t));
                    const i = e.children(`.${n.slidePrevClass}`);
                    i.length > 0 && r(d(i))
                }
            }

            function c() {
                const e = N();
                if (!t || t.destroyed) return;
                const n = t.params.lazy.scrollingElement ? W(t.params.lazy.scrollingElement) : W(e), i = n[0] === e,
                    s = i ? e.innerWidth : n[0].offsetWidth, o = i ? e.innerHeight : n[0].offsetHeight,
                    r = t.$el.offset(), {rtlTranslate: u} = t;
                let d = !1;
                u && (r.left -= t.$el[0].scrollLeft);
                const h = [[r.left, r.top], [r.left + t.width, r.top], [r.left, r.top + t.height], [r.left + t.width, r.top + t.height]];
                for (let e = 0; e < h.length; e += 1) {
                    const t = h[e];
                    if (t[0] >= 0 && t[0] <= s && t[1] >= 0 && t[1] <= o) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        d = !0
                    }
                }
                const p = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                d ? (l(), n.off("scroll", c, p)) : a || (a = !0, n.on("scroll", c, p))
            }

            i("beforeInit", (() => {
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
            })), i("init", (() => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l())
            })), i("scroll", (() => {
                t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && l()
            })), i("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l())
            })), i("transitionStart", (() => {
                t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !o) && (t.params.lazy.checkInView ? c() : l())
            })), i("transitionEnd", (() => {
                t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? c() : l())
            })), i("slideChange", (() => {
                const {
                    lazy: e,
                    cssMode: n,
                    watchSlidesProgress: i,
                    touchReleaseOnEdges: s,
                    resistanceRatio: a
                } = t.params;
                e.enabled && (n || i && (s || 0 === a)) && l()
            })), i("destroy", (() => {
                t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
            })), Object.assign(t.lazy, {load: l, loadInSlide: r})
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;

            function s(e, t) {
                const n = function () {
                    let e, t, n;
                    return (i, s) => {
                        for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= s ? t = n : e = n;
                        return e
                    }
                }();
                let i, s;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (s = n(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
                }, this
            }

            function a() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }

            n({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {control: void 0}, i("beforeInit", (() => {
                t.controller.control = t.params.controller.control
            })), i("update", (() => {
                a()
            })), i("resize", (() => {
                a()
            })), i("observerUpdate", (() => {
                a()
            })), i("setTranslate", ((e, n, i) => {
                t.controller.control && t.controller.setTranslate(n, i)
            })), i("setTransition", ((e, n, i) => {
                t.controller.control && t.controller.setTransition(n, i)
            })), Object.assign(t.controller, {
                setTranslate: function (e, n) {
                    const i = t.controller.control;
                    let a, o;
                    const r = t.constructor;

                    function l(e) {
                        const n = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (function (e) {
                            t.controller.spline || (t.controller.spline = t.params.loop ? new s(t.slidesGrid, e.slidesGrid) : new s(t.snapGrid, e.snapGrid))
                        }(e), o = -t.controller.spline.interpolate(-n)), o && "container" !== t.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), o = (n - t.minTranslate()) * a + e.minTranslate()), t.params.controller.inverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setTranslate(o, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }

                    if (Array.isArray(i)) for (let e = 0; e < i.length; e += 1) i[e] !== n && i[e] instanceof r && l(i[e]); else i instanceof r && n !== i && l(i)
                }, setTransition: function (e, n) {
                    const i = t.constructor, s = t.controller.control;
                    let a;

                    function o(n) {
                        n.setTransition(e, t), 0 !== e && (n.transitionStart(), n.params.autoHeight && q((() => {
                            n.updateAutoHeight()
                        })), n.$wrapperEl.transitionEnd((() => {
                            s && (n.params.loop && "slide" === t.params.controller.by && n.loopFix(), n.transitionEnd())
                        })))
                    }

                    if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== n && s[a] instanceof i && o(s[a]); else s instanceof i && n !== s && o(s)
                }
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            });
            let s = null;

            function a(e) {
                const t = s;
                0 !== t.length && (t.html(""), t.html(e))
            }

            function o(e) {
                e.attr("tabIndex", "0")
            }

            function r(e) {
                e.attr("tabIndex", "-1")
            }

            function l(e, t) {
                e.attr("role", t)
            }

            function c(e, t) {
                e.attr("aria-roledescription", t)
            }

            function u(e, t) {
                e.attr("aria-label", t)
            }

            function d(e) {
                e.attr("aria-disabled", !0)
            }

            function h(e) {
                e.attr("aria-disabled", !1)
            }

            function p(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const n = t.params.a11y, i = W(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? a(n.lastSlideMessage) : a(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? a(n.firstSlideMessage) : a(n.prevSlideMessage)), t.pagination && i.is(Ie(t.params.pagination.bulletClass)) && i[0].click()
            }

            function f() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function m() {
                return f() && t.params.pagination.clickable
            }

            const g = (e, t, n) => {
                o(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", p)), u(e, n), function (e, t) {
                    e.attr("aria-controls", t)
                }(e, t)
            }, v = e => {
                const n = e.target.closest(`.${t.params.slideClass}`);
                if (!n || !t.slides.includes(n)) return;
                const i = t.slides.indexOf(n) === t.activeIndex,
                    s = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(n);
                i || s || t.slideTo(t.slides.indexOf(n), 0)
            }, y = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(W(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(W(t.slides), e.slideRole);
                const n = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((i, s) => {
                    const a = W(i), o = t.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : s;
                    u(a, e.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, n))
                }))
            };
            i("beforeInit", (() => {
                s = W(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            })), i("afterInit", (() => {
                t.params.a11y.enabled && (() => {
                    const e = t.params.a11y;
                    t.$el.append(s);
                    const n = t.$el;
                    e.containerRoleDescriptionMessage && c(n, e.containerRoleDescriptionMessage), e.containerMessage && u(n, e.containerMessage);
                    const i = t.$wrapperEl,
                        a = e.id || i.attr("id") || `swiper-wrapper-${o = 16, void 0 === o && (o = 16), "x".repeat(o).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
                    var o;
                    const r = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var l;
                    let d, h;
                    l = a, i.attr("id", l), function (e, t) {
                        e.attr("aria-live", t)
                    }(i, r), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (h = t.navigation.$prevEl), d && d.length && g(d, a, e.nextSlideMessage), h && h.length && g(h, a, e.prevSlideMessage), m() && t.pagination.$el.on("keydown", Ie(t.params.pagination.bulletClass), p), t.$el.on("focus", v, !0)
                })()
            })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && y()
            })), i("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function () {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {$nextEl: e, $prevEl: n} = t.navigation;
                    n && n.length > 0 && (t.isBeginning ? (d(n), r(n)) : (h(n), o(n))), e && e.length > 0 && (t.isEnd ? (d(e), r(e)) : (h(e), o(e)))
                }()
            })), i("paginationUpdate", (() => {
                t.params.a11y.enabled && function () {
                    const e = t.params.a11y;
                    f() && t.pagination.bullets.each((n => {
                        const i = W(n);
                        t.params.pagination.clickable && (o(i), t.params.pagination.renderBullet || (l(i, "button"), u(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))), i.is(`.${t.params.pagination.bulletActiveClass}`) ? i.attr("aria-current", "true") : i.removeAttr("aria-current")
                    }))
                }()
            })), i("destroy", (() => {
                t.params.a11y.enabled && function () {
                    let e, n;
                    s && s.length > 0 && s.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (n = t.navigation.$prevEl), e && e.off("keydown", p), n && n.off("keydown", p), m() && t.pagination.$el.off("keydown", Ie(t.params.pagination.bulletClass), p), t.$el.off("focus", v, !0)
                }()
            }))
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
            let s = !1, a = {};
            const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                r = e => {
                    const t = N();
                    let n;
                    n = e ? new URL(e) : t.location;
                    const i = n.pathname.slice(1).split("/").filter((e => "" !== e)), s = i.length;
                    return {key: i[s - 2], value: i[s - 1]}
                }, l = (e, n) => {
                    const i = N();
                    if (!s || !t.params.history.enabled) return;
                    let a;
                    a = t.params.url ? new URL(t.params.url) : i.location;
                    const r = t.slides.eq(n);
                    let l = o(r.attr("data-history"));
                    if (t.params.history.root.length > 0) {
                        let n = t.params.history.root;
                        "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), l = `${n}/${e}/${l}`
                    } else a.pathname.includes(e) || (l = `${e}/${l}`);
                    t.params.history.keepQuery && (l += a.search);
                    const c = i.history.state;
                    c && c.value === l || (t.params.history.replaceState ? i.history.replaceState({value: l}, null, l) : i.history.pushState({value: l}, null, l))
                }, c = (e, n, i) => {
                    if (n) for (let s = 0, a = t.slides.length; s < a; s += 1) {
                        const a = t.slides.eq(s);
                        if (o(a.attr("data-history")) === n && !a.hasClass(t.params.slideDuplicateClass)) {
                            const n = a.index();
                            t.slideTo(n, e, i)
                        }
                    } else t.slideTo(0, e, i)
                }, u = () => {
                    a = r(t.params.url), c(t.params.speed, a.value, !1)
                };
            i("init", (() => {
                t.params.history.enabled && (() => {
                    const e = N();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                        s = !0, a = r(t.params.url), (a.key || a.value) && (c(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", u))
                    }
                })()
            })), i("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = N();
                    t.params.history.replaceState || e.removeEventListener("popstate", u)
                })()
            })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
                s && l(t.params.history.key, t.activeIndex)
            })), i("slideChange", (() => {
                s && t.params.cssMode && l(t.params.history.key, t.activeIndex)
            }))
        }, function (e) {
            let {swiper: t, extendParams: n, emit: i, on: s} = e, a = !1;
            const o = _(), r = N();
            n({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
            const l = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const n = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === n) return;
                    t.slideTo(n)
                }
            }, c = () => {
                if (a && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && r.history && r.history.replaceState) r.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
                    const e = t.slides.eq(t.activeIndex), n = e.attr("data-hash") || e.attr("data-history");
                    o.location.hash = n || "", i("hashSet")
                }
            };
            s("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    a = !0;
                    const e = o.location.hash.replace("#", "");
                    if (e) {
                        const n = 0;
                        for (let i = 0, s = t.slides.length; i < s; i += 1) {
                            const s = t.slides.eq(i);
                            if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(t.params.slideDuplicateClass)) {
                                const e = s.index();
                                t.slideTo(e, n, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    t.params.hashNavigation.watchState && W(r).on("hashchange", l)
                })()
            })), s("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && W(r).off("hashchange", l)
            })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
                a && c()
            })), s("slideChange", (() => {
                a && t.params.cssMode && c()
            }))
        }, function (e) {
            let t, {swiper: n, extendParams: i, on: s, emit: a} = e;

            function o() {
                const e = n.slides.eq(n.activeIndex);
                let i = n.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay), clearTimeout(t), t = q((() => {
                    let e;
                    n.params.autoplay.reverseDirection ? n.params.loop ? (n.loopFix(), e = n.slidePrev(n.params.speed, !0, !0), a("autoplay")) : n.isBeginning ? n.params.autoplay.stopOnLastSlide ? l() : (e = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0), a("autoplay")) : (e = n.slidePrev(n.params.speed, !0, !0), a("autoplay")) : n.params.loop ? (n.loopFix(), e = n.slideNext(n.params.speed, !0, !0), a("autoplay")) : n.isEnd ? n.params.autoplay.stopOnLastSlide ? l() : (e = n.slideTo(0, n.params.speed, !0, !0), a("autoplay")) : (e = n.slideNext(n.params.speed, !0, !0), a("autoplay")), (n.params.cssMode && n.autoplay.running || !1 === e) && o()
                }), i)
            }

            function r() {
                return void 0 === t && !n.autoplay.running && (n.autoplay.running = !0, a("autoplayStart"), o(), !0)
            }

            function l() {
                return !!n.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), n.autoplay.running = !1, a("autoplayStop"), !0)
            }

            function c(e) {
                n.autoplay.running && (n.autoplay.paused || (t && clearTimeout(t), n.autoplay.paused = !0, 0 !== e && n.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                    n.$wrapperEl[0].addEventListener(e, d)
                })) : (n.autoplay.paused = !1, o())))
            }

            function u() {
                const e = _();
                "hidden" === e.visibilityState && n.autoplay.running && c(), "visible" === e.visibilityState && n.autoplay.paused && (o(), n.autoplay.paused = !1)
            }

            function d(e) {
                n && !n.destroyed && n.$wrapperEl && e.target === n.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                    n.$wrapperEl[0].removeEventListener(e, d)
                })), n.autoplay.paused = !1, n.autoplay.running ? o() : l())
            }

            function h() {
                n.params.autoplay.disableOnInteraction ? l() : (a("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                    n.$wrapperEl[0].removeEventListener(e, d)
                }))
            }

            function p() {
                n.params.autoplay.disableOnInteraction || (n.autoplay.paused = !1, a("autoplayResume"), o())
            }

            n.autoplay = {running: !1, paused: !1}, i({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), s("init", (() => {
                n.params.autoplay.enabled && (r(), _().addEventListener("visibilitychange", u), n.params.autoplay.pauseOnMouseEnter && (n.$el.on("mouseenter", h), n.$el.on("mouseleave", p)))
            })), s("beforeTransitionStart", ((e, t, i) => {
                n.autoplay.running && (i || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(t) : l())
            })), s("sliderFirstMove", (() => {
                n.autoplay.running && (n.params.autoplay.disableOnInteraction ? l() : c())
            })), s("touchEnd", (() => {
                n.params.cssMode && n.autoplay.paused && !n.params.autoplay.disableOnInteraction && o()
            })), s("destroy", (() => {
                n.$el.off("mouseenter", h), n.$el.off("mouseleave", p), n.autoplay.running && l(), _().removeEventListener("visibilitychange", u)
            })), Object.assign(n.autoplay, {pause: c, run: o, start: r, stop: l})
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let s = !1, a = !1;

            function o() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const n = e.clickedIndex, i = e.clickedSlide;
                if (i && W(i).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == n) return;
                let s;
                if (s = e.params.loop ? parseInt(W(e.clickedSlide).attr("data-swiper-slide-index"), 10) : n, t.params.loop) {
                    let e = t.activeIndex;
                    t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                    const n = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                        i = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                    s = void 0 === n ? i : void 0 === i ? n : i - e < e - n ? i : n
                }
                t.slideTo(s)
            }

            function r() {
                const {thumbs: e} = t.params;
                if (s) return !1;
                s = !0;
                const n = t.constructor;
                if (e.swiper instanceof n) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }); else if (G(e.swiper)) {
                    const i = Object.assign({}, e.swiper);
                    Object.assign(i, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new n(i), a = !0
                }
                return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", o), !0
            }

            function l(e) {
                const n = t.thumbs.swiper;
                if (!n || n.destroyed) return;
                const i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                let s = 1;
                const a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (s = 1), s = Math.floor(s), n.slides.removeClass(a), n.params.loop || n.params.virtual && n.params.virtual.enabled) for (let e = 0; e < s; e += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(a); else for (let e = 0; e < s; e += 1) n.slides.eq(t.realIndex + e).addClass(a);
                const o = t.params.thumbs.autoScrollOffset, r = o && !n.params.loop;
                if (t.realIndex !== n.realIndex || r) {
                    let s, a, l = n.activeIndex;
                    if (n.params.loop) {
                        n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                        const e = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            i = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        s = void 0 === e ? i : void 0 === i ? e : i - l == l - e ? n.params.slidesPerGroup > 1 ? i : l : i - l < l - e ? i : e, a = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else s = t.realIndex, a = s > t.previousIndex ? "next" : "prev";
                    r && (s += "next" === a ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(s) < 0 && (n.params.centeredSlides ? s = s > l ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > l && n.params.slidesPerGroup, n.slideTo(s, e ? 0 : void 0))
                }
            }

            t.thumbs = {swiper: null}, i("beforeInit", (() => {
                const {thumbs: e} = t.params;
                e && e.swiper && (r(), l(!0))
            })), i("slideChange update resize observerUpdate", (() => {
                l()
            })), i("setTransition", ((e, n) => {
                const i = t.thumbs.swiper;
                i && !i.destroyed && i.setTransition(n)
            })), i("beforeDestroy", (() => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && a && e.destroy()
            })), Object.assign(t.thumbs, {init: r, update: l})
        }, function (e) {
            let {swiper: t, extendParams: n, emit: i, once: s} = e;
            n({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function () {
                        const e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                    }, onTouchMove: function () {
                        const {touchEventsData: e, touches: n} = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: n[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({position: n[t.isHorizontal() ? "currentX" : "currentY"], time: V()})
                    }, onTouchEnd: function (e) {
                        let {currentPos: n} = e;
                        const {params: a, $wrapperEl: o, rtlTranslate: r, snapGrid: l, touchEventsData: c} = t,
                            u = V() - c.touchStartTime;
                        if (n < -t.minTranslate()) t.slideTo(t.activeIndex); else if (n > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1); else {
                            if (a.freeMode.momentum) {
                                if (c.velocities.length > 1) {
                                    const e = c.velocities.pop(), n = c.velocities.pop(), i = e.position - n.position,
                                        s = e.time - n.time;
                                    t.velocity = i / s, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (s > 150 || V() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= a.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                                let e = 1e3 * a.freeMode.momentumRatio;
                                const n = t.velocity * e;
                                let u = t.translate + n;
                                r && (u = -u);
                                let d, h = !1;
                                const p = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                                let f;
                                if (u < t.maxTranslate()) a.freeMode.momentumBounce ? (u + t.maxTranslate() < -p && (u = t.maxTranslate() - p), d = t.maxTranslate(), h = !0, c.allowMomentumBounce = !0) : u = t.maxTranslate(), a.loop && a.centeredSlides && (f = !0); else if (u > t.minTranslate()) a.freeMode.momentumBounce ? (u - t.minTranslate() > p && (u = t.minTranslate() + p), d = t.minTranslate(), h = !0, c.allowMomentumBounce = !0) : u = t.minTranslate(), a.loop && a.centeredSlides && (f = !0); else if (a.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1) if (l[t] > -u) {
                                        e = t;
                                        break
                                    }
                                    u = Math.abs(l[e] - u) < Math.abs(l[e - 1] - u) || "next" === t.swipeDirection ? l[e] : l[e - 1], u = -u
                                }
                                if (f && s("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                    if (e = r ? Math.abs((-u - t.translate) / t.velocity) : Math.abs((u - t.translate) / t.velocity), a.freeMode.sticky) {
                                        const n = Math.abs((r ? -u : u) - t.translate),
                                            i = t.slidesSizesGrid[t.activeIndex];
                                        e = n < i ? a.speed : n < 2 * i ? 1.5 * a.speed : 2.5 * a.speed
                                    }
                                } else if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode.momentumBounce && h ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(u), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((() => {
                                    t && !t.destroyed && c.allowMomentumBounce && (i("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                                        t.setTranslate(d), o.transitionEnd((() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(u), t.setTransition(e), t.setTranslate(u), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((() => {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(u), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode && i("_freeModeNoMomentumRelease")
                            }
                            (!a.freeMode.momentum || u >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function (e) {
            let t, n, i, {swiper: s, extendParams: a} = e;
            a({grid: {rows: 1, fill: "column"}}), s.grid = {
                initSlides: e => {
                    const {slidesPerView: a} = s.params, {rows: o, fill: r} = s.params.grid;
                    n = t / o, i = Math.floor(e / o), t = Math.floor(e / o) === e / o ? e : Math.ceil(e / o) * o, "auto" !== a && "row" === r && (t = Math.max(t, a * o))
                }, updateSlide: (e, a, o, r) => {
                    const {slidesPerGroup: l, spaceBetween: c} = s.params, {rows: u, fill: d} = s.params.grid;
                    let h, p, f;
                    if ("row" === d && l > 1) {
                        const n = Math.floor(e / (l * u)), i = e - u * l * n,
                            s = 0 === n ? l : Math.min(Math.ceil((o - n * u * l) / u), l);
                        f = Math.floor(i / s), p = i - f * s + n * l, h = p + f * t / u, a.css({
                            "-webkit-order": h,
                            order: h
                        })
                    } else "column" === d ? (p = Math.floor(e / u), f = e - p * u, (p > i || p === i && f === u - 1) && (f += 1, f >= u && (f = 0, p += 1))) : (f = Math.floor(e / n), p = e - f * n);
                    a.css(r("margin-top"), 0 !== f ? c && `${c}px` : "")
                }, updateWrapperSize: (e, n, i) => {
                    const {spaceBetween: a, centeredSlides: o, roundLengths: r} = s.params, {rows: l} = s.params.grid;
                    if (s.virtualSize = (e + a) * t, s.virtualSize = Math.ceil(s.virtualSize / l) - a, s.$wrapperEl.css({[i("width")]: `${s.virtualSize + a}px`}), o) {
                        n.splice(0, n.length);
                        const e = [];
                        for (let t = 0; t < n.length; t += 1) {
                            let i = n[t];
                            r && (i = Math.floor(i)), n[t] < s.virtualSize + n[0] && e.push(i)
                        }
                        n.push(...e)
                    }
                }
            }
        }, function (e) {
            let {swiper: t} = e;
            Object.assign(t, {
                appendSlide: Pe.bind(t),
                prependSlide: $e.bind(t),
                addSlide: Le.bind(t),
                removeSlide: _e.bind(t),
                removeAllSlides: Oe.bind(t)
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({fadeEffect: {crossFade: !1, transformEl: null}}), Ne({
                effect: "fade",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e} = t, n = t.params.fadeEffect;
                    for (let i = 0; i < e.length; i += 1) {
                        const e = t.slides.eq(i);
                        let s = -e[0].swiperSlideOffset;
                        t.params.virtualTranslate || (s -= t.translate);
                        let a = 0;
                        t.isHorizontal() || (a = s, s = 0);
                        const o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                        ze(n, e).css({opacity: o}).transform(`translate3d(${s}px, ${a}px, 0px)`)
                    }
                },
                setTransition: e => {
                    const {transformEl: n} = t.params.fadeEffect;
                    (n ? t.slides.find(n) : t.slides).transition(e), je({
                        swiper: t,
                        duration: e,
                        transformEl: n,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
            const s = (e, t, n) => {
                let i = n ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    s = n ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = W(`<div class="swiper-slide-shadow-${n ? "left" : "top"}"></div>`), e.append(i)), 0 === s.length && (s = W(`<div class="swiper-slide-shadow-${n ? "right" : "bottom"}"></div>`), e.append(s)), i.length && (i[0].style.opacity = Math.max(-t, 0)), s.length && (s[0].style.opacity = Math.max(t, 0))
            };
            Ne({
                effect: "cube",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {
                        $el: e,
                        $wrapperEl: n,
                        slides: i,
                        width: a,
                        height: o,
                        rtlTranslate: r,
                        size: l,
                        browser: c
                    } = t, u = t.params.cubeEffect, d = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                    let p, f = 0;
                    u.shadow && (d ? (p = n.find(".swiper-cube-shadow"), 0 === p.length && (p = W('<div class="swiper-cube-shadow"></div>'), n.append(p)), p.css({height: `${a}px`})) : (p = e.find(".swiper-cube-shadow"), 0 === p.length && (p = W('<div class="swiper-cube-shadow"></div>'), e.append(p))));
                    for (let e = 0; e < i.length; e += 1) {
                        const t = i.eq(e);
                        let n = e;
                        h && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let a = 90 * n, o = Math.floor(a / 360);
                        r && (a = -a, o = Math.floor(-a / 360));
                        const c = Math.max(Math.min(t[0].progress, 1), -1);
                        let p = 0, m = 0, g = 0;
                        n % 4 == 0 ? (p = 4 * -o * l, g = 0) : (n - 1) % 4 == 0 ? (p = 0, g = 4 * -o * l) : (n - 2) % 4 == 0 ? (p = l + 4 * o * l, g = l) : (n - 3) % 4 == 0 && (p = -l, g = 3 * l + 4 * l * o), r && (p = -p), d || (m = p, p = 0);
                        const v = `rotateX(${d ? 0 : -a}deg) rotateY(${d ? a : 0}deg) translate3d(${p}px, ${m}px, ${g}px)`;
                        c <= 1 && c > -1 && (f = 90 * n + 90 * c, r && (f = 90 * -n - 90 * c)), t.transform(v), u.slideShadows && s(t, c, d)
                    }
                    if (n.css({
                        "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                        "transform-origin": `50% 50% -${l / 2}px`
                    }), u.shadow) if (d) p.transform(`translate3d(0px, ${a / 2 + u.shadowOffset}px, ${-a / 2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`); else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            n = u.shadowScale, i = u.shadowScale / t, s = u.shadowOffset;
                        p.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${o / 2 + s}px, ${-o / 2 / i}px) rotateX(-90deg)`)
                    }
                    const m = c.isSafari || c.isWebView ? -l / 2 : 0;
                    n.transform(`translate3d(0px,0,${m}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), n[0].style.setProperty("--swiper-cube-translate-z", `${m}px`)
                },
                setTransition: e => {
                    const {$el: n, slides: i} = t;
                    i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.each((t => {
                        const n = Math.max(Math.min(t.progress, 1), -1);
                        s(W(t), n, e)
                    }))
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
            const s = (e, n, i) => {
                let s = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    a = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === s.length && (s = Fe(i, e, t.isHorizontal() ? "left" : "top")), 0 === a.length && (a = Fe(i, e, t.isHorizontal() ? "right" : "bottom")), s.length && (s[0].style.opacity = Math.max(-n, 0)), a.length && (a[0].style.opacity = Math.max(n, 0))
            };
            Ne({
                effect: "flip",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, rtlTranslate: n} = t, i = t.params.flipEffect;
                    for (let a = 0; a < e.length; a += 1) {
                        const o = e.eq(a);
                        let r = o[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(o[0].progress, 1), -1));
                        const l = o[0].swiperSlideOffset;
                        let c = -180 * r, u = 0, d = t.params.cssMode ? -l - t.translate : -l, h = 0;
                        t.isHorizontal() ? n && (c = -c) : (h = d, d = 0, u = -c, c = 0), o[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, i.slideShadows && s(o, r, i);
                        const p = `translate3d(${d}px, ${h}px, 0px) rotateX(${u}deg) rotateY(${c}deg)`;
                        ze(i, o).transform(p)
                    }
                },
                setTransition: e => {
                    const {transformEl: n} = t.params.flipEffect;
                    (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), je({
                        swiper: t,
                        duration: e,
                        transformEl: n
                    })
                },
                recreateShadows: () => {
                    const e = t.params.flipEffect;
                    t.slides.each((n => {
                        const i = W(n);
                        let a = i[0].progress;
                        t.params.flipEffect.limitRotation && (a = Math.max(Math.min(n.progress, 1), -1)), s(i, a, e)
                    }))
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), Ne({
                effect: "coverflow", swiper: t, on: i, setTranslate: () => {
                    const {width: e, height: n, slides: i, slidesSizesGrid: s} = t, a = t.params.coverflowEffect,
                        o = t.isHorizontal(), r = t.translate, l = o ? e / 2 - r : n / 2 - r,
                        c = o ? a.rotate : -a.rotate, u = a.depth;
                    for (let e = 0, t = i.length; e < t; e += 1) {
                        const t = i.eq(e), n = s[e], r = (l - t[0].swiperSlideOffset - n / 2) / n,
                            d = "function" == typeof a.modifier ? a.modifier(r) : r * a.modifier;
                        let h = o ? c * d : 0, p = o ? 0 : c * d, f = -u * Math.abs(d), m = a.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(a.stretch) / 100 * n);
                        let g = o ? 0 : m * d, v = o ? m * d : 0, y = 1 - (1 - a.scale) * Math.abs(d);
                        Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(y) < .001 && (y = 0);
                        const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${h}deg) scale(${y})`;
                        if (ze(a, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(d)), a.slideShadows) {
                            let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                n = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = Fe(a, t, o ? "left" : "top")), 0 === n.length && (n = Fe(a, t, o ? "right" : "bottom")), e.length && (e[0].style.opacity = d > 0 ? d : 0), n.length && (n[0].style.opacity = -d > 0 ? -d : 0)
                        }
                    }
                }, setTransition: e => {
                    const {transformEl: n} = t.params.coverflowEffect;
                    (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                    next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
                }
            });
            const s = e => "string" == typeof e ? e : `${e}px`;
            Ne({
                effect: "creative",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, $wrapperEl: n, slidesSizesGrid: i} = t,
                        a = t.params.creativeEffect, {progressMultiplier: o} = a, r = t.params.centeredSlides;
                    if (r) {
                        const e = i[0] / 2 - t.params.slidesOffsetBefore || 0;
                        n.transform(`translateX(calc(50% - ${e}px))`)
                    }
                    for (let n = 0; n < e.length; n += 1) {
                        const i = e.eq(n), l = i[0].progress,
                            c = Math.min(Math.max(i[0].progress, -a.limitProgress), a.limitProgress);
                        let u = c;
                        r || (u = Math.min(Math.max(i[0].originalProgress, -a.limitProgress), a.limitProgress));
                        const d = i[0].swiperSlideOffset, h = [t.params.cssMode ? -d - t.translate : -d, 0, 0],
                            p = [0, 0, 0];
                        let f = !1;
                        t.isHorizontal() || (h[1] = h[0], h[0] = 0);
                        let m = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                        c < 0 ? (m = a.next, f = !0) : c > 0 && (m = a.prev, f = !0), h.forEach(((e, t) => {
                            h[t] = `calc(${e}px + (${s(m.translate[t])} * ${Math.abs(c * o)}))`
                        })), p.forEach(((e, t) => {
                            p[t] = m.rotate[t] * Math.abs(c * o)
                        })), i[0].style.zIndex = -Math.abs(Math.round(l)) + e.length;
                        const g = h.join(", "), v = `rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,
                            y = u < 0 ? `scale(${1 + (1 - m.scale) * u * o})` : `scale(${1 - (1 - m.scale) * u * o})`,
                            b = u < 0 ? 1 + (1 - m.opacity) * u * o : 1 - (1 - m.opacity) * u * o,
                            w = `translate3d(${g}) ${v} ${y}`;
                        if (f && m.shadow || !f) {
                            let e = i.children(".swiper-slide-shadow");
                            if (0 === e.length && m.shadow && (e = Fe(a, i)), e.length) {
                                const t = a.shadowPerProgress ? c * (1 / a.limitProgress) : c;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const x = ze(a, i);
                        x.transform(w).css({opacity: b}), m.origin && x.css("transform-origin", m.origin)
                    }
                },
                setTransition: e => {
                    const {transformEl: n} = t.params.creativeEffect;
                    (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), je({
                        swiper: t,
                        duration: e,
                        transformEl: n,
                        allSlides: !0
                    })
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }, function (e) {
            let {swiper: t, extendParams: n, on: i} = e;
            n({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0}}), Ne({
                effect: "cards",
                swiper: t,
                on: i,
                setTranslate: () => {
                    const {slides: e, activeIndex: n} = t, i = t.params.cardsEffect, {
                        startTranslate: s,
                        isTouched: a
                    } = t.touchEventsData, o = t.translate;
                    for (let r = 0; r < e.length; r += 1) {
                        const l = e.eq(r), c = l[0].progress, u = Math.min(Math.max(c, -4), 4);
                        let d = l[0].swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (d -= e[0].swiperSlideOffset);
                        let h = t.params.cssMode ? -d - t.translate : -d, p = 0;
                        const f = -100 * Math.abs(u);
                        let m = 1, g = -2 * u, v = 8 - .75 * Math.abs(u);
                        const y = t.virtual && t.params.virtual.enabled ? t.virtual.from + r : r,
                            b = (y === n || y === n - 1) && u > 0 && u < 1 && (a || t.params.cssMode) && o < s,
                            w = (y === n || y === n + 1) && u < 0 && u > -1 && (a || t.params.cssMode) && o > s;
                        if (b || w) {
                            const e = (1 - Math.abs((Math.abs(u) - .5) / .5)) ** .5;
                            g += -28 * u * e, m += -.5 * e, v += 96 * e, p = -25 * e * Math.abs(u) + "%"
                        }
                        if (h = u < 0 ? `calc(${h}px + (${v * Math.abs(u)}%))` : u > 0 ? `calc(${h}px + (-${v * Math.abs(u)}%))` : `${h}px`, !t.isHorizontal()) {
                            const e = p;
                            p = h, h = e
                        }
                        const x = u < 0 ? "" + (1 + (1 - m) * u) : "" + (1 - (1 - m) * u),
                            C = `\n        translate3d(${h}, ${p}, ${f}px)\n        rotateZ(${i.rotate ? g : 0}deg)\n        scale(${x})\n      `;
                        if (i.slideShadows) {
                            let e = l.find(".swiper-slide-shadow");
                            0 === e.length && (e = Fe(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(u) - .5) / .5, 0), 1))
                        }
                        l[0].style.zIndex = -Math.abs(Math.round(c)) + e.length, ze(i, l).transform(C)
                    }
                },
                setTransition: e => {
                    const {transformEl: n} = t.params.cardsEffect;
                    (n ? t.slides.find(n) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), je({
                        swiper: t,
                        duration: e,
                        transformEl: n
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
            })
        }];

        function He(e) {
            return He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, He(e)
        }

        function Re(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Ye(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function We(e, t, n) {
            return t && Ye(e.prototype, t), n && Ye(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function qe(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && Xe(e, t)
        }

        function Ve(e) {
            return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, Ve(e)
        }

        function Xe(e, t) {
            return Xe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            }, Xe(e, t)
        }

        function Ge(e, t) {
            if (null == e) return {};
            var n, i, s = function (e, t) {
                if (null == e) return {};
                var n, i, s = {}, a = Object.keys(e);
                for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (s[n] = e[n]);
                return s
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
            }
            return s
        }

        function Ze(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }

        function Ue(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Ve(e);
                if (t) {
                    var s = Ve(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else n = i.apply(this, arguments);
                return Ze(this, n)
            }
        }

        function Je(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ve(e));) ;
            return e
        }

        function Qe() {
            return Qe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var i = Je(e, t);
                if (i) {
                    var s = Object.getOwnPropertyDescriptor(i, t);
                    return s.get ? s.get.call(arguments.length < 3 ? e : n) : s.value
                }
            }, Qe.apply(this, arguments)
        }

        function Ke(e, t, n, i) {
            return Ke = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, t, n, i) {
                var s, a = Je(e, t);
                if (a) {
                    if ((s = Object.getOwnPropertyDescriptor(a, t)).set) return s.set.call(i, n), !0;
                    if (!s.writable) return !1
                }
                if (s = Object.getOwnPropertyDescriptor(i, t)) {
                    if (!s.writable) return !1;
                    s.value = n, Object.defineProperty(i, t, s)
                } else !function (e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(i, t, n);
                return !0
            }, Ke(e, t, n, i)
        }

        function et(e, t, n, i, s) {
            if (!Ke(e, t, n, i || e) && s) throw new Error("failed to set property");
            return n
        }

        function tt(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, s, a = [], o = !0, r = !1;
                    try {
                        for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0) ;
                    } catch (e) {
                        r = !0, s = e
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (r) throw s
                        }
                    }
                    return a
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return nt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function nt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        De.use(Be);
        var it = function () {
            function e(t) {
                Re(this, e), Object.assign(this, {inserted: "", rawInserted: "", skip: !1, tailShift: 0}, t)
            }

            return We(e, [{
                key: "aggregate", value: function (e) {
                    return this.rawInserted += e.rawInserted, this.skip = this.skip || e.skip, this.inserted += e.inserted, this.tailShift += e.tailShift, this
                }
            }, {
                key: "offset", get: function () {
                    return this.tailShift + this.inserted.length
                }
            }]), e
        }();

        function st(e) {
            return "string" == typeof e || e instanceof String
        }

        var at = "NONE", ot = "LEFT", rt = "FORCE_LEFT", lt = "RIGHT", ct = "FORCE_RIGHT";

        function ut(e) {
            return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
        }

        function dt(e) {
            return Array.isArray(e) ? e : [e, new it]
        }

        function ht(e, t) {
            if (t === e) return !0;
            var n, i = Array.isArray(t), s = Array.isArray(e);
            if (i && s) {
                if (t.length != e.length) return !1;
                for (n = 0; n < t.length; n++) if (!ht(t[n], e[n])) return !1;
                return !0
            }
            if (i != s) return !1;
            if (t && e && "object" === He(t) && "object" === He(e)) {
                var a = t instanceof Date, o = e instanceof Date;
                if (a && o) return t.getTime() == e.getTime();
                if (a != o) return !1;
                var r = t instanceof RegExp, l = e instanceof RegExp;
                if (r && l) return t.toString() == e.toString();
                if (r != l) return !1;
                var c = Object.keys(t);
                for (n = 0; n < c.length; n++) if (!Object.prototype.hasOwnProperty.call(e, c[n])) return !1;
                for (n = 0; n < c.length; n++) if (!ht(e[c[n]], t[c[n]])) return !1;
                return !0
            }
            return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString()
        }

        var pt = function () {
            function e(t, n, i, s) {
                for (Re(this, e), this.value = t, this.cursorPos = n, this.oldValue = i, this.oldSelection = s; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) --this.oldSelection.start
            }

            return We(e, [{
                key: "startChangePos", get: function () {
                    return Math.min(this.cursorPos, this.oldSelection.start)
                }
            }, {
                key: "insertedCount", get: function () {
                    return this.cursorPos - this.startChangePos
                }
            }, {
                key: "inserted", get: function () {
                    return this.value.substr(this.startChangePos, this.insertedCount)
                }
            }, {
                key: "removedCount", get: function () {
                    return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
                }
            }, {
                key: "removed", get: function () {
                    return this.oldValue.substr(this.startChangePos, this.removedCount)
                }
            }, {
                key: "head", get: function () {
                    return this.value.substring(0, this.startChangePos)
                }
            }, {
                key: "tail", get: function () {
                    return this.value.substring(this.startChangePos + this.insertedCount)
                }
            }, {
                key: "removeDirection", get: function () {
                    return !this.removedCount || this.insertedCount ? at : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? ot : lt
                }
            }]), e
        }(), ft = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 ? arguments[2] : void 0;
                Re(this, e), this.value = t, this.from = n, this.stop = i
            }

            return We(e, [{
                key: "toString", value: function () {
                    return this.value
                }
            }, {
                key: "extend", value: function (e) {
                    this.value += String(e)
                }
            }, {
                key: "appendTo", value: function (e) {
                    return e.append(this.toString(), {tail: !0}).aggregate(e._appendPlaceholder())
                }
            }, {
                key: "state", get: function () {
                    return {value: this.value, from: this.from, stop: this.stop}
                }, set: function (e) {
                    Object.assign(this, e)
                }
            }, {
                key: "unshift", value: function (e) {
                    if (!this.value.length || null != e && this.from >= e) return "";
                    var t = this.value[0];
                    return this.value = this.value.slice(1), t
                }
            }, {
                key: "shift", value: function () {
                    if (!this.value.length) return "";
                    var e = this.value[this.value.length - 1];
                    return this.value = this.value.slice(0, -1), e
                }
            }]), e
        }();

        function mt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new mt.InputMask(e, t)
        }

        var gt = function () {
            function e(t) {
                Re(this, e), this._value = "", this._update(Object.assign({}, e.DEFAULTS, t)), this.isInitialized = !0
            }

            return We(e, [{
                key: "updateOptions", value: function (e) {
                    Object.keys(e).length && this.withValueRefresh(this._update.bind(this, e))
                }
            }, {
                key: "_update", value: function (e) {
                    Object.assign(this, e)
                }
            }, {
                key: "state", get: function () {
                    return {_value: this.value}
                }, set: function (e) {
                    this._value = e._value
                }
            }, {
                key: "reset", value: function () {
                    this._value = ""
                }
            }, {
                key: "value", get: function () {
                    return this._value
                }, set: function (e) {
                    this.resolve(e)
                }
            }, {
                key: "resolve", value: function (e) {
                    return this.reset(), this.append(e, {input: !0}, ""), this.doCommit(), this.value
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this.value
                }, set: function (e) {
                    this.reset(), this.append(e, {}, ""), this.doCommit()
                }
            }, {
                key: "typedValue", get: function () {
                    return this.doParse(this.value)
                }, set: function (e) {
                    this.value = this.doFormat(e)
                }
            }, {
                key: "rawInputValue", get: function () {
                    return this.extractInput(0, this.value.length, {raw: !0})
                }, set: function (e) {
                    this.reset(), this.append(e, {raw: !0}, ""), this.doCommit()
                }
            }, {
                key: "isComplete", get: function () {
                    return !0
                }
            }, {
                key: "isFilled", get: function () {
                    return this.isComplete
                }
            }, {
                key: "nearestInputPos", value: function (e, t) {
                    return e
                }
            }, {
                key: "extractInput", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return this.value.slice(e, t)
                }
            }, {
                key: "extractTail", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return new ft(this.extractInput(e, t), e)
                }
            }, {
                key: "appendTail", value: function (e) {
                    return st(e) && (e = new ft(String(e))), e.appendTo(this)
                }
            }, {
                key: "_appendCharRaw", value: function (e) {
                    return e ? (this._value += e, new it({inserted: e, rawInserted: e})) : new it
                }
            }, {
                key: "_appendChar", value: function (e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 ? arguments[2] : void 0, s = this.state, a = dt(this.doPrepare(e, n)),
                        o = tt(a, 2);
                    if (e = o[0], (t = (t = o[1]).aggregate(this._appendCharRaw(e, n))).inserted) {
                        var r, l = !1 !== this.doValidate(n);
                        if (l && null != i) {
                            var c = this.state;
                            !0 === this.overwrite && (r = i.state, i.unshift(this.value.length));
                            var u = this.appendTail(i);
                            (l = u.rawInserted === i.toString()) && u.inserted || "shift" !== this.overwrite || (this.state = c, r = i.state, i.shift(), l = (u = this.appendTail(i)).rawInserted === i.toString()), l && u.inserted && (this.state = c)
                        }
                        l || (t = new it, this.state = s, i && r && (i.state = r))
                    }
                    return t
                }
            }, {
                key: "_appendPlaceholder", value: function () {
                    return new it
                }
            }, {
                key: "_appendEager", value: function () {
                    return new it
                }
            }, {
                key: "append", value: function (e, t, n) {
                    if (!st(e)) throw new Error("value should be string");
                    var i = new it, s = st(n) ? new ft(String(n)) : n;
                    t && t.tail && (t._beforeTailState = this.state);
                    for (var a = 0; a < e.length; ++a) i.aggregate(this._appendChar(e[a], t, s));
                    return null != s && (i.tailShift += this.appendTail(s).tailShift), this.eager && null != t && t.input && e && i.aggregate(this._appendEager()), i
                }
            }, {
                key: "remove", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return this._value = this.value.slice(0, e) + this.value.slice(t), new it
                }
            }, {
                key: "withValueRefresh", value: function (e) {
                    if (this._refreshing || !this.isInitialized) return e();
                    this._refreshing = !0;
                    var t = this.rawInputValue, n = this.value, i = e();
                    return this.rawInputValue = t, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, i
                }
            }, {
                key: "runIsolated", value: function (e) {
                    if (this._isolated || !this.isInitialized) return e(this);
                    this._isolated = !0;
                    var t = this.state, n = e(this);
                    return this.state = t, delete this._isolated, n
                }
            }, {
                key: "doPrepare", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.prepare ? this.prepare(e, this, t) : e
                }
            }, {
                key: "doValidate", value: function (e) {
                    return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e))
                }
            }, {
                key: "doCommit", value: function () {
                    this.commit && this.commit(this.value, this)
                }
            }, {
                key: "doFormat", value: function (e) {
                    return this.format ? this.format(e, this) : e
                }
            }, {
                key: "doParse", value: function (e) {
                    return this.parse ? this.parse(e, this) : e
                }
            }, {
                key: "splice", value: function (e, t, n, i) {
                    var s, a = e + t, o = this.extractTail(a);
                    this.eager && (i = function (e) {
                        switch (e) {
                            case ot:
                                return rt;
                            case lt:
                                return ct;
                            default:
                                return e
                        }
                    }(i), s = this.extractInput(0, a, {raw: !0}));
                    var r = this.nearestInputPos(e, t > 1 && 0 !== e && !this.eager ? at : i),
                        l = new it({tailShift: r - e}).aggregate(this.remove(r));
                    if (this.eager && i !== at && s === this.rawInputValue) if (i === rt) for (var c; s === this.rawInputValue && (c = this.value.length);) l.aggregate(new it({tailShift: -1})).aggregate(this.remove(c - 1)); else i === ct && o.unshift();
                    return l.aggregate(this.append(n, {input: !0}, o))
                }
            }, {
                key: "maskEquals", value: function (e) {
                    return this.mask === e
                }
            }]), e
        }();

        function vt(e) {
            if (null == e) throw new Error("mask property should be defined");
            return e instanceof RegExp ? mt.MaskedRegExp : st(e) ? mt.MaskedPattern : e instanceof Date || e === Date ? mt.MaskedDate : e instanceof Number || "number" == typeof e || e === Number ? mt.MaskedNumber : Array.isArray(e) || e === Array ? mt.MaskedDynamic : mt.Masked && e.prototype instanceof mt.Masked ? e : e instanceof mt.Masked ? e.constructor : e instanceof Function ? mt.MaskedFunction : (console.warn("Mask not found for mask", e), mt.Masked)
        }

        function yt(e) {
            if (mt.Masked && e instanceof mt.Masked) return e;
            var t = (e = Object.assign({}, e)).mask;
            if (mt.Masked && t instanceof mt.Masked) return t;
            var n = vt(t);
            if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
            return new n(e)
        }

        gt.DEFAULTS = {
            format: function (e) {
                return e
            }, parse: function (e) {
                return e
            }
        }, mt.Masked = gt, mt.createMask = yt;
        var bt = ["mask"], wt = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        }, xt = function () {
            function e(t) {
                Re(this, e);
                var n = t.mask, i = Ge(t, bt);
                this.masked = yt({mask: n}), Object.assign(this, i)
            }

            return We(e, [{
                key: "reset", value: function () {
                    this.isFilled = !1, this.masked.reset()
                }
            }, {
                key: "remove", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return 0 === e && t >= 1 ? (this.isFilled = !1, this.masked.remove(e, t)) : new it
                }
            }, {
                key: "value", get: function () {
                    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this.masked.unmaskedValue
                }
            }, {
                key: "isComplete", get: function () {
                    return Boolean(this.masked.value) || this.isOptional
                }
            }, {
                key: "_appendChar", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.isFilled) return new it;
                    var n = this.masked.state, i = this.masked._appendChar(e, t);
                    return i.inserted && !1 === this.doValidate(t) && (i.inserted = i.rawInserted = "", this.masked.state = n), i.inserted || this.isOptional || this.lazy || t.input || (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = Boolean(i.inserted), i
                }
            }, {
                key: "append", value: function () {
                    var e;
                    return (e = this.masked).append.apply(e, arguments)
                }
            }, {
                key: "_appendPlaceholder", value: function () {
                    var e = new it;
                    return this.isFilled || this.isOptional || (this.isFilled = !0, e.inserted = this.placeholderChar), e
                }
            }, {
                key: "_appendEager", value: function () {
                    return new it
                }
            }, {
                key: "extractTail", value: function () {
                    var e;
                    return (e = this.masked).extractTail.apply(e, arguments)
                }
            }, {
                key: "appendTail", value: function () {
                    var e;
                    return (e = this.masked).appendTail.apply(e, arguments)
                }
            }, {
                key: "extractInput", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return this.masked.extractInput(e, t, n)
                }
            }, {
                key: "nearestInputPos", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at, n = 0,
                        i = this.value.length, s = Math.min(Math.max(e, n), i);
                    switch (t) {
                        case ot:
                        case rt:
                            return this.isComplete ? s : n;
                        case lt:
                        case ct:
                            return this.isComplete ? s : i;
                        default:
                            return s
                    }
                }
            }, {
                key: "doValidate", value: function () {
                    var e, t;
                    return (e = this.masked).doValidate.apply(e, arguments) && (!this.parent || (t = this.parent).doValidate.apply(t, arguments))
                }
            }, {
                key: "doCommit", value: function () {
                    this.masked.doCommit()
                }
            }, {
                key: "state", get: function () {
                    return {masked: this.masked.state, isFilled: this.isFilled}
                }, set: function (e) {
                    this.masked.state = e.masked, this.isFilled = e.isFilled
                }
            }]), e
        }(), Ct = function () {
            function e(t) {
                Re(this, e), Object.assign(this, t), this._value = "", this.isFixed = !0
            }

            return We(e, [{
                key: "value", get: function () {
                    return this._value
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this.isUnmasking ? this.value : ""
                }
            }, {
                key: "reset", value: function () {
                    this._isRawInput = !1, this._value = ""
                }
            }, {
                key: "remove", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    return this._value = this._value.slice(0, e) + this._value.slice(t), this._value || (this._isRawInput = !1), new it
                }
            }, {
                key: "nearestInputPos", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at, n = 0,
                        i = this._value.length;
                    switch (t) {
                        case ot:
                        case rt:
                            return n;
                        default:
                            return i
                    }
                }
            }, {
                key: "extractInput", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.raw && this._isRawInput && this._value.slice(e, t) || ""
                }
            }, {
                key: "isComplete", get: function () {
                    return !0
                }
            }, {
                key: "isFilled", get: function () {
                    return Boolean(this._value)
                }
            }, {
                key: "_appendChar", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = new it;
                    if (this._value) return n;
                    var i = this.char === e, s = i && (this.isUnmasking || t.input || t.raw) && !this.eager && !t.tail;
                    return s && (n.rawInserted = this.char), this._value = n.inserted = this.char, this._isRawInput = s && (t.raw || t.input), n
                }
            }, {
                key: "_appendEager", value: function () {
                    return this._appendChar(this.char)
                }
            }, {
                key: "_appendPlaceholder", value: function () {
                    var e = new it;
                    return this._value || (this._value = e.inserted = this.char), e
                }
            }, {
                key: "extractTail", value: function () {
                    return arguments.length > 1 && void 0 !== arguments[1] || this.value.length, new ft("")
                }
            }, {
                key: "appendTail", value: function (e) {
                    return st(e) && (e = new ft(String(e))), e.appendTo(this)
                }
            }, {
                key: "append", value: function (e, t, n) {
                    var i = this._appendChar(e[0], t);
                    return null != n && (i.tailShift += this.appendTail(n).tailShift), i
                }
            }, {
                key: "doCommit", value: function () {
                }
            }, {
                key: "state", get: function () {
                    return {_value: this._value, _isRawInput: this._isRawInput}
                }, set: function (e) {
                    Object.assign(this, e)
                }
            }]), e
        }(), Et = ["chunks"], kt = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Re(this, e), this.chunks = t, this.from = n
            }

            return We(e, [{
                key: "toString", value: function () {
                    return this.chunks.map(String).join("")
                }
            }, {
                key: "extend", value: function (t) {
                    if (String(t)) {
                        st(t) && (t = new ft(String(t)));
                        var n = this.chunks[this.chunks.length - 1],
                            i = n && (n.stop === t.stop || null == t.stop) && t.from === n.from + n.toString().length;
                        if (t instanceof ft) i ? n.extend(t.toString()) : this.chunks.push(t); else if (t instanceof e) {
                            if (null == t.stop) for (var s; t.chunks.length && null == t.chunks[0].stop;) (s = t.chunks.shift()).from += t.from, this.extend(s);
                            t.toString() && (t.stop = t.blockIndex, this.chunks.push(t))
                        }
                    }
                }
            }, {
                key: "appendTo", value: function (t) {
                    if (!(t instanceof mt.MaskedPattern)) return new ft(this.toString()).appendTo(t);
                    for (var n = new it, i = 0; i < this.chunks.length && !n.skip; ++i) {
                        var s = this.chunks[i], a = t._mapPosToBlock(t.value.length), o = s.stop, r = void 0;
                        if (null != o && (!a || a.index <= o) && ((s instanceof e || t._stops.indexOf(o) >= 0) && n.aggregate(t._appendPlaceholder(o)), r = s instanceof e && t._blocks[o]), r) {
                            var l = r.appendTail(s);
                            l.skip = !1, n.aggregate(l), t._value += l.inserted;
                            var c = s.toString().slice(l.rawInserted.length);
                            c && n.aggregate(t.append(c, {tail: !0}))
                        } else n.aggregate(t.append(s.toString(), {tail: !0}))
                    }
                    return n
                }
            }, {
                key: "state", get: function () {
                    return {
                        chunks: this.chunks.map((function (e) {
                            return e.state
                        })), from: this.from, stop: this.stop, blockIndex: this.blockIndex
                    }
                }, set: function (t) {
                    var n = t.chunks, i = Ge(t, Et);
                    Object.assign(this, i), this.chunks = n.map((function (t) {
                        var n = "chunks" in t ? new e : new ft;
                        return n.state = t, n
                    }))
                }
            }, {
                key: "unshift", value: function (e) {
                    if (!this.chunks.length || null != e && this.from >= e) return "";
                    for (var t = null != e ? e - this.from : e, n = 0; n < this.chunks.length;) {
                        var i = this.chunks[n], s = i.unshift(t);
                        if (i.toString()) {
                            if (!s) break;
                            ++n
                        } else this.chunks.splice(n, 1);
                        if (s) return s
                    }
                    return ""
                }
            }, {
                key: "shift", value: function () {
                    if (!this.chunks.length) return "";
                    for (var e = this.chunks.length - 1; 0 <= e;) {
                        var t = this.chunks[e], n = t.shift();
                        if (t.toString()) {
                            if (!n) break;
                            --e
                        } else this.chunks.splice(e, 1);
                        if (n) return n
                    }
                    return ""
                }
            }]), e
        }(), St = function () {
            function e(t, n) {
                Re(this, e), this.masked = t, this._log = [];
                var i = t._mapPosToBlock(n) || (n < 0 ? {index: 0, offset: 0} : {
                    index: this.masked._blocks.length,
                    offset: 0
                }), s = i.offset, a = i.index;
                this.offset = s, this.index = a, this.ok = !1
            }

            return We(e, [{
                key: "block", get: function () {
                    return this.masked._blocks[this.index]
                }
            }, {
                key: "pos", get: function () {
                    return this.masked._blockStartPos(this.index) + this.offset
                }
            }, {
                key: "state", get: function () {
                    return {index: this.index, offset: this.offset, ok: this.ok}
                }, set: function (e) {
                    Object.assign(this, e)
                }
            }, {
                key: "pushState", value: function () {
                    this._log.push(this.state)
                }
            }, {
                key: "popState", value: function () {
                    var e = this._log.pop();
                    return this.state = e, e
                }
            }, {
                key: "bindBlock", value: function () {
                    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.value.length))
                }
            }, {
                key: "_pushLeft", value: function (e) {
                    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (t = this.block) || void 0 === t ? void 0 : t.value.length) || 0) {
                        var t;
                        if (e()) return this.ok = !0
                    }
                    return this.ok = !1
                }
            }, {
                key: "_pushRight", value: function (e) {
                    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return this.ok = !0;
                    return this.ok = !1
                }
            }, {
                key: "pushLeftBeforeFilled", value: function () {
                    var e = this;
                    return this._pushLeft((function () {
                        if (!e.block.isFixed && e.block.value) return e.offset = e.block.nearestInputPos(e.offset, rt), 0 !== e.offset || void 0
                    }))
                }
            }, {
                key: "pushLeftBeforeInput", value: function () {
                    var e = this;
                    return this._pushLeft((function () {
                        if (!e.block.isFixed) return e.offset = e.block.nearestInputPos(e.offset, ot), !0
                    }))
                }
            }, {
                key: "pushLeftBeforeRequired", value: function () {
                    var e = this;
                    return this._pushLeft((function () {
                        if (!(e.block.isFixed || e.block.isOptional && !e.block.value)) return e.offset = e.block.nearestInputPos(e.offset, ot), !0
                    }))
                }
            }, {
                key: "pushRightBeforeFilled", value: function () {
                    var e = this;
                    return this._pushRight((function () {
                        if (!e.block.isFixed && e.block.value) return e.offset = e.block.nearestInputPos(e.offset, ct), e.offset !== e.block.value.length || void 0
                    }))
                }
            }, {
                key: "pushRightBeforeInput", value: function () {
                    var e = this;
                    return this._pushRight((function () {
                        if (!e.block.isFixed) return e.offset = e.block.nearestInputPos(e.offset, at), !0
                    }))
                }
            }, {
                key: "pushRightBeforeRequired", value: function () {
                    var e = this;
                    return this._pushRight((function () {
                        if (!(e.block.isFixed || e.block.isOptional && !e.block.value)) return e.offset = e.block.nearestInputPos(e.offset, at), !0
                    }))
                }
            }]), e
        }(), Mt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                return Re(this, n), t.apply(this, arguments)
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    e.mask && (e.validate = function (t) {
                        return t.search(e.mask) >= 0
                    }), Qe(Ve(n.prototype), "_update", this).call(this, e)
                }
            }]), n
        }(gt);
        mt.MaskedRegExp = Mt;
        var Tt = ["_blocks"], Dt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Re(this, n), e.definitions = Object.assign({}, wt, e.definitions), t.call(this, Object.assign({}, n.DEFAULTS, e))
            }

            return We(n, [{
                key: "_update", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.definitions = Object.assign({}, this.definitions, e.definitions), Qe(Ve(n.prototype), "_update", this).call(this, e), this._rebuildMask()
                }
            }, {
                key: "_rebuildMask", value: function () {
                    var e = this, t = this.definitions;
                    this._blocks = [], this._stops = [], this._maskedBlocks = {};
                    var i = this.mask;
                    if (i && t) for (var s = !1, a = !1, o = 0; o < i.length; ++o) {
                        if (this.blocks) {
                            var r = function () {
                                var t = i.slice(o), n = Object.keys(e.blocks).filter((function (e) {
                                    return 0 === t.indexOf(e)
                                }));
                                n.sort((function (e, t) {
                                    return t.length - e.length
                                }));
                                var s = n[0];
                                if (s) {
                                    var a = yt(Object.assign({
                                        parent: e,
                                        lazy: e.lazy,
                                        eager: e.eager,
                                        placeholderChar: e.placeholderChar,
                                        overwrite: e.overwrite
                                    }, e.blocks[s]));
                                    return a && (e._blocks.push(a), e._maskedBlocks[s] || (e._maskedBlocks[s] = []), e._maskedBlocks[s].push(e._blocks.length - 1)), o += s.length - 1, "continue"
                                }
                            }();
                            if ("continue" === r) continue
                        }
                        var l = i[o], c = l in t;
                        if (l !== n.STOP_CHAR) if ("{" !== l && "}" !== l) if ("[" !== l && "]" !== l) {
                            if (l === n.ESCAPE_CHAR) {
                                if (++o, !(l = i[o])) break;
                                c = !1
                            }
                            var u = c ? new xt({
                                parent: this,
                                lazy: this.lazy,
                                eager: this.eager,
                                placeholderChar: this.placeholderChar,
                                mask: t[l],
                                isOptional: a
                            }) : new Ct({char: l, eager: this.eager, isUnmasking: s});
                            this._blocks.push(u)
                        } else a = !a; else s = !s; else this._stops.push(this._blocks.length)
                    }
                }
            }, {
                key: "state", get: function () {
                    return Object.assign({}, Qe(Ve(n.prototype), "state", this), {
                        _blocks: this._blocks.map((function (e) {
                            return e.state
                        }))
                    })
                }, set: function (e) {
                    var t = e._blocks, i = Ge(e, Tt);
                    this._blocks.forEach((function (e, n) {
                        return e.state = t[n]
                    })), et(Ve(n.prototype), "state", i, this, !0)
                }
            }, {
                key: "reset", value: function () {
                    Qe(Ve(n.prototype), "reset", this).call(this), this._blocks.forEach((function (e) {
                        return e.reset()
                    }))
                }
            }, {
                key: "isComplete", get: function () {
                    return this._blocks.every((function (e) {
                        return e.isComplete
                    }))
                }
            }, {
                key: "isFilled", get: function () {
                    return this._blocks.every((function (e) {
                        return e.isFilled
                    }))
                }
            }, {
                key: "isFixed", get: function () {
                    return this._blocks.every((function (e) {
                        return e.isFixed
                    }))
                }
            }, {
                key: "isOptional", get: function () {
                    return this._blocks.every((function (e) {
                        return e.isOptional
                    }))
                }
            }, {
                key: "doCommit", value: function () {
                    this._blocks.forEach((function (e) {
                        return e.doCommit()
                    })), Qe(Ve(n.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this._blocks.reduce((function (e, t) {
                        return e + t.unmaskedValue
                    }), "")
                }, set: function (e) {
                    et(Ve(n.prototype), "unmaskedValue", e, this, !0)
                }
            }, {
                key: "value", get: function () {
                    return this._blocks.reduce((function (e, t) {
                        return e + t.value
                    }), "")
                }, set: function (e) {
                    et(Ve(n.prototype), "value", e, this, !0)
                }
            }, {
                key: "appendTail", value: function (e) {
                    return Qe(Ve(n.prototype), "appendTail", this).call(this, e).aggregate(this._appendPlaceholder())
                }
            }, {
                key: "_appendEager", value: function () {
                    var e, t = new it,
                        n = null === (e = this._mapPosToBlock(this.value.length)) || void 0 === e ? void 0 : e.index;
                    if (null == n) return t;
                    this._blocks[n].isFilled && ++n;
                    for (var i = n; i < this._blocks.length; ++i) {
                        var s = this._blocks[i]._appendEager();
                        if (!s.inserted) break;
                        t.aggregate(s)
                    }
                    return t
                }
            }, {
                key: "_appendCharRaw", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._mapPosToBlock(this.value.length), i = new it;
                    if (!n) return i;
                    for (var s = n.index; ; ++s) {
                        var a, o = this._blocks[s];
                        if (!o) break;
                        var r = o._appendChar(e, Object.assign({}, t, {_beforeTailState: null === (a = t._beforeTailState) || void 0 === a ? void 0 : a._blocks[s]})),
                            l = r.skip;
                        if (i.aggregate(r), l || r.rawInserted) break
                    }
                    return i
                }
            }, {
                key: "extractTail", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        i = new kt;
                    return t === n || this._forEachBlocksInRange(t, n, (function (t, n, s, a) {
                        var o = t.extractTail(s, a);
                        o.stop = e._findStopBefore(n), o.from = e._blockStartPos(n), o instanceof kt && (o.blockIndex = n), i.extend(o)
                    })), i
                }
            }, {
                key: "extractInput", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (e === t) return "";
                    var i = "";
                    return this._forEachBlocksInRange(e, t, (function (e, t, s, a) {
                        i += e.extractInput(s, a, n)
                    })), i
                }
            }, {
                key: "_findStopBefore", value: function (e) {
                    for (var t, n = 0; n < this._stops.length; ++n) {
                        var i = this._stops[n];
                        if (!(i <= e)) break;
                        t = i
                    }
                    return t
                }
            }, {
                key: "_appendPlaceholder", value: function (e) {
                    var t = this, n = new it;
                    if (this.lazy && null == e) return n;
                    var i = this._mapPosToBlock(this.value.length);
                    if (!i) return n;
                    var s = i.index, a = null != e ? e : this._blocks.length;
                    return this._blocks.slice(s, a).forEach((function (i) {
                        if (!i.lazy || null != e) {
                            var s = null != i._blocks ? [i._blocks.length] : [], a = i._appendPlaceholder.apply(i, s);
                            t._value += a.inserted, n.aggregate(a)
                        }
                    })), n
                }
            }, {
                key: "_mapPosToBlock", value: function (e) {
                    for (var t = "", n = 0; n < this._blocks.length; ++n) {
                        var i = this._blocks[n], s = t.length;
                        if (e <= (t += i.value).length) return {index: n, offset: e - s}
                    }
                }
            }, {
                key: "_blockStartPos", value: function (e) {
                    return this._blocks.slice(0, e).reduce((function (e, t) {
                        return e + t.value.length
                    }), 0)
                }
            }, {
                key: "_forEachBlocksInRange", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = arguments.length > 2 ? arguments[2] : void 0, i = this._mapPosToBlock(e);
                    if (i) {
                        var s = this._mapPosToBlock(t), a = s && i.index === s.index, o = i.offset,
                            r = s && a ? s.offset : this._blocks[i.index].value.length;
                        if (n(this._blocks[i.index], i.index, o, r), s && !a) {
                            for (var l = i.index + 1; l < s.index; ++l) n(this._blocks[l], l, 0, this._blocks[l].value.length);
                            n(this._blocks[s.index], s.index, 0, s.offset)
                        }
                    }
                }
            }, {
                key: "remove", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        i = Qe(Ve(n.prototype), "remove", this).call(this, e, t);
                    return this._forEachBlocksInRange(e, t, (function (e, t, n, s) {
                        i.aggregate(e.remove(n, s))
                    })), i
                }
            }, {
                key: "nearestInputPos", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at;
                    if (!this._blocks.length) return 0;
                    var n = new St(this, e);
                    if (t === at) return n.pushRightBeforeInput() ? n.pos : (n.popState(), n.pushLeftBeforeInput() ? n.pos : this.value.length);
                    if (t === ot || t === rt) {
                        if (t === ot) {
                            if (n.pushRightBeforeFilled(), n.ok && n.pos === e) return e;
                            n.popState()
                        }
                        if (n.pushLeftBeforeInput(), n.pushLeftBeforeRequired(), n.pushLeftBeforeFilled(), t === ot) {
                            if (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.ok && n.pos <= e) return n.pos;
                            if (n.popState(), n.ok && n.pos <= e) return n.pos;
                            n.popState()
                        }
                        return n.ok ? n.pos : t === rt ? 0 : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : 0))
                    }
                    return t === lt || t === ct ? (n.pushRightBeforeInput(), n.pushRightBeforeRequired(), n.pushRightBeforeFilled() ? n.pos : t === ct ? this.value.length : (n.popState(), n.ok ? n.pos : (n.popState(), n.ok ? n.pos : this.nearestInputPos(e, ot)))) : e
                }
            }, {
                key: "maskedBlock", value: function (e) {
                    return this.maskedBlocks(e)[0]
                }
            }, {
                key: "maskedBlocks", value: function (e) {
                    var t = this, n = this._maskedBlocks[e];
                    return n ? n.map((function (e) {
                        return t._blocks[e]
                    })) : []
                }
            }]), n
        }(gt);
        Dt.DEFAULTS = {
            lazy: !0,
            placeholderChar: "_"
        }, Dt.STOP_CHAR = "`", Dt.ESCAPE_CHAR = "\\", Dt.InputDefinition = xt, Dt.FixedDefinition = Ct, mt.MaskedPattern = Dt;
        var At = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                return Re(this, n), t.apply(this, arguments)
            }

            return We(n, [{
                key: "_matchFrom", get: function () {
                    return this.maxLength - String(this.from).length
                }
            }, {
                key: "_update", value: function (e) {
                    e = Object.assign({to: this.to || 0, from: this.from || 0, maxLength: this.maxLength || 0}, e);
                    var t = String(e.to).length;
                    null != e.maxLength && (t = Math.max(t, e.maxLength)), e.maxLength = t;
                    for (var i = String(e.from).padStart(t, "0"), s = String(e.to).padStart(t, "0"), a = 0; a < s.length && s[a] === i[a];) ++a;
                    e.mask = s.slice(0, a).replace(/0/g, "\\0") + "0".repeat(t - a), Qe(Ve(n.prototype), "_update", this).call(this, e)
                }
            }, {
                key: "isComplete", get: function () {
                    return Qe(Ve(n.prototype), "isComplete", this) && Boolean(this.value)
                }
            }, {
                key: "boundaries", value: function (e) {
                    var t = "", n = "", i = tt(e.match(/^(\D*)(\d*)(\D*)/) || [], 3), s = i[1], a = i[2];
                    return a && (t = "0".repeat(s.length) + a, n = "9".repeat(s.length) + a), [t = t.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
                }
            }, {
                key: "doPrepare", value: function (e) {
                    var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = dt(Qe(Ve(n.prototype), "doPrepare", this).call(this, e.replace(/\D/g, ""), i)),
                        a = tt(s, 2);
                    if (e = a[0], t = a[1], !this.autofix || !e) return e;
                    var o = String(this.from).padStart(this.maxLength, "0"),
                        r = String(this.to).padStart(this.maxLength, "0"), l = this.value + e;
                    if (l.length > this.maxLength) return "";
                    var c = this.boundaries(l), u = tt(c, 2), d = u[0], h = u[1];
                    return Number(h) < this.from ? o[l.length - 1] : Number(d) > this.to ? "pad" === this.autofix && l.length < this.maxLength ? ["", t.aggregate(this.append(o[l.length - 1] + e, i))] : r[l.length - 1] : e
                }
            }, {
                key: "doValidate", value: function () {
                    var e, t = this.value, i = t.search(/[^0]/);
                    if (-1 === i && t.length <= this._matchFrom) return !0;
                    for (var s = this.boundaries(t), a = tt(s, 2), o = a[0], r = a[1], l = arguments.length, c = new Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                    return this.from <= Number(r) && Number(o) <= this.to && (e = Qe(Ve(n.prototype), "doValidate", this)).call.apply(e, [this].concat(c))
                }
            }]), n
        }(Dt);
        mt.MaskedRange = At;
        var It = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n(e) {
                return Re(this, n), t.call(this, Object.assign({}, n.DEFAULTS, e))
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    e.mask === Date && delete e.mask, e.pattern && (e.mask = e.pattern);
                    var t = e.blocks;
                    e.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), e.min && (e.blocks.Y.from = e.min.getFullYear()), e.max && (e.blocks.Y.to = e.max.getFullYear()), e.min && e.max && e.blocks.Y.from === e.blocks.Y.to && (e.blocks.m.from = e.min.getMonth() + 1, e.blocks.m.to = e.max.getMonth() + 1, e.blocks.m.from === e.blocks.m.to && (e.blocks.d.from = e.min.getDate(), e.blocks.d.to = e.max.getDate())), Object.assign(e.blocks, this.blocks, t), Object.keys(e.blocks).forEach((function (t) {
                        var n = e.blocks[t];
                        !("autofix" in n) && "autofix" in e && (n.autofix = e.autofix)
                    })), Qe(Ve(n.prototype), "_update", this).call(this, e)
                }
            }, {
                key: "doValidate", value: function () {
                    for (var e, t = this.date, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return (e = Qe(Ve(n.prototype), "doValidate", this)).call.apply(e, [this].concat(s)) && (!this.isComplete || this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max))
                }
            }, {
                key: "isDateExist", value: function (e) {
                    return this.format(this.parse(e, this), this).indexOf(e) >= 0
                }
            }, {
                key: "date", get: function () {
                    return this.typedValue
                }, set: function (e) {
                    this.typedValue = e
                }
            }, {
                key: "typedValue", get: function () {
                    return this.isComplete ? Qe(Ve(n.prototype), "typedValue", this) : null
                }, set: function (e) {
                    et(Ve(n.prototype), "typedValue", e, this, !0)
                }
            }, {
                key: "maskEquals", value: function (e) {
                    return e === Date || Qe(Ve(n.prototype), "maskEquals", this).call(this, e)
                }
            }]), n
        }(Dt);
        It.DEFAULTS = {
            pattern: "d{.}`m{.}`Y", format: function (e) {
                return e ? [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".") : ""
            }, parse: function (e) {
                var t = tt(e.split("."), 3), n = t[0], i = t[1], s = t[2];
                return new Date(s, i - 1, n)
            }
        }, It.GET_DEFAULT_BLOCKS = function () {
            return {
                d: {mask: At, from: 1, to: 31, maxLength: 2},
                m: {mask: At, from: 1, to: 12, maxLength: 2},
                Y: {mask: At, from: 1900, to: 9999}
            }
        }, mt.MaskedDate = It;
        var Pt = function () {
            function e() {
                Re(this, e)
            }

            return We(e, [{
                key: "selectionStart", get: function () {
                    var e;
                    try {
                        e = this._unsafeSelectionStart
                    } catch (e) {
                    }
                    return null != e ? e : this.value.length
                }
            }, {
                key: "selectionEnd", get: function () {
                    var e;
                    try {
                        e = this._unsafeSelectionEnd
                    } catch (e) {
                    }
                    return null != e ? e : this.value.length
                }
            }, {
                key: "select", value: function (e, t) {
                    if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd)) try {
                        this._unsafeSelect(e, t)
                    } catch (e) {
                    }
                }
            }, {
                key: "_unsafeSelect", value: function (e, t) {
                }
            }, {
                key: "isActive", get: function () {
                    return !1
                }
            }, {
                key: "bindEvents", value: function (e) {
                }
            }, {
                key: "unbindEvents", value: function () {
                }
            }]), e
        }();
        mt.MaskElement = Pt;
        var $t = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n(e) {
                var i;
                return Re(this, n), (i = t.call(this)).input = e, i._handlers = {}, i
            }

            return We(n, [{
                key: "rootElement", get: function () {
                    var e, t, n;
                    return null !== (e = null === (t = (n = this.input).getRootNode) || void 0 === t ? void 0 : t.call(n)) && void 0 !== e ? e : document
                }
            }, {
                key: "isActive", get: function () {
                    return this.input === this.rootElement.activeElement
                }
            }, {
                key: "_unsafeSelectionStart", get: function () {
                    return this.input.selectionStart
                }
            }, {
                key: "_unsafeSelectionEnd", get: function () {
                    return this.input.selectionEnd
                }
            }, {
                key: "_unsafeSelect", value: function (e, t) {
                    this.input.setSelectionRange(e, t)
                }
            }, {
                key: "value", get: function () {
                    return this.input.value
                }, set: function (e) {
                    this.input.value = e
                }
            }, {
                key: "bindEvents", value: function (e) {
                    var t = this;
                    Object.keys(e).forEach((function (i) {
                        return t._toggleEventHandler(n.EVENTS_MAP[i], e[i])
                    }))
                }
            }, {
                key: "unbindEvents", value: function () {
                    var e = this;
                    Object.keys(this._handlers).forEach((function (t) {
                        return e._toggleEventHandler(t)
                    }))
                }
            }, {
                key: "_toggleEventHandler", value: function (e, t) {
                    this._handlers[e] && (this.input.removeEventListener(e, this._handlers[e]), delete this._handlers[e]), t && (this.input.addEventListener(e, t), this._handlers[e] = t)
                }
            }]), n
        }(Pt);
        $t.EVENTS_MAP = {
            selectionChange: "keydown",
            input: "input",
            drop: "drop",
            click: "click",
            focus: "focus",
            commit: "blur"
        }, mt.HTMLMaskElement = $t;
        var Lt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                return Re(this, n), t.apply(this, arguments)
            }

            return We(n, [{
                key: "_unsafeSelectionStart", get: function () {
                    var e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset,
                        i = t && t.focusOffset;
                    return null == i || null == n || n < i ? n : i
                }
            }, {
                key: "_unsafeSelectionEnd", get: function () {
                    var e = this.rootElement, t = e.getSelection && e.getSelection(), n = t && t.anchorOffset,
                        i = t && t.focusOffset;
                    return null == i || null == n || n > i ? n : i
                }
            }, {
                key: "_unsafeSelect", value: function (e, t) {
                    if (this.rootElement.createRange) {
                        var n = this.rootElement.createRange();
                        n.setStart(this.input.firstChild || this.input, e), n.setEnd(this.input.lastChild || this.input, t);
                        var i = this.rootElement, s = i.getSelection && i.getSelection();
                        s && (s.removeAllRanges(), s.addRange(n))
                    }
                }
            }, {
                key: "value", get: function () {
                    return this.input.textContent
                }, set: function (e) {
                    this.input.textContent = e
                }
            }]), n
        }($t);
        mt.HTMLContenteditableMaskElement = Lt;
        var _t = ["mask"], Ot = function () {
            function e(t, n) {
                Re(this, e), this.el = t instanceof Pt ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new Lt(t) : new $t(t), this.masked = yt(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange()
            }

            return We(e, [{
                key: "mask", get: function () {
                    return this.masked.mask
                }, set: function (e) {
                    if (!this.maskEquals(e)) if (e instanceof mt.Masked || this.masked.constructor !== vt(e)) {
                        var t = yt({mask: e});
                        t.unmaskedValue = this.masked.unmaskedValue, this.masked = t
                    } else this.masked.updateOptions({mask: e})
                }
            }, {
                key: "maskEquals", value: function (e) {
                    var t;
                    return null == e || (null === (t = this.masked) || void 0 === t ? void 0 : t.maskEquals(e))
                }
            }, {
                key: "value", get: function () {
                    return this._value
                }, set: function (e) {
                    this.masked.value = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this._unmaskedValue
                }, set: function (e) {
                    this.masked.unmaskedValue = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "typedValue", get: function () {
                    return this.masked.typedValue
                }, set: function (e) {
                    this.masked.typedValue = e, this.updateControl(), this.alignCursor()
                }
            }, {
                key: "_bindEvents", value: function () {
                    this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange
                    })
                }
            }, {
                key: "_unbindEvents", value: function () {
                    this.el && this.el.unbindEvents()
                }
            }, {
                key: "_fireEvent", value: function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    var s = this._listeners[e];
                    s && s.forEach((function (e) {
                        return e.apply(void 0, n)
                    }))
                }
            }, {
                key: "selectionStart", get: function () {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
                }
            }, {
                key: "cursorPos", get: function () {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
                }, set: function (e) {
                    this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection())
                }
            }, {
                key: "_saveSelection", value: function () {
                    this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
                        start: this.selectionStart,
                        end: this.cursorPos
                    }
                }
            }, {
                key: "updateValue", value: function () {
                    this.masked.value = this.el.value, this._value = this.masked.value
                }
            }, {
                key: "updateControl", value: function () {
                    var e = this.masked.unmaskedValue, t = this.masked.value,
                        n = this.unmaskedValue !== e || this.value !== t;
                    this._unmaskedValue = e, this._value = t, this.el.value !== t && (this.el.value = t), n && this._fireChangeEvents()
                }
            }, {
                key: "updateOptions", value: function (e) {
                    var t = e.mask, n = Ge(e, _t), i = !this.maskEquals(t), s = !ht(this.masked, n);
                    i && (this.mask = t), s && this.masked.updateOptions(n), (i || s) && this.updateControl()
                }
            }, {
                key: "updateCursor", value: function (e) {
                    null != e && (this.cursorPos = e, this._delayUpdateCursor(e))
                }
            }, {
                key: "_delayUpdateCursor", value: function (e) {
                    var t = this;
                    this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout((function () {
                        t.el && (t.cursorPos = t._changingCursorPos, t._abortUpdateCursor())
                    }), 10)
                }
            }, {
                key: "_fireChangeEvents", value: function () {
                    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
                }
            }, {
                key: "_abortUpdateCursor", value: function () {
                    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging)
                }
            }, {
                key: "alignCursor", value: function () {
                    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, ot))
                }
            }, {
                key: "alignCursorFriendly", value: function () {
                    this.selectionStart === this.cursorPos && this.alignCursor()
                }
            }, {
                key: "on", value: function (e, t) {
                    return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this
                }
            }, {
                key: "off", value: function (e, t) {
                    if (!this._listeners[e]) return this;
                    if (!t) return delete this._listeners[e], this;
                    var n = this._listeners[e].indexOf(t);
                    return n >= 0 && this._listeners[e].splice(n, 1), this
                }
            }, {
                key: "_onInput", value: function (e) {
                    if (this._inputEvent = e, this._abortUpdateCursor(), !this._selection) return this.updateValue();
                    var t = new pt(this.el.value, this.cursorPos, this.value, this._selection),
                        n = this.masked.rawInputValue,
                        i = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection).offset,
                        s = n === this.masked.rawInputValue ? t.removeDirection : at,
                        a = this.masked.nearestInputPos(t.startChangePos + i, s);
                    s !== at && (a = this.masked.nearestInputPos(a, at)), this.updateControl(), this.updateCursor(a), delete this._inputEvent
                }
            }, {
                key: "_onChange", value: function () {
                    this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection()
                }
            }, {
                key: "_onDrop", value: function (e) {
                    e.preventDefault(), e.stopPropagation()
                }
            }, {
                key: "_onFocus", value: function (e) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "_onClick", value: function (e) {
                    this.alignCursorFriendly()
                }
            }, {
                key: "destroy", value: function () {
                    this._unbindEvents(), this._listeners.length = 0, delete this.el
                }
            }]), e
        }();
        mt.InputMask = Ot;
        var Nt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                return Re(this, n), t.apply(this, arguments)
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    e.enum && (e.mask = "*".repeat(e.enum[0].length)), Qe(Ve(n.prototype), "_update", this).call(this, e)
                }
            }, {
                key: "doValidate", value: function () {
                    for (var e, t = this, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return this.enum.some((function (e) {
                        return e.indexOf(t.unmaskedValue) >= 0
                    })) && (e = Qe(Ve(n.prototype), "doValidate", this)).call.apply(e, [this].concat(s))
                }
            }]), n
        }(Dt);
        mt.MaskedEnum = Nt;
        var zt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n(e) {
                return Re(this, n), t.call(this, Object.assign({}, n.DEFAULTS, e))
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    Qe(Ve(n.prototype), "_update", this).call(this, e), this._updateRegExps()
                }
            }, {
                key: "_updateRegExps", value: function () {
                    var e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                        t = (this.scale ? "(" + ut(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                    this._numberRegExpInput = new RegExp(e + "(0|([1-9]+\\d*))?" + t), this._numberRegExp = new RegExp(e + "\\d*" + t), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(ut).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ut(this.thousandsSeparator), "g")
                }
            }, {
                key: "_removeThousandsSeparators", value: function (e) {
                    return e.replace(this._thousandsSeparatorRegExp, "")
                }
            }, {
                key: "_insertThousandsSeparators", value: function (e) {
                    var t = e.split(this.radix);
                    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), t.join(this.radix)
                }
            }, {
                key: "doPrepare", value: function (e) {
                    var t;
                    e = e.replace(this._mapToRadixRegExp, this.radix);
                    for (var i = this._removeThousandsSeparators(e), s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
                    var r = dt((t = Qe(Ve(n.prototype), "doPrepare", this)).call.apply(t, [this, i].concat(a))),
                        l = tt(r, 2), c = l[0], u = l[1];
                    return e && !i && (u.skip = !0), [c, u]
                }
            }, {
                key: "_separatorsCount", value: function (e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++n, t && (e += this.thousandsSeparator.length));
                    return n
                }
            }, {
                key: "_separatorsCountFromSlice", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                    return this._separatorsCount(this._removeThousandsSeparators(e).length, !0)
                }
            }, {
                key: "extractInput", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        i = arguments.length > 2 ? arguments[2] : void 0, s = this._adjustRangeWithSeparators(e, t),
                        a = tt(s, 2);
                    return e = a[0], t = a[1], this._removeThousandsSeparators(Qe(Ve(n.prototype), "extractInput", this).call(this, e, t, i))
                }
            }, {
                key: "_appendCharRaw", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.thousandsSeparator) return Qe(Ve(n.prototype), "_appendCharRaw", this).call(this, e, t);
                    var i = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
                        s = this._separatorsCountFromSlice(i);
                    this._value = this._removeThousandsSeparators(this.value);
                    var a = Qe(Ve(n.prototype), "_appendCharRaw", this).call(this, e, t);
                    this._value = this._insertThousandsSeparators(this._value);
                    var o = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
                        r = this._separatorsCountFromSlice(o);
                    return a.tailShift += (r - s) * this.thousandsSeparator.length, a.skip = !a.rawInserted && e === this.thousandsSeparator, a
                }
            }, {
                key: "_findSeparatorAround", value: function (e) {
                    if (this.thousandsSeparator) {
                        var t = e - this.thousandsSeparator.length + 1,
                            n = this.value.indexOf(this.thousandsSeparator, t);
                        if (n <= e) return n
                    }
                    return -1
                }
            }, {
                key: "_adjustRangeWithSeparators", value: function (e, t) {
                    var n = this._findSeparatorAround(e);
                    n >= 0 && (e = n);
                    var i = this._findSeparatorAround(t);
                    return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t]
                }
            }, {
                key: "remove", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
                        n = this._adjustRangeWithSeparators(e, t), i = tt(n, 2);
                    e = i[0], t = i[1];
                    var s = this.value.slice(0, e), a = this.value.slice(t), o = this._separatorsCount(s.length);
                    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + a));
                    var r = this._separatorsCountFromSlice(s);
                    return new it({tailShift: (r - o) * this.thousandsSeparator.length})
                }
            }, {
                key: "nearestInputPos", value: function (e, t) {
                    if (!this.thousandsSeparator) return e;
                    switch (t) {
                        case at:
                        case ot:
                        case rt:
                            var n = this._findSeparatorAround(e - 1);
                            if (n >= 0) {
                                var i = n + this.thousandsSeparator.length;
                                if (e < i || this.value.length <= i || t === rt) return n
                            }
                            break;
                        case lt:
                        case ct:
                            var s = this._findSeparatorAround(e);
                            if (s >= 0) return s + this.thousandsSeparator.length
                    }
                    return e
                }
            }, {
                key: "doValidate", value: function (e) {
                    var t = (e.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                    if (t) {
                        var i = this.number;
                        t = t && !isNaN(i) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
                    }
                    return t && Qe(Ve(n.prototype), "doValidate", this).call(this, e)
                }
            }, {
                key: "doCommit", value: function () {
                    if (this.value) {
                        var e = this.number, t = e;
                        null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = String(t));
                        var i = this.value;
                        this.normalizeZeros && (i = this._normalizeZeros(i)), this.padFractionalZeros && this.scale > 0 && (i = this._padFractionalZeros(i)), this._value = i
                    }
                    Qe(Ve(n.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "_normalizeZeros", value: function (e) {
                    var t = this._removeThousandsSeparators(e).split(this.radix);
                    return t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (function (e, t, n, i) {
                        return t + i
                    })), e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"), t.length > 1 && (t[1] = t[1].replace(/0*$/, ""), t[1].length || (t.length = 1)), this._insertThousandsSeparators(t.join(this.radix))
                }
            }, {
                key: "_padFractionalZeros", value: function (e) {
                    if (!e) return e;
                    var t = e.split(this.radix);
                    return t.length < 2 && t.push(""), t[1] = t[1].padEnd(this.scale, "0"), t.join(this.radix)
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
                }, set: function (e) {
                    et(Ve(n.prototype), "unmaskedValue", e.replace(".", this.radix), this, !0)
                }
            }, {
                key: "typedValue", get: function () {
                    return Number(this.unmaskedValue)
                }, set: function (e) {
                    et(Ve(n.prototype), "unmaskedValue", String(e), this, !0)
                }
            }, {
                key: "number", get: function () {
                    return this.typedValue
                }, set: function (e) {
                    this.typedValue = e
                }
            }, {
                key: "allowNegative", get: function () {
                    return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
                }
            }]), n
        }(gt);
        zt.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: ["."],
            scale: 2,
            signed: !1,
            normalizeZeros: !0,
            padFractionalZeros: !1
        }, mt.MaskedNumber = zt;
        var jt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n() {
                return Re(this, n), t.apply(this, arguments)
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    e.mask && (e.validate = e.mask), Qe(Ve(n.prototype), "_update", this).call(this, e)
                }
            }]), n
        }(gt);
        mt.MaskedFunction = jt;
        var Ft = ["compiledMasks", "currentMaskRef", "currentMask"], Bt = function (e) {
            qe(n, e);
            var t = Ue(n);

            function n(e) {
                var i;
                return Re(this, n), (i = t.call(this, Object.assign({}, n.DEFAULTS, e))).currentMask = null, i
            }

            return We(n, [{
                key: "_update", value: function (e) {
                    Qe(Ve(n.prototype), "_update", this).call(this, e), "mask" in e && (this.compiledMasks = Array.isArray(e.mask) ? e.mask.map((function (e) {
                        return yt(e)
                    })) : [])
                }
            }, {
                key: "_appendCharRaw", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this._applyDispatch(e, t);
                    return this.currentMask && n.aggregate(this.currentMask._appendChar(e, t)), n
                }
            }, {
                key: "_applyDispatch", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
                        i = this.rawInputValue,
                        s = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : i,
                        a = i.slice(s.length), o = this.currentMask, r = new it, l = o && o.state;
                    if (this.currentMask = this.doDispatch(e, Object.assign({}, t)), this.currentMask) if (this.currentMask !== o) {
                        if (this.currentMask.reset(), s) {
                            var c = this.currentMask.append(s, {raw: !0});
                            r.tailShift = c.inserted.length - n.length
                        }
                        a && (r.tailShift += this.currentMask.append(a, {raw: !0, tail: !0}).tailShift)
                    } else this.currentMask.state = l;
                    return r
                }
            }, {
                key: "_appendPlaceholder", value: function () {
                    var e = this._applyDispatch.apply(this, arguments);
                    return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e
                }
            }, {
                key: "_appendEager", value: function () {
                    var e = this._applyDispatch.apply(this, arguments);
                    return this.currentMask && e.aggregate(this.currentMask._appendEager()), e
                }
            }, {
                key: "doDispatch", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.dispatch(e, this, t)
                }
            }, {
                key: "doValidate", value: function () {
                    for (var e, t, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return (e = Qe(Ve(n.prototype), "doValidate", this)).call.apply(e, [this].concat(s)) && (!this.currentMask || (t = this.currentMask).doValidate.apply(t, s))
                }
            }, {
                key: "reset", value: function () {
                    var e;
                    null === (e = this.currentMask) || void 0 === e || e.reset(), this.compiledMasks.forEach((function (e) {
                        return e.reset()
                    }))
                }
            }, {
                key: "value", get: function () {
                    return this.currentMask ? this.currentMask.value : ""
                }, set: function (e) {
                    et(Ve(n.prototype), "value", e, this, !0)
                }
            }, {
                key: "unmaskedValue", get: function () {
                    return this.currentMask ? this.currentMask.unmaskedValue : ""
                }, set: function (e) {
                    et(Ve(n.prototype), "unmaskedValue", e, this, !0)
                }
            }, {
                key: "typedValue", get: function () {
                    return this.currentMask ? this.currentMask.typedValue : ""
                }, set: function (e) {
                    var t = String(e);
                    this.currentMask && (this.currentMask.typedValue = e, t = this.currentMask.unmaskedValue), this.unmaskedValue = t
                }
            }, {
                key: "isComplete", get: function () {
                    var e;
                    return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.isComplete)
                }
            }, {
                key: "isFilled", get: function () {
                    var e;
                    return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.isFilled)
                }
            }, {
                key: "remove", value: function () {
                    var e, t = new it;
                    return this.currentMask && t.aggregate((e = this.currentMask).remove.apply(e, arguments)).aggregate(this._applyDispatch()), t
                }
            }, {
                key: "state", get: function () {
                    return Object.assign({}, Qe(Ve(n.prototype), "state", this), {
                        _rawInputValue: this.rawInputValue,
                        compiledMasks: this.compiledMasks.map((function (e) {
                            return e.state
                        })),
                        currentMaskRef: this.currentMask,
                        currentMask: this.currentMask && this.currentMask.state
                    })
                }, set: function (e) {
                    var t = e.compiledMasks, i = e.currentMaskRef, s = e.currentMask, a = Ge(e, Ft);
                    this.compiledMasks.forEach((function (e, n) {
                        return e.state = t[n]
                    })), null != i && (this.currentMask = i, this.currentMask.state = s), et(Ve(n.prototype), "state", a, this, !0)
                }
            }, {
                key: "extractInput", value: function () {
                    var e;
                    return this.currentMask ? (e = this.currentMask).extractInput.apply(e, arguments) : ""
                }
            }, {
                key: "extractTail", value: function () {
                    for (var e, t, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return this.currentMask ? (e = this.currentMask).extractTail.apply(e, s) : (t = Qe(Ve(n.prototype), "extractTail", this)).call.apply(t, [this].concat(s))
                }
            }, {
                key: "doCommit", value: function () {
                    this.currentMask && this.currentMask.doCommit(), Qe(Ve(n.prototype), "doCommit", this).call(this)
                }
            }, {
                key: "nearestInputPos", value: function () {
                    for (var e, t, i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return this.currentMask ? (e = this.currentMask).nearestInputPos.apply(e, s) : (t = Qe(Ve(n.prototype), "nearestInputPos", this)).call.apply(t, [this].concat(s))
                }
            }, {
                key: "overwrite", get: function () {
                    return this.currentMask ? this.currentMask.overwrite : Qe(Ve(n.prototype), "overwrite", this)
                }, set: function (e) {
                    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
                }
            }, {
                key: "eager", get: function () {
                    return this.currentMask ? this.currentMask.eager : Qe(Ve(n.prototype), "eager", this)
                }, set: function (e) {
                    console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
                }
            }, {
                key: "maskEquals", value: function (e) {
                    return Array.isArray(e) && this.compiledMasks.every((function (t, n) {
                        var i;
                        return t.maskEquals(null === (i = e[n]) || void 0 === i ? void 0 : i.mask)
                    }))
                }
            }]), n
        }(gt);
        Bt.DEFAULTS = {
            dispatch: function (e, t, n) {
                if (t.compiledMasks.length) {
                    var i = t.rawInputValue, s = t.compiledMasks.map((function (t, s) {
                        return t.reset(), t.append(i, {raw: !0}), t.append(e, n), {
                            weight: t.rawInputValue.length,
                            index: s
                        }
                    }));
                    return s.sort((function (e, t) {
                        return t.weight - e.weight
                    })), t.compiledMasks[s[0].index]
                }
            }
        }, mt.MaskedDynamic = Bt;
        var Ht = {MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue"};

        function Rt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ht.MASKED,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ht.MASKED, i = yt(e);
            return function (e) {
                return i.runIsolated((function (i) {
                    return i[t] = e, i[n]
                }))
            }
        }

        mt.PIPE_TYPE = Ht, mt.createPipe = Rt, mt.pipe = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return Rt.apply(void 0, n)(e)
        };
        try {
            globalThis.IMask = mt
        } catch (Wt) {
        }
        const Yt = e => "object" == typeof e && null !== e && e.constructor === Object && "[object Object]" === Object.prototype.toString.call(e),
            Wt = (...e) => {
                let t = !1;
                "boolean" == typeof e[0] && (t = e.shift());
                let n = e[0];
                if (!n || "object" != typeof n) throw new Error("extendee must be an object");
                const i = e.slice(1), s = i.length;
                for (let e = 0; e < s; e++) {
                    const s = i[e];
                    for (let e in s) if (s.hasOwnProperty(e)) {
                        const i = s[e];
                        if (t && (Array.isArray(i) || Yt(i))) {
                            const t = Array.isArray(i) ? [] : {};
                            n[e] = Wt(!0, n.hasOwnProperty(e) ? n[e] : t, i)
                        } else n[e] = i
                    }
                }
                return n
            }, qt = (e, t = 1e4) => (e = parseFloat(e) || 0, Math.round((e + Number.EPSILON) * t) / t),
            Vt = function (e) {
                return !!(e && "object" == typeof e && e instanceof Element && e !== document.body) && !e.__Panzoom && (function (e) {
                    const t = getComputedStyle(e)["overflow-y"], n = getComputedStyle(e)["overflow-x"],
                        i = ("scroll" === t || "auto" === t) && Math.abs(e.scrollHeight - e.clientHeight) > 1,
                        s = ("scroll" === n || "auto" === n) && Math.abs(e.scrollWidth - e.clientWidth) > 1;
                    return i || s
                }(e) ? e : Vt(e.parentNode))
            }, Xt = "undefined" != typeof window && window.ResizeObserver || class {
                constructor(e) {
                    this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e
                }

                observe(e) {
                    if (this.observables.some((t => t.el === e))) return;
                    const t = {el: e, size: {height: e.clientHeight, width: e.clientWidth}};
                    this.observables.push(t)
                }

                unobserve(e) {
                    this.observables = this.observables.filter((t => t.el !== e))
                }

                disconnect() {
                    this.observables = []
                }

                check() {
                    const e = this.observables.filter((e => {
                        const t = e.el.clientHeight, n = e.el.clientWidth;
                        if (e.size.height !== t || e.size.width !== n) return e.size.height = t, e.size.width = n, !0
                    })).map((e => e.el));
                    e.length > 0 && this.callback(e), window.requestAnimationFrame(this.boundCheck)
                }
            };

        class Gt {
            constructor(e) {
                this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY
            }
        }

        const Zt = (e, t) => t ? Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2) : 0,
            Ut = (e, t) => t ? {clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2} : e;

        class Jt {
            constructor(e, {
                start: t = (() => !0), move: n = (() => {
                }), end: i = (() => {
                })
            } = {}) {
                this._element = e, this.startPointers = [], this.currentPointers = [], this._pointerStart = e => {
                    if (e.buttons > 0 && 0 !== e.button) return;
                    const t = new Gt(e);
                    this.currentPointers.some((e => e.id === t.id)) || this._triggerPointerStart(t, e) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd))
                }, this._touchStart = e => {
                    for (const t of Array.from(e.changedTouches || [])) this._triggerPointerStart(new Gt(t), e)
                }, this._move = e => {
                    const t = this.currentPointers.slice(),
                        n = (e => "changedTouches" in e)(e) ? Array.from(e.changedTouches).map((e => new Gt(e))) : [new Gt(e)];
                    for (const e of n) {
                        const t = this.currentPointers.findIndex((t => t.id === e.id));
                        t < 0 || (this.currentPointers[t] = e)
                    }
                    this._moveCallback(t, this.currentPointers.slice(), e)
                }, this._triggerPointerEnd = (e, t) => {
                    const n = this.currentPointers.findIndex((t => t.id === e.id));
                    return !(n < 0 || (this.currentPointers.splice(n, 1), this.startPointers.splice(n, 1), this._endCallback(e, t), 0))
                }, this._pointerEnd = e => {
                    e.buttons > 0 && 0 !== e.button || this._triggerPointerEnd(new Gt(e), e) && (window.removeEventListener("mousemove", this._move, {passive: !1}), window.removeEventListener("mouseup", this._pointerEnd, {passive: !1}))
                }, this._touchEnd = e => {
                    for (const t of Array.from(e.changedTouches || [])) this._triggerPointerEnd(new Gt(t), e)
                }, this._startCallback = t, this._moveCallback = n, this._endCallback = i, this._element.addEventListener("mousedown", this._pointerStart, {passive: !1}), this._element.addEventListener("touchstart", this._touchStart, {passive: !1}), this._element.addEventListener("touchmove", this._move, {passive: !1}), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd)
            }

            stop() {
                this._element.removeEventListener("mousedown", this._pointerStart, {passive: !1}), this._element.removeEventListener("touchstart", this._touchStart, {passive: !1}), this._element.removeEventListener("touchmove", this._move, {passive: !1}), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd)
            }

            _triggerPointerStart(e, t) {
                return !!this._startCallback(e, t) && (this.currentPointers.push(e), this.startPointers.push(e), !0)
            }
        }

        class Qt {
            constructor(e = {}) {
                this.options = Wt(!0, {}, e), this.plugins = [], this.events = {};
                for (const e of ["on", "once"]) for (const t of Object.entries(this.options[e] || {})) this[e](...t)
            }

            option(e, t, ...n) {
                let i = (s = e = String(e), a = this.options, s.split(".").reduce((function (e, t) {
                    return e && e[t]
                }), a));
                var s, a;
                return "function" == typeof i && (i = i.call(this, this, ...n)), void 0 === i ? t : i
            }

            localize(e, t = []) {
                return (e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((e, n, i) => {
                    let s = "";
                    i ? s = this.option(`${n[0] + n.toLowerCase().substring(1)}.l10n.${i}`) : n && (s = this.option(`l10n.${n}`)), s || (s = e);
                    for (let e = 0; e < t.length; e++) s = s.split(t[e][0]).join(t[e][1]);
                    return s
                }))).replace(/\{\{(.*)\}\}/, ((e, t) => t))
            }

            on(e, t) {
                if (Yt(e)) {
                    for (const t of Object.entries(e)) this.on(...t);
                    return this
                }
                return String(e).split(" ").forEach((e => {
                    const n = this.events[e] = this.events[e] || [];
                    -1 == n.indexOf(t) && n.push(t)
                })), this
            }

            once(e, t) {
                if (Yt(e)) {
                    for (const t of Object.entries(e)) this.once(...t);
                    return this
                }
                return String(e).split(" ").forEach((e => {
                    const n = (...i) => {
                        this.off(e, n), t.call(this, this, ...i)
                    };
                    n._ = t, this.on(e, n)
                })), this
            }

            off(e, t) {
                if (!Yt(e)) return e.split(" ").forEach((e => {
                    const n = this.events[e];
                    if (!n || !n.length) return this;
                    let i = -1;
                    for (let e = 0, s = n.length; e < s; e++) {
                        const s = n[e];
                        if (s && (s === t || s._ === t)) {
                            i = e;
                            break
                        }
                    }
                    -1 != i && n.splice(i, 1)
                })), this;
                for (const t of Object.entries(e)) this.off(...t)
            }

            trigger(e, ...t) {
                for (const n of [...this.events[e] || []].slice()) if (n && !1 === n.call(this, this, ...t)) return !1;
                for (const n of [...this.events["*"] || []].slice()) if (n && !1 === n.call(this, e, this, ...t)) return !1;
                return !0
            }

            attachPlugins(e) {
                const t = {};
                for (const [n, i] of Object.entries(e || {})) !1 === this.options[n] || this.plugins[n] || (this.options[n] = Wt({}, i.defaults || {}, this.options[n]), t[n] = new i(this));
                for (const [e, n] of Object.entries(t)) n.attach(this);
                return this.plugins = Object.assign({}, this.plugins, t), this
            }

            detachPlugins() {
                for (const e in this.plugins) {
                    let t;
                    (t = this.plugins[e]) && "function" == typeof t.detach && t.detach(this)
                }
                return this.plugins = {}, this
            }
        }

        const Kt = {
            touch: !0,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: !1,
            lockAxis: !1,
            friction: .64,
            decelFriction: .88,
            zoomFriction: .74,
            bounceForce: .2,
            baseScale: 1,
            minScale: 1,
            maxScale: 2,
            step: .5,
            textSelection: !1,
            click: "toggleZoom",
            wheel: "zoom",
            wheelFactor: 42,
            wheelLimit: 5,
            draggableClass: "is-draggable",
            draggingClass: "is-dragging",
            ratio: 1
        };

        class en extends Qt {
            constructor(e, t = {}) {
                super(Wt(!0, {}, Kt, t)), this.state = "init", this.$container = e;
                for (const e of ["onLoad", "onWheel", "onClick"]) this[e] = this[e].bind(this);
                this.initLayout(), this.resetValues(), this.attachPlugins(en.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({friction: 0}), e.__Panzoom = this
            }

            initLayout() {
                const e = this.$container;
                if (!(e instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
                const t = this.option("content") || e.querySelector(".panzoom__content");
                if (!t) throw new Error("Panzoom: Content not found");
                this.$content = t;
                let n = this.option("viewport") || e.querySelector(".panzoom__viewport");
                n || !1 === this.option("wrapInner") || (n = document.createElement("div"), n.classList.add("panzoom__viewport"), n.append(...e.childNodes), e.appendChild(n)), this.$viewport = n || t.parentNode
            }

            resetValues() {
                this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
                    width: 0,
                    height: 0
                }, this.viewport = {width: 0, height: 0}, this.content = {
                    origWidth: 0,
                    origHeight: 0,
                    width: 0,
                    height: 0,
                    x: this.option("x", 0),
                    y: this.option("y", 0),
                    scale: this.option("baseScale")
                }, this.transform = {x: 0, y: 0, scale: 1}, this.resetDragPosition()
            }

            onLoad(e) {
                this.updateMetrics(), this.panTo({
                    scale: this.option("baseScale"),
                    friction: 0
                }), this.trigger("load", e)
            }

            onClick(e) {
                if (e.defaultPrevented) return;
                if (document.activeElement && document.activeElement.closest("[contenteditable]")) return;
                if (this.option("textSelection") && window.getSelection().toString().length && (!e.target || !e.target.hasAttribute("data-fancybox-close"))) return void e.stopPropagation();
                const t = this.$content.getClientRects()[0];
                if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(t.top - this.dragStart.rect.top) > 1 || Math.abs(t.left - this.dragStart.rect.left) > 1)) return e.preventDefault(), void e.stopPropagation();
                !1 !== this.trigger("click", e) && this.option("zoom") && "toggleZoom" === this.option("click") && (e.preventDefault(), e.stopPropagation(), this.zoomWithClick(e))
            }

            onWheel(e) {
                !1 !== this.trigger("wheel", e) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(e)
            }

            zoomWithWheel(e) {
                void 0 === this.changedDelta && (this.changedDelta = 0);
                const t = Math.max(-1, Math.min(1, -e.deltaY || -e.deltaX || e.wheelDelta || -e.detail)),
                    n = this.content.scale;
                let i = n * (100 + t * this.option("wheelFactor")) / 100;
                if (t < 0 && Math.abs(n - this.option("minScale")) < .01 || t > 0 && Math.abs(n - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(t), i = n) : (this.changedDelta = 0, i = Math.max(Math.min(i, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
                if (e.preventDefault(), i === n) return;
                const s = this.$content.getBoundingClientRect(), a = e.clientX - s.left, o = e.clientY - s.top;
                this.zoomTo(i, {x: a, y: o})
            }

            zoomWithClick(e) {
                const t = this.$content.getClientRects()[0], n = e.clientX - t.left, i = e.clientY - t.top;
                this.toggleZoom({x: n, y: i})
            }

            attachEvents() {
                this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {passive: !1}), this.$container.addEventListener("click", this.onClick, {passive: !1}), this.initObserver();
                const e = new Jt(this.$container, {
                    start: (t, n) => {
                        if (!this.option("touch")) return !1;
                        if (this.velocity.scale < 0) return !1;
                        const i = n.composedPath()[0];
                        if (!e.currentPointers.length) {
                            if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.nodeName)) return !1;
                            if (this.option("textSelection") && ((e, t, n) => {
                                const i = e.childNodes, s = document.createRange();
                                for (let e = 0; e < i.length; e++) {
                                    const a = i[e];
                                    if (a.nodeType !== Node.TEXT_NODE) continue;
                                    s.selectNodeContents(a);
                                    const o = s.getBoundingClientRect();
                                    if (t >= o.left && n >= o.top && t <= o.right && n <= o.bottom) return a
                                }
                                return !1
                            })(i, t.clientX, t.clientY)) return !1
                        }
                        return !Vt(i) && !1 !== this.trigger("touchStart", n) && ("mousedown" === n.type && n.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0)
                    }, move: (t, n, i) => {
                        if ("pointerdown" !== this.state) return;
                        if (!1 === this.trigger("touchMove", i)) return void i.preventDefault();
                        if (n.length < 2 && !0 === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;
                        if (n.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;
                        const s = Ut(t[0], t[1]), a = Ut(n[0], n[1]), o = a.clientX - s.clientX,
                            r = a.clientY - s.clientY, l = Zt(t[0], t[1]), c = Zt(n[0], n[1]), u = l && c ? c / l : 1;
                        this.dragOffset.x += o, this.dragOffset.y += r, this.dragOffset.scale *= u, this.dragOffset.time = Date.now() - this.dragPosition.time;
                        const d = 1 === this.dragStart.scale && this.option("lockAxis");
                        if (d && !this.lockAxis) {
                            if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void i.preventDefault();
                            const e = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                            this.lockAxis = e > 45 && e < 135 ? "y" : "x"
                        }
                        if ("xy" === d || "y" !== this.lockAxis) {
                            if (i.preventDefault(), i.stopPropagation(), i.stopImmediatePropagation(), this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, n.length > 1) {
                                const t = Ut(e.startPointers[0], e.startPointers[1]),
                                    n = t.clientX - this.dragStart.rect.x, i = t.clientY - this.dragStart.rect.y, {
                                        deltaX: s,
                                        deltaY: o
                                    } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, n, i);
                                this.dragPosition.x -= s, this.dragPosition.y -= o, this.dragPosition.midPoint = a
                            } else this.setDragResistance();
                            this.transform = {
                                x: this.dragPosition.x,
                                y: this.dragPosition.y,
                                scale: this.dragPosition.scale
                            }, this.startAnimation()
                        }
                    }, end: (t, n) => {
                        if ("pointerdown" !== this.state) return;
                        if (this._dragOffset = {...this.dragOffset}, e.currentPointers.length) return void this.resetDragPosition();
                        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", n)) return;
                        if ("decel" !== this.state) return;
                        const i = this.option("minScale");
                        if (this.transform.scale < i) return void this.zoomTo(i, {friction: .64});
                        const s = this.option("maxScale");
                        if (this.transform.scale - s > .01) {
                            const e = this.dragPosition.midPoint || t, n = this.$content.getClientRects()[0];
                            this.zoomTo(s, {friction: .64, x: e.clientX - n.left, y: e.clientY - n.top})
                        }
                    }
                });
                this.pointerTracker = e
            }

            initObserver() {
                this.resizeObserver || (this.resizeObserver = new Xt((() => {
                    this.updateTimer || (this.updateTimer = setTimeout((() => {
                        const e = this.$container.getBoundingClientRect();
                        e.width && e.height ? ((Math.abs(e.width - this.container.width) > 1 || Math.abs(e.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), this.updateMetrics(), this.panTo({
                            x: this.content.x,
                            y: this.content.y,
                            scale: this.option("baseScale"),
                            friction: 0
                        })), this.updateTimer = null) : this.updateTimer = null
                    }), this.updateRate))
                })), this.resizeObserver.observe(this.$container))
            }

            resetDragPosition() {
                this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {x: 0, y: 0, scale: 0};
                const {x: e, y: t, scale: n} = this.content;
                this.dragStart = {
                    rect: this.$content.getBoundingClientRect(),
                    x: e,
                    y: t,
                    scale: n
                }, this.dragPosition = {...this.dragPosition, x: e, y: t, scale: n}, this.dragOffset = {
                    x: 0,
                    y: 0,
                    scale: 1,
                    time: 0
                }
            }

            updateMetrics(e) {
                !0 !== e && this.trigger("beforeUpdate");
                const t = this.$container, n = this.$content, i = this.$viewport, s = n instanceof HTMLImageElement,
                    a = this.option("zoom"), o = this.option("resizeParent", a);
                let r = this.option("width"), l = this.option("height"),
                    c = r || (u = n, Math.max(parseFloat(u.naturalWidth || 0), parseFloat(u.width && u.width.baseVal && u.width.baseVal.value || 0), parseFloat(u.offsetWidth || 0), parseFloat(u.scrollWidth || 0)));
                var u;
                let d = l || (e => Math.max(parseFloat(e.naturalHeight || 0), parseFloat(e.height && e.height.baseVal && e.height.baseVal.value || 0), parseFloat(e.offsetHeight || 0), parseFloat(e.scrollHeight || 0)))(n);
                Object.assign(n.style, {
                    width: r ? `${r}px` : "",
                    height: l ? `${l}px` : "",
                    maxWidth: "",
                    maxHeight: ""
                }), o && Object.assign(i.style, {width: "", height: ""});
                const h = this.option("ratio");
                c = qt(c * h), d = qt(d * h), r = c, l = d;
                const p = n.getBoundingClientRect(), f = i.getBoundingClientRect(),
                    m = i == t ? f : t.getBoundingClientRect();
                let g = Math.max(i.offsetWidth, qt(f.width)), v = Math.max(i.offsetHeight, qt(f.height)),
                    y = window.getComputedStyle(i);
                if (g -= parseFloat(y.paddingLeft) + parseFloat(y.paddingRight), v -= parseFloat(y.paddingTop) + parseFloat(y.paddingBottom), this.viewport.width = g, this.viewport.height = v, a) {
                    if (Math.abs(c - p.width) > .1 || Math.abs(d - p.height) > .1) {
                        const e = ((e, t, n, i) => {
                            const s = Math.min(n / e || 0, i / t);
                            return {width: e * s || 0, height: t * s || 0}
                        })(c, d, Math.min(c, p.width), Math.min(d, p.height));
                        r = qt(e.width), l = qt(e.height)
                    }
                    Object.assign(n.style, {width: `${r}px`, height: `${l}px`, transform: ""})
                }
                if (o && (Object.assign(i.style, {
                    width: `${r}px`,
                    height: `${l}px`
                }), this.viewport = {
                    ...this.viewport,
                    width: r,
                    height: l
                }), s && a && "function" != typeof this.options.maxScale) {
                    const e = this.option("maxScale");
                    this.options.maxScale = function () {
                        return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : e
                    }
                }
                this.content = {
                    ...this.content,
                    origWidth: c,
                    origHeight: d,
                    fitWidth: r,
                    fitHeight: l,
                    width: r,
                    height: l,
                    scale: 1,
                    isZoomable: a
                }, this.container = {width: m.width, height: m.height}, !0 !== e && this.trigger("afterUpdate")
            }

            zoomIn(e) {
                this.zoomTo(this.content.scale + (e || this.option("step")))
            }

            zoomOut(e) {
                this.zoomTo(this.content.scale - (e || this.option("step")))
            }

            toggleZoom(e = {}) {
                const t = this.option("maxScale"), n = this.option("baseScale"),
                    i = this.content.scale > n + .5 * (t - n) ? n : t;
                this.zoomTo(i, e)
            }

            zoomTo(e = this.option("baseScale"), {x: t = null, y: n = null} = {}) {
                e = Math.max(Math.min(e, this.option("maxScale")), this.option("minScale"));
                const i = qt(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
                null === t && (t = this.content.width * i * .5), null === n && (n = this.content.height * i * .5);
                const {deltaX: s, deltaY: a} = this.getZoomDelta(e, t, n);
                t = this.content.x - s, n = this.content.y - a, this.panTo({
                    x: t,
                    y: n,
                    scale: e,
                    friction: this.option("zoomFriction")
                })
            }

            getZoomDelta(e, t = 0, n = 0) {
                const i = this.content.fitWidth * this.content.scale, s = this.content.fitHeight * this.content.scale,
                    a = t > 0 && i ? t / i : 0, o = n > 0 && s ? n / s : 0;
                return {deltaX: (this.content.fitWidth * e - i) * a, deltaY: (this.content.fitHeight * e - s) * o}
            }

            panTo({
                      x: e = this.content.x,
                      y: t = this.content.y,
                      scale: n,
                      friction: i = this.option("friction"),
                      ignoreBounds: s = !1
                  } = {}) {
                if (n = n || this.content.scale || 1, !s) {
                    const {boundX: i, boundY: s} = this.getBounds(n);
                    i && (e = Math.max(Math.min(e, i.to), i.from)), s && (t = Math.max(Math.min(t, s.to), s.from))
                }
                this.friction = i, this.transform = {
                    ...this.transform,
                    x: e,
                    y: t,
                    scale: n
                }, i ? (this.state = "panning", this.velocity = {
                    x: (1 / this.friction - 1) * (e - this.content.x),
                    y: (1 / this.friction - 1) * (t - this.content.y),
                    scale: (1 / this.friction - 1) * (n - this.content.scale)
                }, this.startAnimation()) : this.endAnimation()
            }

            startAnimation() {
                this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame((() => this.animate()))
            }

            animate() {
                if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform(); else if ("pointerdown" !== this.state) return void this.endAnimation();
                this.rAF = requestAnimationFrame((() => this.animate()))
            }

            getBounds(e) {
                let t = this.boundX, n = this.boundY;
                if (void 0 !== t && void 0 !== n) return {boundX: t, boundY: n};
                t = {from: 0, to: 0}, n = {from: 0, to: 0}, e = e || this.transform.scale;
                const i = this.content.fitWidth * e, s = this.content.fitHeight * e, a = this.viewport.width,
                    o = this.viewport.height;
                if (i < a) {
                    const e = qt(.5 * (a - i));
                    t.from = e, t.to = e
                } else t.from = qt(a - i);
                if (s < o) {
                    const e = .5 * (o - s);
                    n.from = e, n.to = e
                } else n.from = qt(o - s);
                return {boundX: t, boundY: n}
            }

            setEdgeForce() {
                if ("decel" !== this.state) return;
                const e = this.option("bounceForce"), {
                    boundX: t,
                    boundY: n
                } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
                let i, s, a, o;
                if (t && (i = this.content.x < t.from, s = this.content.x > t.to), n && (a = this.content.y < n.from, o = this.content.y > n.to), i || s) {
                    let n = ((i ? t.from : t.to) - this.content.x) * e;
                    const s = this.content.x + (this.velocity.x + n) / this.friction;
                    s >= t.from && s <= t.to && (n += this.velocity.x), this.velocity.x = n, this.recalculateTransform()
                }
                if (a || o) {
                    let t = ((a ? n.from : n.to) - this.content.y) * e;
                    const i = this.content.y + (t + this.velocity.y) / this.friction;
                    i >= n.from && i <= n.to && (t += this.velocity.y), this.velocity.y = t, this.recalculateTransform()
                }
            }

            setDragResistance() {
                if ("pointerdown" !== this.state) return;
                const {boundX: e, boundY: t} = this.getBounds(this.dragPosition.scale);
                let n, i, s, a;
                if (e && (n = this.dragPosition.x < e.from, i = this.dragPosition.x > e.to), t && (s = this.dragPosition.y < t.from, a = this.dragPosition.y > t.to), (n || i) && (!n || !i)) {
                    const t = n ? e.from : e.to, i = t - this.dragPosition.x;
                    this.dragPosition.x = t - .3 * i
                }
                if ((s || a) && (!s || !a)) {
                    const e = s ? t.from : t.to, n = e - this.dragPosition.y;
                    this.dragPosition.y = e - .3 * n
                }
            }

            setDragForce() {
                "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale)
            }

            recalculateTransform() {
                this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1)
            }

            isAnimating() {
                return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05))
            }

            setTransform(e) {
                let t, n, i;
                if (e ? (t = qt(this.transform.x), n = qt(this.transform.y), i = this.transform.scale, this.content = {
                    ...this.content,
                    x: t,
                    y: n,
                    scale: i
                }) : (t = qt(this.content.x), n = qt(this.content.y), i = this.content.scale / (this.content.width / this.content.fitWidth), this.content = {
                    ...this.content,
                    x: t,
                    y: n
                }), this.trigger("beforeTransform"), t = qt(this.content.x), n = qt(this.content.y), e && this.option("zoom")) {
                    let e, s;
                    e = qt(this.content.fitWidth * i), s = qt(this.content.fitHeight * i), this.content.width = e, this.content.height = s, this.transform = {
                        ...this.transform,
                        width: e,
                        height: s,
                        scale: i
                    }, Object.assign(this.$content.style, {
                        width: `${e}px`,
                        height: `${s}px`,
                        maxWidth: "none",
                        maxHeight: "none",
                        transform: `translate3d(${t}px, ${n}px, 0) scale(1)`
                    })
                } else this.$content.style.transform = `translate3d(${t}px, ${n}px, 0) scale(${i})`;
                this.trigger("afterTransform")
            }

            endAnimation(e) {
                cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
                    x: 0,
                    y: 0,
                    scale: 0
                }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== e && this.trigger("endAnimation")
            }

            handleCursor() {
                const e = this.option("draggableClass");
                e && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(e) : this.$container.classList.add(e))
            }

            detachEvents() {
                this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {passive: !1}), this.$container.removeEventListener("click", this.onClick, {passive: !1}), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
            }

            destroy() {
                "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition())
            }
        }

        en.version = "4.0.31", en.Plugins = {};
        const tn = (e, t) => {
            let n = 0;
            return function (...i) {
                const s = (new Date).getTime();
                if (!(s - n < t)) return n = s, e(...i)
            }
        };

        class nn {
            constructor(e) {
                this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this)
            }

            option(e) {
                return this.carousel.option(`Navigation.${e}`)
            }

            createButton(e) {
                const t = document.createElement("button");
                t.setAttribute("title", this.carousel.localize(`{{${e.toUpperCase()}}}`));
                const n = this.option("classNames.button") + " " + this.option(`classNames.${e}`);
                return t.classList.add(...n.split(" ")), t.setAttribute("tabindex", "0"), t.innerHTML = this.carousel.localize(this.option(`${e}Tpl`)), t.addEventListener("click", (t => {
                    t.preventDefault(), t.stopPropagation(), this.carousel["slide" + ("next" === e ? "Next" : "Prev")]()
                })), t
            }

            build() {
                this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev))
            }

            onRefresh() {
                const e = this.carousel.pages.length;
                e <= 1 || e > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= e - 1 && this.$next.setAttribute("disabled", "")))
            }

            cleanup() {
                this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null
            }

            attach() {
                this.carousel.on("refresh change", this.onRefresh)
            }

            detach() {
                this.carousel.off("refresh change", this.onRefresh), this.cleanup()
            }
        }

        nn.defaults = {
            prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
            nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
            classNames: {main: "carousel__nav", button: "carousel__button", next: "is-next", prev: "is-prev"}
        };

        class sn {
            constructor(e) {
                this.carousel = e, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)
            }

            addAsTargetFor(e) {
                this.target = this.carousel, this.nav = e, this.attachEvents()
            }

            addAsNavFor(e) {
                this.target = e, this.nav = this.carousel, this.attachEvents()
            }

            attachEvents() {
                this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange)
            }

            onNavReady() {
                this.onTargetChange(!0)
            }

            onNavClick(e, t, n) {
                const i = n.target.closest(".carousel__slide");
                if (!i) return;
                n.stopPropagation();
                const s = parseInt(i.dataset.index, 10), a = this.target.findPageForSlide(s);
                this.target.page !== a && this.target.slideTo(a, {friction: this.friction}), this.markSelectedSlide(s)
            }

            onNavCreateSlide(e, t) {
                t.index === this.selectedIndex && this.markSelectedSlide(t.index)
            }

            onTargetChange() {
                const e = this.target.pages[this.target.page].indexes[0], t = this.nav.findPageForSlide(e);
                this.nav.slideTo(t), this.markSelectedSlide(e)
            }

            markSelectedSlide(e) {
                this.selectedIndex = e, [...this.nav.slides].filter((e => e.$el && e.$el.classList.remove("is-nav-selected")));
                const t = this.nav.slides[e];
                t && t.$el && t.$el.classList.add("is-nav-selected")
            }

            attach(e) {
                const t = e.options.Sync;
                (t.target || t.nav) && (t.target ? this.addAsNavFor(t.target) : t.nav && this.addAsTargetFor(t.nav), this.friction = t.friction)
            }

            detach() {
                this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange))
            }
        }

        sn.defaults = {friction: .92};
        const an = {
            Navigation: nn, Dots: class {
                constructor(e) {
                    this.carousel = e, this.$list = null, this.events = {
                        change: this.onChange.bind(this),
                        refresh: this.onRefresh.bind(this)
                    }
                }

                buildList() {
                    if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
                    const e = document.createElement("ol");
                    return e.classList.add("carousel__dots"), e.addEventListener("click", (e => {
                        if (!("page" in e.target.dataset)) return;
                        e.preventDefault(), e.stopPropagation();
                        const t = parseInt(e.target.dataset.page, 10), n = this.carousel;
                        t !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == t ? "slidePrev" : "slideNext"]() : n.slideTo(t))
                    })), this.$list = e, this.carousel.$container.appendChild(e), this.carousel.$container.classList.add("has-dots"), e
                }

                removeList() {
                    this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots")
                }

                rebuildDots() {
                    let e = this.$list;
                    const t = !!e, n = this.carousel.pages.length;
                    if (n < 2) return void (t && this.removeList());
                    t || (e = this.buildList());
                    const i = this.$list.children.length;
                    if (i > n) for (let e = n; e < i; e++) this.$list.removeChild(this.$list.lastChild); else {
                        for (let e = i; e < n; e++) {
                            const t = document.createElement("li");
                            t.classList.add("carousel__dot"), t.dataset.page = e, t.setAttribute("role", "button"), t.setAttribute("tabindex", "0"), t.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", e + 1]])), t.addEventListener("keydown", (e => {
                                const n = e.code;
                                let i;
                                "Enter" === n || "NumpadEnter" === n ? i = t : "ArrowRight" === n ? i = t.nextSibling : "ArrowLeft" === n && (i = t.previousSibling), i && i.click()
                            })), this.$list.appendChild(t)
                        }
                        this.setActiveDot()
                    }
                }

                setActiveDot() {
                    if (!this.$list) return;
                    this.$list.childNodes.forEach((e => {
                        e.classList.remove("is-selected")
                    }));
                    const e = this.$list.childNodes[this.carousel.page];
                    e && e.classList.add("is-selected")
                }

                onChange() {
                    this.setActiveDot()
                }

                onRefresh() {
                    this.rebuildDots()
                }

                attach() {
                    this.carousel.on(this.events)
                }

                detach() {
                    this.removeList(), this.carousel.off(this.events), this.carousel = null
                }
            }, Sync: sn
        }, on = {
            slides: [],
            preload: 0,
            slidesPerPage: "auto",
            initialPage: null,
            initialSlide: null,
            friction: .92,
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            prefix: "",
            classNames: {
                viewport: "carousel__viewport",
                track: "carousel__track",
                slide: "carousel__slide",
                slideSelected: "is-selected"
            },
            l10n: {NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d"}
        };

        class rn extends Qt {
            constructor(e, t = {}) {
                if (super(t = Wt(!0, {}, on, t)), this.state = "init", this.$container = e, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");
                this.slideNext = tn(this.slideNext.bind(this), 250), this.slidePrev = tn(this.slidePrev.bind(this), 250), this.init(), e.__Carousel = this
            }

            init() {
                this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(rn.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready")
            }

            initLayout() {
                const e = this.option("prefix"), t = this.option("classNames");
                this.$viewport = this.option("viewport") || this.$container.querySelector(`.${e}${t.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(e + t.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${e}${t.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(e + t.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track))
            }

            initSlides() {
                this.slides = [], this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((e => {
                    const t = {$el: e, isDom: !0};
                    this.slides.push(t), this.trigger("createSlide", t, this.slides.length)
                })), Array.isArray(this.options.slides) && (this.slides = Wt(!0, [...this.slides], this.options.slides))
            }

            updateMetrics() {
                let e, t = 0, n = [];
                this.slides.forEach(((i, s) => {
                    const a = i.$el, o = i.isDom || !e ? this.getSlideMetrics(a) : e;
                    i.index = s, i.width = o, i.left = t, e = o, t += o, n.push(s)
                }));
                let i = Math.max(this.$track.offsetWidth, qt(this.$track.getBoundingClientRect().width)),
                    s = getComputedStyle(this.$track);
                i -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), this.contentWidth = t, this.viewportWidth = i;
                const a = [], o = this.option("slidesPerPage");
                if (Number.isInteger(o) && t > i) for (let e = 0; e < this.slides.length; e += o) a.push({
                    indexes: n.slice(e, e + o),
                    slides: this.slides.slice(e, e + o)
                }); else {
                    let e = 0, t = 0;
                    for (let n = 0; n < this.slides.length; n += 1) {
                        let s = this.slides[n];
                        (!a.length || t + s.width > i) && (a.push({
                            indexes: [],
                            slides: []
                        }), e = a.length - 1, t = 0), t += s.width, a[e].indexes.push(n), a[e].slides.push(s)
                    }
                }
                const r = this.option("center"), l = this.option("fill");
                a.forEach(((e, n) => {
                    e.index = n, e.width = e.slides.reduce(((e, t) => e + t.width), 0), e.left = e.slides[0].left, r && (e.left += .5 * (i - e.width) * -1), l && !this.option("infiniteX", this.option("infinite")) && t > i && (e.left = Math.max(e.left, 0), e.left = Math.min(e.left, t - i))
                }));
                const c = [];
                let u;
                a.forEach((e => {
                    const t = {...e};
                    u && t.left === u.left ? (u.width += t.width, u.slides = [...u.slides, ...t.slides], u.indexes = [...u.indexes, ...t.indexes]) : (t.index = c.length, u = t, c.push(t))
                })), this.pages = c;
                let d = this.page;
                if (null === d) {
                    const e = this.option("initialSlide");
                    d = null !== e ? this.findPageForSlide(e) : parseInt(this.option("initialPage", 0), 10) || 0, c[d] || (d = c.length && d > c.length ? c[c.length - 1].index : 0), this.page = d, this.pageIndex = d
                }
                this.updatePanzoom(), this.trigger("refresh")
            }

            getSlideMetrics(e) {
                if (!e) {
                    const t = this.slides[0];
                    (e = document.createElement("div")).dataset.isTestEl = 1, e.style.visibility = "hidden", e.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t.customClass && e.classList.add(...t.customClass.split(" ")), this.$track.prepend(e)
                }
                let t = Math.max(e.offsetWidth, qt(e.getBoundingClientRect().width));
                const n = e.currentStyle || window.getComputedStyle(e);
                return t = t + (parseFloat(n.marginLeft) || 0) + (parseFloat(n.marginRight) || 0), e.dataset.isTestEl && e.remove(), t
            }

            findPageForSlide(e) {
                e = parseInt(e, 10) || 0;
                const t = this.pages.find((t => t.indexes.indexOf(e) > -1));
                return t ? t.index : null
            }

            slideNext() {
                this.slideTo(this.pageIndex + 1)
            }

            slidePrev() {
                this.slideTo(this.pageIndex - 1)
            }

            slideTo(e, t = {}) {
                const {x: n = -1 * this.setPage(e, !0), y: i = 0, friction: s = this.option("friction")} = t;
                this.Panzoom.content.x === n && !this.Panzoom.velocity.x && s || (this.Panzoom.panTo({
                    x: n,
                    y: i,
                    friction: s,
                    ignoreBounds: !0
                }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"))
            }

            initPanzoom() {
                this.Panzoom && this.Panzoom.destroy();
                const e = Wt(!0, {}, {
                    content: this.$track,
                    wrapInner: !1,
                    resizeParent: !1,
                    zoom: !1,
                    click: !1,
                    lockAxis: "x",
                    x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                    centerOnStart: !1,
                    textSelection: () => this.option("textSelection", !1),
                    panOnlyZoomed: function () {
                        return this.content.width <= this.viewport.width
                    }
                }, this.option("Panzoom"));
                this.Panzoom = new en(this.$container, e), this.Panzoom.on({
                    "*": (e, ...t) => this.trigger(`Panzoom.${e}`, ...t),
                    afterUpdate: () => {
                        this.updatePage()
                    },
                    beforeTransform: this.onBeforeTransform.bind(this),
                    touchEnd: this.onTouchEnd.bind(this),
                    endAnimation: () => {
                        this.trigger("settle")
                    }
                }), this.updateMetrics(), this.manageSlideVisiblity()
            }

            updatePanzoom() {
                this.Panzoom && (this.Panzoom.content = {
                    ...this.Panzoom.content,
                    fitWidth: this.contentWidth,
                    origWidth: this.contentWidth,
                    width: this.contentWidth
                }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
                    from: -1 * this.pages[this.pages.length - 1].left,
                    to: -1 * this.pages[0].left
                }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
                    from: 0,
                    to: 0
                }, this.Panzoom.handleCursor())
            }

            manageSlideVisiblity() {
                const e = this.contentWidth, t = this.viewportWidth;
                let n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
                const i = this.option("preload"), s = this.option("infiniteX", this.option("infinite")),
                    a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
                    o = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
                this.slides.forEach((r => {
                    let l, c, u = 0;
                    l = n - a, c = n + t + o, l -= i * (t + a + o), c += i * (t + a + o);
                    const d = r.left + r.width > l && r.left < c;
                    l = n + e - a, c = n + e + t + o, l -= i * (t + a + o);
                    const h = s && r.left + r.width > l && r.left < c;
                    l = n - e - a, c = n - e + t + o, l -= i * (t + a + o);
                    const p = s && r.left + r.width > l && r.left < c;
                    h || d || p ? (this.createSlideEl(r), d && (u = 0), h && (u = -1), p && (u = 1), r.left + r.width > n && r.left <= n + t + o && (u = 0)) : this.removeSlideEl(r), r.hasDiff = u
                }));
                let r = 0, l = 0;
                this.slides.forEach(((t, n) => {
                    let i = 0;
                    t.$el ? (n !== r || t.hasDiff ? i = l + t.hasDiff * e : l = 0, t.$el.style.left = Math.abs(i) > .1 ? `${l + t.hasDiff * e}px` : "", r++) : l += t.width
                })), this.markSelectedSlides()
            }

            createSlideEl(e) {
                if (!e) return;
                if (e.$el) {
                    let t = e.$el.dataset.index;
                    if (!t || parseInt(t, 10) !== e.index) {
                        let t;
                        e.$el.dataset.index = e.index, e.$el.querySelectorAll("[data-lazy-srcset]").forEach((e => {
                            e.srcset = e.dataset.lazySrcset
                        })), e.$el.querySelectorAll("[data-lazy-src]").forEach((e => {
                            let t = e.dataset.lazySrc;
                            e instanceof HTMLImageElement ? e.src = t : e.style.backgroundImage = `url('${t}')`
                        })), (t = e.$el.dataset.lazySrc) && (e.$el.style.backgroundImage = `url('${t}')`), e.state = "ready"
                    }
                    return
                }
                const t = document.createElement("div");
                t.dataset.index = e.index, t.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e.customClass && t.classList.add(...e.customClass.split(" ")), e.html && (t.innerHTML = e.html);
                const n = [];
                this.slides.forEach(((e, t) => {
                    e.$el && n.push(t)
                }));
                const i = e.index;
                let s = null;
                if (n.length) {
                    let e = n.reduce(((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e));
                    s = this.slides[e]
                }
                return this.$track.insertBefore(t, s && s.$el ? s.index < e.index ? s.$el.nextSibling : s.$el : null), e.$el = t, this.trigger("createSlide", e, i), e
            }

            removeSlideEl(e) {
                e.$el && !e.isDom && (this.trigger("removeSlide", e), e.$el.remove(), e.$el = null)
            }

            markSelectedSlides() {
                const e = this.option("classNames.slideSelected"), t = "aria-hidden";
                this.slides.forEach(((n, i) => {
                    const s = n.$el;
                    if (!s) return;
                    const a = this.pages[this.page];
                    a && a.indexes && a.indexes.indexOf(i) > -1 ? (e && !s.classList.contains(e) && (s.classList.add(e), this.trigger("selectSlide", n)), s.removeAttribute(t)) : (e && s.classList.contains(e) && (s.classList.remove(e), this.trigger("unselectSlide", n)), s.setAttribute(t, !0))
                }))
            }

            updatePage() {
                this.updateMetrics(), this.slideTo(this.page, {friction: 0})
            }

            onBeforeTransform() {
                this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity()
            }

            manageInfiniteTrack() {
                const e = this.contentWidth, t = this.viewportWidth;
                if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || e < t) return;
                const n = this.Panzoom;
                let i = !1;
                return n.content.x < -1 * (e - t) && (n.content.x += e, this.pageIndex = this.pageIndex - this.pages.length, i = !0), n.content.x > t && (n.content.x -= e, this.pageIndex = this.pageIndex + this.pages.length, i = !0), i && "pointerdown" === n.state && n.resetDragPosition(), i
            }

            onTouchEnd(e, t) {
                const n = this.option("dragFree");
                if (!n && this.pages.length > 1 && e.dragOffset.time < 350 && Math.abs(e.dragOffset.y) < 1 && Math.abs(e.dragOffset.x) > 5) this[e.dragOffset.x < 0 ? "slideNext" : "slidePrev"](); else if (n) {
                    const [, t] = this.getPageFromPosition(-1 * e.transform.x);
                    this.setPage(t)
                } else this.slideToClosest()
            }

            slideToClosest(e = {}) {
                let [, t] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
                this.slideTo(t, e)
            }

            getPageFromPosition(e) {
                const t = this.pages.length;
                this.option("center") && (e += .5 * this.viewportWidth);
                const n = Math.floor(e / this.contentWidth);
                e -= n * this.contentWidth;
                let i = this.slides.find((t => t.left <= e && t.left + t.width > e));
                if (i) {
                    let e = this.findPageForSlide(i.index);
                    return [e, e + n * t]
                }
                return [0, 0]
            }

            setPage(e, t) {
                let n = 0, i = parseInt(e, 10) || 0;
                const s = this.page, a = this.pageIndex, o = this.pages.length, r = this.contentWidth,
                    l = this.viewportWidth;
                if (e = (i % o + o) % o, this.option("infiniteX", this.option("infinite")) && r > l) {
                    const s = Math.floor(i / o) || 0, a = r;
                    if (n = this.pages[e].left + s * a, !0 === t && o > 2) {
                        let e = -1 * this.Panzoom.content.x;
                        const t = n - a, s = n + a, r = Math.abs(e - n), l = Math.abs(e - t), c = Math.abs(e - s);
                        c < r && c <= l ? (n = s, i += o) : l < r && l < c && (n = t, i -= o)
                    }
                } else e = i = Math.max(0, Math.min(i, o - 1)), n = this.pages.length ? this.pages[e].left : 0;
                return this.page = e, this.pageIndex = i, null !== s && e !== s && (this.prevPage = s, this.prevPageIndex = a, this.trigger("change", e, s)), n
            }

            destroy() {
                this.state = "destroy", this.slides.forEach((e => {
                    this.removeSlideEl(e)
                })), this.slides = [], this.Panzoom.destroy(), this.detachPlugins()
            }
        }

        rn.version = "4.0.31", rn.Plugins = an;
        const ln = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let cn = null;
        const un = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],
            dn = e => {
                if (e && ln) {
                    null === cn && document.createElement("div").focus({
                        get preventScroll() {
                            return cn = !0, !1
                        }
                    });
                    try {
                        if (e.setActive) e.setActive(); else if (cn) e.focus({preventScroll: !0}); else {
                            const t = window.pageXOffset || document.body.scrollTop,
                                n = window.pageYOffset || document.body.scrollLeft;
                            e.focus(), document.body.scrollTo({top: t, left: n, behavior: "auto"})
                        }
                    } catch (e) {
                    }
                }
            };

        class hn {
            constructor(e) {
                this.fancybox = e, this.$container = null, this.state = "init";
                for (const e of ["onPrepare", "onClosing", "onKeydown"]) this[e] = this[e].bind(this);
                this.events = {prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown}
            }

            onPrepare() {
                this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build()
            }

            onClosing() {
                this.Carousel && this.Carousel.Panzoom.detachEvents()
            }

            onKeydown(e, t) {
                t === e.option("Thumbs.key") && this.toggle()
            }

            build() {
                if (this.$container) return;
                const e = document.createElement("div");
                e.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling), this.Carousel = new rn(e, Wt(!0, {
                    Dots: !1,
                    Navigation: !1,
                    Sync: {friction: 0},
                    infinite: !1,
                    center: !0,
                    fill: !0,
                    dragFree: !0,
                    slidesPerPage: 1,
                    preload: 1
                }, this.fancybox.option("Thumbs.Carousel"), {
                    Sync: {target: this.fancybox.Carousel},
                    slides: this.getSlides()
                })), this.Carousel.Panzoom.on("wheel", ((e, t) => {
                    t.preventDefault(), this.fancybox[t.deltaY < 0 ? "prev" : "next"]()
                })), this.$container = e, this.state = "visible"
            }

            getSlides() {
                const e = [];
                for (const t of this.fancybox.items) {
                    const n = t.thumb;
                    n && e.push({
                        html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, n),
                        customClass: `has-thumb has-${t.type || "image"}`
                    })
                }
                return e
            }

            toggle() {
                "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build()
            }

            show() {
                "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible")
            }

            hide() {
                "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden")
            }

            cleanup() {
                this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init"
            }

            attach() {
                this.fancybox.on(this.events)
            }

            detach() {
                this.fancybox.off(this.events), this.cleanup()
            }
        }

        hn.defaults = {
            minSlideCount: 2,
            minScreenHeight: 500,
            autoStart: !0,
            key: "t",
            Carousel: {},
            tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'
        };
        const pn = (e, t) => {
            const n = new URL(e), i = new URLSearchParams(n.search);
            let s = new URLSearchParams;
            for (const [e, n] of [...i, ...Object.entries(t)]) "t" === e ? s.set("start", parseInt(n)) : s.set(e, n);
            s = s.toString();
            let a = e.match(/#t=((.*)?\d+s)/);
            return a && (s += `#t=${a[1]}`), s
        }, fn = {
            video: {autoplay: !0, ratio: 16 / 9},
            youtube: {autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            vimeo: {hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            html5video: {
                tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                format: ""
            }
        };

        class mn {
            constructor(e) {
                this.fancybox = e;
                for (const e of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]) this[e] = this[e].bind(this);
                this.events = {
                    init: this.onInit,
                    ready: this.onReady,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide,
                    "Carousel.selectSlide": this.onSelectSlide,
                    "Carousel.unselectSlide": this.onUnselectSlide,
                    "Carousel.refresh": this.onRefresh
                }
            }

            onInit() {
                for (const e of this.fancybox.items) this.processType(e)
            }

            processType(e) {
                if (e.html) return e.src = e.html, e.type = "html", void delete e.html;
                const t = e.src || "";
                let n = e.type || this.fancybox.options.type, i = null;
                if (!t || "string" == typeof t) {
                    if (i = t.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                        const s = pn(t, this.fancybox.option("Html.youtube")), a = encodeURIComponent(i[1]);
                        e.videoId = a, e.src = `https://www.youtube-nocookie.com/embed/${a}?${s}`, e.thumb = e.thumb || `https://i.ytimg.com/vi/${a}/mqdefault.jpg`, e.vendor = "youtube", n = "video"
                    } else if (i = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
                        const s = pn(t, this.fancybox.option("Html.vimeo")), a = encodeURIComponent(i[1]);
                        e.videoId = a, e.src = `https://player.vimeo.com/video/${a}?${s}`, e.vendor = "vimeo", n = "video"
                    } else (i = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `//maps.google.${i[1]}/?ll=${(i[2] ? i[2] + "&z=" + Math.floor(i[3]) + (i[4] ? i[4].replace(/^\//, "&") : "") : i[4] + "").replace(/\?/, "&")}&output=${i[4] && i[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, n = "map") : (i = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `//maps.google.${i[1]}/maps?q=${i[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, n = "map");
                    n || ("#" === t.charAt(0) ? n = "inline" : (i = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "html5video", e.format = e.format || "video/" + ("ogv" === i[1] ? "ogg" : i[1])) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : t.match(/\.(pdf)((\?|#).*)?$/i) && (n = "pdf")), e.type = n || this.fancybox.option("defaultType", "image"), "html5video" !== n && "video" !== n || (e.video = Wt({}, this.fancybox.option("Html.video"), e.video), e._width && e._height ? e.ratio = parseFloat(e._width) / parseFloat(e._height) : e.ratio = e.ratio || e.video.ratio || fn.video.ratio)
                }
            }

            onReady() {
                this.fancybox.Carousel.slides.forEach((e => {
                    e.$el && (this.setContent(e), e.index === this.fancybox.getSlide().index && this.playVideo(e))
                }))
            }

            onCreateSlide(e, t, n) {
                "ready" === this.fancybox.state && this.setContent(n)
            }

            loadInlineContent(e) {
                let t;
                if (e.src instanceof HTMLElement) t = e.src; else if ("string" == typeof e.src) {
                    const n = e.src.split("#", 2), i = 2 === n.length && "" === n[0] ? n[1] : n[0];
                    t = document.getElementById(i)
                }
                if (t) {
                    if ("clone" === e.type || t.$placeHolder) {
                        t = t.cloneNode(!0);
                        let n = t.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.fancybox.id}-${e.index}`, t.setAttribute("id", n)
                    } else {
                        const e = document.createElement("div");
                        e.classList.add("fancybox-placeholder"), t.parentNode.insertBefore(e, t), t.$placeHolder = e
                    }
                    this.fancybox.setContent(e, t)
                } else this.fancybox.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }

            loadAjaxContent(e) {
                const t = this.fancybox, n = new XMLHttpRequest;
                t.showLoading(e), n.onreadystatechange = function () {
                    n.readyState === XMLHttpRequest.DONE && "ready" === t.state && (t.hideLoading(e), 200 === n.status ? t.setContent(e, n.responseText) : t.setError(e, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                };
                const i = e.ajax || null;
                n.open(i ? "POST" : "GET", e.src), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(i), e.xhr = n
            }

            loadIframeContent(e) {
                const t = this.fancybox, n = document.createElement("iframe");
                if (n.className = "fancybox__iframe", n.setAttribute("id", `fancybox__iframe_${t.id}_${e.index}`), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), e.$iframe = n, "iframe" !== e.type || !1 === e.preload) return n.setAttribute("src", e.src), this.fancybox.setContent(e, n), void this.resizeIframe(e);
                t.showLoading(e);
                const i = document.createElement("div");
                i.style.visibility = "hidden", this.fancybox.setContent(e, i), i.appendChild(n), n.onerror = () => {
                    t.setError(e, "{{IFRAME_ERROR}}")
                }, n.onload = () => {
                    t.hideLoading(e);
                    let i = !1;
                    n.isReady || (n.isReady = !0, i = !0), n.src.length && (n.parentNode.style.visibility = "", this.resizeIframe(e), i && t.revealContent(e))
                }, n.setAttribute("src", e.src)
            }

            setAspectRatio(e) {
                const t = e.$content, n = e.ratio;
                if (!t) return;
                let i = e._width, s = e._height;
                if (n || i && s) {
                    Object.assign(t.style, {
                        width: i && s ? "100%" : "",
                        height: i && s ? "100%" : "",
                        maxWidth: "",
                        maxHeight: ""
                    });
                    let e = t.offsetWidth, a = t.offsetHeight;
                    if (i = i || e, s = s || a, i > e || s > a) {
                        let t = Math.min(e / i, a / s);
                        i *= t, s *= t
                    }
                    Math.abs(i / s - n) > .01 && (n < i / s ? i = s * n : s = i / n), Object.assign(t.style, {
                        width: `${i}px`,
                        height: `${s}px`
                    })
                }
            }

            resizeIframe(e) {
                const t = e.$iframe;
                if (!t) return;
                let n = e._width || 0, i = e._height || 0;
                n && i && (e.autoSize = !1);
                const s = t.parentNode, a = s && s.style;
                if (!1 !== e.preload && !1 !== e.autoSize && a) try {
                    const e = window.getComputedStyle(s), o = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
                        r = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), l = t.contentWindow.document,
                        c = l.getElementsByTagName("html")[0], u = l.body;
                    a.width = "", u.style.overflow = "hidden", n = n || c.scrollWidth + o, a.width = `${n}px`, u.style.overflow = "", a.flex = "0 0 auto", a.height = `${u.scrollHeight}px`, i = c.scrollHeight + r
                } catch (e) {
                }
                if (n || i) {
                    const e = {flex: "0 1 auto"};
                    n && (e.width = `${n}px`), i && (e.height = `${i}px`), Object.assign(a, e)
                }
            }

            onRefresh(e, t) {
                t.slides.forEach((e => {
                    e.$el && (e.$iframe && this.resizeIframe(e), e.ratio && this.setAspectRatio(e))
                }))
            }

            setContent(e) {
                if (e && !e.isDom) {
                    switch (e.type) {
                        case"html":
                            this.fancybox.setContent(e, e.src);
                            break;
                        case"html5video":
                            this.fancybox.setContent(e, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.format || e.html5video && e.html5video.format || "").replace("{{poster}}", e.poster || e.thumb || ""));
                            break;
                        case"inline":
                        case"clone":
                            this.loadInlineContent(e);
                            break;
                        case"ajax":
                            this.loadAjaxContent(e);
                            break;
                        case"pdf":
                        case"video":
                        case"map":
                            e.preload = !1;
                        case"iframe":
                            this.loadIframeContent(e)
                    }
                    e.ratio && this.setAspectRatio(e)
                }
            }

            onSelectSlide(e, t, n) {
                "ready" === e.state && this.playVideo(n)
            }

            playVideo(e) {
                if ("html5video" === e.type && e.video.autoplay) try {
                    const t = e.$el.querySelector("video");
                    if (t) {
                        const e = t.play();
                        void 0 !== e && e.then((() => {
                        })).catch((e => {
                            t.muted = !0, t.play()
                        }))
                    }
                } catch (e) {
                }
                if ("video" !== e.type || !e.$iframe || !e.$iframe.contentWindow) return;
                const t = () => {
                    if ("done" === e.state && e.$iframe && e.$iframe.contentWindow) {
                        let t;
                        if (e.$iframe.isReady) return e.video && e.video.autoplay && (t = "youtube" == e.vendor ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }), void (t && e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*"));
                        "youtube" === e.vendor && (t = {
                            event: "listening",
                            id: e.$iframe.getAttribute("id")
                        }, e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*"))
                    }
                    e.poller = setTimeout(t, 250)
                };
                t()
            }

            onUnselectSlide(e, t, n) {
                if ("html5video" === n.type) {
                    try {
                        n.$el.querySelector("video").pause()
                    } catch (e) {
                    }
                    return
                }
                let i = !1;
                "vimeo" == n.vendor ? i = {
                    method: "pause",
                    value: "true"
                } : "youtube" === n.vendor && (i = {
                    event: "command",
                    func: "pauseVideo"
                }), i && n.$iframe && n.$iframe.contentWindow && n.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"), clearTimeout(n.poller)
            }

            onRemoveSlide(e, t, n) {
                n.xhr && (n.xhr.abort(), n.xhr = null), n.$iframe && (n.$iframe.onload = n.$iframe.onerror = null, n.$iframe.src = "//about:blank", n.$iframe = null);
                const i = n.$content;
                "inline" === n.type && i && (i.classList.remove("fancybox__content"), "none" !== i.style.display && (i.style.display = "none")), n.$closeButton && (n.$closeButton.remove(), n.$closeButton = null);
                const s = i && i.$placeHolder;
                s && (s.parentNode.insertBefore(i, s), s.remove(), i.$placeHolder = null)
            }

            onMessage(e) {
                try {
                    let t = JSON.parse(e.data);
                    if ("https://player.vimeo.com" === e.origin) {
                        if ("ready" === t.event) for (let t of document.getElementsByClassName("fancybox__iframe")) t.contentWindow === e.source && (t.isReady = 1)
                    } else "https://www.youtube-nocookie.com" === e.origin && "onReady" === t.event && (document.getElementById(t.id).isReady = 1)
                } catch (e) {
                }
            }

            attach() {
                this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1)
            }

            detach() {
                this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1)
            }
        }

        mn.defaults = fn;

        class gn {
            constructor(e) {
                this.fancybox = e;
                for (const e of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]) this[e] = this[e].bind(this);
                this.events = {
                    ready: this.onReady,
                    closing: this.onClosing,
                    done: this.onDone,
                    "Carousel.change": this.onPageChange,
                    "Carousel.createSlide": this.onCreateSlide,
                    "Carousel.removeSlide": this.onRemoveSlide
                }
            }

            onReady() {
                this.fancybox.Carousel.slides.forEach((e => {
                    e.$el && this.setContent(e)
                }))
            }

            onDone(e, t) {
                this.handleCursor(t)
            }

            onClosing(e) {
                clearTimeout(this.clickTimer), this.clickTimer = null, e.Carousel.slides.forEach((e => {
                    e.$image && (e.state = "destroy"), e.Panzoom && e.Panzoom.detachEvents()
                })), "closing" === this.fancybox.state && this.canZoom(e.getSlide()) && this.zoomOut()
            }

            onCreateSlide(e, t, n) {
                "ready" === this.fancybox.state && this.setContent(n)
            }

            onRemoveSlide(e, t, n) {
                n.$image && (n.$el.classList.remove(e.option("Image.canZoomInClass")), n.$image.remove(), n.$image = null), n.Panzoom && (n.Panzoom.destroy(), n.Panzoom = null), n.$el && n.$el.dataset && delete n.$el.dataset.imageFit
            }

            setContent(e) {
                if (e.isDom || e.html || e.type && "image" !== e.type) return;
                if (e.$image) return;
                e.type = "image", e.state = "loading";
                const t = document.createElement("div");
                t.style.visibility = "hidden";
                const n = document.createElement("img");
                n.addEventListener("load", (t => {
                    t.stopImmediatePropagation(), this.onImageStatusChange(e)
                })), n.addEventListener("error", (() => {
                    this.onImageStatusChange(e)
                })), n.src = e.src, n.alt = "", n.draggable = !1, n.classList.add("fancybox__image"), e.srcset && n.setAttribute("srcset", e.srcset), e.sizes && n.setAttribute("sizes", e.sizes), e.$image = n;
                const i = this.fancybox.option("Image.wrap");
                if (i) {
                    const s = document.createElement("div");
                    s.classList.add("string" == typeof i ? i : "fancybox__image-wrap"), s.appendChild(n), t.appendChild(s), e.$wrap = s
                } else t.appendChild(n);
                e.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(e, t), n.complete || n.error ? this.onImageStatusChange(e) : this.fancybox.showLoading(e)
            }

            onImageStatusChange(e) {
                const t = e.$image;
                t && "loading" === e.state && (t.complete && t.naturalWidth && t.naturalHeight ? (this.fancybox.hideLoading(e), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(e), e.$el.addEventListener("wheel", (t => this.onWheel(e, t)), {passive: !1}), e.$content.addEventListener("click", (t => this.onClick(e, t)), {passive: !1}), this.revealContent(e)) : this.fancybox.setError(e, "{{IMAGE_ERROR}}"))
            }

            initSlidePanzoom(e) {
                e.Panzoom || (e.Panzoom = new en(e.$el, Wt(!0, this.fancybox.option("Image.Panzoom", {}), {
                    viewport: e.$wrap,
                    content: e.$image,
                    width: e._width,
                    height: e._height,
                    wrapInner: !1,
                    textSelection: !0,
                    touch: this.fancybox.option("Image.touch"),
                    panOnlyZoomed: !0,
                    click: !1,
                    wheel: !1
                })), e.Panzoom.on("startAnimation", (() => {
                    this.fancybox.trigger("Image.startAnimation", e)
                })), e.Panzoom.on("endAnimation", (() => {
                    "zoomIn" === e.state && this.fancybox.done(e), this.handleCursor(e), this.fancybox.trigger("Image.endAnimation", e)
                })), e.Panzoom.on("afterUpdate", (() => {
                    this.handleCursor(e), this.fancybox.trigger("Image.afterUpdate", e)
                })))
            }

            revealContent(e) {
                null === this.fancybox.Carousel.prevPage && e.index === this.fancybox.options.startIndex && this.canZoom(e) ? this.zoomIn() : this.fancybox.revealContent(e)
            }

            getZoomInfo(e) {
                const t = e.$thumb.getBoundingClientRect(), n = t.width, i = t.height,
                    s = e.$content.getBoundingClientRect(), a = s.width, o = s.height, r = s.top - t.top,
                    l = s.left - t.left;
                let c = this.fancybox.option("Image.zoomOpacity");
                return "auto" === c && (c = Math.abs(n / i - a / o) > .1), {
                    top: r,
                    left: l,
                    scale: a && n ? n / a : 1,
                    opacity: c
                }
            }

            canZoom(e) {
                const t = this.fancybox, n = t.$container;
                if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
                if (e.Panzoom && !e.Panzoom.content.width) return !1;
                if (!t.option("Image.zoom") || "contain" !== t.option("Image.fit")) return !1;
                const i = e.$thumb;
                if (!i || "loading" === e.state) return !1;
                n.classList.add("fancybox__no-click");
                const s = i.getBoundingClientRect();
                let a;
                if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
                    const e = document.elementFromPoint(s.left + 1, s.top + 1) === i,
                        t = document.elementFromPoint(s.right - 1, s.bottom - 1) === i;
                    a = e && t
                } else a = document.elementFromPoint(s.left + .5 * s.width, s.top + .5 * s.height) === i;
                return n.classList.remove("fancybox__no-click"), a
            }

            zoomIn() {
                const e = this.fancybox, t = e.getSlide(), n = t.Panzoom, {
                    top: i,
                    left: s,
                    scale: a,
                    opacity: o
                } = this.getZoomInfo(t);
                e.trigger("reveal", t), n.panTo({
                    x: -1 * s,
                    y: -1 * i,
                    scale: a,
                    friction: 0,
                    ignoreBounds: !0
                }), t.$content.style.visibility = "", t.state = "zoomIn", !0 === o && n.on("afterTransform", (e => {
                    "zoomIn" !== t.state && "zoomOut" !== t.state || (e.$content.style.opacity = Math.min(1, 1 - (1 - e.content.scale) / (1 - a)))
                })), n.panTo({x: 0, y: 0, scale: 1, friction: this.fancybox.option("Image.zoomFriction")})
            }

            zoomOut() {
                const e = this.fancybox, t = e.getSlide(), n = t.Panzoom;
                if (!n) return;
                t.state = "zoomOut", e.state = "customClosing", t.$caption && (t.$caption.style.visibility = "hidden");
                let i = this.fancybox.option("Image.zoomFriction");
                const s = e => {
                    const {top: s, left: a, scale: o, opacity: r} = this.getZoomInfo(t);
                    e || r || (i *= .82), n.panTo({
                        x: -1 * a,
                        y: -1 * s,
                        scale: o,
                        friction: i,
                        ignoreBounds: !0
                    }), i *= .98
                };
                window.addEventListener("scroll", s), n.once("endAnimation", (() => {
                    window.removeEventListener("scroll", s), e.destroy()
                })), s()
            }

            handleCursor(e) {
                if ("image" !== e.type || !e.$el) return;
                const t = e.Panzoom, n = this.fancybox.option("Image.click", !1, e),
                    i = this.fancybox.option("Image.touch"), s = e.$el.classList,
                    a = this.fancybox.option("Image.canZoomInClass"), o = this.fancybox.option("Image.canZoomOutClass");
                s.remove(o), s.remove(a), t && "toggleZoom" === n ? t && 1 === t.content.scale && t.option("maxScale") - t.content.scale > .01 ? s.add(a) : t.content.scale > 1 && !i && s.add(o) : "close" === n && s.add(o)
            }

            onWheel(e, t) {
                if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", t)) switch (this.fancybox.option("Image.wheel")) {
                    case"zoom":
                        "done" === e.state && e.Panzoom && e.Panzoom.zoomWithWheel(t);
                        break;
                    case"close":
                        this.fancybox.close();
                        break;
                    case"slide":
                        this.fancybox[t.deltaY < 0 ? "prev" : "next"]()
                }
            }

            onClick(e, t) {
                if ("ready" !== this.fancybox.state) return;
                const n = e.Panzoom;
                if (n && (n.dragPosition.midPoint || 0 !== n.dragOffset.x || 0 !== n.dragOffset.y || 1 !== n.dragOffset.scale)) return;
                if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
                const i = n => {
                    switch (n) {
                        case"toggleZoom":
                            t.stopPropagation(), e.Panzoom && e.Panzoom.zoomWithClick(t);
                            break;
                        case"close":
                            this.fancybox.close();
                            break;
                        case"next":
                            t.stopPropagation(), this.fancybox.next()
                    }
                }, s = this.fancybox.option("Image.click"), a = this.fancybox.option("Image.doubleClick");
                a ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, i(a)) : this.clickTimer = setTimeout((() => {
                    this.clickTimer = null, i(s)
                }), 300) : i(s)
            }

            onPageChange(e, t) {
                const n = e.getSlide();
                t.slides.forEach((e => {
                    e.Panzoom && "done" === e.state && e.index !== n.index && e.Panzoom.panTo({
                        x: 0,
                        y: 0,
                        scale: 1,
                        friction: .8
                    })
                }))
            }

            attach() {
                this.fancybox.on(this.events)
            }

            detach() {
                this.fancybox.off(this.events)
            }
        }

        gn.defaults = {
            canZoomInClass: "can-zoom_in",
            canZoomOutClass: "can-zoom_out",
            zoom: !0,
            zoomOpacity: "auto",
            zoomFriction: .82,
            ignoreCoveredThumbnail: !1,
            touch: !0,
            click: "toggleZoom",
            doubleClick: null,
            wheel: "zoom",
            fit: "contain",
            wrap: !1,
            Panzoom: {ratio: 1}
        };

        class vn {
            constructor(e) {
                this.fancybox = e;
                for (const e of ["onChange", "onClosing"]) this[e] = this[e].bind(this);
                this.events = {
                    initCarousel: this.onChange,
                    "Carousel.change": this.onChange,
                    closing: this.onClosing
                }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null
            }

            onChange(e) {
                const t = e.Carousel;
                this.timer && clearTimeout(this.timer);
                const n = null === t.prevPage, i = e.getSlide(), s = new URL(document.URL).hash;
                let a = !1;
                if (i.slug) a = "#" + i.slug; else {
                    const n = i.$trigger && i.$trigger.dataset, s = e.option("slug") || n && n.fancybox;
                    s && s.length && "true" !== s && (a = "#" + s + (t.slides.length > 1 ? "-" + (i.index + 1) : ""))
                }
                n && (this.origHash = s !== a ? s : ""), a && s !== a && (this.timer = setTimeout((() => {
                    try {
                        window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + a), n && (this.hasCreatedHistory = !0)
                    } catch (e) {
                    }
                }), 300))
            }

            onClosing() {
                if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
                    return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
                } catch (e) {
                }
            }

            attach(e) {
                e.on(this.events)
            }

            detach(e) {
                e.off(this.events)
            }

            static startFromUrl() {
                const e = vn.Fancybox;
                if (!e || e.getInstance() || !1 === e.defaults.Hash) return;
                const {hash: t, slug: n, index: i} = vn.getParsedURL();
                if (!n) return;
                let s = document.querySelector(`[data-slug="${t}"]`);
                if (s && s.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })), e.getInstance()) return;
                const a = document.querySelectorAll(`[data-fancybox="${n}"]`);
                a.length && (null === i && 1 === a.length ? s = a[0] : i && (s = a[i - 1]), s && s.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })))
            }

            static onHashChange() {
                const {slug: e, index: t} = vn.getParsedURL(), n = vn.Fancybox, i = n && n.getInstance();
                if (i && i.plugins.Hash) {
                    if (e) {
                        const n = i.Carousel;
                        if (e === i.option("slug")) return n.slideTo(t - 1);
                        for (let t of n.slides) if (t.slug && t.slug === e) return n.slideTo(t.index);
                        const s = i.getSlide(), a = s.$trigger && s.$trigger.dataset;
                        if (a && a.fancybox === e) return n.slideTo(t - 1)
                    }
                    i.plugins.Hash.hasSilentClose = !0, i.close()
                }
                vn.startFromUrl()
            }

            static create(e) {
                function t() {
                    window.addEventListener("hashchange", vn.onHashChange, !1), vn.startFromUrl()
                }

                vn.Fancybox = e, ln && window.requestAnimationFrame((() => {
                    /complete|interactive|loaded/.test(document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t)
                }))
            }

            static destroy() {
                window.removeEventListener("hashchange", vn.onHashChange, !1)
            }

            static getParsedURL() {
                const e = window.location.hash.substr(1), t = e.split("-"),
                    n = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || null;
                return {hash: e, slug: t.join("-"), index: n}
            }
        }

        const yn = {
            pageXOffset: 0,
            pageYOffset: 0,
            element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
            activate(e) {
                yn.pageXOffset = window.pageXOffset, yn.pageYOffset = window.pageYOffset, e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            },
            deactivate() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }
        };

        class bn {
            constructor(e) {
                this.fancybox = e, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
            }

            isActive() {
                return this.active
            }

            setTimer() {
                if (!this.active || this.timer) return;
                const e = this.fancybox.option("slideshow.delay", 3e3);
                this.timer = setTimeout((() => {
                    this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {friction: 0})
                }), e);
                let t = this.$progress;
                t || (t = document.createElement("div"), t.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel), this.$progress = t, t.offsetHeight), t.style.transitionDuration = `${e}ms`, t.style.transform = "scaleX(1)"
            }

            clearTimer() {
                clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight)
            }

            activate() {
                this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1))
            }

            handleVisibilityChange() {
                this.deactivate()
            }

            deactivate() {
                this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1)
            }

            toggle() {
                this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()
            }
        }

        const wn = {
            display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"], autoEnable: !0, items: {
                counter: {
                    position: "left",
                    type: "div",
                    class: "fancybox__counter",
                    html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
                    attr: {tabindex: -1}
                },
                prev: {
                    type: "button",
                    class: "fancybox__button--prev",
                    label: "PREV",
                    html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
                    attr: {"data-fancybox-prev": ""}
                },
                next: {
                    type: "button",
                    class: "fancybox__button--next",
                    label: "NEXT",
                    html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
                    attr: {"data-fancybox-next": ""}
                },
                fullscreen: {
                    type: "button",
                    class: "fancybox__button--fullscreen",
                    label: "TOGGLE_FULLSCREEN",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
                    click: function (e) {
                        e.preventDefault(), yn.element() ? yn.deactivate() : yn.activate(this.fancybox.$container)
                    }
                },
                slideshow: {
                    type: "button",
                    class: "fancybox__button--slideshow",
                    label: "TOGGLE_SLIDESHOW",
                    html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
                    click: function (e) {
                        e.preventDefault(), this.Slideshow.toggle()
                    }
                },
                zoom: {
                    type: "button",
                    class: "fancybox__button--zoom",
                    label: "TOGGLE_ZOOM",
                    html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
                    click: function (e) {
                        e.preventDefault();
                        const t = this.fancybox.getSlide().Panzoom;
                        t && t.toggleZoom()
                    }
                },
                download: {
                    type: "link",
                    label: "DOWNLOAD",
                    class: "fancybox__button--download",
                    html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
                    click: function (e) {
                        e.stopPropagation()
                    }
                },
                thumbs: {
                    type: "button",
                    label: "TOGGLE_THUMBS",
                    class: "fancybox__button--thumbs",
                    html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
                    click: function (e) {
                        e.stopPropagation();
                        const t = this.fancybox.plugins.Thumbs;
                        t && t.toggle()
                    }
                },
                close: {
                    type: "button",
                    label: "CLOSE",
                    class: "fancybox__button--close",
                    html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
                    attr: {"data-fancybox-close": "", tabindex: 0}
                }
            }
        };

        class xn {
            constructor(e) {
                this.fancybox = e, this.$container = null, this.state = "init";
                for (const e of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]) this[e] = this[e].bind(this);
                this.events = {
                    init: this.onInit,
                    prepare: this.onPrepare,
                    done: this.onDone,
                    keydown: this.onKeydown,
                    closing: this.onClosing,
                    "Carousel.change": this.onChange,
                    "Carousel.settle": this.onSettle,
                    "Carousel.Panzoom.touchStart": () => this.onRefresh(),
                    "Image.startAnimation": (e, t) => this.onRefresh(t),
                    "Image.afterUpdate": (e, t) => this.onRefresh(t)
                }
            }

            onInit() {
                if (this.fancybox.option("Toolbar.autoEnable")) {
                    let e = !1;
                    for (const t of this.fancybox.items) if ("image" === t.type) {
                        e = !0;
                        break
                    }
                    if (!e) return void (this.state = "disabled")
                }
                for (const e of this.fancybox.option("Toolbar.display")) if ("close" === (Yt(e) ? e.id : e)) {
                    this.fancybox.options.closeButton = !1;
                    break
                }
            }

            onPrepare() {
                const e = this.fancybox;
                if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new bn(e), !e.Carousel.prevPage && (e.option("slideshow.autoStart") && this.Slideshow.activate(), e.option("fullscreen.autoStart") && !yn.element()))) try {
                    yn.activate(e.$container)
                } catch (e) {
                }
            }

            onFsChange() {
                window.scrollTo(yn.pageXOffset, yn.pageYOffset)
            }

            onSettle() {
                const e = this.fancybox, t = this.Slideshow;
                t && t.isActive() && (e.getSlide().index !== e.Carousel.slides.length - 1 || e.option("infinite") ? "done" === e.getSlide().state && t.setTimer() : t.deactivate())
            }

            onChange() {
                this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()
            }

            onDone(e, t) {
                const n = this.Slideshow;
                t.index === e.getSlide().index && (this.update(), n && n.isActive() && (e.option("infinite") || t.index !== e.Carousel.slides.length - 1 ? n.setTimer() : n.deactivate()))
            }

            onRefresh(e) {
                e && e.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || e && "done" !== e.state || this.Slideshow.deactivate())
            }

            onKeydown(e, t, n) {
                " " === t && this.Slideshow && (this.Slideshow.toggle(), n.preventDefault())
            }

            onClosing() {
                this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange)
            }

            createElement(e) {
                let t;
                "div" === e.type ? t = document.createElement("div") : (t = document.createElement("link" === e.type ? "a" : "button"), t.classList.add("carousel__button")), t.innerHTML = e.html, t.setAttribute("tabindex", e.tabindex || 0), e.class && t.classList.add(...e.class.split(" "));
                for (const n in e.attr) t.setAttribute(n, e.attr[n]);
                e.label && t.setAttribute("title", this.fancybox.localize(`{{${e.label}}}`)), e.click && t.addEventListener("click", e.click.bind(this)), "prev" === e.id && t.setAttribute("data-fancybox-prev", ""), "next" === e.id && t.setAttribute("data-fancybox-next", "");
                const n = t.querySelector("svg");
                return n && (n.setAttribute("role", "img"), n.setAttribute("tabindex", "-1"), n.setAttribute("xmlns", "http://www.w3.org/2000/svg")), t
            }

            build() {
                this.cleanup();
                const e = this.fancybox.option("Toolbar.items"),
                    t = [{position: "left", items: []}, {position: "center", items: []}, {
                        position: "right",
                        items: []
                    }], n = this.fancybox.plugins.Thumbs;
                for (const i of this.fancybox.option("Toolbar.display")) {
                    let s, a;
                    if (Yt(i) ? (s = i.id, a = Wt({}, e[s], i)) : (s = i, a = e[s]), ["counter", "next", "prev", "slideshow"].includes(s) && this.fancybox.items.length < 2) continue;
                    if ("fullscreen" === s) {
                        if (!document.fullscreenEnabled || window.fullScreen) continue;
                        document.addEventListener("fullscreenchange", this.onFsChange)
                    }
                    if ("thumbs" === s && (!n || "disabled" === n.state)) continue;
                    if (!a) continue;
                    let o = a.position || "right", r = t.find((e => e.position === o));
                    r && r.items.push(a)
                }
                const i = document.createElement("div");
                i.classList.add("fancybox__toolbar");
                for (const e of t) if (e.items.length) {
                    const t = document.createElement("div");
                    t.classList.add("fancybox__toolbar__items"), t.classList.add(`fancybox__toolbar__items--${e.position}`);
                    for (const n of e.items) t.appendChild(this.createElement(n));
                    i.appendChild(t)
                }
                this.fancybox.$carousel.parentNode.insertBefore(i, this.fancybox.$carousel), this.$container = i
            }

            update() {
                const e = this.fancybox.getSlide(), t = e.index, n = this.fancybox.items.length,
                    i = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src);
                for (const e of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"), e.setAttribute("href", i), e.setAttribute("download", i), e.setAttribute("target", "_blank")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", -1), e.removeAttribute("href"), e.removeAttribute("download"));
                const s = e.Panzoom, a = s && s.option("maxScale") > s.option("baseScale");
                for (const e of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) a ? e.removeAttribute("disabled") : e.setAttribute("disabled", "");
                for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) t.innerHTML = e.index + 1;
                for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) e.innerHTML = n;
                if (!this.fancybox.option("infinite")) {
                    for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) 0 === t ? e.setAttribute("disabled", "") : e.removeAttribute("disabled");
                    for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) t === n - 1 ? e.setAttribute("disabled", "") : e.removeAttribute("disabled")
                }
            }

            cleanup() {
                this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null
            }

            attach() {
                this.fancybox.on(this.events)
            }

            detach() {
                this.fancybox.off(this.events), this.cleanup()
            }
        }

        xn.defaults = wn;
        const Cn = {
            ScrollLock: class {
                constructor(e) {
                    this.fancybox = e, this.viewport = null, this.pendingUpdate = null;
                    for (const e of ["onReady", "onResize", "onTouchstart", "onTouchmove"]) this[e] = this[e].bind(this)
                }

                onReady() {
                    const e = window.visualViewport;
                    e && (this.viewport = e, this.startY = 0, e.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {passive: !1}), window.addEventListener("touchmove", this.onTouchmove, {passive: !1}), window.addEventListener("wheel", this.onWheel, {passive: !1})
                }

                onResize() {
                    this.updateViewport()
                }

                updateViewport() {
                    const e = this.fancybox, t = this.viewport, n = t.scale || 1, i = e.$container;
                    if (!i) return;
                    let s = "", a = "", o = "";
                    n - 1 > .1 && (s = t.width * n + "px", a = t.height * n + "px", o = `translate3d(${t.offsetLeft}px, ${t.offsetTop}px, 0) scale(${1 / n})`), i.style.width = s, i.style.height = a, i.style.transform = o
                }

                onTouchstart(e) {
                    this.startY = e.touches ? e.touches[0].screenY : e.screenY
                }

                onTouchmove(e) {
                    const t = this.startY, n = window.innerWidth / window.document.documentElement.clientWidth;
                    if (!e.cancelable) return;
                    if (e.touches.length > 1 || 1 !== n) return;
                    const i = Vt(e.composedPath()[0]);
                    if (!i) return void e.preventDefault();
                    const s = window.getComputedStyle(i), a = parseInt(s.getPropertyValue("height"), 10),
                        o = e.touches ? e.touches[0].screenY : e.screenY, r = t <= o && 0 === i.scrollTop,
                        l = t >= o && i.scrollHeight - i.scrollTop === a;
                    (r || l) && e.preventDefault()
                }

                onWheel(e) {
                    Vt(e.composedPath()[0]) || e.preventDefault()
                }

                cleanup() {
                    this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
                    const e = this.viewport;
                    e && (e.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {passive: !1})
                }

                attach() {
                    this.fancybox.on("initLayout", this.onReady)
                }

                detach() {
                    this.fancybox.off("initLayout", this.onReady), this.cleanup()
                }
            }, Thumbs: hn, Html: mn, Toolbar: xn, Image: gn, Hash: vn
        }, En = {
            startIndex: 0,
            preload: 1,
            infinite: !0,
            showClass: "fancybox-zoomInUp",
            hideClass: "fancybox-fadeOut",
            animated: !0,
            hideScrollbar: !0,
            parentEl: null,
            mainClass: null,
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            click: "close",
            closeButton: "inside",
            dragToClose: !0,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "next",
                ArrowDown: "prev",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            template: {
                closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
                spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
                main: null
            },
            l10n: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }
        }, kn = new Map;
        let Sn = 0;

        class Mn extends Qt {
            constructor(e, t = {}) {
                e = e.map((e => (e.width && (e._width = e.width), e.height && (e._height = e.height), e))), super(Wt(!0, {}, En, t)), this.bindHandlers(), this.state = "init", this.setItems(e), this.attachPlugins(Mn.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), kn.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus()
            }

            option(e, ...t) {
                const n = this.getSlide();
                let i = n ? n[e] : void 0;
                return void 0 !== i ? ("function" == typeof i && (i = i.call(this, this, ...t)), i) : super.option(e, ...t)
            }

            bindHandlers() {
                for (const e of ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]) this[e] = this[e].bind(this)
            }

            attachEvents() {
                document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick)
            }

            detachEvents() {
                document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick)
            }

            initLayout() {
                this.$root = this.option("parentEl") || document.body;
                let e = this.option("template.main");
                e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({
                    class: "fancybox__container",
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": this.localize("{{MODAL}}")
                }).forEach((e => this.$container.setAttribute(...e))), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++Sn, this.$container.setAttribute("id", "fancybox-" + this.id));
                const t = this.option("mainClass");
                return t && this.$container.classList.add(...t.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this
            }

            setItems(e) {
                const t = [];
                for (const n of e) {
                    const e = n.$trigger;
                    if (e) {
                        const t = e.dataset || {};
                        n.src = t.src || e.getAttribute("href") || n.src, n.type = t.type || n.type, !n.src && e instanceof HTMLImageElement && (n.src = e.currentSrc || n.$trigger.src)
                    }
                    let i = n.$thumb;
                    if (!i) {
                        let e = n.$trigger && n.$trigger.origTarget;
                        e && (i = e instanceof HTMLImageElement ? e : e.querySelector("img:not([aria-hidden])")), !i && n.$trigger && (i = n.$trigger instanceof HTMLImageElement ? n.$trigger : n.$trigger.querySelector("img:not([aria-hidden])"))
                    }
                    n.$thumb = i || null;
                    let s = n.thumb;
                    !s && i && (s = i.currentSrc || i.src, !s && i.dataset && (s = i.dataset.lazySrc || i.dataset.src)), s || "image" !== n.type || (s = n.src), n.thumb = s || null, n.caption = n.caption || "", t.push(n)
                }
                this.items = t
            }

            initCarousel() {
                return this.Carousel = new rn(this.$carousel, Wt(!0, {}, {
                    prefix: "",
                    classNames: {viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide"},
                    textSelection: !0,
                    preload: this.option("preload"),
                    friction: .88,
                    slides: this.items,
                    initialPage: this.options.startIndex,
                    slidesPerPage: 1,
                    infiniteX: this.option("infinite"),
                    infiniteY: !0,
                    l10n: this.option("l10n"),
                    Dots: !1,
                    Navigation: {
                        classNames: {
                            main: "fancybox__nav",
                            button: "carousel__button",
                            next: "is-next",
                            prev: "is-prev"
                        }
                    },
                    Panzoom: {
                        textSelection: !0,
                        panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"),
                        lockAxis: () => {
                            if (this.Carousel) {
                                let e = "x";
                                return this.option("dragToClose") && (e += "y"), e
                            }
                        }
                    },
                    on: {
                        "*": (e, ...t) => this.trigger(`Carousel.${e}`, ...t),
                        init: e => this.Carousel = e,
                        createSlide: this.onCreateSlide,
                        settle: this.onSettle
                    }
                }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
                    touchMove: this.onTouchMove,
                    afterTransform: this.onTransform,
                    touchEnd: this.onTouchEnd
                }), this.trigger("initCarousel"), this
            }

            onCreateSlide(e, t) {
                let n = t.caption || "";
                if ("function" == typeof this.options.caption && (n = this.options.caption.call(this, this, this.Carousel, t)), "string" == typeof n && n.length) {
                    const e = document.createElement("div"), i = `fancybox__caption_${this.id}_${t.index}`;
                    e.className = "fancybox__caption", e.innerHTML = n, e.setAttribute("id", i), t.$caption = t.$el.appendChild(e), t.$el.classList.add("has-caption"), t.$el.setAttribute("aria-labelledby", i)
                }
            }

            onSettle() {
                this.option("autoFocus") && this.focus()
            }

            onFocus(e) {
                this.isTopmost() && this.focus(e)
            }

            onClick(e) {
                if (e.defaultPrevented) return;
                let t = e.composedPath()[0];
                if (t.matches("[data-fancybox-close]")) return e.preventDefault(), void Mn.close(!1, e);
                if (t.matches("[data-fancybox-next]")) return e.preventDefault(), void Mn.next();
                if (t.matches("[data-fancybox-prev]")) return e.preventDefault(), void Mn.prev();
                const n = document.activeElement;
                if (n) {
                    if (n.closest("[contenteditable]")) return;
                    t.matches(un) || n.blur()
                }
                if (!t.closest(".fancybox__content") && !getSelection().toString().length && !1 !== this.trigger("click", e)) switch (this.option("click")) {
                    case"close":
                        this.close();
                        break;
                    case"next":
                        this.next()
                }
            }

            onTouchMove() {
                const e = this.getSlide().Panzoom;
                return !e || 1 === e.content.scale
            }

            onTouchEnd(e) {
                const t = e.dragOffset.y;
                Math.abs(t) >= 150 || Math.abs(t) >= 35 && e.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (e.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === e.lockAxis && e.panTo({y: 0})
            }

            onTransform(e) {
                if (this.$backdrop) {
                    const t = Math.abs(e.content.y),
                        n = t < 1 ? "" : Math.max(.33, Math.min(1, 1 - t / e.content.fitHeight * 1.5));
                    this.$container.style.setProperty("--fancybox-ts", n ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", n)
                }
            }

            onMousedown() {
                "ready" === this.state && document.body.classList.add("is-using-mouse")
            }

            onKeydown(e) {
                if (!this.isTopmost()) return;
                document.body.classList.remove("is-using-mouse");
                const t = e.key, n = this.option("keyboard");
                if (!n || e.ctrlKey || e.altKey || e.shiftKey) return;
                const i = e.composedPath()[0], s = document.activeElement && document.activeElement.classList,
                    a = s && s.contains("carousel__button");
                if ("Escape" !== t && !a && (e.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.nodeName))) return;
                if (!1 === this.trigger("keydown", t, e)) return;
                const o = n[t];
                "function" == typeof this[o] && this[o]()
            }

            getSlide() {
                const e = this.Carousel;
                if (!e) return null;
                const t = null === e.page ? e.option("initialPage") : e.page, n = e.pages || [];
                return n.length && n[t] ? n[t].slides[0] : null
            }

            focus(e) {
                if (Mn.ignoreFocusChange) return;
                if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
                const t = this.$container, n = this.getSlide(), i = "done" === n.state ? n.$el : null;
                if (i && i.contains(document.activeElement)) return;
                e && e.preventDefault(), Mn.ignoreFocusChange = !0;
                const s = Array.from(t.querySelectorAll(un));
                let a, o = [];
                for (let e of s) {
                    const t = e.offsetParent, n = i && i.contains(e), s = !this.Carousel.$viewport.contains(e);
                    t && (n || s) ? (o.push(e), void 0 !== e.dataset.origTabindex && (e.tabIndex = e.dataset.origTabindex, e.removeAttribute("data-orig-tabindex")), (e.hasAttribute("autoFocus") || !a && n && !e.classList.contains("carousel__button")) && (a = e)) : (e.dataset.origTabindex = void 0 === e.dataset.origTabindex ? e.getAttribute("tabindex") : e.dataset.origTabindex, e.tabIndex = -1)
                }
                e ? o.indexOf(e.target) > -1 ? this.lastFocus = e.target : this.lastFocus === t ? dn(o[o.length - 1]) : dn(t) : this.option("autoFocus") && a ? dn(a) : o.indexOf(document.activeElement) < 0 && dn(t), this.lastFocus = document.activeElement, Mn.ignoreFocusChange = !1
            }

            hideScrollbar() {
                if (!ln) return;
                const e = window.innerWidth - document.documentElement.getBoundingClientRect().width,
                    t = "fancybox-style-noscroll";
                let n = document.getElementById(t);
                n || e > 0 && (n = document.createElement("style"), n.id = t, n.type = "text/css", n.innerHTML = `.compensate-for-scrollbar {padding-right: ${e}px;}`, document.getElementsByTagName("head")[0].appendChild(n), document.body.classList.add("compensate-for-scrollbar"))
            }

            revealScrollbar() {
                document.body.classList.remove("compensate-for-scrollbar");
                const e = document.getElementById("fancybox-style-noscroll");
                e && e.remove()
            }

            clearContent(e) {
                this.Carousel.trigger("removeSlide", e), e.$content && (e.$content.remove(), e.$content = null), e.$closeButton && (e.$closeButton.remove(), e.$closeButton = null), e._className && e.$el.classList.remove(e._className)
            }

            setContent(e, t, n = {}) {
                let i;
                const s = e.$el;
                if (t instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(t.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div"), i.appendChild(t)) : i = t; else {
                    const e = document.createRange().createContextualFragment(t);
                    i = document.createElement("div"), i.appendChild(e)
                }
                if (e.filter && !e.error && (i = i.querySelector(e.filter)), i instanceof Element) return e._className = `has-${n.suffix || e.type || "unknown"}`, s.classList.add(e._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = e.display || this.option("defaultDisplay") || "flex"), e.id && i.setAttribute("id", e.id), e.$content = i, s.prepend(i), this.manageCloseButton(e), "loading" !== e.state && this.revealContent(e), i;
                this.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }

            manageCloseButton(e) {
                const t = void 0 === e.closeButton ? this.option("closeButton") : e.closeButton;
                if (!t || "top" === t && this.$closeButton) return;
                const n = document.createElement("button");
                n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", (e => this.close(e))), "inside" === t ? (e.$closeButton && e.$closeButton.remove(), e.$closeButton = e.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)
            }

            revealContent(e) {
                this.trigger("reveal", e), e.$content.style.visibility = "";
                let t = !1;
                e.error || "loading" === e.state || null !== this.Carousel.prevPage || e.index !== this.options.startIndex || (t = void 0 === e.showClass ? this.option("showClass") : e.showClass), t ? (e.state = "animating", this.animateCSS(e.$content, t, (() => {
                    this.done(e)
                }))) : this.done(e)
            }

            animateCSS(e, t, n) {
                if (e && e.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !0,
                    cancelable: !0
                })), !e || !t) return void ("function" == typeof n && n());
                const i = function (s) {
                    s.currentTarget === this && (e.removeEventListener("animationend", i), n && n(), e.classList.remove(t))
                };
                e.addEventListener("animationend", i), e.classList.add(t)
            }

            done(e) {
                e.state = "done", this.trigger("done", e);
                const t = this.getSlide();
                t && e.index === t.index && this.option("autoFocus") && this.focus()
            }

            setError(e, t) {
                e.error = t, this.hideLoading(e), this.clearContent(e);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>"), this.setContent(e, n, {suffix: "error"})
            }

            showLoading(e) {
                e.state = "loading", e.$el.classList.add("is-loading");
                let t = e.$el.querySelector(".fancybox__spinner");
                t || (t = document.createElement("div"), t.classList.add("fancybox__spinner"), t.innerHTML = this.option("template.spinner"), t.addEventListener("click", (() => {
                    this.Carousel.Panzoom.velocity || this.close()
                })), e.$el.prepend(t))
            }

            hideLoading(e) {
                const t = e.$el && e.$el.querySelector(".fancybox__spinner");
                t && (t.remove(), e.$el.classList.remove("is-loading")), "loading" === e.state && (this.trigger("load", e), e.state = "ready")
            }

            next() {
                const e = this.Carousel;
                e && e.pages.length > 1 && e.slideNext()
            }

            prev() {
                const e = this.Carousel;
                e && e.pages.length > 1 && e.slidePrev()
            }

            jumpTo(...e) {
                this.Carousel && this.Carousel.slideTo(...e)
            }

            isClosing() {
                return ["closing", "customClosing", "destroy"].includes(this.state)
            }

            isTopmost() {
                return Mn.getInstance().id == this.id
            }

            close(e) {
                if (e && e.preventDefault(), this.isClosing()) return;
                if (!1 === this.trigger("shouldClose", e)) return;
                if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", e), "destroy" === this.state) return;
                this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
                const t = this.getSlide();
                if (this.Carousel.slides.forEach((e => {
                    e.$content && e.index !== t.index && this.Carousel.trigger("removeSlide", e)
                })), "closing" === this.state) {
                    const e = void 0 === t.hideClass ? this.option("hideClass") : t.hideClass;
                    this.animateCSS(t.$content, e, (() => {
                        this.destroy()
                    }), !0)
                }
            }

            destroy() {
                if ("destroy" === this.state) return;
                this.state = "destroy", this.trigger("destroy");
                const e = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;
                this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, e && dn(e), kn.delete(this.id);
                const t = Mn.getInstance();
                t ? t.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar())
            }

            static show(e, t = {}) {
                return new Mn(e, t)
            }

            static fromEvent(e, t = {}) {
                if (e.defaultPrevented) return;
                if (e.button && 0 !== e.button) return;
                if (e.ctrlKey || e.metaKey || e.shiftKey) return;
                const n = e.composedPath()[0];
                let i, s, a, o = n;
                if ((o.matches("[data-fancybox-trigger]") || (o = o.closest("[data-fancybox-trigger]"))) && (t.triggerTarget = o, i = o && o.dataset && o.dataset.fancyboxTrigger), i) {
                    const e = document.querySelectorAll(`[data-fancybox="${i}"]`),
                        t = parseInt(o.dataset.fancyboxIndex, 10) || 0;
                    o = e.length ? e[t] : o
                }
                Array.from(Mn.openers.keys()).reverse().some((t => {
                    a = o || n;
                    let i = !1;
                    try {
                        a instanceof Element && ("string" == typeof t || t instanceof String) && (i = a.matches(t) || (a = a.closest(t)))
                    } catch (e) {
                    }
                    return !!i && (e.preventDefault(), s = t, !0)
                }));
                let r = !1;
                if (s) {
                    t.event = e, t.target = a, a.origTarget = n, r = Mn.fromOpener(s, t);
                    const i = Mn.getInstance();
                    i && "ready" === i.state && e.detail && document.body.classList.add("is-using-mouse")
                }
                return r
            }

            static fromOpener(e, t = {}) {
                let n = [], i = t.startIndex || 0, s = t.target || null;
                const a = void 0 !== (t = Wt({}, t, Mn.openers.get(e))).groupAll && t.groupAll,
                    o = void 0 === t.groupAttr ? "data-fancybox" : t.groupAttr,
                    r = o && s ? s.getAttribute(`${o}`) : "";
                if (!s || r || a) {
                    const i = t.root || (s ? s.getRootNode() : document.body);
                    n = [].slice.call(i.querySelectorAll(e))
                }
                if (s && !a && (n = r ? n.filter((e => e.getAttribute(`${o}`) === r)) : [s]), !n.length) return !1;
                const l = Mn.getInstance();
                return !(l && n.indexOf(l.options.$trigger) > -1) && (i = s ? n.indexOf(s) : i, n = n.map((function (e) {
                    const t = ["false", "0", "no", "null", "undefined"], n = ["true", "1", "yes"],
                        i = Object.assign({}, e.dataset), s = {};
                    for (let [e, a] of Object.entries(i)) if ("fancybox" !== e) if ("width" === e || "height" === e) s[`_${e}`] = a; else if ("string" == typeof a || a instanceof String) if (t.indexOf(a) > -1) s[e] = !1; else if (n.indexOf(s[e]) > -1) s[e] = !0; else try {
                        s[e] = JSON.parse(a)
                    } catch (t) {
                        s[e] = a
                    } else s[e] = a;
                    return e instanceof Element && (s.$trigger = e), s
                })), new Mn(n, Wt({}, t, {startIndex: i, $trigger: s})))
            }

            static bind(e, t = {}) {
                function n() {
                    document.body.addEventListener("click", Mn.fromEvent, !1)
                }

                ln && (Mn.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)), Mn.openers.set(e, t))
            }

            static unbind(e) {
                Mn.openers.delete(e), Mn.openers.size || Mn.destroy()
            }

            static destroy() {
                let e;
                for (; e = Mn.getInstance();) e.destroy();
                Mn.openers = new Map, document.body.removeEventListener("click", Mn.fromEvent, !1)
            }

            static getInstance(e) {
                return e ? kn.get(e) : Array.from(kn.values()).reverse().find((e => !e.isClosing() && e)) || null
            }

            static close(e = !0, t) {
                if (e) for (const e of kn.values()) e.close(t); else {
                    const e = Mn.getInstance();
                    e && e.close(t)
                }
            }

            static next() {
                const e = Mn.getInstance();
                e && e.next()
            }

            static prev() {
                const e = Mn.getInstance();
                e && e.prev()
            }
        }

        Mn.version = "4.0.31", Mn.defaults = En, Mn.openers = new Map, Mn.Plugins = Cn, Mn.bind("[data-fancybox]");
        for (const [e, t] of Object.entries(Mn.Plugins || {})) "function" == typeof t.create && t.create(Mn);
        document.addEventListener("DOMContentLoaded", (() => {
            Mn.bind("[data-fancybox='gallery']", {
                infinite: !0,
                slideshow: {autoStart: !0, playSpeed: 3e3},
                on: {
                    done: () => {
                        document.querySelector("audio").play()
                    }, closing: () => {
                        document.querySelector("audio").pause(), document.querySelector("audio").currentTime = 0
                    }
                }
            }),
                Mn.bind("[data-fancybox='gallery1']", {
                    infinite: !0,
                    slideshow: {autoStart: !0, playSpeed: 3e3},
                    on: {
                        done: () => {
                            document.querySelector(".audio1").play()
                        }, closing: () => {
                            document.querySelector(".audio1").pause(), document.querySelector(".audio1").currentTime = 0
                        }
                    }
                }),
                Mn.bind("[data-fancybox='gallery2']", {
                    infinite: !0,
                    slideshow: {autoStart: !0, playSpeed: 3e3},
                    on: {
                        done: () => {
                            document.querySelector(".audio2").play()
                        }, closing: () => {
                            document.querySelector(".audio2").pause(), document.querySelector(".audio2").currentTime = 0
                        }
                    }
                }),
                Mn.bind("[data-fancybox='gallery3']", {
                    infinite: !0,
                    slideshow: {autoStart: !0, playSpeed: 3e3},
                    on: {
                        done: () => {
                            document.querySelector(".audio3").play()
                        }, closing: () => {
                            document.querySelector(".audio3").pause(), document.querySelector(".audio3").currentTime = 0
                        }
                    }
                }),Mn.bind("[data-fancybox='items']", {infinite: !0, slideshow: {autoStart: !0, playSpeed: 3e3}});
            const e = document.querySelectorAll(".datePickr"), t = document.querySelectorAll(".timePickr");
            if (e[0] && e.forEach((e => {
                I(e, {locale: "ru", monthSelectorType: "static", dateFormat: "d-m-Y", minDate: "today"})
            })), t[0] && t.forEach((e => {
                I(e, {
                    enableTime: !0,
                    noCalendar: !0,
                    dateFormat: "H:i",
                    time_24hr: !0,
                    minTime: "09:00",
                    maxTime: "01:00"
                })
            })), document.querySelector(".modal-date") && I(document.querySelector(".modal-date"), {
                locale: "ru",
                monthSelectorType: "static",
                dateFormat: "d-m-Y",
                minDate: "today",
                inline: !0,
                onChange: function (e, t, n) {
                    document.querySelector(".dataDate").textContent = n.selectedDateElem.attributes[1].nodeValue
                }
            }), document.querySelector(".calendarOpen")) {
                const e = document.querySelector(".calendarOpen"), t = document.querySelector(".dateCalendarEl"),
                    n = document.querySelector(".calendarOpen input");
                I(document.querySelector(".dateCalendar"), {
                    locale: "ru",
                    monthSelectorType: "static",
                    dateFormat: "d-m-Y",
                    inline: !0,
                    onChange: function (e, i, s) {
                        n.value = e[0].toLocaleDateString(), t.classList.remove("active")
                    }
                }), e.addEventListener("click", (() => {
                    t.classList.add("active")
                })), document.addEventListener("click", (e => {
                    (!e.target.closest(".calendarOpen") && !e.target.closest(".dateCalendarEl") || e.target.closest(".dateClose")) && t.classList.remove("active")
                }))
            }
            if (document.querySelector(".calendarOpen2")) {
                const e = document.querySelector(".calendarOpen2"), t = document.querySelector(".dateCalendarEl2"),
                    n = document.querySelector(".calendarOpen2 input");
                I(document.querySelector(".dateCalendar2"), {
                    locale: "ru",
                    monthSelectorType: "static",
                    dateFormat: "d-m-Y",
                    inline: !0,
                    onChange: function (e, i, s) {
                        n.value = e[0].toLocaleDateString(), t.classList.remove("active")
                    }
                }), e.addEventListener("click", (() => {
                    t.classList.add("active")
                })), document.addEventListener("click", (e => {
                    (!e.target.closest(".calendarOpen2") && !e.target.closest(".dateCalendarEl2") || e.target.closest(".dateClose")) && t.classList.remove("active")
                }))
            }
            new De(".reviewsSlider", {
                effect: "fade",
                fadeEffect: {crossFade: !0},
                slidesPerView: 1,
                loop: !0,
                speed: 1e3,
                pagination: {el: ".swiper-pagination", type: "fraction"},
                navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
            }), new De(".aboutSlider", {
                speed: 500,
                spaceBetween: 25,
                navigation: {prevEl: ".aboutWrap .swiper-button-prev", nextEl: ".aboutWrap .swiper-button-next"},
                autoplay: {delay: 3e3, disableOnInteraction: !1},
                watchSlidesProgress: !0,
                breakpoints: {375: {slidesPerView: 1}, 768: {slidesPerView: 3}, 992: {slidesPerView: 4}}
            }), new De(".aboutSlider1", {
                speed: 500,
                spaceBetween: 25,
                navigation: {prevEl: ".aboutWrap1 .swiper-button-prev", nextEl: ".aboutWrap1 .swiper-button-next"},
                breakpoints: {375: {slidesPerView: 1}, 768: {slidesPerView: 3}, 992: {slidesPerView: 4}}
            }), new De(".aboutSlider2", {
                speed: 500,
                spaceBetween: 25,
                navigation: {prevEl: ".aboutWrap2 .swiper-button-prev", nextEl: ".aboutWrap2 .swiper-button-next"},
                breakpoints: {375: {slidesPerView: 1}, 768: {slidesPerView: 3}, 992: {slidesPerView: 4}}
            }), new De(".aboutSlider3", {
                speed: 500,
                spaceBetween: 25,
                navigation: {prevEl: ".aboutWrap3 .swiper-button-prev", nextEl: ".aboutWrap3 .swiper-button-next"},
                breakpoints: {375: {slidesPerView: 1}, 768: {slidesPerView: 3}, 992: {slidesPerView: 4}}
            });
            const n = new De(".galleryThumbs", {
                spaceBetween: 30,
                slidesPerView: 6,
                freeMode: !0,
                watchSlidesProgress: !0
            });
            new De(".galleryTop", {
                spaceBetween: 10,
                navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
                pagination: {el: ".swiper-pagination", type: "fraction"},
                thumbs: {swiper: n}
            });
            const i = new De(".galleryThumbs2", {
                spaceBetween: 30,
                slidesPerView: 4,
                freeMode: !0,
                watchSlidesProgress: !0
            });
            new De(".galleryTop2", {
                spaceBetween: 10,
                navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
                pagination: {el: ".swiper-pagination", type: "fraction"},
                thumbs: {swiper: i}
            }), document.querySelector(".cvv-mask") && mt(document.querySelector(".cvv-mask"), {mask: "000"}), document.querySelector(".my-mask") && mt(document.querySelector(".my-mask"), {mask: "00/00"}), document.querySelector(".card-mask") && mt(document.querySelector(".card-mask"), {mask: "0000 0000 0000 0000"})
        }))
    })(), (() => {
        "use strict";
        (function () {
            var e = document.createElement("style");
            e.innerHTML = "@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}";
            var t = document.getElementsByTagName("head")[0];

            function n(e, t, n) {
                e.classList[n ? "add" : "remove"](t)
            }

            function i(e, t, n) {
                n = "" + n, e["_s_" + t] !== n && (e.style.setProperty(t, n), e["_s_" + t] = n)
            }

            t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e), Object.assign || (Object.assign = function (e, t) {
                for (var n, i = Object.keys(t), s = 0; s < i.length; s++) e[n = i[s]] = t[n];
                return e
            }), Element.prototype.closest || (Element.prototype.closest = function (e) {
                e = e.substring(1);
                for (var t = this; t && 1 === t.nodeType;) {
                    if (t.classList.contains(e)) return t;
                    t = t.parentElement
                }
                return null
            });
            var s = 0;

            function a(e, t) {
                t && (i(e, "transition", "none"), t()), s || (s = e.clientTop && 0), t && i(e, "transition", "")
            }

            function o(e, t, n, i) {
                r(!0, e, t, n, i)
            }

            function r(e, t, n, i, s) {
                t[(e ? "add" : "remove") + "EventListener"](n, i, !s && !1 !== s || s)
            }

            function l(e, t) {
                e.stopPropagation(), t && e.preventDefault()
            }

            function c(e, t) {
                i(e, "display", t ? "" : "none")
            }

            function u(e, t) {
                i(e, "visibility", t ? "" : "hidden")
            }

            function d(e, t) {
                i(e, "transition", t ? "" : "none")
            }

            var h = "theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),
                p = {page: 1, close: 1, autofit: 1, "zoom-in": 1, "zoom-out": 1, prev: 1, next: 1, fullscreen: 1},
                f = document.createElement("div");
            f.id = "spotlight", f.innerHTML = "<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>";
            var m = {}, g = document.createElement("video");

            function v(e, t, n, i) {
                if ("node" !== i) for (var s, a = Object.keys(n), o = 0; o < a.length; o++) if (3 < (s = a[o]).length && 0 === s.indexOf("src")) if ("video" === i) {
                    var r = m[s];
                    if (r) {
                        if (0 < r) {
                            var l = n[s];
                            break
                        }
                    } else {
                        if (g.canPlayType("video/" + s.substring(3).replace("-", "").toLowerCase())) {
                            m[s] = 1, l = n[s];
                            break
                        }
                        m[s] = -1
                    }
                } else if ((r = parseInt(s.substring(4), 10)) && (r = Math.abs(t - r), !c || r < c)) {
                    var c = r;
                    l = n[s]
                }
                return l || n.src || n.href || e.src || e.href
            }

            var y, b, w, x, C, E, k, S, M, T, D, A, I, P, $, L, _, O, N, z, j, F, B, H, R, Y, W, q, V, X, G, Z, U, J, Q,
                K, ee, te, ne, ie, se, ae, oe, re, le, ce, ue, de, he, pe, fe, me, ge, ve, ye, be, we, xe, Ce, Ee, ke,
                Se, Me = {}, Te = navigator.connection, De = window.devicePixelRatio || 1,
                Ae = document.createElement("img");

            function Ie() {
                function e(e) {
                    return Me[e] = (f || document).getElementsByClassName("spl-" + e)[0]
                }

                if (!ne) {
                    ne = document.body, oe = e("scene"), re = e("header"), le = e("footer"), ce = e("title"), ue = e("description"), de = e("button"), he = e("prev"), pe = e("next"), me = e("page"), ve = e("progress"), ye = e("spinner"), se = [e("pane")], Pe("close", ct), ne[ke = "requestFullscreen"] || ne[ke = "msRequestFullscreen"] || ne[ke = "webkitRequestFullscreen"] || ne[ke = "mozRequestFullscreen"] || (ke = ""), ke ? (Se = ke.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit"), fe = Pe("fullscreen", nt)) : h.pop(), Pe("autofit", st), Pe("zoom-in", at), Pe("zoom-out", ot), Pe("theme", it), ge = Pe("play", Ge), Pe("download", lt), o(he, "click", dt), o(pe, "click", ht);
                    var t = e("track");
                    o(t, "mousedown", Ke), o(t, "mousemove", tt), o(t, "mouseleave", et), o(t, "mouseup", et), o(t, "touchstart", Ke, {passive: !1}), o(t, "touchmove", tt, {passive: !0}), o(t, "touchend", et), o(de, "click", (function () {
                        Z ? Z($, O) : G && (location.href = G)
                    }))
                }
            }

            function Pe(e, t) {
                var n = document.createElement("div");
                return n.className = "spl-" + e, o(n, "click", t), re.appendChild(n), Me[e] = n
            }

            function $e(e) {
                if (L = _.length) {
                    ne || Ie(), B && B(e);
                    for (var t = se[0], s = t.parentNode, a = se.length; a < L; a++) {
                        var o = t.cloneNode(!1);
                        i(o, "left", 100 * a + "%"), s.appendChild(o), se[a] = o
                    }
                    ie || (ne.appendChild(f), Fe()), $ = e || 1, d(oe), ft(!0), ke && c(fe, 0 < screen.availHeight - window.innerHeight), history.pushState({spl: 1}, ""), history.pushState({spl: 2}, ""), d(f, !0), n(ne, "hide-scrollbars", !0), n(f, "show", !0), We(!0), Fe(), Ue(), q && Ge(!0, !0)
                }
            }

            function Le(e, t) {
                return void 0 !== (e = O[e]) ? "false" != (e = "" + e) && (e || t) : t
            }

            function _e(e) {
                e ? a(ae, _e) : (d(oe, ee), i(ae, "opacity", K ? 0 : 1), He(Q && .8), te && n(ae, te, !0))
            }

            function Oe(e) {
                if (ie = se[e - 1], ae = ie.firstChild, $ = e, ae) I && st(), Y && n(ae, Y, !0), _e(!0), te && n(ae, te), K && i(ae, "opacity", 1), Q && i(ae, "transform", ""), i(ae, "visibility", "visible"), we && (Ae.src = we), q && Ze(xe); else {
                    var t = be.media, s = Le("spinner", !0);
                    if ("video" === t) Ne(s, !0), (ae = document.createElement("video")).onloadedmetadata = function () {
                        ae === this && (ae.onerror = null, ae.width = ae.videoWidth, ae.height = ae.videoHeight, Be(), Ne(s), Oe(e))
                    }, ae.poster = O.poster, ae.preload = X ? "auto" : "metadata", ae.controls = Le("controls", !0), ae.autoplay = O.autoplay, ae.h = Le("inline"), ae.muted = Le("muted"), ae.src = be.src, ie.appendChild(ae); else {
                        if ("node" === t) return "string" == typeof (ae = be.src) && (ae = document.querySelector(ae)), void (ae && (ae.g || (ae.g = ae.parentNode), Be(), ie.appendChild(ae), Oe(e)));
                        Ne(s, !0), (ae = document.createElement("img")).onload = function () {
                            ae === this && (ae.onerror = null, Ne(s), Oe(e), Be())
                        }, ae.src = be.src, ie.appendChild(ae)
                    }
                    ae && (s || i(ae, "visibility", "visible"), ae.onerror = function () {
                        ae === this && (ut(ae), n(ye, "error", !0), Ne(s))
                    })
                }
            }

            function Ne(e, t) {
                e && n(ye, "spin", t)
            }

            function ze() {
                return document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
            }

            function je() {
                if (Fe(), ae && Be(), ke) {
                    var e = ze();
                    n(fe, "on", e), e || c(fe, 0 < screen.availHeight - window.innerHeight)
                }
            }

            function Fe() {
                C = f.clientWidth, E = f.clientHeight
            }

            function Be() {
                k = ae.clientWidth, S = ae.clientHeight
            }

            function He(e) {
                i(ae, "transform", "translate(-50%, -50%) scale(" + (e || M) + ")")
            }

            function Re(e, t) {
                i(ie, "transform", e || t ? "translate(" + e + "px, " + t + "px)" : "")
            }

            function Ye(e, t, n) {
                t ? a(oe, (function () {
                    Ye(e, !1, n)
                })) : i(oe, "transform", "translateX(" + (100 * -e + (n || 0)) + "%)")
            }

            function We(e) {
                r(e, window, "keydown", Ve), r(e, window, "wheel", Xe), r(e, window, "resize", je), r(e, window, "popstate", qe)
            }

            function qe(e) {
                ie && e.state.spl && ct(!0)
            }

            function Ve(e) {
                if (ie) {
                    var t = !1 !== O["zoom-in"];
                    switch (e.keyCode) {
                        case 8:
                            t && st();
                            break;
                        case 27:
                            ct();
                            break;
                        case 32:
                            q && Ge();
                            break;
                        case 37:
                            dt();
                            break;
                        case 39:
                            ht();
                            break;
                        case 38:
                        case 107:
                        case 187:
                            t && at();
                            break;
                        case 40:
                        case 109:
                        case 189:
                            t && ot()
                    }
                }
            }

            function Xe(e) {
                ie && !1 !== O["zoom-in"] && (0 > .5 * (0 > (e = e.deltaY) ? 1 : e ? -1 : 0) ? ot() : at())
            }

            function Ge(e, t) {
                ("boolean" == typeof e ? e : !xe) === !xe && (xe = xe ? clearTimeout(xe) : 1, n(ge, "on", xe), t || Ze(xe))
            }

            function Ze(e) {
                F && (a(ve, (function () {
                    i(ve, "transition-duration", ""), i(ve, "transform", "")
                })), e && (i(ve, "transition-duration", J + "s"), i(ve, "transform", "translateX(0)"))), e && (xe = setTimeout(ht, 1e3 * J))
            }

            function Ue() {
                W && (Ee = Date.now() + 2950, Ce || (n(f, "menu", !0), Je(3e3)))
            }

            function Je(e) {
                Ce = setTimeout((function () {
                    var e = Date.now();
                    e >= Ee ? (n(f, "menu"), Ce = 0) : Je(Ee - e)
                }), e)
            }

            function Qe(e) {
                "boolean" == typeof e && (Ce = e ? Ce : 0), Ce ? (Ce = clearTimeout(Ce), n(f, "menu")) : Ue()
            }

            function Ke(e) {
                l(e, !0), T = !0, D = !1;
                var t = e.touches;
                t && (t = t[0]) && (e = t), A = k * M <= C, w = e.pageX, x = e.pageY, d(ie)
            }

            function et(e) {
                if (l(e), T) {
                    if (D) {
                        if (A && D) {
                            var t = (e = y < -C / 7 && ($ < L || j)) || y > C / 7 && (1 < $ || j);
                            (e || t) && (Ye($ - 1, !0, y / C * 100), e && ht() || t && dt()), y = 0, Re()
                        }
                        d(ie, !0)
                    } else Qe();
                    T = !1
                }
            }

            function tt(e) {
                if (l(e), T) {
                    var t = e.touches;
                    t && (t = t[0]) && (e = t), t = (k * M - C) / 2, y -= w - (w = e.pageX), A || (y > t ? y = t : y < -t && (y = -t), S * M > E && (t = (S * M - E) / 2, (b -= x - (x = e.pageY)) > t ? b = t : b < -t && (b = -t))), D = !0, Re(y, b)
                } else Ue()
            }

            function nt(e) {
                var t = ze();
                "boolean" == typeof e && e === !!t || (t ? document[Se]() : f[ke]())
            }

            function it(e) {
                "string" != typeof e && (e = P ? "" : V || "white"), P !== e && (P && n(f, P), e && n(f, e, !0), P = e)
            }

            function st(e) {
                "boolean" == typeof e && (I = !e), n(ae, "autofit", I = 1 === M && !I), i(ae, "transform", ""), M = 1, b = y = 0, Be(), d(ie), Re()
            }

            function at() {
                var e = M / .65;
                50 >= e && (I && st(), Re(y /= .65, b /= .65), rt(e))
            }

            function ot() {
                var e = .65 * M;
                I && st(), 1 <= e && (1 === e ? y = b = 0 : (y *= .65, b *= .65), Re(y, b), rt(e))
            }

            function rt(e) {
                M = e || 1, He()
            }

            function lt() {
                var e = ne, t = document.createElement("a"), n = ae.src;
                t.href = n, t.download = n.substring(n.lastIndexOf("/") + 1), e.appendChild(t), t.click(), e.removeChild(t)
            }

            function ct(e) {
                setTimeout((function () {
                    ne.removeChild(f), ie = ae = be = O = z = _ = B = H = R = Z = null
                }), 200), n(ne, "hide-scrollbars"), n(f, "show"), nt(!1), We(), history.go(!0 === e ? -1 : -2), we && (Ae.src = ""), xe && Ge(), ae && ut(ae), Ce && (Ce = clearTimeout(Ce)), P && it(), U && n(f, U), R && R()
            }

            function ut(e) {
                if (e.g) e.g.appendChild(e), e.g = null; else {
                    var t = e.parentNode;
                    t && t.removeChild(e), e.src = e.onerror = ""
                }
            }

            function dt(e) {
                if (e && Ue(), 1 < L) {
                    if (1 < $) return pt($ - 1);
                    if (j) return Ye(L, !0), pt(L)
                }
            }

            function ht(e) {
                if (e && Ue(), 1 < L) {
                    if ($ < L) return pt($ + 1);
                    if (j) return Ye(-1, !0), pt(1);
                    xe && Ge()
                }
            }

            function pt(e) {
                if (e !== $) {
                    xe ? (clearTimeout(xe), Ze()) : Ue();
                    var t = e > $;
                    return $ = e, ft(t), !0
                }
            }

            function ft(e) {
                if (b = y = 0, M = 1, ae) if (ae.onerror) ut(ae); else {
                    var t = ae;
                    setTimeout((function () {
                        t && ae !== t && (ut(t), t = null)
                    }), 650), _e(), Re()
                }
                !function (e) {
                    var t, i = _[$ - 1], s = i;
                    if (O = {}, z && Object.assign(O, z), Object.assign(O, s.dataset || s), N = O.media, Z = O.onclick, V = O.theme, U = O.class, W = Le("autohide", !0), j = Le("infinite"), F = Le("progress", !0), q = Le("autoslide"), X = Le("preload", !0), G = O.buttonHref, J = q && parseFloat(q) || 7, P || V && it(V), U && n(f, U, !0), U && a(f), s = O.control) {
                        s = "string" == typeof s ? s.split(",") : s;
                        for (var o = 0; o < h.length; o++) O[h[o]] = !1;
                        for (o = 0; o < s.length; o++) {
                            var r = s[o].trim();
                            "zoom" === r ? O["zoom-in"] = O["zoom-out"] = !0 : O[r] = !0
                        }
                    }
                    if (s = O.animation, Q = K = ee = !s, te = !1, s) for (s = "string" == typeof s ? s.split(",") : s, o = 0; o < s.length; o++) "scale" === (r = s[o].trim()) ? Q = !0 : "fade" === r ? K = !0 : "slide" === r ? ee = !0 : r && (te = r);
                    for (Y = O.fit, o = Te && Te.downlink, s = Math.max(E, C) * De, o && 1200 * o < s && (s = 1200 * o), be = {
                        media: N,
                        src: v(i, s, O, N),
                        title: Le("title", i.alt || i.title || (t = i.firstElementChild) && (t.alt || t.title))
                    }, we && (Ae.src = we = ""), X && e && (i = _[$]) && ((t = (e = i.dataset || i).media) && "image" !== t || (we = v(i, s, e, t))), i = 0; i < h.length; i++) e = h[i], c(Me[e], Le(e, p[e]))
                }(e), Ye($ - 1), n(ye, "error"), Oe($), d(ie), Re(), e = be.title;
                var s = Le("description"), o = Le("button"), r = e || s || o;
                r && (e && (ce.firstChild.nodeValue = e), s && (ue.firstChild.nodeValue = s), o && (de.firstChild.nodeValue = o), c(ce, e), c(ue, s), c(de, o), i(le, "transform", "all" === W ? "" : "none")), W || n(f, "menu", !0), u(le, r), u(he, j || 1 < $), u(pe, j || $ < L), me.firstChild.nodeValue = 1 < L ? $ + " / " + L : "", H && H($, O)
            }

            o(document, "click", (function (e) {
                var t = e.target.closest(".spotlight");
                if (t) {
                    l(e, !0), e = t.closest(".spotlight-group"), _ = (e || document).getElementsByClassName("spotlight");
                    for (var n = 0; n < _.length; n++) if (_[n] === t) {
                        z = e && e.dataset, $e(n + 1);
                        break
                    }
                }
            })), window.Spotlight = {
                init: Ie,
                theme: it,
                fullscreen: nt,
                download: lt,
                autofit: st,
                next: ht,
                prev: dt,
                goto: pt,
                close: ct,
                zoom: rt,
                menu: Qe,
                show: function (e, t, n) {
                    _ = e, t && (z = t, B = t.onshow, H = t.onchange, R = t.onclose, n = n || t.index), $e(n)
                },
                play: Ge,
                addControl: Pe,
                removeControl: function (e) {
                    var t = Me[e];
                    t && (re.removeChild(t), Me[e] = null)
                }
            }
        }).call(void 0)
    })()
})();