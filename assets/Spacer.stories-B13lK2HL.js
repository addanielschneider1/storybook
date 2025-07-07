import{j as m}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function d({text:c}){return m.jsx("p",{children:c})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const p='<div style="height: 100px; width: 100%; max-width: 540px; margin-left: auto; margin-right: auto; background-color: #AAAAAA;"></div>',g={title:"Body/Spacer",component:d},e={args:{text:"Was los?"}},r={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,x as __namedExportsOrder,g as default};
