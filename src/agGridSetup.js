import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";

import { SparklinesModule } from "ag-grid-enterprise";
import { AgChartsCommunityModule } from "ag-charts-community";

// ✅ Register all needed modules
ModuleRegistry.registerModules([
  AllCommunityModule,
  SparklinesModule.with(AgChartsCommunityModule),
]);
