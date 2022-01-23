import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Popup from 'reactjs-popup'
import {
  ShoppingCartTwoTone,
  ExpandLess,
  ExpandMore,
  CancelPresentation,
} from '@mui/icons-material'
import CartItems from '../../store/cartItems'

const Container = styled.div`
  height: 55px;
  width: 100%;
  padding: 0 15px;
  background-color: #d7d7d7;
`
const CartCount = styled.div`
  float: right;
  display: inline-block;
`
const RowSection = styled(Row)`
  margin: 10px 0;
`
const ExpandMoreStyled = styled(ExpandMore)`
  position: absolute;
`
const ExpandLessStyled = styled(ExpandLess)`
  position: absolute;
`

const CustPopup = styled.div`
  margin: 10px;
  background: #808080;
  width: 100%;
  padding: 5px;
`

const Header = () => {
  const { qtyInfo, cartInfo } = useSelector((state) => state.cart)
  const [ShowItem, setShowItem] = useState(false)
  const ref = useRef()
  const dispatch = useDispatch()

  const handleToggle = () => {
    setShowItem(!ShowItem)
  }

  const priceCalculation = () => {
    let totalPrice = 0
    let currencyType = '$'
    if (cartInfo.length > 0) {
      cartInfo.map((i) => {
        currencyType = i.currency
        totalPrice += parseFloat(qtyInfo[i.id]) * parseFloat(i.price)
      })
    }
    return `${currencyType} ${totalPrice}`
  }

  const totalCount = () => {
    if (cartInfo.length > 1) {
      return `${cartInfo.length} Items`
    }
    return `${cartInfo.length} Item`
  }

  const renderCartProducts = () => {
    return (
      <Grid>
        {cartInfo.map((item) => (
          <Row>
            <Col xs={2} style={{ margin: '3px 0' }}>
              <CancelPresentation
                style={{ cursor: 'pointer' }}
                aria-label={`Remove ${item.title} Product`}
                onClick={() => removeProduct(item)}
              />
            </Col>
            <Col xs={4} style={{ margin: '3px 0' }}>
              <p
                aria-label={`${item.title} Product title`}
                style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}
              >
                {item.title}
              </p>
              <p
                aria-label={`$${
                  parseFloat(qtyInfo[item.id]) * parseFloat(item.price) ||
                  parseFloat(0)
                } Product Price`}
                style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}
              >
                $
                {parseFloat(qtyInfo[item.id]) * parseFloat(item.price) ||
                  parseFloat(0)}
              </p>
            </Col>
            <Col xs={2} style={{ margin: '3px 0' }}>
              <p
                aria-label={`${item.title} Quantity ${qtyInfo[item.id]}`}
                style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}
              >
                {`Qty: ${qtyInfo[item.id]}`}
              </p>
            </Col>
          </Row>
        ))}
      </Grid>
    )
  }

  const removeProduct = (item) => {
    const cartProdList = cartInfo.filter((i) => i.id !== item.id)
    const qtyProdList = Object.keys(qtyInfo).reduce((accumulator, key) => {
      if (key !== item.id) {
        accumulator[key] = qtyInfo[key]
      }
      return accumulator
    }, {})
    dispatch(CartItems.actions.onRemove(cartProdList))
    dispatch(CartItems.actions.setQuantity(qtyProdList))
  }

  return (
    <Container>
      <p
        aria-label="Cart Header"
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          display: 'inline-block',
        }}
      >
        {ShowItem ? 'Mini Cart' : 'Cart'}
      </p>
      <CartCount>
        <RowSection>
          <Col xs={10}>
            <Col xs={12}>
              <span aria-label={`Total Price ${priceCalculation()}`}>
                {priceCalculation()}
              </span>
            </Col>
            <Col xs={12}>
              <Popup
                ref={ref}
                trigger={
                  <div style={{ cursor: 'pointer' }}>
                    <span
                      onClick={handleToggle}
                      aria-label={`Total ${totalCount()}`}
                    >
                      {' '}
                      {totalCount()}{' '}
                    </span>
                    {ShowItem ? (
                      <ExpandLessStyled onClick={handleToggle} />
                    ) : (
                      <ExpandMoreStyled onClick={handleToggle} />
                    )}
                  </div>
                }
              >
                <CustPopup>{renderCartProducts()}</CustPopup>
              </Popup>
            </Col>
          </Col>
          <Col xs={2}>
            <ShoppingCartTwoTone />
          </Col>
        </RowSection>
      </CartCount>
    </Container>
  )
}

export default Header
