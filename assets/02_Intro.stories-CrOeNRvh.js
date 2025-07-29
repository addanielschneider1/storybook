import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s({text:p}){return o.jsx("p",{children:p})}s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const g=`<div width="100%" style="max-width: 600px; background-color: #9bdcd2; margin: 0 auto;">
  
  <!--[if (gte mso 9) | (IE)]>
  <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
  <tr>
  <td align="center">
  <![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #9bdcd2; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">

<!-- Headline Start --> 
<tr> 	
<td align="center">
  
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #9bdcd2;">                  
<tr>
<!--[if !mso]><!-->
<td align="center" class="padding-top-35 padding-right-35 padding-bottom-35 padding-left-35" style="padding: 24px 16px 24px 16px;">
<!--<![endif]-->
<!--[if mso]>
<td align="center" style="padding: 32px 32px 32px 32px;">
<![endif]-->

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
  <!--[if !mso]><!-->
  <td width="100%" align="left" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1.5px; font-size: 16px; line-height: 22px; color: #000001; ">
  <!--<![endif]-->
  <!--[if mso]> 
  <td width="100%" align="left" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1.5px; font-size: 22px; line-height: 30px; color: #000001;">
  <![endif]-->
  <span class="h3" e-editable="Header" style="margin:0;  text-rendering: optimizeLegibility; text-transform: none; mso-line-height-rule: exactly; font-weight: normal; color: #000001;"> 
  LOREM IPSUM
  </span>
  </td>
  </tr>
  </table>  

</td>
</tr>
</table>
  
</td>
</tr>
<!-- Headline End --> 
           
<!-- Picture Start --> 
<tr> 	
<td align="center">
  
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #9bdcd2;">                  
    <tr>
      <td width="100%" align="center">
      
          <img 
          e-editable="image"
          src="https://placehold.co/600x400" 
          alt="Douglas" 
          {variables.width}
          border="0" 
          style="display: block; border: 0; width: 100%; height: auto; " />

      </td>
    </tr>
  </table>
  
</td>
</tr>
<!-- Picture End --> 

<!-- Subline Start -->                         
<tr> 	
<!--[if !mso]><!-->
<td align="left" valign="middle" class="padding-right-35 padding-left-35 padding-top-25 padding-bottom-25" style="padding: 16px 16px 16px 16px;">
<!--<![endif]-->
<!--[if mso]>
<td align="center" style="padding: 24px 32px 24px 32px;">
<![endif]-->

<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
<!--[if !mso]><!-->
<td width="100%" valign="middle" align="left" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 0.7px; font-size: 14px; line-height: 21px; color: #000001; font-weight: normal;">
<!--<![endif]-->
<!--[if mso]> 
<td width="100%" valign="middle" align="left" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1px; font-size: 20px; line-height: 30px; color: #000001;">
<![endif]-->
<p class="copy" e-editable="Preheader" style="font-family: 'Avenir Regular', Arial, sans-serif; margin:0; text-rendering: optimizeLegibility; text-transform: none; mso-line-height-rule: exactly;"> 
LOREM IPSUM DOLOR SIT AMET
</p>
</td>
</tr>
</table> 

</td>
</tr>
<!-- Subline End -->  


           
<e-optional name="Global spacer between Modules">           
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
 </div>`,f={title:"Douglas Redesign/02_Intro",component:s},n={args:{text:"Was los?"}},e={render:()=>o.jsx("div",{dangerouslySetInnerHTML:{__html:g}})};var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,l,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const x=["ReactStory","HtmlStory"];export{e as HtmlStory,n as ReactStory,x as __namedExportsOrder,f as default};
