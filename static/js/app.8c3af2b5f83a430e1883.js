webpackJsonp([0],{"19PZ":function(t,e){},"2N7h":function(t,e){},"7qQe":function(t,e){},"877p":function(t,e,a){t.exports=a.p+"static/img/Medulina.c46e1be.gif"},"947H":function(t,e){},HrPY:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("A4r5");i.a.use(n.a),a("qb6w"),a("947H"),a("y2/v"),a("2N7h");var s={name:"App",data:function(){return{sidebarOpen:!0,filter:""}},computed:{routeName:function(){return this.$route.name}},mounted:function(){window.innerWidth>=991?this.sidebarOpen=!0:this.sidebarOpen=!1},watch:{$route:function(t,e){window.innerWidth<991?this.hideSidebar():this.showSidebar()}},methods:{hideSidebar:function(){document.getElementById("sidebar").style.width="0px",document.getElementById("sidebar").className="sidebar",document.getElementById("main-panel").style.left="0",document.getElementById("main-panel").className="main-panel",this.sidebarOpen=!1},showSidebar:function(){document.getElementById("sidebar").style.width=null,document.getElementById("sidebar").className="sidebar expand",document.getElementById("main-panel").style.left=window.innerWidth>=991?"0px":"260px",document.getElementById("main-panel").className="main-panel expand",this.sidebarOpen=!0},handleResize:function(){console.log("resizing"),window.innerWidth>=991&&this.showSidebar(),window.innerWidth<991&&this.hideSidebar()},toggleNav:function(){var t=null==document.getElementById("sidebar").style.width,e="0px"==document.getElementById("sidebar").style.width,a=document.getElementById("sidebar").className.indexOf("expand")>=0;t&&(console.log("sidebar is null"),this.hideSidebar()),e||(console.log("sidebar is 0"),this.hideSidebar()),a||(console.log("showing"),this.showSidebar())}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("resize-observer",{on:{notify:t.handleResize}}),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"sidebar collapse show",attrs:{id:"sidebar","data-background-color":"white","data-active-color":"danger"}},[a("div",{staticClass:"sidebar-wrapper"},[a("div",{staticClass:"logo"},[a("router-link",{staticClass:"simple-text",attrs:{to:"/"}},[t._v("\n                      Arielle Tambini\n                  ")])],1),t._v(" "),a("ul",{staticClass:"nav"},[a("router-link",{attrs:{to:"/",tag:"li",exact:""}},[a("a",[a("i",{staticClass:"ti-user"}),t._v(" "),a("p",[t._v("About Me")])])]),t._v(" "),a("router-link",{attrs:{to:"/publications",tag:"li",exact:""}},[a("a",[a("i",{staticClass:"ti-write"}),t._v(" "),a("p",[t._v("Publications")])])]),t._v(" "),a("router-link",{attrs:{to:"/awards",tag:"li",exact:""}},[a("a",[a("i",{staticClass:"ti-cup"}),t._v(" "),a("p",[t._v("Awards")])])]),t._v(" "),a("router-link",{attrs:{to:"/cv",tag:"li",exact:""}},[a("a",[a("i",{staticClass:"ti-clipboard"}),t._v(" "),a("p",[t._v("CV")])])])],1)])]),t._v(" "),a("div",{staticClass:"main-panel",attrs:{id:"main-panel"}},[a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"btn btn-secondary btn-small",attrs:{type:"button",id:"toggleBtn"},on:{click:t.toggleNav}},[t.sidebarOpen?a("span",[a("i",{staticClass:"ti-close"})]):a("span",[a("i",{staticClass:"ti-menu"})])]),t._v(" "),a("a",{staticClass:"simple-text routename mr-3"},[t._v(t._s(t.routeName))]),t._v(" "),"About me"!=t.routeName&&"CV"!=t.routeName?a("form",{staticClass:"form-inline",staticStyle:{display:"inline"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control mr-sm-2",attrs:{id:"searchProject",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]):t._e()])])]),t._v(" "),a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-view",{attrs:{filter:t.filter}})],1)],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("ZOJe")},null,null).exports,l=a("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},c,!1,function(t){a("VB3G")},"data-v-1ab05ed2",null).exports;var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},[e("iframe",{staticStyle:{height:"calc(100vh - 100px)"},attrs:{src:"http://tambini.science/tambini_cv.pdf",width:"100%"}})])])])}]};var u=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){a("19PZ")},"data-v-437f6fd0",null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h4",{staticClass:"title mb-2"},[a("img",{staticClass:"img-circle",staticStyle:{"max-height":"50px"},attrs:{src:t.image,alt:"Card image cap"}}),t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),a("p",{staticClass:"category"},[t._v("\n            "+t._s(t.subtitle)+"\n          ")])]),t._v(" "),a("div",{staticClass:"content"},[t.github_link?a("p",{staticClass:"category"},[a("i",{staticClass:"ti-github m-3"}),t._v(" "),a("span",{staticClass:"text-primary"},[a("a",{attrs:{href:t.github_link}},[t._v("Code")])])]):t._e(),t._v(" "),t.publication?a("p",{staticClass:"category"},[a("i",{staticClass:"ti-book m-3"}),t._v(" "),a("span",{staticClass:"text-primary"},[a("a",{attrs:{href:t.publication}},[t._v("Publication")])])]):t._e(),t._v(" "),t.demo?a("p",{staticClass:"category"},[a("i",{staticClass:"ti-tablet m-3"}),t._v(" "),a("span",{staticClass:"text-primary"},[a("a",{attrs:{href:t.demo}},[t._v("Demo")])])]):t._e(),t._v(" "),a("p",{staticClass:"m-3"},[t._v(t._s(t.content))]),t._v(" "),a("p")])])},staticRenderFns:[]},h=a("VU/8")({name:"cardTitle",props:["title","subtitle","content","github_link","publication","image","demo"]},p,!1,null,null,null).exports,m=a("hr5j"),g=a.n(m),v=a("877p"),f=a.n(v),b={name:"Projects",components:{cardTitle:h},props:["filter"],computed:{filteredProjects:function(){var t=this;return this.projects.filter(function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())||e.description.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{projects:[{name:"braindr",tags:"Citizen Science, Deep Learning, Medical Imaging",code:"https://github.com/OpenNeuroLab/braindr",demo:"https://braindr.us",publication:"http://results.braindr.us",image:"https://braindr.us/static/img/mainGIF.dee1125.gif",description:"A mobile optimized web application for binary image classification.\n         The current application is to quality control the Healthy Brain Network imaging dataset."},{name:"AFQ-Browser",tags:"Data Visualization, Medical Imaging",code:"https://github.com/yeatmanlab/AFQ-Browser",demo:"https://yeatmanlab.github.io/AFQBrowser-demo/",publication:"https://www.nature.com/articles/s41467-018-03297-7",image:"https://media.springernature.com/lw900/springer-static/image/art%3A10.1038%2Fs41467-018-03297-7/MediaObjects/41467_2018_3297_Fig6_HTML.png",description:"Interactive 3D visualization tool in the browser\n         for the Automated Fiber Quantification software package"},{name:"appstract",tags:"Citizen Science, Text Mining",code:"https://github.com/akeshavan/appstract",demo:"https://appstract.pub",publication:null,description:"A mobile-optimized web application to crowdsource\n         metadata annotation of scientific publications.\n         The current application is to annotate sample sizes in\n         neuroimaging studies of autism.",image:"https://media.giphy.com/media/fxR1CmdpkHMVVarKlp/giphy.gif"},{name:"metacurious",tags:"Citizen Science, Text Mining",code:"https://github.com/akeshavan/brainspell-neo-frontend",demo:"https://metacurious.org",publication:null,description:"A web application to annotate fMRI publications\n         for a coordinate-based meta analysis.",image:"https://metacurious.org/static/img/metacurious.cb8117a.svg"},{name:"braindrles",tags:"Citizen Science, Deep Learning, Medical Imaging",code:"https://github.com/npnl/braindrles",demo:"https://braindrles.us",publication:null,description:"A mobile optimized citizen science application for classifying stroke lesion segmentations",image:"https://s3-us-west-1.amazonaws.com/braindrles/c0008s0029t01_slice_4.png"},{name:"whaledr",tags:"Citizen Science, Deep Learning, Oceanography",code:"https://github.com/akeshavan/whaledr",demo:"https://whale-dr.firebaseapp.com",publication:null,description:'A citizen science app for classifying ocean sounds as "whale" or "not whale"',image:"https://whale-dr.firebaseapp.com/static/img/whaldrStatic.e7be1c6.png"},{name:"Mindcontrol",tags:"Citizen Science, Medical Imaging",code:"https://github.com/akeshavan/mindcontrol",demo:"https://mindcontrol-hbn.herokuapp.com",publication:"https://www.sciencedirect.com/science/article/pii/S1053811917302707?via%3Dihub",description:"A web-based dashboard to organize, quality control,\n         annotate, edit, and collaborate on neuroimaging processing results.\n         The current application is to quality control the Healthy Brain Network\n         imaging dataset.",image:"https://camo.githubusercontent.com/ce2fe83bb999b8ed492bc5c83c7af7db0044d1b5/687474703a2f2f64787567786a6d3239303138352e636c6f756466726f6e742e6e65742f64656d6f5f676966732f6c6f67436f6e746f75722e676966"},{name:"Mindboggle",tags:"Data Visualization, Medical Imaging",code:"https://github.com/OpenNeuroLab/braindr",demo:"https://braindr.us",publication:"http://results.braindr.us",description:"A mobile optimized app for brain MRI quality control",image:g.a},{name:"Medulina",tags:"Data Visualization, Medical Imaging, Citizen Science, Deep Learning",code:"https://github.com/akeshavan/medulina_v2",demo:"https://test.medulina.com",publication:null,description:"A lightweight web application for crowdsourcing biomedical image segmentation.\n          Current applications include segmenting: meningiomas, stroke lesions, the dentate gyrus,\n          and prostate cancer tissue images. ",image:f.a}]}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("div",{staticClass:"row m-3"},[e("div",{staticClass:"card-columns"},this._l(this.filteredProjects,function(t){return e("card-title",{attrs:{title:t.name,subtitle:t.tags,github_link:t.code,demo_link:t.demo,image:t.image,publication:t.publication,demo:t.demo,content:t.description}})}),1)])])},staticRenderFns:[]};a("VU/8")(b,C,!1,function(t){a("wXrh")},"data-v-44936bc4",null).exports;var y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about container"},[i("div",{staticClass:"row mt-3"},[i("div",{staticClass:"col-lg-6 col-md-12"},[i("div",{staticClass:"card card-user"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:a("uM4Q"),alt:"..."}})]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"author"},[i("img",{staticClass:"avatar border-white",attrs:{src:a("vMll"),alt:"..."}}),t._v(" "),i("h4",{staticClass:"title"},[t._v("Arielle Tambini"),i("br"),t._v(" "),i("a",{attrs:{href:"http://grantome.com/search?q=@author%20%20Arielle%20Tambini"}},[i("small",[t._v("Grantome")])]),i("br"),t._v(" "),i("a",{attrs:{href:"https://scholar.google.com/citations?user=ZRiWbw0AAAAJ&hl=en"}},[i("small",[t._v("Google Scholar")])])])]),t._v(" "),i("p",{staticClass:"description text-center"},[t._v("\n                  Postdoctoral Fellow\n                  "),i("br"),t._v("\n                  D'Esposito Lab\n                  "),i("br"),t._v("\n                  Helen Wills Neuroscience Institute and the Department of Psychology\n                  "),i("br"),t._v("\n                  University of California, Berkeley\n              ")])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"text-center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("p",{staticClass:"description pl-2 pr-2"},[i("span",{staticClass:"text-info"},[t._v("Interests:")]),t._v("\n                        Cognitive Neuroscience,\n                        Memory Consolidation,\n                        Rest,\n                        Hippocampus,\n                        fMRI,\n                        TMS,\n                        Bagels\n                      ")])])])])])]),t._v(" "),i("div",{staticClass:"col-lg-6 col-md-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"header"},[i("h4",{staticClass:"title"},[t._v("Education")]),t._v(" "),i("p",{staticClass:"category"},[t._v("\n            Where I've Learned\n          ")])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"typo-line mt-3"},[i("h6",[i("p",{staticClass:"category"},[t._v("Postdoc"),i("br"),t._v("2013-2019")]),t._v("Cognitive Neuroscience")]),t._v(" "),i("p",{staticClass:"text-muted"},[t._v("University of California, Berkeley")]),t._v(" "),i("p",{},[t._v("Advisor: Mark D'Esposito")])]),t._v(" "),i("div",{staticClass:"typo-line mt-3"},[i("h6",{staticClass:"mb-2"},[i("p",{staticClass:"category"},[t._v("\n                PhD\n                "),i("br"),t._v("2007-2013\n              ")]),t._v("\n              Neural Sciences\n            ")]),t._v(" "),i("p",{staticClass:"text-muted"},[t._v("New York University")]),t._v(" "),i("p",[t._v("Advisor: Lila Davachi")])]),t._v(" "),i("div",{staticClass:"typo-line mt-3"},[i("h6",[i("p",{staticClass:"category"},[t._v("BS"),i("br"),t._v("2007-2011")]),t._v("Brain and Cognitive Sciences")]),t._v(" "),i("p",{staticClass:"text-muted"},[t._v("Massachusetts Institute of Technology")]),t._v(" "),i("p",{},[t._v("minor in Biomedical Engineering")])])])])])])])}]};var _=a("VU/8")({name:"About",data:function(){return{msg:"I'm Arielle"}}},y,!1,function(t){a("7qQe")},"data-v-76eff4da",null).exports,w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h4",{staticClass:"title mb-2"},[a("a",{attrs:{href:t.link}},[t._v(t._s(t.title))])]),t._v(" "),a("p",{staticClass:"category"},[t._v("\n            "+t._s(t.authors)+" ("+t._s(t.year)+") "+t._s(t.journal)+"\n          ")])]),t._v(" "),a("div",{staticClass:"content"},[t.tags?a("p",{staticClass:"text-secondary"},[a("i",{staticClass:"ti-bookmark-alt mr-3"}),t._v(" tags: "+t._s(t.tags)+" ")]):t._e()])])},staticRenderFns:[]},k={name:"Publications",components:{pubCard:a("VU/8")({name:"pubCard",props:["title","authors","year","link","journal","tags"]},w,!1,null,null,null).exports},props:["filter"],computed:{filteredPublications:function(){var t=this;return this.publications.filter(function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())||e.authors.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{publications:[{title:"Hippocampal-targeted Theta-burst Stimulation Enhances Associative Memory Formation.",authors:"A Tambini, DE Nee, M D'Esposito",link:"http://doai.io/10.1162/jocn_a_01300",year:"2018",journal:"Journal of cognitive neuroscience, 1-21"},{title:"Spontaneous cognitive processes and the behavioral validation of time-varying brain connectivity.",authors:"A Kucyi, A Tambini, S Sadaghiani, S Keilholz, JR Cohen",link:"http://doai.io/10.1162/netn_a_00037",year:"2018",journal:"Network Neuroscience, 1-57"},{title:"Brief targeted memory reactivation during the awake state enhances memory stability and benefits the weakest memories.",authors:"A Tambini, A Berners-Lee, L Davachi",link:"http://doai.io/10.1038/s41598-017-15608-x",year:"2017",journal:"Scientific Reports 7 (1), 15325"},{title:"Persistence of amygdala–hippocampal connectivity and multi-voxel correlation structures during awake rest after fear learning predicts long-term expression of fear.",authors:"EJ Hermans, JW Kanen, A Tambini, G Fernández, L Davachi, EA Phelps",link:"http://doai.io/10.1093/cercor/bhw145",year:"2017",journal:"Cerebral Cortex 27 (5), 3028-3041"},{title:"Emotional brain states carry over and enhance future memory formation.",authors:"A Tambini, U Rimmele, EA Phelps, L Davachi",link:"http://doai.io/10.1038/nn.4468",year:"2017",journal:"Nature neuroscience 20 (2), 271"},{title:"Sleep, Sleep Alterations, Stress—Combined Effects on Memory?",authors:"U Rimmele, A Tambini",link:"http://doai.io/10.5665/sleep.5214",year:"2015",journal:"Sleep 38 (12), 1835-1836"},{title:"Persistence of hippocampal multivoxel patterns into postencoding rest is related to memory.",authors:"A Tambini, L Davachi",link:"http://doai.io/10.1073/pnas.1308499110",year:"2013",journal:"Proceedings of the National Academy of Sciences 110 (48), 19591-19596"},{title:"Enhanced brain correlations during rest are related to memory for recent experiences.",authors:"A Tambini, N Ketz, L Davachi",link:"http://doai.io/10.1016/j.neuron.2010.01.001",year:"2010",journal:"Neuron 65 (2), 280-290"},{title:"Sensory contributions to impaired emotion processing in schizophrenia.",authors:"PD Butler, IY Abeles, NG Weiskopf, A Tambini, M Jalbrzikowski, ME Legatt, V Zemon, J Loughead, RC Gur, DC Javitt",link:"http://doai.io/10.1093/schbul/sbp109",year:"2009",journal:"Schizophrenia bulletin 35 (6), 1095-1107"},{title:"The asymmetry of the fusiform face area is a stable individual characteristic that underlies the left-visual-field superiority for faces.",authors:"G Yovel, A Tambini, T Brandman",link:"http://doai.io/10.1016/j.neuropsychologia.2008.06.017",year:"2008",journal:"Neuropsychologia 46 (13), 3061-3068"},{title:"What's in a face? Effects of stimulus duration and inversion on face processing in schizophrenia.",authors:"PD Butler, A Tambini, G Yovel, M Jalbrzikowski, R Ziwich, G Silipo, N Kanwisher, DC Javitt",link:"http://doai.io/10.1016/j.schres.2008.03.007",year:"2008",journal:"Schizophrenia research 103 (1-3), 283-292"}]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},this._l(this.filteredPublications,function(t){return e("pub-card",{attrs:{title:t.title,authors:t.authors,link:t.link,year:t.year,journal:t.journal,tags:t.tags}})}),1)])])},staticRenderFns:[]};var L=a("VU/8")(k,S,!1,function(t){a("HrPY")},"data-v-6cd8a3a2",null).exports,A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"header"},[a("h4",{staticClass:"title mb-2"},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),a("p",{staticClass:"category"},[t._v("\n             "+t._s(t.year)+", "+t._s(t.loc)+"\n          ")])]),t._v(" "),a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.desc))]),t._v(" "),t.lesson?a("p",{staticClass:"category mb-3"},["teach"==t.type?a("i",{staticClass:"ti-ruler-pencil m-3"}):"talk"==t.type?a("i",{staticClass:"ti-layout-slider m-3"}):"leadership"==t.type?a("i",{staticClass:"ti-basketball m-3"}):t._e(),t._v(" "),a("span",{staticClass:"text-primary"},["teach"==t.type?a("a",{attrs:{href:t.lesson}},[t._v("Lesson")]):"talk"==t.type?a("a",{attrs:{href:t.lesson}},[t._v("Slides")]):"leadership"==t.type?a("a",{attrs:{href:t.lesson}},[t._v("Website")]):t._e()])]):t._e(),t._v(" "),t.tags?a("p",{staticClass:"text-secondary"},[a("i",{staticClass:"ti-bookmark-alt mr-3"}),t._v(" tags: "+t._s(t.tags)+" ")]):t._e()])])},staticRenderFns:[]},x=a("VU/8")({name:"teachCard",props:["title","year","desc","loc","tags","lesson","type"]},A,!1,null,null,null).exports,T={name:"HelloWorld",components:{teachCard:x},props:["filter"],computed:{filteredTeaching:function(){var t=this;return this.teaching.filter(function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())||e.desc.toLowerCase().includes(t.filter.toLowerCase())||e.location.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{teaching:[{title:"Sleep and Neuroimaging Laboratory",year:2018,desc:"Co-­organized and taught workshop on resting state connectivity analyses",tags:"javascript, data science",location:"University of California, Berkeley"},{title:"Masters course in Affective Neuroscience",year:2013,desc:"Guest Lecturer",location:"New York University"},{title:"Honors Behavioral and Integrative Neuroscience Laboratory class",year:"2012-2013",desc:"Laboratory Instructor",location:"New York University"},{title:"Development and Dysfunction of the of the Nervous System",year:2010,desc:"Teaching Assistant",location:"New York University"}]}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"teaching container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},this._l(this.filteredTeaching,function(t){return e("teach-card",{attrs:{title:t.title,year:t.year,desc:t.desc,tags:t.tags,loc:t.location,lesson:t.lesson,type:"teach"}})}),1)])])},staticRenderFns:[]};var B=a("VU/8")(T,N,!1,function(t){a("QtS7")},"data-v-b02adbd0",null).exports,z={name:"Talks",components:{teachCard:x},props:["filter"],computed:{filteredTeaching:function(){var t=this;return this.teaching.filter(function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())||e.desc.toLowerCase().includes(t.filter.toLowerCase())||e.location.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{teaching:[{title:"Organization for Human Brain Mapping: Symposium",year:2018,desc:"Reproducibility in fMRI: Web-based neuroimaging tools for reproducible and collaborative research",tags:"reproducibility, fmri, neuroimaging",location:"Singapore",lesson:"https://docs.google.com/presentation/d/1LWWvbiycxBgl1n7KVpR-_XsA4wIbTPUXSRn0Xz-J2qk/edit?usp=sharing"},{title:"Organization for Human Brain Mapping: Educational Course",year:2018,desc:"Hands on Deep Learning with Keras",tags:"deep learning, neuroimaging",location:"Singapore",lesson:"http://nbviewer.jupyter.org/github/brainhack101/IntroDL/blob/master/IntroToKeras.ipynb"},{title:"Seminar: Leveraging Web Technology to Address Challenges with Big Data in Neuroscience",year:2018,desc:"One hour seminar about my recent work.",tags:"citizen science, deep learning, neuroimaging, data visualization",location:"CRIUGM, University of Montreal",lesson:""},{title:"Interoperability of Cyberinfrastructure Workshop: Front-End Technologies",year:2018,desc:"10 minute talk on microservices, serverless architecture, and front end technologies",tags:"web technology, data visualization",location:"McGill University",lesson:""},{title:"Embracing Web Technology for more Open and Collaborative Science.",year:2017,desc:"One hour seminar about my recent work.",tags:"web technology, data visualization, citizen science",location:"National Institute of Health (NIH), Bethesda MD",lesson:""},{title:"Brain Imaging Analysis with Nipype.",year:2017,desc:"An interactive workshop on Nipype: a scalable Python-based workflow engine for neuroimaging.",tags:"python, neuroimaging",location:"University of Toronto, Toronto Canada",lesson:""}]}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"talks container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},this._l(this.filteredTeaching,function(t){return e("teach-card",{attrs:{title:t.title,year:t.year,desc:t.desc,tags:t.tags,loc:t.location,lesson:t.lesson,type:"talk"}})}),1)])])},staticRenderFns:[]};a("VU/8")(z,M,!1,function(t){a("V+RI")},"data-v-6a4e8667",null).exports;var E={name:"Leadership",components:{teachCard:x},props:["filter"],computed:{filteredTeaching:function(){var t=this;return this.teaching.filter(function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())||e.desc.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{teaching:[{title:"OHBM Open Science SIG Hackathon Organizer",year:2018,desc:"Co-organizer for the OHBM Hackathon in Singapore, June 14-16.\n                 This year we hosted a\n                 training course in parallel to the hackathon, to teach\n                 beginners the basics of data science\n                for neuroimaging analysis",tags:"hackathon, neuroimaging, data science, teaching",location:"Singapore",lesson:"https://ohbm.github.io/hackathon2018"},{title:"Brainhack San Francisco Organizer",year:2017,desc:"Helped organize a hackathon to study the brain, March 2-5.",tags:"hackathon, neuroimaging",location:"San Francisco",lesson:null},{title:"Bioengineering Association of Students (BEAST) Retreat Committee",year:"2014-2016",desc:"Helped organize two annual bioengineering retreats for the UC Berkeley UCSF Joint Graduate Program in Bioengineering",tags:"retreat",location:"San Francisco",lesson:null},{title:"Bioengineering Association of Students (BEAST) Social Committee",year:"2014-2016",desc:"Helped organize social events for the UC Berkeley UCSF Joint Graduate Program in Bioengineering",tags:"retreat",location:"San Francisco",lesson:null}]}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leadership container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},this._l(this.filteredTeaching,function(t){return e("teach-card",{attrs:{title:t.title,year:t.year,desc:t.desc,tags:t.tags,loc:t.location,lesson:t.lesson,type:"leadership"}})}),1)])])},staticRenderFns:[]};a("VU/8")(E,I,!1,function(t){a("xqLf")},"data-v-0d4182b6",null).exports;var R={name:"Awards",components:{teachCard:x},props:["filter"],computed:{filteredTeaching:function(){var t=this;return this.teaching.filter(function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())||e.tags.toLowerCase().includes(t.filter.toLowerCase())||e.desc.toLowerCase().includes(t.filter.toLowerCase())})}},data:function(){return{teaching:[{title:"Ruth L. Kirschstein NRSA Postdoctoral Fellowship",year:"2015-2018",desc:"F32 MH106280",tags:null,location:null,lesson:null},{title:"Ruth L. Kirschstein NRSA Predoctoral Fellowship",year:"2010-2013",desc:"F31 MH092055",tags:null,location:null,lesson:null},{title:"Marine Biological Laboratory Neuroinformatics Summer Course",year:2011,desc:"scholarship",tags:null,location:null,lesson:null},{title:"NYU Dean’s Student Travel Grant",year:"2009-2011",desc:"received max. of 3 times",tags:null,location:null,lesson:null},{title:"Hans-Lukas Teuber Award for Outstanding Academics",year:2007,desc:"Department of Brain and Cognitive Sciences, MIT",tags:null,location:null,lesson:null},{title:"Summer Scholars Program in Biomedical Optics",year:2005,desc:"Harvard/MIT Division of Health Sciences and Technology",tags:null,location:null,lesson:null},{title:"Davidson Fellowship",year:2003,desc:"$10,000 award for original research",tags:null,location:null,lesson:null}]}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"awards container-fluid"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12"},this._l(this.filteredTeaching,function(t){return e("teach-card",{attrs:{title:t.title,year:t.year,desc:t.desc,tags:t.tags,loc:t.location,lesson:t.lesson,type:"awards"}})}),1)])])},staticRenderFns:[]};var j=a("VU/8")(R,D,!1,function(t){a("NzXT")},"data-v-500a498e",null).exports;i.a.use(l.a);var F=new l.a({routes:[{path:"/",name:"About me",component:_},{path:"/teaching",name:"Teaching",component:B},{path:"/publications",name:"Publications",component:L},{path:"/awards",name:"Awards",component:j},{path:"/cv",name:"CV",component:u}],linkActiveClass:"active"});i.a.config.productionTip=!1,new i.a({el:"#app",router:F,components:{App:o},template:"<App/>"})},NzXT:function(t,e){},QtS7:function(t,e){},"V+RI":function(t,e){},VB3G:function(t,e){},ZOJe:function(t,e){},hr5j:function(t,e,a){t.exports=a.p+"static/img/roygbiv.50286e9.png"},qb6w:function(t,e){},uM4Q:function(t,e,a){t.exports=a.p+"static/img/new_york.2836b90.jpg"},vMll:function(t,e,a){t.exports=a.p+"static/img/arielle_portrait.ca507b5.jpg"},wXrh:function(t,e){},xqLf:function(t,e){},"y2/v":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c3af2b5f83a430e1883.js.map