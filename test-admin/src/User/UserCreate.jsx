import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
          <TextInput source="username" />
          <TextInput source="email" />
          <TextInput source="address.street" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
      </SimpleForm>
  </Create>
);

export default UserCreate;