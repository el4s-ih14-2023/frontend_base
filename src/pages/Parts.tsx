import React from 'react';
import Part from '@/components/Part';

const Parts = () => {
  return (
    <>
      <p className="text-2xl font-bold text-center my-6">アクション</p>
      <Part content="LED" icon="LED" />
      <Part content="Cable" icon="Cable" />
      <Part content="Resistance" icon="Resistance" />
    </>
  );
};

export default Parts;
