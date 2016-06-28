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

  it('renders a In Progress Tasks', () => {
   expect(component.find('.in-progress').text()).to.eql('In Progress Tasks');
  });

  it('renders a Todo Tasks', () => {
   expect(component.find('.to-do').text()).to.eql('Todo Tasks');
  });

});
