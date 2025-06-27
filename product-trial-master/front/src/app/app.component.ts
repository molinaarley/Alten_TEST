import {
  Component, EnvironmentInjector, OnInit, effect, inject, runInInjectionContext,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { CartService } from "./shared/data-access/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
})
export class AppComponent  {
  title = "ALTEN SHOP";
  cartCount = 0;
  private cartService = inject(CartService);
  private injector = inject(EnvironmentInjector);

  constructor() {

    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.cartCount = this.cartService.count();
      });
    });

  }



}

