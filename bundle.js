System.registerDynamic("npm:my-name-is-url@1.0.0/dist/parser.js", ["npm:my-name-is-url@1.0.0/dist/regex.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _regex = $__require('npm:my-name-is-url@1.0.0/dist/regex.js');
  var _regex2 = _interopRequireDefault(_regex);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Urls = function() {
    function Urls() {
      var text = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
      _classCallCheck(this, Urls);
      this.text = text;
    }
    _createClass(Urls, [{
      key: 'get',
      value: function get() {
        if (typeof this.text !== 'string') {
          this.text = '';
        }
        return this.text.match(_regex2.default) || [];
      }
    }, {
      key: 'filter',
      value: function filter(cb) {
        if (typeof this.text !== 'string') {
          this.text = '';
        }
        if (typeof cb !== 'function') {
          throw new Error('Invalid filter callback');
        }
        return this.text.replace(_regex2.default, cb);
      }
    }]);
    return Urls;
  }();
  exports.default = Urls;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:tlds@1.111.0/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = ["aaa", "aarp", "abb", "abbott", "abbvie", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "af", "afl", "ag", "agakhan", "agency", "ai", "aig", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "ally", "alsace", "am", "amica", "amsterdam", "analytics", "android", "anquan", "ao", "apartments", "app", "apple", "aq", "aquarelle", "ar", "aramco", "archi", "army", "arpa", "arte", "as", "asia", "associates", "at", "attorney", "au", "auction", "audi", "audio", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "bauhaus", "bayern", "bb", "bbc", "bbva", "bcg", "bcn", "bd", "be", "beats", "beer", "bentley", "berlin", "best", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bom", "bond", "boo", "book", "boots", "bosch", "bostik", "bot", "boutique", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "cash", "casino", "cat", "catering", "cba", "cbn", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chloe", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "date", "dating", "datsun", "day", "dclk", "de", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "diamonds", "diet", "digital", "direct", "directory", "discount", "dj", "dk", "dm", "dnp", "do", "docs", "dog", "doha", "domains", "download", "drive", "dubai", "durban", "dvag", "dz", "earth", "eat", "ec", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "erni", "es", "esq", "estate", "et", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "fashion", "fast", "feedback", "ferrero", "fi", "film", "final", "finance", "financial", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "florist", "flowers", "flsmidth", "fly", "fm", "fo", "foo", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "fresenius", "frl", "frogans", "frontier", "ftr", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "gold", "goldpoint", "golf", "goo", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hamburg", "hangout", "haus", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hitachi", "hiv", "hk", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homes", "honda", "horse", "host", "hosting", "hoteles", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ifm", "iinet", "il", "im", "imamat", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jetzt", "jewelry", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "legal", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "limited", "limo", "lincoln", "linde", "link", "live", "living", "lixil", "lk", "loan", "loans", "locus", "lol", "london", "lotte", "lotto", "love", "lr", "ls", "lt", "ltd", "ltda", "lu", "lupin", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "mba", "mc", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "mg", "mh", "miami", "microsoft", "mil", "mini", "mk", "ml", "mls", "mm", "mma", "mn", "mo", "mobi", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "montblanc", "mormon", "mortgage", "moscow", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "mt", "mtn", "mtpc", "mtr", "mu", "museum", "mutual", "mutuelle", "mv", "mw", "mx", "my", "mz", "na", "nadex", "nagoya", "name", "natura", "navy", "nc", "ne", "nec", "net", "netbank", "network", "neustar", "new", "news", "nexus", "nf", "ng", "ngo", "nhk", "ni", "nico", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "nowruz", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "office", "okinawa", "om", "omega", "one", "ong", "onl", "online", "ooo", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ovh", "pa", "page", "pamperedchef", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pe", "pet", "pf", "pg", "ph", "pharmacy", "philips", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pohl", "poker", "porn", "post", "pr", "praxi", "press", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "re", "read", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "ricoh", "rio", "rip", "ro", "rocher", "rocks", "rodeo", "room", "rs", "rsvp", "ru", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scor", "scot", "sd", "se", "seat", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shouji", "show", "shriram", "si", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sm", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "st", "stada", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tk", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "us", "uy", "uz", "va", "vacations", "vana", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "vision", "vista", "vistaprint", "viva", "vlaanderen", "vn", "vodka", "volkswagen", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "wme", "wolterskluwer", "work", "works", "world", "ws", "wtc", "wtf", "xbox", "xerox", "xihuan", "xin", "कॉम", "セール", "佛山", "慈善", "集团", "在线", "한국", "点看", "คอม", "ভারত", "八卦", "موقع", "公益", "公司", "网站", "移动", "我爱你", "москва", "қаз", "онлайн", "сайт", "联通", "срб", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "购物", "クラウド", "ભારત", "भारत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "امارات", "بازار", "الاردن", "موبايلي", "بھارت", "المغرب", "ابوظبي", "السعودية", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ελ", "世界", "書籍", "ਭਾਰਤ", "网址", "닷넷", "コム", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"];
  return module.exports;
});

System.registerDynamic("npm:tlds@1.111.0.js", ["npm:tlds@1.111.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:tlds@1.111.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:my-name-is-url@1.0.0/dist/regex.js", ["npm:tlds@1.111.0.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _tlds = $__require('npm:tlds@1.111.0.js');
  var _tlds2 = _interopRequireDefault(_tlds);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var validTlds = _tlds2.default.concat(['local', 'dev']).join('|');
  var escapeChar = '\\';
  var notWhitespaceOrComma = '[^' + escapeChar + 's,]';
  var notWhitespaceCommaOrDot = '[^' + escapeChar + 's,.]';
  var WhitespaceCommaDotOrEndOfLine = '[' + escapeChar + 's,.]|$';
  var number = '[0-9]';
  var hostname = '(' + notWhitespaceOrComma + '*' + escapeChar + '.(' + validTlds + '))';
  var ip = '(' + number + '{1,3}' + escapeChar + '.){3}' + number + '{1,3}';
  var optionalPortNumber = '(:' + number + '+)?';
  var optionalSlash = '(' + escapeChar + '/(' + notWhitespaceCommaOrDot + '*)?)?';
  var endsWithButDontMatch = '(?=' + WhitespaceCommaDotOrEndOfLine + ')';
  var regex = '(localhost|' + hostname + '|' + ip + ')' + optionalPortNumber + optionalSlash + endsWithButDontMatch;
  exports.default = new RegExp(regex, 'gi');
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:my-name-is-url@1.0.0/dist/my-name-is-url.js", ["npm:my-name-is-url@1.0.0/dist/parser.js", "npm:my-name-is-url@1.0.0/dist/regex.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  var _parser = $__require('npm:my-name-is-url@1.0.0/dist/parser.js');
  var _parser2 = _interopRequireDefault(_parser);
  var _regex = $__require('npm:my-name-is-url@1.0.0/dist/regex.js');
  var _regex2 = _interopRequireDefault(_regex);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var Urls = function Urls() {
    var text = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    return new _parser2.default(text);
  };
  Urls.regex = _regex2.default;
  exports.default = Urls;
  module.exports = exports['default'];
  return module.exports;
});

System.registerDynamic("npm:my-name-is-url@1.0.0.js", ["npm:my-name-is-url@1.0.0/dist/my-name-is-url.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:my-name-is-url@1.0.0/dist/my-name-is-url.js');
  return module.exports;
});

System.registerDynamic("npm:escape-html@1.0.3/index.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var matchHtmlRegExp = /["'&<>]/;
  module.exports = escapeHtml;
  function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);
    if (!match) {
      return str;
    }
    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escape = '&quot;';
          break;
        case 38:
          escape = '&amp;';
          break;
        case 39:
          escape = '&#39;';
          break;
        case 60:
          escape = '&lt;';
          break;
        case 62:
          escape = '&gt;';
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escape;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  return module.exports;
});

System.registerDynamic("npm:escape-html@1.0.3.js", ["npm:escape-html@1.0.3/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:escape-html@1.0.3/index.js');
  return module.exports;
});

System.register('src/main.js', ['npm:my-name-is-url@1.0.0.js', 'npm:escape-html@1.0.3.js'], function (_export) {
  'use strict';

  var Urls, escape, input, output;

  function checkUrls() {
    var parsedUrls = Urls(escape(input.value)).filter(function (url) {
      return '<span class="url">' + url + '</span>';
    });
    output.innerHTML = parsedUrls + ' ';
  }
  return {
    setters: [function (_npmMyNameIsUrl100Js) {
      Urls = _npmMyNameIsUrl100Js['default'];
    }, function (_npmEscapeHtml103Js) {
      escape = _npmEscapeHtml103Js['default'];
    }],
    execute: function () {
      input = document.querySelector('.input');
      output = document.querySelector('.output');
      checkUrls();
      input.addEventListener('input', checkUrls);
    }
  };
});
//# sourceMappingURL=bundle.js.map