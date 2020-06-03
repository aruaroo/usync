import React, {Component} from "react";

import JsonContent from "../json-content/json-content";
import WorkflowDiagram from "../workflow-diagram/workflow-diagram";
//import CommentList from "../comment-list/comment-list";

export default class App extends Component {
    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Firestorm Workflow</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <JsonContent/>
                    <WorkflowDiagram/>
                </div>
            </div>
        );
    }
}