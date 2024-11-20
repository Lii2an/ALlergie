import React from 'react';
import { Typography, Box } from '@mui/material';

interface ParagraphProps {
  title?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, children }) => {
  return (
    <Box
      sx={{
        maxWidth: 600, // Limite la largeur pour une meilleure lisibilité
        padding: 2,
        borderRadius: 2,
        backgroundColor: '#f5f5f5', // Couleur de fond légère
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Ombre légère pour du relief
      }}
    >
      {title && (
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          {title}
        </Typography>
      )}
      <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>
        {children}
      </Typography>
    </Box>
  );
};

export default Paragraph;
