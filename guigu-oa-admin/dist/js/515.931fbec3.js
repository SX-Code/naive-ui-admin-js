"use strict";(self["webpackChunkguigu_oa_admin"]=self["webpackChunkguigu_oa_admin"]||[]).push([[515],{12133:function(e,t,n){n.d(t,{Xd:function(){return p},cj:function(){return s},nL:function(){return o},o6:function(){return c},sK:function(){return i},uu:function(){return u}});var l=n(6618),r=n(90565);const a="/admin/process/processTemplate";function o({page:e,pageSize:t}){return l.d.request({url:`${a}/${e}/${t}`,method:"GET"})}function u(e){return l.d.request({url:`${a}`,method:"POST",data:e},{successMessageText:"添加成功"})}function s(e){return l.d.request({url:`${a}/${e}`,method:"DELETE"},{successMessageText:"删除成功"})}function i(e,t){return l.d.request({url:`${a}/upload/def`,method:"POST",params:e,headers:{"Content-Type":r.ze.FORM_DATA}},t,{successMessageText:"上传成功"})}function c(e){return l.d.request({url:`${a}/delete/def`,method:"DELETE",data:{filename:e}},{successMessageText:"定义文件已删除"})}function p(e){return l.d.request({url:`${a}/publish/${e}`,method:"GET"},{successMessageText:"发布成功"})}},94095:function(e,t,n){n.d(t,{I6:function(){return u},bz:function(){return a},dU:function(){return o},ip:function(){return s}});var l=n(6618);const r="/admin/process/processType";function a(){return l.d.request({url:`${r}`,method:"GET"})}function o({page:e,pageSize:t}){return l.d.request({url:`${r}/${e}/${t}`,method:"GET"})}function u(e){return l.d.request({url:`${r}`,method:"PUT",data:e},{successMessageText:"更改成功"})}function s(e){return l.d.request({url:`${r}/${e}`,method:"DELETE"},{successMessageText:"删除成功"})}},75515:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});n(57658);var l=n(73396),r=n(44870);const a={style:{"margin-left":"90px"}};function o(e,t,n,r,o,u){const s=(0,l.up)("n-select"),i=(0,l.up)("n-form-item"),c=(0,l.up)("n-input"),p=(0,l.up)("n-button"),d=(0,l.up)("n-space"),f=(0,l.up)("n-form");return(0,l.wg)(),(0,l.j4)(f,{"label-width":90,model:e.formValue,rules:e.rules,"label-placement":"left",ref:"formRef",style:{"max-width":"500px",margin:"40px auto"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{label:"审批类型",path:"processTypeId"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{value:e.formValue.processTypeId,"onUpdate:value":t[0]||(t[0]=t=>e.formValue.processTypeId=t),placeholder:"请选择审批类型",options:e.typeOptions,clearable:"",style:{width:"300px"}},null,8,["value","options"])])),_:1}),(0,l.Wm)(i,{label:"审批图标",path:"iconUrl"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{value:e.formValue.iconUrl,"onUpdate:value":t[1]||(t[1]=t=>e.formValue.iconUrl=t),placeholder:"请选择审批图标",options:e.iconOptions,"render-label":e.renderLabel,"render-tag":e.renderSingleSelectTag,clearable:"",remote:"",style:{width:"300px"}},null,8,["value","options","render-label","render-tag"])])),_:1}),(0,l.Wm)(i,{label:"审批名称",path:"name"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{value:e.formValue.name,"onUpdate:value":t[2]||(t[2]=t=>e.formValue.name=t),placeholder:"请输入审批名称"},null,8,["value"])])),_:1}),(0,l.Wm)(i,{label:"描述",path:"description"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{value:e.formValue.description,"onUpdate:value":t[3]||(t[3]=t=>e.formValue.description=t),placeholder:"描述",type:"textarea",autosize:{minRows:3,maxRows:5}},null,8,["value"])])),_:1}),(0,l._)("div",a,[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{type:"default",ghost:"",onClick:e.back},{default:(0,l.w5)((()=>[(0,l.Uk)("返回")])),_:1},8,["onClick"]),(0,l.Wm)(p,{type:"primary",onClick:e.formSubmit},{default:(0,l.w5)((()=>[(0,l.Uk)("下一步")])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model","rules"])}var u=n(91260),s=n(21618);const i=({option:e})=>(0,l.h)("div",{style:{display:"flex",alignItems:"center"}},[(0,l.h)(s.Z,{src:e.value,size:24})]),c=e=>(0,l.h)("div",{style:{display:"flex",alignItems:"center"}},[(0,l.h)(s.Z,{src:e.value,size:"small"})]),p=[{label:"出差",value:"https://gw.alicdn.com/tfs/TB1bHOWCSzqK1RjSZFjXXblCFXa-112-112.png"},{label:"合同审批",value:"https://gw.alicdn.com/imgextra/i3/O1CN01LLn0YV1LhBXs7T2iO_!!6000000001330-2-tps-120-120.png"},{label:"合同借阅",value:"https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png"},{label:"机票出差",value:"https://gw.alicdn.com/tfs/TB1cbCYCPTpK1RjSZKPXXa3UpXa-112-112.png"},{label:"补卡申请",value:"https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png"},{label:"加班",value:"https://gw.alicdn.com/tfs/TB1Y8PlCNjaK1RjSZKzXXXVwXXa-112-112.png"},{label:"请假",value:"https://gw.alicdn.com/tfs/TB1_YG.COrpK1RjSZFhXXXSdXXa-102-102.png"},{label:"调岗",value:"https://gw.alicdn.com/tfs/TB13ca1CMDqK1RjSZSyXXaxEVXa-102-102.png"},{label:"离职",value:"https://gw.alicdn.com/tfs/TB1U9iBCSzqK1RjSZPcXXbTepXa-102-102.png"}],d={processTypeId:{type:"number",required:!0,trigger:["blur","change"],message:"请选择审批类型"},name:{required:!0,trigger:["blur","input"],message:"请输入审批名称"},description:{trigger:["blur","input"],message:"最大长度不能超过255",validator:(...[,e])=>e?.length<255}};var f=(0,l.aZ)({name:"BasicSetting",emits:["nextStep","update","back"],props:{formValue:[Object],typeOptions:[Array]},setup(e,{emit:t}){const n=(0,u.U)(),l=(0,r.iH)(),a=(0,r.iH)(p);function o(){t("back")}function s(e){e.preventDefault(),l.value?.validate((e=>{e?(console.log(e),n.error("验证失败，请完整填写信息!")):t("nextStep")}))}return{rules:d,formRef:l,iconOptions:a,back:o,formSubmit:s,renderLabel:c,renderSingleSelectTag:i}}}),m=n(40089);const v=(0,m.Z)(f,[["render",o]]);var g=v,h=n(79884),y=n(92092),w=n(98978);const b={type(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"},Undef(e){return void 0===e||null===e},Element(e){return"object"===typeof e&&null!==e&&1===e.nodeType&&!b.Object(e)},trueArray(e){return Array.isArray(e)&&e.length>0},Function(e){const t=this.getType(e);return"Function"===t||"AsyncFunction"===t},getType(e){const t=Object.prototype.toString.call(e);return/^\[object (.*)\]$/.exec(t)[1]},empty(e){return void 0===e||null===e||(!(!Array.isArray(e)||!Array.isArray(e)||e.length)||"string"===typeof e&&!e)}};["Date","Object","String","Boolean","Array","Number"].forEach((e=>{b[e]=function(t){return b.type(t,e)}}));var k=b;const _={class:"tools"},S={name:"FormCreate"};var x=Object.assign(S,{props:{value:[Object]},emits:["nextStep","prevStep","update"],setup(e,{emit:t}){const n=e,a=(0,r.iH)(null),o=(0,w.R)();function u(){const{formProps:e,formOptions:t}=n.value,l=JSON.parse(t);a.value?.setRule(y.Z.parseJson(e)),!k.Object(l)&&l&&a.value?.setOption(l)}function s(){t("prevStep")}function i(){const e={formProps:y.Z.toJson(a?.value.getRule()),formOptions:JSON.stringify(a.value.getOption())};t("update",e),t("nextStep")}function c(){const e=y.Z.toJson(a?.value.getRule());"[]"===e?o.warning({title:"提示",content:"注意到你并未设计表单，您确定继续提交？",positiveText:"确定",negativeText:"不确定",maskClosable:!1,onPositiveClick:()=>{i()}}):i()}return(0,l.YP)((()=>a.value),(()=>{u()})),(e,t)=>{const n=(0,l.up)("n-button"),o=(0,l.up)("n-space");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",_,[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{type:"primary",onClick:c},{default:(0,l.w5)((()=>[(0,l.Uk)("提交")])),_:1}),(0,l.Wm)(n,{type:"default",ghost:"",onClick:s},{default:(0,l.w5)((()=>[(0,l.Uk)("上一步")])),_:1})])),_:1})]),(0,l.Wm)((0,r.SU)(h.ZP),{ref_key:"designer",ref:a,style:{"min-height":"600px"}},null,512)])}}});const T=(0,m.Z)(x,[["__scopeId","data-v-1b611bd4"]]);var j=T;const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},U=(0,l._)("path",{d:"M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),C=(0,l._)("rect",{x:"48",y:"64",width:"416",height:"80",rx:"28",ry:"28",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),W=(0,l._)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 304l-64 64l-64-64"},null,-1),X=(0,l._)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 345.89V224"},null,-1),P=[U,C,W,X];var q=(0,l.aZ)({name:"ArchiveOutline",render:function(e,t){return(0,l.wg)(),(0,l.iD)("svg",O,P)}}),D=n(12133);const Z={style:{"max-width":"400px",margin:"40px auto"}},$={style:{"margin-bottom":"12px"}},R={class:"tools"};var V={__name:"Step3",props:{value:{type:Object},files:[Array]},emits:["finish","prevStep","update:files","update-value"],setup(e,{emit:t}){const n=e,a=(0,u.U)(),{files:o,value:s}=(0,r.BK)(n),i=(0,r.iH)(o.value);async function c(e){return/\.zip$/.test(e.file.file?.name)?1!==i.value.length||(a.error("只能上传一个文件"),!1):(a.error("只能上传zip格式的压缩文件，请重新上传"),!1)}function p(){t("prevStep")}function d(){s.value.processDefinitionPath&&s.value.processDefinitionKey?t("finish"):a.warning("您并未上传流程文件")}function f(e){t("update:files",i),t("update-value",e)}const m=({file:e,onFinish:t,onProgress:n,onError:l})=>{const r=new FormData;r.append("file",e.file),(0,D.sK)(r,{onUploadProgress:({percent:e})=>{n({percent:Math.ceil(e)})}}).then((e=>{f(e),t()})).catch((()=>{l()}))};function v({file:e}){return e}async function g(){const e=s.value.processDefinitionPath;await(0,D.o6)(e);const t={processDefinitionKey:null,processDefinitionPath:null};i.value=[],f(t)}return(e,t)=>{const n=(0,l.up)("n-icon"),a=(0,l.up)("n-text"),o=(0,l.up)("n-p"),u=(0,l.up)("n-upload-dragger"),s=(0,l.up)("n-upload"),f=(0,l.up)("n-button"),h=(0,l.up)("n-space");return(0,l.wg)(),(0,l.iD)("div",Z,[(0,l.Wm)(s,{"directory-dnd":"","file-list":i.value,"onUpdate:fileList":t[0]||(t[0]=e=>i.value=e),"custom-request":m,onBeforeUpload:c,onRemove:g,onFinish:v},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("div",$,[(0,l.Wm)(n,{size:"48",depth:3},{default:(0,l.w5)((()=>[(0,l.Wm)((0,r.SU)(q))])),_:1})]),(0,l.Wm)(a,{style:{"font-size":"16px"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 将Activiti流程设计文件拖到此处，或点击上传 ")])),_:1}),(0,l.Wm)(o,{depth:"3",style:{margin:"8px 0 0 0"}},{default:(0,l.w5)((()=>[(0,l.Uk)(" 只能上传zip格式的压缩文件，请重新上传 ")])),_:1})])),_:1})])),_:1},8,["file-list"]),(0,l._)("div",R,[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{type:"primary",onClick:d},{default:(0,l.w5)((()=>[(0,l.Uk)("提交")])),_:1}),(0,l.Wm)(f,{type:"default",ghost:"",onClick:p},{default:(0,l.w5)((()=>[(0,l.Uk)("上一步")])),_:1})])),_:1})])])}}};const E=(0,m.Z)(V,[["__scopeId","data-v-a613584e"]]);var z=E,B=n(94095),F=n(22483);const K=e=>((0,l.dD)("data-v-53e5ea67"),e=e(),(0,l.Cn)(),e),A=K((()=>(0,l._)("div",{class:"n-layout-page-header"},null,-1))),M={name:"ProcessSet"};var I=Object.assign(M,{setup(e){const t=(0,F.tv)(),n=(0,r.iH)(1),a=(0,r.iH)("process"),o=(0,r.iH)([]),u=(0,r.iH)([]),s=(0,r.qj)({processTypeId:null,name:"",iconUrl:null,description:""}),i=(0,r.qj)({formProps:"[]",formOptions:null}),c=(0,r.qj)({processDefinitionPath:"",processDefinitionKey:""});function p(e){Object.assign(i,e)}function d(e){Object.assign(c,e)}function f(){n.value<3&&(n.value+=1)}function m(){n.value>1&&(n.value-=1)}function v(){t.push("/processSet/template")}function h(){const e={...s,...i,...c};(0,D.uu)(e).then((()=>{v()})).catch((e=>{console.log(e)}))}async function y(){const e=await(0,B.bz)();e&&e.length>0&&(o.value=e.map((e=>({label:e.name,value:e.id}))))}return(0,l.bv)((()=>{y()})),(e,t)=>{const r=(0,l.up)("n-step"),y=(0,l.up)("n-steps"),w=(0,l.up)("n-space"),b=(0,l.up)("n-card");return(0,l.wg)(),(0,l.iD)("div",null,[A,(0,l.Wm)(b,{bordered:!1,class:"mt-4 proCard"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{vertical:"",class:"steps",justify:"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{current:n.value,status:a.value},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{title:"基本设置"}),(0,l.Wm)(r,{title:"表单设置"}),(0,l.Wm)(r,{title:"流程设置"})])),_:1},8,["current","status"]),1===n.value?((0,l.wg)(),(0,l.j4)(g,{key:0,formValue:s,typeOptions:o.value,onNextStep:f,onBack:v},null,8,["formValue","typeOptions"])):(0,l.kq)("",!0),2===n.value?((0,l.wg)(),(0,l.j4)(j,{key:1,value:i,onNextStep:f,onPrevStep:m,onUpdate:p},null,8,["value"])):(0,l.kq)("",!0),3===n.value?((0,l.wg)(),(0,l.j4)(z,{key:2,value:c,"onUpdate:value":t[0]||(t[0]=e=>c=e),files:u.value,"onUpdate:files":t[1]||(t[1]=e=>u.value=e),onPrevStep:m,onFinish:h,onUpdateValue:d},null,8,["value","files"])):(0,l.kq)("",!0)])),_:1})])),_:1})])}}});const L=(0,m.Z)(I,[["__scopeId","data-v-53e5ea67"]]);var H=L}}]);
//# sourceMappingURL=515.931fbec3.js.map