import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import i from"./PreheaderImg-BHHUrsO7.js";import"./index-yBjzXJbu.js";const c=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" style="border-collapse: collapse; height: 32px; background: #006ec7; width: 600px" align="center">
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
  </table>`,h={title:"Allgemein/Header/PreheaderImg",component:i},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const u=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,u as __namedExportsOrder,h as default};
