import styled from "styled-components"
import variables from "../../../data/variables"

export const FooterStyle = styled.footer`
  padding-top: 1rem;
  padding-bottom: 8rem;
  z-index: 0;
  position: relative;
  text-align: left;
  @media (min-width: ${variables.breakpointPhone}) {
    background: linear-gradient(to top, #efe9e9, transparent 50%);
  }
  @media (max-width: ${variables.breakpointPhone}) {
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
  }
  .quote {
    font-size: 4rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${variables.primary};
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 2rem;
    }
  }
`

export const QuoteLine = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 2px;
  font-weight: 500;
`

export const QuoteLineSmall = styled.p`
  font-size: 0.75rem;
  line-height: 1.8;
  letter-spacing: 2px;
  margin-bottom: 20px;
  margin-top: 0;
`

export const CopyRight = styled.p`
  font-size: 11px;
  line-height: 1.8;
  letter-spacing: 1px;
`
export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`
export const FooterSocialMedia = styled.ul`
  list-style: none;
  padding-left: 0;
  @media (max-width: ${variables.breakpointPhone}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    margin-bottom: 1.5rem;
  }
`
export const MediaLink = styled.a`
  padding: 1rem 0rem;
  padding-bottom: 0.5rem;
  line-height: 1;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${variables.primary};
`
