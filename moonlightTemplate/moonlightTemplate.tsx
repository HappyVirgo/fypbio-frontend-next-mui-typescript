import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { TwitchIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const MoonlightTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.MOONLIGHT}
      title={`Janine K | TikTok, Instagram, Snapchat | FYP`}
      description='Horoscope enthusiast who can predict your future.'
      avatar='/fyp-bio/bg-img-5-profile.webp'
      name='Janine K'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/bg-img-5-profile.webp'
          name='Janine K'
          description='Horoscope enthusiast who can predict your future.'
        />
        <Box>
        <LinkItem
            title="Twitch"
            component={TwitchIcon}
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

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default MoonlightTemplate;
