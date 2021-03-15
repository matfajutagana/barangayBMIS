import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center fixed-bottom py-5">
        <Col
          xs={12}
          md={3}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxShadow: '0px 0px 2px #3b4652',
            font: 'roboto',
          }}
        >
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
