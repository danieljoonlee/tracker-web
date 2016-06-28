import Task from 'components/Task';
import {assert, expect} from 'chai';
import {shallow} from 'enzyme';
import reducer from 'reducers/projects';
import initialState from 'initialState';
import {addProject, addTask, startTask, completeTask} from 'actions/index';

describe('Task', () => {

  const taskToDo = initialState.projects[0].tasks.list[0];
  const taskInProgress = initialState.projects[0].tasks.list[4];
  const componentToDo = shallow(<Task
                      key={taskToDo.id}
                      startTask={startTask}
                      completeTask={completeTask}
                      projectId={taskToDo.id}
                      id={taskToDo.id}
                      name={taskToDo.name}
                      description={taskToDo.description}
                      tasks={taskToDo.tasks}
                      state={taskToDo.state}
                    />);
  const componentInProgress = shallow(<Task
                      key={taskInProgress.id}
                      startTask={startTask}
                      completeTask={completeTask}
                      projectId={taskInProgress.id}
                      id={taskInProgress.id}
                      name={taskInProgress.name}
                      description={taskInProgress.description}
                      tasks={taskInProgress.tasks}
                      state={taskInProgress.state}
                    />);

  it('renders button for Task in state "to-do" and "in-progress', () => {
   expect(componentToDo.find('button').length).to.eql(1);
   expect(componentInProgress.find('button').length).to.eql(1);
  });

  it('renders In Progress if state is in "to-do"', () => {
    expect(componentToDo.find('p').text()).to.contain('Todo');
  });

  it('renders In Progress if state is in "in-progress"', () => {
    expect(componentInProgress.find('p').text()).to.contain('In Progress');
  });

});
