import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function i({text:d}){return l.jsx("p",{children:d})}i.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table class="Stylig aus css" align="center" style="width: 100%; text-transform: uppercase; font-weight: bold; max-width: 600px; overflow: hidden;">
    <tr>
     <e-optional name="01 Menüpunkt 1"> 
      <td>
        <a class="Stylig aus css" href="https://www.platzhalter.de" target="_blank" style="font-size: 12px; color: #000000; text-decoration: none; text-transform: uppercase;" e-editable="menütext1">
            <span e-editable="menüpunkt1">Menüpunkt 1</span></a>
      </td>
    </e-optional>
    <e-optional name="02 Menüpunkt 2"> 
      <td>
        <a class="Stylig aus css" href="https://www.platzhalter.de" target="_blank" style="font-size: 12px; color: #000000; text-decoration: none; text-transform: uppercase;" e-editable="menütext2">
            <span e-editable="menüpunkt2">Menüpunkt 2</span></a>
      </td>
      </e-optional>
      <e-optional name="03 Menüpunkt 3"> 
      <td>
        <a class="Stylig aus css" href="https://www.platzhalter.de" target="_blank" style="font-size: 12px; color: #000000; text-decoration: none; text-transform: uppercase;" e-editable="menütext3">
            <span e-editable="menüpunkt3">Menüpunkt 3</span></a>
      </td>
      </e-optional>
      <e-optional name="04 Menüpunkt 4"> 
      <td>
        <a class="Stylig aus css" href="https://www.platzhalter.de" target="_blank" style="font-size: 12px; color: #000000; text-decoration: none; text-transform: uppercase;" e-editable="menütext4">
            <span e-editable="menüpunkt4">Menüpunkt 4</span></a>
      </td>
      </e-optional>
      <e-optional name="05 Menüpunkt 5"> 
      <td>
          <a class="Stylig aus css" href="https://www.platzhalter.de" target="_blank" style="font-size: 12px; color: #000000; text-decoration: none; text-transform: uppercase;" e-editable="menütext5">
            <span e-editable="menüpunkt5">Menüpunkt 5</span></a>
      </td>
      </e-optional>
    </tr>
  </table>`,x={title:"Header/Menu",component:i},e={args:{text:"Was los?"}},t={render:()=>l.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,o,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const h=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,h as __namedExportsOrder,x as default};
