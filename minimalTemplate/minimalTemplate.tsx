import React, { FC } from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import {
  OnlyFansIcon, VimeoIcon, TwitchIcon, FacebookIcon,
  SoundcloudIcon, PinterestIcon, TelegramIcon, RedditIcon
} from "components/svg";
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { useAppContext } from 'context';
import { ICustomLink } from 'helper/types';

import { TemplateTypes } from "helper/template/templateEnums";

import styles from "assets/jss/pages/fypBioPageStyles";

const useStyles = makeStyles(styles);

const MinimalTemplate: FC = () => {

  const { state, dispatch } = useAppContext();

  const { socialPinnedLinks, customLinks } = state.links;

  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.MINIMAL}
      title={`Erik Chuks | TikTok, Instagram, Snapchat | FYP`}
      description='Up and coming producer of documentaries about the Amazon Rainforest'
      name='Erik Chuks'
      avatar='/fyp-bio/minimal-profile.webp'
    >
      <Box className={classes.contentsInner}>
        <UserInfoBox
          avatar='/fyp-bio/minimal-profile.webp'
          name='Erik Chuks'
          description='Up and coming producer of documentaries about the Amazon Rainforest'
        />

        <Box>
          <LinkItem
            title="OnlyFans"
            component={OnlyFansIcon}
            color='#fff'
          />
          <LinkItem
            title="Twitch"
            component={TwitchIcon}
            color='#fff'
          />
          <LinkItem
            title="Facebook"
            component={FacebookIcon}
            color='#fff'
          />
          <LinkItem
            title="Soundcloud"
            component={SoundcloudIcon}
            color='#fff'
          />
          <LinkItem
            title="Pinterest"
            component={PinterestIcon}
            color='#fff'
          />
          <LinkItem
            title="Telegram"
            component={TelegramIcon}
            color='#fff'
          />
          <LinkItem
            title="Reddit"
            component={RedditIcon}
            color='#000'
          />


        </Box>

        <Box className={classes.videoWrapper}>
          <YouTube
            videoId='kvkAoCbTM3Q'
            loading='lazy'
          />
        </Box>

        <Box mt={{ xs: '30px', md: '44px' }}>
          <CardsSection />
        </Box>
      </Box>
    </FypBioLayout>
  )
}

export default MinimalTemplate;
