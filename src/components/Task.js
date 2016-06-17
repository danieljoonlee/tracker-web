import { Component, PropTypes } from 'react';
import { createButton } from './../../utils/createTaskButton';

class Task extends Component {
  render() {
    const { startTask, completeTask, projectId, id, name, description, state } = this.props;
    let actionButton = '';
    if (state === 'to-do') {
      actionButton = createButton(projectId, id, startTask, 'Start Task', buttonStyle);
    } else if (state === 'in-progress') {
      actionButton = createButton(projectId, id, completeTask, 'Complete Task', buttonStyle);
    }

    return (
      <div style={divStyle}>
        <p className={state} style={pStyle}>{state === "in-progress" ? `In Progress ${name}` : `Todo ${name}`} {actionButton}</p>
        <span style={spanStyle}>{description}</span>
      </div>
    );
  }
}

const pStyle = {
  fontSize: '2em',
  marginBottom: 0,
  lineHeight: '95%'
}

const divStyle = {
  width: '35%',
  marginLeft: '1.2%',
  padding: '18px 0'
}

const buttonStyle = {
  float: 'right',
  marginTop: '2%',
  width: '125px'
}

const spanStyle = {
  fontSize: '1.2em',
  fontWeight: 300
}

Task.propTypes = {
  startTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

export default Task;
