import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {API_ROOT_URL} from '../../constants';


const ListItem = ({key, id, url, category, connectDragSource, className, onDrop}) => connectDragSource(
            <div key={key}>
                <img data-id={id} src={`${API_ROOT_URL}/${url}`} className={className} />
            </div>
);


// class ListItem extends Component {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         const {key, url, connectDragSource, className} = this.props;
//         return connectDragSource(
//             <div key={key} style={{
//                 background: 'blue'
//             }}>
//                 <img src={`${API_ROOT_URL}/${url}`} className={className} />
//             </div>
//         );
//     }
// }

const spec = {
    beginDrag: (props, monitor, component) => {
        return {
            props
        };
    },
    endDrag: (props, monitor, component) => {
        const dropResult = monitor.getDropResult();
        console.log({dropResult, props});
        if(dropResult)
            props.onDrop(props.id, dropResult);  
        
    },
    canDrag: (props, monitor, component) => {
        return true;
    },
    isDragging: (props, monitor, component) => {

    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    getItem: monitor.getItem,
});

export default DragSource('ADD_TO_CATEGORY', spec, collect)(ListItem);
