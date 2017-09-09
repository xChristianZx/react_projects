import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
	constructor (props) {
		super(props);

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
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
	renderGallery = () => {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.map((obj, i) => {
			return (
				<a	
                    className="photo-list-item"				
					key={obj.title}
					onClick={(e) => this.openLightbox(i, e)}
				>
					<img src={obj.src} alt={obj.title} height="300px" width="350px"/>
				</a>
			);
		});

		return (
			<div className="photo-array-container">
				{gallery}
			</div>
		);
	}
	render () {
		return (
			<div className="photo-container">				
				{this.renderGallery()}
				<Lightbox
					images={this.props.images}
					currentImage={this.state.currentImage}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}					
				/>
			</div>
		);
	}
}
export default Gallery;