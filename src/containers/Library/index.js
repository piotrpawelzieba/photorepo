import React, {Component} from 'react';
import {connect} from 'react-redux';

class Library extends Component {
    constructor(props){
        super(props);
    }
    render(){
        debugger;
        return (
            <div>
                <h2>Library</h2>
                {this.props.images.map(({url})=><img src={`http://localhost:3090/${url}`} />)}
            </div>
        );
    }
}
const mapStateToProps = ({images: {items}}, ownProps) => {
     return { images: items };
}
export default connect(mapStateToProps)(Library)

