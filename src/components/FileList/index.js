import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files, onDelete }) => (
	<Container>
		{files.map(uploadedFile => (
			<li key={uploadedFile.id}>
				<FileInfo>
					<Preview src={uploadedFile.preview} />
					<div>
						<strong>{uploadedFile.name}</strong>
						<span>
							{uploadedFile.readableSize}{' '}
							{!!uploadedFile.url && (
								<button onClick={() => onDelete(uploadedFile.id)}>Delete</button>
							)}
						</span>
					</div>
				</FileInfo>
				<div>
					{!uploadedFile.uploaded && !uploadedFile.error && (
						<CircularProgressbar
							styles={{
								root: { width: 24 },
								path: { stroke: '#341f97' }
							}}
							strokeWidth={10}
							value={uploadedFile.progress}
							//							text={`${uploadedFile.progress}%`}
						/>
					)}

					{uploadedFile.url && (
						<a href={uploadedFile.url} target='_blank' rel='noopener noreferrer'>
							<MdLink style={{ marginRight: 8 }} size={24} color='#222' />
						</a>
					)}

					{uploadedFile.uploaded && <MdCheckCircle size={24} color='#3ae374' />}

					{uploadedFile.error && <MdError size={24} color='#ff4d4d' />}
				</div>
			</li>
		))}
	</Container>
);

export default FileList;
