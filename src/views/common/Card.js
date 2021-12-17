import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card as MUICard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const Container = styled.div`
  border: 1px solid #000;

  .search-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

function Card({ details }) {
  return (
    <Container>
      <MUICard className="search-card">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {details.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            LinkComponent={Link}
            to={`/learnMore/${details.id}`}
          >
            Learn More
          </Button>
        </CardActions>
      </MUICard>
    </Container>
  )
}

Card.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
