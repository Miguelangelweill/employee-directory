import React, {Component} from "react";
import "./style.css";

class SortForm extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="sel1">Sort By:</label>
                <select className="form-control shadow bg-light" id="sel2" placeholder="Sort By" onChange={this.props.onChange}>
                    <option value="none"> Select an Option </option> 
                    <option>Alphabetically By Last Name (A → Z)</option>
                    <option>Alphabetically By Last Name (Z → A)</option>
                    <option>Alphabetically By First Name (A → Z)</option>
                    <option>Alphabetically By First Name (Z → A)</option>
                </select>
            </div>
        );
    }
}

export default SortForm;