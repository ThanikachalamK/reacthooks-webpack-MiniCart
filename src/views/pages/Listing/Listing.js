/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'

import Card from '../../common/Card'

const Container = styled.div`
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.8rem;
  }
`

function Listing() {
  const [data, setData] = React.useState([])
  const { spaceXData, isLoading, filters } = useSelector(
    (state) => state.search
  )

  function fetchData() {
    setTimeout(() => {
      setData((currentState) =>
        currentState.concat(
          filters.filteredData.slice(data.length, data.length + 20)
        )
      )
    }, 1500)
  }

  React.useEffect(() => {
    if (filters.filteredData.length !== spaceXData.length)
      setData(filters.filteredData)
  }, [filters.filteredData])

  React.useEffect(() => {
    fetchData()
  }, [
    filters.name,
    filters.flightNumber,
    filters.isUpcoming,
    filters.launchDate,
  ])

  React.useEffect(() => {
    fetchData()
  }, [spaceXData])

  if (isLoading) return <p>Loading...</p>

  return (
    <Container>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={data.length < filters.filteredData.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data && data.map((item) => <Card key={item.id} details={item} />)}
      </InfiniteScroll>
    </Container>
  )
}

export default Listing

