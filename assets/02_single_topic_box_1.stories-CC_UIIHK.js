import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return s.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<div width="100%" style="max-width: 600px; background-color: #fffffe; margin: 0 auto;">
  
        <!--[if (gte mso 9) | (IE)]>
          <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
          <tr>
          <td align="center">
        <![endif]-->
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #fffffe; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">
          

<e-optional name="01 - Headline">
<tr> 	
<td align="center">
  
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fffffe;">                  
    <tr>
    <!--[if !mso]><!-->
    <td align="center" class="padding-top-50 padding-right-35 padding-bottom-35 padding-left-35" style="padding: 24px 16px 16px 16px;">
    <!--<![endif]-->
    <!--[if mso]>
    <td align="center" style="padding: 48px 32px 32px 32px;">
    <![endif]-->

 <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">

<tr>

<!--[if !mso]><!-->
<td width="100%" align="center" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1.5px; font-size: 16px; line-height: 22px; color: #000001; ">
<!--<![endif]-->
<!--[if mso]> 
<td width="100%" align="center" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1.5px; font-size: 22px; line-height: 30px; color: #000001;">
<![endif]-->

<span class="h3" e-editable="Header" style="margin:0;  text-rendering: optimizeLegibility; text-transform: none; mso-line-height-rule: exactly; font-weight: normal; color: #000001;"> 
HEADLINE
</span>

</td>

</tr>
</table>     
      </td>
    </tr>
  </table>
  
</td>
</tr>
</e-optional>

<tr> 	
<td align="center">
  
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fffffe;">                  
    <tr>
      <td width="100%" align="center">
      
          <img 
          e-editable="image1"
          src="https://fakeimg.pl/1200x800/000000/?retina=1&text=Image%20Placeholder" 
          alt="Douglas" 
          {variables.width}
          border="0" 
          style="display: block; border: 0; width: 100%; height: auto; " />

      </td>
    </tr>
  </table>
  
</td>
</tr>

<e-optional name="02 - CTA">
                         
<tr> 	
    <!--[if !mso]><!-->
    <td align="center" class="padding-right-35 padding-left-35 padding-top-25" style="padding: 16px 16px 0 16px;">
    <!--<![endif]-->
    <!--[if mso]>
    <td align="center" style="padding: 24px 32px 0 32px;">
    <![endif]-->
      
<!--[if !mso]><!-->
<a href="{variables.ctacategorieslink}" target="_blank" rel="noopener" 
style="display:block; margin:0; padding:0; text-decoration: underline; font-size: 12px; letter-spacing: 1.5px; color:#000000; line-height: 44px; font-family: 'Avenir Medium', Arial, sans-serif;  font-weight:bold;"><span class="cta-text" style="text-decoration: underline;font-family: 'Avenir Medium', Arial, sans-serif;  font-weight:bold;">{variables.ctacategoriestext}</span></a>

<!--<![endif]-->
<!--[if mso]>
<a href="{variables.ctacategorieslink}" target="_blank" rel="noopener" 
style="display:block; margin:0; padding:0; text-decoration: underline; font-size: 16px; letter-spacing: 1.5px; color:#000000; line-height: 44px; font-family: 'Avenir Medium', Arial, sans-serif;  font-weight:bold;"><span class="cta-text" style="text-decoration: underline;font-family: 'Avenir Medium', Arial, sans-serif;  font-weight:bold;">{variables.ctacategoriestext}</span></a>

<![endif]-->
  </td>
</tr>
<!-- Spacer -->
 
            <tr>
<!--[if !mso]><!-->
<td class="spacer-80" height="24" style="font-size:24px;line-height:24px; margin:0; padding:0; background-color: #fffffe; ">&nbsp;</td>
<!--<![endif]-->
<!--[if mso]>
<td height="48" style="font-size:48px;line-height:48px; margin:0; padding:0; background-color: #fffffe; ">&nbsp;</td>
<![endif]-->
            </tr>
    
<!-- Spacer -->                      
</e-optional>


           
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
 </div>`,m={title:"Douglas Redesign/02_single_topic_box_1",component:d},n={args:{text:"Wähle HTML-Story!"}},e={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,l,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const x=["ReactStory","HtmlStory"];export{e as HtmlStory,n as ReactStory,x as __namedExportsOrder,m as default};
