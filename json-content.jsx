import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button} from 'react-bootstrap'

import ModalPopup from "../modal-popup/modal-popup"
import MyModal from "../modal-popup/newmodal"

export default class JsonContent extends Component{

    // constructor(props){
    //     super(props);
    //     this.hideAddObjectModal = this.hideAddObjectModal.bind(this);
    //     this.showAddObjectModal = this.showAddObjectModal.bind(this);
    //     this.addObject = this.addObject.bind(this);
    //     this.state = {addObjectModalShow: false};

    // }

	// //隐藏模态框
    // hideAddObjectModal(){
    //     this.setState({addObjectModalShow: false});
    // }
    // //显示模态框
    // showAddObjectModal(){
    //     this.setState({addObjectModalShow: true});
    // }
    // 当按下模态框的确认按钮时的回调函数
    // addObject(){
    //     console.log("add object");
    // }

    //====================================
    state = {
        showModal:false
    }

    handleClickShowModal = () => {
        //const newState = true
        //this.setState({showModal:newState})
        this.setState({showModal:true})
    }
    handleHideClose = () => {
        this.setState({showModal:false})
    }
    //<ModalPopup show={this.showModal}/>

    // <MyModal show={this.state.addObjectModalShow} onHide={this.hideAddObjectModal} onConfirm={this.addObject}/>
    handletest=()=>{
        alert("botton test done")
    }

    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <form className="form-horizontal">
                    <div className="form-group">
                        <textarea className="form-control" rows="6" placeholder="put your workflow json here"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right">Show Diagram</button>
                        </div>
                    </div>
                </form>
                <div>
                    <Button id="btntest" onClick={this.handletest}>AAA</Button>
                    <Button id="btn01" onClick = {this.handleClickShowModal}>BBB</Button>
                    <Button id="btn02" onClick = {this.handleClickShowModal}>CCC</Button>
                    <Button id="addObjectButton" variant = "secondary" onClick = {this.showAddObjectModal}>
                    增加物体
                    </Button>
                    <ModalPopup show={this.state.showModal} onHide={this.handleHideClose}/>
                </div>
                
            </div>
        );
    }
}