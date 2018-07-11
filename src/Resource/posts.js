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
    ReferenceArrayField
} from 'react-admin';


export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceArrayField label="Tags" reference="users" source="userId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton/>
        </Datagrid>

    </List>
);

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Create>
);
