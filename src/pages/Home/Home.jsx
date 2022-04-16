import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Orders } from '../../components/Orders/Orders'
import { Stock } from '../../components/Stock/Stock'

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Stock/>
        </Col>
        <Col>
          <Orders/>
        </Col>
      </Row>
    </Container>
  )
}
