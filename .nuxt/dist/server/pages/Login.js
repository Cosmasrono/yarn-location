exports.ids = [10];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("59658890", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_27416a15_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_27416a15_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_27416a15_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_27416a15_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_27416a15_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{font-family:\"Quantico\",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Login.vue?vue&type=template&id=27416a15&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8\">", "</div>", [_vm._ssrNode("<div class=\"mx-auto max-w-lg\">", "</div>", [_vm._ssrNode("<h1 class=\"text-center text-2xl font-bold text-indigo-600 sm:text-3xl\">\n        Welcome Back :)\n      </h1> <h1 class=\"text-center text-2xl font-bold text-indigo-600 sm:text-3xl\">\n        Track Your Buddy\n      </h1> <p class=\"mx-auto mt-4 max-w-md text-center text-gray-500\">\n        With Just a single token you can track your Buddy! Right from your comfort Zone!\n      </p> <div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.user) + " Logged In!\n      ") + "</div> <div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">\n        You're be redirected hold tight!\n      </div> <div role=\"alert\" class=\"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.err ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.err) + "!\n      ") + "</div> "), _vm._ssrNode("<form action class=\"mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl\">", "</form>", [_vm._ssrNode("<p class=\"text-lg font-medium\">Sign in to your account</p> <div><label for=\"email\" class=\"text-sm font-medium\">Email</label> <div class=\"relative mt-1\"><input type=\"email\" id=\"email\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100\"> <span class=\"absolute inset-y-0 right-4 inline-flex items-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5 text-gray-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207\"></path></svg></span></div></div> <div><label for=\"password\" class=\"text-sm font-medium\">Password</label> <div class=\"relative mt-1\"><input type=\"password\" id=\"password\" placeholder=\"Enter password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100\"> <span class=\"absolute inset-y-0 right-4 inline-flex items-center\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-5 w-5 text-gray-400\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"></path> <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z\"></path></svg></span></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + _vm._ssrClass("block w-full rounded-lg px-5 py-3 text-sm font-medium text-white", _vm.loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600') + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? "Loading..." : "Sign In") + "\n        ") + "</button> "), _vm._ssrNode("<p class=\"text-center text-sm text-gray-500\">", "</p>", [_vm._ssrNode("\n          No account?\n          "), _c('Nuxt-Link', {
    staticClass: "underline",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Sign up")])], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Login.vue?vue&type=template&id=27416a15&

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Login.vue?vue&type=script&lang=js&

/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "Register",
  data() {
    return {
      email: "",
      user: "",
      password: "",
      warn: "",
      err: "",
      loading: false
    };
  },
  components: {},
  methods: {
    async submit() {
      const supabase = Object(supabase_js_["createClient"])("https://swocaqwllmwkocyhqnhm.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI');
      if (this.password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }
      this.loading = true;
      const {
        data,
        error
      } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password
      });
      if (error) {
        this.err = error.message;
        this.loading = false;
        console.log(error.message);
      } else {
        this.user = data.user.email;
        setTimeout(() => {
          this.$router.push("/Category");
          this.loading = false;
        }, 2000);

        //this.$router.push("/Login");
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2eb83b8a"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Login.js.map