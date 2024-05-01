import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import EmployeeList from './EmployeeList';

function App() {
  const employees = [
    { 
      id: 1, 
      name: 'John David',
      position: 'Software Engineer',
      salary: '$100,000' 
    },
    {
      id: 2,
      name: 'Kunjal Thakkar',
      position: 'Backend Developer',
      salary: '$150,000'
    },
    { 
      id: 3, 
      name: 'Kalix Jaish', 
      position: 'Product Manager', 
      salary: '$10,500' 
    },
    {
      id: 4,
      name: 'Krishna Padliya',
      position: 'Web Designer',
      salary: '$100,000'
    },
    {
      id: 5,
      name: 'Hargi Varsada',
      position: 'Frontend Devloper',
      salary: '$100,000'
    },
    {
      id: 6,
      name: 'Shiv Shah',
      position: 'Frontend Devloper',
      salary: '$60,000'
    },
    {
      id: 7,
      name: 'Shree Patel',
      position: 'Frontend Devloper',
      salary: '$80,000'
    },
    {
      id: 8,
      name: 'Natasha Valleria',
      position: 'Frontend Devloper',
      salary: '$200,000'
    },
    
  ];
  return (
    <div>
       <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
