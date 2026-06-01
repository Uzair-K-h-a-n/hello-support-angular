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
import { ContinuousGlucoseMonitoringPublicComponent } from './pages/insurance-components-public/continuous-glucose-monitoring-public/continuous-glucose-monitoring-public.component';
import { LifeInsurancePublicComponent } from './pages/insurance-components-public/life-insurance-public/life-insurance-public.component';
import { MVACompensationComponent } from './pages/insurance-Components/mva-compensation/mva-compensation.component';
import { MVACompensationPublicComponent } from './pages/insurance-components-public/mva-compensation-public/mva-compensation-public.component';
import { CrmDataSubmitComponent } from './pages/insurance-components-public/crm-data-submit/crm-data-submit.component';
import { BlindTransferPingComponent } from './pages/forms/blind-transfer-ping/blind-transfer-ping.component';
import { P6MedTrbRevComponent } from './pages/forms/p6-med-trb-rev/p6-med-trb-rev.component';
import { DebtSettlementSolutionComponent } from './pages/insurance-Components/debt-settlementsolution/debt-settlementsolution.component';
import { ContinuousGlucoseMonitoringComponent } from './pages/insurance-Components/continuous-glucose-monitoring/continuous-glucose-monitoring.component';
import { DebtSettlementSolutionPublicComponent } from './pages/insurance-components-public/debt-settlementsolution-public/debt-settlementsolution-public.component';
import { MedicareCmsComponent } from './pages/insurance-Components/medicare-cms/medicare-cms.component';
import { MedicareCmsPublicComponent } from './pages/insurance-components-public/medicare-cms-public/medicare-cms-public.component';
import { ACACPLAgentAvailabilityCheckComponent } from './pages/insurance-components-public/aca_cpl_agent_availability_check/aca_cpl_agent_availability_check.component';
BlindTransferPingComponent
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
		path:'continuous-glucose-monitoring',
		canActivate: [AuthGuard],
		component:ContinuousGlucoseMonitoringComponent
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
		path:'debt-settlementsolution',
		canActivate: [AuthGuard],
		component:DebtSettlementSolutionComponent
	},
	{
		path:'medicare-cms',
		canActivate: [AuthGuard],
		component:MedicareCmsComponent
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
		path:'continuous-glucose-monitoring-public',
		component:ContinuousGlucoseMonitoringPublicComponent
	},
	{
		path:'aca_cpl_agent_availability_check',
		component: ACACPLAgentAvailabilityCheckComponent
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
		path:'debt-settlementsolution-public',
		component:DebtSettlementSolutionPublicComponent
	},
	{
		path:'medicare-cms-public',
		component:MedicareCmsPublicComponent
	},
	{
		path:'aca-data-submit-public',
		component:CrmDataSubmitComponent
	},
	{
		path:'ACA-transfer-TDMT8-ping',
		component:BlindTransferPingComponent

	},
	{
		path:'p6-MED-TRB-REV',
		component:P6MedTrbRevComponent
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
