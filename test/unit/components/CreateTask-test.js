import CreateTask from 'components/CreateTask';
import {assert, expect} from 'chai';
import {shallow} from 'enzyme';
import initialState from 'initialState';
import {addProject, addTask, startTask, completeTask} from 'actions/index';

describe('CreateTask', () => {

  const project = initialState.projects[0];
  const component = shallow(<CreateTask
                        addTask={addTask}
                        id={project.id}
                    />);

  it('render header "Create New Tasks"', () => {
    expect(component.find('h3').text()).to.contain('Create New Task');
  });

  it('render form, spans, and input', () => {
    expect(component.find('form')).to.be.ok;
    expect(component.find('span').length).to.eql(2);
    expect(component.find('input').length).to.eql(2);
  });

});
