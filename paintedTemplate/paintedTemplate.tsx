import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon, InstagramIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const PaintedTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.PAINTED}
      title={`Isam Romolo | TikTok, Instagram, Snapchat | FYP`}
      description='Photographer with a passion for finding the best shots.'
      logoColor='black'
      avatar='/fyp-bio/bg-img-2-profile.webp'
      name='Isam Romolo'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/bg-img-2-profile.webp'
          name='Isam Romolo'
          description='Photographer with a passion for finding the best shots.'
        />
        <Box>
          <LinkItem
            title="Instagram"
            component={InstagramIcon}
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

export default PaintedTemplate;
