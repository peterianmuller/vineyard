//React components
import React from 'react';

//UI
import { Icon, Input, List, Modal } from 'semantic-ui-react';

//Actions
import { addRoom, closeModal, toggleModal } from '../actions/rooms';

export default class AddRoomModal extends React.Component {
  addRoomClick(e) {
    this.props.dispatch(toggleModal(false));
  }

  handleClose(e) {
    this.props.dispatch(closeModal(false));
  }

  handleSubmit(e) {
    if (e.charCode === 13) {
      if (e.target.value !== '') {
        this.props.dispatch(addRoom(e.target.value, this.props.auth.id))
          .then(() => { 
            this.props.dispatch(closeModal(false));
          });
      }
    }
  }

  render() {
    const rooms = this.props.rooms;
    return (
      <Modal open={rooms.addRoomModalOpen}
        trigger={<Icon link name='edit' size={this.props.modalSize} onClick={this.addRoomClick.bind(this)} />}
        onClose={this.handleClose.bind(this)}
      >
        <Modal.Header>Create new room</Modal.Header>
        <Modal.Content>
          <Input
            size='huge'
            onKeyPress={this.handleSubmit.bind(this)}
            icon='search'
            fluid
          />
        </Modal.Content>
      </Modal>
    );
  }
}
