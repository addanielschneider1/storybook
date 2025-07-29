import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import l from"./Headlines-BHHUrsO7.js";import"./index-yBjzXJbu.js";const d=`<div>
    <h1>H1 Headline Block</h1>
    <h2>H2 Subheadline</h2>
    <h3>H3 This is a wonderful headline</h3>
    <h4>H4 Lorem Ipsum dolor Consecteur adipiscing elit</h4>
  </div>`,h={title:"Allgemein/Body/Headlines",component:l},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:d}})};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const H=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,H as __namedExportsOrder,h as default};
