import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:p}){return s.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table cellpadding="0" 
       cellspacing="0" 
       align="center" 
       width="100%"  
       style="word-break: break-word; color: #363636; text-align: center; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px; padding-left: 20px; padding-right: 20px;"
       >
  <e-optional name="01 - Headline">
    <tr>
      <td style="padding-bottom: 30px;">
        <h1
          e-editable="headline2"
          class="Style aus CSS"
          style="
          margin-top: 0px;
          "
          >
          Die ganze Beauty-Welt <br>in einer App!
      </h1>
      </td>
    </tr>
  </e-optional>
  <e-optional name="02 - Image">
    <tr>
      <td style="padding-bottom: 30px;">
        <a href="www.lorem-ipsum.de">
          <img
            src="https://placehold.co/600x400"
            alt="Image alt"
            width="100%"
            style="
            border: 0;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            margin-left: auto;
            margin-right: auto;
            display: block;
            max-width: 600px;
            height: auto;
            "
			/>
        </a>
      </td>
    </tr>
  </e-optional>
  <e-optional name="03 - Copy">
  <e-optional name="03-1 - 1 Bulletpoint">  
    <tr>
      <td e-editable="advantages1" class="copy">
        <span
          style="
          display: inline-block;
          font-weight: bold;
          background-color: #c3ebe5;
          "
          >
        BEAUTY POINTS
        </span>
      </td>
    </tr>
    <tr>
      <td
        style="padding-bottom: 40px;"
        e-editable="advantages2"
        class="copy"
        >
        Punkte sammeln &amp; Rabatte sichern
      </td>
    </tr>
    </e-optional>
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      "
     
      >
      <td e-editable="advantages3" class="copy">
        <span
          style="
          display: inline-block;
          font-weight: bold;
          background-color: #c3ebe5;
          padding: 0px 5px;
          "
          >
        BEAUTY MIRROR
        </span>
      </td>
    </tr>
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      margin-top: 0px;
      margin-bottom: 0px;
      "
      >
      <td
        style="display: block; padding-bottom: 40px"
        e-editable="advantages4"
      class="copy"
        >
        Make-up virtuell testen
      </td>
    </tr>
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      "
     
      >
      <td e-editable="advantages5" class="copy">
        <span
          style="
          display: inline-block;
          font-weight: bold;
          background-color: #c3ebe5;
          padding: 0px 5px;
          "
          >
        DEINE HAUTANALYSE
        </span>
      </td>
    </tr>
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      margin-top: 0px;
      margin-bottom: 0px;
      "
      >
      <td 
        style="display: block; padding-bottom: 40px"
        e-editable="advantages6"
      class="copy"
        >
        Pflege-Profil passend zum Hauttyp
      </td>
    </tr>
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      "
     
      >
      <td e-editable="advantages7" stlye="padding-bottom: 30px;" class="copy">
        <span
          style="
          display: inline-block;
          font-weight: bold;
          background-color: #c3ebe5;
          padding: 0px 5px;
          "
          >
        INSPIRATION
        </span>
      </td>
    </tr>
  </e-optional>
  <e-optional name="04 - CTA">
    <tr
      style="
      margin: 0 auto;
      text-align: center;
      margin-top: 0px;
      margin-bottom: 0px;
      "
      >
      <td 
        style="display: block; padding-bottom: 30px"
        e-editable="advantages8"
      class="copy"
        >
        Beauty-Clips, Trends, Tipps & Styles<br /><br />
        und noch vieles mehr !
      </td>
    </tr>
    <tr align="center">
      <td style="text-align: center;">
        <a
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
          "
          >
          <!--[if mso]><i style="mso-font-width:250%; mso-text-raise: 10px;" hidden>&emsp;</i>
          <span>
            <![endif]--><strong><span>Button Text</span></strong><!--[if mso]>
          </span>
          <i style="mso-font-width:250%; mso-text-raise: -12px;" hidden>&emsp;&#8203;</i><![endif]-->
        </a>
      </td>
    </tr>
  </e-optional>
</table>
`,b={title:"Body/HeadlineImagesBulletpointsButton",component:d},n={args:{text:"Was los?"}},t={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var e,a,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var r,i,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["ReactStory","HtmlStory"];export{t as HtmlStory,n as ReactStory,y as __namedExportsOrder,b as default};
