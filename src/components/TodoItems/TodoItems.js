import React from 'react';

const TodoItems = (props) =>{
    
    const { items, deleteItem } = props;
    
    
    
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {items.length ? 
                items.map(item => {
                    return(
                        <div key={item.id}>
                            <span className="name">{item.name}</span>
                            <span className="age">{item.age}</span>
                            <span className="action icon" onClick={ ()=> deleteItem(item.id) }>&times;</span>
                        </div>
                    )
                }) :
                <p>There is no Item to show..</p>
            }
        </div>
    );
}

export default TodoItems;