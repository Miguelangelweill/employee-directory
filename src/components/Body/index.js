import React, {Component} from "react";
import FilterForm from "../FilterForm/index";
import SortForm from "../SortForm/index";
import EmployeeCardData from "../EmployeeCardData/index";
import API from "../../utils/API";
import "./style.css";

let employeeArray = [];

class Body extends Component {
    state = {
        placeholder: '',
        id: '',
        visibility: 'hidden',
        employees: []
    }

    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee = () => {
        API.getRandomEmployee()
          .then(res => {
            employeeArray = res.data.results
            this.setState({
                placeholder: '',
                id: '',
                visibility: 'hidden',
                employees: employeeArray
            })
        })
          .catch(err => console.log(err));
    };

    handleFilterChange = event => {
        let filterString = event.target.value;
        let visibilityString = '';
        if (filterString === 'none') {
            visibilityString = 'hidden';
        } else {
            visibilityString = 'visible';
        }
        this.setState({
            placeholder: `Enter ${event.target.value}`,
            id: filterString,
            visibility: visibilityString,
            employees: employeeArray
        });
        if (document.getElementById(this.state.id) !== null) {
            document.getElementById(this.state.id).value = ''
        } else {
            return
        }
    }

    handleSortChange = event => {
        if (event.target.value === "Alphabetically By Last Name (A → Z)") {
            this.setState({
                employees: employeeArray.sort(function(a, b){
                    if (a.name.last < b.name.last) { return -1; }
                    if (a.name.last > b.name.last) { return 1; }
                    return 0;
                })
            });
        } else if (event.target.value === "Alphabetically By Last Name (Z → A)") {
            this.setState({
                employees: employeeArray.sort(function(a, b){
                    if (a.name.last > b.name.last) { return -1; }
                    if (a.name.last < b.name.last) { return 1; }
                    return 0;
                })
            });
        } else if (event.target.value === "Alphabetically By First Name (A → Z)") {
            this.setState({
                employees: employeeArray.sort(function(a, b){
                    if (a.name.first < b.name.first) { return -1; }
                    if (a.name.first > b.name.first) { return 1; }
                    return 0;
                })
            });
        } else if (event.target.value === "Alphabetically By First Name (Z → A)") {
            this.setState({
                employees: employeeArray.sort(function(a, b){
                    if (a.name.first > b.name.first) { return -1; }
                    if (a.name.first < b.name.first) { return 1; }
                    return 0;
                })
            });
        } else {
            return
        } 
    }

    handleFilterSubmit = event => {
        this.setState({
            employees: employeeArray
        });
        const filterStringValue = document.getElementById(this.state.id).value.toLowerCase();
        const filterTypeValue = document.getElementById('sel1').value;
        let filteredByStateArray = employeeArray.filter(employee => {
            if (employee.location.state.toLowerCase() === filterStringValue.toLowerCase()) {
                return employee;
            }
        });
        let filteredByNameArray = employeeArray.filter(employee => {
            if (`${employee.name.first} ${employee.name.last}`.toLowerCase().includes(filterStringValue.toLowerCase())) {
                return employee;
            } 
        });
        if (filterTypeValue === "State") {
            this.setState({
                employees: filteredByStateArray
            });
        } else if (filterTypeValue === "Name") {
            this.setState({
                employees: filteredByNameArray
            });
        } 
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className = "container">
                    <div className = "row" id="form">
                        <div className = "col-md-6 col-sm-12">
                        <FilterForm 
                            onChange = {event => this.handleFilterChange(event)}
                            placeholder = {this.state.placeholder}
                            id = {this.state.id}
                            visibility = {this.state.visibility}
                            onClick = {event => this.handleFilterSubmit(event)}
                        ></FilterForm>
                        </div>
                        <div className = "col-md-6 col-sm-12">
                        <SortForm
                            onChange = {event => this.handleSortChange(event)}
                        ></SortForm>
                        </div>
                    </div>
                </div>
                <EmployeeCardData 
                    employees = {this.state.employees}
                ></EmployeeCardData>
            </div>
        )
    }
}
  
export default Body;