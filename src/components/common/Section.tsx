import { Container } from '@mui/joy';
import React from 'react';

export default function Section({ children }: { children: React.ReactNode }) {
  return <Container component={'section'}>{children}</Container>;
}
