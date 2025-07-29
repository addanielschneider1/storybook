import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return s.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table width="600" align="center" style="margin: 0px auto; width: 100% !important; max-width: 600px;" bgcolor="#ffffff"
    border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td align="center" valign="top" style="padding-right: 10px; border-right: 1px solid #000000;" width="300">
                                                                    <a href="www.lorem-ipsum.de" target="_blank">
                                                      		<img height="300"
                                                            style="border-image: none; height: auto; display: block; max-width: 100%;"
                                                            alt="Image alt"
                                                            src="https://placehold.co/600x400"
                                                            border="0"></a>
                                                </td>
          <td style="padding-top:20px;text-align: left; padding-left: 30px;" valign="middle" width="300"><p class="copy" e-editable="copy">Die <strong>veganen Reinigungs- und Pflegeprodukte</strong> verwöhnen dich und deine Haut mit sorgfältig ausgewählten Inhaltsstoffen, sinnlichen Texturen und herrlichen Düften.</p></td>
                                        </tr>
      <e-optional name="headline2">  
    <tr>
    <td colspan="2" style="text-align: center; padding-top: 20px;"><p class="h3" e-editable="produkt">Marke<br><span style="font-weight: 200;">Produktname</span></p></td>
    
  </tr>
        </e-optional>
      <e-optional name="cta">  
    <tr>
    <td colspan="2" style="text-align: center; padding-top: 20px;"><a rel="noopener" href="www.lorem-ipsum.de" target="_blank" style="color: #000; text-decoration: underline; text-transform: uppercase; font-size: 13px; letter-spacing: 1px; font-weight: 700;" valign="top"><span e-editable="ctatext2">Jetzt entdecken</span></a></td>
    
  </tr>
        </e-optional>
    </tbody>
</table>`,h={title:"Allgemein/Body/ImageTexthalfSubheadlineButton",component:d},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
