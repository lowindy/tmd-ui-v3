/*
 * @Description: ssoDto
 * @Date: 2021-08-12 16:26:43
 * @LastEditTime: 2021-08-12 16:33:04
 */
export interface WorkBrenchDto {
  code: string;
  data: { contact: string; isDisplay: boolean; workStations: Array<WorkStationDto> };
  info: string;
  message: string;
  status: number;
}
export interface WorkStationDto {
  authority: boolean;
  pageUrl: string;
  workStationId: number;
  workStationName: string;
}
