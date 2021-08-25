import { ExamItemDto } from '../dtos/taskDto';

/*
 * @Description: 任务管理vuex dto
 * @Date: 2021-08-10 09:50:58
 * @LastEditTime: 2021-08-11 09:41:48
 */
export interface TaskState {
  examItems: ExamItemDto[];
  examItemsLoaded: boolean;
}
