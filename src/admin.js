import React from 'react'
import { Row, Col } from 'antd';

import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import './assets/style/common.scss'

class Admin extends React.Component {
  render() {
    return (
      <div className="admin">
        <Row className="container">
          <Col span={4} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={20} className="main">
            <Header />
            <Row className="content">
              content
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin