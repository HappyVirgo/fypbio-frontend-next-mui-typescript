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

const CyberTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.CYBER}
      title={`Millie G | TikTok, Instagram, Snapchat | FYP`}
      description='Gamer, streamer, and talk host.'
      avatar='/fyp-bio/bg-img-6-profile.webp'
      name='Millie G'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/bg-img-6-profile.webp'
          name='Millie G'
          description='Gamer, streamer, and talk host.'
        />
        <Box>
          <LinkItem
            title="Twitch"
            component={TwitchIcon}
            color='#35157a'
            hasBgImg={true}
            className='animate__animated animate__fadeInDown animate__delay-2s'
          />
          <LinkItem
            title="Discord"
            component={DiscordIcon}
            color='#35157a'
          />
          <LinkItem
            title="Cameo"
            component={CameoIcon}
            color='#35157a'
          />
          <LinkItem
            title="Paypal"
            component={PaypalIcon}
            color='#35157a'
          />
          <LinkItem
            title="GoFundMe"
            component={GoFundMeIcon}
            color='#35157a'
          />
        </Box>

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default CyberTemplate;
