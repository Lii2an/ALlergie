import React from 'react';
import { Box, Typography } from '@mui/material';

interface VideoPlayerProps {
  src: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, width = '100%', height = 'auto' }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
      {title && (
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
      )}
      <video
        src={src}
        controls
        width={width}
        height={height}
        style={{ borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </Box>
  );
};

export default VideoPlayer;
