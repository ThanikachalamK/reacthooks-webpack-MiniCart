import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { useQuery } from 'react-query'
import { Screenshot } from '@mui/icons-material'

import getAPIData from '../../helpers/httpService'
import CartItems from '../../store/cartItems'

const Container = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  padding: 16px;
`
const RowBox = styled(Row)`
  padding: 10px 0px;
  margin: 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const StyledDiv = styled.div`
  background-color: transparent;
  border: 0.0625rem solid #000000;
  color: #000000;
  width: 60px;
  padding: 10px;
  border-radius: 6.25rem;
  height: 5px;
  line-height: 0.01;
  text-align: center;
  span {
    font-weight: bold;
    font-size: 12px !important;
  }
  transform: translate(50%, 50%);
  -webkit-transform: translate(50%, 50%);
  -moz-transform: translate(50%, 50%);
  -o-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
`

const DecrementWrapper = styled.button`
  padding-right: 10px;
  text-decoration: none;
`

const IncrementWrapper = styled.button`
  padding-left: 5px;
  float: right;
  text-decoration: none;
`

const Home = () => {
  const { qtyInfo, cartInfo } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useQuery(
    'CartProducts',
    () => {
      dispatch(CartItems.actions.onPending())
      return getAPIData('get', 'products.json').then(
        (response) => response.data?.products
      )
    },
    {
      staleTime: 60 * 1000,
      onSuccess: (data) => {
        dispatch(CartItems.actions.onSuccess(data))
      },
    }
  )

  return (
    <Container>
      <Grid>
        {cartInfo.map((item) => (
          <RowBox>
            <Col xs={1} style={{ margin: '3px 0' }}>
              {/* <img src={`../../images${item.image}`} alt={`${item.image} image text`} aria-label={`${item.title} Product image`} /> */}
              <Screenshot
                style={{ width: '100%', height: '100%' }}
                aria-label={`${item.title} Product image`}
              />
            </Col>
            <Col xs={6} style={{ margin: '3px 0' }}>
              <p
                aria-label={`${item.title} Product title`}
                style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}
              >
                {item.title}
              </p>
              <p
                aria-label={`${item.title} description - ${item.desc}`}
                style={{ margin: 0, fontSize: '12px' }}
              >
                {item.desc}
              </p>
              <p
                aria-label={`${item.title} Quantity ${qtyInfo[item.id]}`}
                style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}
              >
                {`Qty: ${qtyInfo[item.id]}`}
              </p>
            </Col>
            <Col xs={4} style={{ margin: '3px 0' }}>
              <StyledDiv>
                {qtyInfo[item.id] > 1 && (
                  <DecrementWrapper
                    as="a"
                    href="javascript:void(0)"
                    aria-label="Decrement quantity"
                    onClick={() => {
                      if (qtyInfo[item.id] > 0) {
                        dispatch(CartItems.actions.onPending())
                        dispatch(
                          CartItems.actions.setQuantity({
                            ...qtyInfo,
                            [item.id]: qtyInfo[item.id] - 1,
                          })
                        )
                      }
                    }}
                    style={{ cursor: 'pointer', float: 'left' }}
                    role="button"
                  >
                    -
                  </DecrementWrapper>
                )}
                <span aria-label={`${item.title} ${qtyInfo[item.id]} quantity`}>
                  {qtyInfo[item.id]}
                </span>
                {qtyInfo[item.id] > 0 && (
                  <IncrementWrapper
                    as="a"
                    href="javascript:void(0)"
                    aria-label="Increment quantity"
                    onClick={() => {
                      dispatch(CartItems.actions.onPending())
                      dispatch(
                        CartItems.actions.setQuantity({
                          ...qtyInfo,
                          [item.id]: qtyInfo[item.id] + 1,
                        })
                      )
                    }}
                    style={{ cursor: 'pointer', float: 'right' }}
                    role="button"
                  >
                    +
                  </IncrementWrapper>
                )}
              </StyledDiv>
            </Col>
            <Col xs={1} style={{ margin: '3px 0' }}>
              <p
                aria-label={`$${
                  parseFloat(qtyInfo[item.id]) * parseFloat(item.price) ||
                  parseFloat(0)
                } Product Price`}
                style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}
              >
                $
                {parseFloat(qtyInfo[item.id]) * parseFloat(item.price) ||
                  parseFloat(0)}
              </p>
            </Col>
          </RowBox>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
