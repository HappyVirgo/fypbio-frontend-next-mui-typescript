import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { DiscordIcon, TwitterIcon, YoutubeOutlineIcon, CashappIcon, GleamIcon, BitcoinIcon, EthIcon, DogeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const SnowTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.SNOW}
      title={`Golden Outlaws | TikTok, Instagram, Snapchat | FYP`}
      description='ESports Team that competes in Rocket League and CSGO tournaments.'
      avatar='/fyp-bio/snow-profile.webp'
      name='Golden Outlaws'
    >
      <BannerCarousel images={['/fyp-bio/snow-banner.webp']} />
      <Box className={classes.contentsInner}>
        <UserInfoBox
          moveToTop={true}
          avatar='/fyp-bio/snow-profile.webp'
          name='Golden Outlaws'
          description='ESports Team that competes in Rocket League and CSGO tournaments.'
        />
        <Box>
          <LinkItem
            title="Discord"
            component={DiscordIcon}
            hasBgImg={true}
            className='animate__animated animate__tada animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Twitter"
            description="Exclusive Content Listed There!!"
            component={TwitterIcon}
          />
          <LinkItem
            title="Youtube"
            description="Exclusive Content Listed There!!"
            component={YoutubeOutlineIcon}
          />
          <LinkItem
            title="Cashapp"
            component={CashappIcon}
          />
          <LinkItem
            title="Gleam"
            component={GleamIcon}
          />
          <LinkItem
            title="Bitcoin"
            component={BitcoinIcon}
          />
          <LinkItem
            title="ETH"
            component={EthIcon}
          />
          <LinkItem
            title="Doge"
            component={DogeIcon}
          />
        </Box>

        <Box mt={{ xs: '24px', md: '42px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default SnowTemplate;
