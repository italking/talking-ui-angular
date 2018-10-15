import {Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tk-multiselect',
  templateUrl: './tk.multiselect.component.html',
  styleUrls: ['./tk.multiselect.component.css']
})
export class TkMultiselectComponent implements OnInit {
  title = 'app';
  /**
   * 初始化的时候选择的值
   */
  selectedData = [];

  public selectedDataInited = false;
  @Input('selectedData')
  set setSelectedData(data: any[]) {
    if (this.selectedDataInited ) {
      return;
    }
    this.selectedDataInited = true;
    this.selectedData = data;
    this._initData();
  }
  /**
   * 初始化的值
   * {name：‘’，value：‘’}
   */
  data = [];
  public dataInited = false;
  @Input('data')
  set setData(data: any[]) {
    if ( this.dataInited ) {
      return;
    }
    this.dataInited = true;
    this.data = data;
    this._initData();
  }

  @Output() change: EventEmitter<any[]> = new EventEmitter<any[]>();

  public selected:   any[] = [];
  public unSelected: any[] = [];
  private  unSelectSearchTimer;
  private  selectSearchTimer;

  ngOnInit() {
    // this._initData();
  }

  private _initData() {
    this.selected   = [];
    this.unSelected =  [];
    /**
     * 初始化数据
     */
    for (let i = 0 ; i < this.data.length ; i++ ) {
      let s = false;
      for (let k = 0 ; k < this.selectedData.length ; k++ ) {
        if (this.data[i].value === this.selectedData[k] ) {
          s = true;
          break;
        }
      }
      if (s) {
        this.selected.push({name: this.data[i].name , value : this.data[i].value , show: true , checked : false , id: i });
      }
      this.unSelected.push({name: this.data[i].name , value : this.data[i].value , show: true , checked : false , selected : s , id: i });
    }
  }


  public unSelect(index , id , fire: boolean): void {
    this.selected.splice(index, 1);
    this.unSelected[id].selected = false;
    if (fire) {
      this._fireChangEvent();
    }
  }

  public select(index, fire: boolean): void {
    const o = this.unSelected[index];
    o.selected = true;
    this.selected[this.selected.length] = {name : o.name , value : o.value , checked : false , id : o.id , show : true};
    if (fire) {
      this._fireChangEvent();
    }
  }

  public unSelectedCheckChange($event , index ): void {
    this.unSelected[index].checked = $event.target.checked;
  }

  public changeSelect($event , index ): void {
    this.selected[index].checked = $event.target.checked;
  }

  public selectAll(): void {
    const self = this;
    let i = this.unSelected.length;
    while ( i --) {
      if (this.unSelected[i].checked) {
        this.select(i, false);
      }
    }
    this._fireChangEvent();
  }

  public unSelectAll(): void {
    const self = this;
    let i = this.selected.length;
    while ( i --) {
      if (this.selected[i].checked) {
        this.unSelect(null, i , false);
      }
    }
    this._fireChangEvent();
  }

  /**
   * 触发数据变化事件
   */
  private _fireChangEvent() {
    const  data = [];
    for (let i = 0 ; i < this.selected.length ; i++ ) {
      data.push(this.selected[i].value);
    }
    this.change.emit(data);
  }

  public unSelectedSearch($event) {
    const  value: string = $event.target.value;
    if (this.unSelectSearchTimer != null ) {
      this.unSelectSearchTimer.cancel();
    }
    this.unSelectSearchTimer = setTimeout(( ) => {

      if ( value && value.trim().length > 0 ) {
        for (let i = 0 ; i < this.unSelected.length ; i++ ) {
          if (this.unSelected[i].name.indexOf(value) > -1 ) {

            this.unSelected[i].show = true;
          } else {
            this.unSelected[i].show = false;
          }
        }
      } else {
        for (let i = 0 ; i < this.unSelected.length ; i++ ) {
          this.unSelected[i].show = true;
        }
      }

      this.unSelectSearchTimer = null;
    }, 200);
  }
  public selectedSearch($event) {
    const  value: string = $event.target.value;
    if (this.selectSearchTimer != null ) {
      this.selectSearchTimer.cancel();
    }
    this.selectSearchTimer = setTimeout(( ) => {
      if ( value && value.trim().length > 0 ) {
        for (let i = 0 ; i < this.selected.length ; i++ ) {
          if (this.selected[i].name.indexOf(value) > -1 ) {

            this.selected[i].show = true;
          } else {
            this.selected[i].show = false;
          }
        }
      } else {
        for (let i = 0 ; i < this.selected.length ; i++ ) {
          this.selected[i].show = true;
        }
      }
      this.selectSearchTimer = null;
    }, 500);
  }
}
