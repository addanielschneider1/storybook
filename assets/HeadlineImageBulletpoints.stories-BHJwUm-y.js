import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return s.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<table cellpadding="0" cellspacing="0" align="center" width="100%" max-width="600px" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 15px; padding-right: 15px;">
    <tbody>
      <e-optional name="headline"><tr>
        <td valign="top" style="text-align: center;"><h1 class="Style aus CSS" e-editable="headline">Gutschein geschenkt bekommen?</h1></td>
      </tr></e-optional>
      <tr>
        <td style="padding-top: 30px;"><a href="www.lorem-ipsum.de"><img src="https://placehold.co/600x400" alt="Image alt" style="width: 100%;" width="600"></a></td>
      </tr>
      <tr>
        <td valign="bottom" class="texttab"><ul style="margin-bottom: -0.5%;" class="copy" e-editable="tabelle"><li>Trends, gehypte Brands &amp; Produkt-Highlights</li>
          <li>persönliche Shopping-Empfehlungen</li>
          <li>Geschenke, Aktionen &amp; Angebote</li>        
          <li>Beauty-Hacks, Profi-Tipps &amp; Tutorials</li></ul></td>
      </tr>
    </tbody>
  </table>`,u={title:"Body/HeadlineImageBulletpoints",component:d},e={args:{text:"Was los?"}},t={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,h as __namedExportsOrder,u as default};
