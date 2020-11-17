import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './User/UserList';
import UserEdit from './User/UserEdit';
import UserCreate from './User/UserCreate';
import PostList from './Post/PostList';
import PostEdit from './Post/PostEdit';
import PostCreate from './Post/PostCreate';
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';
import Dashboard from './components/Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  return(
    <Admin dashboard={Dashboard} dataProvider={dataProvider} >
     <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
  )
};

export default App;