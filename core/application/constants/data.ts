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
        },
        featuresSection: [
            {
                icon: 'mdi mdi-account-convert',
                title: 'Home.Features.MarketPlace',
                description: 'Home.Features.MarketPlace.Description',
            },
            {
                icon: 'mdi mdi-alarm-check',
                title: 'Home.Features.MarketPlace',
                description: 'Home.Features.MarketPlace.Description',
            },
            {
                icon: 'mdi mdi-android',
                title: 'Home.Features.MarketPlace',
                description: 'Home.Features.MarketPlace.Description',
            },
            {
                icon: 'mdi mdi-apple',
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
