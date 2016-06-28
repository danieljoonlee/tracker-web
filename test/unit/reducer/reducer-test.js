import {assert, expect} from 'chai';
import {addProject, addTask, startTask, completeTask} from 'actions/index';
import reducer from 'reducers/projects';
import initialState from 'initialState';

describe('reducer', function() {
  
  it('handles ADD_PROJECT with initialState', () => {
    const state = reducer(initialState, 'ADD_PROJECT')
    
    expect(state).to.deep.eq(initialState);
  });

  it('handles ADD_PROJECT without initialState', () => {
    const state = reducer(undefined, 'ADD_PROJECT');

    expect(state.length).to.eq([].length);
  });

  it('handles ADD_PROJECT with no initialState', () => {
    const newProject = addProject('Versus Todo List');
    const project = {
      type: 'ADD_PROJECT',
      name: 'Versus Todo List'
    };

    expect(newProject).to.deep.eq(project);
  });

  it('handles ADD_TASK by using addTask', () => {
    const newTask = addTask('555555', 'Do Laundry', 'Do colors then whites');
    const task = {
      type: 'ADD_TASK',
      id: '555555',
      task: { name: 'Do Laundry', description: 'Do colors then whites' }
    }

    expect(newTask).to.deep.eq(task);
  });

  it('handles START_TASK by using startTask', () => {
    const newStartTask = startTask('555555', 'test');

    expect(newStartTask.type).to.eq('START_TASK');
  });

  it('handles COMPLETE_TASK by using completeTask', () => {
    const newCompleteTask = completeTask('555555', 'test');

    expect(newCompleteTask.type).to.eq('COMPLETE_TASK');
  })

});

