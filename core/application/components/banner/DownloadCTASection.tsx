import {ICTAProps} from "@/core/application/components/banner/BannerSection";
import React from "react";
import styled from "styled-components";
import {Column, Row} from "@/core/application/components/common";
import {Paragraph, Title3} from "@/core/application/components/common/Title";
import {breakpoints, deviceSizes} from "@/themes/breakpoints";
import {useIntl} from "react-intl";
import {Assets} from "@/core/application/constants/assets";
import useMediaQuery from "@/core/application/hooks/useMediaQuery";

/**
 * @Project wambi-connect
 * @File DownloadCTASection.tsx
 * @Path core/application/components/banner
 * @Author BRICE ZELE
 * @Date 30/09/2023
 */
interface IDownloadCTASectionsProps {
    cta: ICTAProps[]
    title: string
    description: string
}

const DownloadCTASection: React.FC<IDownloadCTASectionsProps> = ({
                                                                     cta,
                                                                     title,
                                                                     description
                                                                 }) => {
    const intl = useIntl()
    const isMobile = useMediaQuery(parseInt(deviceSizes.laptop))

    return (
        <Container className='get-started'>
            <Background/>
            <SubContainer className='custom-container'>
                <Wrapper>
                    <RowSection>
                        <div className='col-sm-12 col-12 col-lg-7'>
                            <ColumnSection>
                                <DownloadTitle3>{intl.formatMessage({id: title})}</DownloadTitle3>
                                <Paragraph>{intl.formatMessage({id: description})}</Paragraph>
                                <CTAContainer>
                                    {cta.map((element, index) => (
                                        <a target='_blank' href={element.link} title={element.link} key={index}>
                                            <img src={element.image}/>
                                        </a>
                                    ))}
                                </CTAContainer>
                            </ColumnSection>
                        </div>
                        <div className='col-sm-12 col-12 col-lg-5'>
                            {isMobile && (
                                <BannerImageContainer>
                                    <img src={Assets.images.ctaBanner}/>
                                </BannerImageContainer>
                            )}
                        </div>
                    </RowSection>
                </Wrapper>
            </SubContainer>
        </Container>
    )
}

const Container = styled.section`
  width: 100%;
  position: relative;
  padding: 100px 0;
`
const SubContainer = styled.div`
  max-width: 1410px;
  position: relative;
  overflow: visible;
  margin: 0 auto;

  @media ${breakpoints.laptop} {
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(/images/cta-banner.png);
      background-repeat: no-repeat;
      right: 100px;
      bottom: 50px;
      background-size: contain;
      background-position: right bottom;
    }
  }
`
const Wrapper = styled.div`
  border-radius: 40px;
  padding: 50px 50px;
  box-shadow: 0 0 65px rgba(0, 122, 253, 0.35);
  background-color: #007afd;
  width: 100%;
  height: 100%;

  @media ${breakpoints.laptopL} {
    padding: 50px 150px;
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-image: url(/images/bg4.png);
`
const DownloadTitle3 = styled(Title3)`
  color: #ffffff;
  font-size: 50px;
  font-weight: 700;

  @media ${breakpoints.tablet} {
    font-size: 60px;
  }
`
const RowSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 40px;

  @media ${breakpoints.laptop} {
    flex-direction: row;
  }
`
const ColumnSection = styled(Column)`
  row-gap: 40px;
  justify-content: space-between;
`
const BannerImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: end;

  img {
    width: 100%;
  }
`

const BannerImage = styled.div`
`
const CTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: center;

  @media ${breakpoints.tabletL} {
    justify-content: flex-start;
  }

  a {
    display: block;
    padding: 15px 15px;
    background-color: #fff;
    border: none;
    position: relative;
    border-radius: 12px;
    transition: .4s all;

    @media ${breakpoints.tablet} {
      padding: 15px 35px;
    }

    &:hover {
      background-color: #007afd;

      img {
        filter: invert(1);
      }
    }
  }

  img {
    width: 100%;
    transition: .4s all;
  }
`
export default DownloadCTASection
