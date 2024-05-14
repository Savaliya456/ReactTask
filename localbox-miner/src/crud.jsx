import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddData = async (newData) => {
    try {
      await axios.post('your-add-endpoint', newData);
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUpdateData = async (id, updatedData) => {
    try {
      await axios.put(`your-update-endpoint/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      await axios.delete(`your-delete-endpoint/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => handleDeleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddForm onSubmit={handleAddData} />
      {/* Update form and other components */}
    </div>
  );
};

const AddForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
};

export default App;