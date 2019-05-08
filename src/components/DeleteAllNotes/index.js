import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import styles from './index.module.css'
import { Button, Icon, Modal } from 'antd'
import 'antd/dist/antd.css'

const { confirm } = Modal
class DeleteAllNotes extends React.Component {
  deleteAll = () => {
    const deleteAllFunc = this.props.onDeleteAllNotes
    confirm({
      title: 'Are you sure to delete all the notes?',
      onOk() {
        deleteAllFunc()
      },
      onCancel() {},
    })
  }

  render() {
    return (
      <div
        className={styles.DeleteAllNotes}
        onClick={this.deleteAll}>
        <Button ghost type="danger"><Icon type="delete" />Delete all</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(DeleteAllNotes)
