import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

var misc: any = {
  sidebar_mini_active: true,
};

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
  dev?: boolean;
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Home",
    type: "link",
    icontype: "ni-shop text-primary",
    isCollapsed: true,
  },
  // {
  //   path: "/customers",
  //   title: "Customer",
  //   type: "link",
  //   icontype: "ni-bag-17 text-orange",
  // },
  {
    path: "/forms",
    title: "Forms",
    type: "link",
    icontype: "ni-bag-17 text-orange",
  },
  // {
  //   path: "/product-categories",
  //   title: "Products Categories",
  //   type: "link",
  //   icontype: "ni-bag-17 text-orange",
  // },
  {
    path: "/users",
    title: "User",
    type: "link",
    icontype: "ni-bag-17 text-orange",
  }
  // {
  //   path: "/payments",
  //   title: "Payments",
  //   type: "link",
  //   icontype: "ni-credit-card text-pink",
  //   dev: true,
  // },
  // {
  //   path: "/sales",
  //   title: "Sales",
  //   type: "link",
  //   icontype: "ni-chart-bar-32 text-default",
  //   dev: true,
  // },
  // {
  //   path: "/st-sales",
  //   title: "Sales",
  //   type: "link",
  //   icontype: "ni-cart text-primary",
  //   dev: true,
  // },
  // {
  //   path: "/sales-return",
  //   title: "Sales Return",
  //   type: "link",
  //   icontype: "ni-delivery-fast text-green",
  //   dev: true,
  // },
  // {
  //   path: "/receipts",
  //   title: "Receipts",
  //   type: "link",
  //   icontype: "ni-book-bookmark text-primary",
  // },
  // {
  //   path: "/cash-payments",
  //   title: "Cash Payments",
  //   type: "link",
  //   icontype: "ni-money-coins text-default",
  //   dev: true,
  // },
  // {
  //   path: "/cash-receipts",
  //   title: "Cash Receipts",
  //   type: "link",
  //   icontype: "ni-paper-diploma text-red",
  //   dev: true,
  // },
  // {
  //   path: "/jounral-entries",
  //   title: "Jounral Entries",
  //   type: "link",
  //   icontype: "ni-laptop text-pink",
  //   dev: true,
  // },
  // {
  //   path: "/reports",
  //   title: "Reports",
  //   type: "link",
  //   icontype: "ni-chart-pie-35 text-info",
  // },

  // {
  //   path: "/dashboards",
  //   title: "Dashboards",
  //   type: "sub",
  //   icontype: "ni-shop text-primary",
  //   isCollapsed: true,
  //   children: [
  //     { path: "dashboard", title: "Dashboard", type: "link" },
  //     { path: "alternative", title: "Alternative", type: "link" },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/examples",
  //   title: "Examples",
  //   type: "sub",
  //   icontype: "ni-ungroup text-orange",
  //   collapse: "examples",
  //   isCollapsed: true,
  //   children: [
  //     { path: "pricing", title: "Pricing", type: "link" },
  //     { path: "login", title: "Login", type: "link" },
  //     { path: "register", title: "Register", type: "link" },
  //     { path: "lock", title: "Lock", type: "link" },
  //     { path: "timeline", title: "Timeline", type: "link" },
  //     { path: "profile", title: "Profile", type: "link" },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/components",
  //   title: "Components",
  //   type: "sub",
  //   icontype: "ni-ui-04 text-info",
  //   collapse: "components",
  //   isCollapsed: true,
  //   children: [
  //     { path: "buttons", title: "Buttons", type: "link" },
  //     { path: "cards", title: "Cards", type: "link" },
  //     { path: "grid", title: "Grid", type: "link" },
  //     { path: "notifications", title: "Notifications", type: "link" },
  //     { path: "icons", title: "Icons", type: "link" },
  //     { path: "typography", title: "Typography", type: "link" },
  //     {
  //       path: "multilevel",
  //       isCollapsed: true,
  //       title: "Multilevel",
  //       type: "sub",
  //       collapse: "multilevel",
  //       children: [
  //         { title: "Third level menu" },
  //         { title: "Just another link" },
  //         { title: "One last link" },
  //       ],
  //     },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/forms",
  //   title: "Forms",
  //   type: "sub",
  //   icontype: "ni-single-copy-04 text-pink",
  //   collapse: "forms",
  //   isCollapsed: true,
  //   children: [
  //     { path: "elements", title: "Elements", type: "link" },
  //     { path: "components", title: "Components", type: "link" },
  //     { path: "validation", title: "Validation", type: "link" },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/tables",
  //   title: "Tables",
  //   type: "sub",
  //   icontype: "ni-align-left-2 text-default",
  //   collapse: "tables",
  //   isCollapsed: true,
  //   children: [
  //     { path: "tables", title: "Tables", type: "link" },
  //     { path: "sortable", title: "Sortable", type: "link" },
  //     { path: "ngx-datatable", title: "Ngx Datatable", type: "link" },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   type: "sub",
  //   icontype: "ni-map-big text-primary",
  //   collapse: "maps",
  //   isCollapsed: true,
  //   children: [
  //     { path: "google", title: "Google Maps", type: "link" },
  //     { path: "vector", title: "Vector Map", type: "link" },
  //   ],
  //   dev: true,
  // },
  // {
  //   path: "/widgets",
  //   title: "Widgets",
  //   type: "link",
  //   icontype: "ni-archive-2 text-green",
  //   dev: true,
  // },
  // {
  //   path: "/charts",
  //   title: "Charts",
  //   type: "link",
  //   icontype: "ni-chart-pie-35 text-info",
  //   dev: true,
  // },
  // {
  //   path: "/calendar",
  //   title: "Calendar",
  //   type: "link",
  //   icontype: "ni-calendar-grid-58 text-red",
  //   dev: true,
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public isProduction = environment.production;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem).filter(
      (menuItem) => !("dev" in menuItem) || menuItem.dev !== this.isProduction
    );
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }
  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  minimizeSidebar() {
    const sidenavToggler =
      document.getElementsByClassName("sidenav-toggler")[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
