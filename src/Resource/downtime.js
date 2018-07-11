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

export const DowntimeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <ReferenceArrayField label="Aplikace" reference="application" source="applicationIds">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <DateField label="Od" source="validFrom" showTime/>
            <EditButton/>
        </Datagrid>
    </List>
);
