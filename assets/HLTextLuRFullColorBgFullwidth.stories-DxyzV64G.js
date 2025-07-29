import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({text:c}){return o.jsx("p",{children:c})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const p=`<table class="Styling aus css" cellpadding="0" align="center" cellspacing="0" style="margin:0 auto;width:100%;border-collapse: collapse;border-spacing: 0;" border="0" width="100%">
  <tbody>
  <tr>
      <!-- Farbiger Hintergrund Header -->
    <td valign="top" style="background-Color:#006ec7; vertical-align: top;"> 
    <table cellpadding="0" cellspacing="0" align="center" class="Styling aus css" style="margin:0 auto; width:600px;border-spacing: 0px;border-collapse: collapse;" border="0" width="600">
     <tbody>
     <tr>
        <td valign="top"> 
        <table class="Styling aus css" width="560" style="margin: 0 auto; width: 560px; border-spacing: 0px; border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0" align="center">
    <tbody>
    <tr>
    <td> 
    <table cellpadding="0" cellspacing="0" align="center" style="margin:0 auto; width:100%;border-spacing: 0;" border="0" width="100%">
    <tbody>
    <tr>
    <td height="30px" style="line-height:1px;">&nbsp;</td>
    </tr>
    <tr>
    <!-- Linker Text im Header -->  
    <td class="Styling aus css" width="380" style="display: block !important; width: 100% !important; text-align: left; border-collapse: collapse; font-weight: 500; font-family:Arial, sans-serif;">
    <div class="Styling aus css">
    <div style="margin-bottom: 20px;
    margin-top: 0px;
    color: #fff;
    font-size: 40px;
    line-height: 40px;"> Arial text left</div></div>
    </td>
    <!-- Rechter Text im Header -->
    <td class="Styling aus css" width="180" style="display: block !important; width: 100% !important; text-align: right; border-collapse: collapse; font-weight: 500; font-family:Arial, sans-serif;">
    <div class="Styling aus css">
    <div style="margin-bottom: 20px;
    margin-top: 0px;
    color: #fff;
    font-size: 40px;
    line-height: 40px;">Arial text right</div></div>
    </td>
    </tr>
    <tr>
    <td height="30px" style="line-height:1px;">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>`,y={title:"Allgemein/Header/HLTextLuRFullColorBgFullwidth",component:d},t={args:{text:"Wähle HTML-Story!"}},e={render:()=>o.jsx("div",{dangerouslySetInnerHTML:{__html:p}})};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Wähle HTML-Story!"
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const b=["ReactStory","HtmlStory"];export{e as HtmlStory,t as ReactStory,b as __namedExportsOrder,y as default};
