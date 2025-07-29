import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import d from"./Spacer-BHHUrsO7.js";import"./index-yBjzXJbu.js";const l='<div style="height: 100px; width: 100%; max-width: 540px; margin-left: auto; margin-right: auto; background-color: #AAAAAA;"></div>',g={title:"Allgemein/Body/Spacer",component:d},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>i.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const h=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,h as __namedExportsOrder,g as default};
