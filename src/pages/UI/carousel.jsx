import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './ui.scss'

export class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title="图片轮播" className="card-wrap">
          <Carousel autoplay>
          <img src="/carousel-img/carousel-1.jpg" alt="1"/>
          <img src="/carousel-img/carousel-2.jpg" alt="2"/>
          <img src="/carousel-img/carousel-3.jpg" alt="3"/>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default Carousels
