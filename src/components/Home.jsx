import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import SettingContext from './SettingContext';

const Home = () => {
    const {name} = useContext(UserContext);
  return (
    <div>
        <h1>The name is {name}!</h1>
        <SettingContext/>
    </div>
  )
}

export default Home