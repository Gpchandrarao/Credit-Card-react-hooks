// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  text-align: center;
  padding-top: 50px;
  color: #fff;
  font-family: 'Roboto';
`
export const Line = styled.hr`
  background-color: #ffd773;
  height: 3px;
  width: 25%;
`
export const ImgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 50vh;
  width: 90%;
  margin: 20px;
  margin-top: 100px;
  border-radius: 30px;
  box-shadow: 10px 10px 10px #344e7a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`
export const NumInput = styled.p`
  color: #fff;
  font-size: 35px;
  padding-top: 55px;
`
export const Cardholder = styled.p`
  color: #d3d9e0;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 0px;
`
export const CardholderName = styled.p`
  color: #fff;
  font-size: 35px;
  padding-top: 0px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const PaymentMethodContainer = styled.div`
  box-shadow: 0px 10px 10px #d3d9e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 60%;
`
export const PaymentHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
`
export const InputElement = styled.input`
  height: 30px;
  width: 80%;
  margin-bottom: 20px;
  padding-left: 20px;
  color: #475569;
`
