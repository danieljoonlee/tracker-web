import uuid from 'uuid4'

const initialState = {
  projects: [
    {
      id: uuid(),
      name: 'Versus Todo List',
      tasks: {
        count: 100,
        todo: 40,
        inProgress: 15,
        complete: 45,
        list: [{        
          id: uuid(),
          name: 'Task #1',
          description: 'Description of Task #1',
          state: 'to-do'},
          {id: uuid(),
          name: 'Task #2',
          description: 'Description of Task #2',
          state: 'to-do'},
          {id: uuid(),
          name: 'Task #3',
          description: 'Description of Task #3',
          state: 'to-do'},
          {id: uuid(),
          name: 'Task #1',
          description: 'Description of Task #1',
          state: 'in-progress'},
          {id: uuid(),
          name: 'Task #2',
          description: 'Description of Task #2',
          state: 'in-progress'},
          { id: uuid(),
          name: 'Task #3',
          description: 'Description of Task #3',
          state: 'in-progress'
        }]
      }
    },
    {
      id: uuid(),
      name: 'Another Project',
      tasks: {
        count: 0,
        todo: 0,
        inProgress: 0,
        complete: 0,
        list: []
      }
    }
  ]
}

export default initialState
