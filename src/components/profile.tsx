import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

interface ProfileProps {
  fullName: string;
  email: string;
  bio: string;
  onEditProfile: () => void;
}

const Profile: React.FC<ProfileProps> = ({ fullName, email, bio, onEditProfile }) => {
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
        marginTop: 8,
        padding: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Avatar
        sx={{
          width: 100,
          height: 100,
          margin: 'auto',
          marginBottom: 2,
          backgroundColor: '#3f51b5',
        }}
      >
        {fullName.charAt(0).toUpperCase()}
      </Avatar>
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
        {fullName}
      </Typography>
      <Typography variant="body1" sx={{ color: '#666', marginBottom: 2 }}>
        {email}
      </Typography>
      <Typography variant="body2" sx={{ color: '#888', marginBottom: 3 }}>
        {bio}
      </Typography>
      <Button variant="contained" color="primary" onClick={onEditProfile}>
        Modifier le profil
      </Button>
    </Box>
  );
};

export default Profile;
