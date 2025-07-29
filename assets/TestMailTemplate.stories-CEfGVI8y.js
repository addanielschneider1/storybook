import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function p({text:c}){return m.jsx("p",{children:c})}p.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const d=`<p>
    Das ist ein Test
</p>`,g={title:"Douglas Redesign/MailTemplate",component:p},e={args:{text:"Wähle HTML-Story"}},r={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:d}})};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story"
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
