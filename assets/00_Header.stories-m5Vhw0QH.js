import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import d from"./00_Header-BHHUrsO7.js";import"./index-yBjzXJbu.js";const p=`    <div width="100%" style="max-width: 600px; background-color: {variables.bgcolorlogomenu}; margin: 0 auto;">
  
      <!--[if (gte mso 9) | (IE)]>
        <table width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-left: auto; margin-right: auto; width: 600px">
        <tr>
        <td align="center">
      <![endif]-->
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color: {variables.bgcolorlogomenu}; Margin:0; padding:0; max-width: 600px; width:100%; font-family: 'Avenir Regular', Arial, sans-serif;">
         
      {variables.header}

         
      <e-optional name="01 - Navigation">   
      
      <tr>
        <td class="hide-mobile" align="center" style="vertical-align: middle; padding: 0 32px 17px 32px; background-color: {variables.bgcolorlogomenu};">
        
        <table  role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: {variables.bgcolorlogomenu};">
          <tr>
            <td width="63" style="text-align:center; padding-right:5px; max-width: 63px; min-width:63px"> 
              <a href="https://www.douglas.de/de/c/parfum/01" target="_blank" rel="noopener" style="text-decoration: none;">
                <span style="margin: 0px; font-size: 14px; line-height:21px; letter-spacing:1px; color: {variables.fontcolor}; text-rendering: optimizeLegibility; font-family: 'Avenir Medium', Arial, sans-serif; font-weight: normal;"> 
                  PARFUM 
                </span>
              </a>
            </td>
            <td width="71" style="text-align:center; padding-right:5px; max-width: 71px; min-width:71px">
              <a href="https://www.douglas.de/de/c/make-up/03" target="_blank" rel="noopener" style="text-decoration: none;">
                <span style="margin: 0px; font-size: 14px; line-height:21px; letter-spacing:1px; color: {variables.fontcolor}; text-rendering: optimizeLegibility; font-family: 'Avenir Medium', Arial, sans-serif; font-weight: normal;"> 
                  MAKE-UP 
                </span>
              </a>
            </td>
            <td width="67" style="text-align:center; padding-right:5px; max-width: 67px; min-width:67px">
              <a href="https://www.douglas.de/de/c/gesicht/12" target="_blank" rel="noopener" style="text-decoration: none;">
                <span style="margin: 0px; font-size: 14px; line-height:21px; letter-spacing:1px; color: {variables.fontcolor}; text-rendering: optimizeLegibility; font-family: 'Avenir Medium', Arial, sans-serif; font-weight: normal;"> 
                  GESICHT 
                </span>
              </a>
            </td>
            
            <td width="53" style="text-align:center; padding-right:5px; max-width: 53px; min-width:53px">
              <a href="https://www.douglas.de/de/c/haare/14" target="_blank" rel="noopener" style="text-decoration: none;">
                <span style="margin: 0px; font-size: 14px; line-height:21px; letter-spacing:1px; color: {variables.fontcolor}; text-rendering: optimizeLegibility; font-family: 'Avenir Medium', Arial, sans-serif; font-weight: normal;"> 
                  HAARE 
                </span>
              </a>
            </td>
            <td width="47" style="text-align:center; max-width: 155px">
              <a href="{variables.navilink}" target="_blank" rel="noopener" style="text-decoration: none;">
                <span style="margin: 0px; font-size: 14px; line-height:21px; letter-spacing:1px; color: {variables.fontcolor}; text-rendering: optimizeLegibility; font-family: 'Avenir Medium', Arial, sans-serif; font-weight: normal;">
                  {variables.navitext}
                </span>
              </a>
            </td>
          </tr>
        </table>
        </td>
        </tr>
        </e-optional>
      <!-- Logo End -->	
      <e-optional name="Spacer between Modules">           
      <!-- Spacer -->
       
                  <tr>
                      <td height="2" style="font-size:2px;line-height:2px; margin:0; padding:0; background-color: #fffffe;">&nbsp;</td>
                  </tr>
          
      <!-- Spacer -->
      </e-optional>             
               </table>
              <!--[if (gte mso 9) | (IE)]>
                </td>
                </tr>
                </table>
              <![endif]-->
      </div>`,x={title:"Douglas Redesign/00_Header",component:d},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,h as __namedExportsOrder,x as default};
