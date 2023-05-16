import React, { useState } from 'react';

const MediaConvertNow = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [convertedUrl, setConvertedUrl] = useState('');

  const convertToMP3 = () => {
    // Check if videoUrl is a valid YouTube video URL
    const isValidUrl = validateYouTubeUrl(videoUrl);
    if (!isValidUrl) {
      // Handle invalid URL
      return;
    }
  
    // Construct the API endpoint URL for MP3 conversion
    const apiEndpoint = `https://api.zamzar.com/v1/formats`;
    const mp3ConversionUrl = `${apiEndpoint}?format=mp3&videoUrl=${encodeURIComponent(videoUrl)}`;
  
    // Make an API request to convert the video to MP3
    fetch(mp3ConversionUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains the converted MP3 file URL
        const mp3FileUrl = data.fileUrl;
        setConvertedUrl(mp3FileUrl);
      })
      .catch(error => {
        // Handle any errors during the API request
        console.error('Error converting to MP3:', error);
      });
  };
  
  const convertToMP4 = () => {
    // Check if videoUrl is a valid YouTube video URL
    const isValidUrl = validateYouTubeUrl(videoUrl);
    if (!isValidUrl) {
      // Handle invalid URL
      return;
    }
  
    // Construct the API endpoint URL for MP4 conversion
    const apiEndpoint = `https://api.zamzar.com/v1/formats`;
    const mp4ConversionUrl = `${apiEndpoint}?format=mp4&videoUrl=${encodeURIComponent(videoUrl)}`;
  
    // Make an API request to convert the video to MP4
    fetch(mp4ConversionUrl)
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains the converted MP4 file URL
        const mp4FileUrl = data.fileUrl;
        setConvertedUrl(mp4FileUrl);
      })
      .catch(error => {
        // Handle any errors during the API request
        console.error('Error converting to MP4:', error);
      });
  };  

  return (
    <div>
      <h2>YouTube Converter</h2>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter YouTube video URL"
      />
      <button onClick={convertToMP3}>Convert to MP3</button>
      <button onClick={convertToMP4}>Convert to MP4</button>
      {convertedUrl && (
        <div>
          <h3>Converted File:</h3>
          <a href={convertedUrl} target="_blank" rel="noreferrer">
            Download Converted File
          </a>
        </div>
      )}
    </div>
  );
};

export default MediaConvertNow;
