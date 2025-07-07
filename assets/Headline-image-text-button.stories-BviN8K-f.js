import{j as i}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function d({text:p}){return i.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" align="center" style="word-break: break-word; width: 600px;">
    <tbody>
<!-- Headline Start -->
    <e-optional name="01 Headline">        
        <tr>
            <td>
                <h1 e-editable="Headline">Headline</h1>
            </td>
        </tr>
    </e-optional>    
<!-- Headline Ende -->
<!-- Image Start -->
    <e-optional name="02 Image">        
        <tr>
            <td>
                <a href="htps://www.platzhalter.de" e-editable="imagelink"><img src="https://placehold.co/600x400" alt="" e-editbale="imagesource"></a>
            </td>
        </tr>
    </e-optional>    
<!-- Image Ende -->
<!-- Copy Start -->
    <e-optional name="03 Copy">        
        <tr>
            <td style="width: 100%; text-align: center;">
                <p e-editable="text" class="Stylig aus css">Modultext</p>
            </td>
        </tr>
    </e-optional>    
<!-- Copy Ende -->
<!-- Button Start -->
    <e-optional name="04 Button">        
        <tr>
            <td style="text-align: center;">
                <a href="https://www.platzhalter.de" target="_blank" class="Stylig aus css" e-editable="buttonlink"><span e-editable="buttontext">Button</span></a>
            </td>
        </tr>
    </e-optional>    
<!-- Button Ende -->        
    </tbody>
</table>`,g={title:"Body/Headline-image-text-button",component:d},e={args:{text:"Was los?"}},t={render:()=>i.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const y=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
