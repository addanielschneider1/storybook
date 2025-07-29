import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return l.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<div width="100%" style="max-width: 600px; background-color: #fffffe; margin: 0 auto;">
  
        <!--[if (gte mso 9) | (IE)]>
          <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
          <tr>
          <td align="center">
        <![endif]-->
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: #fffffe; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">
          
            <!-- Brand Of the Day-->
            <tr> 	
              <td align="center">
            
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fffffe;">
                    
                  <tr>
    <!--[if !mso]><!-->
    <td align="center" class="padding-top-35 padding-right-35 padding-bottom-35 padding-left-35" style="padding: 16px 16px 16px 16px;">
    <!--<![endif]-->
    <!--[if mso]>
    <td align="center" style="padding: 32px 32px 32px 32px;">
    <![endif]-->

<!--[if !mso]><!-->
                 
                        <h3 class="h3" style="font-family: 'Avenir Regular', Arial, sans-serif;
                        font-size: 16px;
                        line-height: 22px;
                        letter-spacing: 1.5px;
                        color: #000000;
                        font-weight: normal;
                        text-transform: uppercase !important;
                        mso-line-height-rule: exactly !important;
                        margin:0;
                        text-rendering: optimizeLegibility;">DOUGLAS PRESENTS:</h3>
<!--<![endif]-->
<!--[if mso]>
                 
                        <h3 class="h3" style="font-family: 'Avenir Regular', Arial, sans-serif;
                        font-size: 22px;
                        line-height: 30px;
                        letter-spacing: 1.5px;
                        color: #000000;
                        font-weight: normal;
                        text-transform: uppercase !important;
                        mso-line-height-rule: exactly !important;
                        margin:0;
                        text-rendering: optimizeLegibility;">DOUGLAS PRESENTS:</h3>
<![endif]-->
                 
                      </td>
                    </tr>
                </table>
            
              </td>
              </tr>
            <!-- Brand Of the Day END-->

         </table>
        <!--[if (gte mso 9) | (IE)]>
          </td>
          </tr>
          </table>
        <![endif]-->
 </div>
`,f={title:"Douglas Redesign/03_Douglas_Presents",component:d},n={args:{text:"Wähle HTML-Story!"}},e={render:()=>l.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const h=["ReactStory","HtmlStory"];export{e as HtmlStory,n as ReactStory,h as __namedExportsOrder,f as default};
