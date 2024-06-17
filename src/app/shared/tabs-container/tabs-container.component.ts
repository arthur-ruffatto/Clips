import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  ngAfterContentInit() {
    const activeTab = this.tabs.filter(tab => tab.active);

    if (!activeTab || activeTab.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);

    tab.active = true;

    return false; //this return is to prevent the default behavior of the component
  }

  getTabClass(tab: TabComponent) {
    return {
      'hover:hover:text-indigo-400' : !tab.active,
      'hover:text-white bg-indigo-400' : tab.active
    }
  }
}
