import{j as d}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function l({text:p}){return d.jsx("p",{children:p})}l.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<table cellpadding="0" cellspacing="0" align="center" max-width="600px" width="100%" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px;  padding-left: 15px; padding-right: 15px;">
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
        </table>`,x={title:"Body/Button",component:l},e={args:{text:"Was los?"}},n={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const g=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,g as __namedExportsOrder,x as default};
