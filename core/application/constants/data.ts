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
        }
    }
}
