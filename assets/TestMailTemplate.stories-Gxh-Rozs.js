import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import l from"./TestMailTemplate-BHHUrsO7.js";import"./index-yBjzXJbu.js";const c=`<p>
    Das ist ein Test
</p>`,g={title:"Douglas Redesign/MailTemplate",component:l},e={args:{text:"Wähle HTML-Story"}},r={render:()=>i.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story"
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,o,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const S=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,S as __namedExportsOrder,g as default};
