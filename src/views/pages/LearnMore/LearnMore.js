import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import getAPIData from '../../../helpers/httpService'

const Container = styled.div`
  padding: 16px;
`

function LearnMore() {
  const { id } = useParams()

  const learMoreDetails = useQuery(['learnMore', id], () =>
    getAPIData('get', `/launches/${id}`).then((response) => response.data)
  )

  return (
    <Container>
      {learMoreDetails.isFetching ? (
        'Loading...'
      ) : (
        <div>
          <h1>{learMoreDetails.data.name}</h1>
          <p>{learMoreDetails.data.details}</p>
        </div>
      )}
    </Container>
  )
}

export default LearnMore