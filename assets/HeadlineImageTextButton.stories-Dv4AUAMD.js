import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s({text:p}){return d.jsx("p",{children:p})}s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table cellpadding="0" 
       cellspacing="0" 
       align="center" 
       width="600" 
       valign="center" 
       style="word-break: break-word; color: #363636; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 20px; padding-right: 20px;">
    <tbody>
      <e-optional name="headline">
      <tr align="center">
        <td align="center" style="width: 100%;" class="Style aus CSS"><h1 style="text-align: center;" e-editable="headline" class="{variables.headlinetype}">Exklusive Aktionen<br> &amp; Rabatte</h1>
        </td>
      </tr>
      </e-optional>
  </tbody>
</table>
<table cellpadding="0" cellspacing="0" border="0" role="presentation" align="center" width="100%" style="max-width:600px;border-collapse:collapse;border:0;border-spacing:0; padding-left: 20px; padding-right: 20px;">
  <tbody>
    <tr>
      <td width="{variables.ImageFull}" align="center" style="padding-top: 20px;"><a href="www.lorem-ipsum.de" align="center"><img src="https://placehold.co/600x400" alt="Image alt" width="100%" align="center" style="max-width: 600px;"></a>
      </td>
    </tr>
  </tbody>
</table>
<table cellpadding="0" cellspacing="0" align="center" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 20px; padding-right: 20px;">
    <tbody>
    <tr>
    <td valign="top" align="center">
    <table style="width: 100%; height: 32px; border-collapse: collapse; padding-left: 30px; padding-right: 30px;" cellpadding="10">
    <tbody>
    <tr>
    <e-optional name="copy">
    <td class="copy" align="center">
    <p class="copy" e-editable="copy01_headline-image-text" style="text-align: center; padding-top: 10px; padding-bottom: 10px;">Regelmäßige Vorteile und Geschenke<br><strong>nur für App-User*innen</strong></p>
    </td>
      </e-optional>
      </tr>
      <e-optional name="cta"><tr>
          <td style="text-align: center;">
            <a
              rel="noopener"
              href="www.lorem-ipsum.de"
			  target="_blank"
               align="center"
              class="cta textcta"
              style="
                background-color: #000;
                text-decoration: none;
                padding: 12px 20px;
                color: #fff;
                display: inline-block;
                border-radius: 0;
                text-transform: uppercase;
                font-weight: bold;
              "
            >
              <!--[if mso]><i style="mso-font-width:200%;mso-text-raise:100%" hidden>&emsp;</i><span style="mso-text-raise:50%;"><!
              [endif]--><span>
            Button Text
            </span><!--[if mso]></span><i style="mso-font-width:200%;" hidden>&emsp;&#8203;</i><![endif]-->
            </a>
      	</tr>
      </e-optional>
      </tbody>
      </table>
</td>
  </tr>
        </tbody>
      </table>`,x={title:"Allgemein/Body/HeadlineImageTextButton",component:s},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,l,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,b as __namedExportsOrder,x as default};
