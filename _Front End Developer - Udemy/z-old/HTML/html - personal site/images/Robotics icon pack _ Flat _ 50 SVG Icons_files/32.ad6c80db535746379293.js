(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(24),r=n(10),l=n(8),i=n(5),o=n(16),c=n(34),u=n(0),d=n(7),s=n(35),m=n(3),h=function(){function e(){}return e.init=function(){this.setCheckedPackviewFilterInput(),this.setCheckedPopoverEquivalentsInput(),this.setDefaultMostDownloadPage(),this.setDefaultLatestIconsPage(),this.searchInPack(),this.sendEventScrollSearchRelatedPack(),this.handleFiltersEvents()},e.handleFiltersEvents=function(){this.loadPackEquivalent(),this.handleFilterOrder(),this.queryStringToForm(),this.setFilterEquivalences(),this.setCookieFlaticonSelection(),this.handleSortByTitle()},e.setCheckedPackviewFilterInput=function(){var e=this,t=this.packId&&this.packId.value?this.allPackviewFilterInputs.find(function(t){var n;return t.value===(null==(n=e.packId)?void 0:n.value)}):null;this.allPackviewFilterInputs.length>0&&(this.packId=document.getElementById("pack_id")),t&&(t.checked=!0)},e.setCheckedPopoverEquivalentsInput=function(){var e=this.popoverEquivalentsElement&&this.mainsearchStyleIdElement?this.popoverEquivalentsElement.querySelector('input[data-styleid="'+this.mainsearchStyleIdElement.value+'"]'):null;e&&(e.checked=!0)},e.setInputParameter=function(t,n){e.searchFormCss=document.querySelector("section.search-holder form"),e.searchFormCss&&document.getElementById("main-search-"+t)&&(document.getElementById("main-search-"+t).value=n)},e.changeRelatedLinks=function(){var t=Array.from(document.querySelectorAll(".related-search a"));t.length>0&&t.forEach(function(t){var n=t.href.replace(/\?(.)*/,"");t.href=""+n+e.formToQuerystring()})},e.formToQuerystring=function(){var t="",n=["search-type","search-group"],a=document.querySelector(".main_search_bar");if(a){var r=a.querySelectorAll("input"),l=[];r.length&&(r.forEach(function(t){n.indexOf(t.name)&&e.pushFiltersInput(l,t)}),l.length>0&&(t="?"+l.join("&")))}return t},e.pushFiltersInput=function(e,t){return e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)),e},e.loadPackEquivalent=function(){var e=this;this.allPackviewFilterInputs.forEach(function(t){t.addEventListener("click",function(t){var n,a=t.target,r=a.value,l=a.dataset,i=l.icontype,c=l.dropdown,u=l.stylelink,d=l.stylename,s=l.styleid,m=(l.licenselink,l.premium),h=null==(n=document.querySelector(".pack-view__header--title span.title"))?void 0:n.textContent,p=document.querySelector("h1.pack-view__header--title i"),f=document.querySelector(".tag-field__item"),v=document.querySelector(".author .style-link"),y=document.getElementById("form-download-pack"),k=(document.querySelector(".sidebar__download__buttons > div"),document.getElementById("pack-lincense"),document.querySelector(".btn-pattern")),g=document.querySelector(".pack-view .style-link a");h&&c&&e.handlePackEquivalentH1(h,c),p&&m&&e.handlePackEquivalentIcon(p,m),f&&s&&c&&e.handlePackEquivalentSearchStyleItem(f,s,c),v&&u&&c&&e.handlePackEquivalentHeaderBreadcrumb(v,u,c),y&&r&&m&&e.handlePackEquivalentDownloadForm(y,r,m),k&&m&&e.handlePackEquivalentPatternButton(k,m),g&&u&&d&&s&&e.handlePackEquivalentStyle(g,u,d,s),r&&i&&e.handlePackEquivalentgetIcons(r,i),e.doSubmit=1,e.axSearch(0),o.a.callModalLicense(),o.a.callModalAttribution()})})},e.handlePackEquivalentH1=function(e,t){var n=document.querySelector(".pack-view__header--title span.title"),r=document.querySelector(".pack-view__header--title span.title-style");n&&(n.innerHTML=Object(a.a)(e)),r&&(r.innerHTML=Object(a.a)(t))},e.handlePackEquivalentIcon=function(e,t){e&&e.classList.remove("icon","icon--premium","flaticon-selection"),"1"==t&&e.classList.add("icon","icon--premium")},e.handlePackEquivalentSearchStyleItem=function(e,t,n){e&&(e.dataset.value=t,e.innerHTML=messages.filters.style+": "+n+' <span class="remove">×</span>',this.setInputParameter("style_id",t))},e.handlePackEquivalentHeaderBreadcrumb=function(e,t,n){if(e&&void 0!==e){var a=e.querySelector(".style");e.href=t,a&&(a.innerHTML=n)}},e.handlePackEquivalentDownloadForm=function(e,t,n){if(null!=e&&void 0!==e){var a=document.querySelector('#form-download-pack [name="pack_id"]'),r=document.querySelector(".btn-download-pack"),l=document.querySelector('#form-download-pack [name="premium"]');a&&(a.value=t),r&&(r.dataset.pack=t),l&&(l.value=n)}},e.handlePackEquivalentPatternButton=function(e,t){e&&("1"!=t||m.a.isPremium()?t&&!m.a.isPremium()&&(e.removeAttribute("disabled"),e.classList.remove("disabled")):(e.setAttribute("disabled","disabled"),e.classList.add("disabled")))},e.handlePackEquivalentStyle=function(e,t,n,a){if(null!=e){var r=document.querySelector(".pack-view .style-link .btn--bookmark");e.href=t,e.innerHTML=n,r&&(r.dataset.elementid=a)}},e.handlePackEquivalentgetIcons=function(e,t){var n="sticker"===t?"/ajax/hex/get_stickers_by_pack_id/":"/ajax/hex/get_icons_by_pack_id/";"undefined"!=typeof GR_LANGUAGE&&["en","es"].includes(GR_LANGUAGE)?INFINITY.axScript=n+e:INFINITY.axScript="/"+GR_LANGUAGE+n+e},e.axSearch=function(e){if(1==this.doSubmit&&INFINITY){var t;this.doSubmit=0,e=e?1:e;var n,a=document.getElementById("form_filters"),l=document.querySelector("section.pagination"),i={},o=[];INFINITY.activatedInfinity=1,INFINITY.initPage=1,e&&l&&l.classList.add("hidden");var d=this.serializeArray(a).filter(function(e){return"style"!==e.name});for(var m in d)if(d.hasOwnProperty(m)){if("0"==d[m].value||!d[m].value.length)continue;if("all"==d[m].value)continue;d[m].name.includes("-")&&(d[m].name=d[m].name.split("-").pop()),d[m].value!==c.b.icon&&(i[d[m].name]=d[m].value)}for(var h in i)o.push(h+"="+i[h]);n=o.join("&"),n=Object(r.a)(n);var p=""+BASE_URL+window.location.pathname.slice(1),f=(p=Object(r.g)(p)).split("/").pop();if("packs"==f&&"premium=1"==n||Object(r.c)(p,"",n),"search"==f||"resultados"==f){var v=APP_URL+"ajax/packs/slider?"+n;this.loadRelatedPacks(v)}INFINITY.initPage=INFINITY.topPage=INFINITY.bottomPage=1,u.e.window.scroll(0,0),INFINITY.cache_items=[],INFINITY.setUrl=!1,null==(t=document.getElementById("pagination-spinner"))||t.classList.remove("hidden"),INFINITY.infinityLoaderBtn(INFINITY.axScript,"clear"),s.a.run()}},e.loadRelatedPacks=function(e){Object(d.a)(e,{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest","Content-type":"application/json"},withCredentials:!0}).then(function(e){var t=e.items||[],n="";if("pack-search"!==u.e.view.section||t.length||window.location.reload(),t.length>1){var a=u.e.Handlebars.tag("pack-box");t.forEach(function(e){n+=a(e)})}if(document.querySelectorAll("section.search-pack-result").length){var r,l=document.querySelector("section.search-pack-result .box-scroll");null==(r=document.querySelector("section.search-pack-result"))||r.classList.toggle("hidden",t.length<2),l&&(l.innerHTML=n)}})},e.setDefaultMostDownloadPage=function(){window.location.pathname==messages.url.most_download&&this.orderPopularityInput&&(this.orderPopularityInput.checked=!0)},e.setDefaultLatestIconsPage=function(){window.location.pathname==messages.url.latest_icons&&this.orderDateInput&&(this.orderDateInput.checked=!0)},e.sendEventScrollSearchRelatedPack=function(){var e;null==(e=document.querySelector(".search-pack-result .box-scroll article a"))||e.addEventListener("click",function(){var e,t=null!=(e=document.querySelector(".search-pack-result div.box-scroll"))&&e.scrollLeft?1:0;ga("send","event","Search","Related Pack",t)})},e.handleFilterOrder=function(){var e=this;Array.from(document.querySelectorAll("#form_filters input")).forEach(function(t){t.addEventListener("change",function(t){var n=t.target;e.setSearchGroupFilter(n),e.setStyleFilters(n),e.setChoiceFilter(n),e.setCraftFilter(n),e.redirectPagesOrderDefault(n),e.changeRelatedLinks(),e.setFilterEquivalences(),e.doSubmit=1,e.axSearch()})})},e.setSearchGroupFilter=function(e){if("search-group"==e.name){var t=document.querySelector("form[name=search-form] input[name=search-group]");"packs"==e.value?t.checked=!0:t.checked=!1}},e.setStyleFilters=function(e){if("style"==e.name||"shape"==e.name){if(e.dataset.style&&e.dataset.type){var t=document.querySelector('#form_filters input[name="main-'+e.dataset.type+'"]');this.setInputParameter(e.dataset.type,e.dataset.style),t&&(t.value=e.dataset.style)}}else this.setInputParameter(e.name,e.value)},e.setChoiceFilter=function(e){if("choice"==e.name&&0==e.checked){var t=document.querySelector('input[name="choice"][type="hidden"]');t&&(t.value="0")}},e.setCraftFilter=function(e){if("craft"==e.name&&0==e.checked){var t=document.querySelector('input[name="craft"][type="hidden"]');t&&(t.value="0")}else i.a.send("ga4dl",{event:"ga4event",event_name:"filter_selection",filter_name:"merchandising_license: true"})},e.redirectPagesOrderDefault=function(t){if(t.checked)if(t.getAttribute("data-value")){if("order_by"==t.name){var n=document.querySelector(".dropdown-popover-order");if(e.getQueryString(),t.dataset.value&&e.redirectLastIcons(t.dataset.value),t.dataset.value&&e.redirectTopIcons(t.dataset.value),n&&"hidden"===window.getComputedStyle(n).visibility)return e.doSubmit=1,void e.axSearch()}}else ga("send","event","Search","Flaticon Selection")},e.getQueryString=function(){this.queryString=this.queryString?this.queryString:"",window.location.search&&(this.queryString=window.location.search,this.queryString=this.queryString.replace(/order_by=(\d)*/g,"").replace(/&&/,"&").replace(/^&|&$/,"").replace(/\?&/,"?"),this.queryString=this.queryString.length>1?this.queryString:"")},e.redirectLastIcons=function(e){"date"!=e||0!=window.location.pathname.indexOf(messages.url.most_download)&&3!=window.location.pathname.indexOf(messages.url.most_download)||(window.location.href=""+APP_URL.replace(/\/$/g,"")+messages.url.latest_icons+this.queryString)},e.redirectTopIcons=function(e){"popularity"!=e||0!=window.location.pathname.indexOf(messages.url.latest_icons)&&3!=window.location.pathname.indexOf(messages.url.latest_icons)||(window.location.href=""+APP_URL.replace(/\/$/g,"")+messages.url.most_download+this.queryString)},e.queryStringToForm=function(){var e={};window.location.search.slice(1).split("&").forEach(function(t){var n=t.split("="),r=n[0],l=decodeURIComponent(n[1]||"");-1==["word","license","order_by","style_id","family_id","author_id","category_id","pack_id","type"].indexOf(n[0])&&(n[0]=decodeURIComponent(Object(a.b)(n[0])||"error"),r=Object(a.b)(n[0])),e[r]=l;var i=Array.from(document.querySelectorAll("#form_filters input[name='"+r+"']"));void 0!==i&&i.length&&i.forEach(function(e){"radio"!=e.type&&"checkbox"!=e.type||e.name==r&&e.value==l.replace(" ","-")&&(e.checked=!0),"hidden"==e.type&&(e.value=l)});var o=Array.from(document.querySelectorAll("form.main_search_bar input[name='"+r+"']"));void 0!==o&&o.length&&o.forEach(function(e){"hidden"==e.type&&(e.value=l)})});var t=Array.from(document.querySelectorAll("#form_filters input[name=style]"));void 0!==t&&t.length&&t.forEach(function(e){"radio"==e.type&&""==e.id&&(e.checked=!0)})},e.setCookieFlaticonSelection=function(){var e;null==(e=document.querySelector("#form_filters .premium-advise button"))||e.addEventListener("click",function(){var e=document.querySelector("#form_filters .premium-advise");l.a.setItem("flaticon_selection","1",{expires:new Date((new Date).getTime()+36e5)}),e&&(e.style.display="none")})},e.searchInPack=function(){document.getElementById("input-search-in-pack")&&document.addEventListener("DOMContentLoaded",function(){var t,n=document.getElementById("input-search-in-pack"),a=document.querySelector(".search_in_pack_wrapper .reset-input"),r=document.querySelector("#form_filters #word");null==(t=n.parentNode)||t.insertBefore(a,n.nextSibling),n.addEventListener("awesomplete-selectcomplete",function(t){var n=t.target;r&&(r.value=n.value),e.doSubmit=1,e.axSearch()},!1),a.addEventListener("click",function(){r&&r.value.trim(),r&&(r.value=""),e.doSubmit=1,e.axSearch()},!1),n.addEventListener("keyup",function(t){var n=t.target,l=t.keyCode||t.charCode;if(8==l||46==l){if(""==r.value.trim()&&""==n.value)return;""==n.value&&a.click()}13==l&&(r.value=n.value.trim(),e.doSubmit=1,e.axSearch())},!1)})},e.serializeArray=function(e){var t=this,n=[];return Array.prototype.slice.call(e.elements).forEach(function(e){!e.name||e.disabled||["file","reset","submit","button"].indexOf(e.type)>-1||["checkbox","radio"].indexOf(e.type)>-1&&!e.checked||e.value===t.filtersValue.shape.linealColor&&n.find(function(e){return e.value===t.filtersValue.color.black})||e.value===t.filtersValue.shape.handDrawn&&n.find(function(e){return e.value===t.filtersValue.color.gradient})||n.push({name:e.name,value:e.value})}),n},e.handleSortByTitle=function(){if(document.querySelector(".sort-by")&&document.querySelector(".sort-by .popover-button span")){var e=document.querySelector(".sort-by .popover-button span");Array.from(document.querySelectorAll(".sort-by input")).forEach(function(t){t.addEventListener("change",function(t){var n;e&&(e.innerHTML=null==(n=t.target)?void 0:n.dataset.title)})})}},e.setFilterEquivalences=function(){var e,t,n,a,r,l,i=document.getElementById("shape-linealColor"),o=document.getElementById("shape-handDrawn"),c=document.getElementById("color-black"),u=document.getElementById("color-gradient"),d=document.getElementById("shape-all"),s=document.getElementById("color-all");(null==(e=document.getElementById("filters--shape"))||e.querySelectorAll("label").forEach(function(e){e.classList.remove("disabled")}),null==(t=document.getElementById("filters--colors"))||t.querySelectorAll("label").forEach(function(e){e.classList.remove("disabled")}),!0===(null==c?void 0:c.checked)&&i&&d)&&(null==(n=i.parentElement)||n.classList.add("disabled"),!0===i.checked&&(d.checked=!0));!0===(null==i?void 0:i.checked)&&c&&s&&(null==(a=c.parentElement)||a.classList.add("disabled"),!0===c.checked&&(s.checked=!0));!0===(null==u?void 0:u.checked)&&o&&d&&(null==(r=o.parentElement)||r.classList.add("disabled"),!0===o.checked&&(d.checked=!0));!0===(null==o?void 0:o.checked)&&u&&s&&(null==(l=u.parentElement)||l.classList.add("disabled"),!0===u.checked&&(s.checked=!0))},e}();h.allPackviewFilterInputs=Array.from(document.querySelectorAll(".pack-view__filters input")),h.packId=null,h.popoverEquivalentsElement=document.getElementById("popover-equivalents"),h.mainsearchStyleIdElement=document.getElementById("main-search-style_id"),h.doSubmit=1,h.searchFormCss=null,h.orderPopularityInput=document.getElementById("order_by-popularity"),h.orderDateInput=document.getElementById("order_by-date"),h.filtersValue={color:{black:"black",multicolor:"color",gradient:"gradient"},shape:{outline:"outline",fill:"fill",linealColor:"lineal-color",handDrawn:"hand-drawn"}},h.getFilter=function(e){return"0"===e.value&&!e.value.length||"all"===e.value||e.value===c.b.icon?null:e}}}]);
//# sourceMappingURL=32.ad6c80db535746379293.js.map