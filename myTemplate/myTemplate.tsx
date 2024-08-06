import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { PinterestIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const MyTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.MINE}
      title={`Felisha Simona | TikTok, Instagram, Snapchat | FYP`}
      description='I am a chef that works in New York City restaurants.'
      avatar='/fyp-bio/my-theme-profile.webp'
      name='Felisha Simona'
    >
      <Box className={classes.contentsInner} pb='30px'>
        <UserInfoBox
          avatar='/fyp-bio/my-theme-profile.webp'
          name='Felisha Simona'
          description='I am a chef that works in New York City restaurants.'
        />
        <Box>
          <LinkItem
            title="Pinterest"
            component={PinterestIcon}
            color='#313744'
            hasBgImg
            className='animate__animated animate__flash animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Discord"
            component={DiscordIcon}
          />
          <LinkItem
            title="Cameo"
            component={CameoIcon}
          />
          <LinkItem
            title="Paypal"
            component={PaypalIcon}
          />
          <LinkItem
            title="GoFundMe"
            component={GoFundMeIcon}
          />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default MyTemplate;
