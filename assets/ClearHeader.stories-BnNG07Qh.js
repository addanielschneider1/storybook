import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function m({text:d}){return c.jsx("p",{children:d})}m.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const l=`<div class="Styling aus css" style="background-color: #006ec7">
    <div class="Styling aus css">
      <h1>Hero Text</h1>
    </div>
</div>`,g={title:"Allgemein/Header/ClearHeader",component:m},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>c.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
