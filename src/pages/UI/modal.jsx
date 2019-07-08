import React, { Component } from 'react'
import { Card, Modal, Button, message } from 'antd'
import './ui.scss'

class Modals extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
  }

  handleClick = (type) => {
    this.setState({
      [type]: true
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: '最帅的是？',
      content: '天妒嘤才狗子赖',
      onOk() {
        message.success('英雄所见略同！');
      },
      onCancel() {
        message.error('注孤身！');
      }
    })
  }

  render() {
    return (
      <div className="modals">
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleClick('visible1')}>open</Button>
          <Button type="primary" onClick={() => this.handleClick('visible2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleClick('visible3')}>水平垂直居中</Button>
          <Button type="primary" onClick={() => this.handleClick('visible4')}>顶部20px弹窗</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal title="open" visible={this.state.visible1}
          onCancel={() => this.setState({visible1: false})} onOk={() => this.setState({visible: false})}
        >
          <p>欢迎来到lry-admin后台管理系统</p>
        </Modal>
        <Modal title="自定义页脚" visible={this.state.visible2} okText="好的" cancelText="算了"
          onCancel={() => this.setState({visible2: false})} onOk={() => this.setState({visible2: false})}
        >
          <p>欢迎来到lry-admin后台管理系统</p>
        </Modal>
        <Modal title="水平垂直居中" visible={this.state.visible3} centered
          onCancel={() => this.setState({visible3: false})} onOk={() => this.setState({visible3: false})}
        >
          <p>欢迎来到lry-admin后台管理系统</p>
        </Modal>
        <Modal title="顶部20px弹窗" visible={this.state.visible4} style={{top: 20}}
          onCancel={() => this.setState({visible4: false})} onOk={() => this.setState({visible4: false})}
        >
          <p>欢迎来到lry-admin后台管理系统</p>
        </Modal>
      </div>
    )
  }
}

export default Modals
