((typeof self !== 'undefined' ? self : this)["webpackJsonpfretful"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpfretful"] || []).push([[2],{

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('some');
var USES_TO_LENGTH = arrayMethodUsesToLength('some');

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "aec5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_String_vue_vue_type_style_index_0_id_5a26d5ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_String_vue_vue_type_style_index_0_id_5a26d5ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_String_vue_vue_type_style_index_0_id_5a26d5ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_String_vue_vue_type_style_index_0_id_5a26d5ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "d7b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42cf866e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/String.vue?vue&type=template&id=5a26d5ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"string"},[_c('Fret',{attrs:{"isMuted":_vm.plot.includes('x')}},[_c('Note',_vm._b({attrs:{"note":_vm.string,"isActive":_vm.plot.includes('r'),"isNeck":""}},'Note',{ instance: _vm.instance },false))],1),_vm._l((_vm.chromaticScale),function(note,index){return _c('Fret',_vm._b({key:index,attrs:{"number":_vm.startingFret + index,"isHighlighted":_vm.plotContainsNote(note)}},'Fret',{ note: note },false),[(_vm.plotContainsNote(note))?_c('Note',_vm._b({attrs:{"highlight":note === _vm.highlight || note.includes(_vm.highlight),"isRoot":_vm.root === note,"plotNote":_vm.plotNote(note),"finger":_vm.plotFinger(note)}},'Note',{
        instance: _vm.instance,
        root: _vm.root,
        note: note,
        groupedByColor: _vm.groupedByColor,
        highlightRoot: _vm.highlightRoot,
        linkAccidentals: _vm.linkAccidentals,
        display: _vm.display
      },false)):_vm._e()],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/String.vue?vue&type=template&id=5a26d5ca&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("2909");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/String.vue?vue&type=script&lang=js&













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
/* harmony default export */ var Stringvue_type_script_lang_js_ = ({
  name: 'String',
  data: function data() {
    return {
      notes: ['a', ['a#', 'bb'], 'b', 'c', ['c#', 'db'], 'd', ['d#', 'eb'], 'e', 'f', ['f#', 'gb'], 'g', ['g#', 'ab']],
      intervals: ['a', ['a#', 'bb'], 'b', 'c', ['c#', 'db'], 'd', ['d#', 'eb'], 'e', 'f', ['f#', 'gb'], 'g', ['g#', 'ab']],
      chords: {
        major: 'r 3 5',
        minor: 'r 3b 5',
        diminished: 'r 3b 5b',
        augmented: 'r 3 5#'
      },
      scales: {
        major: 'r 2 3 4 5 6 7'
      }
    };
  },
  props: {
    instance: {
      type: Number
    },
    highlight: {
      type: Boolean,
      default: false
    },
    string: {
      type: String,
      default: 'e'
    },
    root: {
      type: String,
      default: 'c'
    },
    length: {
      type: Number,
      default: 12
    },
    startingFret: {
      type: Number,
      default: 1
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
    },
    plot: {
      type: String,
      default: 'c d e f g a b'
    },
    display: {
      type: String,
      default: 'notes'
    }
  },
  computed: {
    plotNotes: function plotNotes() {
      return this.plot.split(' ');
    },
    chromaticScale: function chromaticScale() {
      var _this = this;

      var octaves = Math.ceil(this.length / 12);
      var startsWithAccidental = this.string.length === 2;
      var index = this.notes.findIndex(function (n) {
        return startsWithAccidental ? String(n).includes(_this.string) : n === _this.string;
      });
      var indexDisplaced = index + this.startingFret === this.notes.length ? 0 : index + this.startingFret;
      var base = [].concat(Object(toConsumableArray["a" /* default */])(this.notes.slice(indexDisplaced)), Object(toConsumableArray["a" /* default */])(this.notes.slice(0, indexDisplaced)));

      var scale = Object(toConsumableArray["a" /* default */])(base);

      if (octaves > 1) {
        for (var o = 0; o < octaves; o++) {
          scale.push.apply(scale, Object(toConsumableArray["a" /* default */])(base));
        }
      }

      return scale.splice(0, this.length);
    }
  },
  methods: {
    plotContainsNote: function plotContainsNote(note) {
      var isNoteAccidental = Array.isArray(note);
      return this.plotNotes.some(function (_n) {
        var n = _n.split(':')[0];

        var isPlottedNoteAccidental = n.length === 2;

        if (isNoteAccidental && isPlottedNoteAccidental) {
          return note.includes(n);
        }

        return n === note;
      });
    },
    plotNoteIndex: function plotNoteIndex(note) {
      var isNoteAccidental = Array.isArray(note);
      return this.plotNotes.findIndex(function (_n) {
        var n = _n.split(':')[0];

        var isPlottedNoteAccidental = n.length === 2;

        if (isNoteAccidental && isPlottedNoteAccidental) {
          return note.includes(n);
        }

        return n === note;
      });
    },
    plotNote: function plotNote(note) {
      var plotNoteIndex = this.plotNoteIndex(note);
      return this.plotNotes[plotNoteIndex].split(':')[0];
    },
    plotFinger: function plotFinger(note) {
      var plotNoteIndex = this.plotNoteIndex(note);
      var finger = this.plotNotes[plotNoteIndex].split(':')[1];
      return Number(finger) || null;
    }
  },
  components: {
    Fret: function Fret() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "c809"));
    },
    Note: function Note() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "3723"));
    }
  }
});
// CONCATENATED MODULE: ./src/components/String.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Stringvue_type_script_lang_js_ = (Stringvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/String.vue?vue&type=style&index=0&id=5a26d5ca&lang=scss&scoped=true&
var Stringvue_type_style_index_0_id_5a26d5ca_lang_scss_scoped_true_ = __webpack_require__("aec5");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/String.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Stringvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5a26d5ca",
  null
  
)

/* harmony default export */ var components_String = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=fretful.common.2.js.map