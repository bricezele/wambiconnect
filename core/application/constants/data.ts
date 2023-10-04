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
        ],
        downloadCTASection: {
            title: 'Home.DownloadCTA.Title',
            description: 'Home.DownloadCTA.Description',
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
        serviceSection: {
            title: 'Home.Service.Title',
            description: 'Home.Service.Description',
            services: [
                {
                    icon: 'mdi mdi-checkbox-marked-circle-outline',
                    title: 'Home.Service.Service1.Title',
                    description: 'Home.Service.Service1.Description'
                },
                {
                    icon: 'mdi mdi-checkbox-marked-circle-outline',
                    title: 'Home.Service.Service2.Title',
                    description: 'Home.Service.Service2.Description'
                },
                {
                    icon: 'mdi mdi-checkbox-marked-circle-outline',
                    title: 'Home.Service.Service3.Title',
                    description: 'Home.Service.Service3.Description'
                },
            ]
        },
        testimonialSection: [
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews1.Role',
                review: 'Home.Reviews.Reviews1'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews2.Role',
                review: 'Home.Reviews.Reviews2'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews3.Role',
                review: 'Home.Reviews.Reviews3'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews4.Role',
                review: 'Home.Reviews.Reviews4'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews5.Role',
                review: 'Home.Reviews.Reviews5'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews5.Role',
                review: 'Home.Reviews.Reviews5'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews5.Role',
                review: 'Home.Reviews.Reviews5'
            },
            {
                image: 'http://paul-themes.com/html/appmicron/images/resources/user-img2.png',
                name: 'Omar Hampton',
                role: 'Home.Reviews.Reviews5.Role',
                review: 'Home.Reviews.Reviews5'
            },
        ]
    }
}
