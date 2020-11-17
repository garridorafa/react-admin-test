import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, DeleteButton, EditButton } from "react-admin";
import PostFilter from './PostFilter';

const PostList = props => (
  <List filter={PostFilter}  {...props}>
      <Datagrid rowClick="edit">
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
          <DeleteButton />
      </Datagrid>
  </List>
);

export default PostList;