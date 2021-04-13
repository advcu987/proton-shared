import { Calendar } from './Calendar';
import { VcalVeventComponent } from './VcalModel';

export enum EXPORT_STEPS {
    WARNING,
    EXPORTING,
    FINISHED,
    FETCHING_DEPENDENCIES,
    ERROR_FETCHING_DEPENDENCIES,
}

export interface ExportCalendarModel {
    step: EXPORT_STEPS;
    totalProcessed: VcalVeventComponent[];
    totalToProcess: number;
    calendar: Calendar;
}
