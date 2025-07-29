import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import i from"./Textmodule-BHHUrsO7.js";import"./index-yBjzXJbu.js";const l=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" align="center" style="word-break: break-word; word-wrap: break-word; width: 600px;">
    <tbody>
    <tr>
        <td>
            <p class="Stylig aus css" e-editable="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
        </td>
    </tr> 
</tbody>
</table>
`,g={title:"Allgemein/Body/Textmodule",component:i},e={args:{text:"Wähle HTML-Story!"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const y=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
