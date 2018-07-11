import React from 'react';
import {
    ChipField,
    SingleFieldList,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Responsive,
    SimpleList,
    ReferenceManyField,
    ReferenceArrayField,
    DateField,
    RichTextField
} from 'react-admin';

export const AuthorsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <EditButton/>
        </Datagrid>
    </List>
);
