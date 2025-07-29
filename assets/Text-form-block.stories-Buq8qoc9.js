import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:l}){return m.jsx("p",{children:l})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const p=`<!-- Paragraph Form Block -->
    
    
<div style="padding-right: 0px;
padding-left: 0px;">
    <div>
      <div style="padding-left: 10%;
      padding-right: 10%; margin-bottom: 25px;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      </div>
      </div>`,g={title:"Allgemein/Body/Text-form-block",component:d},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>m.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const y=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
