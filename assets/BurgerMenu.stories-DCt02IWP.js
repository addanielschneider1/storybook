import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function m({text:c}){return d.jsx("p",{children:c})}m.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const l=`
<table>
    <tbody>
      <tr>
        <td><div class="container">
      <div class="burger" tabindex="0"></div>
      <div class="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
      </div>
  </div>
  </td>
      </tr>
    </tbody>
  </table>`,g={title:"Allgemein/Header/BurgerMenu",component:m},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,y as __namedExportsOrder,g as default};
