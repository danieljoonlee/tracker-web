import Project from 'components/Project';
import {assert, expect} from 'chai';
import {shallow} from 'enzyme';
import reducer from 'reducers/projects';
import initialState from 'initialState';
import {addProject, addTask, startTask, completeTask} from 'actions/index';

describe('Project', () => {

  const project = initialState.projects[0];
  const component = shallow(<Project
                      key={project.id}
                      addTask={addTask}
                      startTask={startTask}
                      completeTask={completeTask}
                      id={project.id}
                      name={project.name}
                      description={project.description}
                      tasks={project.tasks}
                    />)

  it('renders a Versus Todo List project', () => {
   expect(component.find('h1').text()).to.eql('Versus Todo List');
  });

});
