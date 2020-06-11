import React, {Component} from "react";
import PropTypes from "prop-types";
import {Modal, Row, Col, Button, Container, props} from 'react-bootstrap';

export default class ModalPopup extends Component{
    state = {
        doshow: false,
        text: "Messages will be shown here!"
    }
    render() {
        return (
            <Modal {...this.props} centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.text}</Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
        );
    }
}