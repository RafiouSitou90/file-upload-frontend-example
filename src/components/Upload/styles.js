import styled, { css } from 'styled-components';

const dragActive = css`
	border-color: #3ae374;
`;

const dragReject = css`
	border-color: #ff4d4d;
`;

export const DropContainer = styled.div.attrs({
	className: 'dropzone'
})`
	border: 1px dashed #ddd;
	border-radius: 4px;
	cursor: pointer;

	transition: height 0.2s ease;

	${props => props.isDragActive && dragActive}
	${props => props.isDragReject && dragReject}
`;

const messageColors = {
	default: '#999',
	error: '#ff4d4d',
	success: '#3ae374'
};

export const UploadMessage = styled.p`
	display: flex;
	color: ${props => messageColors[props.type || 'default']};
	justify-content: center;
	align-items: center;
	padding: 15px 0;
`;
