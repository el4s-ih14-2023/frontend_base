import React from 'react';
import Action from '@/components/Action';

type ActionsProps = {
  setActions: React.Dispatch<React.SetStateAction<string[]>>;
};

const Actions = ({ setActions }: ActionsProps) => {
  return (
    <>
      <p className="text-2xl font-bold text-center my-6">アクション</p>
      <Action setActions={setActions} content="GPIO" />
    </>
  );
};

export default Actions;
