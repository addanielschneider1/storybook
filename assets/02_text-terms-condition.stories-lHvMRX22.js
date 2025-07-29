import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:_}){return s.jsx("p",{children:_})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<div width="100%" style="max-width: 600px; background-color: {variables.bgcoloreditable}; margin: 0 auto;">
  
<!--[if (gte mso 9) | (IE)]>
  <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
  <tr>
  <td align="center">
<![endif]-->
 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: {variables.bgcoloreditable}; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">

<!-- Spacer -->
<tr>
<!--[if !mso]><!-->
<td class="spacer-50" height="24" style="font-size:24px;line-height:24px; margin:0; padding:0; background-color: {variables.bgcoloreditable}; ">&nbsp;</td>
<!--<![endif]-->
<!--[if mso]>
<td height="48" style="font-size:48px;line-height:48px; margin:0; padding:0; background-color: {variables.bgcoloreditable}; ">&nbsp;</td>
<![endif]-->            
</tr>
<!-- Spacer -->



<tr>
<!--[if !mso]><!-->
<td class="padding-right-35 padding-left-35" style="background-color: {variables.bgcoloreditable}; padding:0 16px 0 16px; text-align:{variables.alignleftandcenter}">
<!--<![endif]-->
<!--[if mso]>
<td style="background-color: {variables.bgcoloreditable}; padding:0 32px 0 32px; text-align:{variables.alignleftandcenter}">
<![endif]-->

<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">

<tr>

<!--[if !mso]><!-->
<td width="100%" align="{variables.alignleftandcenter}" class="copy22" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1px; font-size: 14px; line-height: 21px; color:{variables.fontcolor}; font-weight: normal;">
<!--<![endif]-->
<!--[if mso]> 
<td width="100%" align="{variables.alignleftandcenter}" style="font-family: 'Avenir Regular', Arial, sans-serif; letter-spacing: 1px; font-size: 14px; line-height: 21px; color:{variables.fontcolor};">
<![endif]-->

<p class="copy22" e-editable="Paragraph1" style="font-family: 'Avenir Regular', Arial, sans-serif; margin:0; text-rendering: optimizeLegibility; text-transform: none; mso-line-height-rule: exactly; color:{variables.fontcolor}; line-height: 21px;"> 
<span style="font-family: 'Avenir Regular', Arial, sans-serif;">{% if contact.1 !='' %}<span style="text-transform: uppercase;"><strong>HALLO {{contact.1}},</strong></span><br><br>
{% else %}<strong>HALLO, </strong><br><br>{% endif %}</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae obcaecati illo atque impedit est dolores enim fuga, saepe recusandae consequuntur voluptatum aut alias, nam temporibus, provident cupiditate eligendi quis voluptas.
</p>

</td>

</tr>
</table>

</td>
</tr>
 


    

<!-- Spacer -->
 
<tr>
<!--[if !mso]><!-->
    <td class="spacer-50" height="24" style="font-size:24px;line-height:24px; margin:0; padding:0; background-color: {variables.bgcoloreditable}; ">&nbsp;</td>
<!--<![endif]-->
<!--[if mso]>
	<td height="48" style="font-size:48px;line-height:48px; margin:0; padding:0; background-color: {variables.bgcoloreditable}; ">&nbsp;</td>
<![endif]-->
            
</tr>
<!-- Spacer -->    


<!-- Intro End -->
<!-- ______________________________________________________________________________________________________________________ -->

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
`,m={title:"Douglas Redesign/02_text-terms-condition",component:d},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,o,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,f as __namedExportsOrder,m as default};
