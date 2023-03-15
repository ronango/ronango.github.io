import React from 'react'

export default function TodoList({ list, remove, edit, save }) {
  return (
    <>
        {list?.length > 0 ? (
        <ul className='todo-list'>
            {list.map((entry, index) => (
            <div key={index} className='todo'>
                {(typeof(entry) === 'string') ? (  
                    <>            
                        <li>{entry}</li> 
                        <button className='edit-button' onClick={() => edit(index)}>Edit</button>
                        <button className='delete-button' onClick={() => remove(entry)}>Delete</button>
                    </>
                ) : (
                    <>
                        <li>{entry}</li> 
                        <button className='save-button' onClick={() => save(index)}>Save</button>
                    </>
                )}
            </div>
            ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>No task found</p>
        </div>
      )}
    </>
  )
}
