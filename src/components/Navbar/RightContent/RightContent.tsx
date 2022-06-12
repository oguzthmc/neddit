import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import { signOut, User } from 'firebase/auth';
import { auth } from '../../../firebase/clientApp';
import Icons from './Icons';

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify='center' align='center'>
        {user ? <Icons /> : <AuthButtons />}
        {/* <Menu /> */}
      </Flex>
    </>
  );
};
export default RightContent;