import React, { Component } from 'react'
import { Card, Progress, Button } from 'antd'
import './ui.scss'

const ButtonGroup = Button.Group;
export class ProgressBar extends Component {
  state = {
    percent: 0
  }

  handleDecline = () => {
    let percent = this.state.percent -10;
    if (percent <= 0) {
      percent = 0;
    }
    this.setState({
      percent
    })
  }
  handleIncrease = () => {
    let percent = this.state.percent + 10;
    if (percent >= 100) {
      percent = 100;
    }
    this.setState({
      percent
    })
  }

  render() {
    return (
      <div>
        <Card title="标准进度条" className="card-wrap">
          <div style={{width: '50%'}}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
        </Card>
        <Card title="圆形、仪表盘进度条" className="card-wrap">
          <Progress type="circle" percent={50} width={80} />
          <Progress type="circle" percent={70} width={80} status="exception" />
          <Progress type="circle" percent={100} width={80} />
          <Progress type="dashboard" percent={75} width={80} />
        </Card>
        <Card title="动态、自定义文字进度条" className="card-wrap">
          <Progress type="circle" percent={this.state.percent} />
          <ButtonGroup>
            <Button onClick={this.handleDecline} icon="minus" />
            <Button onClick={this.handleIncrease} icon="plus" />
          </ButtonGroup>
          <Progress type="circle" percent={this.state.percent} format={() => `${this.state.percent}Days`} />
        </Card>
      </div>
    )
  }
}

export default ProgressBar
