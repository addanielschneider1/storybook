import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import i from"./Intro-BHHUrsO7.js";import"./index-yBjzXJbu.js";const m=`<table class="Stylig aus css" cellpadding="0" cellspacing="0" align="center" style="word-break: break-word; word-wrap: break-word; width: 600px;">
    <tbody>
 <!-- Headline Start -->
    <e-optional name="01 Headline">
        <tr>
            <td>
                <h1>Headline</h1>
            </td>
        </tr>
    </e-optional>       
 <!-- Headline Ende -->
 <!-- Image Start -->
    <e-optional name="02 Image">
        <tr>
            <td>
                <a href="https://www.platzhalter.de" e-editable="imagelink"><img src="https://placehold.co/600x400" alt="" e-editable="imagesource"></a>
            </td>
        </tr>
    </e-optional>
 <!-- Image Ende -->
 <!-- Subheadline Start -->
    <e-optional name="03 Subeadline">
        <tr>
            <td>
                <p class="Stylig aus css">Subheadline</p>
            </td>
        </tr>
    </e-optional>
 <!-- Subheadline Ende -->    
    </tbody>
</table>
`,g={title:"Allgemein/Body/Intro",component:i},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const S=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,S as __namedExportsOrder,g as default};
