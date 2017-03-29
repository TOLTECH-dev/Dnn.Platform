import { importExport as ActionTypes } from "../constants/actionTypes";
import util from "../utils";

export default function importExport(state = {
    jobs: [],
    portalId: -1,
    portals: [],
    totalJobs: 0,
    portalName: null,
    logoUrl: null,
    exportWizardStep: 0,
    importWizardStep: 0,
    exportJobId: -1,
    importPackages: [],
    selectedPackage: undefined,
    verificationSummary: undefined
}, action) {
    switch (action.type) {
        case ActionTypes.SELECTED_SITE:
            return {
                ...state,
                portalId: action.portalId
            };
        case ActionTypes.GO_TO_WIZARD_STEP:
            return {
                ...state,
                exportWizardStep: action.payload.wizardStep
            };
        case ActionTypes.RETRIEVED_PORTALS:
            return {
                ...state,
                portals: action.portals
            };
        case ActionTypes.RETRIEVED_JOBS:
            return {
                ...state,
                jobs: action.jobs,
                totalJobs: action.totalJobs,
                portalName: action.portalName
            };
        case ActionTypes.RETRIEVED_JOB_DETAILS:
            return {
                ...state,
                job: action.job
            };
        case ActionTypes.RETRIEVED_LAST_EXPORT_DATE:
            return {
                ...state,
                lastExportDate: action.lastExportDate
            };
        case ActionTypes.SUBMITTED_EXPORT_REQUEST:
            return {
                ...state,
                exportJobId: action.jobId
            };
        case ActionTypes.SUBMITTED_IMPORT_REQUEST:
            return {
                ...state,
                importJobId: action.jobId
            };
        case ActionTypes.RETRIEVED_IMPORT_PACKAGES:
            return {
                ...state,
                importPackages: action.importPackages
            };
        case ActionTypes.GO_TO_IMPORT_WIZARD_STEP:
            return {
                ...state,
                importWizardStep: action.importWizardStep
            };
        case ActionTypes.VERIFIED_IMPORT_PACKAGE:
            return {
                ...state,
                importSummary: action.importSummary
            };
        case ActionTypes.SELECTED_PACKAGE:
            return {
                ...state,
                selectedPackage: action.selectedPackage,
                importSummary: action.importSummary
            };
        default:
            return {
                ...state
            };
    }
}
