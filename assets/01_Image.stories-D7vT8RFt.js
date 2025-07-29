import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import d from"./01_Image-BHHUrsO7.js";import"./index-yBjzXJbu.js";const m=`<div width="100%" style="max-width: 600px; margin: 0 auto; background-color: #fffffe;">

  <!--[if (gte mso 9) | (IE)]>
    <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 600px;">
      <tr>
        <td align="center">
  <![endif]-->

 		  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
            
               <tr>
                 <td width="100%">
                   <img e-editable="image" src="https://fakeimg.pl/600x400/000000/?retina=1&text=Image%20Placeholder" alt="Douglas" {variables.width} style="width: 100%; display: block; border: 0px;" border="0">
                 </td>
               </tr>
             <e-optional name="Spacer between Modules">           
<!-- Spacer -->
 
            <tr>
                <td height="2" style="font-size:2px;line-height:2px; margin:0; padding:0; background-color: #fffffe; ">&nbsp;</td>
            </tr>
    
<!-- Spacer -->
</e-optional>  
           </table>

  <!--[if (gte mso 9) | (IE)]>
        </td>
      </tr>
    </table>
  <![endif]-->
</div>
`,h={title:"Douglas Redesign/01_Image",component:d},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,u as __namedExportsOrder,h as default};
