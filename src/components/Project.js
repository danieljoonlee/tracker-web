import _ from 'lodash';
import { Component, PropTypes } from 'react';
import Task from './Task';
import TaskCharts from './TaskCharts';
import CreateTask from './CreateTask';

class Project extends Component {
  render() {
    const { addTask, startTask, completeTask, id, name, description, tasks } = this.props;
    const taskDOM = (task) => {
      return <Task
              key={task.id}
              startTask={startTask}
              completeTask={completeTask}
              projectId={id}
              description={description}
              {...task}
            />
    };

    let todoList = _.filter(tasks.list, t => t.state === 'to-do').map(taskDOM);
    let inProgressList = _.filter(tasks.list, t => t.state === 'in-progress').map(taskDOM);
    return (
      <div>
        <h1 style={{...headerStyle, marginTop: '1%', fontWeight: 500}}>{name}</h1>
        <h2 style={{...headerStyle, marginTop: 0, marginBottom: '2%', marginLeft: '1%', fontSize: '1.7em', fontWeight: 400}}>Task List for the Versus Project</h2>
        <TaskCharts tasks={tasks} />
        <CreateTask addTask={addTask} id={id}/>
        <br />
        <h4 className='in-progress' style={headerStyle}>In Progress Tasks</h4>
        <hr style={hrStyle} />
        {inProgressList}
        <br />
        <h4 className='to-do' style={headerStyle}>Todo Tasks</h4>
        <hr style={hrStyle} />
        {todoList}
      </div>
    );
  }
}

const headerStyle = {
  fontWeight: 300,
  fontSize: '3em',
  margin: '2% 0 .5% 1%',
  position: 'relative'
}

const hrStyle = {
  marginTop: 0
}

Project.propTypes = {
  addTask: PropTypes.func.isRequired,
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }))
  })
}

export default Project;
