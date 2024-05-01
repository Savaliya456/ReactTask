import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div className='container-fluid p-3'>
      <h1 className='text-center p-5'>Employee Details</h1>
      <table className='table table-hover bg-transparent'>
        <thead className='bg-dark shadow-lg'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList