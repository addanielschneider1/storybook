import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:c}){return m.jsx("p",{children:c})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const l='<div style="height: 100px; width: 100%; max-width: 540px; margin-left: auto; margin-right: auto; background-color: #AAAAAA;"></div>',g={title:"Allgemein/Body/Spacer",component:d},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,h as __namedExportsOrder,g as default};
