import { useId, useState } from 'react';
import PropTypes from 'prop-types';

const UploadBox = ({ onFileUpload = () => {}, onFileSelect, accept = '*', className = '' }) => {
  const [dragOver, setDragOver] = useState(false);
  const inputId = useId();

  const handleFile = (file) => {
    if (!file) return;
    const handler = onFileSelect || onFileUpload;
    handler(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  return (
    <div
      className={`upload-box ${dragOver ? 'drag-over' : ''} ${className}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id={inputId}
      />
      <label htmlFor={inputId} className="upload-label">
        <div className="upload-content">
          <p>Drag and drop a file here, or click to select</p>
          <button type="button" className="upload-btn">Choose File</button>
        </div>
      </label>
    </div>
  );
};

UploadBox.propTypes = {
  onFileUpload: PropTypes.func,
  onFileSelect: PropTypes.func,
  accept: PropTypes.string,
  className: PropTypes.string,
};

export default UploadBox;

