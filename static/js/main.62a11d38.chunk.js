(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,n){e.exports=n(298)},271:function(e,t,n){},276:function(e,t,n){},278:function(e,t,n){},280:function(e,t,n){},282:function(e,t,n){},284:function(e,t,n){},286:function(e,t,n){},288:function(e,t,n){},294:function(e,t,n){},296:function(e,t,n){},298:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"db",function(){return v}),n.d(r,"env",function(){return D}),n.d(r,"user",function(){return V}),n.d(r,"actions",function(){return z});var a=n(0),s=n.n(a),i=n(49),c=n.n(i),o=n(18),u=n(50),l=n(11),d=n(19),f=n(301),p=n(299),h=n(300),m=Object(f.a)("".concat("DB","/SET_OSCAR"),function(e){return{oscar:e}}),b={setOscar:m},v=Object(p.a)(Object(d.a)({},Object(h.a)(m),function(e,t){var n=t.payload;return Object(l.a)({},e,n)}),{oscar:null}),g=n(3),E=n(21),O=["M","T","W","R","F"],C=2,y=function(e){var t=/(\d{1,2}):(\d{2}) (a|p)m/.exec(e),n=Object(E.a)(t,4),r=n[1],a=n[2];return 60*(("p"===n[3]?12:0)+Number.parseInt(r%12))+Number.parseInt(a)},j=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e/60|0,r=e%60;return"".concat(n>12?n-12:n,":").concat(r<10?"0"+r:r).concat(t?" ".concat(n<12?"a":"p","m"):"")},N=function(e){return e?"".concat(j(e.start,!1)," - ").concat(j(e.end)):"TBA"},S=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n="#",r=0;r<3;r++){var a=(Math.random()*(t-e)+e|0).toString(16);n+=(1===a.length?"0":"")+a}return n},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#BBBBBB";return.299*parseInt(e.substring(1,3),16)+.587*parseInt(e.substring(3,5),16)+.114*parseInt(e.substring(5,7),16)>128?"dark-content":"light-content"},w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")},x=function(){return window.innerWidth<768},T=function(e){return Object(g.a)(new Set(e))},R=Object(f.a)("".concat("ENV","/SET_MOBILE"),function(e){return{mobile:e}}),A={setMobile:R},M={mobile:x()},D=Object(p.a)(Object(d.a)({},Object(h.a)(R),function(e,t){var n=t.payload;return Object(l.a)({},e,n)}),M),I=n(28),F=n.n(I),B=Object(f.a)("".concat("USER","/SET_TERM"),function(e){return Y(e)}),_=Object(f.a)("".concat("USER","/SET_DESIRED_COURSES"),function(e){return{desiredCourses:e}}),P=Object(f.a)("".concat("USER","/SET_PINNED_CRNS"),function(e){return{pinnedCrns:e}}),L=Object(f.a)("".concat("USER","/SET_EXCLUDED_CRNS"),function(e){return{excludedCrns:e}}),U=Object(f.a)("".concat("USER","/SET_COLOR_MAP"),function(e){return{colorMap:e}}),W=Object(f.a)("".concat("USER","/SET_SORTING_OPTION_INDEX"),function(e){return{sortingOptionIndex:e}}),H={setTerm:B,setDesiredCourses:_,setPinnedCrns:P,setExcludedCrns:L,setColorMap:U,setSortingOptionIndex:W},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.a.get("term"),t=null;try{t=JSON.parse(F.a.get(e))}catch(p){t={}}var n=t,r=n.desiredCourses,a=void 0===r?[]:r,s=n.pinnedCrns,i=void 0===s?[]:s,c=n.excludedCrns,o=void 0===c?[]:c,u=n.colorMap,l=void 0===u?{}:u,d=n.sortingOptionIndex,f=void 0===d?0:d;return a.forEach(function(e){e in l||(l[e]=S())}),{term:e,desiredCourses:a,pinnedCrns:i,excludedCrns:o,colorMap:l,sortingOptionIndex:f}};!function(){var e=F.a.get("data");e&&(F.a.set("term","201902"),F.a.set("201902",e),F.a.remove("data"))}();var G=Y(),V=Object(p.a)(Object(d.a)({},Object(h.a)(B,_,P,L,U,W),function(e,t){var n=t.payload,r=Object(l.a)({},e,n);return function(e){var t=e.term,n=e.desiredCourses,r=void 0===n?[]:n,a=e.pinnedCrns,s=void 0===a?[]:a,i=e.excludedCrns,c=void 0===i?[]:i,o=e.colorMap,u=void 0===o?{}:o,l=e.sortingOptionIndex,d=void 0===l?0:l;F.a.set("term",t),F.a.set(t,JSON.stringify({desiredCourses:r,pinnedCrns:s,excludedCrns:c,colorMap:u,sortingOptionIndex:d}),{expires:365})}(r),r}),G),z=Object(l.a)({},b,A,H),q=n(2),K=n(4),J=n(9),X=n(7),Z=n(8),$=n(87),Q=n.n($),ee=n(135),te=n.n(ee),ne=n(136),re=n.n(ne),ae=n(90),se=n(88),ie=function(e,t){if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){"undefined"===typeof e&&(e="default"),"undefined"===typeof t&&(t="Calendar");var n=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",r=[],a=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(n),s=n+"END:VCALENDAR",i=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return r},calendar:function(){return a+n+r.join(n)+s},addEvent:function(t,a,s,c,o,u){if("undefined"===typeof t||"undefined"===typeof a||"undefined"===typeof s||"undefined"===typeof c||"undefined"===typeof o)return!1;if(u&&!u.rrule){if("YEARLY"!==u.freq&&"MONTHLY"!==u.freq&&"WEEKLY"!==u.freq&&"DAILY"!==u.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(u.until&&isNaN(Date.parse(u.until)))throw"Recurrence rrule 'until' must be a valid date string";if(u.interval&&isNaN(parseInt(u.interval)))throw"Recurrence rrule 'interval' must be an integer";if(u.count&&isNaN(parseInt(u.count)))throw"Recurrence rrule 'count' must be an integer";if("undefined"!==typeof u.byday){if("[object Array]"!==Object.prototype.toString.call(u.byday))throw"Recurrence rrule 'byday' must be an array";if(u.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";for(var l in u.byday=u.byday.filter(function(e,t){return u.byday.indexOf(e)==t}),u.byday)if(i.indexOf(u.byday[l])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var d=new Date(c),f=new Date(o),p=new Date,h=("0000"+d.getFullYear().toString()).slice(-4),m=("00"+(d.getMonth()+1).toString()).slice(-2),b=("00"+d.getDate().toString()).slice(-2),v=("00"+d.getHours().toString()).slice(-2),g=("00"+d.getMinutes().toString()).slice(-2),E=("00"+d.getSeconds().toString()).slice(-2),O=("0000"+f.getFullYear().toString()).slice(-4),C=("00"+(f.getMonth()+1).toString()).slice(-2),y=("00"+f.getDate().toString()).slice(-2),j=("00"+f.getHours().toString()).slice(-2),N=("00"+f.getMinutes().toString()).slice(-2),S=("00"+f.getSeconds().toString()).slice(-2),k="",w="";v+g+E+j+N+S!=0&&(k="T"+v+g+E,w="T"+j+N+S);var x,T=h+m+b+k,R=O+C+y+w,A=("0000"+p.getFullYear().toString()).slice(-4)+("00"+(p.getMonth()+1).toString()).slice(-2)+("00"+p.getDate().toString()).slice(-2)+"T"+("00"+p.getHours().toString()).slice(-2)+("00"+p.getMinutes().toString()).slice(-2)+("00"+p.getSeconds().toString()).slice(-2);if(u)if(u.rrule)x=u.rrule;else{if(x="RRULE:FREQ="+u.freq,u.until){var M=new Date(Date.parse(u.until)).toISOString();x+=";UNTIL="+M.substring(0,M.length-13).replace(/[-]/g,"")+"000000Z"}u.interval&&(x+=";INTERVAL="+u.interval),u.count&&(x+=";COUNT="+u.count),u.byday&&u.byday.length>0&&(x+=";BYDAY="+u.byday.join(","))}(new Date).toISOString();var D=["BEGIN:VEVENT","UID:"+r.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+a,"DTSTAMP;VALUE=DATE-TIME:"+A,"DTSTART;VALUE=DATE-TIME:"+T,"DTEND;VALUE=DATE-TIME:"+R,"LOCATION:"+s,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return x&&D.splice(4,0,x),D=D.join(n),r.push(D),D},download:function(e,t){if(r.length<1)return!1;t="undefined"!==typeof t?t:".ics",e="undefined"!==typeof e?e:"calendar";var i,c=a+n+r.join(n)+s;if(-1===navigator.userAgent.indexOf("MSIE 10"))i=new Blob([c]);else{var o=new BlobBuilder;o.append(c),i=o.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(i,e+t),c},build:function(){return!(r.length<1)&&a+n+r.join(n)+s}}}console.log("Unsupported Browser")},ce=function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.state!==t,r=!function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(function(n){return n in t&&e[n]===t[n]})}(this.props,e);return n||r}}]),t}(a.Component),oe=n(37),ue=n(137),le=(n(271),n(62)),de=n.n(le),fe=function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.actions,a=e.color,i=Object(oe.a)(e,["className","children","actions","color"]);return s.a.createElement("div",Object.assign({className:w("ActionRow",t)},i),n,s.a.createElement("div",{className:w("actions","default")},r.filter(function(e){return e}).map(function(e,t){var n=e.className,r=e.icon,i=Object(oe.a)(e,["className","icon"]),c=Object(l.a)({key:t,className:w("action",n),children:s.a.createElement("div",{className:"icon",style:{backgroundColor:a}},s.a.createElement(ue.a,{fixedWidth:!0,icon:r}))},i);return"href"in c?s.a.createElement("a",Object.assign({},c,{rel:"noopener noreferrer",target:"_blank"})):"text"in c?s.a.createElement(de.a,c):s.a.createElement("div",c)})))}}]),t}(a.Component),pe=(n(276),function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,r=Object(oe.a)(e,["className","disabled"]),a=Object(l.a)({className:w("Button",t)},r);return n?s.a.createElement("button",{className:a.className,disabled:!0},a.children):"href"in a?s.a.createElement("a",Object.assign({},a,{rel:"noopener noreferrer",target:"_blank"})):"text"in a?s.a.createElement(de.a,a):s.a.createElement("button",a)}}]),t}(a.Component)),he=(n(278),function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayCrns,r=e.preview,a=e.empty,i=this.props.env.mobile,c=this.props.user.pinnedCrns;return s.a.createElement("div",{className:w("Calendar",i&&"mobile",r&&"preview",t)},!r&&s.a.createElement("div",{className:"times"},new Array(13).fill(0).map(function(e,t){var n=480+60*t;return s.a.createElement("div",{className:"time",key:n},s.a.createElement("span",{className:"label"},function(e){var t=e/60|0;return"".concat(t>12?t-12:t).concat(t<12?"a":"p","m")}(n)))})),!r&&s.a.createElement("div",{className:"days"},O.map(function(e){return s.a.createElement("div",{className:"day",key:e},s.a.createElement("span",{className:"label"},e))})),!a&&s.a.createElement("div",{className:"meetings"},c.map(function(e){return s.a.createElement(ke,{key:e,crn:e,preview:r})}),n&&n.filter(function(e){return!c.includes(e)}).map(function(e){return s.a.createElement(ke,{key:e,crn:e,overlay:!r,preview:r})})))}}]),t}(ce)),me=Object(o.b)(function(e){return{env:e.env,user:e.user}},z)(he),be=n(26),ve=n(12),ge=(n(280),function(e){function t(e){var n;return Object(q.a)(this,t),(n=Object(J.a)(this,Object(X.a)(t).call(this,e))).state={expanded:!1,paletteShown:!1},n.handleSelectColor=n.handleSelectColor.bind(Object(be.a)(Object(be.a)(n))),n}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"handleRemoveCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.pinnedCrns,a=t.excludedCrns,s=t.colorMap;this.props.setDesiredCourses(n.filter(function(t){return t!==e.id})),this.props.setPinnedCrns(r.filter(function(t){return!e.sections.some(function(e){return e.crn===t})})),this.props.setExcludedCrns(a.filter(function(t){return!e.sections.some(function(e){return e.crn===t})})),this.props.setColorMap(Object(l.a)({},s,Object(d.a)({},e.id,void 0)))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"handleSelectColor",value:function(e){var t=this.props.courseId,n=this.props.user.colorMap;this.props.setColorMap(Object(l.a)({},n,Object(d.a)({},t,e)))}},{key:"handleTogglePaletteShown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.paletteShown;this.setState({paletteShown:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.courseId,a=t.onAddCourse,i=t.onSetOverlayCrns,c=this.props.db.oscar,o=this.props.user,u=o.term,l=o.pinnedCrns,d=o.colorMap,f=this.state,p=f.expanded,h=f.paletteShown,m=c.findCourse(r),b=d[m.id],v=k(b),g={};m.sections.forEach(function(e){var t=Object(E.a)(e.instructors,1)[0],n=void 0===t?"Not Assigned":t;n in g||(g[n]=[]),g[n].push(e)});var O={icon:ve.e,href:"https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=".concat(u,"&subj_code_in=").concat(m.subject,"&crse_numb_in=").concat(m.number)};return s.a.createElement("div",{className:w("Course",v,"default",n),style:{backgroundColor:b},key:m.id},s.a.createElement(fe,{className:w("course-header",p&&"divider-bottom"),actions:a?[{icon:ve.g,onClick:a},O]:[{icon:p?ve.b:ve.a,onClick:function(){return e.handleToggleExpanded()}},O,{icon:ve.f,onClick:function(){return e.handleTogglePaletteShown()}},{icon:ve.j,onClick:function(){return e.handleRemoveCourse(m)}}],color:b},s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_id"},m.id),s.a.createElement("span",{className:"section_ids"},m.sections.filter(function(e){return l.includes(e.crn)}).map(function(e){return e.id}).join(", "))),s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_title",dangerouslySetInnerHTML:{__html:m.title}}),s.a.createElement("span",{className:"section_crns"},m.sections.filter(function(e){return l.includes(e.crn)}).map(function(e){return e.crn}).join(", "))),h&&s.a.createElement(Ne,{className:"palette",onSelectColor:this.handleSelectColor,color:b,onMouseLeave:function(){return e.handleTogglePaletteShown(!1)}})),p&&s.a.createElement("div",{className:"course-body"},Object.keys(g).map(function(e){return s.a.createElement(je,{key:e,color:b,name:e,sections:g[e],onSetOverlayCrns:i})})))}}]),t}(ce)),Ee=Object(o.b)(function(e){return{db:e.db,user:e.user}},z)(ge),Oe=(n(282),function(e){function t(e){var n;return Object(q.a)(this,t),(n=Object(J.a)(this,Object(X.a)(t).call(this,e))).state={keyword:""},n.inputRef=s.a.createRef(),n.handleChangeKeyword=n.handleChangeKeyword.bind(Object(be.a)(Object(be.a)(n))),n.handlePressEnter=n.handlePressEnter.bind(Object(be.a)(Object(be.a)(n))),n}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"handleChangeKeyword",value:function(e){var t=e.target.value;this.setState({keyword:t})}},{key:"handlePressEnter",value:function(e){var t=this.props.db.oscar,n=this.state.keyword;if("Enter"===e.key){e.preventDefault();var r=t.searchCourses(n);r.length&&this.handleAddCourse(r[0])}}},{key:"handleAddCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.excludedCrns,a=t.colorMap;if(!n.includes(e.id)){var s=e.sections.filter(function(e){return!e.meetings.length||e.meetings.some(function(e){return!e.days.length||!e.period})}).map(function(e){return e.crn});this.props.setDesiredCourses(Object(g.a)(n).concat([e.id])),this.props.setExcludedCrns(Object(g.a)(r).concat(Object(g.a)(s))),this.props.setColorMap(Object(l.a)({},a,Object(d.a)({},e.id,S()))),this.setState({keyword:""}),this.inputRef.current.focus()}}},{key:"render",value:function(){var e=this,t=this.props.className,n=this.props.db.oscar,r=this.props.user,a=r.desiredCourses,i=r.pinnedCrns,c=this.state.keyword;return s.a.createElement("div",{className:w("CourseAdd",t)},s.a.createElement("input",{type:"text",ref:this.inputRef,value:c,onChange:this.handleChangeKeyword,className:"keyword",placeholder:"XX 0000",onKeyPress:this.handlePressEnter}),s.a.createElement("div",{className:"autocomplete"},n.searchCourses(c).filter(function(e){return!a.includes(e.id)}).map(function(t){return s.a.createElement(Ee,{key:t.id,courseId:t.id,pinnedCrns:i,onAddCourse:function(){return e.handleAddCourse(t)}})})))}}]),t}(ce)),Ce=Object(o.b)(function(e){return{db:e.db,user:e.user}},z)(Oe),ye=(n(284),function(e){function t(e){var n;return Object(q.a)(this,t),(n=Object(J.a)(this,Object(X.a)(t).call(this,e))).state={expanded:!0},n}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"handleTogglePinned",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;n.includes(e.crn)?this.props.setPinnedCrns(n.filter(function(t){return t!==e.crn})):(this.props.setPinnedCrns(Object(g.a)(n).concat([e.crn])),this.props.setExcludedCrns(r.filter(function(t){return t!==e.crn})))}},{key:"handleToggleExcluded",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;r.includes(e.crn)?this.props.setExcludedCrns(r.filter(function(t){return t!==e.crn})):(this.props.setExcludedCrns(Object(g.a)(r).concat([e.crn])),this.props.setPinnedCrns(n.filter(function(t){return t!==e.crn})))}},{key:"handleExcludeAll",value:function(){var e=this.props.sections,t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns,a=e.map(function(e){return e.crn});this.props.setExcludedCrns(T(Object(g.a)(r).concat(Object(g.a)(a)))),this.props.setPinnedCrns(n.filter(function(e){return!a.includes(e)}))}},{key:"handleIncludeAll",value:function(){var e=this.props.sections,t=this.props.user.excludedCrns,n=e.map(function(e){return e.crn});this.props.setExcludedCrns(t.filter(function(e){return!n.includes(e)}))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.color,a=t.name,i=t.sections,c=t.onSetOverlayCrns,o=this.props.user,u=o.term,l=o.pinnedCrns,d=o.excludedCrns,f=this.state.expanded,p=i.every(function(e){return d.includes(e.crn)}),h=i.some(function(e){return l.includes(e.crn)});return s.a.createElement("div",{className:w("Instructor",n)},s.a.createElement(fe,{className:w("name","divider-bottom",p&&"strikethrough",!h&&"inactive"),actions:[{icon:f?ve.b:ve.a,onClick:function(){return e.handleToggleExpanded()}},!["TBA","Not Assigned"].includes(a)&&{icon:ve.e,href:"http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=Georgia+Institute+of+Technology&query=".concat(encodeURIComponent(function(e){var t=e.split(" ");return[t.shift(),t.pop()].join(" ")}(a)))},p?{icon:ve.d,onClick:function(){return e.handleIncludeAll()}}:{icon:ve.c,onClick:function(){return e.handleExcludeAll()}}],color:r},a||"Not Assigned"),f&&s.a.createElement("div",{className:"sections"},i.map(function(t){var n=d.includes(t.crn),a=l.includes(t.crn);return s.a.createElement(fe,{className:w("section","divider-bottom",n&&"strikethrough",!a&&"inactive"),onMouseEnter:function(){return c([t.crn])},onMouseLeave:function(){return c([])},actions:[{icon:a?ve.i:ve.h,onClick:function(){return e.handleTogglePinned(t)}},{icon:ve.e,href:"https://oscar.gatech.edu/pls/bprod/bwckschd.p_disp_detail_sched?term_in=".concat(u,"&crn_in=").concat(t.crn)},{icon:n?ve.d:ve.c,onClick:function(){return e.handleToggleExcluded(t)}}],color:r,key:t.id},s.a.createElement("div",{className:"section-header"},s.a.createElement("span",{className:"section_id"},t.id)),s.a.createElement("div",{className:"meetings"},t.meetings.map(function(e,t){return s.a.createElement("div",{className:"meeting",key:t},s.a.createElement("span",{className:"days"},e.days.join("")),s.a.createElement("span",{className:"period"},N(e.period)))})))})))}}]),t}(ce)),je=Object(o.b)(function(e){return{user:e.user}},z)(ye),Ne=(n(286),function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.color,r=e.onSelectColor,a=Object(oe.a)(e,["className","color","onSelectColor"]);return s.a.createElement("div",Object.assign({className:w("Palette",t)},a),[["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF"],["#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF"],["#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"]].map(function(e,t){return s.a.createElement("div",{className:"palette-row",key:t},e.map(function(e){return s.a.createElement("div",{className:w("color",e===n&&"frame"),key:e,style:{backgroundColor:e},onClick:function(){return r(e)}})}))}))}}]),t}(a.Component)),Se=(n(288),function(e){function t(){return Object(q.a)(this,t),Object(J.a)(this,Object(X.a)(t).apply(this,arguments))}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.crn,r=e.overlay,a=e.preview,i=this.props.db.oscar,c=this.props.env.mobile,o=this.props.user.colorMap,u=i.findSection(n),l=o[u.course.id],d=k(l);return s.a.createElement("div",{className:w("TimeBlocks",c&&"mobile",r&&"overlay",t)},u.meetings.map(function(e,t){return e.period&&e.days.map(function(n){return s.a.createElement("div",{className:w("meeting",d,"default",n),key:[t,n].join("-"),style:{top:(e.period.start-480)/780*100+"%",height:(e.period.end-e.period.start)/780*100+"%",backgroundColor:l}},!a&&s.a.createElement("div",{className:"meeting-wrapper"},s.a.createElement("span",{className:"course_id"},u.course.id,c?"":" ".concat(u.id)),s.a.createElement("span",{className:"period"},N(e.period)),!c&&s.a.createElement("span",{className:"where"},e.where),!c&&s.a.createElement("span",{className:"instructors"},e.instructors.join(", "))))})}))}}]),t}(ce)),ke=Object(o.b)(function(e){return{env:e.env,db:e.db,user:e.user}},z)(Se),we=function(){function e(t){var n=this;Object(q.a)(this,e);var r=t.courses,a=t.dateRanges;this.courses=Object.keys(r).map(function(e){return new xe(e,r[e])}),this.dateRanges=a.map(function(e){var t=e.split(" - ").map(function(e){return new Date(e)}),n=Object(E.a)(t,2),r=n[0],a=n[1];return r.setHours(0),a.setHours(23,59,59,999),{from:r,to:a}}),this.courseMap={},this.crnMap={},this.courses.forEach(function(e){n.courseMap[e.id]=e,e.sections.forEach(function(e){n.crnMap[e.crn]=e})}),this.sortingOptions=[new Re("Most Compact",function(e){var t=e.startMap,n=e.endMap;return+Object.keys(t).map(function(e){return n[e]-t[e]}).reduce(function(e,t){return e+t},0)}),new Re("Earliest Ending",function(e){var t=e.endMap,n=Object.values(t);return+(n.reduce(function(e,t){return e+t},0)/n.length)}),new Re("Latest Beginning",function(e){var t=e.startMap,n=Object.values(t);return-(n.reduce(function(e,t){return e+t},0)/n.length)})]}return Object(K.a)(e,[{key:"findCourse",value:function(e){return this.courseMap[e]}},{key:"findSection",value:function(e){return this.crnMap[e]}},{key:"searchCourses",value:function(e){var t=/^\s*([a-zA-Z]*)\s*(\d*)\s*$/.exec(e.toUpperCase())||[],n=Object(E.a)(t,3),r=n[1],a=n[2];return r&&a?this.courses.filter(function(e){return e.subject===r&&e.number.startsWith(a)}):r?this.courses.filter(function(e){return e.subject===r}):a?this.courses.filter(function(e){return e.number.startsWith(a)}):[]}},{key:"getCombinations",value:function(e,t,n){var r=this,a=[];return function s(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(i!==e.length){var o=r.findCourse(e[i]),u=function(e){return!n.includes(e.crn)},l=function(e){return t.includes(e.crn)},d=function(e){return Object(g.a)(t).concat(Object(g.a)(c)).some(function(t){return n=r.findSection(t),a=e,n.meetings.some(function(e){return a.meetings.some(function(t){return e.period&&t.period&&O.some(function(n){return e.days.includes(n)&&t.days.includes(n)})&&e.period.start<t.period.end&&t.period.start<e.period.end})});var n,a})};if(o.hasLab){var f=o.lectures.filter(l),p=o.labs.filter(l);p.length?p.forEach(function(e){e.lectures.filter(u).forEach(function(e){if(l(e))s(i+1,c);else{if(d(e))return;s(i+1,Object(g.a)(c).concat([e.crn]))}})}):f.length?f.forEach(function(e){e.labs.filter(u).forEach(function(e){d(e)||s(i+1,Object(g.a)(c).concat([e.crn]))})}):o.lectures.filter(u).forEach(function(e){d(e)||e.labs.filter(u).forEach(function(t){d(t)||s(i+1,Object(g.a)(c).concat([e.crn,t.crn]))})})}else o.sections.some(l)?s(i+1,c):Object.values(o.sectionGroups).forEach(function(e){var t=e.sections.find(u);t&&!d(t)&&s(i+1,Object(g.a)(c).concat([t.crn]))})}else a.push(c)}(),a.map(function(e){var n={},a={};return r.iterateTimeBlocks(Object(g.a)(t).concat(Object(g.a)(e)),function(e,t){e in n&&!(n[e]>t.start)||(n[e]=t.start),e in a&&!(a[e]<t.end)||(a[e]=t.end)}),{crns:e,startMap:n,endMap:a}})}},{key:"sortCombinations",value:function(e,t){var n=this.sortingOptions[t];return e.map(function(e){return Object(l.a)({},e,{factor:n.calculateFactor(e)})}).sort(function(e,t){return e.factor-t.factor})}},{key:"iterateTimeBlocks",value:function(e,t){var n=this;e.forEach(function(e){n.findSection(e).meetings.forEach(function(e){return e.period&&e.days.forEach(function(n){t(n,e.period)})})})}}]),e}(),xe=function(){function e(t,n){var r=this;Object(q.a)(this,e);var a=Object(E.a)(n,2),s=a[0],i=a[1];this.id=t;var c=this.id.split(" "),o=Object(E.a)(c,2);this.subject=o[0],this.number=o[1],this.title=s,this.sections=Object.keys(i).map(function(e){return new Te(r,e,i[e])});var u=this.sections.filter(function(e){return e.credits>0}),l=this.sections.filter(function(e){return 0===e.credits});this.hasLab=!this.id.startsWith("VIP")&&u.length&&l.length,this.hasLab?(this.lectures=u,this.labs=l,this.lectures.forEach(function(e){return e.labs=r.labs.filter(function(t){return t.id.startsWith(e.id)})}),this.labs.forEach(function(e){return e.lectures=r.lectures.filter(function(t){return e.id.startsWith(t.id)})}),this.lectures.every(function(e){return!e.labs.length})&&(this.lectures.forEach(function(e){return e.labs=r.labs}),this.labs.forEach(function(e){return e.lectures=r.lectures}))):this.sectionGroups=this.distinct(this.sections)}return Object(K.a)(e,[{key:"distinct",value:function(e){var t={};return e.forEach(function(e){var n=e.meetings.map(function(e){return{days:e.days,period:e.period}}),r=JSON.stringify(n),a=t[r];a?a.sections.push(e):t[r]={hash:r,meetings:n,sections:[e]}}),t}}]),e}(),Te=function e(t,n,r){Object(q.a)(this,e);var a=Object(E.a)(r,3),s=a[0],i=a[1],c=a[2];this.course=t,this.id=n,this.crn=s,this.credits=c,this.meetings=i.map(function(e){var t=Object(E.a)(e,5),n=t[0],r=t[1],a=t[2],s=t[3],i=t[4];return{period:"TBA"===n?void 0:{start:y(n.split(" - ")[0]),end:y(n.split(" - ")[1])},days:"&nbsp;"===r?[]:Object(g.a)(r),where:a,instructors:s.map(function(e){return e.replace(/ \(P\)$/,"")}),dateRangeIndex:i}}),this.instructors=T(this.meetings.reduce(function(e,t){return Object(g.a)(e).concat(Object(g.a)(t.instructors))},[]))},Re=function e(t,n){Object(q.a)(this,e),this.label=t,this.calculateFactor=n},Ae=(n(290),n(292),n(294),function(e){function t(e){var n;return Object(q.a)(this,t),(n=Object(J.a)(this,Object(X.a)(t).call(this,e))).handleResize=function(e){var t=n.props.env.mobile,r=x();t!==r&&n.props.setMobile(r)},n.handleSetOverlayCrns=function(e){n.setState({overlayCrns:e})},n.handleExport=function(){var e=n.props.db.oscar,t=n.props.user.pinnedCrns,r=ie();t.forEach(function(t){var n=e.findSection(t);n.meetings.forEach(function(t){if(t.period&&t.days.length){for(var a=e.dateRanges[t.dateRangeIndex],s=n.course.id,i=n.course.title,c=t.where,o=new Date(a.from);!t.days.includes(["-","M","T","W","R","F","-"][o.getDay()]);)o.setDate(o.getDate()+1);o.setHours(t.period.start/60|0,t.period.start%60);var u=new Date(o);u.setHours(t.period.end/60|0,t.period.end%60);var l={freq:"WEEKLY",until:a.to,byday:t.days.map(function(e){return{M:"MO",T:"TU",W:"WE",R:"TH",F:"FR"}[e]})};r.addEvent(s,i,c,o,u,l)}})}),r.download("gt-scheduler")},n.handleDownload=function(){var e=n.captureRef.current;te.a.toPng(e,{width:e.offsetWidth*C,height:e.offsetHeight*C,style:{left:0,transform:"scale(".concat(C,")"),"transform-origin":"top left"}}).then(function(e){return re()(e,"schedule.png")})},n.handleChangeTab=function(e){n.setState({tabIndex:e})},n.handleChangeSemester=function(e){n.props.setTerm(e),n.loadOscar(e)},n.handleSetPinnedCrns=function(e){n.props.setPinnedCrns(e)},n.handleResetPinnedCrns=function(){window.confirm("Are you sure to reset sections you selected?")&&n.props.setPinnedCrns([])},n.handleChangeSortingOptionIndex=function(e){var t=e.target.value;n.props.setSortingOptionIndex(t)},n.state={terms:[],overlayCrns:[],tabIndex:0},n.captureRef=s.a.createRef(),n}return Object(Z.a)(t,e),Object(K.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user.term;t&&this.loadOscar(t),Q.a.get("https://jasonpark.me/gt-schedule-crawler/terms.json").then(function(n){var r=n.data.reverse();if(!t){var a=r[0];e.handleChangeSemester(a)}e.setState({terms:r})}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"loadOscar",value:function(e){var t=this;this.props.setOscar(null),Q.a.get("https://jasonpark.me/gt-schedule-crawler/".concat(e,".json")).then(function(e){var n=new we(e.data);t.memoizedGetCombinations=Object(ae.a)(n.getCombinations.bind(n)),t.memoizedSortCombinations=Object(ae.a)(n.sortCombinations.bind(n)),t.props.setOscar(n)})}},{key:"getTotalCredits",value:function(){var e=this.props.db.oscar;return this.props.user.pinnedCrns.reduce(function(t,n){return t+e.findSection(n).credits},0)}},{key:"render",value:function(){var e=this,t=this.props.env.mobile,n=this.props.db.oscar,r=this.props.user,a=r.term,i=r.desiredCourses,c=r.pinnedCrns,o=r.excludedCrns,u=r.sortingOptionIndex,l=this.state,d=l.terms,f=l.overlayCrns,p=l.tabIndex;if(!n)return null;var h=this.memoizedGetCombinations(i,c,o),m=this.memoizedSortCombinations(h,u);return s.a.createElement("div",{className:w("App",t&&"mobile")},(!t||2===p)&&s.a.createElement("div",{className:"calendar-container"},s.a.createElement(me,{overlayCrns:f})),s.a.createElement("div",{className:"capture-container",ref:this.captureRef},s.a.createElement(me,{className:"fake-calendar"})),(!t||1===p)&&s.a.createElement("div",{className:"sidebar sidebar-combinations"},s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"secondary"},h.length," Combos"),s.a.createElement(pe,{className:"primary"},s.a.createElement("select",{onChange:this.handleChangeSortingOptionIndex,value:u},n.sortingOptions.map(function(e,t){return s.a.createElement("option",{key:t,value:t},e.label)})))),s.a.createElement("div",{className:"scroller"},s.a.createElement(se.AutoSizer,null,function(t){var n=t.width,r=t.height;return s.a.createElement(se.List,{width:n,height:r,rowCount:m.length,rowHeight:100,rowRenderer:function(t){var n=t.index,r=t.key,a=t.style,i=m[n].crns;return s.a.createElement("div",{className:"combination",key:r,style:a,onMouseEnter:function(){return e.handleSetOverlayCrns(i)},onMouseLeave:function(){return e.handleSetOverlayCrns([])},onClick:function(){return e.handleSetPinnedCrns(Object(g.a)(c).concat(Object(g.a)(i)))}},s.a.createElement("div",{className:"number"},n+1),s.a.createElement(me,{className:"calendar-preview",overlayCrns:i,preview:!0}))}})})),s.a.createElement("div",{className:"footer"},s.a.createElement(pe,{onClick:this.handleResetPinnedCrns,disabled:0===c.length},"Reset Sections"))),(!t||0===p)&&s.a.createElement("div",{className:"sidebar sidebar-courses"},s.a.createElement("div",{className:"header"},s.a.createElement("span",{className:"secondary"},this.getTotalCredits()," Credits"),s.a.createElement(pe,{className:"primary"},s.a.createElement("select",{onChange:function(t){return e.handleChangeSemester(t.target.value)},value:a},d.map(function(e){var t=e.substring(0,4),n={"02":"Spring","05":"Summer","08":"Fall"}[e.substring(4)];return s.a.createElement("option",{key:e,value:e},n," ",t)})))),s.a.createElement("div",{className:"scroller"},s.a.createElement("div",{className:"course-list"},i.map(function(t){return s.a.createElement(Ee,{courseId:t,expandable:!0,key:t,onSetOverlayCrns:e.handleSetOverlayCrns})})),s.a.createElement(Ce,null)),s.a.createElement("div",{className:"footer"},s.a.createElement(pe,{text:c.join(", "),disabled:0===c.length},s.a.createElement("span",null,"Copy CRNs")),s.a.createElement(pe,{onClick:this.handleDownload,disabled:0===c.length},"Download as PNG"),s.a.createElement(pe,{onClick:this.handleExport,disabled:0===c.length},"Export Calendar"))),t&&s.a.createElement("div",{className:"tab-container"},["Courses","Combinations","Calendar"].map(function(t,n){return s.a.createElement("div",{className:w("tab",p===n&&"active"),onClick:function(){return e.handleChangeTab(n)},key:n},t)})),s.a.createElement("a",{className:"github-fork-ribbon left-bottom fixed",href:"https://github.com/parkjs814/gt-scheduler",target:"_blank",rel:"noopener noreferrer","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"))}}]),t}(ce)),Me=Object(o.b)(function(e){return{env:e.env,db:e.db,user:e.user}},z)(Ae),De=(n(296),Object(u.c)(Object(u.b)(r)));c.a.render(s.a.createElement(o.a,{store:De},s.a.createElement(Me,null)),document.getElementById("root"))}},[[138,2,1]]]);
//# sourceMappingURL=main.62a11d38.chunk.js.map