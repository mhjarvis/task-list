(()=>{"use strict";let t=[];class e{constructor(t,e=[]){this.title=t,this.tasks=e}}let n=new e("Chores"),o=new e("Homework",["Math","Spelling"]),c=new e("WorkOut",["Biceps","Triceps"]);function s(){document.getElementById("project-container").innerHTML="";for(let e=0;e<t.length;e++){const n=document.getElementById("project-container"),o=document.createElement("button");o.className="project-buttons",o.id="project-buttons-id"+e,o.innerHTML=t[e].title,n.appendChild(o);const c=document.getElementById("project-buttons-id"+e),s=document.createElement("button");s.className="delete-project-button",s.id="delete-project-button-id"+e,s.innerHTML="x",c.appendChild(s),document.getElementById("delete-project-button-id"+e).addEventListener("click",(function(){i(e)}))}!function(){if(0==t.length)return void alert("Projects array is empty, please create a new project");let e=t[0].tasks.length;for(let n=0;n<e;n++)console.log(t[0].tasks[n])}()}function i(e){t.splice(e,1),document.getElementById("project-container").innerHTML="",s()}t.push(n),t.push(o),t.push(c);class r{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o}}var l;s(),l=new r("POOOOOOOOOOOP","Poop a lot","soon","low"),t[0].tasks.push(l),s()})();