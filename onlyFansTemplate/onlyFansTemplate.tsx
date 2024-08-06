import React, { FC } from "react";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import FypBioLayout from "components/fypBioTemplate/fypBioLayout";
import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";
import LinkItem from "components/fypBioTemplate/linkItem";
import { OnlyFansIcon, VimeoIcon, TwitchIcon, SpotifyIcon, TiktokIcon } from "components/svg";
import HeartCard from 'components/fypBioTemplate/heartCard';
import CardsSection from 'components/fypBioTemplate/cardsSection';

import { TemplateTypes } from "helper/template/templateEnums";

import cardImg from 'assets/img/fypbio/card-img.webp';

import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

const OnlyFansTemplate: FC = () => {
  const classes = useStyles();

  return (
    <FypBioLayout
      template={TemplateTypes.ONLYFANS}
      title={`Irene Gladys | TikTok, Instagram, Snapchat | FYP`}
      description='Super car driver and OnlyFans model. Check me out today :)'
      name='Irene Gladys'
      avatar='/fyp-bio/only-fans-profile.webp'
    >
      <BannerCarousel images={['/fyp-bio/Renee-Gracie.webp']} />
      <Box className={classes.contentsInner}>
        <UserInfoBox
          moveToTop={true}
          avatar='/fyp-bio/only-fans-profile.webp'
          name='Irene Gladys'
          description='Super car driver and OnlyFans model. Check me out today :)'
        />
        <Box>
          <LinkItem
            title="OnlyFans"
            component={OnlyFansIcon}
            hasBgImg={true}
            className='animate__animated animate__bounce animate__delay-2s animate__infinite'
          />
          <LinkItem
            title="Vimeo"
            component={VimeoIcon}
          />
          <LinkItem
            title="Twitch"
            component={TwitchIcon}
          />
          <LinkItem title="Spotify" component={SpotifyIcon} />
          <LinkItem
            title="Tiktok"
            component={TiktokIcon}
          />

          <Box className={clsx(classes.subscribeForm, 'subscribe-form')}>
            <Typography variant='body1'>
              Get all the latest about me!!
            </Typography>
            <Box position='relative'>
              <OutlinedInput fullWidth placeholder='Enter Email Address' />
              <Button variant='contained'>
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        <Grid container rowSpacing='20px' columnSpacing={{ md: 3 }}>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard
              backgroundImg={cardImg}
              title='Random Theory Podcast'
              subTitle='Listen to our new podcast over here'
              showDetails={true}
            />
          </Grid>
        </Grid>

        <Box my={{ xs: '20px', md: '26px' }}>
          <LinkItem
            title="Twitch"
            component={TwitchIcon}
          />
        </Box>

        <Grid container rowSpacing='20px' columnSpacing={{ md: 3 }}>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HeartCard backgroundImg={cardImg} />
          </Grid>
        </Grid>

        <Box mt={{ xs: '24px', md: '55px' }}>
          <CardsSection showCarousel={true} />
        </Box>
      </Box>
    </FypBioLayout>
  );
};

export default OnlyFansTemplate;
