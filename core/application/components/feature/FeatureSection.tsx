/**
 * @Project wambi-connect
 * @File FeatureSection.tsx
 * @Path core/application/components/feature
 * @Author BRICE ZELE
 * @Date 16/09/2023
 */
import React from "react";
import styled from "styled-components";
import {Row} from "@/core/application/components/common";
import {Title3} from "@/core/application/components/common/Title";
import {breakpoints} from "@/themes/breakpoints";
// @ts-ignore
import Fade from "react-reveal/Fade";
import {useIntl} from "react-intl";

interface IFeatureItemProps {
    image: string
    title: string
    description: string
}

interface IFeatureProps {
    features: IFeatureItemProps[]
}


const FeatureSection: React.FC<IFeatureProps> = ({
                                                     features
                                                 }) => {
    const intl = useIntl()
    return (
        <FeatureSectionContainer id='features' className='features'>
            <FeatureSectionWrapper className='custom-container'>
                <Container>
                    <Row className='row'>
                        {
                            features.map((feature, index) => (
                                <FeatureItem className='col-lg-3 col-md-4 col-sm-6 col-12' key={index}>
                                    <Fade bottom duration={700} delay={index * 100}>
                                        <FeatureItemIcon>
                                            <FeatureItemIconContainer style={{
                                                backgroundImage: `url(${feature.image})`
                                            }}/>
                                        </FeatureItemIcon>
                                        <FeatureItemInfo>
                                            <FeatureItemTitle3>{intl.formatMessage({id: feature.title})}</FeatureItemTitle3>
                                            <p>{intl.formatMessage({id: feature.description})}</p>
                                        </FeatureItemInfo>
                                    </Fade>
                                </FeatureItem>
                            ))
                        }
                    </Row>
                </Container>
            </FeatureSectionWrapper>
        </FeatureSectionContainer>
    )
}

const FeatureSectionContainer = styled.section`
  padding-top: 50px;
  width: 100%;
  position: relative;

  @media ${breakpoints.laptop} {
    padding: 100px 0;
  }

  @media ${breakpoints.tablet} {
    &:before {
      content: '';
      position: absolute;
      bottom: 45px;
      left: 0;
      width: 50%;
      height: 310px;
      border-radius: 0 50px 50px 0;
      //z-index: 9;
      background-color: #333333;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
    }
  }
`

const FeatureSectionWrapper = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`

const Container = styled.div`
  width: 100%;
  position: relative;

  @media ${breakpoints.laptop} {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 368px;
      height: 390px;
      background-image: url(/images/vector-shape.png);
      background-repeat: no-repeat;
    }
  }

`

const FeatureItem = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 99;
  padding-bottom: 50px;
`

const FeatureItemIcon = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

const FeatureItemIconContainer = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: -5px 7px 11px rgba(0, 0, 0, 0.35);
  transition: all 300ms linear;
  border-radius: 10px;
`

const FeatureItemInfo = styled.div`
  width: 100%;
`

const FeatureItemTitle3 = styled(Title3)`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #fff;
`
export default FeatureSection
