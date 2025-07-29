import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:s}){return l.jsx("p",{children:s})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const p=`<div width="100%" style="max-width: 600px; background-color: #fffffe; margin: 0 auto;">
  
        <!--[if (gte mso 9) | (IE)]>
          <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
          <tr>
          <td align="center">
        <![endif]-->
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #fffffe; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">
          
            <!-- Customer Mailing-->
            <!-- ______________________________________________________________________________________________________________________ -->
            <tr> 	
              <td align="center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #9bdcd2;">
            
                  <tr>

<!--[if !mso]><!-->
<td class="padding-top-50 padding-bottom-50 padding-right-25 padding-left-35"  align="left" width="50%" style="padding: 24px 24px 24px 16px">
<!--<![endif]-->
<!--[if mso]>
<td align="left" width="50%" style="padding: 48px 24px 48px 32px">
<![endif]-->
                                  
            <a href="https://douglas.de/" target="_blank" style="text-decoration: none;" rel="noopener">
            
              <img src="https://link.test.newsletter.dglcrm.de/custloads/1034520884/md_159488.png" alt="Douglas Logo" width="165" border="0" style="width:100%; display: block; border: 0px; min-width: 60px; max-width: 165px;">
            
            </a>    
</td>                         
            <!--[if !mso]><!-->
             <td align="right" class="padding-top-50 padding-right-35 padding-bottom-50" style="padding: 24px 16px 24px 0;" width="50%" >
            <!--<![endif]-->
            <!--[if mso]>
             <td align="right" style="padding: 48px 32px 48px 0;" width="50%" >
            <![endif]-->
                        

            <!--[if !mso]><!-->
            <h3 class="h3" style="font-family: 'Avenir Regular', Arial, sans-serif;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 1.5px;
            color: #000000;
            font-weight: normal;
            text-transform: uppercase;
            mso-line-height-rule: exactly;
            margin:0;
            text-rendering: optimizeLegibility;">YOUR CUSTOMER <br> INFORMATION</h3>
            <!--<![endif]-->
            <!--[if mso]>
            <h3 class="h3" style="font-family: 'Avenir Regular', Arial, sans-serif;
            font-size: 22px;
            line-height: 30px;
            letter-spacing: 1.5px;
            color: #000000;
            font-weight: normal;
            text-transform: uppercase;
            mso-line-height-rule: exactly;
            margin:0;
            text-rendering: optimizeLegibility;">YOUR CUSTOMER <br> INFORMATION</h3>
            <![endif]-->
                 
                      </td>
                    </tr>
                </table>
              </td>
              </tr>
            
            <!-- Customer Mailing End-->
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
`,c={title:"Douglas Redesign/00_Header_Customer_Mail",component:d},n={args:{text:"Wähle HTML-Story!"}},e={render:()=>l.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,_,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(o=(_=e.parameters)==null?void 0:_.docs)==null?void 0:o.source}}};const f=["ReactStory","HtmlStory"];export{e as HtmlStory,n as ReactStory,f as __namedExportsOrder,c as default};
