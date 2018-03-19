import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';


@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    MainBoardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SplitPaneModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
