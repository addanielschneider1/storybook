import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s({text:p}){return d.jsx("p",{children:p})}s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table width="540" align="center" class="wp100 dm_bg_grey" style="margin: 0px auto; width: 540px; max-width: 540px;" bgcolor="#ffffff" border="0" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <e-optional name="headline">
          <td align="center" valign="top" style="padding: 20px 0px;">
            <h3 style="margin: 0px; padding: 0px; text-align: center; color: rgb(0, 0, 0); text-transform: uppercase; line-height: 28px; letter-spacing: 1px; font-family: 'DFB Sans', Arial, Helvetica, sans-serif; font-size: 25px; font-weight: bold;">Instagram Highlights</h3>
          </td>
        </e-optional>
      </tr>
      <tr>
        <td valign="top" style="padding: 0px;">
          <table width="540" align="center" class="wp100" style="margin: 0px auto; width: 540px; max-width: 540px;" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <th width="31%" valign="top" style="width: 31%;">
                  <table align="left" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <e-optional name="image-left">
                          <td align="center" class="fade" valign="top">
                            <a href="www.lorem-ipsum.de" target="_blank" e-editable="image-link-left"><img e-editable="image-left" width="170" style="border: currentColor; border-image: none; height: auto; display: block; max-width: 100%;" alt="DFB" src="https://placehold.co/600x400" border="0"></a>
                          </td>
                        </e-optional>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th width="3%" style="width: 3%; font-size: 1px;">&nbsp;</th>
                <th width="31%" valign="top" style="width: 31%;">
                  <table align="left" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <e-optional name="image-mid">
                          <td align="center" class="fade" valign="top">
                            <a href="www.lorem-ipsum.de" target="_blank" e-editable="image-link-mid"><img e-editable="image-mid" width="170" style="border: currentColor; border-image: none; height: auto; display: block; max-width: 100%;" alt="DFB" src="https://placehold.co/600x400" border="0"></a>
                          </td>
                        </e-optional>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th width="3%" style="width: 3%; font-size: 1px;">&nbsp;</th>
                <th width="31%" valign="top" style="width: 31%;">
                  <table align="left" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <e-optional name="image-right">
                          <td align="center" class="fade" valign="top">
                            <a href="www.lorem-ipsum.de" target="_blank" e-editable="image-right"><img e-editable="image-right" width="170" style="border: currentColor; border-image: none; height: auto; display: block; max-width: 100%;" alt="DFB" src="https://placehold.co/600x400" border="0"></a>
                          </td>
                        </e-optional>
                      </tr>
                    </tbody>
                  </table>
                </th>
              </tr>
              <tr>
                <td valign="top" style="padding: 20px 0px; text-align: center; color: rgb(0, 0, 0); line-height: 24px; font-family: 'DFB Sans', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal;"  colspan="5">
                  <e-optional name="button">
                    <!-- Start Button -->
                    <div style="box-sizing: border-box;">
                      <!--[if mso]>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.lorem-ipsum.de" style="height:40px;v-text-anchor:middle;width:220px;" arcsize="50%" strokecolor="#967D28" fillcolor="#967D28">
                      <w:anchorlock/>
                      <center style="color:#ffffff;font-family: Arial, sans-serif;font-size:14px;font-weight:bold;">Button Text</center>
                  </v:roundrect>
                  <![endif]-->
                      <!--[if !mso]><!-- -->
                      <a class="btn-green" style="border-radius: 20px; border: 1px solid rgb(150, 125, 40); width: 250px; text-align: center; color: rgb(255, 255, 255); line-height: 40px; letter-spacing: 1.5px; padding-right: 19px; padding-left: 19px; font-family: 'DFB Sans', Arial, sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-block; background-color: rgb(150, 125, 40); -webkit-text-size-adjust: none;" href="www.lorem-ipsum.de" target="_blank">
                        <span style="color: rgb(255, 255, 255); text-decoration: none;">Button Text</span>
                      </a>
                      <!--<![endif]-->
                    </div>
                    <!-- End Button -->
                  </e-optional>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
  
    </tbody>
  </table>`,h={title:"Body/HeadlineThreeImagesOneButton",component:s},e={args:{text:"Was los?"}},t={render:()=>d.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,o,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const b=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,b as __namedExportsOrder,h as default};
