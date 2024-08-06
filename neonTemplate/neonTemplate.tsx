import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { OnlyFansIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const NeonTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.NEON}
      title={`Safa Mabel | TikTok, Instagram, Snapchat | FYP`}
      description='Discord community based on all types of Anime. Calling all Anime enthusiasts.'
      avatar='/fyp-bio/neon-profile.webp'
      name='Safa Mabel'
    >
      <BannerCarousel images={['/fyp-bio/neon-banner.webp']} />
      <Box className={classes.contentsInner}>
        <UserInfoBox
          moveToTop={true}
          avatar='/fyp-bio/neon-profile.webp'
          name='Safa Mabel'
          description='Discord community based on all types of Anime. Calling all Anime enthusiasts.'
        />
        <Box>
          <LinkItem
            title="Discord"
            component={DiscordIcon}
            color='#54AAF5'
            className='animate__animated animate__wobble animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="OnlyFans"
            component={OnlyFansIcon}
            color='#54AAF5'
          />
          <LinkItem
            title="Cameo"
            component={CameoIcon}
            color='#54AAF5'
          />
          <LinkItem
            title="Paypal"
            component={PaypalIcon}
            color='#54AAF5'
          />
          <LinkItem
            title="GoFundMe"
            component={GoFundMeIcon}
            color='#54AAF5'
          />
        </Box>

        <Box mt={{ xs: '24px', md: '40px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default NeonTemplate;
