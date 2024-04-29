import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="main">
        
        <div id="enter-data">
            <h1>Task Manager</h1>  

            <label for="">Task Name : </label>  
            <input type="text" id="task-name"/>    <br></br><br></br>

            <label for="">Detail :</label>  
            <textarea name="" id="task-detail"></textarea>    <br></br><br></br>

            <label for="">Priority :</label>  
            <select name="" id="task-priority">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>    <br></br><br></br>
            <button type="button" onclick="enterdata()">Add Task</button>
        </div>     <br></br><br></br>


        <div id="show-data">
            <label for="">Filter By Priority: </label>
            <select name="" id="filterpriority" onchange="filtertask()">
                <option value="all">All</option>
                <option value="htol">High to Low</option>
                <option value="ltoh">Low to High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <ul id="showtask"></ul>
        </div>

    </div>
  );
}

export default App;
