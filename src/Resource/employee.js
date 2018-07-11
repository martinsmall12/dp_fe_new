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
    RichTextField,
} from 'react-admin';

export const EmployeeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField label="Osobní číslo" source="personalNumber"/>
            <TextField source="email"/>
            <RichTextField label="Komentář" source="note"/>
            <EditButton/>
        </Datagrid>
    </List>
);
