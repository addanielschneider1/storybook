import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return o.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const g=`<div width="100%" style="max-width: 600px; background-color: #fffffe; margin: 0 auto;">
  
        <!--[if (gte mso 9) | (IE)]>
          <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
          <tr>
          <td align="center">
        <![endif]-->
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #fffffe; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">
          

<tr> 	
<td align="center">
            
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fffffe;">
    <tr>
    <!--[if !mso]><!-->
    <td align="center" class="padding-top-16 padding-right-16 padding-bottom-16 padding-left-16" style="padding: 16px 16px 16px 16px;">
    <!--<![endif]-->
    <!--[if mso]>
    <td align="center" style="padding: 16px 16px 16px 16px;">
    <![endif]-->
    
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
      <!--[if !mso]><!-->
      <td width="100%" align="right" class="copy" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1px; font-size: 10px; line-height: 16px; color: #000001; font-weight: normal; ">
      <!--<![endif]-->
      <!--[if mso]> 
      <td width="100%" align="right" style="font-family: 'Avenir Regular', Arial, sans-serif; font-size: 16px; line-height: 21px; letter-spacing: 1px; color: #000001; word-break: break-word;">
      <![endif]-->
<!--[if !mso]><!-->
                 <p class="copy2" style="margin: 0; text-align: right; font-size: 10px; line-height: 16px; letter-spacing: 1px; color: #000000; font-family: 'Avenir Regular', Arial, sans-serif;">
Die E-Mail wird nicht korrekt angezeigt? <a href="#HTML_BROWSE_HREF#" target="_blank" title="View Online"><span class="blueLinks copy2" style="margin: 0; text-decoration: underline; font-weight:normal; text-align: center; font-size: 10px; line-height: 16px; letter-spacing: 1px; color: #000000; font-family: 'Avenir Regular', Arial, sans-serif;">Klick hier</span></a>!
                   </p>

<!--<![endif]-->
<!--[if mso]>
                 
                        <p class="copy2" style="margin:0; text-align: right; font-size: 10px; line-height: 16px; letter-spacing: 0.7px; color: #000000; font-family: 'Avenir Regular', Arial, sans-serif;">
      Die E-Mail wird nicht korrekt angezeigt? <a href="#HTML_BROWSE_HREF#" target="_blank" title="View Online"><span class="blueLinks copy2" style="margin: 0; text-decoration: underline; font-weight:normal; text-align: center; font-size: 10px; line-height: 18px; letter-spacing: 0.7px; color: #000000; font-family: 'Avenir Regular', Arial, sans-serif;">Klick hier</span></a>!
      </p>
<![endif]-->
      
      </td>
      </tr>
      </table>
    
    </td>
    </tr>
    </table>
            
</td>
</tr>


         </table>
        <!--[if (gte mso 9) | (IE)]>
          </td>
          </tr>
          </table>
        <![endif]-->
 </div>
`,m={title:"Douglas Redesign/00_View-Online",component:d},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>o.jsx("div",{dangerouslySetInnerHTML:{__html:g}})};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,l,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const x=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,x as __namedExportsOrder,m as default};
