import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
	renderDragMessage = (isDragActive, isDragReject) => {
		if (!isDragActive) {
			return <UploadMessage>Drag files here...</UploadMessage>;
		}

		if (isDragReject) {
			return <UploadMessage type='error'>Your file is not supported</UploadMessage>;
		}

		return <UploadMessage type='success'>Dropdown your file here...</UploadMessage>;
	};

	render() {
		const { onUpload } = this.props;

		return (
			<Dropzone accept='image/*' onDropAccepted={onUpload}>
				{({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
					<DropContainer
						{...getRootProps()}
						isDragActive={isDragActive}
						isDragReject={isDragReject}
					>
						<input {...getInputProps()} />
						{this.renderDragMessage(isDragActive, isDragReject)}
					</DropContainer>
				)}
			</Dropzone>
		);
	}
}
