import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import randomUsers from "../utils/api";
import Container from "react-bootstrap/Container";
import EmployeeList from "./ListOfEmployee";
import SearchBar from "./Search";
import Header from "././Header";

class UsereMain extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      employees: [],
      sort: true,
    };
  }
  handleStateChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSort = () => {
    this.state.sort === true
      ? this.setState({ sort: false })
      : this.setState({ sort: true });
  };
 
  componentDidMount() {
    this.getUsersApi();
  }
  // Random User API call
  getUsersApi = () => {
    randomUsers()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };
 
  render() {
    let filterByName = this.state.employees.filter((employee) => {
      let name = `${employee.name.first} ${employee.name.last}`;
      return name.toLowerCase().includes(this.state.search.toLowerCase())
        ? true
        : false;
    });

    let employeeSort;
    // If the search bar is empty just display the employees as they are
    if (this.state.search === "") {
      employeeSort = this.state.employees;
    } else {
      // otherwise filter through the employees by name
      employeeSort = filterByName;
    }
    console.log(employeeSort);
    return (
      <>
        <Header />
        <Container className="container-fluid">
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}>
              <SearchBar
                search={this.state.search}
                handleStateChange={this.handleStateChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <EmployeeList
                employees={employeeSort}
                sort={this.state.sort}
                handleSort={this.handleSort}
              />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UsereMain;