import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:s}){return p.jsx("p",{children:s})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table cellpadding="0" cellspacing="0" align="center" valign="center" width="542" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; padding-left: 15px; padding-right: 15px;">
    <tbody>
      <e-optional name="headline"><tr>
        <td style="padding-bottom: 20px;" class="Styling aus CSS">
          <h1 align="center" style="margin-top: 0px; margin-bottom: 0px;" e-editable="headline">Schöner shoppen mit</h1>
          <h1 align="center" style="margin-top: 0px; margin-bottom: 0px;" e-editable="headline2"><span style="padding:5px;display: inline-block;">Mein Douglas</span></h1>
        </td>
      </tr></e-optional>
    </tbody>
  </table>
  <table cellpadding="0" cellspacing="0" align="center" width="600" valign="center" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 15px; padding-right: 15px;">
    <tbody>
      <tr>
         <td style="padding-left: 30px; padding-top: 20px; padding-bottom: 20px; padding-right: 10px;" e-editable="advantages" class="copy">
          <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">Diese und viele weitere Vorteile warten auf dich:</p>
          <ul  class="copy" style="padding-left: 1em">
            <li class="copy">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">News, Trends und Beauty-Storys</p>
            </li>
            <li class="copy" style="padding-top: 10px;">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">Direktrabatte für deine Beauty Points</p>
            </li>
            <li class="copy" style="padding-top: 10px;">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">persönliche Produktempfehlungen mit deinem Beauty-Profil</p>
            </li>
            <li class="copy" style="padding-top: 10px;">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">exklusive Aktionen und Geschenke</p>
            </li>
            <li class="copy" style="padding-top: 10px;">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">Merkzettel für deine Shopping-Wünsche</p>
            </li>
            <li class="copy" style="padding-top: 10px;">
              <p class="copy" style="margin-top: 0px; margin-bottom: 0px; color: #000;">Benachrichtigungen über wieder lieferbare Produkte</p>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
  <e-optional name="image">  
  <table cellpadding="0" cellspacing="0" align="center" width="600" valign="center" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 20px; padding-right: 20px">
      <tbody>
        <tr>
          <td  align="center" tyle="width: 100%; padding-top: 30px;">
            <a href="www.loren-ipsum.de"><img src="https://placehold.co/600x400" alt="alt text" width="100%" style="width: 100%; max-width: 600px; font-family: sans-serif; color: #ffffff; font-size: 20px; display: block; border: 0px;" border="0"></a>
          </td>
        </tr>
      </tbody>
    </table>
     </e-optional> 
  <table  cellpadding="0" cellspacing="0" align="center" width="600" valign="center" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 15px; padding-right: 15px;">
    <tbody>
      <e-optional name="cta"><tr align="center" >
            <td style="padding-top: 30px; text-align: center;">
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
            </td>
          </tr></e-optional>
    </tbody>
  </table>
  `,x={title:"Body/HeadlineBulletpointsImageButton",component:d},e={args:{text:"Was los?"}},n={render:()=>p.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,i,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,y as __namedExportsOrder,x as default};
