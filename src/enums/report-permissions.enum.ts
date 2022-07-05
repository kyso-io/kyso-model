export enum ReportPermissionsEnum {
  READ = 'KYSO_IO_READ_REPORT',
  CREATE = 'KYSO_IO_CREATE_REPORT',
  EDIT = 'KYSO_IO_EDIT_REPORT',
  EDIT_ONLY_MINE = 'KYSO_IO_EDIT_REPORT_ONLY_MINE',
  DELETE = 'KYSO_IO_DELETE_REPORT',
  ADMIN = 'KYSO_IO_ADMIN_REPORT',
  GLOBAL_PIN = 'KYSO_IO_REPORT_GLOBAL_PIN',
}

export const reportPermissionsEnumList: ReportPermissionsEnum[] = [
  ReportPermissionsEnum.READ,
  ReportPermissionsEnum.CREATE,
  ReportPermissionsEnum.EDIT,
  ReportPermissionsEnum.EDIT_ONLY_MINE,
  ReportPermissionsEnum.DELETE,
  ReportPermissionsEnum.ADMIN,
  ReportPermissionsEnum.GLOBAL_PIN,
];
