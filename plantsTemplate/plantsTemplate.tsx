import React, { FC } from 'react';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { InstagramIcon, DiscordIcon, CameoIcon, PaypalIcon, GoFundMeIcon } from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const PlantsTemplate: FC = () => {

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.PLANTS}
      title={`Lakshmana Sandro | TikTok, Instagram, Snapchat | FYP`}
      description='Male Model and Instagram Content Creator.'
      avatar='/fyp-bio/bg-img-1-profile.webp'
      name='Lakshmana Sandro'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/bg-img-1-profile.webp'
          name='Lakshmana Sandro'
          description='Male Model and Instagram Content Creator.'
        />
        <Box>
          <LinkItem
            title="Instagram"
            component={InstagramIcon}
            className='animate__animated animate__slideInUp'
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

export default PlantsTemplate;
