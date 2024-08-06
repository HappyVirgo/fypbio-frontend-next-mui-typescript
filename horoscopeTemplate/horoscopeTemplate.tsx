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

const HoroscopeTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.HOROSCOPE}
      title={`Luna R | TikTok, Instagram, Snapchat | FYP`}
      description='Spiritual guide.'
      avatar='/fyp-bio/bg-img-7-profile.webp'
      name='Luna R'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/bg-img-7-profile.webp'
          name='Luna R'
          description='Spiritual guide.'
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

export default HoroscopeTemplate;
