define(["classnames","react","rendering-engine-api","z-shop-event-bus"],(function(t,n,e,r){return(self.renderingEngineWebpackJsonp=self.renderingEngineWebpackJsonp||[]).push([[23093],{2623:function(t){t.exports={id:"d7841c1aaff9cd1facaf6924d7d68162f5381d8aafdc83cd4dfb6f43f19b2504"}},18885:function(t,n,e){"use strict";function r(t,n){return"en-GB"===t&&"01924c48-49bb-40c2-9c32-ab582e6db6f4"===n?"en-DE":t}function o(t){const{host:n,toLang:e,fromLang:r,isDefaultLang:o,pathname:c,samePathLanguageSwitch:i,queryString:u,salesChannelConfig:a}=t;if(!!!a.config.hosts.find((t=>{var n,r;return(null==(r=t.default_language)||null==(n=r.split("-"))?void 0:n[0])===e}))){const t=new URL("https://"+n+(i?""+c+u:""));return t.searchParams.set("_rfl",r),t.toString()}const s=function(t,n,e,r){let o;o=/^m(-\w{2})?/.test(t)?/\.release\./.test(t)?r?t.replace(/^m(-\w{2})?-/,"m-"):t.replace(/^m(-\w{2})?-/,"m-"+n+"-"):r?t.replace(/^m(-\w{2})?/,"m"):t.replace(/^m(-\w{2})?/,"m-"+n):r?t.replace(/^\w{2}(?!w)/,"www"):t.includes("www")?t.replace(/^www/,n):t.replace(e,n);return o}(n,e,r,o);if(i){const t=new URL("https://"+s+c+u);return t.searchParams.set("_rfl",r),t.searchParams.delete("lang"),t.toString()}return"https://"+s+"/?_rfl="+r}function c(t,n){return"1"===t&&"en-GB"===n?"101":"21"===t&&"it-CH"===n?"220":t}e.d(n,{KC:function(){return r},S1:function(){return c},kS:function(){return o}})},80801:function(t,n,e){"use strict";e.d(n,{KH:function(){return c},RB:function(){return u},Vy:function(){return i}});e(85959);var r=e(21775),o=e.n(r);const c="REPORT_DIALOG$SHOW_REPORT_DIALOG_EVENT",i="https://report-content.zalando.com/",u=t=>{o().trigger(c,t)}},56603:function(){window.__RENDERING_ENGINE_TRANSLATION_KEYS__={...window.__RENDERING_ENGINE_TRANSLATION_KEYS__,product_report:["report.content.entry.point","report.content.introduction.faq.cta.url","report.content.introduction.products.body.faq.url","report.content.introduction.products.body.faq2.url","report.content.introduction.products.body.faq3.url"]}},68269:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var r=e(85959),o=e(32740),c=e(29443),i=e(45259),u=e(89862);var a=e(2623),s=e(18885);__("report.content.introduction.faq.cta.url"),__("report.content.introduction.products.body.faq.url"),__("report.content.introduction.products.body.faq2.url"),__("report.content.introduction.products.body.faq3.url");const d="PRE_OWNED";var l=e(80801),f=e(25277);const p=(t,n,e)=>l.Vy+"?rfl="+e+"&url="+t+"&content="+n;var _=(0,o.tile)().withQueries((t=>({data:{query:a,variables:{id:t.entity.id}}}))).withTracking((t=>({def:c.def,context:{id:t.entity.id}}))).withProcessDependencies((t=>{if(!t.data||!t.data.product)return{action:"error",message:"Invalid product"};const{product:n}=t.data;return{action:"render",data:n}})).withRender((t=>{const{data:n,tools:e,context:o}=t,c=(0,s.KC)(o.locale,o.salesChannelConfig.id),a=r.useRef(null);return r.createElement(f.Q,{ref:a,onClick:()=>{var t,r;(t=>{const n={name:u.bD,context:{customLabel:"report product",customCategory:"product detail page",customActionSuffix:"report"}};t.track(n)})(e.tracking),(0,l.RB)({reportUrl:p(null==n?void 0:n.uri,(t=n,(null==t||null==(r=t.condition)?void 0:r.kind)===d?d:(null==t?void 0:t.contentOwner)||""),c),isMobile:!!o.isMobile,focusRef:a})},label:__("report.content.entry.point"),icon:r.createElement(i.A,{icon:"Flag"}),size:"small",multiline:!0})}))},30812:function(n){"use strict";n.exports=t},85959:function(t){"use strict";t.exports=n},32740:function(t){"use strict";t.exports=e},21775:function(t){"use strict";t.exports=r}},function(t){var n=function(n){return t(t.s=n)};return t.O(0,[29674],(function(){return n(56603),n(68269)})),t.O()}])}));
//# sourceMappingURL=https://zalando.de/dev/source-maps/product_report/index-5ca6504e9e6f428f4740.map