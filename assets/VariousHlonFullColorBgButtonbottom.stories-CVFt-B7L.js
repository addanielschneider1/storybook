import{j as p}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function d({text:m}){return p.jsx("p",{children:m})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const l=`<div style="background-size: cover;
overflow: hidden;
background-color: #006ec7;
background-size: cover;
background-position: center;
height: auto;
  flex-wrap: nowrap;
  padding-top: 7.5%;
  padding-right: 10%;
  padding-bottom: 7.5%;
  padding-left: 10%;">
    <div style="padding-right: 0px;
    padding-left: 0px;">
      <div>
        <div style="padding-left: 15px; background-size: cover;
        overflow: hidden;
        background-color: #006ec7;
        background-size: cover;
        background-position: center;">
          <h1 style="margin-bottom: 20px;
          margin-top: 0px;
          color: #fff;
          font-size: 40px;
          line-height: 40px;">H1 Hero Text</h1>
          <h2 style="margin-bottom: 20px;
          color: #fff;
          font-size: 30px;
          line-height: 36px;
          margin-top: 0px;">H2 Lorem ipsum dolor sit amet</h2>
          <h3 style="margin-bottom: 20px;
          color: #fff;
          font-size: 24px;
          line-height: 30px;
          margin-top: 0px;">H3 Lorem ipsum dolor sit amet</h3>
          <p style="margin-top: 10px !important;
          margin-bottom: 30px !important;
          color: #fff !important;
          font-size: 16px !important;
          line-height: 20px !important;">Text Lorem ipsum dolor sit amt. Ut sit amet nibh leo sceleri omare.</p>
          <div style="display: block !important;">  
            <a href="https://www.Platzhalter.de" style="margin-top: 10px;
            margin-bottom: 10px;
            padding: 10px 30px;
            border-radius: 10px;
            background-color: #fff;
            color: #000;
            font-size: 20px;
            font-weight: 400;
            text-decoration: none;
            transition: 0.3s;">CTA Text</a>
          </div>
        </div>
      </div>
    </div>
  </div>`,x={title:"Header/VariousHlonFullColorBgButtonbottom",component:d},n={args:{text:"Was los?"}},e={render:()=>p.jsx("div",{dangerouslySetInnerHTML:{__html:l}})};var t,o,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,a,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const u=["ReactStory","HtmlStory"];export{e as HtmlStory,n as ReactStory,u as __namedExportsOrder,x as default};
