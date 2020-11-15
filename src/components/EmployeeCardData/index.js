import React, { Component } from "react";
import "./style.css";

class EmployeeCardData extends Component {
    render() {
        return (
        <div className="row offset-lg-1 offset-md-1" >
            {this.props.employees.map((employee, i) => (
                <li style={{margin:"5%"}} className="cardContainer col-lg-4 col-md-4 col-sm-10 list-group-item shadow p-3 mb-5 bg-light rounded" key={i}>
                    <div>
                        <div className="col-md-12 col-lg-12 col-sm-12" id="image">
                            <img 
                                src={employee.picture.large} 
                                alt={`${employee.name.first} ${employee.name.last}`} 
                                title={`${employee.name.first} ${employee.name.last}`} 
                                className="img-thumbnail col-10 offset-1">
                            </img>
                        </div>
                        <div className="col-md-2 col-sm-12" id="name">
                            <h3 className="nameFont">{employee.name.first} {employee.name.last}</h3>
                        </div>
                        <div className="col-md-5 col-sm-12" id="contact">
                            <h2 className = "emailFont email"><strong>email:</strong> <span>{employee.email}</span></h2>
                            <h2 className = "phoneFont phone"><strong>phone:</strong> <span>{employee.phone}</span></h2>
                        </div>
                        <div className="col-md-3 col-sm-12" id="location">
                            <h2 className = "locationFont">{employee.location.city}, {employee.location.state}</h2>
                        </div>
                    </div>
                </li>
            ))}
        </div>
        );
      }
}
  
export default EmployeeCardData;