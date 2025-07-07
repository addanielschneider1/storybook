import{j as s}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function d({text:p}){return s.jsx("p",{children:p})}d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"MailTemplate",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const c=`<table width="540" align="center" class="wp100 dm_bg_grey" style="margin: 0px auto; width: 540px; max-width: 540px;" bgcolor="#ffffff" border="0" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td align="center" valign="top" style="padding: 0px;">
          <table width="540" align="center" class="wp90 wp80s" style="margin: 0px auto; width: 540px; max-width: 540px;" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <th width="45%" class="moveup wp100s" valign="top" style="width: 45%;">
                  <table align="left" class="wp100s" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <e-optional name="image">
                          <td align="center" class="fade" valign="top">
                            <a href="www.lorem-ipsum.de" target="_blank" e-editable="image-link"><img e-editable="image" width="250" style="border: currentColor; border-image: none; height: auto; display: block; max-width: 100%;" alt="DFB" src="https://placehold.co/600x400" border="0"></a>
                          </td>
                        </e-optional>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th width="5%" class="hideme" style="width: 5%; font-size: 1px;">&nbsp;</th>
                <th width="45%" class="movedown wp100s" valign="top" style="width: 45%;">
                  <table align="left" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td height="190" class="hauto pt20" valign="top" style="height: 190px;">
                          <e-optional name="headline">
                            <h3 class="tac" style="margin: 0px; padding: 0px; text-align: left; color: rgb(0, 0, 0); text-transform: uppercase; line-height: 28px; letter-spacing: 1px; font-family: 'DFB Sans', Arial, Helvetica, sans-serif; font-size: 25px; font-weight: bold;" e-editable="h1">Headline Lorem</h3>
                          </e-optional>
                          <p style="margin: 0px; padding: 0px; line-height: 8px; font-size: 1px;">&nbsp;</p>
                          <e-optional name="text">
                            <p class="tac" style="margin: 0px; padding: 0px; text-align: left; color: rgb(0, 0, 0); line-height: 24px; letter-spacing: 1px; font-family: 'DFB Sans', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal;" e-editable="text">
                              dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore. consetetur sadipscing elitr, sed diam nonumy.
                            </p>
                          </e-optional>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding: 20px 0px; text-align: left; color: rgb(0, 0, 0); line-height: 24px; font-family: 'DFB Sans', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal;">
                          <e-optional name="button">
                            <!-- Start Button -->
                            <div style="box-sizing: border-box;">
                              <!--[if mso]>
                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.lore-ipsum.de" style="height:40px;v-text-anchor:middle;width:220px;" arcsize="50%" strokecolor="#967D28" fillcolor="#967D28">
                      <w:anchorlock/>
                      <center style="color:#ffffff;font-family: Arial, sans-serif;font-size:14px;font-weight:bold;">Button Text</center>
                  </v:roundrect>
                  <![endif]-->
                              <!--[if !mso]><!-- -->
                              <a class="btn-green" style="border-radius: 20px; border: 1px solid rgb(150, 125, 40); width: auto; text-align: center; color: rgb(255, 255, 255); line-height: 40px; letter-spacing: 1.5px; padding-right: 19px; padding-left: 19px; font-family: 'DFB Sans', Arial, sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-block; background-color: rgb(150, 125, 40); -webkit-text-size-adjust: none;" href="www.lorem-ipsum.de" target="_blank">
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
                </th>
                <th width="5%" class="hideme" style="width: 5%; font-size: 1px;">&nbsp;</th>
  
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`,h={title:"Body/ImagehalfHeadlineTextButtonhalf",component:d},e={args:{text:"Was los?"}},t={render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:c}})};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: "Was los?"
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var o,r,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Hiermit kann man reines html rendern. Allerdings wird immer ein <div> im HTML zusaetzlich ausgeben
  render: () => {
    return <div dangerouslySetInnerHTML={{
      __html: template
    }} />;
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const x=["ReactStory","HtmlStory"];export{t as HtmlStory,e as ReactStory,x as __namedExportsOrder,h as default};
