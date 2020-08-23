import React, { Component } from 'react';

class Todo extends Component {
    state = {}
    render() {
        return (
            <ul>
                <li>{this.props.todo}</li>
            </ul>
        );
    }
}

//state less function component
// const Todo = (props) => {
//     return (
//         <ul>
//             <li>{props.todo}</li>
//         </ul>
//     );
// }

// export default Todo;

export default Todo;