import React, {Component} from 'react';
import Lightbox from 'react-images';
import Photolist from './photo_list.js';

class LightboxDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            lightboxisOpen: false,
            currentImage: 0
        }
    }

	openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
    }
    renderPhotoList = () => {        
        return(<Photolist photos={this.props.images} />)
    }
    
    render () {
        return (
            <div>
                <Photolist images={this.props.images} openLightbox={this.openLightbox} />
                {/* {this.renderPhotoList} */}
                <Lightbox 
                    images={this.props.images}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClose={this.closeLightbox}
                    onClickImage={this.handleClickImage}
                />
            </div>
        )
    }
}

export default LightboxDisplay;