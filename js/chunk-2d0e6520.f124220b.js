(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6520"],{"97f2":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.result.images.small,alt:""}})]),a("div",{staticClass:"right"},[a("div",[t._v(t._s(t.result.original_title))])]),a("div",{staticClass:"conntent"},[a("p",[t._v(t._s(t.result.summary))])])])])},e=[],n={data:function(){return{result:{}}},created:function(){var t=this,s="https://bird.ioliu.cn/v2?url=",a="https://api.douban.com/v2/movie/subject/".concat(this.$route.params.id);axios.get(s+a).then(function(s){console.log(s),t.result=s.data,console.log(s.data)}).catch(function(t){console.log("失败")})}},c=n,l=a("2877"),o=Object(l["a"])(c,i,e,!1,null,"39a69a50",null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e6520.f124220b.js.map