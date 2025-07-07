import{j as l}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function o({text:p}){return l.jsx("p",{children:p})}o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table cellpadding="0" cellspacing="0" align="center" width="100%" max-width="600px" style="word-break: break-word; color: #363636; text-align: left; background-color: transparent; word-wrap: break-word; width: 100%; max-width: 600px">
    <tbody>
      <e-optional name="headline"><tr>
        <td class="Style aus CSS" colspan="3" style="text-align: center;"><h1 e-editable="headline1">Must haves</h1></td></tr>
          <tr>
<td colspan="3" e-editable="headline2" style="text-align: center;" class="h2">
        <span
          style="
          display: inline-block;
          background-color: #c3ebe5;
          padding: 5px;
          "
          >
        Für dich
        </span>
      </td>
          
      </tr>
      </e-optional>
      <tr>
        <td colspan="3" style="padding-top: 30px;" align="center"><a href="www.lorem-ipsum.de"><img src="https://placehold.co/600x400" alt="Image alt" width="100%"></a></td>
              </tr>
      <tr>
   <td colspan="3" align="center" style="padding-top: 30px;padding-left: 15px; padding-right: 15px;" class="h2"><p e-editable="headline3">Birthday-Hairstyle</p></td>        
      </tr>
              <tr>
              <td colspan="3" align="center" style="padding-top: 30px;padding-left: 15px; padding-right: 15px;" class="copy"><p e-editable="copy">Entspannte Hair-Looks sind perfekt für deinen Ehrentag - und mit diesen Must-haves ein Kinderspiel.</p></td>  
              </tr>
      </tbody>
</table>`,h={title:"Body/HeadlineImageHeadlineText",component:o},e={args:{text:"Was los?"}},t={render:()=>l.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,d,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const u=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,u as __namedExportsOrder,h as default};
