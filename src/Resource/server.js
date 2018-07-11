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
    RichTextField,
    ShowButton,
} from 'react-admin';

export const ServerList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceArrayField label="Aplikační servery" reference="applicationServer" source="applicationServerIds">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ReferenceArrayField label="Aplikace" reference="application" source="applicationsIds">
                        <Datagrid>
                            <TextField label="Název" source="name"/>
                            <ShowButton/>
                        </Datagrid>
                    </ReferenceArrayField>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <EditButton/>
        </Datagrid>
    </List>
);
