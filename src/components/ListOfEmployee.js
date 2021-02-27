import Table from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import React from "react";

export default function EmployeeList(props) {
  // Font Awesome icon for sorting
  // const icon = <FontAwesomeIcon icon={faSortAlphaDownAlt} />;
  // Saving employee props to a variable so it's easier to use
  const employees = props.employees;
  console.log(employees);

  const getLastName = (employee) => {
    return employee.name.last;
  };

  const isSorted = (getLastName, employeeArray) => {
    employeeArray.sort((a, b) => {
      const firstEmployee = getLastName(a);
      const nextEmployee = getLastName(b);
      if (firstEmployee < nextEmployee) {
        return -1;
      } else if (firstEmployee > nextEmployee) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  // Descending
  const isNotSorted = (getLastName, employeeArray) => {
    employeeArray.sort((a, b) => {
      const firstEmployee = getLastName(a);
      const nextEmployee = getLastName(b);
      if (nextEmployee < firstEmployee) {
        return -1;
      } else if (nextEmployee > firstEmployee) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  if (props.sort === true) {
    isSorted(getLastName, employees);
  } else {
    isNotSorted(getLastName, employees);
  }

  return (
    <Table className="table-striped table-responsive table align-middle ms-4">
      <thead>
        <tr className="table align-middle">
          <th>
            Name
            <button onClick={props.handleSort} className="btn">
              {/* {icon} */}
            </button>
          </th>
          <th>Image</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {/* If there are employees in the array map through them and create a table cell for each one */}
        {employees.length > 0 ? (
          employees.map((employee) => {
            return (
              <tr>
                <td>{`${employee.name.first} ${employee.name.last}`}</td>
                <td>
                  <img
                    className="center"
                    src={employee.picture.thumbnail}
                    alt={employee.name.first}
                  />
                </td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>

                <td>{employee.location.city}</td>
              </tr>
            );
          })
        ) : (
          <Col lg={12}>
            <tr>
              <td> </td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </Col>
        )}
      </tbody>
    </Table>
  );
}