import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from "react-admin";
import MyUrlField from '../components/MyUrlField';


const UserList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
          <EditButton />
          <DeleteButton />
      </Datagrid>
  </List>
);

export default UserList;