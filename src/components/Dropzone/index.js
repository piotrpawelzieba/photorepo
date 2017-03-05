import React, {Component} from 'react'
import Category from './Category';
import Dropzone from 'react-dropzone';
import "./index.css";

class Drop extends Component {
    constructor(props){
        super(props);
        this.onDrop= this.onDrop.bind(this);
        
        this.state = {
            isOverCategory: ""
        }
    }
    onDrop(files, arr, {target}){
        console.log({files, target});
        this.props.hideDropzone();
        const formData = new FormData();
        formData.append('photos', files);
        

    }
    render(){
        return(
                <div 
                    className={this.props.showDropzone ? "dropzone--active" : "dropzone--inactive"}
                    onDragLeave={this.props.onDragLeave}
                >
                    <Dropzone 
                        ref='dropzone' 
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
        )
    }
}

export default Drop;