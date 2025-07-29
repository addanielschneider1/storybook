import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import d from"./BurgerMenu-BHHUrsO7.js";import"./index-yBjzXJbu.js";const c=`
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
  </table>`,g={title:"Allgemein/Header/BurgerMenu",component:d},e={args:{text:"Wähle HTML-Story!"}},r={render:()=>i.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,o,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const S=["ReactStory","HtmlStory"];export{r as HtmlStory,e as ReactStory,S as __namedExportsOrder,g as default};
