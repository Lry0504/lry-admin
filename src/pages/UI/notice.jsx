import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.scss'

export class Notice extends Component {

  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: 'Lry0504',
      description: '天妒嘤才狗子赖'
    })
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
          <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
        </Card>

        <Card title="通知提醒框位置" className="card-wrap">
          <Button type="primary" onClick={() => this.openNotification('success','bottomLeft')}>Success</Button>
          <Button type="primary" onClick={() => this.openNotification('info','ToRight')}>Info</Button>
          <Button type="primary" onClick={() => this.openNotification('error','topRight')}>Error</Button>
          <Button type="primary" onClick={() => this.openNotification('warning','topLeft')}>Warning</Button>
        </Card>
      </div>
    )
  }
}

export default Notice
