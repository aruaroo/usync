import React, {Component} from "react";
import ReactDOM from "react-dom"
import PropTypes from "prop-types";
import * as joint from 'jointjs'

import "./workflow-diagram.css"
import ModalPopup from "../modal-popup/modal-popup"

export default class WorkflowDiagram extends Component {

    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.state = {
            showModal:false
        }
        this.handleClickShowModal = this.handleClickShowModal.bind(this)
        this.handleHideClose = this.handleHideClose.bind(this)
    }

    handleClickShowModal () {
        //const newState = true
        //this.setState({showModal:newState})
        this.setState({showModal:true})
    }
    handleHideClose () {
        this.setState({showModal:false})
    }

    // handleClickShowModal = () => {
    //     //const newState = true
    //     //this.setState({showModal:newState})
    //     this.setState({showModal:true})
    // }
    // handleHideClose = () => {
    //     this.setState({showModal:false})
    // }

    componentDidMount() {
        const realthis = this
        // try to get container size
        const componentHeight = this.refs.placeholder.clientHeight
        const componentwidth = this.refs.placeholder.clientWidth
        //alert(componentHeight, componentwidth)
        console.log(componentHeight, componentwidth)
        // try to get container size end

        console.log(this)
        var  paper=new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: componentwidth,
            height: componentHeight,
            model: this.graph,
            gridSize: 1
        });

        

        var rect=new joint.shapes.basic.Rect({
            position:{x: 0 , y: 0},
            size: {width: 100 ,height: 30},
            attrs: {rect: {fill: 'pink' }, text: {text: 'QLY' , fill: 'white'} }
        });


        var rectBasic=new joint.shapes.basic.Rect({
            position:{x: 0 , y: 20},
            size: {width: 30 ,height: 10}
        });

        const increment = componentHeight/6
        const wincrement = componentwidth/6

        // 1 white
        var workflowInputRect=rectBasic.clone();
        //workflowInputRect.translate(300);
        workflowInputRect.translate(componentwidth/2);

        workflowInputRect.attr({
            rect: { fill: 'white', rx: 5, ry: 5, 'stroke-width': 1, stroke: 'black' },
            text: { text: 'Workflow Input', fill: 'black','font-size': 12}
        });
        // 2 pink
        var forkTaskRect=rectBasic.clone();
        //forkTaskRect.translate(300, 100);
        forkTaskRect.translate(componentwidth/2, increment);

        forkTaskRect.attr({
            rect: { fill: '#f7cecc', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#95625f' },
            text: { text: 'Fork Task', fill: 'black','font-size': 12}
        });

        //3 green
        var syncTask1ARect=rectBasic.clone();
        //syncTask1ARect.translate(200, 200);
        syncTask1ARect.translate(componentwidth/2 - 1*wincrement, 2*increment);

        syncTask1ARect.attr({
            rect: { fill: '#d5e8d2', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#92a786' },
            text: { text: 'Sync Task 1A', fill: 'black','font-size': 12}
        });

        //4
        var aSyncTask1ARect=rectBasic.clone();
        //aSyncTask1ARect.translate(200, 300);
        aSyncTask1ARect.translate(componentwidth/2 - 1*wincrement, 3*increment);

        aSyncTask1ARect.attr({
            rect: { fill: '#f7cecc', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#95625f' },
            text: { text: 'Async Task 1A', fill: 'black','font-size': 12}
        });

        //5
        var syncTask2ARect=rectBasic.clone();
        //syncTask2ARect.translate(200, 400);
        syncTask2ARect.translate(componentwidth/2 - 1*wincrement, 4*increment);

        syncTask2ARect.attr({
            rect: { fill: 'white', rx: 5, ry: 5, 'stroke-width': 1, stroke: 'black' },
            text: { text: 'Sync Task 2A', fill: 'black','font-size': 12}
        });

        //6 green
        var aSyncTask1BRect=rectBasic.clone();
        //aSyncTask1BRect.translate(400, 200);
        aSyncTask1BRect.translate(componentwidth/2 + 1*wincrement, 2*increment);

        aSyncTask1BRect.attr({
            rect: { fill: '#d5e8d2', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#92a786' },
            text: { text: 'Async Task 1B', fill: 'black','font-size': 12}
        });

        //7 green
        var syncTask1BRect=rectBasic.clone();
        //syncTask1BRect.translate(400, 300);
        syncTask1BRect.translate(componentwidth/2 + 1*wincrement, 3*increment);

        syncTask1BRect.attr({
            rect: { fill: '#d5e8d2', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#92a786' },
            text: { text: 'Sync Task 1B', fill: 'black','font-size': 12}
        });

        //8 green
        var syncTask2BRect=rectBasic.clone();
        //syncTask2BRect.translate(400, 400);
        syncTask2BRect.translate(componentwidth/2 + 1*wincrement, 4*increment);

        syncTask2BRect.attr({
            rect: { fill: '#d5e8d2', rx: 5, ry: 5, 'stroke-width': 1, stroke: '#92a786' },
            text: { text: 'Sync Task 2B', fill: 'black','font-size': 12}
        });



        this.graph.addCells([workflowInputRect,forkTaskRect,syncTask1ARect,aSyncTask1ARect, syncTask2ARect,
            aSyncTask1BRect, syncTask1BRect, syncTask2BRect])

        var arrLink = new joint.shapes.standard.Link();

        //1
        var arrLink1 = arrLink.clone();
        arrLink1.source(workflowInputRect);
        arrLink1.target(forkTaskRect);

        //2
        var arrLink2 = arrLink.clone();
        arrLink2.source(forkTaskRect);
        arrLink2.target(syncTask1ARect);
        //3
        var arrLink3 = arrLink.clone();
        arrLink3.source(syncTask1ARect);
        arrLink3.target(aSyncTask1ARect);
        //4
        var arrLink4 = arrLink.clone();
        arrLink4.source(aSyncTask1ARect);
        arrLink4.target(syncTask2ARect);

        //5
        var arrLink5 = arrLink.clone();
        arrLink5.source(forkTaskRect);
        arrLink5.target(aSyncTask1BRect);
        //6
        var arrLink6 = arrLink.clone();
        arrLink6.source(aSyncTask1BRect);
        arrLink6.target(syncTask1BRect);
        //7
        var arrLink7 = arrLink.clone();
        arrLink7.source(syncTask1BRect);
        arrLink7.target(syncTask2BRect);

        this.graph.addCells([arrLink1,arrLink2,arrLink3,arrLink4,arrLink5,arrLink6,arrLink7])

        paper.on('element:pointerdown', 
    function(cellView, evt, x, y) { 
        //alert('cell view ' + cellView.model.id + ' was clicked'); 
        console.log(cellView.model.attributes.attrs.text.text)
        console.log(this)
        realthis.handleClickShowModal()
        //()=>{this.setState({showModal:true})}
        
    }




);
    }

    render() {
        //return <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" ref="placeholder" id="diagram"></div>;
        return (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" ref="placeholder" id="diagram">
                    <ModalPopup show={this.state.showModal} onHide={this.handleHideClose}/>
                </div>
                
        );
    }
}