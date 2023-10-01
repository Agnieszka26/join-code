'use client';
import { BaseText } from '@/components/atoms';
import React, { FC } from 'react';
interface PageProps {}

const page: FC<PageProps> = () => {
  return (
<BaseText text="about" />
  );
};

export default page;
