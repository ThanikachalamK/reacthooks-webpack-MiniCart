import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useQuery } from 'react-query'

import getAPIData from '../../../helpers/httpService'
import searchSlice from '../../../store/searchSlice'
import Filters from '../../custom/Filters'
import Listing from '../Listing/Listing'

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
`

function Home() {
  const { showFilters } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  useQuery(
    'spaceX',
    () => {
      dispatch(searchSlice.actions.onPending())

      return getAPIData('get', '/launches').then((response) => response.data)
    },
    {
      staleTime: 60 * 1000,
      onSuccess: (data) => {
        dispatch(searchSlice.actions.onSuccess(data))
      },
    }
  )

  // Thunk way of dispatching the action on API success
  // useEffect(() => {
  //     dispatch(getSpaceXData());
  // }, [])

  return (
    <Container>
      {showFilters && <Filters />}
      <Listing />
    </Container>
  )
}

export default Home

