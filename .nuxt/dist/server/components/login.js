exports.ids = [17];
exports.modules = {

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=26a5a67a
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"login-form"},[_vm._ssrNode("<form><input type=\"email\" name=\"user-name\" placeholder=\"Username\"> <input type=\"password\" name=\"user-password\" placeholder=\"Password\"> <div class=\"button-box\"><div class=\"login-toggle-btn\"><input type=\"checkbox\"> <label>Remember me</label></div> <button type=\"submit\">Login</button></div></form>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=26a5a67a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js
/* harmony default export */ var Loginvue_type_script_lang_js = ({methods:{setEmail(e){this.email=e.target.value;},setPassword(e){this.password=e.target.value;},login(e){e.preventDefault();fetch('https://api.cheparo.com/users/login',{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({email:this.email,password:this.password})}).then(async res=>{if(res.ok){const body=await res.json();localStorage.setItem('user',JSON.stringify(body));window.location="/";}else{throw"Incorrect Login Details";}}).catch(err=>{alert(err);});}},mounted(){const user=localStorage.getItem('user');if(user)window.location='/my-account';}});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Loginvue_type_script_lang_js = (Loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63ed3e8a"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map