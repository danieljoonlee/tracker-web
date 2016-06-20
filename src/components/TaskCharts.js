import _ from 'lodash';
import { Component, PropTypes } from 'react';
import Task from './Task';
import { createTaskChart } from './../charts/createTaskChart';
import rd3 from 'react-d3-library';

/**
Notes:
Adjusted inline CSS to match design specs, which results in non centered visualizations.  Can adjust.
**/

/**
Import React Components from RD3 library to convert D3 into React Elements,
otherwise virtual dom will be effected negatively, and diffing algo won't work.
**/

const CompleteComponent = rd3.Component;
const InProgressComponent = rd3.Component;
const ToDoComponent = rd3.Component;

class TaskCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {completeData: '', inProgressData: '', toDoData: ''};
  }

  //Need to mount before page render 
  componentDidMount() {
    let completeData = createTaskChart(.45, '#3EC556');
    let inProgressData = createTaskChart(.15, '#3E74C5');
    let toDoData = createTaskChart(.40, '#C53E3E');

    this.setState({completeData, inProgressData, toDoData}); 
  }

  //Update on receiving new props from redux state
  componentWillReceiveProps(nextProps) {
    const tasks = nextProps.tasks;
    const count = tasks.count;
    const complete = count === 0 ? 0 : tasks.complete / count;
    const inProgress = count === 0 ? 0 : tasks.inProgress / count;
    const todo = count === 0 ? 0 : tasks.todo / count;

    let completeData = createTaskChart(complete, '#3EC556');
    let inProgressData = createTaskChart(inProgress, '#3E74C5');
    let toDoData = createTaskChart(todo, '#C53E3E');

    this.setState({completeData, inProgressData, toDoData});
  }

  render() {
    const { tasks } = this.props

    return (
      <div className='d3-taskcharts row' style={{margin: 0}}>
        <div className='taskchart col-md-4' style={{...taskchart, textAlign: 'left !important', paddingLeft: '2.5%'}}>
          <p style={pStyle}><span className='complete-count' style={{...spanStyle, color: '#3EC556', paddingLeft: '5%'}}>{tasks.complete}</span> Complete</p>
          <CompleteComponent data={this.state.completeData} />
        </div>
        <div className='taskchart col-md-4' style={taskchart}>
          <p style={pStyle}><span className='in-progress-count' style={{...spanStyle, color: '#3E74C5'}}>{tasks.inProgress}</span> In Progress</p>
          <InProgressComponent data={this.state.inProgressData} />
        </div>
        <div className='taskchart col-md-4' style={taskchart}>
          <p style={{...pStyle, paddingRight: '12%'}}><span className='todo-count' style={{...spanStyle, color: '#C53E3E'}}>{tasks.todo}</span> Todo</p>
          <ToDoComponent data={this.state.toDoData} />
        </div>
      </div>
    );
  }
}

const spanStyle = {
  fontSize: '3em',
  top: '10px',
  right: '10px',
  position: 'relative',
  fontWeight: 300
}

const pStyle = {
  color: '#808080',
  marginRight: '25px',
  fontSize: '1.3em',
  fontWeight: 300
}

const taskchart = {
  border: '1px solid #B8B8B8',
  float: 'left',
  textAlign: 'center',
  paddingBottom: '20px'
}


TaskCharts.propTypes = {
  tasks: PropTypes.shape({
    count: PropTypes.number.isRequired,
    todo: PropTypes.number.isRequired,
    inProgress: PropTypes.number.isRequired,
    complete: PropTypes.number.isRequired
  })
}

export default TaskCharts;