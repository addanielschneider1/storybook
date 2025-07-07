import{j as d}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function m({text:l}){return d.jsx("p",{children:l})}m.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" align="center" style="word-break: break-word; word-wrap: break-word; width: 600px;">
    <tbody>
    <tr>
        <td>
            <p class="Stylig aus css" e-editable="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        </td>
    </tr> 
</tbody>
</table>
`,g={title:"Body/Textmodule",component:m},e={args:{text:"Was los?"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
