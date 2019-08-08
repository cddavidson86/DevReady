(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports=[{id:0,q:"Why would someone want to use JavaScript on a Web page?",a:["To react to events that occur with Web page use","To read and write HTML","To validate data in a Web form","All of the above"],c:3},{id:1,q:"Why would someone use a semi-colon when writing JavaScript?",a:["To put more than one statement on the same line","Because a switch statement requires them","Because a return statement requires them","To increase the power of an integer"],c:0},{id:2,q:"How would you properly identify a segment of JavaScript to a Web browser?",a:["Use an open SCRIPT tag with a type='text/javascript' attribute","Write JavaScript anywhere and the browser always recognizes it","Use an open JAVASCRIPT tag with a type='text' attribute","Use an open APPLET tag with a type='text/javascript' attribute"],c:0},{id:3,q:"How can someone properly open a second Web browser window with a JavaScript statement?",a:["document.openWin('http://www.thedomain.com/')","openWindow('http://www.thedomain.com/')","window.open('http://www.thedomain.com/')","document.open('http://www.thedomain.com/')"],c:2},{id:4,q:"Which of the following JavaScript statements will assign the word 'and' to variable s?  -  var str='Mix and Match'",a:["s = str.substring(4,3);","s = str.substring(5,3);","s = str.substring(4,7);","s = str.substring(5,7);"],c:2},{id:5,q:"Where on a Web page does the following JavaScript line belong?  -  document.write(IBM_stock_price)",a:["In the HEAD element of the Web page","Between the HEAD and BODY elements of a Web page","In the BODY element of a Web page","After the BODY element of a Web page"],c:2}]},12:function(e){e.exports=[{id:0,q:"What does ~~~~~~5 evaluate to?",a:["+5","-11","+11","-5"],c:2},{id:1,q:"Given a function that does not return any value, what value is shown when executed at the shell?",a:["int","bool","void","None"],c:3},{id:2,q:"Which module in Python supports regular expressions?",a:["re","regex","pyregex","None of the above"],c:0},{id:3,q:"________ is a simple but incomplete version of a function.",a:["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],c:0},{id:4,q:"To start Python from the command prompt, use the command ______",a:["execute python","go python","python","run python"],c:2},{id:5,q:"Which of the following is correct about Python?",a:["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],c:2}]},13:function(e){e.exports=[{id:0,q:"What does CSS stand for?",a:["Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets","Cascading Style Sheets"],c:3},{id:1,q:"What is the correct HTML for referring to an external style sheet?",a:["<style src='mystyle.css'>","<style>mystyle.css</stylesheet>","<link rel='stylesheet' type='test/css' href='mystyle.css"," All of these"],c:2},{id:2,q:"Which of the following selector selects an element if it\u2019s the only child of its parent?",a:[":root",":nth-oftype(n)",":only-child","none of the mentioned"],c:2},{id:3,q:"Which of the following selector selects all elements of E that have the attribute attr that end with the given value?",a:["E[attr^=value]","E[attr$=value]","E[attr*=value]","none of the mentioned"],c:1},{id:4,q:"Which of the following selector selects the element that is the target of a referring URI?",a:[":target",":selection","::selection",":URI"],c:0},{id:5,q:"Which of the following selector selects the elements that are checked?",a:["E ~ F","::after",":checked","none of the mentioned"],c:2}]},14:function(e){e.exports=[{id:0,q:" What is ReactJS?",a:["Server-side Framework","User-interface framework","Both","None"],c:2},{id:1,q:"What are the limitations of ReactJS?",a:["React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development","React is using inline templating and JSX. This can seem awkward to some developers","The library of react is too large"," All of these"],c:3},{id:2,q:" How can you access the state of a component from inside of a member function?",a:["this.getState()","this.prototype.stateValue","this.state"," this.values"],c:3},{id:3,q:"Props are __________ into other components",a:["Injected","Methods","Both A and B","All of these"],c:0},{id:4,q:"Which of the following API is a MUST for every ReactJS component?",a:["getInitialState","render","renderComponent","None"],c:2},{id:5,q:"What is Babel?",a:["A transpiler.","An interpreter","A Compiler","Both Compiler and Transpilar"],c:3}]},15:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/ab_ReadyDev-02.20eefeb2.png"},30:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),c=a(65),i=a(67),s=a(66),m=a(10),u=a(2),d=a(3),p=a(5),h=a(4),f=a(6),E=(a(36),a(19)),v=a.n(E),b={getDevelopers:function(e){return v.a.post("/api/developers/login",e)},saveDevelopers:function(e){return v.a.post("/api/developers/signup",e)}},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r))},a.submission=function(e){e.preventDefault(),a.state.email&&a.state.password&&b.getDevelopers({email:a.state.email,password:a.state.password})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"landingHeader"},"Welcome to ReadyDev"),r.a.createElement("h4",{id:"landingSubHeader"},"Get Ready, Stay Ready"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"logInForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"emailaccount"},"Email"),r.a.createElement("br",null),r.a.createElement("input",{type:"text/email",onChange:this.handleInputChange,className:"form-control",id:"emailaccount",value:this.state.email,name:"email",placeholder:"Newdev@greatdev.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{type:"text/password",onChange:this.handleInputChange,className:"form-control",id:"password",value:this.state.password,name:"password",placeholder:"Password"}),r.a.createElement("br",null)),r.a.createElement("button",{id:"logIn",className:"btn btn-primary",type:"submit",onClick:this.submission},"LogIn"),r.a.createElement("button",{id:"createAcct",className:"btn btn-primary",type:"submit"},"Register"))),r.a.createElement("div",{className:"Logo"}))}}]),t}(n.Component),g=(a(55),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={developername:"",email:"",password:"",felony:!1,veteran:!1,aboutMe:"",experience:0,companyName:""},a.submission=function(e){e.preventDefault(),a.state.name&&a.state.email&&a.state.password&&a.state.aboutme&&a.state.experience&&b.saveDevelopers({name:a.state.name,email:a.state.email,password:a.state.password,aboutMe:a.state.aboutMe,felony:a.state.felony,experience:a.state.experience,veteran:a.state.veteran}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r))},a.vet=function(e){a.setState({veteran:!0})},a.vetF=function(e){a.setState({veteran:!1})},a.felon=function(e){a.setState({felony:!0})},a.felonF=function(e){a.setState({felony:!0})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"create"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Create Developer Account"),r.a.createElement("h3",null,"Sign Up and Start Taking Tests!")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"username"},"Name"),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.name,type:"text/name",id:"username",onChange:this.handleInputChange,className:"form-control",placeholder:"John Doe",name:"developername"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"emailaccount"},"Email"),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.email,onChange:this.handleInputChange,type:"text/email",className:"form-control",id:"emailaccount",placeholder:"Newdev@greatdev.com",name:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.password,onChange:this.handleInputChange,type:"text/password",className:"form-control",id:"password",placeholder:"Password",name:"password"}),r.a.createElement("br",null)),r.a.createElement("p",null,"How many years of experience do you have?"),r.a.createElement("input",{type:"number",value:this.state.experience,onChange:this.handleInputChange,name:"experience"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Have you ever been convicted of a felony?"),r.a.createElement("input",{type:"radio",onClick:this.felon,name:"felony"})," Yes ",r.a.createElement("input",{type:"radio",onClick:this.felonF,name:"felony"})," No",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Are you a veteran?"),r.a.createElement("input",{type:"radio",onClick:this.vet,name:"veteran"})," Yes ",r.a.createElement("input",{type:"radio",onClick:this.vetF,name:"veteran"})," No",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"referredby"},"If referred by a Company who sent you?"),r.a.createElement("select",{class:"form-control",id:"referredby",value:this.companyName,onChange:this.handleInputChange,name:"companyname"},r.a.createElement("option",null,"Apple"),r.a.createElement("option",null,"Microsoft"),r.a.createElement("option",null,"Walmart"),r.a.createElement("option",null,"Capital One"),r.a.createElement("option",null,"Chase"))),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"aboutme"},"Tell Us About Yourself!"),r.a.createElement("br",null),r.a.createElement("textarea",{className:"form-control",id:"aboutme",rows:"5",value:this.state.aboutMe,onChange:this.handleInputChange,name:"aboutme"}),r.a.createElement("br",null)),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.submission},"Create Account"))))}}]),t}(n.Component));var w=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus."))},C=a(64),S=(a(56),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={tests:[],subject:""},a.loadTests=function(){b.getTests().then(function(e){return a.setState({tests:e.data,subject:""})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&b.saveTest({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadTests()}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron-test"},r.a.createElement("h1",{id:"landingHeader"},"Available Tests")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("i",{class:"devicon-javascript-plain"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(C.a,{to:"/tests/JavaScript",class:"btn btn-primary"},"Get JavaScript Certified"))),r.a.createElement("div",{className:"card"},r.a.createElement("i",{class:"devicon-python-plain"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(C.a,{to:"/tests/Python",class:"btn btn-primary"},"Get Python Certified"))),r.a.createElement("div",{className:"card"},r.a.createElement("i",{class:"devicon-react-original"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(C.a,{to:"/tests/React",class:"btn btn-primary"},"Get React Certified"))),r.a.createElement("div",{className:"card"},r.a.createElement("i",{class:"devicon-css3-plain"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}),r.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(C.a,{to:"/tests/CSS3",class:"btn btn-primary"},"Get CSS3 Certified")))))}}]),t}(n.Component));a(59);function k(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function N(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={developers:[]},a.loadDevs=function(){b.getDevelopers().then(function(e){return a.setState({developers:e.data})}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadDevs()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{id:"headtext"},"Current Developers"),r.a.createElement("h3",{id:"headtext"},"ReadyDev puts developers through extreme tests to ensure that they are ready to hit the ground running in any area they earn certifications in on our site.")),this.state.developers.length?r.a.createElement(k,null,this.state.developers.map(function(e){return r.a.createElement(N,{key:e._id},r.a.createElement("a",{href:"/developers/"+e._id},r.a.createElement("strong",null,"Name: ",e.name," ",r.a.createElement("br",null),"Email: ",e.email),r.a.createElement("p",null," Years of Experience: ",e.experience),e.veteran?r.a.createElement("p",null,"This member is a Veteran!"):"",e.felony?r.a.createElement("p",null,"This member is a convicted felon."):"",e.score<79?r.a.createElement("p",null,"This member has earned our CSS Certification!"):"",r.a.createElement("p",null,"About Me: ",e.aboutMe," "),r.a.createElement("p",null,"Member since: ",e.date)))})):r.a.createElement("h1",{id:"headtext"},"No Developers to Show! Check Back Later!"))}}]),t}(n.Component);function j(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function O(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function R(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var A=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};var q=function(){return r.a.createElement(j,{fluid:!0},r.a.createElement(O,null,r.a.createElement(R,{size:"md-12"},r.a.createElement(A,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},I=(a(60),a(27)),T=a.n(I);var W=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"logo-image"},r.a.createElement("img",{src:T.a})),r.a.createElement("nav",{class:"menu"},r.a.createElement("ol",null,r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/home"},"Home")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"#0"},"Info")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/testSelector"},"Tests"),r.a.createElement("ol",{class:"sub-menu"},r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/tests/JavaScript"},"JavaScript")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/tests/Python"},"Python")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/tests/CSS3"},"CSS")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/tests/React"},"React")))),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"#0"},"Jobs"),r.a.createElement("ol",{class:"sub-menu"},r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"#0"},"Employers")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"#0"},"Some Dude")),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"/about"},"Info")))),r.a.createElement("li",{class:"menu-item"},r.a.createElement("a",{href:"#0"},"Contact")))))},D=(a(15),a(11)),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],responses:{},score:0},a.handleRadioClick=function(e,t){var n=parseInt(e.target.value),r=a.state.responses;r[t]=n,a.setState({responses:r}),console.log("Question "+(t+1)+" was updated to choice (array index of) "+n+" --- The correct answer = "+D[t].c)},a.handleSubmit=function(){for(var e=0,t=0;t<D.length;t++)a.state.responses[t]===D[t].c&&(e+=16.6);a.setState({score:e}),console.log("The test score is "+e)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={};D.forEach(function(t){e[t.id]=null}),this.setState({data:D,responses:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},this.state.data.map(function(t){return r.a.createElement("div",{key:t.id,className:"card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Question ",t.id+1,":  ",t.q)),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"0",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[0]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"1",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[1]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"2",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[2]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"3",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[3]))}),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Submit Answers")))}}]),t}(n.Component),M=a(12),J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],responses:{},score:0},a.handleRadioClick=function(e,t){var n=parseInt(e.target.value),r=a.state.responses;r[t]=n,a.setState({responses:r}),console.log("Question "+(t+1)+" was updated to choice (array index of) "+n+" --- The correct answer = "+M[t].c)},a.handleSubmit=function(){for(var e=0,t=0;t<M.length;t++)a.state.responses[t]===M[t].c&&(e+=16.6);a.setState({score:e}),console.log("The test score is "+e)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={};M.forEach(function(t){e[t.id]=null}),this.setState({data:M,responses:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},this.state.data.map(function(t){return r.a.createElement("div",{key:t.id,className:"card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Question ",t.id+1,":  ",t.q)),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"0",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[0]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"1",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[1]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"2",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[2]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"3",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[3]))}),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Submit Answers")))}}]),t}(n.Component),P=a(13),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],responses:{},cssScore:0},a.handleRadioClick=function(e,t){var n=parseInt(e.target.value),r=a.state.responses;r[t]=n,a.setState({responses:r}),console.log("Question "+(t+1)+" was updated to choice (array index of) "+n+" --- The correct answer = "+P[t].c)},a.handleSubmit=function(){for(var e=0,t=0;t<P.length;t++)a.state.responses[t]===P[t].c&&(e+=16.6);a.setState({cssScore:e}),console.log("The test score is "+e)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={};P.forEach(function(t){e[t.id]=null}),this.setState({data:P,responses:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},this.state.data.map(function(t){return r.a.createElement("div",{key:t.id,className:"card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Question ",t.id+1,":  ",t.q)),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"0",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[0]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"1",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[1]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"2",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[2]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"3",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[3]))}),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Submit Answers")))}}]),t}(n.Component),H=a(14),F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],responses:{},score:0},a.handleRadioClick=function(e,t){var n=parseInt(e.target.value),r=a.state.responses;r[t]=n,a.setState({responses:r}),console.log("Question "+(t+1)+" was updated to choice (array index of) "+n+" --- The correct answer = "+H[t].c)},a.handleSubmit=function(){for(var e=0,t=0;t<H.length;t++)a.state.responses[t]===H[t].c&&(e+=16.6);a.setState({score:e}),console.log("The test score is "+e)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e={};H.forEach(function(t){e[t.id]=null}),this.setState({data:H,responses:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},this.state.data.map(function(t){return r.a.createElement("div",{key:t.id,className:"card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Question ",t.id+1,":  ",t.q)),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"0",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[0]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"1",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[1]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"2",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[2]),r.a.createElement("p",null,r.a.createElement("input",{type:"radio",name:t.id,value:"3",onClick:function(a){return e.handleRadioClick(a,t.id)}}),"   ",t.a[3]))}),r.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:function(t){return e.handleSubmit()}},"Submit Answers")))}}]),t}(n.Component);var U=function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"About Us")),r.a.createElement("p",{className:"card-text"},"We started out wanting to become a place where developers could test and gauge their knowledge about Web Development.  However, we're become something greater. We've become an all in one HR tool to connect great developers to great employers")))};var Q=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/createDeveloper",component:g}),r.a.createElement(s.a,{exact:!0,path:"/home",component:w}),r.a.createElement(s.a,{exact:!0,path:"/testSelector",component:S}),r.a.createElement(s.a,{exact:!0,path:"/tests/JavaScript",component:_}),r.a.createElement(s.a,{exact:!0,path:"/tests/Python",component:J}),r.a.createElement(s.a,{exact:!0,path:"/tests/CSS3",component:B}),r.a.createElement(s.a,{exact:!0,path:"/tests/React",component:F}),r.a.createElement(s.a,{exact:!0,path:"/viewDevs",component:x}),r.a.createElement(s.a,{exact:!0,path:"/about",component:U}),r.a.createElement(s.a,{component:q}))))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e4ec000.chunk.js.map