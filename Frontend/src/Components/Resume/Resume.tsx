import React from 'react';

const Resume = () => {
  const downloadFile = () => {
    // Replace 'file_path.pdf' with the actual path to your PDF file
    const fileUrl = '/file_path.pdf';

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloaded_file.pdf');
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) link.parentNode.removeChild(link);
      })
      .catch((error) => console.error('Error downloading file: ', error));
  };
  return (
    <div className='h-screen w-full'>
      <iframe src={require('./Resume.pdf')} seamless={true} name='Resume' className='w-full h-full'>
        <p className='absolute top-0'>
          PDFs are not supported by your browser. Please use a different browser or click this{' '}
          <a className='text-sky-500' onClick={() => downloadFile()}>
            link
          </a>{' '}
          to download
        </p>
      </iframe>
    </div>
  );
};

export default Resume;
