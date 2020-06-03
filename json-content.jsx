import React, {Component} from "react";
import PropTypes from "prop-types";

export default class JsonContent extends Component{
    render() {
        return (
            <div className="col-md-4">
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
            </div>
        );
    }
}