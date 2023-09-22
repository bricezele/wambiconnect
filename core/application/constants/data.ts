import {NavRoute} from "@/core/application/constants/routes";
import {Assets} from "@/core/application/constants/assets";

/**
 * @Project wambi-connect
 * @File data.ts
 * @Path core/application/constants
 * @Author BRICE ZELE
 * @Date 15/09/2023
 */
export const Data = {
    menu: [
        {
            link: NavRoute.HOME,
            label: 'Home.Title'
        }
    ],
    home: {
        bannerSection: {
            title: 'Home.BannerSection.Title',
            subTitle: 'Home.BannerSection.SubTitle',
            description: 'Home.BannerSection.Description',
            ctaLabel: [
                {
                    link: 'https://play.google.com/store/apps/details?id=com.wambi',
                    image: Assets.images.getItOnPlayStore
                },
                {
                    link: 'https://play.google.com/store/apps/details?id=com.wambi',
                    image: Assets.images.getItOnAppStore
                },
            ],
            userInfos: {
                title: 'Home.BannerSection.NumberOfUsers',
                users: [
                    Assets.images.user1,
                    Assets.images.user2,
                    Assets.images.user3,
                    Assets.images.user4,
                ]
            }
        },
        featuresSection: [
            {
                image: Assets.images.socialFeature,
                title: 'Home.Features.Social',
                description: 'Home.Features.Social.Description',
            },
            {
                image: Assets.images.datingFeature,
                title: 'Home.Features.Dating',
                description: 'Home.Features.Dating.Description',
            },
            {
                image: Assets.images.marketPlaceFeature,
                title: 'Home.Features.MarketPlace',
                description: 'Home.Features.MarketPlace.Description',
            },
            {
                image: Assets.images.socialFeature,
                title: 'Home.Features.MarketPlace',
                description: 'Home.Features.MarketPlace.Description',
            },
        ],
        aboutSection: [
            {
                title: 'Home.About.Simple.And.Easy',
                description: 'Home.About.Simple.And.Easy.Description',
            },
            {
                title: 'Home.About.Simple.And.Easy',
                description: 'Home.About.Simple.And.Easy.Description',
            },
            {
                title: 'Home.About.Simple.And.Easy',
                description: 'Home.About.Simple.And.Easy.Description',
            },
        ]
    }
}
