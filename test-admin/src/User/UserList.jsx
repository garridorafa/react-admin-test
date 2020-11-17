import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from "react-admin";
import MyUrlField from '../components/MyUrlField';
import UserFilter from './UserFilter'


const UserList = ({ permissions, ...props }) => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
      {permissions === 'admin' ?
        <EditButton />
        : ''}
      {permissions === 'admin' ?
        <DeleteButton />
        : ''}
    </Datagrid>
  </List>
);

export default UserList;