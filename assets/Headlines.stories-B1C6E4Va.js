import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:l}){return m.jsx("p",{children:l})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<div>
    <h1>H1 Headline Block</h1>
    <h2>H2 Subheadline</h2>
    <h3>H3 This is a wonderful headline</h3>
    <h4>H4 Lorem Ipsum dolor Consecteur adipiscing elit</h4>
  </div>`,h={title:"Allgemein/Body/Headlines",component:d},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const H=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,H as __namedExportsOrder,h as default};
