import React, {Component, PropTypes} from 'react';
import Category from './Category.jsx';
import Dropzone from 'react-dropzone';
import "./index.css";

class Drop extends Component {
    constructor(props){
        super(props);
        this.onDrop= this.onDrop.bind(this);
        
        this.state = {
            isOverCategory: ""
        };
    }
    onDrop(files, arr, {target: {dataset: {category}}}){
        this.props.hideDropzone();
        this.props.uploadPhoto(files, category);
    }
    render(){
        return(
                <div 
                    className={this.props.showDropzone ? "dropzone--active" : "dropzone--inactive"}
                    onDragLeave={this.props.onDragLeave}
                >
                    <Dropzone 
                        ref="dropzone" 
                        onDrop={this.onDrop}
                        disableClick={true}
                        className={'dropzoneContainer'}
                    > 
                        <ul 
                            className="dropzone__categories"                          
                        >
                            { this.props.categories.map((category, key) => <Category
                                        category={category} 
                                        key={key}
                                        className={"dropzone__category"}
                                    />
                            )}    
                        </ul>
                    </Dropzone>    
                </div>
        );
    }
}

Drop.propTypes = {
    hideDropzone: PropTypes.func.isRequired,
    uploadPhoto: PropTypes.func.isRequired,
    showDropzone: PropTypes.bool.isRequired,
    onDragLeave: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};

export default Drop;