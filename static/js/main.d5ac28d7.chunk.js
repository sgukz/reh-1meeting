(this["webpackJsonpreh-1meeting-new"]=this["webpackJsonpreh-1meeting-new"]||[]).push([[0],{11:function(e,t){t.main_config={APP_URL:"https://api-reh-1meeting-forward.herokuapp.com",TOKEN_APP:"d7073ee6cc586814598f5e91c398ccf0a2976b91927b9d55190fa12ac95acd0a85d7eff3050bb94e05c3263b7b3d7faad64b5f1ab4c8d972379551ad0789aeaf"}},164:function(e,t,a){e.exports=a(334)},172:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},224:function(e,t){},226:function(e,t){},240:function(e,t){},242:function(e,t){},270:function(e,t){},272:function(e,t){},273:function(e,t){},279:function(e,t){},281:function(e,t){},299:function(e,t){},301:function(e,t){},313:function(e,t){},316:function(e,t){},333:function(e){e.exports=JSON.parse('{"name":"reh-1meeting-new","version":"1.14.0","private":true,"// If You want to install mdbreact from our GitLab repository, please replace \'4.27.0\' with gitURL provided here ->":"git+https://oauth2:<YOUR-TOKEN-GOES-HERE>@git.mdbootstrap.com/mdb/react/re-pro.git","dependencies":{"@line/liff":"^2.7.1","axios":"^0.21.1","jsonwebtoken":"^8.5.1","mdbreact":"4.27.0","react":"^16.12.0","react-dom":"^16.12.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","react-select":"^3.2.0","sweetalert2":"^10.13.0"},"scripts":{"start":"react-scripts start","predeploy":"npm run build","deploy":"gh-pages -d build","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject"},"devDependencies":{"gh-pages":"^3.1.0","renamer":"^1.0.0","rimraf":"^2.6.2"},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"],"homepage":"http://sgukz.github.io/reh-1meeting/"}')},334:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(30),s=a.n(r),c=(a(169),a(170),a(171),a(172),a(3)),o=a(25),i=a(14),m=a.n(i),d=a(57),h=a.n(d),g=a(9),u=a(38),p=a.n(u),E=a(58),f=a(6),N=a(23),b=a.n(N),v=a(19),x=a.n(v),y=a(11),C=a.n(y),O=(a(216),(new Date).getTime());function S(e,t){var a=e.split(" "),n=a[0].split("-"),l=a[1].split(":"),r="".concat(n[2]," ").concat({"01":"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21","02":"\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c","03":"\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21","04":"\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19","05":"\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21","06":"\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19","07":"\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21","08":"\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21","09":"\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",10:"\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",11:"\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",12:"\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"}[n[1]]," ").concat(parseInt(n[0])+543),s="".concat(l[0],":").concat(l[1],"\u0e19.");return 1===t?r:2===t?s:r+" "+s}var j=e=>{var t=Object(g.f)(),a=Object(n.useState)("0"),r=Object(f.a)(a,2),s=r[0],o=r[1],i=Object(n.useState)(""),d=Object(f.a)(i,2),h=d[0],u=d[1],N=Object(n.useState)(""),v=Object(f.a)(N,2),y=v[0],j=v[1],_=Object(n.useState)(""),w=Object(f.a)(_,2),I=w[0],P=w[1],k=Object(n.useState)(""),A=Object(f.a)(k,2),z=A[0],T=A[1],B=Object(n.useState)(""),L=Object(f.a)(B,2),D=L[0],U=L[1],R=Object(n.useState)(""),F=Object(f.a)(R,2),J=F[0],q=F[1],K=Object(n.useState)(""),H=Object(f.a)(K,2),M=H[0],W=H[1],Q=Object(n.useState)(""),G=Object(f.a)(Q,2),Y=G[0],$=G[1],V=Object(n.useState)(""),X=Object(f.a)(V,2),Z=X[0],ee=X[1],te=Object(n.useState)(!1),ae=Object(f.a)(te,2),ne=ae[0],le=ae[1],re=Object(n.useState)(""),se=Object(f.a)(re,2),ce=se[0],oe=se[1],ie=Object(n.useState)(""),me=Object(f.a)(ie,2),de=me[0],he=me[1],ge=Object(n.useState)(0),ue=Object(f.a)(ge,2),pe=ue[0],Ee=ue[1],fe=function(){var e=Object(E.a)(p.a.mark((function e(a){var n,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(C.a.main_config.APP_URL,"/user"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)},e.next=4,b.a.post(n,{userid:a},{headers:l}).then(e=>{e.data.data.length>0?localStorage.setItem("user",JSON.stringify(e.data.data[0].data_info)):(localStorage.removeItem("user"),localStorage.removeItem("userid"),t.push("/reh-1meeting/register"))}).catch(e=>{console.log(e)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=()=>{m.a.init({liffId:"1655384297-BvEewepx"},()=>{m.a.isLoggedIn()?m.a.getProfile().then(t=>{o(t.userId),fe(t.userId);var a=e.location.search.split("="),n=a.length>0?a[1]:"";""!==n&&((e=>{var t=e,a="".concat(C.a.main_config.APP_URL,"/getMeetingByDocno/").concat(t),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.get(a,{headers:n}).then(e=>{if(200===e.data.code){var t=new Date(e.data.data[0].start_date).getTime(),a=new Date(e.data.data[0].end_date).getTime();(t-O)/1e3>1800&&Ee(1),O>a&&Ee(2),u(e.data.data[0].docno),j(S(e.data.data[0].start_date,1)),P(S(e.data.data[0].start_date,2)),T(S(e.data.data[0].end_date,1)),U(S(e.data.data[0].end_date,2)),q(e.data.data[0].meeting_host_name),W(e.data.data[0].meeting_name),$(e.data.data[0].human_amount),ee(e.data.total[0].total_meeting),le(!0),localStorage.setItem("isMeeting","true")}else 400===e.data.code&&localStorage.setItem("isMeeting","false")}).catch(e=>{console.log(e)})})(n),((e,t)=>{var a="".concat(C.a.main_config.APP_URL,"/getCheckInCheckOut/").concat(e,"/").concat(t),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.get(a,{headers:n}).then(e=>{200===e.data.code&&(oe(null!==e.data.data[0].check_in_date?S(e.data.data[0].check_in_date,3):""),he(null!==e.data.data[0].check_out_date?S(e.data.data[0].check_out_date,3):""))}).catch(e=>{console.log(e)})})(t.userId,n))}):alert("No login!")},e=>console.log(e))};return Object(n.useEffect)(()=>{Ne()}),l.a.createElement("div",null,l.a.createElement(c.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(c.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(c.h,null,l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(c.d,null,"USERID : "+s,l.a.createElement(c.e,{className:ne?"hidden":""},l.a.createElement("h6",{className:"h6-responsive mb-4 text-center"},l.a.createElement("strong",{className:"font-weight-bold text-primary"},"\u0e01\u0e23\u0e38\u0e13\u0e32 Scan QR Code \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21"))),l.a.createElement("div",{className:ne?"":"hidden"},l.a.createElement(c.e,{md:"12"},l.a.createElement("blockquote",{className:"blockquote bq-primary"},l.a.createElement("p",{className:"bq-title",style:{fontSize:"16px"}},M),l.a.createElement("strong",{style:{fontSize:"16px"}},"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d ",J),l.a.createElement("div",null,l.a.createElement("strong",{style:{fontSize:"14px"}},y===z?"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+y:"\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 "+y+" - "+z)),l.a.createElement("div",null,l.a.createElement("small",{style:{fontSize:"14px"}},"\u0e40\u0e27\u0e25\u0e32 ",I," - ",D)),l.a.createElement("div",null,l.a.createElement("small",{style:{fontSize:"14px"}},"\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e41\u0e25\u0e49\u0e27 ",Z,"/",Y," \u0e04\u0e19")))),l.a.createElement(c.e,{className:"text-center"},l.a.createElement("div",null,l.a.createElement("span",{className:0===pe?"hidden":1===pe?"text-primary":"text-danger"},1===pe?"\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32\u0e2b\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e44\u0e14\u0e49\u0e01\u0e48\u0e2d\u0e19 30 \u0e19\u0e32\u0e17\u0e35":"\u0e08\u0e1a\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e41\u0e25\u0e49\u0e27")),l.a.createElement("div",null,l.a.createElement("span",{className:"text-success"},""!==ce?"\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d "+ce:"")),l.a.createElement("div",{className:"mt-3"},l.a.createElement("span",{className:"text-danger"},""!==de?"\u0e40\u0e0a\u0e47\u0e04\u0e40\u0e2d\u0e32\u0e17\u0e4c\u0e40\u0e21\u0e37\u0e48\u0e2d "+de:"")),l.a.createElement("div",{className:1===pe||2===pe?"hidden":""},l.a.createElement(c.c,{gradient:"blue",size:"sm",className:""!==ce?"hidden":"",onClick:()=>((e,t)=>{var a="".concat(C.a.main_config.APP_URL,"/saveCheckIn"),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(a,{userid:e,docno:t},{headers:n}).then(e=>{200===e.data.code?x.a.fire({title:"\u0e40\u0e0a\u0e47\u0e04\u0e2d\u0e34\u0e19\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e40\u0e27\u0e25\u0e32 ".concat(S(e.data.check_date[0].check_in_date,3)),showDenyButton:!1,showCancelButton:!1,showCloseButton:!1,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07"}).then(e=>{e.isConfirmed&&window.location.reload()}):400===e.data.code&&x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"error"})}).catch(e=>{console.log(e)})})(s,h)},"Check-in"),l.a.createElement(c.c,{size:"sm",color:"danger",className:""!==de?"hidden":"",onClick:()=>((e,t)=>{var a="".concat(C.a.main_config.APP_URL,"/saveCheckOut"),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(a,{userid:e,docno:t},{headers:n}).then(e=>{200===e.data.code?x.a.fire({title:"\u0e40\u0e0a\u0e47\u0e04\u0e40\u0e2d\u0e49\u0e32\u0e17\u0e4c\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e40\u0e27\u0e25\u0e32 ".concat(S(e.data.check_date[0].check_out_date,3)),showDenyButton:!1,showCancelButton:!1,showCloseButton:!1,confirmButtonText:"\u0e15\u0e01\u0e25\u0e07"}).then(e=>{e.isConfirmed&&window.location.reload()}):400===e.data.code&&x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"error"})}).catch(e=>{console.log(e)})})(s,h)},"Check-out"))))))))),l.a.createElement("div",{className:ne?"footer hidden":"footer"},l.a.createElement(c.e,{className:"text-center"},l.a.createElement(c.c,{floating:"true",gradient:"blue",rounded:!0,color:"danger",onClick:()=>window.location="https://line.me/R/nv/QRCodeReader"},l.a.createElement(c.i,{icon:"qrcode",size:"4x"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"ml-2",style:{paddingBottom:"15px"}},"SCAN QR Code"))))))},_=(a(217),a(218));class w extends n.Component{constructor(e){super(e),this.InitailizeLiff=()=>{m.a.init({liffId:"1655384297-BvEewepx"},()=>{m.a.isLoggedIn()?m.a.getProfile().then(e=>{localStorage.setItem("profile-line",JSON.stringify(e)),this.LoadDataUser(),this.setState({displayName:e.displayName,urlPicture:e.pictureUrl})}):alert("No login!")},e=>console.log(e))},this.state={userid:"",pname:"",fname:"",lname:"",idcard:"",email:"",position:"",department:"",government:"",phone:"",isChange:!1,displayName:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).displayName:"",urlPicture:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).pictureUrl:h.a},this.handleChange=this.handleChange.bind(this),this.submitHandler=this.submitHandler.bind(this),this.LoadDataUser=this.LoadDataUser.bind(this)}handleChange(e){var t=e.target.name,a=e.target.value;this.setState({[t]:a})}submitHandler(e){e.preventDefault(),e.target.className+=" was-validated";var t=this.state,a=t.userid,n=t.pname,l=t.fname,r=t.lname,s={userid:a,idcard:t.idcard,pname:n,fname:l,lname:r,email:t.email,position:t.position,department:t.department,government:t.government,phone:t.phone},c="".concat(C.a.main_config.APP_URL,"/user/update"),o={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(c,s,{headers:o}).then(e=>{200===e.data.code?(localStorage.setItem("user",JSON.stringify(e.data.data.token)),localStorage.setItem("userid",JSON.stringify(e.data.data.userid)),x.a.fire({title:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48...",icon:"success",showConfirmButton:!1}),setTimeout(()=>{window.location.reload()},1e3)):400===e.data.code?x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.msg,icon:"warning"}):x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:e.data.error,icon:"error"})})}LoadDataUser(){var e=localStorage.getItem("user");if(e){var t=_.verify(JSON.parse(e),C.a.main_config.TOKEN_APP);this.setState({userid:t.userid,pname:t.pname,fname:t.fname,lname:t.lname,idcard:t.idcard,email:t.email,position:t.position,department:t.department,government:t.government,phone:t.phone})}else this.props.history.push("/reh-1meeting/register")}componentDidMount(){this.InitailizeLiff()}render(){var e=this.state,t=e.displayName,a=e.urlPicture;return l.a.createElement("div",null,l.a.createElement(c.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(c.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(c.h,null,l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(c.d,null,l.a.createElement(c.e,{className:"text-center"},l.a.createElement("img",{src:a,width:"150",height:"150",alt:"",className:"rounded-circle"})),l.a.createElement(c.e,{md:"12"},l.a.createElement("h4",{className:"font-weight-bold mt-2 mb-4 text-center"},t),l.a.createElement("h5",{className:"text-primary"},"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27"),l.a.createElement("form",{className:"needs-validation",onSubmit:this.submitHandler},l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"pname",className:"grey-text"},"\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.pname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.pname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"pname",required:!0})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"fname",className:"grey-text"},"\u0e0a\u0e37\u0e48\u0e2d ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.fname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.fname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"fname",required:!0})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"lname",className:"grey-text"},"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.lname),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.lname,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"lname",required:!0}))),l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"," ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.idcard),l.a.createElement("input",{onChange:this.handleChange,type:"number",value:this.state.idcard,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"idcard"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e2d\u0e35\u0e40\u0e21\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.email),l.a.createElement("input",{onChange:this.handleChange,type:"email",value:this.state.email,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"email"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"position",className:"grey-text"},"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.position),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.position,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"position"}))),l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"department",className:"grey-text"},"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.department),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.department,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"department"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"main_company",className:"grey-text"},"\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.government),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.government,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"government"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"phone_number",className:"grey-text"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"),l.a.createElement("div",{className:this.state.isChange?"hidden":""},this.state.phone),l.a.createElement("input",{onChange:this.handleChange,type:"text",value:this.state.phone,className:"form-control ".concat(this.state.isChange?"":"hidden"),name:"phone"}))),!0===this.state.isChange?l.a.createElement(c.c,{gradient:"blue",type:"submit"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e01\u0e49\u0e44\u0e02"):l.a.createElement("strong",{onClick:()=>this.setState({isChange:!0}),className:"btn btn-outline-success"},"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"))))))))))}}var I=w,P=()=>{var e=Object(g.f)(),t=Object(n.useState)("0"),a=Object(f.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)(""),i=Object(f.a)(o,2),d=i[0],h=i[1],u=Object(n.useState)(""),N=Object(f.a)(u,2),v=N[0],y=N[1],O=Object(n.useState)(""),S=Object(f.a)(O,2),j=S[0],_=S[1],w=Object(n.useState)(""),I=Object(f.a)(w,2),P=I[0],k=I[1],A=Object(n.useState)(""),z=Object(f.a)(A,2),T=z[0],B=z[1],L=Object(n.useState)(""),D=Object(f.a)(L,2),U=D[0],R=D[1],F=Object(n.useState)(""),J=Object(f.a)(F,2),q=J[0],K=J[1],H=Object(n.useState)("\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e23\u0e49\u0e2d\u0e22\u0e40\u0e2d\u0e47\u0e14"),M=Object(f.a)(H,2),W=M[0],Q=M[1],G=Object(n.useState)(""),Y=Object(f.a)(G,2),$=Y[0],V=Y[1],X=function(){var t=Object(E.a)(p.a.mark((function t(a){var n,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(C.a.main_config.APP_URL,"/user"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)},t.next=4,b.a.post(n,{userid:a},{headers:l}).then(t=>{t.data.data.length>0&&(localStorage.setItem("user",JSON.stringify(t.data.data[0].data_info)),e.push("/reh-1meeting/"))}).catch(e=>{console.log(e)});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)(()=>{m.a.init({liffId:"1655384297-9EroMoWn"},()=>{m.a.isLoggedIn()?m.a.getProfile().then(e=>{s(e.userId),X(e.userId)}):alert("No login!")},e=>console.log(e))}),l.a.createElement("div",null,l.a.createElement(c.g,{color:"red lighten-5",className:"sectionPage",style:{height:100}}),l.a.createElement("div",{className:"mt-3 mb-5"},l.a.createElement(c.b,{type:"zoomIn",duration:"500ms"},l.a.createElement(c.h,null,l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"10",className:"mx-auto float-none white z-depth-1 py-2 px-2"},l.a.createElement(c.d,null,"USERID : "+r,l.a.createElement(c.e,{md:"12"},l.a.createElement("h5",{className:"text-primary"},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48"),l.a.createElement("form",{className:"needs-validation",onSubmit:t=>{t.preventDefault(),t.target.className+=" was-validated";var a={userid:r,idcard:P,pname:d,fname:v,lname:j,email:T,position:U,department:q,government:W,phone:$},n="".concat(C.a.main_config.APP_URL,"/user/register"),l={"Content-Type":"application/json",Authorization:"Bearer ".concat(C.a.main_config.TOKEN_APP)};b.a.post(n,a,{headers:l}).then(t=>{200===t.data.code?(localStorage.setItem("user",JSON.stringify(t.data.data.token)),x.a.fire({title:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e23\u0e49\u0e2d\u0e22",text:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48...",icon:"success"}),e.push("/reh-1meeting/")):400===t.data.code?x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:t.data.msg,icon:"warning"}):x.a.fire({title:"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19",text:t.data.error,icon:"error"})})}},l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"pname",className:"grey-text"},"\u0e04\u0e33\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>h(e.target.value),type:"text",value:d,className:"form-control",name:"pname",required:!0})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"fname",className:"grey-text"},"\u0e0a\u0e37\u0e48\u0e2d ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>y(e.target.value),type:"text",value:v,className:"form-control",name:"fname",required:!0})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"lname",className:"grey-text"},"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>_(e.target.value),type:"text",value:j,className:"form-control",required:!0}))),l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19"," ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>k(e.target.value),type:"number",value:P,className:"form-control"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"email",className:"grey-text"},"\u0e2d\u0e35\u0e40\u0e21\u0e25 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>B(e.target.value),type:"email",value:T,className:"form-control"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07")),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"position",className:"grey-text"},"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>R(e.target.value),type:"text",value:U,className:"form-control"}))),l.a.createElement(c.t,null,l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"department",className:"grey-text"},"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>K(e.target.value),type:"text",value:q,className:"form-control"})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"main_company",className:"grey-text"},"\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23 ",l.a.createElement("span",{className:"text-danger"},"*")),l.a.createElement("input",{onChange:e=>Q(e.target.value),type:"text",value:W,className:"form-control",readOnly:!0})),l.a.createElement(c.e,{md:"4",className:"mb-3"},l.a.createElement("label",{htmlFor:"phone_number",className:"grey-text"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"),l.a.createElement("input",{onChange:e=>V(e.target.value),type:"text",value:$,className:"form-control"}))),l.a.createElement(c.c,{gradient:"blue",type:"submit"},"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"))))))))))};class k extends l.a.Component{render(){return l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",component:j}),l.a.createElement(g.a,{exact:!0,path:"/reh-1meeting",component:j}),l.a.createElement(g.a,{exact:!0,path:"/reh-1meeting/profile",component:I}),l.a.createElement(g.a,{exact:!0,path:"/reh-1meeting/register",component:P}),l.a.createElement(g.a,{render:function(){return l.a.createElement("h1",null,"Page Not Found")}}))}}var A=k,z=a(333).version;class T extends n.Component{constructor(...e){super(...e),this.state={collapseID:"",displayName:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).displayName:"",urlPicture:localStorage.getItem("profile-line")?JSON.parse(localStorage.getItem("profile-line")).pictureUrl:h.a},this.toggleCollapse=e=>()=>this.setState(t=>({collapseID:t.collapseID!==e?e:""})),this.closeCollapse=e=>()=>{var t=this.state.collapseID;window.scrollTo(0,0),t===e&&this.setState({collapseID:""})},this.InitailizeLiff=()=>{m.a.init({liffId:"1655384297-BvEewepx"},()=>{m.a.isLoggedIn()?m.a.getProfile().then(e=>{localStorage.setItem("profile-line",JSON.stringify(e)),this.setState({displayName:e.displayName,urlPicture:e.pictureUrl})}):alert("No login!")},e=>console.log(e))}}componentDidMount(){}render(){var e=l.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.toggleCollapse("mainNavbarCollapse")}),t=this.state,a=t.collapseID,n=t.displayName,r=t.urlPicture;return l.a.createElement(o.a,null,l.a.createElement("div",{className:"flyout"},l.a.createElement(c.n,{color:"red accent-3",dark:!0,expand:"md",fixed:"top",scrolling:!0},l.a.createElement(c.o,{href:"/reh-1meeting",className:"py-0 font-weight-bold"},l.a.createElement("strong",{className:"align-middle"},"REH 1Meeting"),"\xa0",l.a.createElement("strong",{style:{fontSize:"12px"}},"v."+z)),l.a.createElement(c.q,{onClick:this.toggleCollapse("mainNavbarCollapse")}),l.a.createElement(c.f,{id:"mainNavbarCollapse",isOpen:a,navbar:!0},l.a.createElement(c.p,{right:!0},l.a.createElement(c.l,null,l.a.createElement(c.m,{exact:!0,to:"/reh-1meeting/meeting-history",onClick:this.closeCollapse("mainNavbarCollapse")},l.a.createElement("strong",null,"\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e40\u0e02\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21"))),l.a.createElement(c.l,null,l.a.createElement(c.m,{exact:!0,to:"/reh-1meeting/profile",onClick:this.closeCollapse("mainNavbarCollapse")},l.a.createElement("strong",null,n)))))),a&&e,l.a.createElement("main",{style:{marginTop:"4rem"}},l.a.createElement("div",{className:"mt-2 mr-2",style:{textAlign:"right"}},l.a.createElement(o.b,{to:"/reh-1meeting/profile",style:{fontSize:"14px",cursor:"pointer"}},l.a.createElement("img",{src:r,width:"45",height:"45",alt:"",className:"rounded-circle mr-1"}),n)),l.a.createElement(A,null))))}}var B=T,L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reh-1meeting",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{var e="".concat("/reh-1meeting","/service-worker.js");L?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):D(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):D(e)})}}()},57:function(e,t,a){e.exports=a.p+"static/media/default-image.440b9b23.jpg"}},[[164,1,2]]]);
//# sourceMappingURL=main.d5ac28d7.chunk.js.map