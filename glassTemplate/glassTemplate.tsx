import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { TwitchIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const GlassTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout 
      template={TemplateTypes.GLASS}
      title={`Marcela Elisabete | TikTok, Instagram, Snapchat | FYP`}
      description='Hi, I am a streamer who is live everyday, check me out!'
      avatar='/fyp-bio/glass-profile.webp'
      name='Marcela Elisabete'
    >
      <BannerCarousel images={['/fyp-bio/il_1588xN.3369548185_mn08.avif']} />
      <Box className={classes.contentsInner}>
        <UserInfoBox 
          moveToTop={true} 
          avatar='/fyp-bio/glass-profile.webp'
          name='Marcela Elisabete'
          description='Hi, I am a streamer who is live everyday, check me out!'
        />
        <Box>
          <LinkItem
            title="Twitch"
            component={TwitchIcon}
            color='#F4617C'
            hasBgImg={true}
            className='animate__animated animate__fadeInDown animate__delay-2s'
          />
          <LinkItem
            title="Discord"
            component={DiscordIcon}
            color='#F4617C'
          />
          <LinkItem
            title="Cameo"
            component={CameoIcon}
            color='#F4617C'
          />
          <LinkItem
            title="Paypal"
            component={PaypalIcon}
            color='#F4617C'
          />
          <LinkItem
            title="GoFundMe"
            component={GoFundMeIcon}
            color='#F4617C'
          />
        </Box>

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default GlassTemplate;
