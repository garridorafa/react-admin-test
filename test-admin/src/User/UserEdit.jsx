import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="username" />
          <TextInput source="email" />
          <TextInput source="address.street" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
      </SimpleForm>
  </Edit>
);

export default UserEdit;