import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function l({text:p}){return s.jsx("p",{children:p})}l.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const m=`<div style="
  background-size: cover;
  overflow: hidden;
  background-color: #006ec7;
  background-image: linear-gradient(rgba(56, 5, 119, 0.5),rgba(0, 0, 0, 0.5));
  background-position: center; display: block;
  height: auto;
  flex-wrap: nowrap;
  padding-top: 7.5%;
  padding-right: 10%;
  padding-bottom: 7.5%;
  padding-left: 10%;">
    <div style="padding-right: 0px;
    padding-left: 0px;">
  <div style="padding-left: 15px;">
    <div>
      <h1 style="margin-bottom: 20px;
      margin-top: 0px;
      color: #fff;
      font-size: 40px;
      line-height: 40px;">Hero Text & BackImg<br></h1>
    </div>
  </div>
    </div>
</div>`,u={title:"Allgemein/Header/HLonFullColorBgFullwidth",component:l},e={args:{text:"Wähle HTML-Story!"}},n={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:m}})};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var a,i,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const h=["ReactStory","HtmlStory"];export{n as HtmlStory,e as ReactStory,h as __namedExportsOrder,u as default};
