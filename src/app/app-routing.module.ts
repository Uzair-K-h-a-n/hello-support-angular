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

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: AdminLayoutComponent,
		children: [
			{
				path: 'forms',
				canActivate: [AuthGuard],
				component: FormsComponent,
			},
			{
				path: 'users',
				canActivate: [AuthGuard],
				component: UserComponent,
			},
			{
				path: 'customers',
				canActivate: [AuthGuard],
				component: CustomerComponent,
			},


			{
				path: 'dashboard',
				canActivate: [AuthGuard],
				loadChildren:
					'./pages/dashboards/dashboards.module#DashboardsModule',
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
		path: '**',
		redirectTo: 'dashboard',
	},
];

@NgModule({
	imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
