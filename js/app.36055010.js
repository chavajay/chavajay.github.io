(function(){"use strict";var e={82:function(e,t,a){var r=a(9876),s=a(144),i=a(998),n=a(704),o=a(6190),l=a(4324),c=a(3059),d=a(8718),u=function(){var e=this,t=e._self._c;return t(i.Z,[t(n.Z,{attrs:{color:"#26A69A",elevation:"2",app:"",dark:""}},[t("span",{staticClass:"app-title heading-5 text-regular"},[e._v("CARRERA DE IMAGENES!")]),t(d.Z),t(o.Z,{attrs:{text:"",icon:"",to:{name:"homeView"}}},[t(l.Z,[e._v("mdi-home")])],1)],1),t(c.Z,[t("router-view")],1)],1)},h=[],p={name:"App",data:()=>({})},f=p,m=a(1001),v=(0,m.Z)(f,u,h,!1,null,null,null),g=v.exports,b=a(8345),E=a(9582),_=a(4886),w=a(266),y=a(5495),Z=a(1713),C=a(7808),S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"contein-search"},[t(C.Z,{staticClass:"search-input",attrs:{label:"Buscar imágenes",outlined:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(o.Z,{staticClass:"primary",attrs:{elevation:"0"},on:{click:e.dataFetch}},[e._v("Buscar")]),t(Z.Z,{staticClass:"image-grid"},e._l(e.filteredImages,(function(a){return t(w.Z,{key:a.id,attrs:{cols:"12",sm:"6",md:"4"}},[t(E.Z,{staticClass:"image-card",on:{click:function(t){return e.toggleLike(a)}}},[t(y.Z,{staticClass:"image",attrs:{src:a.url,"aspect-ratio":"1",contain:""}}),t(_.EB,{staticClass:"image-title"},[t("span",[e._v(e._s(a.title))]),t(o.Z,{staticClass:"like-button",attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.toggleLike(a)}}},[t(l.Z,{attrs:{color:a.liked?"red":"grey"}},[e._v(" "+e._s(a.liked?"mdi-heart":"mdi-heart-outline")+" ")])],1)],1)],1)],1)})),1),[t("div",[t("h1",[e._v("Carrera de Vendedores")]),t("div",{staticClass:"race-track"},[t("div",{staticClass:"runner",style:{left:e.runner1Position+"%"}},[e._v("Vendedor 1")]),t("div",{staticClass:"runner",style:{left:e.runner2Position+"%"}},[e._v("Vendedor 2")])]),t("button",{on:{click:e.startRace}},[e._v("Comenzar Carrera")])])]],2)},A=[],O=a(6154),P={data(){return{search:"",images:[{id:1,title:"Imagen 1",url:"https://via.placeholder.com/150",liked:!1},{id:2,title:"Imagen 2",url:"https://via.placeholder.com/150",liked:!1},{id:2,title:"Imagen 2",url:"https://via.placeholder.com/150",liked:!1},{id:2,title:"Imagen 2",url:"https://via.placeholder.com/150",liked:!1}]}},computed:{filteredImages(){return this.images.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase())))}},methods:{toggleLike(e){e.liked=!e.liked},async dataFetch(){const e=await O.Z.get(`https://www.googleapis.com/customsearch/v1?q=${this.search}&key=AIzaSyBnmEqRoPNf7vdqZ2h78mHe8VmBsRIuI04&cx=64a0ff48aa60342cb`);await e.data.items.map((e=>e.pagemap.cse_image[0].src))}}},k=P,x=(0,m.Z)(k,S,A,!1,null,null,null),R=x.exports,N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"card",on:{click:e.redirectToSearchImages}},[t("div",{staticClass:"card-header"},[e._v(" CARRERA DE IMAGENES ")]),t("div",{staticClass:"card-body"},[e._v(" Haz clic para ir a la página de búsqueda de imágenes ")])]),t("div",{staticClass:"card",on:{click:e.redirectToCreateVendedores}},[t("div",{staticClass:"card-header"},[e._v(" VENDEDORES ")]),t("div",{staticClass:"card-body"},[e._v(" Haz clic para ir a la página de ver / creación de vendedores ")])])])},V=[],L=(a(7658),{methods:{redirectToSearchImages(){this.$router.push("/search")},redirectToCreateVendedores(){this.$router.push("/sellers")}}}),M=L,j=(0,m.Z)(M,N,V,!1,null,null,null),B=j.exports,T=a(2373),D=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"conteiner-view"},[t("modal-create-sell",{attrs:{showModalSeller:e.showModalSeller},on:{sellerModalMethod:e.sellerModalMethod}}),t("div",{staticClass:"header-container"},[t("header-views",{attrs:{title:"Vendedores"}}),t(o.Z,{staticClass:"create-button",attrs:{elevation:"0"},on:{click:function(t){e.newSellerModal=!0}}},[e._v(" CREAR VENDEDOR ")])],1),t(E.Z,{staticClass:"table-conteiner",attrs:{elevation:"0"}},[t(_.EB,{staticClass:"title-table"},[t(C.Z,{attrs:{outlined:"","prepend-inner-icon":"mdi-magnify",label:"Buscar","hide-details":"",dense:"",placeholder:"Buscar"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(d.Z)],1),t("div",{staticClass:"data-table-permissions"},[t(T.Z,{staticClass:"table-permissions",attrs:{dense:"",items:e.items,headers:e.headers,search:e.search,"items-per-page":5}})],1)],1)],1)},I=[],z=a(7327),U=a(1929),$=a(6245);const q=new Headers;q.append("Content-Type","application/json");const K=()=>{const e=(0,$.Z)(localStorage.token),t=new Date(1e3*e.exp-3e5);if(t<new Date){localStorage.removeItem("token");const e=_e.currentRoute.path;_e.replace({path:"/login",query:{returnUrl:e}})}},H=async(e,t=!1)=>{try{t&&(K(),q.append("Authorization",`Basic ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const a=await fetch(e,{method:"GET",headers:q}),r=await a.json();if(q.delete("Authorization"),401===r.statusCode)throw new Error(r.body._embedded.detail[0]);return r}catch(a){return console.error(a),{}}},F=async(e,t,a=!1)=>{a&&(K(),q.append("Authorization",`Bearer ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const r=await fetch(e,{method:"POST",headers:q,body:JSON.stringify(t)});return q.delete("Authorization"),await r.json()},G=async(e,t,a=!1)=>{a&&(K(),q.append("Authorization",`Bearer ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const r=await fetch(e,{method:"POST",body:t});return q.delete("Authorization"),await r.json()},J=async(e,t,a=!1)=>{a&&(K(),q.append("Authorization",`Bearer ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const r=await fetch(e,{method:"PUT",headers:q,body:JSON.stringify(t)});return q.delete("Authorization"),await r.json()},Q=async(e,t=!1)=>{t&&(K(),q.append("Authorization",`Bearer ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const a=await fetch(e,{method:"DELETE",headers:q});return q.delete("Authorization"),await a.json()},W=async(e,t,a=!1)=>{a&&(K(),q.append("Authorization",`Bearer ${{NODE_ENV:"production",VUE_APP_SELLER:"https://api.alegra.com/",BASE_URL:"/"}.TOKEN}`||""));const r=await fetch(e,{method:"PATCH",headers:q,body:JSON.stringify(t)});return q.delete("Authorization"),await r.json()},X={get:H,post:F,put:J,postFile:G,patch:W,delete:Q},Y="https://api.alegra.com/",ee={async getAll(){try{const e=await X.get(`${Y}api/v1/sellers`).then((e=>e.map((e=>({id:e.id,name:e.name,identification:e.identification,observations:e.observations,status:e.status})))));return e}catch(e){return console.error("getAll Vendedores error",e),[]}},async createSeller(){try{const e={},t=await X.post(`${Y}api/v1/sellers`,e).then((e=>e.map((e=>({id:e.id,name:e.name,identification:e.identification,observations:e.observations,status:e.status})))));return t}catch(e){return console.error("getAll Vendedores error",e),[]}}},te=(0,r.Q_)("sellers",{state:()=>({sellers:[]}),getters:{getSeller(e){return e.sellers}},actions:{async fetchAllSeller(){this.sellers=await ee.getAll()}}});var ae=a(344),re=a(9930),se=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(re.Z,{attrs:{persistent:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t(E.Z,{staticClass:"card-delete"},[t(_.EB,{staticClass:"px-0 pt-0 title-medium title-medium-semibold"},[e._v(" Crear Vendedor ")]),t(Z.Z,[t(w.Z,[t(ae.Z,{staticClass:"paragraph-medium text-regular",attrs:{dense:"","persistent-hint":"","hide-details":"auto",label:"Nombre",outlined:""}})],1),t(w.Z,[t(ae.Z,{staticClass:"paragraph-medium text-regular",attrs:{dense:"","persistent-hint":"","hide-details":"auto",label:"Identificacion"}})],1),t(w.Z,[t(ae.Z,{staticClass:"paragraph-medium text-regular",attrs:{dense:"","persistent-hint":"","hide-details":"auto",label:"Observacion"}})],1),t(w.Z,[t(ae.Z,{staticClass:"paragraph-medium text-regular",attrs:{dense:"","persistent-hint":"","hide-details":"auto",label:"Status"}})],1)],1),t(d.Z),t(Z.Z,{staticClass:"btn-leave"},[t(o.Z,{attrs:{text:""}},[e._v(" Cancelar ")]),t(o.Z,{staticClass:"btn-create-leave",attrs:{text:""}},[e._v(" Crear ")])],1)],1)],1)},ie=[],ne=function(e,t,a,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i<3?s(n):i>3?s(t,a,n):s(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n};let oe=class extends U.w3{constructor(...e){super(...e),(0,z.Z)(this,"showModalSeller",void 0),(0,z.Z)(this,"rules",{names:e=>{const t=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;return t.test(e)||"El campo contiene caracteres no válidos"},required:e=>!!e||"Campo requerido",selectRequired:e=>e?.length>0||"Campo requerido"})}get active(){return this.showModalSeller}set active(e){this.$emit("sellerModalMethod",e)}};ne([(0,U.fI)()],oe.prototype,"showModalSeller",void 0),oe=ne([(0,U.wA)({components:{}})],oe);var le=oe,ce=le,de=(0,m.Z)(ce,se,ie,!1,null,null,null),ue=de.exports,he=function(e,t,a,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(i<3?s(n):i>3?s(t,a,n):s(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n};let pe=class extends U.w3{constructor(...e){super(...e),(0,z.Z)(this,"newSellerModal",!1),(0,z.Z)(this,"showModalSeller",!1),(0,z.Z)(this,"sellerSeleted",{id:"",name:"",identification:"",observations:"",status:""}),(0,z.Z)(this,"search",""),(0,z.Z)(this,"headers",[{text:"Nombre",value:"name"},{text:"Indentifacion",value:"identification"},{text:"Observacion",value:"observations"},{text:"Status",value:"status"},{text:"",value:"actions",sortable:!1,align:"end"}])}get items(){return this.seller.filter((e=>Object.values(e).join(" ").toLowerCase))}get seller(){return te().sellers}set seller(e){te().sellers=e}async updateData(){await Promise.all([te().fetchAllSeller()])}async beforeMount(){await this.updateData()}sellerModalMethod(e){this.newSellerModal=e}};pe=he([(0,U.wA)({components:{ModalCreateSell:ue}})],pe);var fe=pe,me=fe,ve=(0,m.Z)(me,D,I,!1,null,null,null),ge=ve.exports;s.ZP.use(b.ZP);const be=[{path:"/",name:"homeView",component:B},{path:"/search",name:"searchImages",component:R},{path:"/sellers",name:"SellerView",component:ge}],Ee=new b.ZP({mode:"history",base:"/",routes:be});var _e=Ee,we=a(1705);s.ZP.use(we.Z);var ye=new we.Z({});s.ZP.use(r.og);const Ze=(0,r.WB)();s.ZP.config.productionTip=!1,new s.ZP({router:_e,pinia:Ze,vuetify:ye,render:e=>e(g)}).$mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,i){if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],i=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(o=!1,i<n&&(n=i));if(o){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,n=r[0],o=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var d=l(a)}for(t&&t(r);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},r=self["webpackChunkalegra_francisco"]=self["webpackChunkalegra_francisco"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(82)}));r=a.O(r)})();
//# sourceMappingURL=app.36055010.js.map