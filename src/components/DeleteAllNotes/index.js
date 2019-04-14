import React from 'react'
import { connect } from "react-redux"
import mapDispatchToProps from './map-dispatch-to-props'
import styles from './index.module.css'
import { Button, Icon } from 'antd'
import 'antd/dist/antd.css'

class DeleteAllNotes extends React.Component {
  render() {
    return (
      <div
        className={styles.DeleteAllNotes}
        onClick={this.props.onDeleteAllNotes}>
        <Button ghost type="danger"><Icon type="delete" />Delete all</Button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(DeleteAllNotes)
