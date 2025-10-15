import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactListPage } from './pages/contact-list-page/contact-list-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { onlyPublicGuard } from './guards/only-public-guard-guard';
import { onlyUserGuard } from './guards/only-user-guard-guard';
import { RegisterPage } from './register/register';
import { NewEditContact } from './new-edit-contact/new-edit-contact';
import { GroupsListPage } from './groups-list-page/groups-list-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
export const routes: Routes = [
    {
        path:"login",
        component: LoginPage,
        canActivate: [onlyPublicGuard]
    },


    {
        path:"register",
        component: RegisterPage,
        canActivate: [onlyPublicGuard]
        
    },

    {
        // Path vacío se abre cuando la página no tiene url más que localhost
        path:"",
        component: LoggedLayout,
        canActivateChild: [onlyUserGuard],
        children: [
            {
                path:"",
                component: ContactListPage
            },
            {
                path: "contacts/new",
                component: NewEditContact
            },{

               path: "groups",
                component: GroupsListPage
            },
            {path: "contacts/:idContacto/edit",
                component: NewEditContact
            },
             {
                path: "contacts/:idContacto",
                component: ContactDetailsPage
            },
        ]
    },
];
