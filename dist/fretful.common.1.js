((typeof self !== 'undefined' ? self : this)["webpackJsonpfretful"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpfretful"] || []).push([[1],{

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "2b84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3723":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42cf866e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Note.vue?vue&type=template&id=aca983c6&scoped=true&
var Notevue_type_template_id_aca983c6_scoped_true_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isHidden)?_c('span',{staticClass:"note",class:( _obj = {
    'note--active' : _vm.isActive,
    'note--neck' : _vm.isNeck,
    'note--root' : _vm.isRoot && _vm.highlightRoot,
    'note--dimmed' : _vm.isDimmed,
    'note--link-accidentals' : _vm.linkAccidentals
  }, _obj['note--finger note--finger--' + this.finger] = this.finger, _obj['note--individual--' + this.$options.filters.toAccidentals(_vm.displayNote)] = _vm.groupedByColor, _obj ),on:{"mouseenter":function($event){return _vm.emitNote(_vm.displayNote)},"mouseleave":function($event){return _vm.emitNote(null)}}},[(_vm.display === 'notes')?[_c('span',[_vm._v(_vm._s(_vm._f("toAccidentals")(_vm._f("toUpperCase")(_vm.displayNote))))])]:(_vm.display === 'intervals')?[_c('span',[_vm._v(_vm._s(_vm._f("toAccidentals")(_vm._f("toUpperCase")(_vm.displayInterval))))])]:_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Note.vue?vue&type=template&id=aca983c6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("8a79");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42cf866e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=2fa4353c&
var Appvue_type_template_id_2fa4353c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Fretboard',{attrs:{"tuning":"e a d g","plot":['c:2 d:3', 'e:1 f:2 g:4', 'a:1 b:3 c:4'],"length":24}})],1)}
var Appvue_type_template_id_2fa4353c_staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=2fa4353c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&


//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    Fretboard: function Fretboard() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "1f3c"));
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_2fa4353c_render,
  Appvue_type_template_id_2fa4353c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./src/assets/sass/main.scss
var main = __webpack_require__("9299");

// CONCATENATED MODULE: ./src/main.js


/* ============
 * Styling
 * ============
 */


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
var $bus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// CONCATENATED MODULE: ./src/entities/intervals.js











var Notes = ['a', ['a#', 'bb'], 'b', 'c', ['c#', 'db'], 'd', ['d#', 'eb'], 'e', 'f', ['f#', 'gb'], 'g', ['g#', 'ab']];
var intervals = ['r', ['1#', '1b'], '2', ['2#', '3b'], '3', '4', ['4#', '5b'], '5', ['5#', '6b'], '6', ['6#', '7b'], '7']; // const chords = {
//   major: 'r 3 5',
//   minor: 'r 3b 5',
//   diminished: 'r 3b 5b',
//   augmented: 'r 3 5#'
// };

var scales = {
  blues: 'r 3b 4 5b 5 7b',
  major: 'r 2 3 4 5 6 7'
};

function _intervalsToIndexes(progression) {
  var scaleArr = progression.split(' ');
  var indexes = [];
  scaleArr.forEach(function (interval) {
    var startsWithAccidental = interval.length === 2;
    indexes.push(intervals.findIndex(function (i) {
      return startsWithAccidental ? String(i).includes(interval) : i === interval;
    }));
  });
  return indexes;
}

var intervals_getChromaticScale = function getChromaticScale(root) {
  var startsWithAccidental = root.length === 2;
  var index = Notes.findIndex(function (n) {
    return startsWithAccidental ? String(n).includes(root) : n === root;
  });
  return [].concat(Object(toConsumableArray["a" /* default */])(Notes.slice(index)), Object(toConsumableArray["a" /* default */])(Notes.slice(0, index)));
};
var getIntervalFromRoot = function getIntervalFromRoot(root, __note) {
  var chromatic = intervals_getChromaticScale(root);
  var note = Array.isArray(__note) ? __note[0] : __note;
  var isAccidental = note.length === 2;
  var index = chromatic.findIndex(function (n) {
    return isAccidental ? Array.isArray(n) && n.includes(note) : n === note;
  });
  return intervals[index];
};
var intervals_Scale = function Scale(root) {
  return {
    get chromatic() {
      var startsWithAccidental = root.length === 2;
      var index = Notes.findIndex(function (n) {
        return startsWithAccidental ? String(n).includes(root) : n === root;
      });
      return [].concat(Object(toConsumableArray["a" /* default */])(Notes.slice(index)), Object(toConsumableArray["a" /* default */])(Notes.slice(0, index)));
    },

    get blues() {
      var _this = this;

      return _intervalsToIndexes(scales.blues).map(function (i) {
        return _this.chromatic[i];
      });
    },

    get major() {
      var _this2 = this;

      return _intervalsToIndexes(scales.major).map(function (i) {
        return _this2.chromatic[i];
      });
    }

  };
};

var _resolveNote = function _resolveNote(_note, _accidental) {
  if (Array.isArray(_note)) {
    var accidental = _accidental === 'sharp' || _accidental === '#' ? 0 : 1;
    return _note[accidental];
  }

  return _note;
};

function Note(_note) {
  if (this instanceof Note) {
    var note = _note.toLowerCase(),
        isAccidental = note.length === 2,
        noteIndex = Notes.findIndex(function (n) {
      return isAccidental ? String(n).includes(note) : n === note;
    });

    this.note = Notes[noteIndex] || null;
    this.__ = {
      input: _note,
      chromatic: intervals_Scale(note).chromatic
    };
  } else {
    return new Note(_note);
  }
}

Note.prototype.sharpen = function () {
  var _steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var octaves = Math.floor(_steps / Notes.length + 1);
  var octaveIndex = _steps - Notes.length * (octaves - 1);
  this.note = _resolveNote(this.__.chromatic[octaveIndex], '#');
  return this;
};

Note.prototype.flatten = function () {
  var _steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var octaves = Math.ceil(_steps / Notes.length);
  var octaveIndex = Notes.length - (_steps - Notes.length * (octaves - 1));
  this.note = _resolveNote(this.__.chromatic[octaveIndex], 'b');
  return this;
};

Note.prototype.derive = function () {
  return {
    get triad() {
      return this.flatten();
    }

  };
};

Note.prototype.test = {
  get triad() {
    return 'teste';
  },

  get ya() {
    return this.note;
  }

};
var Notex = function Notex(_note) {
  var note = _note.toLowerCase();

  var chromatic = intervals_Scale(note).chromatic;
  return {
    sharpen: function sharpen() {
      var _steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var octaves = Math.floor(_steps / Notes.length + 1);
      var octaveIndex = _steps - Notes.length * (octaves - 1);
      return _resolveNote(chromatic[octaveIndex], '#');
    },
    flatten: function flatten() {
      var _steps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var octaves = Math.ceil(_steps / Notes.length);
      var octaveIndex = Notes.length - (_steps - Notes.length * (octaves - 1));
      return _resolveNote(chromatic[octaveIndex], 'b');
    },

    get sharp() {
      return this.sharpen(1);
    },

    get flat() {
      return this.flatten(1);
    },

    get scales() {
      return intervals_Scale(note);
    },

    get triad() {
      return {
        major: 'yes',
        minor: 'no'
      };
    },

    get chord() {
      return {
        major: 'yes',
        minor: 'no'
      };
    }

  };
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Note.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Notevue_type_script_lang_js_ = ({
  name: 'Note',
  data: function data() {
    return {
      isDimmed: false
    };
  },
  props: {
    instance: {
      type: Number
    },
    finger: {
      type: Number
    },
    display: {
      type: String,
      default: 'notes'
    },
    highlight: {
      type: Boolean,
      default: false
    },
    note: {
      type: [Array, String],
      default: 'c'
    },
    plotNote: {
      type: String,
      default: 'c'
    },
    root: {
      type: [Array, String],
      default: 'E'
    },
    isHidden: {
      type: Boolean,
      default: false
    },
    isNeck: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isRoot: {
      type: Boolean,
      default: false
    },
    groupedByColor: {
      type: Boolean,
      default: false
    },
    highlightRoot: {
      type: Boolean,
      default: true
    },
    linkAccidentals: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    toUpperCase: function toUpperCase(note) {
      if (note === '') {
        return '';
      }

      return note.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    toAccidentals: function toAccidentals(note) {
      if (note === '' || !note.length) {
        return '';
      }

      if (note.length === 1) {
        return note;
      }

      var flat = note.replace('b', '♭');
      var sharp = flat.replace('#', '♯');
      return sharp;
    }
  },
  methods: {
    emitNote: function emitNote(note) {
      $bus.$emit('mouseenter-note', {
        instance: this.instance,
        note: note
      });
    }
  },
  computed: {
    isNatural: function isNatural() {
      return !Array.isArray(this.note);
    },
    displayNote: function displayNote() {
      if (Array.isArray(this.note)) {
        var index = this.plotNote.endsWith('b') ? 1 : 0;
        return this.note[index];
      }

      return this.note;
    },
    interval: function interval() {
      return getIntervalFromRoot(this.root, this.note);
    },
    displayInterval: function displayInterval() {
      if (Array.isArray(this.interval)) {
        var index = this.plotNote.endsWith('b') ? 1 : 0;
        return this.interval[index];
      }

      return this.interval;
    }
  },
  created: function created() {
    var _this = this;

    $bus.$on('mouseenter-note', function (_ref) {
      var instance = _ref.instance,
          note = _ref.note;

      if (instance !== _this.instance) {
        return;
      }

      if (!_this.highlight) {
        if (note) {
          if (note === _this.displayNote) {
            _this.isDimmed = false;
          } else {
            _this.isDimmed = true;
          }
        } else {
          _this.isDimmed = false;
        }
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/Note.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Notevue_type_script_lang_js_ = (Notevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Note.vue?vue&type=style&index=0&id=aca983c6&lang=scss&scoped=true&
var Notevue_type_style_index_0_id_aca983c6_lang_scss_scoped_true_ = __webpack_require__("8e28");

// CONCATENATED MODULE: ./src/components/Note.vue






/* normalize component */

var Note_component = Object(componentNormalizer["a" /* default */])(
  components_Notevue_type_script_lang_js_,
  Notevue_type_template_id_aca983c6_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "aca983c6",
  null
  
)

/* harmony default export */ var components_Note = __webpack_exports__["default"] = (Note_component.exports);

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8a79":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "8e28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_style_index_0_id_aca983c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b84");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_style_index_0_id_aca983c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_style_index_0_id_aca983c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_style_index_0_id_aca983c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9299":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

}]);
//# sourceMappingURL=fretful.common.1.js.map