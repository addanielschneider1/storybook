import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s({text:p}){return d.jsx("p",{children:p})}s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<table cellpadding="0" 
       cellspacing="0" 
       align="center" 
       width="600" 
       valign="center" 
       style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 15px; padding-right: 15px;">
    <tr>
        <td>
            <e-optional name="01 Headline">
      <tr>
        <td style="width: 100%; padding-left:20px; border-left: 1px solid #000;" class="Style aus CSS"><h1 style="text-align: left;" e-editable="headline" class="Style aus CSS">Exklusive Aktionen<br> &amp; Rabatte</h1>
        </td>
      </tr>
      </e-optional>
        </td>
    </tr>
  <e-optional name="02 Copy">
  <tr>
              <td style="text-align: left; padding-top: 30px; padding-left: 20px; border-left: 1px solid #000;">
                  <p e-editable="text" class="copy">Dann tauche ein in <strong>unsere Beauty-Welt</strong> voller Düfte, Skincare und Make-up und finde deine Lieblinge fürs neue Lebensjahr!</p>
              </td>
          </tr>
    </e-optional>
  <e-optional name="03 Image">
    <tr>
      <td style="width: 100%; padding-left:20px;padding-top: 30px; border-left: 1px solid #000;"><a href="www.lorem-ipsum.de">
        <img src="https://placehold.co/600x400" alt="Image alt" width="570" style="width: 100%; max-width: 570px; font-family: sans-serif; color: #ffffff; font-size: 20px; display: block; border: 0px;" border="0"></a>
      </td>
    </tr>
    </e-optional>
    <e-optional name="04 Copy">
  <tr>
              <td style="text-align: left; padding-top: 30px; padding-left: 20px; border-left: 1px solid #000;">
                  <p e-editable="text2" class="copy">Dann tauche ein in <strong>unsere Beauty-Welt</strong> voller Düfte, Skincare und Make-up und finde deine Lieblinge fürs neue Lebensjahr!</p>
              </td>
          </tr>
    </e-optional>
      <e-optional name="05 Bulletpoints">
  <tr>
              <td  e-editable="tabelle" style="text-align: left; padding-top: 30px; padding-left: 20px; border-left: 1px solid #000;">
                <ul style="margin:0; padding-left: 20px !important" class="copy"><li>Trends, gehypte Brands &amp; Produkt-Highlights</li>
        <li>persönliche Shopping-Empfehlungen</li>
        <li>Geschenke, Aktionen &amp; Angebote</li>        
        <li>Beauty-Hacks, Profi-Tipps &amp; Tutorials</li></ul>
              </td>
          </tr>
    </e-optional>
  <e-optional name="06 CTA"><tr align="left" >
          <td style="padding-top: 30px; padding-left: 20px; text-align: center; border-left: 1px solid #000;">
            <a
              rel="noopener"
              href="www.lorem-ipsum.de"
              target="_blank"
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
              [endif]--><span>Button Text</span><!--[if mso]></span><i style="mso-font-width:200%;" hidden>&emsp;&#8203;</i><![endif]-->
            </a>
      	</tr>
      </e-optional>
</table>`,f={title:"Allgemein/Body/HeadlineTextImageTextBulletpointsButton",component:s},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,l,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const x=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,x as __namedExportsOrder,f as default};
