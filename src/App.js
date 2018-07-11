import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authClient from './authClient';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate } from './Resource/posts';
import { UserList } from './Resource/users';
import { EmployeeList } from './Resource/employee';
import { ApplicationList, ApplicationEdit, ApplicationCreate, ApplicationShow } from './Resource/application';
import { AuthorsList } from './Resource/authors';
import { TypeOfApplicationList } from './Resource/typeOfApplication';
import { DatabaseList } from './Resource/database';
import { DowntimeList } from './Resource/downtime';
import { ServerList } from './Resource/server';
import { ApplicationServerList } from './Resource/applicationServer';

const App = () => (
    <Admin authClient={authClient} title="Nástěnka" dashboard={Dashboard} dataProvider={simpleRestProvider('http://localhost:8080/api')}>
        <Resource options={{ label: 'Zaměstnanci' }} name="employee" list={EmployeeList} icon={UserIcon} />
        <Resource options={{ label: 'Aplikace' }} name="application" list={ApplicationList} create={ApplicationCreate}
                  edit={ApplicationEdit} show={ApplicationShow} remove={Delete} icon={UserIcon} />
        <Resource options={{ label: 'Autoři' }} name="author" list={AuthorsList} icon={UserIcon} />
        <Resource options={{ label: 'Typ aplikace' }} name="typeOfApplication" list={TypeOfApplicationList} icon={UserIcon} />
        <Resource options={{ label: 'Databáze' }} name="databaze" list={DatabaseList} icon={UserIcon} />
        <Resource options={{ label: 'Výpadky' }} name="downtime" list={DowntimeList} icon={UserIcon} />
        <Resource options={{ label: 'Servery' }} name="server" list={ServerList} icon={UserIcon} />
        <Resource options={{ label: 'Aplikační servery' }} name="applicationServer" list={ApplicationServerList} icon={UserIcon} />
    </Admin>
);

export default App;
