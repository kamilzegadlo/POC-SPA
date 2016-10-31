export interface Widget {
    placeholderName: string;
    componentName: string;
    componentSettings?: any;
    childWidgets?: Widget[];
}