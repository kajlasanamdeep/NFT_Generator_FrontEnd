import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Collections from '../../components/NFTGenerator/Collections';
import Header from '../../components/NFTGenerator/Header';
import Sidebar from '../../components/NFTGenerator/Sidebar';

function NFTGenerator() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Row>
          <Sidebar />
          <Collections />
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default NFTGenerator;