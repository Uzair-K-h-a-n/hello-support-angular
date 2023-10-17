import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
// import { StSalesComponent } from './pages/st-sales/st-sales.component';
// import { SalesReturnComponent } from './pages/sales-return/sales-return.component';
// import { CashPaymentsComponent } from './pages/cash-payments/cash-payments.component';
// import { CashReceiptsComponent } from './pages/cash-receipts/cash-receipts.component';
import { FormsComponent } from './pages/formlist/form-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './pages/customer/customer.component';
import { AddEditCustomerComponent } from './pages/customer/add-edit-customer/add-edit-customer.component';
import { DynamicTableComponent } from './pages/dynamic-table/dynamic-table.component';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LandingLayoutModule } from 'src/app/layouts/landing-layout/landing-layout.module';
import { UserComponent } from './pages/user/user.component';
import { AddEditUserComponent } from './pages/user/add-edit-user/add-edit-user.component';
import {AffordableMedicarePlansComponent} from './pages/insurance-Components/affordable-medicare-plans/affordable-medicare-plans.component';
import { LifeInsuranceComponent } from './pages/insurance-Components/life-insurance/life-insurance.component';
import { AutoInsuranceComponent } from './pages/insurance-Components/auto-insurance/auto-insurance.component';
import { HeathInsuranceComponent } from './pages/insurance-Components/heath-insurance/heath-insurance.component'
@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		ComponentsModule,
		RouterModule,
		BsDropdownModule.forRoot(),
		AppRoutingModule,
		ToastrModule.forRoot( {positionClass: 'toast-top-center', enableHtml: true, // Enable HTML for the toast message
		preventDuplicates: true, // Prevent duplicate toasts
		closeButton: false, toastClass: 'ngx-toastr-custom-class'}),
		CollapseModule.forRoot(),
		TagInputModule,
		LandingLayoutModule,
		NgxDatatableModule,
		NgxPrintModule,
		NgbModule,
		ReactiveFormsModule,
		BsDatepickerModule.forRoot(),
	],
	declarations: [
		AppComponent,
		AdminLayoutComponent,
		AuthLayoutComponent,
		// StSalesComponent,
		// SalesReturnComponent,
		// CashPaymentsComponent,
		// CashReceiptsComponent,
		FormsComponent,
		CustomerComponent,
		AddEditCustomerComponent,
		DynamicTableComponent,
		UserComponent,
		AddEditUserComponent,
		AffordableMedicarePlansComponent,
		LifeInsuranceComponent,
		AutoInsuranceComponent,
		HeathInsuranceComponent
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
	entryComponents: [
		AddEditCustomerComponent,
		AddEditUserComponent,
	],
})
export class AppModule {}
