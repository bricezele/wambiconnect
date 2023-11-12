import React from 'react'
import type {NextPage} from 'next'
import BannerSection from "@/core/application/components/banner/BannerSection";
import PageLayout from "@/core/application/components/layout/PageLayout";
import {NavRoute} from "@/core/application/constants/routes";
import {useIntl} from "react-intl";
import {Data} from "@/core/application/constants/data";
import FeatureSection from "@/core/application/components/feature/FeatureSection";
import AboutSection from "@/core/application/components/about/AboutSection";
import ServiceSection from "@/core/application/components/services/ServiceSection";
import TestimonialsSection from "@/core/application/components/testimonial/TestimonialsSection";
import DownloadCTASection from "@/core/application/components/banner/DownloadCTASection";
import TeamSection from "@/core/application/components/team/TeamSection";

const Home: NextPage = () => {
    const intl = useIntl()
    return (
        <PageLayout currentRoute={NavRoute.HOME}>
            <BannerSection title={Data.home.bannerSection.title}
                           subTitle={Data.home.bannerSection.subTitle}
                           description={Data.home.bannerSection.description}
                           cta={Data.home.bannerSection.ctaLabel}
                           userInfos={Data.home.bannerSection.userInfos}
            />
            <FeatureSection features={Data.home.featuresSection}/>
            <AboutSection items={Data.home.aboutSection}/>
            <ServiceSection title={Data.home.serviceSection.title}
                            description={Data.home.serviceSection.description}
                            services={Data.home.serviceSection.services}/>
            <TestimonialsSection reviews={Data.home.testimonialSection}/>
            <DownloadCTASection cta={Data.home.downloadCTASection.ctaLabel}
                                title={Data.home.downloadCTASection.title}
                                description={Data.home.downloadCTASection.description}/>
            <TeamSection/>
        </PageLayout>
    )
}

export default Home

