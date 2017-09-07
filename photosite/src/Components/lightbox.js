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
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
    }

	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
    }
    
    render () {
        return (
            <div>
            <Photolist openLightbox={this.openLightbox()} photos={this.props.photos} />
            <Lightbox 
                currentImage={this.state.currentImage}
                images={this.props.images}
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