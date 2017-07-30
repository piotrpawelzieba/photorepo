/*      React dependencies      */

import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/*      Components      */
import {
    Images, 
    FullImage,
    ViewSwitch,
 } from '../../components';

// ACTION CREATORS

import {getPhotos, assignCategory, deletePhoto} from '../../redux/actions/photoActions';

class Library extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            droppedImage: "",
            image: "",
            listmode: true,
            filteredImages: props.images
        };
        
        this.onGridClick = this.onGridClick.bind(this);
        this.onListClick = this.onListClick.bind(this);
        this.onImageClick = this.onImageClick.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentDidMount(){
        this.props.getPhotos();
    }
    componentWillReceiveProps(props){
        this.setState({
            filteredImages: props.images
        });
    }
    onOverlayClick(){
        this.setState({image: null});
    }
    
    onImageClick({target: {dataset: {id: imgid}}}){
        if(this.state.listmode) return;
        const img = this.props.images.find(({_id})=>imgid===_id);
        this.setState({image: img});
    }

    onGridClick(){
     this.setState({listmode: false});   
    }

    onListClick(){
     this.setState({listmode: true});   
    }

    onOpenClick() {
        this.refs.dropzone.open();
    }
    onDrop(id, payload){
        this.props.assignCategory({id, payload});
    }
    onDeleteClick = (id) => (ev) => {
        this.props.deletePhoto({id});
    }
    render(){
        return (
            <div>
                <ViewSwitch 
                    onGridClick={this.onGridClick} 
                    onListClick={this.onListClick}
                />
                <Images 
                    images = {this.props.images} 
                    onDrop = {this.onDrop}    
                    listview = {this.state.listmode}
                    onImageClick={this.onImageClick}
                    onDeleteClick={this.onDeleteClick}
                />
                <FullImage
                    image={this.state.image}
                    onOverlayClick={this.onOverlayClick}
                />    
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    images: state.images.items
        .filter(img => img.category === state.categories.current || !state.categories.current),
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        getPhotos,
        assignCategory,
        deletePhoto
    }, dispatch),
});

Library.propTypes = {
    images: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    assignCategory: PropTypes.func.isRequired,
    deletePhoto: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);

