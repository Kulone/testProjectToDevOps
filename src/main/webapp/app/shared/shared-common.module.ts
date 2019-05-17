import { NgModule } from '@angular/core';

import { TestProjectToDevOpsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestProjectToDevOpsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestProjectToDevOpsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestProjectToDevOpsSharedCommonModule {}
