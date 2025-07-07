import{j as d}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function m({text:l}){return d.jsx("p",{children:l})}m.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<div>
    <h1>H1 Headline Block</h1>
    <h2>H2 Subheadline</h2>
    <h3>H3 This is a wonderful headline</h3>
    <h4>H4 Lorem Ipsum dolor Consecteur adipiscing elit</h4>
  </div>`,h={title:"Body/Headlines",component:m},e={args:{text:"Was los?"}},r={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,t,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var o,a,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const H=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,H as __namedExportsOrder,h as default};
