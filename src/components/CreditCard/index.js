// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  Line,
  ImgContainer,
  NumInput,
  Cardholder,
  PaymentContainer,
  CardholderName,
  PaymentHeading,
  PaymentMethodContainer,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [num, setNum] = useState('')
  const [name, setName] = useState('')

  const onChangeNum = event => {
    setNum(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <ImgContainer data-testid="creditCard">
          <NumInput>{num}</NumInput>
          <Cardholder>CARDHOLDER NAME</Cardholder>
          <CardholderName>{name.toUpperCase()}</CardholderName>
        </ImgContainer>
      </CardContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={num}
            onChange={onChangeNum}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
