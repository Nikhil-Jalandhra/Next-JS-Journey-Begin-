"use client"
import React from 'react';
import { useTheme } from '../components/themeProvider';

function page() {

    const theme = useTheme();

  return (
    <div style={{color: theme.colors.primary}}>
        DarkTheme
    </div>
  );
}

export default page;
