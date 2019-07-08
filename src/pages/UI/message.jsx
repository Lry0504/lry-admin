import React, { Component } from 'react'
import { Card, Button, message} from 'antd'
import './ui.scss'

export class Message extends Component {

  handleClick = (type) => {
    message[type]('天妒嘤才狗子赖！');
  }

  render() {
    return (
      <div>
        <Card title="全局提示" className="card-wrap">
          <Button type="primary" onClick={() => this.handleClick('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleClick('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleClick('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.handleClick('error')}>Error</Button>
          <Button type="primary" onClick={() => this.handleClick('loading')}>Loading</Button>
        </Card>
      </div>
    )
  }
}

export default Message
