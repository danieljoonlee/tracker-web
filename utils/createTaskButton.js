//Create Task Buttons

export function createButton(projectId, id, task, text, style) { 
  return (<button className="btn btn-primary in-progress-btn" style={style} onClick={e => {
    e.preventDefault()
    task(projectId, id)
  }}>{text}</button>
)}