import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';
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
import authProvider from "./authProvider";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', 'Bearer ' + token);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:3001', httpClient);

const App = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} >
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
  )
};

export default App;