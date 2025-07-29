import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function l({text:c}){return d.jsx("p",{children:c})}l.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const p=`<div width="100%" style="max-width: 600px; margin: 0 auto; background-color: #fffffe;">

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
`,u={title:"Douglas Redesign/01_Image",component:l},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const h=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,h as __namedExportsOrder,u as default};
