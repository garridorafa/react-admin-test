import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, DeleteButton, EditButton } from "react-admin";
import PostFilter from "./PostFilter";

const PostList = ({ permissions, ...props }) => {
  return (
    <List filters={<PostFilter />}  {...props}>
      <Datagrid>
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        {permissions === 'admin' ?
          <EditButton />
          : ''}
        {permissions === 'admin' ?
          <DeleteButton />
          : ''}
      </Datagrid>
    </List>
  )
};

export default PostList;