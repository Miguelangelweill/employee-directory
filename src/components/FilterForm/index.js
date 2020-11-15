import React, {Component} from "react";
import "./style.css";

class FilterForm extends Component {
    render() {
        return (
        <div className="form-group">
            <label htmlFor="sel1">Filter By:</label>
            <select className="form-control shadow bg-light" id="sel1" placeholder="Sort By" onChange={this.props.onChange}>
                <option value="none"> Select an Option </option> 
                <option value="State">State</option>
                <option value="Name">Name</option>
            </select>
            <div className="input-group mb-3">
                <input 
                    className="form-control shadow bg-light" 
                    type="text" 
                    placeholder={this.props.placeholder} 
                    id={this.props.id} 
                    style={{visibility: this.props.visibility}}
                ></input>
                <div className="input-group-append">
                <button 
                    type="submit" 
                    className="btn shadow btn-primary" 
                    style={{visibility: this.props.visibility}} 
                    onClick={this.props.onClick}
                >Submit</button>
                </div>
            </div>
        </div>
        )
    };
}

export default FilterForm;