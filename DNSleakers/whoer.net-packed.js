 /* not packed version is available at http://whoer.net/js/whoer.notpacked.js */

var $x = function(a) {
    return document.getElementById(a)
};
var NA = 'N/A';
var NAS = '<span class="disabled">' + NA + '</span>';
var preloader_default = '/images/preloader.gif';
var ajax_timeout = 25 * 1000;
var time_difference = 5 * 60;
var oses = ['winnt', 'win32', 'win98', 'windows', 'linux', 'bsd', 'mac os', 'darwin', 'minix', 'aix', 'irix', 'hpux', 'qnx', 'sunos', 'solaris', 'hurd', 'symbian', 'nintendo', 'psp', 'playstation', 'nitro', 'netware', 'beos', 'plan', 'freedos', 'reactos', 'junos', 'inferno', 'android', 'openmoko', 'mobilinux', 'palm', 'javafx', 'centos'];
var mobiles = ['sonyericsson', 'nokia', 'motorola'];
var languages = 'aa aa-dj aa-er aa-et af am ar ar-ae ar-bh ar-dz ar-eg ar-in ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-mr ar-om ar-ps ar-qa ar-sa ar-sd ar-so ar-sy ar-td ar-tn ar-ye az be bg bm bn bn-bd bs ca ch ch-mp cs da da-de da-dk da-fo da-gl de de-at de-be de-ch de-de de-dk de-fr de-hu de-it de-li de-lu de-pl dv dz el el-cy el-gr en en-ag en-ai en-as en-au en-bb en-be en-bm en-bn en-bs en-bw en-bz en-ca en-ck en-cm en-dm en-er en-et en-fj en-fk en-fm en-gb en-gd en-gh en-gi en-gm en-gu en-gy en-hk en-ie en-il en-in en-io en-jm en-ke en-ki en-kn en-ky en-lc en-lr en-ls en-mh en-mp en-ms en-mt en-mu en-mw en-na en-nf en-ng en-nr en-nu en-nz en-pg en-ph en-pk en-pr en-pw en-rw en-sb en-sc en-sg en-sl en-so en-sz en-tk en-to en-tt en-ug en-um en-us en-vc en-vg en-vu en-ws en-za en-zm en-zv es es-ar es-bo es-cl es-co es-cr es-cu es-do es-ec es-es es-gq es-gt es-hn es-mx es-ni es-pa es-pe es-pr es-py es-sv es-uy es-ve et fa fa-ir fi fi-fi fi-se fj fo fr fr-ad fr-bi fr-bj fr-ca fr-cd fr-cf fr-cg fr-ch fr-ci fr-cm fr-dj fr-fr fr-ga fr-gb fr-gn fr-gp fr-ht fr-it fr-km fr-lb fr-lu fr-mc fr-mg fr-ml fr-mq fr-nc fr-ne fr-pf fr-rw fr-sc fr-sn fr-td fr-tg fr-vu fr-yt ga ga-ie gn ha he he-il hi ho hr hr-ba hr-hr ht hu hu-hu hu-sl hy id is it it-ch it-it it-sl it-sm ja jv ka kg kk km ko ko-kr ku ky lb lg lo lt lv mg mh mk mn mo mo-mo ms ms-my ms-sg mt my my-my na nb-no ne ne-ne nl nl-an nl-aw nl-be nl-nl nl-sr nn-NO no no-no pl pl-pl ps pt-ao pt-br pt-cv pt-gw pt-mz pt-pt pt-st pt-tl qu ro ro-ro ru ru-ru ru-ua rw rw-rw sd sd-pk sg si sk sk-sk sl sm sn so so-so sq sr sr-ba ss ss-sz sv sv-fi sv-se sw sw-tz ta ta-sg tg th tk tl to to-to tr tr-tr tw uk ur ur-pk uz uz-uz vi yi zh-cn zh-hk zh-mo zh-sg zh-tw zu';
var lang_array = languages.split(' ');
var ua_lang = [];
for (lid in lang_array)
    ua_lang[lang_array[lid]] = 1;
var entity_to_code = {__proto__: null,apos: 0x0027,quot: 0x0022,amp: 0x0026,lt: 0x003C,gt: 0x003E,nbsp: 0x00A0,iexcl: 0x00A1,cent: 0x00A2,pound: 0x00A3,curren: 0x00A4,yen: 0x00A5,brvbar: 0x00A6,sect: 0x00A7,uml: 0x00A8,copy: 0x00A9,ordf: 0x00AA,laquo: 0x00AB,not: 0x00AC,shy: 0x00AD,reg: 0x00AE,macr: 0x00AF,deg: 0x00B0,plusmn: 0x00B1,sup2: 0x00B2,sup3: 0x00B3,acute: 0x00B4,micro: 0x00B5,para: 0x00B6,middot: 0x00B7,cedil: 0x00B8,sup1: 0x00B9,ordm: 0x00BA,raquo: 0x00BB,frac14: 0x00BC,frac12: 0x00BD,frac34: 0x00BE,iquest: 0x00BF,Agrave: 0x00C0,Aacute: 0x00C1,Acirc: 0x00C2,Atilde: 0x00C3,Auml: 0x00C4,Aring: 0x00C5,AElig: 0x00C6,Ccedil: 0x00C7,Egrave: 0x00C8,Eacute: 0x00C9,Ecirc: 0x00CA,Euml: 0x00CB,Igrave: 0x00CC,Iacute: 0x00CD,Icirc: 0x00CE,Iuml: 0x00CF,ETH: 0x00D0,Ntilde: 0x00D1,Ograve: 0x00D2,Oacute: 0x00D3,Ocirc: 0x00D4,Otilde: 0x00D5,Ouml: 0x00D6,times: 0x00D7,Oslash: 0x00D8,Ugrave: 0x00D9,Uacute: 0x00DA,Ucirc: 0x00DB,Uuml: 0x00DC,Yacute: 0x00DD,THORN: 0x00DE,szlig: 0x00DF,agrave: 0x00E0,aacute: 0x00E1,acirc: 0x00E2,atilde: 0x00E3,auml: 0x00E4,aring: 0x00E5,aelig: 0x00E6,ccedil: 0x00E7,egrave: 0x00E8,eacute: 0x00E9,ecirc: 0x00EA,euml: 0x00EB,igrave: 0x00EC,iacute: 0x00ED,icirc: 0x00EE,iuml: 0x00EF,eth: 0x00F0,ntilde: 0x00F1,ograve: 0x00F2,oacute: 0x00F3,ocirc: 0x00F4,otilde: 0x00F5,ouml: 0x00F6,divide: 0x00F7,oslash: 0x00F8,ugrave: 0x00F9,uacute: 0x00FA,ucirc: 0x00FB,uuml: 0x00FC,yacute: 0x00FD,thorn: 0x00FE,yuml: 0x00FF,OElig: 0x0152,oelig: 0x0153,Scaron: 0x0160,scaron: 0x0161,Yuml: 0x0178,fnof: 0x0192,circ: 0x02C6,tilde: 0x02DC,Alpha: 0x0391,Beta: 0x0392,Gamma: 0x0393,Delta: 0x0394,Epsilon: 0x0395,Zeta: 0x0396,Eta: 0x0397,Theta: 0x0398,Iota: 0x0399,Kappa: 0x039A,Lambda: 0x039B,Mu: 0x039C,Nu: 0x039D,Xi: 0x039E,Omicron: 0x039F,Pi: 0x03A0,Rho: 0x03A1,Sigma: 0x03A3,Tau: 0x03A4,Upsilon: 0x03A5,Phi: 0x03A6,Chi: 0x03A7,Psi: 0x03A8,Omega: 0x03A9,alpha: 0x03B1,beta: 0x03B2,gamma: 0x03B3,delta: 0x03B4,epsilon: 0x03B5,zeta: 0x03B6,eta: 0x03B7,theta: 0x03B8,iota: 0x03B9,kappa: 0x03BA,lambda: 0x03BB,mu: 0x03BC,nu: 0x03BD,xi: 0x03BE,omicron: 0x03BF,pi: 0x03C0,rho: 0x03C1,sigmaf: 0x03C2,sigma: 0x03C3,tau: 0x03C4,upsilon: 0x03C5,phi: 0x03C6,chi: 0x03C7,psi: 0x03C8,omega: 0x03C9,thetasym: 0x03D1,upsih: 0x03D2,piv: 0x03D6,ensp: 0x2002,emsp: 0x2003,thinsp: 0x2009,zwnj: 0x200C,zwj: 0x200D,lrm: 0x200E,rlm: 0x200F,ndash: 0x2013,mdash: 0x2014,lsquo: 0x2018,rsquo: 0x2019,sbquo: 0x201A,ldquo: 0x201C,rdquo: 0x201D,bdquo: 0x201E,dagger: 0x2020,Dagger: 0x2021,bull: 0x2022,hellip: 0x2026,permil: 0x2030,prime: 0x2032,Prime: 0x2033,lsaquo: 0x2039,rsaquo: 0x203A,oline: 0x203E,frasl: 0x2044,euro: 0x20AC,image: 0x2111,weierp: 0x2118,real: 0x211C,trade: 0x2122,alefsym: 0x2135,larr: 0x2190,uarr: 0x2191,rarr: 0x2192,darr: 0x2193,harr: 0x2194,crarr: 0x21B5,lArr: 0x21D0,uArr: 0x21D1,rArr: 0x21D2,dArr: 0x21D3,hArr: 0x21D4,forall: 0x2200,part: 0x2202,exist: 0x2203,empty: 0x2205,nabla: 0x2207,isin: 0x2208,notin: 0x2209,ni: 0x220B,prod: 0x220F,sum: 0x2211,minus: 0x2212,lowast: 0x2217,radic: 0x221A,prop: 0x221D,infin: 0x221E,ang: 0x2220,and: 0x2227,or: 0x2228,cap: 0x2229,cup: 0x222A,there4: 0x2234,sim: 0x223C,cong: 0x2245,asymp: 0x2248,ne: 0x2260,equiv: 0x2261,le: 0x2264,ge: 0x2265,sub: 0x2282,sup: 0x2283,nsub: 0x2284,sube: 0x2286,supe: 0x2287,oplus: 0x2295,otimes: 0x2297,perp: 0x22A5,sdot: 0x22C5,lceil: 0x2308,rceil: 0x2309,lfloor: 0x230A,rfloor: 0x230B,lang: 0x2329,rang: 0x232A,loz: 0x25CA,spades: 0x2660,clubs: 0x2663,hearts: 0x2665,diams: 0x2666,int: 0x222B};
var char_to_entity = {};
for (var entity_name in entity_to_code)
    char_to_entity[String.fromCharCode(entity_to_code[entity_name])] = entity_name;
function e_e(b) {
    return b.replace(/./g, function(a) {
        return char_to_entity[a] ? '&' + char_to_entity[a] + ';' : a
    })
}
;
function get_language_full() {
    var a = '', lang_app = '', lang_ua = '';
    var b = ["language", "browserLanguage", "userLanguage", "systemLanguage"];
    for (var i in b) {
        try {
            if (typeof (window.navigator[b[i]]) == "undefined")
                continue;
            a += window.navigator[b[i]] + " | "
        } catch (e) {
        }
    }
    a = a.replace(/ \| $/, '');
    if (typeof (window.navigator['userAgent']) != "undefined")
        try {
            lang_ua = detect_lang_from_header(window.navigator['userAgent'])
        } catch (e) {
        }
    ;
    if (typeof (window.navigator['appVersion']) != "undefined")
        try {
            lang_app = detect_lang_from_header(window.navigator['appVersion'])
        } catch (e) {
        }
    ;
    if ((lang_ua == '' && lang_app == '') || (lang_ua != '' && lang_app != '')) {
        a = a ? a + " | " + lang_ua : lang_ua
    } else {
        var c = a ? " | " : '';
        if (lang_ua && lang_app) {
            a += c + lang_ua + c + lang_app
        } else {
            a += c + (lang_ua ? lang_ua : lang_app)
        }
    }
    a = a.replace(/ \| $/, '');
    return a
}
function detect_lang_from_header(a) {
    var b = a;
    var c = '';
    if (/\[(\w\w|\w\w-\w\w)\]/.test(a.toLowerCase())) {
        if (ua_lang[RegExp.$1]) {
            c = RegExp.$1
        }
    } else if (/esperanto/.test(a.toLowerCase())) {
        c = 'esperanto'
    } else if (/; en[;)]/.test(a.toLowerCase())) {
        c = 'en'
    } else {
        var d = a.toLowerCase().split(/;|\)/);
        for (i in d) {
            d[i] = d[i].replace('_', '-');
            if (/^[ \w\-,]{0,} (\w\w|\w\w-\w\w)$/.test(d[i].toLowerCase())) {
                if (ua_lang[RegExp.$1]) {
                    c = d[i];
                    c = c.replace(/\s+/, '')
                }
            }
        }
    }
    return c
}
function get_os_full() {
    var a = '', os_cpu = '', os_platform = '', os_ua = '', os_app = '';
    var b = [];
    if (typeof (window.navigator['platform']) != "undefined")
        b.push(window.navigator['platform']);
    if (typeof (window.navigator['oscpu']) != "undefined")
        b.push(window.navigator['oscpu']);
    if (typeof (window.navigator['userAgent']) != "undefined")
        try {
            b.push(detect_os_from_header(window.navigator['userAgent']))
        } catch (e) {
        }
    ;
    if (typeof (window.navigator['appVersion']) != "undefined")
        try {
            b.push(detect_os_from_header(window.navigator['appVersion']))
        } catch (e) {
        }
    ;
    b.sort();
    for (var i = 1; i < b.length; i++) {
        if (b[i - 1] == b[i] || b[i] == '') {
            b.splice(i, 1);
            i -= 1
        }
    }
    a = b.join(' | ');
    if (a == '')
        a = iloc('Unknown');
    a = a.replace(/(^\s?\|| \|\s?$)/, '');
    return a
}
function get_chunk_from_user_agent(a, b) {
    var c = '';
    for (os in b) {
        var d = new RegExp(b[os], 'i');
        if (d.test(a.toLowerCase())) {
            var e = a.split(';');
            for (chid in e) {
                e[chid] = e[chid].replace(/^\s+/, '');
                e[chid] = e[chid].replace(/\s+$/, '');
                if (d.test(e[chid].toLowerCase())) {
                    c = e[chid];
                    break
                }
            }
            break
        }
    }
    return c
}
function detect_os_from_header(a) {
    var b = a;
    var c = '';
    var d = 0, macintosh = 0;
    if (/^.*?(\(|\( )Macintosh;/i.test(a.toLowerCase())) {
        macintosh = 1;
        a = a.replace(/^.*?\(Macintosh;/i, '')
    }
    if (/^.*?(\(|\( )Windows;/i.test(a.toLowerCase())) {
        d = 1;
        a = a.replace(/^.*?\(Windows;/i, '')
    }
    c = get_chunk_from_user_agent(a, oses);
    c = c.replace(/^(Mozilla|Opera|[\d.]+).*?\(/, '');
    if (!/\(/.test(c))
        c = c.replace(/\)$/, '');
    c = (!c && macintosh == 1) ? 'Macintosh' : c;
    c = (!c && d == 1) ? 'Windows' : c;
    var e = 0, in_result = 0;
    for (mid in mobiles) {
        var f = new RegExp(mobiles[mid], 'i');
        if (f.test(a.toLowerCase()))
            e = 1;
        if (f.test(c.toLowerCase()))
            in_result = 1
    }
    if (e && (c == '' || !in_result)) {
        var g = get_chunk_from_user_agent(a, mobiles);
        if (g)
            c += (c ? ', ' + g : g)
    }
    if (/^(.*)\).*?(\[.*\]|KHTML|NetFront)/.test(c))
        c = RegExp.$1;
    c = c.replace(/[\)\(]/g, '');
    if (/curl\/.* \((.*?)\)/.test(a.toLowerCase()))
        c = RegExp.$1;
    return c
}
var inters = new Array;
inters['ru'] = [];
var en_msg = ['Mismatch', 'Match', 'Unknown', 'enabled', 'disabled', 'more', 'hide', 'show', 'Cannot connect to whois', 'Anonymizer detected'];
var ru_msg = ['Не совпадает', 'Совпадает', 'Неизвестно', 'включено', 'выключено', 'еще', 'скрыть', 'показать', 'Невозможно соединиться с whois', 'Обнаружен анонимайзер'];
for (var i in en_msg) {
    inters['ru'][en_msg[i]] = ru_msg[i]
}
function iloc(a) {
    var b = 'en';
    if (document.cookie.indexOf("LANG=ru") >= 0) {
        b = 'ru'
    }
    if (b == 'en') {
        return a
    } else {
        var c = "";
        c = inters[b][a];
        if (c == undefined) {
            return a
        } else {
            return c
        }
    }
}
function check_time_difference(a, b, c, d) {
    var f = new Date();
    var g = f.toString();
    var h = $x(a);
    var i = $x(b);
    var j = $x(c);
    var k = $x(d);
    h.innerHTML = g;
    var l = (Math.round(f.getTime() / 1000) + ((f.getTimezoneOffset() * 60) * (-1)));
    var m = i.innerHTML;
    var n = Math.abs(l - m);
    var o = j.innerHTML;
    var p = 0;
    try {
        var q = /(GMT|UTC)([+-]\d\d\d\d)/g.exec(g);
        if (q != null) {
            if (o == 'GMT' && q[2] == '+0000') {
                o = 'GMT+0000';
            }
            if (o != ("GMT" + q[2])) {
                p = 1
            }
        } else {
            var r = /(GMT|UTC)/g.exec(g);
            if (r != null) {
                if (o != "GMT") {
                    p = 1
                }
            }
        }
    } catch (e) {
    }
    ;
    if (m != NA && m != "-" && m != "") {
        if (n > time_difference || p == 1) {
            k.className = "timediff";
            k.innerHTML = iloc("Mismatch")
        } else {
            k.innerHTML = iloc("Match")
        }
    }
}
function get_window_size() {
    var a = "?";
    var b = "?";
    try {
        if (document.all) {
            a = document.body.offsetWidth;
            b = document.body.offsetHeight
        } else if (document.layers) {
            a = document.body.width;
            b = document.body.height
        } else if (document.body.clientWidth != null) {
            a = document.body.clientWidth;
            b = document.body.clientHeight
        }
    } catch (e) {
    }
    ;
    return a + "x" + b + " (" + screen.width + "x" + screen.height + ")"
}
var scripts = new Object;
scripts = {encolor: '#4b4b4b',js: function(a) {
        var b = $x(a);
        b.innerHTML = iloc("enabled");
        b.style.color = scripts.encolor
    },java: function(a) {
        if (window.navigator.javaEnabled()) {
            var b = $x(a);
            b.innerHTML = iloc("enabled");
            b.style.color = scripts.encolor
        }
    },activex: function(a) {
        try {
            var b = ActiveXObject;
            var c = $x(a);
            c.innerHTML = iloc("enabled");
            c.style.color = scripts.encolor
        } catch (e) {
        }
    },vbscript: function(a) {
        try {
            VBSEnabled();
            var b = $x(a);
            b.innerHTML = iloc("enabled");
            b.style.color = scripts.encolor
        } catch (e) {
        }
    },firebug: function(a) {
        try {
            if (window.console && (window.console.firebug || window.console.exception)) {
                var b = $x(a);
                b.innerHTML = iloc("enabled");
                b.style.color = scripts.encolor
            }
        } catch (e) {
        }
    },navigator: function(a) {
        var b = "";
        var c = $x(a);
        c.innerHTML = '&nbsp;';
        for (var d in window.navigator) {
            document.write('<tr><td style="padding-left: 20px;" ' + 'class="wtl' + b + '">' + e_e(d) + '</td><td class="wtr' + b + '">' + window.navigator[d] + "&nbsp;</td></tr>");
            b = (b == "") ? "_z" : ""
        }
    },jsua: function(a, b, c) {
        var d = $x(a);
        var e = $x(b);
        var f = $x(c);
        d.innerHTML = window.navigator["userAgent"] ? e_e(window.navigator["userAgent"]) : NAS;
        d.style.color = scripts.encolor;
        if (d.innerHTML != e.innerHTML) {
            f.className = "timediff";
            f.innerHTML = iloc("Mismatch")
        } else {
            f.innerHTML = iloc("Match")
        }
    },screen: function(a) {
        var b = "";
        var c = $x(a);
        c.innerHTML = '&nbsp;';
        var d = ["colorDepth", "pixelDepth", "height", "width", "availHeight", "availWidth", "top", "left", "availTop", "availLeft", "window size"];
        for (var i in d) {
            document.write('<tr><td style="padding-left: 20px;" class="wtl' + b + '">' + d[i] + '</td><td class="wtr' + b + '">' + (d[i] == "window size" ? get_window_size() : window.screen[d[i]]) + "&nbsp;</td></tr>");
            b = (b == "") ? "_z" : ""
        }
    },languages: function(a, b) {
        var c = $x(a);
        var d = c.innerHTML;
        var e = e_e(get_language_full());
        if (e != '') {
            if (!b) {
                c.innerHTML = e
            } else {
                c.innerHTML = (c.innerHTML.search(NA) != -1 ? e : c.innerHTML + " | " + e)
            }
        }
    },os: function(a) {
        var b = $x(a);
        var c = e_e(get_os_full());
        if (c == '') {
            b.innerHTML = iloc("Unknown")
        } else {
            b.innerHTML = c
        }
    }};
function fill_inner_html(a, b) {
    a = a.replace("\n", "");
    var c = $x(a);
    if (b == NA || b == '' || b == ' ') {
        b = NAS
    }
    c.innerHTML = b
}
function flash_ajax_request(c, d, f) {
    var g = false;
    var h = f ? '<img align="middle" src="' + f + '" border="0"/>' : '<img align="middle" src="' + preloader_default + '" border="0"/>';
    var i = '*';
    $x(c).innerHTML = h;
    d = encodeURI(d);
    if (window.XMLHttpRequest) {
        try {
            g = new XMLHttpRequest()
        } catch (e) {
            g = false
        }
    } else if (window.ActiveXObject) {
        try {
            g = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                g = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                g = false
            }
        }
    } else {
        g = false
    }
    if (g) {
        g.open("GET", d, true);
        g.onreadystatechange = function() {
            if (g.readyState == 4) {
                var a = d.replace(/\?.*$/, '');
                if ((g.responseText.indexOf(a) >= 0 && a.indexOf('/whois') < 0) || (g.responseText.indexOf(a) >= 0 && a.indexOf('/whois') >= 0 && g.responseText.indexOf('viawhoer') < 0)) {
                    $x(c).innerHTML = '<span class="ipa_alarm">' + iloc("Anonymizer detected") + '</span>'
                } else {
                    var b = NAS;
                    if (g.responseText == NA || g.responseText == '') {
                        b = NAS
                    } else {
                        b = g.responseText
                    }
                    $x(c).innerHTML = b
                }
            } else {
                $x(c).innerHTML = h
            }
        };
        g.send(null)
    } else {
        $x(c).innerHTML = i
    }
}
function load_script(a) {
    var b = document.getElementsByTagName("script");
    for (var c = 0; c < b.length; ++c) {
        var d = b[c];
        if (d.src == a)
            return false
    }
    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.src = a;
    document.getElementsByTagName('head')[0].appendChild(e);
    return 0
}
function init_ajax_preloaders(a, b) {
    var c = a.split(',');
    b = b ? '<img align="middle" src="' + b + '" border="0"/>' : '<img align="middle" src="' + preloader_default + '" border="0"/>';
    for (var d = 0; d < c.length; d++) {
        var e = $x(c[d]);
        e.innerHTML = b
    }
    window.setTimeout("drop_ajax_loaders('" + a + "', '" + NAS + "');", ajax_timeout)
}
function drop_ajax_loaders(a, b) {
    var c = a.split(',');
    for (var d = 0; d < c.length; d++) {
        var e = $x(c[d]);
        if (e.innerHTML.indexOf('loader') > 0) {
            e.innerHTML = b
        }
    }
}
var toggle = new Object;
toggle = {swap2: function(a, b, c, d) {
        if (!$x(a) || !$x(b))
            return;
        var e = $x(a);
        var f = $x(b);
        if (f.style.display == 'none' && d != 0) {
            var g = '\'' + a + '\',' + '\'' + b + '\',' + '\'' + c + '\',' + '1';
            f.style.display = '';
            e.innerHTML = '<a href="#" class="morehide" onClick="toggle.swap2(' + g + '); return false;" alt="' + iloc('hide') + '">' + iloc('hide') + '</a>';
            var h = "";
            if (b == "whoiser") {
                if ($x('whoiser')) {
                    h = $x('whoiser');
                    if (h.innerHTML == "" || h.innerHTML.indexOf(iloc("Cannnot connect to whois")) >= 0) {
                        flash_ajax_request('whoiser', $x('whois-req').innerHTML)
                    }
                }
            } else if (b == "country") {
                var i = $x('cmap');
                var j = $x('cflag');
                if (i.innerHTML == "") {
                    i.innerHTML = map_country
                }
                if (j.innerHTML == "") {
                    j.innerHTML = flag_country
                }
            } else if (b == "goomap") {
                var k = $x('map');
                if (k.innerHTML == "") {
                    if (MGLtd != '-' && MGLng != '-' && MGLtd != '' && MGLng != '' && MGLtd != NA && MGLng != NA) {
                        load_script('/js/gmap.js?1245915414')
                    }
                }
            }
        } else {
            var l = '\'' + a + '\',' + '\'' + b + '\',' + '\'' + c + '\',' + '1';
            f.style.display = 'none';
            e.innerHTML = '<a href="#" class="morehide" onClick="toggle.swap2(' + l + '); return false;" alt="' + c + '">' + c + '</a>'
        }
    }};
var pl_names = [["Shockwave Flash", ["ShockwaveFlash.ShockwaveFlash"], ["disabled"]], ["Shockwave for Director", ["SWCtl.SWCtl"], ["disabled"]], ["Windows Media Player", ["WMPlayer.OCX"], ["disabled"]], ["QuickTime", ["QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck"], ["disabled"]], ["SilverLight", ["AgControl.AgControl"], ["disabled"]], ["PDF", ["AcroPDF.PDF", "PDF.PdfCtrl"], ["disabled"]], ["RealPlayer", ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"], ["disabled"]], ["VLC", ["VideoLAN.VLCPlugin"], ["disabled"]], ["SVG", ["Adobe.SVGCtl"], ["disabled"]], ["DevalVR", ["DevalVRXCtrl.DevalVRXCtrl.1"], ["disabled"]]];
function display_plugins(a) {
    var b = $x(a);
    try {
        var c = ActiveXObject;
        b.innerHTML = '&nbsp;';
        detect_ie_plugins();
        var d = "";
        for (var f in pl_names) {
            document.write('<tr><td style="padding-left: 20px;" ' + 'width="150px" class="wtl' + d + '">' + pl_names[f][0] + '</td>' + '<td class="wtr' + d + '">' + (pl_names[f][2] == "disabled" ? '<div class="disabled">' + iloc('disabled') + '</div>' : iloc('enabled')) + '</td></tr>');
            d = (d == "") ? "_z" : ""
        }
    } catch (e) {
        var d = "";
        b.innerHTML = '&nbsp;';
        var g = 0;
        for (var h = 0; h < window.navigator.plugins.length; h++) {
            if (typeof (window.navigator.plugins[h]) == "function")
                continue;
            if (typeof (window.navigator.plugins[h].name) == "undefined")
                continue;
            g++;
            document.write('<tr><td style="padding-left: 20px;" ' + 'width="150px" class="wtl' + d + '">' + window.navigator.plugins[h].name + '</td><td class="wtr' + d + '">' + window.navigator.plugins[h].filename + '&nbsp;</td></tr>');
            d = (d == "") ? "_z" : ""
        }
        if (g == 0) {
            b.innerHTML = NAS
        }
    }
}
function detect_ie_plugins() {
    for (var a in pl_names) {
        for (var b in pl_names[a][1]) {
            try {
                try {
                    new ActiveXObject(pl_names[a][1][b]);
                    pl_names[a][2] = 'enabled'
                } catch (e) {
                }
            } catch (e) {
            }
        }
    }
}
