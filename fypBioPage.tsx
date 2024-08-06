import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";

import BannerCarousel from "components/fypBioTemplate/bannerCarousel";
import CardsSection from "components/fypBioTemplate/cardsSection";
import LinkItem from "components/fypBioTemplate/linkItem";
import UserInfoBox from "components/fypBioTemplate/userInfoBox";

import { DiscordIcon } from "components/svg";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/pages/fypBioPageStyles";
const useStyles = makeStyles(styles);

import { CUSTOM_DEFAULT_AVATAR_URL } from "helper/constants";

import FypBioLayoutKaikin from "components/fypBioTemplate/fypBioLayout/fypBioLayoutKaikin";
import { useAppContext, useAuthContext } from "context";

import { recordAnalyticsSession } from "helper/endpoints/analytics";

const FypBioPage: FC = () => {
	const router = useRouter();
	const { linkname } = router.query;

	const { loading, user, setUser } = useAuthContext();
	const { state } = useAppContext();

	const { username, description, avatarUrl } = user.account;
	const { coverState, carouselImageUrls } = state.template;

	const classes = useStyles();

	const { socialPinnedLinks } = state.links;

	const [moveToTop, setMoveToTop] = useState(false);
	const [socialIconColor, setSocialIconColor] = useState("#ffffff");

	useEffect(() => {
		if (typeof linkname !== "string") return;

		const beforeUnloadCallback = async (event: any) => {
			event.preventDefault();
			await recordAnalyticsSession({
				linkname: linkname,
				referrer: document.referrer,
				timeSpentOnPage: performance.now(),
			});
		};

		window.addEventListener("beforeunload", beforeUnloadCallback);
		return () => {
			window.removeEventListener("beforeunload", beforeUnloadCallback);
		};
	}, [linkname]);

	useEffect(() => {
		const getProfileInfo = async () => {
			//   await Http.post(APIs.API_LINK_GET_INFO, { linkname: linkname })
			//     .then((response) => {
			//       const { profile } = response.data;
			//       setUser({ ...user, ...profile });
			//     })
			//     .catch((error) => {
			//       console.log(error);
			//     })
		};
		if (!loading) getProfileInfo();
	}, [linkname]);

	useEffect(() => {
		if (coverState) {
			setMoveToTop(carouselImageUrls && carouselImageUrls.length > 0);
		} else {
			// setMoveToTop(
			// 	!!status &&
			// 	backgroundType === BackgroundTypes.COVERPHOTO &&
			// 	!!backgroundUrl &&
			// 	backgroundUrl !== ""
			// );
		}
	}, [state.template]);

	if (loading) {
		return <>Loading...</>;
	} else {
		return (
			<>
				<FypBioLayoutKaikin
					template={state.template}
					title={user.linkname ?? "FypBio"}
					name={username ?? ""}
					avatar={
						avatarUrl
							? `${process.env.NEXT_PUBLIC_UPLOAD_URL}/${avatarUrl}`
							: CUSTOM_DEFAULT_AVATAR_URL
					}
				>
					{moveToTop && (
						<>
							<BannerCarousel images={carouselImageUrls} />
						</>
					)}

					<Box className={classes.contentsInner} pb="30px">
						<UserInfoBox
							moveToTop={moveToTop}
							avatar={
								avatarUrl
									? `${process.env.NEXT_PUBLIC_UPLOAD_URL}/${avatarUrl}`
									: CUSTOM_DEFAULT_AVATAR_URL
							}
							name={username ?? ""}
							description={description ?? ""}
							socialIconColor={socialIconColor}
							socialLinks={socialPinnedLinks}
						/>

						<Box>
							<LinkItem
								title="OnlyFans"
								component={DiscordIcon}
								hasBgImg={true}
								className="animate__animated animate__bounce animate__delay-2s animate__infinite"
							/>
							<LinkItem title="Discord" component={DiscordIcon} />
							{/* {
            profile.customLinks.map((link, index) => {
              <LinkItem
                title="Pinterest"
                component={<PinterestIcon color='#313744' />}
                hasBgImg
                className='animate__animated animate__flash animate__delay-2s animate__infinite'
              />
            })
          } */}
						</Box>

						<Box mt={{ xs: "30px", md: "58px" }}>
							<CardsSection />
						</Box>
					</Box>
				</FypBioLayoutKaikin>
			</>
		);
	}
};

export default FypBioPage;
