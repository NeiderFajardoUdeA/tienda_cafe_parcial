import { Component, NgModule } from "@angular/core";
import path from "path";
import { CafeComponent } from "./cafe.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        component: CafeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CafeRoutingModule { }