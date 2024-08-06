import React, { FC } from 'react';

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import { InstagramIcon, VimeoIcon, ShopifyIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const ThreeDimensionTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.THREE_DIMENSION_BTNS}
      title={`Nala Young | TikTok, Instagram, Snapchat | FYP`}
      description='Model for vogue and content creator.'
      avatar='/fyp-bio/three-buttons-profile.webp'
      name='Nala Young'
    >
      <BannerCarousel images={['/fyp-bio/three-buttons-banner.webp']} />
      <Box className={classes.contentsInner}>
        <UserInfoBox
          moveToTop={true}
          avatar='/fyp-bio/three-buttons-profile.webp'
          name='Nala Young'
          description='Model for vogue and content creator.'
        />
        <Box className='link-items-list'>
          <LinkItem
            title="Instagram"
            component={InstagramIcon }
            className='animate__animated animate__pulse animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            component={VimeoIcon }
          />
          <LinkItem
            title="Shopify"
            component={ShopifyIcon }
          />
        </Box>

        <Box mt={{ xs: '30px', md: '58px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default ThreeDimensionTemplate;
