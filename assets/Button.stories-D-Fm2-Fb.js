import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import l from"./Button-BHHUrsO7.js";import"./index-yBjzXJbu.js";const m=`<table cellpadding="0" cellspacing="0" align="center" max-width="600px" width="100%" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px;  padding-left: 15px; padding-right: 15px;">
    <tbody>
      <tr align="center" >
          <td style="text-align: center">
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
              [endif]--><span>
            Button Text
            </span><!--[if mso]></span><i style="mso-font-width:200%;" hidden>&emsp;&#8203;</i><![endif]-->
            </a>
      </tr>
          </tbody>
        </table>`,x={title:"Allgemein/Body/Button",component:l},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,u as __namedExportsOrder,x as default};
