import { Component, ElementRef, OnInit, ViewChild, ViewRef } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-pdfreader',
  templateUrl: './pdfreader.component.html',
  styleUrls: ['./pdfreader.component.scss']
})
export class PdfreaderComponent implements OnInit {
  @ViewChild('viewer') viewRef: ElementRef = new ElementRef(null)
  // copiar core y ui de nodemodules
  constructor() {

    // pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../../../assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    }, this.viewRef.nativeElement).then(instance => {

    })
  }
}
