import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CustomerComponent } from './pages/customer/customer.component';
import {FormsComponent} from './pages/formlist/form-list.component'
import { UserComponent } from './pages/user/user.component';
import { AffordableMedicarePlansComponent } from './pages/insurance-Components/affordable-medicare-plans/affordable-medicare-plans.component';
import { LifeInsuranceComponent } from './pages/insurance-Components/life-insurance/life-insurance.component';
import { HeathInsuranceComponent } from './pages/insurance-Components/heath-insurance/heath-insurance.component';
import { AutoInsuranceComponent } from './pages/insurance-Components/auto-insurance/auto-insurance.component';
import { AuthGuard } from './core/guards/auth.guard';
 import {AdminAuthGuard} from './core/guards/admin-auth.guard'
import { AffordableMedicarePlansPublicComponent } from './pages/insurance-components-public/affordable-medicare-plans-public/affordable-medicare-plans-public.component';
import { HeathInsurancePublicComponent } from './pages/insurance-components-public/heath-insurance-public/heath-insurance-public.component';
import { AutoInsurancePublicComponent } from './pages/insurance-components-public/auto-insurance-public/auto-insurance-public.component';
import { LifeInsurancePublicComponent } from './pages/insurance-components-public/life-insurance-public/life-insurance-public.component';
import { MVACompensationComponent } from './pages/insurance-Components/mva-compensation/mva-compensation.component';
import { MVACompensationPublicComponent } from './pages/insurance-components-public/mva-compensation-public/mva-compensation-public.component';
import { CrmDataSubmitComponent } from './pages/insurance-components-public/crm-data-submit/crm-data-submit.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: AdminLayoutComponent,
		children: [
			{
				path: '',
				canActivate: [AuthGuard],
				component: FormsComponent,
			},
			{
				path: 'forms',
				canActivate: [AuthGuard],
				component: FormsComponent,
			},
			{
				path: 'users',
				canActivate: [AdminAuthGuard],
				component: UserComponent,
			},
			{
				path: 'examples',
				loadChildren: './pages/examples/examples.module#ExamplesModule',
			},
		],
	},
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: 'auth',
				loadChildren:
					'./layouts/auth-layout/auth-layout.module#AuthLayoutModule',
			},
		],
	},
	{
		path:'affordable-medicare',
		canActivate: [AuthGuard],
		component:AffordableMedicarePlansComponent
	},
	{
		path:'health-insurance',
		canActivate: [AuthGuard],
		component:HeathInsuranceComponent
	},
	{
		path:'auto-insurance',
		canActivate: [AuthGuard],
		component:AutoInsuranceComponent
	},
	{
		path:'life-insurance',
		canActivate: [AuthGuard],
		component:LifeInsuranceComponent
	},
	{
		path:'mva-compensation',
		canActivate: [AuthGuard],
		component:MVACompensationComponent
	},
	{
		path:'affordable-medicare-public',
		component:AffordableMedicarePlansPublicComponent
	},
	{
		path:'health-insurance-public',
		component:HeathInsurancePublicComponent
	},
	{
		path:'auto-insurance-public',
		component:AutoInsurancePublicComponent
	},
	{
		path:'life-insurance-public',
		component:LifeInsurancePublicComponent
	},
	{
		path:'mva-compensation-public',
		component:MVACompensationPublicComponent
	},
	{
		path:'aca-data-submit-public',
		component:CrmDataSubmitComponent
	},
	{
		path: '**',
		redirectTo: 'forms',
	},
];

@NgModule({
	imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
