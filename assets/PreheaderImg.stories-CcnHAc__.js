import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:c}){return i.jsx("p",{children:c})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" style="border-collapse: collapse; height: 32px; background: #006ec7; width: 600px" align="center">
    <tbody>
  <!-- Preheader Start -->
  <e-optional name="01 Preheader">
      <tr>
        <td>
          <p class="Stylig aus css">Preheader</p>
        </td>
      </tr>
    </e-optional>  
  <!-- Preheader Ende -->   
  <!-- Logo Start -->
    <e-otional name="logo">
      <tr>
          <td>
            <a href="https://www.platzhalter.de" e-editable="imagelink"><img src="https://placehold.co/600x400" alt="" e-editbale="imagesource"></a>
          </td>
        </tr>
    </e-otional>    
  <!-- Logo Ende -->      
    </tbody>
  </table>`,u={title:"Header/PreheaderImg",component:d},e={args:{text:"Was los?"}},t={render:()=>i.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const h=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,h as __namedExportsOrder,u as default};
