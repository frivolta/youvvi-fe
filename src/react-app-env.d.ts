/// <reference types="react-scripts" />
import * as ReactPdf from '@react-pdf/renderer'
declare module "@react-pdf/renderer" {
    interface Style {
        overflow: any;
    }
}