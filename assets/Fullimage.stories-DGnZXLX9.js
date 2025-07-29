import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function l({text:p}){return d.jsx("p",{children:p})}l.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<!--[if gte MSO 9]>
  <table width="600">
     <tr>
        <td>
<![endif]-->
<table cellpadding="0" cellspacing="0" border="0" role="presentation"  width="100%" style="max-width:600px;border-collapse:collapse;border:0;border-spacing:0; padding-left: 00px; padding-right: 00px;">
    <tr>
      <td align="center" style="padding: 0;">
        <a href="www.loren-ipsum.de">
        <img src="https://placehold.co/600x400" alt="Image alt" width="600" style="width: 100%; max-width: 600px; font-family: sans-serif; color: #ffffff; font-size: 20px; display: block; border: 0px;" border="0"></a>
      </td>
    </tr>
  </table>
<!--[if gte MSO 9]>
      </td>
    </tr>
  </table>
<![endif]-->`,f={title:"Allgemein/Body/Fullimage",component:l},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,u as __namedExportsOrder,f as default};
