import React from 'react'
import type {NextPage} from 'next'
import styled from 'styled-components'
import BannerSection from "@/core/application/components/banner/BannerSection";
import PageLayout from "@/core/application/components/layout/PageLayout";
import {NavRoute} from "@/core/application/constants/routes";
import {useIntl} from "react-intl";
import {Data} from "@/core/application/constants/data";
import FeatureSection from "@/core/application/components/feature/FeatureSection";
import AboutSection from "@/core/application/components/about/AboutSection";

const Home: NextPage = () => {
    const intl = useIntl()
    return (
        <PageLayout currentRoute={NavRoute.HOME}>
            <BannerSection title={intl.formatMessage({id: Data.home.bannerSection.title})}
                           subTitle={intl.formatMessage({id: Data.home.bannerSection.subTitle})}
                           description={intl.formatMessage({id: Data.home.bannerSection.description})}
                           cta={Data.home.bannerSection.ctaLabel}
                           userInfos={Data.home.bannerSection.userInfos}
            />
            {Data.home.featuresSection && <FeatureSection features={Data.home.featuresSection}/>}
            {Data.home.aboutSection && <AboutSection items={Data.home.aboutSection}/>}
        </PageLayout>
    )
}

export default Home

