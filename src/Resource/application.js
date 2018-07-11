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
    ReferenceArrayInput,
    SelectArrayInput,
    DateInput,
    Show,
    SimpleShowLayout,
    DeleteButton,
    Filter
} from 'react-admin';

export const ApplicationList = (props) => (
    <List {...props} filters={<ApplicationFilter />}>
        <Datagrid>
            <TextField source="id"/>
            <TextField label="Název" source="name"/>
            <ReferenceArrayField label="Autoři" reference="author" source="authorIds">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <ReferenceArrayField label="Výpadky" reference="downtime" source="downtimeIds">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <ReferenceField label="Typ aplikace" source="typeOfApplication.id" reference="typeOfApplication">
                <TextField source="category"/>
            </ReferenceField>
            <ReferenceArrayField label="Databáze" reference="databaze" source="databaseIds">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <DateField label="Platnost Od" source="validityFrom"/>
            <DateField label="Platnost Do" source="validityTo"/>
            <RichTextField label="Popis" source="description"/>
            <EditButton/>
            <ShowButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);

const ApplicationFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Hledat" source="q" alwaysOn />
        <ReferenceInput label="Typ aplikace" source="typeOfApplication_id" reference="typeOfApplication" allowEmpty>
            <SelectInput optionText="category" />
        </ReferenceInput>
        <ReferenceArrayInput label="Databáze" source="database_id" reference="databaze">
            <SelectArrayInput label="Název" optionText="name"/>
        </ReferenceArrayInput>
    </Filter>
);

const ApplicationTitle = ({record}) => {
    return <span>Application {record ? `"${record.personalNumber}"` : ''}</span>;
};

export const ApplicationEdit = (props) => (
    <Edit title={<ApplicationTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" />
            <TextInput source="environment" />
            <TextInput source="version" />
            <TextInput source="description" />
            <TextInput source="pathToSource" />
            <ReferenceInput label="Autor" source="author.id" reference="authors" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput label="Typ aplikace" source="typeOfApplication_id" reference="typeOfApplication" allowEmpty>
                <SelectInput optionText="category"/>
            </ReferenceInput>
            <ReferenceArrayInput label="Databáze" source="database_id" reference="databaze" allowEmpty>
                <SelectArrayInput label="Název" optionText="name"/>
            </ReferenceArrayInput>
            <DateInput source="validityFrom"/>
            <DateInput source="validityTo"/>
        </SimpleForm>
    </Edit>
);

export const ApplicationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="environment" />
            <TextInput source="version" />
            <TextInput source="description" />
            <TextInput source="pathToSource" />
            <ReferenceArrayInput label="Autor" source="author.id" reference="author" allowEmpty>
                <SelectArrayInput optionText="name"/>
            </ReferenceArrayInput>
            <ReferenceInput label="Typ aplikace" source="typeOfApplication.id" reference="typeOfApplication" allowEmpty>
                <SelectInput optionText="category"/>
            </ReferenceInput>
            <ReferenceArrayInput label="Databáze" source="database_id" reference="databaze" allowEmpty>
                <SelectArrayInput label="Název" optionText="name"/>
            </ReferenceArrayInput>
            <DateInput source="validityFrom"/>
            <DateInput source="validityTo"/>
        </SimpleForm>
    </Create>
);

export const ApplicationShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField label="Název" source="name"/>
            <TextField label="Prostředí" source="environment"/>
            <TextField label="Verze" source="version"/>
            <TextField label="Cesta ke zdroji" source="pathToSource"/>
            <ReferenceField label="Autor" source="author.id" reference="author">
                <TextField source="name"/>
            </ReferenceField>
            <ReferenceField label="Typ aplikace" source="typeOfApplication_id" reference="typeOfApplication">
                <TextField source="category"/>
            </ReferenceField>
            <ReferenceArrayField label="Databáze" reference="databaze" source="database_id">
                <Datagrid>
                    <TextField label="Název" source="name"/>
                    <ShowButton/>
                </Datagrid>
            </ReferenceArrayField>
            <DateField label="Platnost Od" source="validityFrom"/>
            <DateField label="Platnost Do" source="validityTo"/>
            <RichTextField label="Popis" source="description"/>
        </SimpleShowLayout>
    </Show>
);
