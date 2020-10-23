(this.webpackJsonpzb=this.webpackJsonpzb||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),l=a.n(r),s=a(3),i=a(4),o=a(6),m=a(5),u=a(11),d=a(1),p=a(14),h=a(12),b=a.n(h),y=c.a.createContext(),g=function(e,t){switch(t.type){case"WAIT_LYRICS":return Object(p.a)(Object(p.a)({},e),{},{track_list:[]});case"SEARCH_TRACKS":return 0===t.payload.header.available?Object(p.a)(Object(p.a)({},e),{},{heading:"Search Results"}):Object(p.a)(Object(p.a)({},e),{},{track_list:t.payload.body.track_list,heading:"Search Results"});default:return e}},f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={track_list:[],heading:"Today's Top 10 tracks",dispatch:function(t){return e.setState((function(e){return g(e,t)}))}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=".concat("ef3a053ab844d7bb913c05d27db81ea9")).then((function(t){e.setState({track_list:t.data.message.body.track_list})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),E=y.Consumer,k=(a(55),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement(u.b,{to:"/",className:"nav-text"},"Lyrics Finder \ud83c\udfb5"))}}]),a}(n.Component)),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"about"},c.a.createElement(u.b,{to:"/about",className:"about-text"},"About"))}}]),a}(n.Component),N=function(){return Object(n.useEffect)((function(){document.querySelector("title").innerText="Lyrics Finder || About",document.querySelector(".search-container").style.display="none"})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card lyricsContainer"},c.a.createElement("h5",{className:"card-header"},"About",c.a.createElement("span",{className:"text-secondary"}," Lyrics Finder \ud83c\udfb5")),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text about-page-text"},"This little web application was created with JS library - React"),c.a.createElement("br",null),c.a.createElement("p",{className:"card-text about-page-text"},"It fetches data from"," ",c.a.createElement("a",{href:"https://www.musixmatch.com/",target:"_blank"},"MusixMatch")),c.a.createElement("p",{className:"card-text about-page-text"},"Credits go to: ",c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.musixmatch.com/",target:"_blank"},"MusixMatch")," ","(for the actual data), ",c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.pexels.com/",target:"_blank"},"Pexels")," ","(for the amazing background image) and ",c.a.createElement("br",null),c.a.createElement("a",{href:"https://fontawesome.com/",target:"_blank"},"FontAwesome")," ","(for the neat, cool icons)"," "),c.a.createElement("p",null,"Here is my \ud83d\udc49"," ",c.a.createElement("a",{href:"https://github.com/abrorsaidov",target:"_blank"},"Github")," ","and \ud83d\udc49"," ",c.a.createElement("a",{href:"https://instagram.com/abrorsaidov4545",target:"_blank"},"Instagram")),c.a.createElement("p",{className:"card-text about-page-text"},"Let me know what You think"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"card-text about-page-text"},"Enjoy \ud83c\udfa7\u263a\ufe0f"),c.a.createElement("p",{className:"card-text about-page-text"},"\xa9\ufe0f 2020"))))},x=function(){Math.floor(Math.random()*(["https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif","https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif","https://media.giphy.com/media/ZbZaqMgYi4HXOWboq6/giphy.gif","https://media.giphy.com/media/11T1gShHejUvPW/giphy.gif","https://media.giphy.com/media/KeF5DouQeE54G9TGWr/giphy.gif","https://media.giphy.com/media/l0He4fJxPCbfqv7Xi/giphy.gif","https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif","https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif"].length-1));return c.a.createElement("div",null,c.a.createElement("img",{src:"https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif",alt:"Loading...",style:{width:"80%",margin:"40px auto",display:"block"}}),c.a.createElement("p",{style:{marginLeft:"30%"}},"Waiting for the data..."))},w=function(e){var t=e.track;return c.a.createElement("div",{className:"col-md-6 col-sm-12"},c.a.createElement("div",{className:"card mb-2 shadow-sm myCard"},c.a.createElement("div",{className:"card-body m-1"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,c.a.createElement("a",{href:"https://www.youtube.com/results?search_query=".concat(t.track_name).concat(t.artist_name),target:"_blank"},c.a.createElement("i",{className:"fas fa-play-circle"}))," ","Track"),": ",t.track_name,c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),c.a.createElement(u.b,{to:"lyrics/track/".concat(t.track_id),className:"btn btn-block viewBtn"},c.a.createElement("i",{className:"fas fa-angle-double-right"})," ",c.a.createElement("span",{className:"viewBtnText"},"View Lyrics")))))},_=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("title").innerText="Lyrics Finder || Home",document.querySelector(".search-container").style.display="block"}},{key:"render",value:function(){return c.a.createElement(E,null,(function(e){var t=e.track_list,a=e.heading;e.notFound;return void 0===t||0===t.length?c.a.createElement(x,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("h3",{className:"text-center mb-4 col-12 mt-3"},a),t.map((function(e){return c.a.createElement(w,{key:e.track.track_id,track:e.track})}))))}))}}]),a}(n.Component),O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,null))},j=a(32),S=a.n(j),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={track:{},lyrics:{},pageTitle:"Waiting for the lyrics..."},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.querySelector("title").innerText=this.state.pageTitle,"Lyrics Finder || Home"!==this.state.pageTitle&&(document.querySelector(".search-container").style.display="none"),b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat("ef3a053ab844d7bb913c05d27db81ea9")).then((function(t){return e.setState({lyrics:t.data.message.body.lyrics}),b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=").concat("ef3a053ab844d7bb913c05d27db81ea9"))})).then((function(t){console.log(t.data.message.body.track.track_name),e.setState({track:t.data.message.body.track,pageTitle:t.data.message.body.track.track_name}),document.querySelector("title").innerText="Lyrics Finder || ".concat(e.state.pageTitle)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?c.a.createElement(x,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"row"},c.a.createElement(u.b,{to:"/",className:"btn  btn-block btn-sm mb-2 mt-2  goBack "},c.a.createElement("i",{className:"fas fa-angle-double-left"}),"Go Back")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"card lyricsContainer",style:{width:"100%"}},c.a.createElement("h5",{className:"card-header"},t.track_name," by"," ",c.a.createElement("span",{className:"text-secondary"},t.artist_name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},c.a.createElement("pre",null,a.lyrics_body))))),c.a.createElement("div",{className:"row"},c.a.createElement("ul",{className:"list-group mt-3 lyricsUL",style:{width:"100%"}},c.a.createElement("li",{className:"list-group-item lyricsDetails"},c.a.createElement("strong",null,"Album ID"),": ",t.album_id),console.log(t),c.a.createElement("li",{className:"list-group-item lyricsDetails"},c.a.createElement("strong",null,"Explicit Words"),":"," ",0===t.explicit?"No":"Yes"),c.a.createElement("li",{className:"list-group-item lyricsDetails"},c.a.createElement("strong",null,"Track Rating"),": ",t.track_rating),c.a.createElement("li",{className:"list-group-item lyricsDetails"},c.a.createElement("strong",null,"Last Updated"),":"," ",c.a.createElement(S.a,{format:"DD/MM/YYYY"},t.updated_time))))))}}]),a}(n.Component),C=a(16),F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onLoad=function(){window.location.reload()},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:{marginTop:"10%"}},c.a.createElement("img",{src:"https://media.giphy.com/media/aduIgTovDpsOI/giphy.gif",alt:"Error !!!",style:{width:"45%",margin:"40px auto",display:"block"}}),c.a.createElement("p",{style:{marginLeft:"30%"}},"Nothing was found, my friend \ud83d\ude1e"),c.a.createElement("button",{onClick:this.onLoad,className:"btn  btn-block btn-sm mb-2 mt-2  goBack "},c.a.createElement("i",{className:"fas fa-angle-double-left"}),"Go Back Home"))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={trackTitle:"",notFound:!1},e.findTrack=function(t,a,n){n.preventDefault();t({type:"WAIT_LYRICS"}),b.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=".concat(e.state.trackTitle,"&page_size=50&page=1&s_track_rating=desc&apikey=").concat("ef3a053ab844d7bb913c05d27db81ea9")).then((function(a){t({type:"SEARCH_TRACKS",payload:a.data.message}),e.setState({trackTitle:""}),0===a.data.message.header.available&&(e.setState({notFound:!0}),document.querySelector(".container-mine").style.display="none")})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){"Lyrics Finder || Home"===document.querySelector("title").innerText&&(document.querySelector(".search-container").style.display="block")}},{key:"onChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return c.a.createElement(E,null,(function(t){var a=t.dispatch,n=t.track_list;return e.state.notFound?c.a.createElement(F,null):c.a.createElement("div",{className:"card card-body mb-4 p-4 search-container"},c.a.createElement("h1",{className:"display-4 text-center search-heading"},"Search For a song"),c.a.createElement("p",{className:"lead text-center search-welcome"},"... any song"),c.a.createElement("form",{onSubmit:e.findTrack.bind(e,a,n)},c.a.createElement("div",{className:"form-group myForm"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg myInput",placeholder:"Song Title...",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange.bind(e)}),c.a.createElement("button",{type:"submit",className:"mySearchBtn"},c.a.createElement("i",{className:"fas fa-search "})))))}))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(f,null,c.a.createElement(u.a,null,c.a.createElement(c.a.Fragment,{className:"App"},c.a.createElement(k,null),c.a.createElement(A,null),c.a.createElement(v,null),c.a.createElement("div",{className:"container-mine container"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/about",component:N}),c.a.createElement(d.a,{exact:!0,path:"/",component:O}),c.a.createElement(d.a,{exact:!0,path:"/lyrics/track/:id",component:T}))))))}}]),a}(n.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2f4de78e.chunk.js.map